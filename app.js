function sayHiLater() {
  var greeting = 'hi';
  setTimeout(function() {
    console.log(greeting);
  }, 3000);
}
sayHiLater();

function tellMeWhenDone(callback) {
  var a = 1000;
  var b = 2000;

  callback();
}

tellMeWhenDone(function() {
  console.log('i am done');
});