

export const UserCard = ({usuario}) => {
    const {id, name, descripcion, image} = usuario
  return (
    <div className='card' key={id}>
                    <img className='image' src={image} alt={name} />
                    <h2 className='name'>{name}</h2>
                    <p className='descripcion'>{descripcion}</p>  
                    <button id={id} onClick={()=>handleClick (name)} >Click</button>                  
                    </div>
  )
}
