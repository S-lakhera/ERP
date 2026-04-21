import { createContext, useEffect, useState } from "react";
import { storage } from "../utils/localStorage";

export let Auth = createContext()

export let AuthContextProvider = ({ children }) => {

    const [registeredAdmins, setRegisteredAdmins] = useState(() => {
        let admins = storage.get("admins")
        return admins ? admins : [];
    })

    const [loggedInAdmin, setLoggedInAdmin] = useState(() => {
        let admin = storage.get("admin");
        return admin ? admin : null;
    })

    const registerAdmin = (data) => {
        setRegisteredAdmins((prev) => [...prev, data]);
        setLoggedInAdmin(data)
        storage.set("admin", data)
    }

    const loginAdmin = (data) => {
        console.log(data);
        
        const admin = registeredAdmins.find((e) => e.email == data.email && e.password === data.password)
        console.log(admin);
        
        if(!admin) {
            alert("Account Not found, Check credentials or register.");
            return
        }
        setLoggedInAdmin(admin)
        localStorage.setItem("admin", JSON.stringify(admin));
    }

    useEffect(() => {
        storage.set("admins", registeredAdmins)
    }, [registeredAdmins])


    return <Auth.Provider
        value={{
            setLoggedInAdmin,
            loggedInAdmin,
            loginAdmin,
            registerAdmin,
            registeredAdmins
        }}
    >
        {children}
    </Auth.Provider>
}