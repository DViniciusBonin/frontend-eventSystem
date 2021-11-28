export function getYear(date: Date) {
    return new Date(date).getFullYear();
}

export function getMonth(date: Date) {
    return new Date(date).getMonth() + 1;
}

export function getDayNumber(date: Date) {
   const n = new Date(date).getDate();

   if(n < 10) {
       return `0${n}`;
   }

   return n;
}