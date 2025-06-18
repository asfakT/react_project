import styled from 'styled-components';

const Button = styled.button`
    background-color: black;
    color: white;
    padding: 10px;
    `;

const DiceGame = () => {


    return (
        <div className='container'>
            Game Page

            <Button> this is button</Button>
        </div>
    );
};

export default DiceGame;