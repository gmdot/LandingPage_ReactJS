import './Header.css'

function Header() {
    return (
        <header>
            <h1><a href="">React Landing</a></h1>
            <ul>
                <li><a href="./App.jsx">Início</a></li>
                <li><a href="https://github.com/gmdot">Meu GitHub</a></li>
                <li><a href="">Sobre</a></li>
            </ul>
        </header>
    );
}

export default Header;