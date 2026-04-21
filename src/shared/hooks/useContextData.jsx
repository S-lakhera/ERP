import { useContext } from "react";
import { Auth } from "../../context/AuthContext";

export let useAuthContext = () => useContext(Auth)