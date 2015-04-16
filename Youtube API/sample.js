// Sample code of 'GET' request

var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.codecademy.com/doesnt_exist", false);
xhr.send();
console.log(xhr.status);		// should print 404 because file not found