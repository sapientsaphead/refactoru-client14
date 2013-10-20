
// Part I: Organizing code with object literals
// var Repeater = {
// 	repeatString: function repeatString(str,n){
// 	 	var array = [];
// 		for (var i=0; i<n; i++){
// 			array.push(str); 
// 		}
// 		return array.join('');
// 	},
// 	repeatFunction: function repeatFunction(f,n){
// 		for (var i=0; i<n; i++){
// 			if (f(i) === false) return;
// 		}
// 	}
// };

// Part II: Organizing codde with the module pattern

// var Repeater = (function Repeater() {	
// 	var count = 0;
// 	return {
// 		repeatString: function repeatString(str,n){
// 		 	var repeatedString = '';
// 			for (var i=0; i<n; i++){
// 				repeatedString += str; 
// 			}
// 			console.log(repeatedString);
// 			return repeatedString;
// 		},
// 		repeatFunction: function repeatFunction(f,n){
// 			var repeatedF;
// 			for (var i=0; i<n; i++){
// 				repeatedF += f();
// 			}
// 			return repeatedF;
// 		},
// 		repeatMore: function repeatMore(str){
// 			var array = [];
// 			count++;
// 			for (var i=0; i<count; i++){
// 				array.push(str);
// 			}
// 			return array.join('');
// 		}
// 	}
// })();

// console.log("repeat cat", Repeater.repeatMore('cat'));
// console.log("repeat dog", Repeater.repeatMore('dog'));
// console.log("repeat bat", Repeater.repeatMore('bat'));
// console.log("repeat lion", Repeater.repeatMore('lion'));
// console.log("repeat lemur", Repeater.repeatMore('lemur'));

// Part III: Organizing the code with the revealing module pattern

var Repeater = (function Repeater() {
	var count = 0;
	var repeatString = function repeatString(str,n){
		 	var repeatedString = '';
			for (var i=0; i<n; i++){
				repeatedString += str; 
			}
			console.log(repeatedString);
			return repeatedString;
	}
	var	repeatFunction = function repeatFunction(f,n){
			var repeatedF;
			for (var i=0; i<n; i++){
				repeatedF += f();
			}
			return repeatedF;
	}
	var	repeatMore = function repeatMore(str){
			var array = [];
			count++;
			for (var i=0; i<count; i++){
				array.push(str);
			}
			return array.join('');
	}
	var repeatFunctionTwice = function repeatFunctionTwice(f) {
		var repeatF = f() + f()
		return repeatF;
	}
	return {
		repeatString: repeatString,
		repeatFunction: repeatFunction,
		repeatMore: repeatMore,
		repeatFunctionTwice: repeatFunctionTwice
	}
})();
