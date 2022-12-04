import { Navigate } from "react-router-dom"
import LocalStorage from "../LocalStorage";

export default function ProtectedRoute({ children }) {
    
    if(!LocalStorage.getLocalStorage()) {
        return <Navigate to="/" replace />
    }
    return children
}