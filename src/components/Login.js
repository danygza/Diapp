import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import logo from "../logo.png"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
      <div className="shadow-box-example z-depth-5">
        <Card className="card">
          <Card.Body>
          <div class="d-flex p-1"></div>
            <h2 className="text-center mb-4">Iniciar Sesión</h2>
            <a class="navbar-brand" href="#"><img className="logoLogIn logo2" src={logo} alt="logo..." /></a>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <div class="d-flex p-2"></div>
              <Form.Group id="password">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" ref={passwordRef} required />
              </Form.Group>
              <div class="d-flex p-2"></div>
              <Button disabled={loading} className="w-100" type="submit">
                Iniciar Sesión
              </Button>
            </Form>
            <div className="w-100 text-center mt-3">
              <Link to="/forgot-password">¿Olvidaste la contraseña?</Link>
            </div>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          ¿Aún no tienes cuenta? <Link to="/signup">Crear Cuenta</Link>
        </div>
      </div>
    </>
  )
}