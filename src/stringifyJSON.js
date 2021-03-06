// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {

if (typeof(obj) === "number")
	return '' + obj + '';

if (typeof(obj) === "string")
	return '"' + obj + '"';

if (typeof(obj) === "boolean")
	return '' + obj + '';

if (typeof(obj) === "function")
	return undefined;

if (Array.isArray(obj)) {
	var results = [];

	function isEmpty(ob){
   	for(var i in ob){ return false;}
  	return true;
	}

	if (obj === []) {
		return '' + obj + '';
	}

	else {

	for (var i = 0; i < obj.length; i++) {
		results.push(stringifyJSON(obj[i]));
		}
	return '[' + results + ']';
		}
	}

if (typeof(obj) === "object") {
	var passed = [];
	var result = [];

	if (obj === null) {
		return '' + obj + '';
	}
	if (isEmpty(obj) === true) {
		return "{}";
	}

	else {

		for (var x in obj) {
			if (obj[x] !== undefined) {
				if (typeof(obj[x]) === "function") {
					result.push();
				                                   }
			else {
				result.push(stringifyJSON(x) + ':' + stringifyJSON(obj[x]) );
		                              }
		                    }
		         }
			}
	return '{' + result + '}';
  }
}