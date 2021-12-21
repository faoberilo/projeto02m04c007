import { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login(){
    const navigate=useNavigate();
    
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');

    const handleSubmit = event =>{
        event.preventDefault();

        const login = {
            email: email,
            password: senha
        }

        axios.post('auth/login',login)
        .then(response=>{
            const token = response.data.token;
            localStorage.setItem('token',token);
            console.log(token);
            alert('Usuário logado com sucesso!');
            navigate('/');
        })        
    }


    return(
        <div className='login'>
            <h2>Login</h2>
            <form className='formLogin' onSubmit={handleSubmit}>
                <input type='email' placeholder='Email' required onChange={event=>setEmail(event.target.value)}/>
                <input type='password' placeholder='Senha'required onChange={event=>setSenha(event.target.value)}/>
                <input type='submit' value="Entrar" />
            </form>
        </div>
    )
}