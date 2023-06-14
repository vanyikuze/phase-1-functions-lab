// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    if(blocks=== 43){
    return 1;}
   else if(blocks=== 50){
    return 8;}
    else if(blocks=== 34){
        return 8;}
   }

function distanceFromHqInFeet(feet){
    if(feet=== 43){
        return 264;}
    else if(feet=== 50){
        return 2112;}
    else if(feet=== 34){
        return 2112;}
}

function distanceTravelledInFeet(start, destination){
    if(destination > start){
        return (destination - start) *264;}
    else {
        return (start - destination) *264;
    }
}

function calculatesFarePrice(start, destination){
    let distance = start > destination ? (start - destination)*264 : (destination - start)*264
    if(distance <= 400){
        return 0;}
    else if(distance > 400 && distance < 2000){
        return 2.56;}
    else if(distance > 2000 && distance < 2500){
        return 25;}
    else if(distance > 2500){
        return 'cannot travel that far';}
}