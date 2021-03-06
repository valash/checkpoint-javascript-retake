// NOTE: Make sure to use the `var` keyword for ALL variable declarations

// #1: Define a `Group` class with the following specifications:
// - a `name` property that is a string determined by some input (passed into the constructor)
// - a `members` property that is an empty array not determined by input (not passed into the constructor)
// - an `addMember` method that adds a person (string) to the `members` array
// Type your solution immediately below this line:

class Group {
  constructor(name){
    this.name=name;
  }
}



// #2: Create an instance of the Group class and set it to a variable called `classmates`
// Call the instance's `addMember` method to add a person to the instance's `members` array
// Type your solution immediately below this line:

class Classmates extends Group {
  constructor(addMember){
    super(name);
    this.addMember=addMember;
  }
}

var classmates = [
  name: "";
]




// NOTE: THE CODE BELOW IS FOR TESTING PURPOSES. DO NOT REMOVE OR ALTER.
if(typeof Group !== 'undefined') {
  module.exports = {
    Group
  }
}
