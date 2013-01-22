/**

 * Name: Houston Bennett
 * Date: 1/9/13
 * Term: 0113
 * Project 2 Javascript

 */



window.addEventListener("DOMContentLoaded",function(){

/** All JS must be in here. */

    //getElementbyID function
    function getElement(elementID){

    var x = document.getElementById(elementID);
    return x;
}

    //Bring forth the dropdown box and populate it fruitfully!

    function createDropdown(){
        var formTag = document.getElementsByTagName("form"),
            selectLI = getElement("dropdown"),
            createSelect = document.createElement("select");
        createSelect.setAttribute("id", "charSize");

        for( var i = 0, x = charSizeOpt.length; i < x; i++ ){
            var Option = document.createElement("option");
            var OptTxt = charSizeOpt[i];
            Option.setAttribute("value",OptTxt);
            Option.innerHTML = OptTxt;
            createSelect.appendChild(Option);
        };
        selectLI.appendChild(createSelect);


    }
//Find radio button value
    function getRadio(){
        var rdoButtons = document.forms[0].sex;
        for (var i=0; i < rdoButtons.length; i++){
            if(rdoButtons[i].checked){
                genderVal = rdoButtons[i].value;
            }


        }

    }


    function saveData(){

        var userID = Math.floor(Math.random()*100001);
        //Get radio button value
        getRadio();

        //Get all form field values & store them in an object.
        //Object properties contain array with form label and input values.

        var formFieldValues = {};

            formFieldValues.Size = ["Size: ",getElement("charSize").value];
            formFieldValues.Name = ["Name: ",getElement('charName').value];
            formFieldValues.Race = ["Race: ",getElement('charRace').value];
            formFieldValues.Age = ["Age: ",getElement('charAge').value];

            formFieldValues.Gender = ["Gender: ", genderVal];

            formFieldValues.Str = ["Strength: ",getElement("charStr").value];
            formFieldValues.Con = ["Constitution: ",getElement("charCon").value];
            formFieldValues.Int = ["Intelligence: ",getElement("charInt").value];
            formFieldValues.Wis = ["Wisdom: ",getElement("charWis").value];
            formFieldValues.Cha = ["Charisma: ",getElement('charCha').value];
            formFieldValues.Bio = ["Biography: ",getElement('charBio').value];

        //Save data to local storage: Use Stringify to convert object to string

        localStorage.setItem(userID,JSON.stringify(formFieldValues));
        alert("This is your character's unique ID. Save this for later! "+ userID)
        alert("Your character has been archived!");
    }

//dropdown defaults

    var charSizeOpt = ["Select a size","Tiny","Small","Medium","Large","Giant"],genderVal
        ;
    createDropdown();
//Click events

    var viewLink = getElement("ViewAll");
    var submitBtn = getElement("SubmitBtn");
    submitBtn.addEventListener("click",saveData);
    var deleteLink = getElement("DeleteAll");



    viewLink.addEventListener("click", getData);
    deleteLink.addEventListener("click", deleteData);












});




