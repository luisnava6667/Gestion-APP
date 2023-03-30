// import { useAuthStore } from '@/hooks/useAuthStore'
// import Link from 'next/link'
// import React from 'react'
// import { useRouter } from 'next/router'
// import { BiHomeAlt2, BiStoreAlt } from 'react-icons/bi'
// import { BsBox, BsGear, BsPerson, BsPersonPlus } from 'react-icons/bs'
// import { useSelector } from 'react-redux'
// import { useEffect } from 'react'
// const NavBar = () => {
//   const { nombre, id } = useSelector((state: any) => state.auth)
//   const { startLogout } = useAuthStore()
//   const router = useRouter()
//   const linkClass = 'text-[#d25d48] flex  gap-3  text-3xl py-3 pr-4'

//   // validar que el id del local sea el mismo que el del params
//   // si no es el mismo redireccionar a la pagina de inicio

//   // if (id !== router.query.id) {
//   //   router.push('/inicio')
//   // }
//   return (
//     <div className='md:w-1/5  bg-button-0 h-screen flex font-bold'>
//       <div className=' w-full my-3 grid ml-6 items-center'>
//         {/* agregamos el nombre del usuario */}
//         <div className='text-3xl text-white'>
//           <p>Bienvenido:</p>
//           <p className='mt-3  uppercase'>{nombre}</p>
//         </div>
//         <div>
//           <Link href='/inicio' legacyBehavior>
//             <a className={` ${linkClass} ${router.pathname === '/inicio' ? 'bg-red-900': null}`}>
//               <BiHomeAlt2 />
//               <p>Home</p>
//             </a>
//           </Link>
//         </div>
//         <div>
//           <Link
//             href={`/empleados[id]`}
//             as={`/empleados/${id}`}
//             className={`${linkClass}`}>
//             <BsPerson />
//             <p>Empleados</p>
//           </Link>
//         </div>
//         <div>
//           <Link href='/sucursales' className={`${linkClass}`}>
//             <BiStoreAlt />
//             <p>Sucursales</p>
//           </Link>
//         </div>
//         <div>
//           <Link href='/productos' className={`${linkClass}`}>
//             <BsBox />
//             <p>Productos</p>
//           </Link>
//         </div>
//         <div>
//           <Link href='/config' className={`${linkClass} `}>
//             <BsGear />
//             <p>Configuración</p>
//           </Link>
//         </div>
//         <button
//           className='border-solid border-[#ea7c69] rounded-lg border-2 text-[#ea7c69]  hover:text-white hover:bg-[#ea7c69] transition-colors h-12 mr-6 text-3xl'
//           onClick={startLogout}>
//           Cerrar sesion
//         </button>
//       </div>
//     </div>
//   )
// }

// export default NavBar
