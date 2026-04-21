import { useEmployeeContext } from "../../../shared/hooks/useContextData"

export let useEmploye = () => {
    const {employees, setEmployees} = useEmployeeContext();

    let deleteEmployee = (id) => {
        setEmployees(employees.filter((e) => e.id !== id))
    }

    let updateEmployee = (id, updatedData) => {
        setEmployees(employees.map((e) => 
            e.id === id ? { ...e, ...updatedData } : e
        ))
    }

    return{
        deleteEmployee,
        updateEmployee
    }
}