// L sessionProvider should be at client component
'use client'
import { CartContext } from '@/_services/CartContext'
import { SessionProvider } from 'next-auth/react'
import React, { ReactNode } from 'react'

export default function MySessionProvider( {children}:{children:ReactNode}) {
  return (
    <SessionProvider>
      
      {children}
     

    </SessionProvider>
  )
}
