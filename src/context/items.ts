import { createContext } from 'react';
import { hiddenObjects } from 'data';

interface ObjectToFind {
    name: string;
    found: boolean;
}

// ROKNI OVDE FUNKCIJU ROJA Randomise-a  objecte 

// ---------------------------------


// ONDA EXPORTAJ TAJ CONTEXT
// I U PROVAJDERU ONDA ON CLICK DELETAJ IZ ARRAYA (GENIJALNO) 
// export const Items = createContext<ObjectToFind[]>({})