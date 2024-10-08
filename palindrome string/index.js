var year = new Date().getFullYear();
document.getElementById('copyright-year').innerHTML=year;
// getting userinput input field by id
const inputString = document.getElementById('userString');

// getting area to show text by id
const display = document.getElementById('displayText');

document.getElementById("userString").addEventListener("keyup", function(event) 
  {
    event.preventDefault();

    if (event.keyCode === 13) 
    {
      document.getElementById("myButton").click();
    }
});

function check()
{
  var inpString = inputString.value;
  if (inpString===""){

      alert("Nothing entered the application will go back to home page.");
      window.location.href = "..\\home.html";
  }
  else
  {
    
// removing characters from input string and converting into lowercase
      var reg = /[\W_]/g;
      var sub_String = inpString.toLowerCase().replace(reg,"");
// reversing the input string
      var revered = sub_String.split("").reverse().join("");
      
// checking if input and reversed string are same
      if (revered=== sub_String) {
// play audio
      document.getElementById('correctanswer').play();
      //display result
      display.innerHTML = "You entered: " + inputString.value + "\n Yes, the above string is a Palindrome.";
      
      }
      
      else{
      document.getElementById('wronganswer').play();

      display.innerHTML = "You entered: " + inputString.value + "\n No, the above string is not a Palindrome.";
      
      }
  }
}
      
