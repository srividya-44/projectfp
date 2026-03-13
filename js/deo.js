let form = document.getElementById("studentForm");

form.addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let regno = document.getElementById("regno").value;
let department = document.getElementById("department").value;

let student = {
    name: name,
    regno: regno,
    department: department
};

// Save student in local storage
localStorage.setItem(regno, JSON.stringify(student));

// Show success message
let msg = document.getElementById("message");
msg.innerText = "Student Added Successfully!";
msg.style.color = "green";

// Change button
let btn = document.getElementById("addBtn");
btn.innerText = "Saved";
btn.style.background = "green";

// Redirect after 2 seconds
setTimeout(function(){

window.location.href = "marks_entry.html";

},2000);

});