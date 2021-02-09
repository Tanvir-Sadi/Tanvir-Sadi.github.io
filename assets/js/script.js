// slider-range

var slider = document.getElementById("myRange");
var output = document.getElementById("passwordDigit");
var genaratedPassword = document.getElementById("genaratedPassword");
var resetPassword = document.getElementById("resetPassword");
var copyPassword = document.getElementById("copyPassword");
var uppercase = document.getElementById("uppercase");
var lowercase =  document.getElementById("lowercase");
var symble =  document.getElementById("symble");
var number =  document.getElementById("number");
var clipboard = new ClipboardJS('#copyPassword');

clipboard.on('success', function(e) {
  console.info('Action:', e.action);
  console.info('Text:', e.text);
  console.info('Trigger:', e.trigger);
  e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});

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
  genaratedPassword.value = makeid(output.value);
}

// Reload random genarated password again
resetPassword.onclick = function() {
  console.log(makeid(output.value));
  genaratedPassword.value = makeid(output.value);
}


function makeid(length) {
   var result = '';
   var characters = '';
   var ul = 'QWERTYUIOPASDFGHJKLZXCVBNM';
   var ll = 'qwertyuiopasdfghjklzxcvbnm';
   var sl = '!@#$%^&*()_+-=';
   var nl = '1234567890';
   characters = makeResult(uppercase,ul,characters);
   characters = makeResult(lowercase,ll,characters);
   characters = makeResult(symble,sl,characters);
   characters = makeResult(number,nl,characters);
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

function makeResult(el,s,characters){
  if (el.checked == true) {
    if(!characters.includes(s)){
      characters += s;
    }
  } else {
    characters = characters.replace(s,"");
  }
  return characters;
}
