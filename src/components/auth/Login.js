import React, { useState, useContext, useEffect } from "react";
import styled from "@emotion/styled";
import AuthContext from "../../context/autenticacion/authContext";
import { Link } from "react-router-dom";
import Error from "../Error";

const ContenedorLogin = styled.div`
  background-image: radial-gradient(
    circle at 62.28% 119.64%,
    #434863 0,
    #1f3159 50%,
    #001d4f 100%
  );
  height: 1000px;
  display: grid;
  align-items: center;
`;

const LoginDiv = styled.div`
  background-image: linear-gradient(
    345deg,
    #00ffff 0,
    #21e0ff 25%,
    #3cb5f2 50%,
    #408cbb 75%,
    #3b6788 100%
  );
  height: auto;
  width: 60%;
  border-radius: 15%;
  margin: 0 auto;
  padding-top: 3em;
`;

const Loginh1 = styled.h1`
  font-size: 2em;
  color: #ffffff;
  width: 60%;
  margin: 0 auto;
  margin-bottom: 1em;
`;
const LoginForm = styled.div`
  width: 90%;
  margin: 0 auto;

  div > button {
    margin: 0 auto;
  }
`;

const Login = (props) => {
  const authContext = useContext(AuthContext);
  const { autenticado, iniciarSesion, mensaje } = authContext;

  useEffect(() => {
    if (autenticado) {
      props.history.push("/Agenda");
    }
    // eslint-disable-next-line
  }, [autenticado, props.history]);

  //State cliente
  const [cliente, guardarCliente] = useState({
    correo: "",
    password: "",
  });
  //Extraer Cliente
  const { correo, password } = cliente;

  const onChange = (e) => {
    guardarCliente({
      ...cliente,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    iniciarSesion({ correo, password });
  };
  return (
    <ContenedorLogin>
      <LoginDiv>
        {mensaje ? <Error mensaje={mensaje.msg}></Error> : null}

        <Loginh1>Iniciar Sesion</Loginh1>
        <LoginForm>
          <form onSubmit={onSubmit}>
            <div className="field">
              <label className="label">Correo</label>
              <input
                className="input is-rounded "
                type="correo"
                id="correo"
                name="correo"
                placeholder="Tu correo"
                value={correo}
                onChange={onChange}
              />
            </div>

            <div class="field">
              <label className="label">Password</label>
              <input
                className="input  is-rounded"
                type="password"
                id="password"
                name="password"
                placeholder="Ingresa Tu password"
                value={password}
                onChange={onChange}
              />
            </div>

            <div className="field">
              <button className="button is-link is-medium is-rounded">
                Login
              </button>
            </div>
            <Link to="/Registro">Obtiene Una Cuenta</Link>
          </form>
        </LoginForm>
      </LoginDiv>
    </ContenedorLogin>
  );
};

export default Login;
