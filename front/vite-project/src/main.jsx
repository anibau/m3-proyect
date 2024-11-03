import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from 'react-router-dom';
import { UsersProvider } from './Context/Users.jsx';
import { AppointmentProvider } from './Context/Appointment.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <UsersProvider>
      <AppointmentProvider>
      <App />
      </AppointmentProvider>
    </UsersProvider>
    </BrowserRouter>
  </StrictMode>,
)
