/* eslint-disable react-hooks/rules-of-hooks */
import * as Yup from 'yup'
import { FormikHelpers, useFormik } from 'formik'
import { FormValues } from '@/interfaces/GlobalsInterfaces'

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
//submit del formik guardando en el state
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
