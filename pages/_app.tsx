import '../styles/globals.css'
// import { useRouter } from 'next/router'
import { Provider } from 'react-redux'
import { store } from '../store/store'
// const publicRoutes = ['/', '/login', '/registro']

function App({ Component, pageProps }: { Component: any; pageProps: any }) {
  // const router = useRouter()
  // console.log(router);

  // si accede a una ruta que no existe lo redirecciona a la página de inicio

  // useEffect(() => {
  //   if (publicRoutes.includes(router.pathname)) {
  //     if (localStorage.getItem('token')) {
  //       router.push('/inicio')
  //     }
  //   } else {
  //     if (!localStorage.getItem('token')) {
  //       router.push('/')
  //     }
  //   }
  // }, [router.pathname])

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
export default App
