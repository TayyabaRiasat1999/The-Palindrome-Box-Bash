var year = new Date().getFullYear();
document.getElementById('copyright-year').innerHTML=year;


      const inputString = document.getElementById('userString');
      const display = document.getElementById('displayText');
      
      document.getElementById("userString").addEventListener("keyup", function(event) 
        {
          event.preventDefault();

          if (event.keyCode === 13) 
          {
           document.getElementById("myButton").click();
          }
      });

      function myfunction()
      {
        var inpString = inputString.value;
        if (inpString===""){

           alert("Nothing entered the application will go back to home page.");
           window.location.href = "..\\home.html";
        }
        else
        {
           var reg = /[\W_]/g;
           var sub_String = inpString.toLowerCase().replace(reg,"");
           var revered = sub_String.split("").reverse().join("");
           if (revered=== sub_String) {
            document.getElementById('correctanswer').play();
            display.innerHTML = "You entered: " + inputString.value + "\n Yes, the above string is a Palindrome.";
            
           }
           
           else{
            document.getElementById('wronganswer').play();

            display.innerHTML = "You entered: " + inputString.value + "\n No, the above string is not a Palindrome.";
            
           }
        }
      }
      