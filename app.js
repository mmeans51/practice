var person = {
  firstname: 'john',
  lastname: 'doe',
  getFullName: function() {
    var fullname = this.firstname + ' ' + this.lastname;
    return fullname;
  }
}

var logName = function(lang1, lang2) {
  console.log('logged: ' + this.getFullName());
  console.log('arguments: ' + lang1 + ' ' + lang2);
}

var logPersonName = logName.bind(person);

logPersonName();

logName.call(person, 'en', 'es');
logName.apply(person, ['en', 'es'])