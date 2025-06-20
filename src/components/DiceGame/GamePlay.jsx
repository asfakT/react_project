import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import styled from 'styled-components';
import RoleDice from "./RoleDice";
import { useState } from "react";
import Rules from "./Rules";

const GamePlay = () => {
    const [currentDice, setCurrentDice] = useState(1);
    const [selectedNumber, setSelectedNumber] = useState();
    const [score, setScore] = useState(0);
    const [error, setError] = useState("");
    const [showRules, setShowRules] = useState(false);

    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min);
    };

    const roleDice = () => {
        if (!selectedNumber) {
            setError("You have not selected any number");
            return;
        }

        const randomNumber = generateRandomNumber(1, 7);
        setCurrentDice(() => randomNumber);

        if (selectedNumber === randomNumber) {
            setScore((prev) => prev + randomNumber);
        }
        else {
            setScore((prev) => prev - 2);
        }

        setSelectedNumber(undefined);
    }
    console.log("dice", currentDice);

    const resetScore = () => {
        setScore(0);
    };

    return (
        <MainContainer>
            <div className='top_section'>
                <TotalScore score={score} />
                <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber}
                    setSelectedNumber={setSelectedNumber} />
            </div>
            <RoleDice currentDice={currentDice} roleDice={roleDice} />

            <div className="btns">
                <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
                <Button onClick={() => setShowRules((prev) => !prev)}>
                    {showRules ? "Hide" : "Show"} Rules
                </Button>
            </div>
            {showRules && <Rules />}
        </MainContainer>
    );
};

export default GamePlay;

const MainContainer = styled.main`
  padding-top: 70px;
  .top_section {
    display: flex;
    justify-content: space-around;
    align-items: end;
  }
  .btns {
    margin-top: 40px;
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
`;


export const Button = styled.button`
  color: white;
  padding: 10px 18px;
  background: #000000;
  border-radius: 5px;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s background ease-in;
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`;
export const OutlineButton = styled(Button)`
  background-color: white;
  border: 1px solid black;
  color: black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;