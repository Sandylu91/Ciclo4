export function calcularExpiraSesion(){
    const now= new Date().getTime();
    const newDate= now+60*30*1000;
    return new Date(newDate);
}