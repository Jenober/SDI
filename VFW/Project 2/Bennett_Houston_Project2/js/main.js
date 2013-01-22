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

//dropdown defaults

    var charSizeOpt = ["Select a size","Tiny","Small","Medium","Large","Giant"]
    createDropdown();
//Click events

    var viewLink = getElement("ViewAll");
    var submitBtn = getElement("SubmitBtn")
    var deleteLink = getElement("DeleteAll");



    viewLink.addEventListener("click", getData);
    deleteLink.addEventListener("click", deleteData);
    submitBtn.addEventListener("click",SUBMIT);











});




