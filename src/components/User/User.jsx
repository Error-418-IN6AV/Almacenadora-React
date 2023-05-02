export const User = ({name, surname, usernmae,password, role})=>{ 
    return (
        <>
            <td>{name}</td>
            <td>{surname}</td>
            <td>{usernmae}</td>
            <td>{password}</td>
            <td>{role}</td>
        </>
    )
}