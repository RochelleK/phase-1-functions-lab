// Code your solution in this file!
function distanceFromHqInBlocks(someVal){
    if (someVal >42){
        return someVal-42;
    } else {
        return 42-someVal; 
    }
}

function distanceFromHqInFeet(someVal){
    const x = distanceFromHqInBlocks(someVal);
    return x*264;

}

function distanceTravelledInFeet(start, destination){
    const x = destination - start; 
    return Math.abs(x)*264; 
}

function calculatesFarePrice(start, destination){
    const x = distanceTravelledInFeet(start, destination)
    if (x<=400){
        return 0; 
    }

    else if (x >400 && x <= 2000){
     return (x-400) * .02;
    }
    else if (x > 2000 && x < 2500) {
        return 25
    } 
    else if  (x > 2500){ 
    return 'cannot travel that far'
    }
    /*
    switch (x){
    case x<=400:
        return 0; 
    break;  
    case x >400 && x <= 2000: 
     return (x-400) * .02;
    break; 
    case x > 2000 && x < 2500:
        return 25; 
        break; 
    case x > 2500: 
    return 'cannot travel that far'
    break; 
    }*/
}
