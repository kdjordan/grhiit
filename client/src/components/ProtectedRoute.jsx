import { Navigate } from "react-router-dom"

export default function ProtectedRoute({ user, children }) {
    console.log('user in protected ', user)
    if (!user) {
        return <Navigate to="/" replace />
    }
    return children
}