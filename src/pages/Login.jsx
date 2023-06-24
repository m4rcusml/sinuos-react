import SinuosBanner from '../components/SinuosBanner'
import styled from "styled-components"

const LoginStyled = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-image: linear-gradient(to right, var(--cor02), #c0d9ff 60%);

  .esquerda, form {
    flex-basis: 400px;
    flex-shrink: 1;
  }
  .esquerda {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  .esquerda ul {
    list-style: inside;
    display: flex;
    flex-direction: column;
    gap: .5em;
  }
  form {
    background-color: white;
    border-radius: 1em;
    box-shadow: 0 0 20px 5px var(--cor02);
    overflow: hidden;
    text-align: center;
  }
  form .campos-container {
    padding: 1em;
  }
  form .banner {
    height: 150px;
  }
  form > .campos-container > div {
    margin-bottom: 1em;
  }
  .campo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .5rem;
  }
  .campo input {
    align-self: stretch;
    border: 1px solid black;
    border-radius: 1em;
    height: 35px;
    padding: .5em;
  }
  .checkbox {
    display: flex;
    align-items: center;
    gap: .5rem;
  }
  .checkbox input {
    cursor: pointer;
    width: 16px;
    height: 16px;
  }
  form button {
    background-color: var(--cor04);
    cursor: pointer;
    width: 100%;
    padding: 1rem 0;
    border: 1px solid var(--cor02);
    border-radius: 1em;
    display: flex;
    transition: all 200ms;
  }
  form button a {
    flex-grow: 1;
    text-decoration: none;
    color: var(--cor01);
    font-weight: bold;
    transition: all 300ms;
  }
  form button:hover {
    background-color: var(--cor03);
  }
  form button:hover a {
    color: white;
  }
  form #sem-conta {
    display: inline-block;
    margin: 1em 0 .4rem 0;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    justify-content: center;
    gap: 1em;

    .esquerda {
      display: none;
    }
    form {
      flex-basis: auto;
      width: 300px;
    }
  }
`

function Login() {
  return (
    <LoginStyled>
      <div className='esquerda'>
        <h2>Logando você tem acesso a:</h2>
        <ul>
          <li>pog champ</li>
          <li>kekw</li>
          <li>poggers</li>
        </ul>
      </div>
      <form>
        <SinuosBanner />
        <div className='campos-container'>
          <h3>Login</h3>
          <div className='campo'>
            <label htmlFor="login">Login:</label>
            <input type="text" id='login' />
          </div>
          <div className='campo'>
            <label htmlFor="senha">Senha:</label>
            <input type="password" id='senha' />
          </div>
          <div className="checkbox">
            <input type="checkbox" id='lembrar' />
            <label htmlFor="lembrar">Lembrar</label>
          </div>
          <button type="button">
            <a href="./">Continuar</a>
          </button>
          <a href="cadastro" id="sem-conta">Ainda não tem uma conta?</a>
        </div>
      </form>
    </LoginStyled>
  )
}

export default Login