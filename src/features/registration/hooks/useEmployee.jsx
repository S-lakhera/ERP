
import { useForm } from "react-hook-form";
import { useEmployeeContext } from "../../../shared/hooks/useContextData";
import { nanoid } from "nanoid";

export let useEmployee = () => {

  const { setEmployees, employees } = useEmployeeContext()

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const registerEmployee = (data) => {
    setEmployees([...employees, { ...data, joiningDate: Date.now() , id:nanoid()}])
    reset()
  }



  return {
    registerEmployee, handleSubmit, errors, employees, setEmployees, register
  }
}
