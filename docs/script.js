function validateForm() {
    var CC = document.forms["myForm"]["CC"].value;
    var subject = document.forms["myForm"]["subject"].value;
    var radioButtons = document.getElementsByName("fav_language");
    var radioSelected = false;
    if (CC == "") {
      alert("CC must be filled out");
      return false;
    }
    if (subject == "") {
      alert("Subject must be filled out");
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
  }