class Dog {
  constructor(name, color, breed) {
    this.name = name;
    this.color = color;
    this.breed = breed;
  }

  goodDoggo(){
    document.getElementById('hd1').innerHTML = ('Good boy '+ this.name + ' You ' + this.breed);
    console.log('Good boy '+ this.name + ' You ' + this.breed);
  }
}


let dog = new Dog ('Violet', 'Brindle','German Shepard Mutt');
let dog2 = new Dog ('Yodi', 'Brown with Black and White', 'Sheltie');
let dog3 = new Dog ('Chica','Brindle','Annoying Rat Thing');


//create array cald dogs
//push each dog to the array
//write a for of loop
//inside the loop call goodDoggo on each dog

let dogs = [dog, dog2, dog3];
for (let x of dogs) {
  x.goodDoggo();}
