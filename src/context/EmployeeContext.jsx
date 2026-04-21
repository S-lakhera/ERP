import { createContext } from "react";
import { useEffect, useState } from "react";
import { storage } from "../utils/localStorage";

export let Employee = createContext()

export let EmployeeContextProvider = ({ children }) => {

    const [employees, setEmployees] = useState(() => {
        let employees = storage.get("employees")
        return employees ? employees : []
    })

    useEffect(() => {
        storage.set("employees", employees)
    }, [employees])

    return <Employee.Provider value={{
        setEmployees, employees
    }} >
        {children}
    </Employee.Provider>
}