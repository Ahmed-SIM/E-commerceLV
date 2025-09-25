// 'use client'

// // import { WishListContext } from '@/_services/WishListContext'
// import { removeItemToWishList } from '@/app/wishList/wishList.servise'
// import { Button } from '@/components/ui/button'
// import React, { useContext } from 'react'
// import { toast } from 'sonner'


// export default function RemoveFromWishListBtn({productId}:{productId:string}) {
//   //  const {updateIsAddedToWishList}=useContext(WishListContext)
  
//   async function handleRemoveFromWishList(){
    
//    const isRemoved = await removeItemToWishList(productId)
//    if(isRemoved){
//         toast.success('removed successfully',{position:'top-center'})
// // updateIsAddedToWishList(false)
// // console.log("removed Ya 3mmm")

//    } else{
//         toast.error('error happened while removing to the wish List',{position:'top-center'})

//    }

//   }
//     return (
//     <div    onClick={handleRemoveFromWishList}>
//       <Button  ><i className="fa-solid fa-trash cursor-pointer"></i></Button>
//     </div>
//   )
// }
