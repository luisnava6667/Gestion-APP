export interface FormValues {
  nombre: string
  email: string
  password: string
  confirmPassword?: string
  localNombre: string
  telefono: string
  ciudad: string
  direccion: string
}
export interface FormikProps {
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void
  errors: { [key: string]: string }
  touched: { [key: string]: boolean }
  values: FormValues
}
