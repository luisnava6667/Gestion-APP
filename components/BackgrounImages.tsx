import React from 'react'
import Image from 'next/image'
export const BackgrounImages = () => {
  return (
    <>
      <div className='flex justify-around absolute h-screen '>
        <div className='grid content-between'>
          <Image
            src='./percent.svg'
            alt='check'
            width={400}
            height={400}
            // className='mt-[200px]'
          />
          <Image
            src='./barcode.svg'
            alt='barcode'
            width={400}
            height={400}
            // className='mt-[80px]'
          />
        </div>
        <div className='grid content-between'>
          <Image
            src='./check.svg'
            alt='check'
            width={300}
            height={400}
            // className='mt-[600px]'
          />
          <Image
            src='./shop.svg'
            alt='shop'
            width={400}
            height={400}
            // className='mt-[10px]'
          />
        </div>
      </div>
    </>
  )
}
