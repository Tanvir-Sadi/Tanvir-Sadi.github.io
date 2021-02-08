// slider-range

var slider = document.getElementById("myRange");
var output = document.getElementById("passwordDigit");
output.value = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.value = this.value;
}

output = document.getElementById("passwordDigit");
// Update the current slider value (each time you drag the slider handle)
output.oninput = function() {
  slider.value = this.value;
}
