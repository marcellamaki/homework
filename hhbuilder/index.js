window.onload = function(event) {
    //console.log("I'm connected!") - checking to make sure files are structured correctly and index.js file is accesssible in index.html

    // DECLARE VARIABLES

    //for persistence
    var myHousehold = [] // to hold an array of objects of all household members
    var updatedHousehold; // variable for temporarily holding updated values

    // elements in the DOM to work with

    //form and input values
    var form = document.forms[0];
    var ageField;
    var relationshipOption;
    var smoker;

    // id for each household member
    var id = 1;

    // buttons
    var addButton = form.querySelector("button.add")
    var submitButton = form.querySelector('button[type="submit"]')


    // ADD EVENT LISTENERS 

    //adding event listeners to form items
    document.addEventListener("change", function(event) {
      ageField = form.querySelector('input[name="age"]').value;
    })

    document.addEventListener("change", function(event) {
      relationshipOption = form.querySelector('select[name="rel"]').value;
    })

    document.addEventListener("change", function(event) {
      smoker = form.querySelector('input[name="smoker"]').checked;
    })

    // event listeners regarding adding and submitting
    addButton.addEventListener("click", formValidation)
    submitButton.addEventListener("click", submit)


    // CRUD actions

    // CREATE

    // First, before the person can be added, need to validate age and relationship option

    function formValidation(event) {
      event.preventDefault()
      if (isNaN(ageField) || ageField <= 0) {
        alert("Please enter a valid age greater than 0 using digits")
      } else if (relationshipOption === "") {
        alert("Please select your relationship to this household member")
      } else {
        // provided that the entry is valid, then create
        createHouseholdMember()

      }
    }

    // helper methods:

    function createHouseholdMember() {
      //create an object to be used later to send to back end
      householdMember = new Object;
        householdMember.age = parseInt(ageField);
        householdMember.relationship = relationshipOption;
        householdMember.smoker = smoker;
        householdMember.id = id;
        id += 1; // one this id is taken, it must be incremented
        myHousehold.push(householdMember);
        clearForm();
      addMemberToHousehold(householdMember);
    }

    function clearForm() {
      //resets form to blank
      form.querySelector('input[name="age"]').value = "";
      form.querySelector('select[name="rel"]').value = "";
      form.querySelector('input[name="smoker"]').checked = false;
    }

    //READ

    function addMemberToHousehold(householdMember) {
        // to add household member to the DOM
        // create a string with the new information
        var newMember = "Age: " + householdMember.age + ", Relationship: " + householdMember.relationship + ", Smoker: " + householdMember.smoker;
        //create a section to hold it
        var memberListView = document.createElement("UL");
        // create an element with text and a unique ID
        var thisListItem = document.createElement("LI");
        var thisMemberText = document.createTextNode(newMember);
        thisListItem.appendChild(thisMemberText);
        thisListItem.setAttribute("id", householdMember.id);

        //create delete button
        var deleteButton = document.createElement("BUTTON");
        var deleteText= document.createTextNode("Delete");
        deleteButton.appendChild(deleteText);
        deleteButton.setAttribute("id", "Delete");
        // append to the screen
        memberListView.appendChild(thisListItem).appendChild(deleteButton);
        submitButton.parentNode.insertBefore(memberListView, submitButton);
        deleteButton.addEventListener("click", deleteMemberFromHousehold);
    }

    //DELETE


     function deleteMemberFromHousehold(event) {
       event.preventDefault();
       deleteElement = event.target.parentNode;
       // update the household by using the new array
       updatedHousehold= myHousehold.filter(function(member){
        return member.id != deleteElement.id
      });
       //reset myHousehold value
       myHousehold = updatedHousehold;
       event.target.parentNode.remove();
     }


     //SUBMISSION


     // select the <pre></pre>
    var pre = document.body.querySelector('pre.debug');

     function submit(event) {
      event.preventDefault();
      // serialize the JSON and create a Text Node
      var preview = document.createTextNode(JSON.stringify(myHousehold));
      // insert into the HTML
      pre.parentNode.insertBefore(preview, pre);
     }

  }
