// Show / Hide password

function togglePassword()
{
var password = document.getElementById("password");

if(password.type === "password")
{
password.type = "text";
}
else
{
password.type = "password";
}
}


// Login Validation

function validateLogin()
{

var email = document.getElementById("email").value.trim();
var password = document.getElementById("password").value.trim();

var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

document.getElementById("emailError").innerHTML = "";
document.getElementById("passwordError").innerHTML = "";


if(email === "")
{
document.getElementById("emailError").innerHTML = "Email is required";
return false;
}

if(!email.match(emailPattern))
{
document.getElementById("emailError").innerHTML = "Enter valid email";
return false;
}

if(password === "")
{
document.getElementById("passwordError").innerHTML = "Password is required";
return false;
}

return true;

}


// Register Validation

function validateRegister()
{

var name = document.getElementById("name").value.trim();
var email = document.getElementById("email").value.trim();
var password = document.getElementById("password").value.trim();
var role = document.getElementById("role").value;

var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;


document.getElementById("nameError").innerHTML = "";
document.getElementById("emailError").innerHTML = "";
document.getElementById("passwordError").innerHTML = "";
document.getElementById("roleError").innerHTML = "";


if(name === "")
{
document.getElementById("nameError").innerHTML = "Name is required";
return false;
}

if(email === "")
{
document.getElementById("emailError").innerHTML = "Email is required";
return false;
}

if(!email.match(emailPattern))
{
document.getElementById("emailError").innerHTML = "Enter valid email";
return false;
}

if(password === "")
{
document.getElementById("passwordError").innerHTML = "Password is required";
return false;
}

if(role === "")
{
document.getElementById("roleError").innerHTML = "Select role";
return false;
}
alert("Registration Successful!");
window.location.href = "login.html";
return false;

}
function validateLogin()
{

var email = document.getElementById("email").value.trim();
var password = document.getElementById("password").value.trim();
var role = document.getElementById("role").value;

var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

document.getElementById("emailError").innerHTML = "";
document.getElementById("passwordError").innerHTML = "";

if(email === "")
{
document.getElementById("emailError").innerHTML = "Email is required";
return false;
}

if(!email.match(emailPattern))
{
document.getElementById("emailError").innerHTML = "Enter valid email";
return false;
}

if(password === "")
{
document.getElementById("passwordError").innerHTML = "Password is required";
return false;
}


if(role === "admin")
{
window.location.href = "admin/admin_users.html";
}

else if(role === "faculty")
{
window.location.href = "faculty/qr_attendance.html";
}

else if(role==="deo")
location.href="deo/deo_dashboard.html"

return false;

}