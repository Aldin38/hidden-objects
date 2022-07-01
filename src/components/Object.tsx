import { useState } from 'react';
import { RNG } from "utils/randomiser";
import {
    GAME_SCREEN_SIZE,
    HIDDEN_OBJECT_LIMITS,
    DIRECTIONS
 } from 'types/enums';

interface ObjectProps {
    name: string,
    image: string;
}

const positionHiddenObject  = (): HiddenObject => ({
    x: RNG(GAME_SCREEN_SIZE.WIDTH),
    y: RNG(GAME_SCREEN_SIZE.HEIGHT),
    rotation: RNG(HIDDEN_OBJECT_LIMITS.ROTATION),
    opacity: RNG(HIDDEN_OBJECT_LIMITS.VISIBILITY_MAX, false, HIDDEN_OBJECT_LIMITS.VISIBILITY_MIN),
    scale: RNG(HIDDEN_OBJECT_LIMITS.SCALE_MAX, false, HIDDEN_OBJECT_LIMITS.SCALE_MIN),
});

const setObjectStyles = (HOPosition: Record<HiddenObjectProperties, number>) => ({
    left: `${HOPosition.x}px`,
    top: `${HOPosition.y}px`,
    transform: `rotate(${HOPosition.rotation}deg) scale(${HOPosition.scale})`,
    opacity: HOPosition.opacity,
})

const randomiseDirection = (): string => {
    const directions: string[] = Object.values(DIRECTIONS);
    return directions[RNG(directions.length, true)]
}

export const HiddenObject: React.FC<ObjectProps> = (hiddenObject) => {
    const [HOfound, setHOfound] = useState('');
    const [objectStyles] = useState(setObjectStyles(positionHiddenObject()));

    const objectFoundHandler = (): void => {
        if (!HOfound) {
            setHOfound(`object__found--${randomiseDirection()}`);
        }
    }
    return(
        <div className={`object ${HOfound}`} onClick={objectFoundHandler} style={objectStyles}>
            <img src={hiddenObject.image} alt={hiddenObject.name} />
        </div>
    )
};