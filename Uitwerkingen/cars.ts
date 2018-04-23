class Car{
    type: string;
    maxSpeed:number;
    timeBehind:number;
    constructor(type: string,maxSpeed:number ) {
        this.type= type;
        this.maxSpeed=maxSpeed; }

    setTimeBehind(time:number){
        this.timeBehind = time;}

}

class Race{
    cars:Car[];
    distance:number;
    constructor(distance:number){
        this.cars = new Array();
        this.distance = distance;
    }

    sortCarsList() {
        this.cars.sort(this.compareCarSpeed);
        let winningTime:number = this.getTime(this.cars[0].maxSpeed, this.distance)
        for(let car of this.cars){
            car.setTimeBehind(this.getTime(car.maxSpeed, this.distance)-winningTime);
        }
    }

    compareCarSpeed(car1: Car, car2: Car) {
        if (car1.maxSpeed <car2.maxSpeed)
            return 1;
        if (car1.maxSpeed > car2.maxSpeed)
            return -1;
        return 0;
    }

    getTime(speed:number, distance:number){
        //time in seconds
        return (distance*3600/speed);
    }
}


function makeListOfCars(){
    let race:Race =new Race(300);
    let returnValue = "";

    race.cars.push(new Car("Max", 360), new Car("Vettel", 300), new Car("Bruce", 200));
    race.sortCarsList();
    for(let car of race.cars){
        returnValue = returnValue + " " + car.type + " : " + car.timeBehind;
    }
    return returnValue;

}
document.body.innerHTML = makeListOfCars();