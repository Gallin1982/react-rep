import { use, useState } from 'react'
import {UserCard} from '../UserCard/UserCard'
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

    const [count, setCount] = useState(0)
    

    
  return (
         <section>
         {
            usuarios.map((usuario)=> {
                return(
                    <UserCard key={usuario.id} usuario={usuario}/>
                )
            })
         }
        </section>
    
  )
}

//entre las llaves va el código JS