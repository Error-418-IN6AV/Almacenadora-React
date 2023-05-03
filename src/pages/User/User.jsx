export const User = ({name, surname, username, password, role})=>{
    return (
        <>
            <td>{name}</td>
            <td>{surname}</td>
            <td>{username}</td>
            <td>{password}</td>
            <td>{role}</td>
        </>
    )
}