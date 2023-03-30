// import React, { useState } from 'react'
// import Layout from './Layout'
// import { useSelector } from 'react-redux'
// import { useRouter } from 'next/router'
// import { useEffect } from 'react'
// import { useAuthStore } from '@/hooks/useAuthStore'

// const Empleados = () => {
//   const [showForm, setShowForm] = useState<boolean>(false)
//   const [showEmpleados, setShowEmpleados] = useState<boolean>(true)
//   const [empleados, setEmpleados] = useState<any>([])
//   const { id, nombre: localNombre } = useSelector((state: any) => state.auth)
//   const router = useRouter()
//   const idLocal = router.asPath.split('/')[2]
//   const { startLogout } = useAuthStore()

//   console.log(idLocal)
//   useEffect(() => {
//     if (idLocal === null || idLocal === undefined) {
//       return startLogout()
//     }
//     if (id !== idLocal) {
//       router.push('/inicio')
//       startLogout()
//     }
//   }, [idLocal])

//   useEffect(() => {
//     const getEmpleados = async () => {
//       const res = await fetch(`http://localhost:3001/local/empleados/${id}`)
//       const data = await res.json()
//       setEmpleados(data)
//     }
//     getEmpleados()
//   }, [empleados])

//   return (
//     <Layout>
//       <div className='w-full'>
//         <div className='flex justify-around'>
//           <button
//             className='bg-button-0 text-[#ea7c69] text-3xl p-4 rounded-lg '
//             onClick={() => {
//               setShowEmpleados(!showEmpleados)
//               setShowForm(false)
//             }}>
//             Ver Empleados
//           </button>
//           <button
//             className='bg-button-0 text-[#ea7c69] text-3xl p-4 rounded-lg '
//             // muestra el form y oculta la lista de empleados

//             onClick={() => {
//               setShowForm(!showForm)
//               setShowEmpleados(false)
//             }}>
//             Agregar Empleados
//           </button>
//         </div>
//         <div className='flex justify-center mt-10'>
//           {showForm && (
//             <form
//               action=''
//               className='w-9/12 grid'
//               //  onSubmit={handleSubmit}
//             >
//               <div className='grid justify-center'>
//                 <h3 className='text-primary font-semibold text-4xl '>
//                   Nuevo Empleado
//                 </h3>
//               </div>
//               <div className='grid'>
//                 <label htmlFor='' className='text-xl font-bold mb-1'>
//                   Nombre
//                 </label>
//                 <div className='relative'>
//                   <input
//                     type='text'
//                     name='nombre'
//                     placeholder='Ingresa tu nombre'
//                     className='bg-[#2D303E] py-2 rounded-lg px-3 w-full bg-lock focus:outline-none focus:ring-[#ea7c69] focus:ring-2'
//                     // value={values.nombre}
//                     // onChange={handleChange}
//                     // onBlur={handleBlur}
//                   />
//                   {/* <AiOutlineUser className='text-gray-400 absolute top-1/2 transform -translate-y-1/2 right-3' /> */}
//                 </div>
//                 {/* {errors.nombre && touched.nombre && (
//               <p className='text-red-900'>{errors.nombre}</p>
//             )} */}
//               </div>
//               <div className='grid mt-3'>
//                 <label htmlFor='' className='text-xl font-bold mb-1'>
//                   Email
//                 </label>
//                 <div className='relative'>
//                   <input
//                     type='text'
//                     name='email'
//                     placeholder='Email'
//                     className='bg-[#2D303E] py-2 rounded-lg px-3 w-full bg-lock focus:outline-none focus:ring-[#ea7c69] focus:ring-2'
//                     // value={values.email}
//                     // onChange={handleChange}
//                     // onBlur={handleBlur}
//                   />
//                   {/* <AiOutlineMail className='text-gray-400 absolute top-1/2 transform -translate-y-1/2 right-3' /> */}
//                 </div>
//                 {/* {errors.email && touched.email && (
//               <p className='text-red-900'>{errors.email}</p>
//             )} */}
//               </div>
//               <div className='grid mt-3'>
//                 <label htmlFor='' className='text-xl font-bold mb-1'>
//                   Contraseña
//                 </label>
//                 <div className='relative'>
//                   <input
//                     type='password'
//                     name='password'
//                     placeholder='Min. de 8 carracteres'
//                     className='bg-[#2D303E] py-2 rounded-lg px-3 w-full bg-lock focus:outline-none focus:ring-[#ea7c69] focus:ring-2'
//                     // value={values.password}
//                     // onChange={handleChange}
//                     // onBlur={handleBlur}
//                   />
//                   {/* <RiLockPasswordFill className='text-gray-400 absolute top-1/2 transform -translate-y-1/2 right-3' /> */}
//                 </div>
//                 {/* {errors.password && touched.password && (
//               <p className='text-red-900'>{errors.password}</p>
//             )} */}
//               </div>

//               <div>
//                 <label htmlFor='' className='text-xl font-bold mb-1'>
//                   Nombre de Negocio
//                 </label>
//                 <div className='relative'>
//                   <select className='bg-[#2D303E] py-2 rounded-lg px-3 w-full bg-lock focus:outline-none focus:ring-[#ea7c69] focus:ring-2 text-white'>
//                     <option value='' disabled selected>
//                       Selecciona un local
//                     </option>
//                     <option value={`${id}`}>{localNombre}</option>
//                   </select>
//                   {/* <BiStoreAlt className='text-gray-400 absolute top-1/2 transform -translate-y-1/2 right-3' /> */}
//                 </div>
//                 {/* {errors.localNombre && touched.localNombre && (
//             <p className='text-red-900'>{errors.localNombre}</p> */}
//                 {/* )} */}
//               </div>
//               <div className=''>
//                 <label htmlFor='' className='text-xl font-bold mb-1'>
//                   Telefono
//                 </label>
//                 <div className='relative'>
//                   <input
//                     type='text'
//                     name='telefono'
//                     placeholder='Ej: 1144332211'
//                     className='bg-[#2D303E] py-2 rounded-lg px-3 w-full bg-lock focus:outline-none focus:ring-[#ea7c69] focus:ring-2'
//                     // value={values.telefono}
//                     // onChange={handleChange}
//                     // onBlur={handleBlur}
//                   />
//                   {/* <AiOutlinePhone className='text-gray-400 absolute top-1/2 transform -translate-y-1/2 right-3' /> */}
//                   {/* </div>
//               {errors.telefono && touched.telefono && (
//               <p className='text-red-900'>{errors.telefono}</p> */}
//                   {/* )} */}
//                 </div>
//               </div>
//               <div className='flex mt-3 gap-3'>
//                 <label htmlFor='' className='text-xl font-bold mb-1'>
//                   Direccion
//                 </label>
//                 <div className='relative'>
//                   <input
//                     type='text'
//                     name='direccion'
//                     placeholder='Ej: calle 123'
//                     className='bg-[#2D303E] py-2 rounded-lg px-3 w-full bg-lock focus:outline-none focus:ring-[#ea7c69] focus:ring-2'
//                     // value={values.direccion}
//                     // onChange={handleChange}
//                     // onBlur={handleBlur}
//                   />
//                 </div>
//               </div>

//               <div className='flex justify-center mt-4 gap-3 w-full'>
//                 <button
//                   className={`flex border-solid border-[#ea7c69] rounded-lg border-2 text-[#ea7c69] justify-center items-center gap-2 py-3 px-6 hover:text-white hover:bg-[#ea7c69] transition-colors'
//               w-1/2`}
//                   type='submit'>
//                   <p>Registrarse</p>
//                 </button>
//               </div>
//             </form>
//           )}
//           {
//             //mostrar los empleados
//             showEmpleados && (
//               <div className='flex flex-col gap-3'>
//                 {empleados.length > 0 ? (
//                   empleados?.map(
//                     (empleado: {
//                       id: React.Key | null | undefined
//                       nombre:
//                         | string
//                         | number
//                         | boolean
//                         | React.ReactElement<
//                             any,
//                             string | React.JSXElementConstructor<any>
//                           >
//                         | React.ReactFragment
//                         | React.ReactPortal
//                         | null
//                         | undefined
//                       apellido:
//                         | string
//                         | number
//                         | boolean
//                         | React.ReactElement<
//                             any,
//                             string | React.JSXElementConstructor<any>
//                           >
//                         | React.ReactFragment
//                         | React.ReactPortal
//                         | null
//                         | undefined
//                       email:
//                         | string
//                         | number
//                         | boolean
//                         | React.ReactElement<
//                             any,
//                             string | React.JSXElementConstructor<any>
//                           >
//                         | React.ReactFragment
//                         | React.ReactPortal
//                         | null
//                         | undefined
//                       telefono:
//                         | string
//                         | number
//                         | boolean
//                         | React.ReactElement<
//                             any,
//                             string | React.JSXElementConstructor<any>
//                           >
//                         | React.ReactFragment
//                         | React.ReactPortal
//                         | null
//                         | undefined
//                       direccion:
//                         | string
//                         | number
//                         | boolean
//                         | React.ReactElement<
//                             any,
//                             string | React.JSXElementConstructor<any>
//                           >
//                         | React.ReactFragment
//                         | React.ReactPortal
//                         | null
//                         | undefined
//                       ciudad:
//                         | string
//                         | number
//                         | boolean
//                         | React.ReactElement<
//                             any,
//                             string | React.JSXElementConstructor<any>
//                           >
//                         | React.ReactFragment
//                         | React.ReactPortal
//                         | null
//                         | undefined
//                       localNombre:
//                         | string
//                         | number
//                         | boolean
//                         | React.ReactElement<
//                             any,
//                             string | React.JSXElementConstructor<any>
//                           >
//                         | React.ReactFragment
//                         | React.ReactPortal
//                         | null
//                         | undefined
//                       localDireccion:
//                         | string
//                         | number
//                         | boolean
//                         | React.ReactElement<
//                             any,
//                             string | React.JSXElementConstructor<any>
//                           >
//                         | React.ReactFragment
//                         | React.ReactPortal
//                         | null
//                         | undefined
//                       localCiudad:
//                         | string
//                         | number
//                         | boolean
//                         | React.ReactElement<
//                             any,
//                             string | React.JSXElementConstructor<any>
//                           >
//                         | React.ReactFragment
//                         | React.ReactPortal
//                         | null
//                         | undefined
//                       localTelefono:
//                         | string
//                         | number
//                         | boolean
//                         | React.ReactElement<
//                             any,
//                             string | React.JSXElementConstructor<any>
//                           >
//                         | React.ReactFragment
//                         | React.ReactPortal
//                         | null
//                         | undefined
//                     }) => (
//                       <div key={empleado.id}>
//                         <div className='flex flex-col gap-3'>
//                           <div className='flex justify-between'>
//                             <p className='text-xl font-bold'>
//                               {empleado.nombre}
//                             </p>
//                             <p className='text-xl font-bold'>
//                               {empleado.apellido}
//                             </p>
//                           </div>
//                           <div className='flex justify-between'>
//                             <p className='text-xl font-bold'>
//                               {empleado.email}
//                             </p>
//                             <p className='text-xl font-bold'>
//                               {empleado.telefono}
//                             </p>
//                           </div>
//                           <div className='flex justify-between'>
//                             <p className='text-xl font-bold'>
//                               {empleado.direccion}
//                             </p>
//                             <p className='text-xl font-bold'>
//                               {empleado.ciudad}
//                             </p>
//                           </div>
//                           <div className='flex justify-between'>
//                             <p className='text-xl font-bold'>
//                               {empleado.localNombre}
//                             </p>
//                             <p className='text-xl font-bold'>
//                               {empleado.localDireccion}
//                             </p>
//                           </div>
//                           <div className='flex justify-between'>
//                             <p className='text-xl font-bold'>
//                               {empleado.localCiudad}
//                             </p>
//                             <p className='text-xl font-bold'>
//                               {empleado.localTelefono}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     )
//                   )
//                 ) : (
//                   <p className='text-xl font-bold'>No hay empleados</p>
//                 )}
//               </div>
//             )
//           }
//         </div>
//       </div>
//     </Layout>
//   )
// }

// export default Empleados
