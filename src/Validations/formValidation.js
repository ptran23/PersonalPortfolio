import * as yup from 'yup'

export const userSchema = yup.object().shape({
    name: yup.string().required("Name Required"),
    email: yup.string().email().required("Email Required"),
    message: yup.string().required("Oh no, there is no message!"),
})