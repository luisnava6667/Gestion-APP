import { useAuthStore } from '@/hooks/useAuthStore'
import Layout from './Layout'

const Inicio = () => {
  const { startLogout } = useAuthStore()
  //traigo el nomre del usuario que esta en el state
  const { user } = useAuthStore()
  console.log(user.nombre)

  return (
    <Layout>
      <div>
        bienvenido al sistem cerramos sesion con startLogout
        <p>nombre   {user.nombre}</p>
        <hr />
        <button onClick={startLogout}>Cerrar sesion</button>
      </div>
    </Layout>
  )
}

export default Inicio
