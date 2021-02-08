// slider-range

var slider = document.getElementById("myRange");
var output = document.getElementById("passwordDigit");
var genaratedPassword = document.getElementById("genaratedPassword");

output.value = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.value = this.value;
  console.log(makeid(output.value));
  genaratedPassword.value = makeid(output.value);
}

output = document.getElementById("passwordDigit");
// Update the current slider value (each time you drag the slider handle)
output.oninput = function() {
  if (output.value > 50) {
    this.value = 50;
  }else if (output.value < 1) {
    // this.value = 1;
  }
  slider.value = output.value;
  console.log(makeid(output.value));
  genaratedPassword.value= makeid(output.value);
}

function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
