import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useNavigate } from "react-router-dom"
import logo from "../logo.png"

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      navigate("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>
      <div className="shadow-box-example z-depth-5">
        <Card className="card">
          <Card.Body>
            <h2 className="text-center mb-4">Crear Cuenta</h2>
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
              <Form.Group id="password-confirm">
                <Form.Label>Confirmar Contraseña</Form.Label>
                <Form.Control type="password" ref={passwordConfirmRef} required />
              </Form.Group>
              <div class="d-flex p-2"></div>
              <Button disabled={loading} className="w-100" type="submit">
                Crear Cuenta
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          ¿Ya tienes una cuenta? <Link to="/login">Iniciar Sesión</Link>
        </div>
      </div>
    </>
  )
}