import usuarioIMG from '../../assets/usuario.png'
import './Section.css'

const usuarios = [
    {
        id: 1,
        name: 'Edgar Juárez',
        descripcion: 'Desarrollador',
        image: usuarioIMG

    },
    {
        id: 2,
        name: 'Leonardo Hernandez',
        descripcion: 'Estilo',
        image: usuarioIMG

    },
    {
        id: 3,
        name: 'Paola Espinoza',
        descripcion: 'Nadadora',
        image: usuarioIMG

    }

]

export const Section = () => {
    const handleClick = (name)=>{
        console.log(`Contactando a $name{}`);
        
    }
  return (
         <section>
         {
            usuarios.map(usuario=> {
                return(
                    <div className='card' key={usuario.id}>
                    <img className='image' src={usuario.image} alt={usuario.name} />
                    <h2 className='name'>{usuario.name}</h2>
                    <p className='descripcion'>{usuario.descripcion}</p>  
                    <button id={usuario.id} onClick={()=>handleClick (usuario.name)} >Click</button>                  
                    </div>
                )
            })
         }
        </section>
    
  )
}

//entre las llaves va el código JS