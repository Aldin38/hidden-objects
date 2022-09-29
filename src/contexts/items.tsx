import { FC, createContext, useState } from 'react';
import { hiddenObjects } from 'data';
import { GAME_RULES } from 'types/enums';

interface itemsToFindContextState {
    unfoundObjects: Array<string>,
    removeObject: (index: number) => void | undefined
}

const hiddenObjectsNames = hiddenObjects.map(item => item.name);
let randomisedOBjects: Array<string> = [];

for (let i = 0; i < GAME_RULES.TOTAL_OBJECTS_TO_FIND; i++) {
    const randomPick = hiddenObjectsNames[Math.floor(Math.random() * hiddenObjectsNames.length)];
    randomisedOBjects.push(randomPick);
    hiddenObjectsNames.splice(hiddenObjectsNames.indexOf(randomPick), 1)
}

 export const itemsToFindContextInitialState: itemsToFindContextState = {
    unfoundObjects: randomisedOBjects,
    removeObject: () => undefined,
};

export const ItemsToFindContext = createContext(itemsToFindContextInitialState);


export const ItemsToFindContextProvider: FC<{ children: React.ReactNode }>  = ({ children }) => {
    const [unfoundObjects, setUnfoundObjects] = useState(randomisedOBjects);
    const removeObject = (index: number) =>  {
      setUnfoundObjects(unfoundObjects.filter((item, idx) =>  idx !== index))
    };

    return (
      <ItemsToFindContext.Provider
        value={{ unfoundObjects, removeObject }}
      >
      {children}
      </ItemsToFindContext.Provider>
    );
  };
