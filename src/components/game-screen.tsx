import React from "react";
import { Navigation } from "./navigation";
import { HiddenObject } from './Object';
import { Background } from "./Background";
import { RNG } from "utils/randomiser";
import { GAME_RULES } from "types/enums";
import { backgrounds, hiddenObjects } from 'data'

interface GameScreenProps {

}

const getRandomBackground = () => {
    return backgrounds[RNG(backgrounds.length, true)];
}

export const GameScreen: React.FC<GameScreenProps> = () => {

    const hiddenObjectNames = () => {
        return hiddenObjects.reduce((acc, item) => {
            acc.push(item.name);
            return acc
        }, [] as string[])
    }



    // RANDOMISEEEE OBJECTS TOO FIND 
    // TO DOO FIX THIS BROKEN ASSS SHITTTTTTTT ALDINEEE
    // const hiddenObjectsToFinds = () => {
    //     const allObjectNames =  hiddenObjectNames();

    //     return allObjectNames.reduce((acc) => {
    //         if (acc.length > GAME_RULES.MISSED_ATTEMPTS) {
    //             const randomPick = allObjectNames[RNG(allObjectNames.length - 1, true)]
    //             acc.push(randomPick);
    //            allObjectNames.splice(allObjectNames.indexOf(randomPick), 1);
    //         }
    //         return acc
    //     }, [] as string[]);
    //  }

    return(
        <>
        <div className="game-screen">
            <Background {...getRandomBackground()} />
            { hiddenObjects.map((item, index) => <HiddenObject {...item} key={index} />)}
        </div>
        <Navigation names={hiddenObjectNames()} />
        </>
    )
};