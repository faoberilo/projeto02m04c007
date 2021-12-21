import { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import './Filme.css';
import axios from 'axios';
import { useNavigate} from 'react-router-dom';



export default function Filme(props){
    const navigate = useNavigate();

    
    const [filme,setFilme]=useState({});
    useEffect(()=>{
        getFilmeById();
    }, []);

    const { id } = useParams();

    const getFilmeById = async () => {
        const request = await axios.get(`/movie/findUnique/${id}`);
        const filme = request.data;
        setFilme(filme);
      }
    
    
      const handleClick = async (evento) => {
        evento.preventDefault();
        
        axios.patch(`user/addList/${id}`)
            .then((response)=>{
                alert('Filme adicionado à lista com sucesso com sucesso!!!');
                navigate('/');
            });
    
        
      }
    
    return(
        <div className='filme'>
            <div className='capa'>            
                <img src={filme.cover} alt={filme.imageAlt}/>
            </div>
            <div className='detalhes'>
                <h1>{filme.title}</h1>
                <h2><b>Ano: </b> {filme.year}</h2>
                <h2><b>Sinopse: </b> {filme.resume}</h2>
                <h2><b>Elenco: </b> {filme.cast}</h2>
                <h2><b>Genero: </b> {filme.genres}</h2>
                <button className="botao" onClick={handleClick}>Assitiu</button>
            </div>            
        </div>
           
    )
}