class Animal{
    type: string;
    name: string;
    constructor(name:string){this.name=name;}
    getType(){
        return this.type;
    }
    getName() {
        return this.name;
    }
}

class Dog extends Animal{
    constructor(name:string){
        super(name);
        this.type ="DOG";
    }

}

class Cat extends Animal{
    constructor(name:string){
        super(name);
        this.type ="CAT";
    }

}



function printAnimals(animals:Animal[]){
   let result:string = "";
   for(let a of animals) {
        result=result+a.getName() + a.getType();
   }

    return result;
}

var animals:Animal[] = [new Dog("Brutus"), new Cat("Minoush")]
document.body.innerHTML = printAnimals(animals);
