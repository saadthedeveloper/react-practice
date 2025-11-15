function User({ name, major }) {
    let userName = name;
    let userMajor = major;

    return (
        <>
            <hr />
            <h1>PROPS</h1>
            <h2>User: {userName}</h2>
            <h2>Major: {userMajor}</h2>
        </>
    );
}

export default User;
