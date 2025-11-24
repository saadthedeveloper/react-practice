function Table(){
    let users = [
        {
            id : 1234,
            name : "Atikson",
            contact : "+12345678910",
            email : "atikson@test.com"
        },
        {
            id : 3456,
            name : "Royce",
            contact : "+12341678910",
            email : "royce@test.com"
        },
        {
            id : 9878,
            name : "Markus",
            contact : "+123456742134",
            email : "marcus@test.com"
        },
        {
            id : 6543,
            name : "Joyce",
            contact : "+1234512321",
            email : "joyce@test.com"
        }
    ]

    return(
        <>
        <table border={1}>
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Contact</td>
                    <td>Email</td>
                </tr>
            </thead>
            <tbody>
                {users.map((e)=>
                <tr>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.contact}</td>
                    <td>{e.email}</td>
                </tr>)
                
                }
            </tbody>
        </table>
        </>
    )
}

export default Table;