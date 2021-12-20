import React from "react";
import "./CadastroUser.css";
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

const CadastroUser = () => {
  const navigate = useNavigate();


  const handleSubmit = async (evento) => {
    evento.preventDefault();
    const name=evento.target.name.value;
    const email=evento.target.email.value;
    const birthdate=evento.target.birthdate.value;
    const imageUrl=evento.target.imageUrl.value;
    const password=evento.target.password.value;
    const passwordConfirmation=evento.target.passwordConfirmation.value;
 
    const user = {
        name,
        email,
        birthdate,
        imageUrl,
        password,
        passwordConfirmation      
    }
    axios.post('/user/create', user)
        .then((response)=>{
            alert('Usuário cadastrado com sucesso!!!');
            navigate('/');
        });

    
  }
  return (
    <div className="cadastro">
      <h2>Cadastro</h2>
      <form className='formCadastro' onSubmit={handleSubmit}>
                <input type='text' id="name" name="name" placeholder='Nome' required/>
                <input type='email' id="email" name="email" placeholder='Email' required/>
                <input type='text' id="birthdate" name="birthdate" placeholder='Data de Nascimento (dd/mm/aaaa)' required/>
                <input type='text' id="imageUrl" name="imageUrl" placeholder='Link Imagem' required/>
                <input type='password' id="password" name="password" placeholder='Senha' required/>
                <input type='password' id="passwordConfirmation" name="passwordConfirmation" placeholder='Repetir Senha' required/>
                <input type='submit' value="Cadastrar" />
            </form>
    </div>
  );
};

export default CadastroUser;