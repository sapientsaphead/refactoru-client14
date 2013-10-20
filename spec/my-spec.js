// describe("Module", function() {
//   it("should do something", function() {
//     expect(true).toEqual(false);
//   });
// });

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

describe('repeatMore', function() {
  it('should repeat string the number of times the function is called', function(){
  	expect(Repeater.repeatMore('cat')).toEqual('cat');
  	expect(Repeater.repeatMore('dog')).toEqual('dogdog');
  })
  it('should have a local variable', function(){
  	expect(typeof count).toBe('undefined');
  })
})

describe('repeatFunctionTwice', function() {
  it('should repeat the function twice', function() {
  	var str ='oh';
  	var write = function() { str += 'hey'; };
  	Repeater.repeatFunctionTwice(write);
  	expect(str).toEqual("ohheyhey")
  })
})