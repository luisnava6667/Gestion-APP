import React from 'react'

const registro = () => {
  return (
    <div>
      
    </div>
  )
}

export default registro

// import Image from 'next/image'
// import Link from 'next/link'
// import React, { useEffect, useState } from 'react'
// import { AiOutlineUser, AiOutlinePhone, AiOutlineMail } from 'react-icons/ai'
// import { FiLogIn } from 'react-icons/fi'
// import { RiLockPasswordFill } from 'react-icons/ri'
// import { BiArrowBack } from 'react-icons/bi'
// import { GiCancel, GiModernCity } from 'react-icons/gi'
// import { FaRegAddressBook } from 'react-icons/fa'
// import { BiStoreAlt } from 'react-icons/bi'
// import { useFormik } from 'formik'
// import { initialValues, validationSchema } from '../Formik/Formik'
// import { useAuthStore } from '@/hooks/useAuthStore'
// import { FormValues } from '@/interfaces/GlobalsInterfaces'

// const registro = () => {
//   const { startRegister } = useAuthStore()

//   const onSubmit = (values: FormValues) => {
//     startRegister(values)
//     //mostramos el toast de exito
//   }
//   const formik = useFormik({ initialValues, validationSchema, onSubmit })
//   const { handleSubmit, handleChange, errors, handleBlur, touched, values } =
//     formik

//   return (
//     <div className='h-screen bg-home-0 text-white flex items-center'>
//       <Link
//         href='/'
//         className='absolute top-5 left-3 flex items-center gap-2 hover:text-[#ea7c69] transition-all'>
//         <BiArrowBack size={30} />
//         <p className='text-lg font-bold uppercase '>Volver</p>
//       </Link>
//       <div className='flex justify-center items-center w-full flex-col'>
//         <h2 className='mb-4 mt-6 text-4xl font-bold'>Nuevo Registro</h2>
//         <Image
//           src='/check.svg'
//           alt='carrito'
//           width={80}
//           height={100}
//           className='hidden'
//         />
//         <form action='' className='w-10/12 max-w-md ' onSubmit={handleSubmit}>
//           <div className='grid'>
//             <label htmlFor='' className='text-xl font-bold mb-1'>
//               Nombre
//             </label>
//             <div className='relative'>
//               <input
//                 type='text'
//                 name='nombre'
//                 placeholder='Ingresa tu nombre'
//                 className='bg-[#2D303E] py-2 rounded-lg px-3 w-full bg-lock focus:outline-none focus:ring-[#ea7c69] focus:ring-2'
//                 value={values.nombre}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               <AiOutlineUser className='text-gray-400 absolute top-1/2 transform -translate-y-1/2 right-3' />
//             </div>
//             {errors.nombre && touched.nombre && (
//               <p className='text-red-900'>{errors.nombre}</p>
//             )}
//           </div>
//           <div className='grid mt-3'>
//             <label htmlFor='' className='text-xl font-bold mb-1'>
//               Email
//             </label>
//             <div className='relative'>
//               <input
//                 type='text'
//                 name='email'
//                 placeholder='Email'
//                 className='bg-[#2D303E] py-2 rounded-lg px-3 w-full bg-lock focus:outline-none focus:ring-[#ea7c69] focus:ring-2'
//                 value={values.email}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               <AiOutlineMail className='text-gray-400 absolute top-1/2 transform -translate-y-1/2 right-3' />
//             </div>
//             {errors.email && touched.email && (
//               <p className='text-red-900'>{errors.email}</p>
//             )}
//           </div>
//           <div className='grid mt-3'>
//             <label htmlFor='' className='text-xl font-bold mb-1'>
//               Contraseña
//             </label>
//             <div className='relative'>
//               <input
//                 type='password'
//                 name='password'
//                 placeholder='Min. de 8 carracteres'
//                 className='bg-[#2D303E] py-2 rounded-lg px-3 w-full bg-lock focus:outline-none focus:ring-[#ea7c69] focus:ring-2'
//                 value={values.password}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               <RiLockPasswordFill className='text-gray-400 absolute top-1/2 transform -translate-y-1/2 right-3' />
//             </div>
//             {errors.password && touched.password && (
//               <p className='text-red-900'>{errors.password}</p>
//             )}
//           </div>
//           <div className='grid mt-3'>
//             <label htmlFor='' className='text-xl font-bold mb-1'>
//               Contraseña
//             </label>
//             <div className='relative'>
//               <input
//                 type='password'
//                 name='confirmPassword'
//                 placeholder='Repite contraseña'
//                 className='bg-[#2D303E] py-2 rounded-lg px-3 w-full bg-lock focus:outline-none focus:ring-[#ea7c69] focus:ring-2'
//                 value={values.confirmPassword}
//                 onChange={handleChange}
//                 onBlur={handleBlur}
//               />
//               <RiLockPasswordFill className='text-gray-400 absolute top-1/2 transform -translate-y-1/2 right-3' />
//             </div>
//             {errors.confirmPassword && touched.confirmPassword && (
//               <p className='text-red-900'>{errors.confirmPassword}</p>
//             )}
//           </div>
//           <div className='flex mt-3 gap-3'>
//             <div>
//               <label htmlFor='' className='text-xl font-bold mb-1'>
//                 Nombre de Negocio
//               </label>
//               <div className='relative'>
//                 <input
//                   type='text'
//                   name='localNombre'
//                   placeholder='Ej: Mi Negocio'
//                   className='bg-[#2D303E] py-2 rounded-lg px-3 w-full bg-lock focus:outline-none focus:ring-[#ea7c69] focus:ring-2 '
//                   value={values.localNombre}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 <BiStoreAlt className='text-gray-400 absolute top-1/2 transform -translate-y-1/2 right-3' />
//               </div>
//               {errors.localNombre && touched.localNombre && (
//                 <p className='text-red-900'>{errors.localNombre}</p>
//               )}
//             </div>
//             <div className=''>
//               <label htmlFor='' className='text-xl font-bold mb-1'>
//                 Telefono
//               </label>
//               <div className='relative'>
//                 <input
//                   type='text'
//                   name='telefono'
//                   placeholder='Ej: 1144332211'
//                   className='bg-[#2D303E] py-2 rounded-lg px-3 w-full bg-lock focus:outline-none focus:ring-[#ea7c69] focus:ring-2'
//                   value={values.telefono}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 <AiOutlinePhone className='text-gray-400 absolute top-1/2 transform -translate-y-1/2 right-3' />
//               </div>
//               {errors.telefono && touched.telefono && (
//                 <p className='text-red-900'>{errors.telefono}</p>
//               )}
//             </div>
//           </div>
//           <div className='flex mt-3 gap-3'>
//             <div>
//               <label htmlFor='' className='text-xl font-bold mb-1'>
//                 Ciudad
//               </label>
//               <div className='relative'>
//                 <input
//                   type='text'
//                   name='ciudad'
//                   placeholder='Ej: Buenos Aires'
//                   className='bg-[#2D303E] py-2 rounded-lg px-3 w-full bg-lock focus:outline-none focus:ring-[#ea7c69] focus:ring-2'
//                   value={values.ciudad}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 <GiModernCity className='text-gray-400 absolute top-1/2 transform -translate-y-1/2 right-3' />
//               </div>
//               {errors.ciudad && touched.ciudad && (
//                 <p className='text-red-900'>{errors.ciudad}</p>
//               )}
//             </div>

//             <div className=''>
//               <label htmlFor='' className='text-xl font-bold mb-1'>
//                 Direccion
//               </label>
//               <div className='relative'>
//                 <input
//                   type='text'
//                   name='direccion'
//                   placeholder='Ej: calle 123'
//                   className='bg-[#2D303E] py-2 rounded-lg px-3 w-full bg-lock focus:outline-none focus:ring-[#ea7c69] focus:ring-2'
//                   value={values.direccion}
//                   onChange={handleChange}
//                   onBlur={handleBlur}
//                 />
//                 <FaRegAddressBook className='text-gray-400 absolute top-1/2 transform -translate-y-1/2 right-3' />
//               </div>
//               {errors.direccion && touched.direccion && (
//                 <p className='text-red-900'>{errors.direccion}</p>
//               )}
//             </div>
//           </div>

//           <div className='flex justify-center mt-4 gap-3 w-full'>
//             <button
//               className={`flex border-solid border-[#ea7c69] rounded-lg border-2 text-[#ea7c69] justify-center items-center gap-2 py-3 px-6 hover:text-white hover:bg-[#ea7c69] transition-colors'
//                w-1/2`}
//               type='submit'>
//               <FiLogIn size={25} />
//               <p>Registrarse</p>
//             </button>
//           </div>
//           <p className='text-center mt-2'>
//             ¿Ya tienes usuario?{' '}
//             <Link
//               href='/login'
//               className='uppercase font-extrabold hover:text-[#ea7c69] transition-all'>
//               {' '}
//               Iniciar Sesion
//             </Link>
//           </p>
//         </form>
//       </div>
//     </div>
//   )
// }
// export default registro
