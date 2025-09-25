// 'use client'

// import { createContext, ReactNode, useState } from "react"

// // Define the context type for better TypeScript support
// interface WishListContextType {
//   isAddedToWishList: boolean;
//   updateIsAddedToWishList: (value: boolean) => void;
// }

// export const WishListContext = createContext<WishListContextType>({ 
//   isAddedToWishList: false, 
//   updateIsAddedToWishList: () => {} 
// });

// export function WishListContextProvider({ children }: { children: ReactNode }) {
//   const [isAddedToWishList, setIsAddedToWishList] = useState(false);
  
//   function updateIsAddedToWishList(isAdded: boolean) {
//     setIsAddedToWishList(isAdded);
//   }
  
//   return (
//     <WishListContext.Provider value={{ isAddedToWishList, updateIsAddedToWishList }}>
//       {children}
//     </WishListContext.Provider>
//   );
// }