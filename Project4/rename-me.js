
/*
 Given a string that is a list of things separated by a given string,
 as well as another string separator, return a string with the first separator
 changed to the second: "a,b,c" + "," + "/" → "a/b/c".
 */
var swapSeparator = function(string){
    var str = string;

    alert ("The string we are starting with is: " + str);
    var separator = prompt("Please enter the separator you're looking for: ");
    var newseparator = prompt("Please enter the separator that you'd like to replace your previous entry with: ");


    console.log("You started with: " + str);
    var newstr = str.replace(separator, newseparator, "gi");
    console.log("Now you have: " + newstr);

};

/*
 Does a string follow a 123-456-7890 pattern like a phone number?
 */
var getPhoneNum = function(){
    var phoneNum = prompt("Please enter a phone number using the following format: xxx-xxx-xxxx");

    return phoneNum;

};
var isPhoneNum = function(phonenumber){
    var phoneNum = phonenumber;


    if(phoneNum.charAt(3) == "-" && phoneNum.charAt(7)== "-"){
        alert("You have entered the phone number properly!")

    }else{

        alert("You have entered the phone number improperly!")

    }

};

/*
 Does a string follow an aaa@bbb.ccc pattern like an email address?
 */
var emailCheck = function(email){
    var email = email;

    var atLoc = email.indexOf("@");
    var dotLoc = email.indexOf(".");

    if (atLoc < dotLoc){
        alert("You definitely entered an email address.");

    }else{
        alert("Are you sure that was an email address?");
    }

};

/*
 Is the string a URL? (Does it start with http: or https:?)
 */
var urlCheck = function (url){

  var url = url.toLowerCase();
  var colonLoc = url.indexOf(":")+ 1;

  var HTTP = url.substring(0,colonLoc);

    if (HTTP == "http:" | HTTP == "https:"){
        alert("You entered the address correctly.");

    }
   else{

        alert("You entered the address wrong.");
    }

  alert(HTTP);
};

/*
 Given a string version of a number such as "42", return the value as an actual Number, such as 42.
 */
var stringToNum = function(stringNum){

    var numFromString = parseInt(stringNum,10);

    var number = numFromString + 10;

    return(number);

}





var separatorString = prompt("Please enter a delineated string below.")
swapSeparator(separatorString);

isPhoneNum(getPhoneNum());

emailCheck(prompt("Enter an email address below: "));

urlCheck(prompt("Enter a web address starting with http:// or https://"));

var numFromString = stringToNum(prompt("Enter a number to add 10 to: "));
alert(numFromString);



