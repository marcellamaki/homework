// your code goes here ...
document.addEventListener('DOMContentLoaded',
  function(event) {
    //console.log("I'm connected!") - checking to make sure files are structured correctly and index.js file is accesssible in index.html

    //adding event listeners to form items

    var form = document.forms[0];
    var ageField = form.querySelector('input[name="age"]').value;
    var age = ageField;


    document.addEventListener("submit", function(event){
      event.preventDefault()
      console.log(age)
    })

  })
