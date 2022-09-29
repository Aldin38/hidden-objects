import { FC, useContext } from "react";
import { ItemsToFindContext } from "contexts";

export const Navigation: FC = () => {
    const { unfoundObjects } = useContext(ItemsToFindContext);

    return(
        <div className="navigation">
            {unfoundObjects.map((item: string, idx: number) => <div key={idx}>{item}</div>)}
        </div>
    )
};