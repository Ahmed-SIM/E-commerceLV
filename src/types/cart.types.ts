import { ProductType } from "@/app/_components/_interfaces/interfaces"

export type ItemType={
count:number,
_id:string,
price:number,
product:ProductType

}


export type  CartReSponseType ={
    numOfCartItems:number ,
    products:ItemType[] ,
     totalCartPrice:number,
     cartId:string 
}