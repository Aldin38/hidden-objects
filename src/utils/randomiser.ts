export const RNG = (
   multiplier: number,
   roundUp?: boolean,
   min?: number
): number => {
   let result: number = Math.random() * multiplier

   if (min && result < min) {
      result = min;
   }

   if(roundUp) {
      return  Math.floor(result)
   }
   return  result;
}