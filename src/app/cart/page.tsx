

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CartReSponseType, ItemType } from '@/types/cart.types'
import { getUserCart } from '@/_services/cart.services'
import ChangeCountBtn from './ChangeCountBtn'
import Link from 'next/link'
import RemoveItemBtn from './RemoveItemBtn'


export default async function CartPage() {
  
  async function handleGetUserCart():Promise<CartReSponseType>{
    const res=  await getUserCart()
    console.log("cart page res",res)
    return res;
  }  
 
  const {numOfCartItems ,products , totalCartPrice} =await handleGetUserCart()
  
  return (
    <div className="p-6 max-w-6xl mx-auto space-y-8">
      
      <h1 className="text-3xl font-bold text-gray-800">Hi cart</h1>

      <div className='w-full flex flex-col md:flex-row justify-between items-center bg-white shadow-md rounded-2xl p-4 border'>
        <div className="space-y-1">
          <h2 className="text-xl font-semibold text-gray-700">
            you will pay: <span className="text-green-600">{totalCartPrice} LE</span>
          </h2>
          <h3 className="text-gray-500">number of items: {numOfCartItems}</h3>
        </div>

        <div className="flex gap-3 mt-4 md:mt-0">
          <Link href={'/cart/payment'} >
            <Button className='cursor-pointer rounded-xl px-6 py-2 shadow-md hover:scale-105 transition' >
              Pay
            </Button>
          </Link>

          <Button className='cursor-pointer rounded-xl px-6 py-2 shadow-md hover:scale-105 transition' variant={'destructive'} >
            Remove All
          </Button>
        </div>
      </div>

      <div className='w-full md:w-3/4 mx-auto bg-white shadow-lg rounded-2xl overflow-hidden border'>
        <Table>
          <TableCaption className="text-gray-500">A list of your recent invoices.</TableCaption>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <TableHead className="w-1/2 text-gray-700">Product</TableHead>
              <TableHead className="text-gray-700">Price</TableHead>
              <TableHead className="text-gray-700">Count</TableHead>
              <TableHead className="text-right text-gray-700">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {/*row {the repeated element}  */}
            {products.map((item:ItemType)=> 
              <TableRow key={item._id} className="hover:bg-gray-50 transition">
                <TableCell className="font-medium">
                  <div className="flex flex-col md:flex-row gap-4 items-start">
                    <img 
                      src={item.product.imageCover} 
                      alt={item.product.title} 
                      className='w-32 h-32 object-cover rounded-xl border'
                    />
                    <h3 className="font-semibold text-gray-800">{item.product.title}</h3>
                  </div>
                </TableCell>
                <TableCell className="text-gray-600 font-medium">{item.price}</TableCell>
                <TableCell className="text-gray-600">{item.count}</TableCell>
                <TableCell className="text-right h-[200px]">
                  <div>
                    <div className='flex gap-2 items-center'>
                      {/* <Button className='cursor-pointer' ></Button> */}
                      <ChangeCountBtn isIncrement id={item.product.id} newCount={item.count + 1} />
                      <Input className='p-0.5 w-12 h-10 text-center border rounded-lg' value={item.count} readOnly></Input>
                      {/* <Button className='cursor-pointer' ></Button> */}
                      <ChangeCountBtn id={item.product.id} newCount={item.count - 1} />
                    </div>
                    <RemoveItemBtn id={item.product.id} />
                  </div>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* {products.map(product=> <h2 key={product}>HELLO</h2>)} */}
  
    </div>
  )
}
