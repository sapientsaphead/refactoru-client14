### Client14: Module Patterns

#### Objective

Write two functions defined within a module. Use three different module techniques: object literal, the module pattern, and the revealing module pattern.

The Repeater module hsould contain the following two methods:
* `repeatString(str, n)` - Returns a string repeated n times:
  * e.g. `repeatString('cat', 3)` should return 'catcatcat'.
* `repeatFunction(f,n)` - Calls a function n times.
  * e.g. `repeatFunction(function() { console.log('hi'); }, 3)` should print out 'hi' to the console three times in a row.

#### Skills
* Immediately Invoked Function Expression (IIFE)
* Module Pattern
* Revealing Module Pattern
* Test Driven Development

#### Resources
* [Immediately Invoked Function Expression (IIFE)](http://benalman.com/news/2010/11/immediately-invoked-function-expression/)
* [Using Objects to Organize Your Code](http://rmurphey.com/blog/2009/10/15/using-objects-to-organize-your-code/)
* [Learning Javascript Design Patterns](http://addyosmani.com/resources/essentialjsdesignpatterns/book/)

#### Requirements

##### Part I: Organizing code with object literals
1. Define an object literal with two properties: `repeatString` and `repeatFunction`:
  ```
  var Repeater = {
    repeatString: ...,
    repeatFunction: ...
  };
  ```
2. Set up a Jasmine unit test with the below test spec. Follow the instructions in [Test Drive 102](http://fall2013.refactoru.com/exercises/client-js/test-drive-102) if you need a reminder on how to create unit tests with Jasmine.
  ```
  describe('repeatString', function() {
   it('should return a string repeated n times', function() {
    expect(Repeater.repeatString('cat', 3)).toEqual('catcatcat');
   });
  });
  
  describe('repeatFunction', function() {
   it('should call a function n times', function() {
    var str = 'oh';
    var write = function() { str += 'hi'; };
    Repeater.repeatFunction(write, 3);
    expect(str).toEqual('ohhihihi');
   });
  });
  ```
3. Implement repeatString and repeatFunction to make the tests pass (test driven development).
  ```
  Congratulations! Since your functions are defined inside the Repeater object, they are self-contained and won't conflict with global functions with the same name. This demonstrates the principle of encapsulation; your code is grouped together and separated from other code within your project.
  ```

##### Part II: Organizing code with the module pattern
1. Define an immediately invoked function expression (IIFE)
  ``
  var Repeater = (function() {
   ...
  })();
  ```
2. Inside the IIFE, return an object literal with repeatString and repeatFunction defined.
3. Refresh your test runner and ensure the tests still pass.
4. Create a new function `repeatMore` which is the same as repeatString but only takes a single argument (the string) and repats the string once the first time it is called, twice the second time it is called, etc. You will need to declare a local variable `count` which keeps track of how many times you have called the function.
e.g.
  ```
  Repeater.repeatMore('cat'); // cat
  Repeater.repeatMore('dog'); // dogdog
  Repeater.repeatMore('bat'); // batbatbat
  Repeater.repeatMore('lion'); // lionlionlionlion
  Repeater.repeatMore('lemur'); // lemurlemurlemurlemurlemur
  ```
5. Refresh your test runner and ensure the tests still pass.
6. Add the following code to your test spec to test that the local variable inside your IIFE is not accessible in the global scope. (If you didn't name your variable `count`, change the test below to use your variable name.)
  ```
  expect(typeof count).toBe('undefined');
  ```
7. Refresh your test runner and ensure the tests still pass.
  ```
  It makes sense to keep variables private to your module (i.e. not accessible outside your module). The public interface (the variables or functions that users of your module access) is thus cleaner, easier to understand, and less susceptible to conflicts. This is what the module pattern accomplishes through the handy scoping effects of the IIFE.
  ```

##### Part III: Organizing code with the revealing module pattern.
1. Rewrite the code from Part II to use the Revealing Module Pattern as explained in the lecture and in Essential JS Design Patterns.
2. Refresh your test runner and ensure the tests still pass.
3. Create a new function on the module called repeatFunctionTwice which, unsurprisingly, calls repeatFunction twice.
  ```
  This may not seem like a big accomplishment, but in the previous module pattern, you couldn't access repeatFunction from repeatFunctionTwice. This is because the object literal on which they are defined is being returned immediately, so you can't access other properties from within the object. In the revealing module pattern, because variables are first declared in the local scope before being returned in an object, they have access to each other.
  ```
  
```
Success! You now have three techniques for organizing and encapsulating your code. Whether you are writing code on a team or writing libraries for thousands of developers you will have complete control over which variables are publically accessible and which are internal to your script.
```
