function a() {
console.log(this);
this.newvariable = 'hello';
}

var b = function() {
  console.log(this);
}
a();
console.log(newvariable);
b();

var c = {
  name: 'the c object',
  log: function() {
    console.log(this);
  }
}
c.log();
