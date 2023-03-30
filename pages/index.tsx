import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='h-screen bg-home-0 text-white flex items-center'>
      <div className='flex justify-center items-center w-full flex-col'>
        <div className=' text-white grid text-center justify-items-center font-bold'>
          <h2 className='px-9 sm:px-32 mt-grid items-center pt-20 sm:pt-36 sm:text-4xl text-2xl '>
            ¡Bienvenidos a nuestra aplicación de gestión de comercios!
          </h2>
          <p className='px-9 sm:px-16 sm:text-2xl sm:mt-11 mt-6 font-semibold'>
            La cual te permite manejar tu inventario, ventas y órdenes de compra
            desde tu dispositivo móvil o computadora.
          </p>
          <Image
            src='/bag.svg'
            alt='Bag'
            width={80}
            height={120}
            className='mt-14 w-28 sm:w-52'
          />
          <h3 className='text-xl mt-20 mb-5'>¿Qué quieres hacer?</h3>
          <div className='grid font-bold text-lg sm:text-2xl gap-6 sm:gap-11 sm:mt-7 w-7/12 text-[#FF5D67]'>
            <Link legacyBehavior href={'/login'}>
              <a className='bg-[#29282F] py-3 sm:px-12 rounded-3xl'>
                Iniciar Sesión
              </a>
            </Link>
            <Link legacyBehavior href='/registro'>
              <a className='bg-[#29282F] py-3 sm:px-12 rounded-3xl'>
                Registrarse
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
