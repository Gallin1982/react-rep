import './Header.css';
export const Header = ({children, padre, show})=>{
     return(
        <header className="header">
            <h1 className="titulo">{padre || "por defecto"}</h1>
            {children}

            {
                show && <p>Este texto se va a mostrar si el prop show es true</p> 
            }
            
        </header>
    )

}
//trabajar en carpetas por cada componente
//** children es propo que me permite tener un componente
// hijo dentro del padre los prop pueden ser todo tipo de datos string objetos */