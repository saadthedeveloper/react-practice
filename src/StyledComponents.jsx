import styled from 'styled-components';

function StyledComponents(){
    const List = styled.li`
    background-color: gray;
    color: white;
    font-weight: 100;
    border: 1px solid white;
    border-radius: 50px;
    padding: 10px;
    margin-top: 5px;
    `;

    const Heading = styled.h1(
        {
            border: `3px solid black`,
            padding: '10px'
        }
    );

    
    
    return(
        <>
        <Heading>STYLED COMPONENTS</Heading>

        <ul>
            <List>Item 1</List>
            <List>Item 2</List>
            <List>Item 3</List>
            <List>Item 4</List>
            <List>Item 5</List>
            <List>Item 6</List>

        </ul>


        </>
    )
}

export default StyledComponents;