let inputField = document.getElementById("inputField");

document.getElementById("myForm").addEventListener("submit", function(event) {
  let inputValue = inputField.value;

  let pattern = /[^a-zA-Z0-9]/;

  if (pattern.test(inputValue)) {
    alert("Only enter letters and numbers please. Try Again.")
    return false;
  } else {
    alert("Success!")
  }
});