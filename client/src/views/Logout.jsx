import { useNavigate } from 'react-router-dom'

export default function Logout({ logout }) {
    const navigate = useNavigate();
    logout()
    navigate("/")
}