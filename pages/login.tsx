/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react'
import Link from 'next/link'
import { FiLogIn } from 'react-icons/fi'
import { RiLockPasswordFill } from 'react-icons/ri'
import { AiOutlineUser } from 'react-icons/ai'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { BiArrowBack } from 'react-icons/bi'
import { useAuthStore } from '@/hooks/useAuthStore'
import { useState } from 'react'
const login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()
  const { startLogin } = useAuthStore()
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    startLogin({ email, password })
  }
  return (
    <div className='h-screen bg-home-0 text-white flex items-center'>
      <button
        className='absolute top-5 left-3 flex items-center gap-2 hover:text-[#ea7c69] transition-all'
        onClick={() => router.back()}>
        <BiArrowBack size={30} className='text-2xl uppercase' />
        <p className='text-lg font-bold uppercase'>Volver</p>
      </button>
      <div className='flex justify-center items-center w-full flex-col'>
        <h2 className='mb-4 text-4xl font-bold'>Iniciar de Sesion</h2>
        <Image
          src='/cart.svg'
          alt='carrito'
          width={80}
          height={120}
          className='mt-5'
        />
        <form
          action=''
          className='w-8/12 max-w-md mt-5 '
          onSubmit={handleSubmit}>
          <div className='grid'>
            <label htmlFor='' className='text-xl font-bold mb-2'>
              Usuario
            </label>
            <div className='relative'>
              <input
                type='text'
                name='username'
                placeholder='Username'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='bg-[#2D303E] py-2 rounded-lg px-3 w-full bg-lock'
              />
              <AiOutlineUser className='text-gray-400 absolute top-1/2 transform -translate-y-1/2 right-3' />
            </div>
          </div>
          <div className='grid mt-5'>
            <label htmlFor='' className='text-xl font-bold mb-2'>
              Password
            </label>
            <div className='relative'>
              <input
                type='password'
                name='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='bg-[#2D303E] py-2 rounded-lg px-3 w-full bg-lock'
              />
              <RiLockPasswordFill className='text-gray-400 absolute top-1/2 transform -translate-y-1/2 right-3' />
            </div>
            <Link href='' className='mt-2 hover:text-[#ea7c69] transition-all'>
              Olvide mi Contraseña
            </Link>
          </div>
          <div className='flex justify-center mt-7 gap-3 w-full'>
            <button
              className='flex border-solid border-[#ea7c69] rounded-lg border-2 text-[#ea7c69] justify-center items-center gap-2 py-3 px-6 hover:text-white hover:bg-[#ea7c69] transition-colors w-full'
              type='submit'>
              <FiLogIn />
              <p>Ingresar</p>
            </button>
          </div>
          <p className='text-center mt-5'>
            ¿No tienes usuario?{' '}
            <Link
              href='/registro'
              className='uppercase font-extrabold hover:text-[#ea7c69] transition-all'>
              {' '}
              registrate
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default login
