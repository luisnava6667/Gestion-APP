import { useRouter } from 'next/router'
import { gestionApp } from '@/api/gestionApi'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import {
  clearErrorMessage,
  onCheking,
  onLogin,
  onLogout
} from '../store/authSlice'
interface Login {
  email: string
  password: string
}
export const useAuthStore = () => {
  //cuando recargo mi app en next piedo toda la informacion guardada en el redux
  //pero cuando recargo en el navegador pierdo la informacion
  //por eso tengo que hacer un dispatch para que me traiga la informacion
  //del usuario
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(onCheking())
  // }, [dispatch])
  
  const { status, user, errorMessage } = useSelector((state) => state?.auth!)
  const dispatch = useDispatch()
  const router = useRouter()
  const startLogin = async ({ email, password }: Login) => {
    dispatch(onCheking())
    try {
      const { data } = await gestionApp.post(
        'http://localhost:3001/local/login',
        { email, password }
      )
      localStorage.setItem('token', data.token)
      dispatch(onLogin({ data }))
    } catch (e: any) {
      dispatch(onLogout('Credenciales Incorrectas'))
      setTimeout(() => {
        dispatch(clearErrorMessage())
      }, 2000)
    }
  }
  const startLogout = () => {
    localStorage.clear()
    //  dispatch(onLogout())
    router.push('/')
  }

  return { startLogin, startLogout, status, user, errorMessage } //startRegister, startLogout }
}
