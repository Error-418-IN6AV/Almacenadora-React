export const Arrendamiento = ({client, cellars, additionalServices})=>{ //PROPS -> parámetros que se envían al momento de llamar al componente (la función)
    return (
        <>
            <td style={{ border: '1px solid black', padding: '5px' }}>{client}</td>
            <td style={{ border: '1px solid black', padding: '5px' }}>{cellars}</td>
            <td style={{ border: '1px solid black', padding: '5px' }}>{additionalServices}</td>
        </>
    )
}