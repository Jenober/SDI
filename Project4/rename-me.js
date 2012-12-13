
/*
 Given a string that is a list of things separated by a given string,
 as well as another string separator, return a string with the first separator
 changed to the second: "a,b,c" + "," + "/" → "a/b/c".
 */
var str = "1 & 2 & 3 & 4";
alert ("The string we are starting with is: " + str);
var separator = prompt("Please enter the separator you're looking for: ");
var newseparator = prompt("Please enter the separator that you'd like to replace your previous entry with: ");


console.log(str);
var newstr = str.replace(separator, newseparator, "gi");
console.log(newstr);