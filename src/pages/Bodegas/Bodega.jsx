export const Bodega = ({name, description, location, status, price })=>{
    return(
        <>
            <td>{name}</td>
            <td>{description}</td>
            <td>{location}</td>
            <td>{status}</td>
            <td>{price}</td>
        </>
    )
}