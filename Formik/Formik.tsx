import * as Yup from 'yup'
import { FormikHelpers, useFormik } from 'formik'
import { FormValues } from '@/interfaces/GlobalsInterfaces'
import Swal from 'sweetalert2'

export const initialValues: FormValues = {
  nombre: '',
  email: '',
  password: '',
  confirmPassword: '',
  localNombre: '',
  telefono: '',
  ciudad: '',
  direccion: ''
}
export const onSubmit = (values: { confirmPassword: any }) => {
  delete values.confirmPassword
  console.log('Values:', values)
  fetch('http://localhost:3001/local', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('Success:', data)
      Swal.fire({
        title: '¡Éxito!',
        text: 'La acción se completó exitosamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      })
    })
    .catch((error) => {
      console.error('Error:', error)
      Swal.fire({
        title: 'Error!',
        text: 'La acción se completó exitosamente.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      })
    })
}
const phoneRegExp = /^(1?(-?\d{3})-?)?(\d{3})(-?\d{4})$/
const required: string = '¡Este campo es requerido!'
export const validationSchema: Yup.Schema<FormValues> = Yup.object({
  nombre: Yup.string().required(required),
  email: Yup.string().email().required(required),
  password: Yup.string().required(required),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Las contraseñas deben coincidir')
    .required('La confirmación de contraseña es requerida'),
  localNombre: Yup.string().required(required),
  telefono: Yup.string()
    .matches(phoneRegExp, 'Número de teléfono no válido')
    .required(required),
  ciudad: Yup.string().required(required),
  direccion: Yup.string().required(required)
})
