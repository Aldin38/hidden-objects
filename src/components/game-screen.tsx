import React from "react";
import { Navigation } from "./navigation";
import { HiddenObject } from './Object';
import { Background } from "./Background";
import { RNG } from "utils/randomiser";
import HiddenObjectsData from 'hidden-objects.json'

interface HiddenObjects {
    name: string,
    image: string,
}

interface BackgroundProps {
    image: string
}

interface GameScreenProps {

}

const getRandomBackground = () => {
    const backgrounds: BackgroundProps[] = HiddenObjectsData.backgrounds;
    return backgrounds[RNG(backgrounds.length, true)];
}

export const GameScreen: React.FC<GameScreenProps> = () => {
    const hiddenObjects: HiddenObjects[] = HiddenObjectsData.hiddenObjects;

    const hiddenObjectNames = () => {
        return hiddenObjects.reduce((acc, item) => {
            acc.push(item.name);
            return acc
        }, [] as string[])
    }
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