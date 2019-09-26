function checkValue() {
  var text;
  var lang = document.getElementById("inputValue").value;

  switch(lang) {
    case "JavaScript":
     text = "Yay!";
     break;
    case"HTML":
      text = "OK";
       break;
    case "CSS":
      text = "right";
      break;

       // add case here

       default:
        text = "You neeed to enter somethinng!";
    }
    document.getElementById("displayText").innerHTML = text;
}
