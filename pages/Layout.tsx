import React from 'react'
import LayoutProps from '@/types/LayoutProps'
// import NavBar from '@/components/NavBar'
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='md:flex min-h-screen'>
      {/* <NavBar /> */}
      <main className='p-6 flex w-full'> {children}</main>
    </div>
  )
}

export default Layout
