class Human
{
  constructor(type = 'human'){this.type = type;}

  static isHuman(input){return input instanceof Human;}

  breath(){console.log("a-a-a-ham")}

}

class Zero extends Human{
  constructor(type,firstName,lastName){
    super(type);
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayName(){
    super.breath();
    console.log(`${this.firstName} ${this.lastName}`);
  }


}

var newZero = new Zero('human','kim','chursu');
console.log(Human.isHuman(newZero));
newZero.sayName();
