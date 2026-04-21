
import { createRoot } from 'react-dom/client'
import './index.css'
import Approutes from './app/routes/Approutes.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
    <AuthContextProvider>
        <Approutes />
    </AuthContextProvider>
)
