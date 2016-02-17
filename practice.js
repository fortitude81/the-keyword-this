//We're in a job interview. Answer the following questions (try to not look at your notes unless you have to).
  // 1) What is the purpose of the 'this keyword'?

      //Answer
      the value of this is determined on the context in which its called
  // 2) What are the four rules that govern what the 'this keyword' is bound to and describe each?

      //Answer
      implicit(left of the dot binding, the obj is the context), 
      explicit(call,apply, or bind, can pass arguments)
      new binding (constuctor binding, this becomes the obj being created)
      window binding (global scope, browser, produces errors in strict mode)

  // 3) What is the difference between call and apply?
      apply takes an array (if dont know how many arg are comming in)
      call give arguments one at a time, calling a function and passing obj as context
      bind (does not invoke func, it returns a new function without calling it)
      //Answer

  // 4) What does .bind do?

      //Answer


//Next Problem

//Create an object called user which has the following properties.
  //username --> which is a string
  //email --> which is a string
  //getUsername --> which is a function that returns the current object's username property. *Don't use 'user' instead use the 'this' keyword*

    //Code Here
var user = {
  username: "nitsuj",
  email: "fortitude1981@gmail.com",
  getUsername: function() {
    return this.username;
  }
}
//Now, invoke the getUsername method and verify you got the username of the object and not anything else.
user.getUsername();

//Next Problem


// Write the function definitions which will make the following function invocations function properly.
var Car = function(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year; 
    this.move = 0;          // start at 0
    this.moveCar = function() {  //func that adds 10
      this.move +=10 ; 
      return this.move; 
    }
}
  //Function Invocations Here

var prius = new Car('Toyota', 'Prius', 2011);
var mustang = new Car('Ford', 'Mustang', 2013);

prius.moveCar(); //increments prius' move property by 10. Returns the new move property.
mustang.moveCar(); //increments mustang' move property by 10. Returns the new move property.

//Hint, you'll need to write a moveCar function which is added to every object that is being returned from the Car function. You'll also need to use the 'this' keyword properly in order to make sure you're invoking moveCar on the right object (prius vs mustang).



//Continuation of previous problem

var getYear = function(){
  return this.year;
};

//Above you're given the getYear function. Using your prius and mustang objects from above, use the proper syntax that will allow for you to call the getYear function with the prius then the mustang objects being the focal objects. *Don't add getYear as a property on both objects*.

//Note(no tests)
  //Code Here
getYear.call(prius);

//New Problem



var myUser = {
  username: 'iliketurtles',
  age: 13,
  email: 'iliketurtles@gmail.com'
};

var getMyUsername = function(){
  console.log(this.username);
};

//setTimeout(getMyUsername, 5000);

//Above you're given an object, a function, and a setTimeout invocation. After 5 seconds, what will the getUsername function return?
//Note(no tests)
//Answer Here
undefined   -  because this. isnt attached to anything
//In the example above, what is the 'this keyword' bound to when getUsername runs?

  //Answer Here

//Fix the setTimeout invocation so that the user object will be the focal object when getUsername is ran.

//setTimeout(function() {getMyUsername(myUser); }, 5000);

setTimeout(getMyUsername.bind(myUser), 5000);  //.bind doesnt invoke, just returns a new func with the context of the obj passed

