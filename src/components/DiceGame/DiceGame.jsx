import { useState } from "react";
import GamePlay from "./GamePlay";
import StartGame from "./StartGame";

const DiceGame = () => {

    const [isGameStarted, setIsGameStarted] = useState(false);

    const toggleGamePlay = () => {
        setIsGameStarted((prev) => !prev);
    }

    return (
        <div>
            {isGameStarted ? <GamePlay /> : <StartGame toggle={toggleGamePlay} />}
        </div>
    );
};

export default DiceGame;