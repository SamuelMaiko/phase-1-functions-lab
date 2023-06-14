// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    if(distance>42){
        distance=distance-42;
    }
    else{
        distance=42-distance;
    }
    return distance;
}

function distanceFromHqInFeet(distance){
 const newDistance=distanceFromHqInBlocks(distance)*264;
return newDistance;
}

function distanceTravelledInFeet(a,b){
    let travelledDistance;
    if(a<b){
 travelledDistance=b-a;
}
else if(a>b){
    travelledDistance=a-b;
}
const convertedDistance=travelledDistance*264;
return convertedDistance;
}

function calculatesFarePrice(start, destination){
    let distanceCovered;
    if(start<destination){
        distanceCovered=destination-start;
    }
    else if(start>destination){
        distanceCovered=start-destination;
    }
const convertedDistance2=distanceCovered*264;

let fare;
 switch(true){
    case (convertedDistance2<400):
        fare=0;
        break;
    case (convertedDistance2>400 && convertedDistance2<2000):
        const remDistance=convertedDistance2-400;
    fare=(remDistance*2)/100; 
        break;

        case (convertedDistance2>2500):
        fare="cannot travel that far";
        break;
    case (convertedDistance2>2000||convertedDistance2<2500):
        fare=25;
        break;
    
 }
 return fare;
}