function validateForm() {
    var CC = document.forms["myForm"]["CC"].value;
    var subject = document.forms["myForm"]["subject"].value;
    var radioButtons = document.getElementsByName("fav_language");
    var radioSelected = false;
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var checkboxChecked = false;
    if (CC == "") {
      document.getElementById("ccError").textContent = "\u26A0  Please fill out CC";
    }
    if (subject == "") {
      document.getElementById("subjectError").textContent = "\u26A0  Please fill out Subject";
    }
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            radioSelected = true;
            break;
        }
    }
    if (!radioSelected) {
      document.getElementById("radioError").textContent = "\u26A0  Please select Gender";
    }

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            checkboxChecked = true;
        }
    });
    if (!checkboxChecked) {
      document.getElementById("checkboxError").textContent = "\u26A0  Please select atleast one hobby";;
        return false;
    }
  }