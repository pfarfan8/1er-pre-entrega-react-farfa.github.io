import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <header>
        <div className="conteiner">
        
       
            <div className = "texto">
                <h3>Bangkok</h3>
            </div>
                <nav>
                    <button>Zapatillas</button>
                    <button>Superior</button>
                    <button>Inferior</button>
                </nav>
                
                <CartWidget/>
               
            
        </div>
        </header>
    )
}

export default NavBar