class Person {
  name(val) {
    return val;
  }

  skill(val) {
    console.log(this.name('black') +'：'+ val);
  }

  constructor(a, b){
    // 传参
    this.a = a;
    this.b = b;
  }

  add(){
    return this.a + this.b;
  }
}

let person = new Person(1, 2);
person.skill('web')  // black：web
console.log(person.add())  // 3

class student extends Person{
  // 继承Person
}

let xiaoming = new student;
xiaoming.skill('learn'); // black：learn