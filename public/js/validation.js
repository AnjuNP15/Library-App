
var error=document.getElementById("error");
var email=document.getElementById("email");



function ValidatePassword()
{    
    var password1=document.getElementById("password");
    var password2=document.getElementById("password2");


    var strength=document.getElementById("strength");
    var score = 0.0;  

    var hasEight = false;
    var hasCapital = false;
    var hasSmol = false;
    var hasNum = false;
    
    hasEight = (password.value.length >= 8);
    hasCapital = (/[A-Z]/.test(password.value));
    hasSmol = (/[a-z]/.test(password.value));
    hasNum = (/[0-9]/.test(password.value));

    score += hasEight ? 1 : 0;
    score += hasCapital ? 1 : 0;
    score += hasSmol ? 1 : 0;
    score += hasNum ? 1 : 0;

    switch(score)
    {
        case 0:           
        case 1:
            //RED
            strength.innerText="Weak";
            strength.style.color = "red";
            break;
        case 2://AMBER
        strength.innerText="Medium";
        strength.style.color = "orange";
        break;
        
            
        default:
            //GREEN
            strength.innerText="Strong";
            strength.style.color = "green";
            
         
    }
}

function ValidateEmail()
{
    var email=document.getElementById("email");
    

var regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if(regexp.test(email.value))
{
    // alert("email");
    // error.innerHtml="valid";
    error.innerText="true";
    error.style.color="green";
    return true;
    if (password1.value != password2.value){
        alert("Password doesnt match")
        return false;
    }
}
else
{
    alert("Email Invalid");
    return false;
}
if (password1.value != password2.value){
    alert("Password doesnt match")
    return false;
}
}


