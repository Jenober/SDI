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

    //Bring forth the dropdown box and populate it dynamically!

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

    function toggleController(n){
        switch(n){
            case "on":
                getElement('charForm').style.display = 'none';
                getElement('DeleteAll').style.display = 'inline';
                getElement('ViewAll').style.display = 'none';
                getElement('NewChar').style.display = 'inline';
                break;
            case 'off':
                getElement('charForm').style.display = 'block';
                getElement('DeleteAll').style.display = 'inline';
                getElement('ViewAll').style.display = 'inline';
                getElement('NewChar').style.display = 'none';
                getElement('elements').style.display = 'none';
                break;

            default:
                return false;

        }
    }

    function getData(){
        if(localStorage.length===0){
            alert("There is nothing to show!")
        }
        else{


        toggleController('on');
        //Fetch local data and display.
        var createDiv = document.createElement("div");
        createDiv.setAttribute("id","elements");
        var makeList = document.createElement("ul");
        createDiv.appendChild(makeList);
        document.body.appendChild(createDiv);
        getElement('elements').style.display = 'block';
        for(var num = 0, len = localStorage.length; num<len;num++){

            var ListItem = document.createElement("li");
            makeList.appendChild(ListItem);

            var key = localStorage.key(num);
            var value =localStorage.getItem(key);
            //Objectify the string from local storage.
            var thing = JSON.parse(value);

            //creating another list
            var subList = document.createElement('ul');

            ListItem.appendChild(subList);


            for(var i in thing){
                var makeSub = document.createElement('li');
                subList.appendChild(makeSub);
                var subLabel = thing[i][0]+" "+thing[i][1];
                makeSub.innerHTML = subLabel;

            }



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
        window.location.reload();
    }

    function deleteData(){
        if(localStorage.length===0){
            alert("There is nothing to delete!")
        }
        else{
            localStorage.clear();
            alert("All characters have been deleted!");
            window.location.reload();
        }

    }

//dropdown defaults

    var charSizeOpt = ["Select a size","Tiny","Small","Medium","Large","Giant"],genderVal
        ;
    createDropdown();
//Click events

    var viewLink = getElement("ViewAll");
    viewLink.addEventListener("click", getData);
    var submitBtn = getElement("SubmitBtn");
    submitBtn.addEventListener("click",saveData);
    var deleteLink = getElement("DeleteAll");
    deleteLink.addEventListener("click", deleteData);












});




