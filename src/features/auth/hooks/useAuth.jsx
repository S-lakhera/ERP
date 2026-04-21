import { useForm } from "react-hook-form"
import { useAuthContext } from "../../../shared/hooks/useContextData"
import { nanoid } from "nanoid"

export let useAuth = () => {
    const { loginAdmin,registerAdmin } = useAuthContext()

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        mode: "onChange"
    })

    const handleRegister = (data) =>{
        registerAdmin({...data,id:nanoid()})
        reset()
    }

    const handleLogin = (data) => {
        loginAdmin(data)
        reset();
    }

    return {
        register,
        handleSubmit,
        errors,
        handleRegister,
        handleLogin
    }
}