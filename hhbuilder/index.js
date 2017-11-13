// your code goes here ...
window.onload = function(event) {
    //console.log("I'm connected!") - checking to make sure files are structured correctly and index.js file is accesssible in index.html

    // declare variables
    const myHousehold = []

    let form = document.forms[0];
    let ageField;
    let relationshipOption;
    let smoker;
    let householdList;

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

    // CRUD actions

    // CREATE

    let addButton = form.querySelector("button.add")
    console.log(addButton)

    addButton.addEventListener("click", formValidation)

    function formValidation(event) {
      event.preventDefault()
      if (isNaN(ageField) || ageField <= 0) {
        alert("Please enter a valid age greater than 0 using digits")
      } else if (relationshipOption === "") {
        alert("Please select your relationship to this household member")
      } else {
        createHouseholdMember()
      }
    }

    // helper methods:

    function createHouseholdMember() {
      //create a string add to household list
      let newMember = "Age: " + ageField + ", Relationship: " + relationshipOption + ", Smoker: " + smoker
      myHousehold.push(newMember)
      clearForm()
      addMembertoHousehold(newMember)
    }

    function clearForm() {
      //resets form to blank
      form.querySelector('input[name="age"]').value = ''
      form.querySelector('select[name="rel"]').value = ''
      form.querySelector('input[name="smoker"]').checked = false
    }

    //READ

    function addMembertoHousehold(member) {
        // to add household member to the DOM
        let thisMember = document.createTextNode(member)
        let linebreak = document.createElement("br")
        document.body.appendChild(thisMember)
        document.body.appendChild(linebreak)
    }
      // console.log(newMember)



  }
