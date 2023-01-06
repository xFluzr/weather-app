export const getCurrentHour=()=>{
    const date=new Date();
    const closestHour=date.getHours();
    return `${closestHour}:00`;
}

export const sliceCurrentHour=(dateString)=>{
    return dateString.slice(11,16)
}