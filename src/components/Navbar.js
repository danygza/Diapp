import React, { useState } from "react"
import logo from "../logo.png"
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import { Button} from "react-bootstrap"


export const Navbar = () => {

    const [error, setError] = useState("")
      const { logout } = useAuth()
      const navigate = useNavigate()
  
      async function handleLogout() {
          setError("")
  
      try {
        await logout()
        navigate("/login")
      } catch {
        setError("Failed to log out")
      }
      }
  
      return (
          <nav class="navbar navbar-expand-lg navbar-light bg-white">
            <div class="container">
              <a class="navbar-brand" href="#"><img className="logo"src={logo} alt="logo..." /></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
  
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                  <li class="nav-item active">
                    <a class="nav-link" href="/">Inicio <span class="sr-only"></span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/donaciones">Citas Medicas</a>
                  </li>
                  {/* <li class="nav-item">
                    <a class="nav-link" href="#">Equipos</a>
                  </li> */}
                  <li class="nav-item">
                    <a class="nav-link" href="/puntaje">Citas Nutriologos</a>
                  </li>
                  {/* <li class="nav-item">
                    <a class="nav-link" href="/puntaje2">Puntaje2</a>
                  </li> */}
                  <li class="nav-item">
                  <a class="nav-link" href="/registro-alumno">Nutrición</a>
                  </li>
                  <li class="nav-item">
                  <a class="nav-link" href="/registro-alumno">Deporte</a>
                  </li>
                  <li class="nav-item">
                  <a class="nav-link" href="/registro-alumno">Contactanos</a>
                  </li>
                  <div className="button1">
                    <Button onClick={handleLogout}>
                      Cerrar Sesión
                    </Button>
                  </div>
                </ul>
              </div>
            </div>
        </nav>
      )
  }
  
  export default Navbar