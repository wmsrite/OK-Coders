/* comment */
/* test.js : run this program with `node test.js` */
/* functions within functions - one function calls the other*/

function foo () {
	console.log("calling foo");
	bar();
}

function bar () {
	console.log("calling bar");
}

foo();