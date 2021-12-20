import { useEffect, useState } from 'react';
import './ViewUSer.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function ViewUser(props){
    const navigate=useNavigate();

    const [user,setUser] = useState({});

    useEffect(()=>{
        getUser();
    }, []);
    
    const getUser= async () => {
        const request = await axios.get(`auth/profile`);
        console.log(request);
        const user = request.data;
        setUser(user);
        console.log(user);
    }

    const handleClick = event =>{
        event.preventDefault();
        localStorage.removeItem('token');
        alert('Usuário deslogado com sucesso!');
        navigate('/');
    }

    return(
        
        <div className='user'>            
            <img src={user.imageUrl} alt={user.imageAlt}/>
            <div className='detalhes'>
                <h1><b>Nome: </b>{user.name}</h1>
                <h1><b>Email: </b>{user.email}</h1>
                <h1><b>Data de Nascimento: </b>{user.birthdate}</h1>
                <button className="botao"  onClick={handleClick}><h3>Sair</h3></button>
            </div>
        </div>

            
    )
}