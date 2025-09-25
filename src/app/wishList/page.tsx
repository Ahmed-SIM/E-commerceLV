"use client"

import React, { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { getAllWishListProducts, removeItemToWishList } from './wishList.servise'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner'

type WishItemType = {
  _id: string
  imageCover: string
  title: string
  price: number
}

export default function WishListPage() {
  const [wishListArray, setWishListArray] = useState<WishItemType[]>([])
  const [loading, setLoading] = useState(true)

  async function handleGetWishListItems() {
    setLoading(true)
    const myWishListArray = await getAllWishListProducts()
    setWishListArray(myWishListArray || [])
    setLoading(false)
  }

  useEffect(() => {
    handleGetWishListItems()
  }, [])

  async function handleRemoveItem(productId: string) {
    const isRemoved = await removeItemToWishList(productId)
    if (isRemoved) {
      toast.success("Removed successfully", { position: "top-center" })
      setWishListArray(prev => prev.filter(item => item._id !== productId))
    } else {
      toast.error("Failed to remove item", { position: "top-center" })
    }
  }

  if (loading) {
    return (
      <div className='h-screen flex justify-center items-center'>
        <i className='fa-solid fa-spinner fa-spin fa-10x text-blue-300'></i>
      </div>
    )
  }

  if (!loading && wishListArray.length === 0) {
    return (
      <div className='h-screen flex flex-col justify-center items-center text-gray-600'>
        <i className="fa-regular fa-heart text-6xl mb-4"></i>
        <p className='text-2xl'>Your Wish List is empty</p>
      </div>
    )
  }

  return (
    <div>
      <div className='w-full mx-auto'>
        <h1 className='text-3xl text-blue-600 text-center m-5'>My Wish List</h1>
      </div>

      <div className='w-1/2 mx-auto'>
        <Table>
          <TableCaption>A list of your Wish lists.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/2">Product</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {wishListArray.map((wishItem) => (
              <TableRow key={wishItem._id}>
                <TableCell className="font-medium">
                  <div>
                    <img
                      src={wishItem.imageCover}
                      alt={wishItem.title || "product"}
                      className='w-full max-w-[300px] max-h-64 object-contain'
                    />
                    <h3>{wishItem.title}</h3>
                  </div>
                </TableCell>
                <TableCell className='text-3xl text-green-500'>
                  {wishItem.price} LE
                </TableCell>
                <TableCell className="text-right">
                  <Button onClick={() => handleRemoveItem(wishItem._id)}>
                    <i className="fa-solid fa-trash" style={{ color: "#eb0000" }}></i>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
