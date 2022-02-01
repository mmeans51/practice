function greet(name) {
  console.log('hello ' + name);
}
greet('john');

var greetfunc = function(name) {
console.log('hello ' + name);
};

greetfunc('john');

var greeting = function(name)  {
  console.log('hello ' + name);
  }('john');