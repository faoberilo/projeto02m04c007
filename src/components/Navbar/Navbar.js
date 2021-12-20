import './Navbar.css';


const Navbar = ()=>{
    return (
    <div className='navbar'>
        <a href='/'><h1 className='navbar_title'>FaoFlix</h1></a>
      
        <div className='links'>
            <a href='/cadastrouser'><button className="botao">Cadastrar</button></a>
            <a href='/minhalista'><button className="botao">Minha Lista</button></a>
            <a href='/perfil'><button className="botao">Perfil</button></a>
            <a href='/login'><button className="botao">Entrar</button></a>
        </div>

    </div>
)}

export default Navbar;