import { Navigation } from "./navigation";
import { HiddenObject } from './Object';
import { Background } from "./Background";
import { RNG } from "utils/randomiser";
import { backgrounds, hiddenObjects } from 'data'
import { ItemsToFindContextProvider } from "contexts";

interface GameScreenProps {

}

const getRandomBackground = () => {
    return backgrounds[RNG(backgrounds.length, true)];
}

export const GameScreen: React.FC<GameScreenProps> = () => {
    return(
        <>
        <ItemsToFindContextProvider>
            <div className="game-screen">
                <Background {...getRandomBackground()} />
                { hiddenObjects.map((item, index) => <HiddenObject {...item} key={index} />)}
            </div>
            <Navigation />
            </ItemsToFindContextProvider>
        </>
    )
};