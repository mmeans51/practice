var a = 3;
var b;
b = a;
a = 2;

console.log(a,b);

// by reference
var c = {
  greeting: 'hi'
};
var d;

d = c;
c.greeting = 'hello';
console.log(c);
console.log(d);



function changeGreeting(obj) {
  obj.greeting = 'hola';
}

changeGreeting(d);
console.log(c,d);

c = { greeting: 'howdy' };

console.log(c)
console.log(d);
