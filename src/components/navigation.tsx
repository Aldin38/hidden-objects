import React from "react";

interface NavigationProps {
    names: string[],
}
export const Navigation: React.FC<NavigationProps> = ({ names }) => {
    return(
        <div className="navigation">
            {names.map((item: string, idx: number) => <div key={idx}>{item}</div>)}
        </div>
    )
};