// your code goes here ...
window.onload = function(event) {
    //console.log("I'm connected!") - checking to make sure files are structured correctly and index.js file is accesssible in index.html

    //adding event listeners to form items
    const myHousehold = []

    let form = document.forms[0];
    let ageField;
    let relationshipOption;
    let smoker;
    let householdList;

    document.addEventListener("change", function(event) {
      ageField = form.querySelector('input[name="age"]').value;
      // console.log(ageField) - checks that values are accurate
    })

    document.addEventListener("change", function(event) {
      relationshipOption = form.querySelector('select[name="rel"]').value;
      // console.log(relationshipOption) - checks that values are accurate
    })

    document.addEventListener("change", function(event) {
      smoker = form.querySelector('input[name="smoker"]').checked;
      // console.log(smoker)
    })

    let addButton = form.querySelector("button.add")
    console.log(addButton)

    addButton.addEventListener("click", createHouseholdMember)

    function createHouseholdMember(event) {
    event.preventDefault()
      householdMember = new Object
      householdMember.age = ageField
      householdMember.relationship = relationshipOption
      householdMember.smoker = smoker
      let newMember = "Age: " + householdMember.age + ", Relationship: " + householdMember.relationship + ", Smoker: " + householdMember.smoker
      myHousehold.push(newMember)
      console.log(myHousehold)
      // addMemberToDisplay(householdMember)
    }

    function addMemberToDisplay(householdMember) {

        }
      // console.log(newMember)



  }
