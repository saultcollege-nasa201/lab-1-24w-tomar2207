function validateForm() {
    var CC = document.forms["myForm"]["CC"].value;
    var subject = document.forms["myForm"]["subject"].value;
    var radioButtons = document.getElementsByName("fav_language");
    var radioSelected = false;
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    var checkboxChecked = false;
    if (CC == "") {
      alert("Please fill out the CC");
      return false;
    }
    if (subject == "") {
      alert("Please fill out the subject");
      return false;;
    }
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            radioSelected = true;
            break;
        }
    }
    if (!radioSelected) {
        alert("Please select a gender");
        return false;
    }

    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            checkboxChecked = true;
        }
    });
    if (!checkboxChecked) {
        alert("Please select at least one hobby");
        return false;
    }
  }