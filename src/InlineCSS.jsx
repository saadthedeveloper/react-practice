function InlineCSS() {
    let divStyle = {
        backgroundColor: "white",
        width: "200px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding:"20px"
    };


    return (
        <>
            <h1>Inline CSS</h1>
        <div style={divStyle}>
            <img style={{ width: "200px" }} src="https://images.unsplash.com/photo-1580128660010-fd027e1e587a?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h3 style={{ color: "black", fontWeight: "800", textAlign:"center" }}>Donald Trump</h3>
            <span style={{ color: "black", fontWeight: "200", textAlign:"center" }}>President Of United States Of America</span>
        </div>
        </>
    )
}

export default InlineCSS;