//Get the element of username, password and form from html file
var input_username = document.getElementById('username');
var input_password = document.getElementById('password');
var form_login = document.getElementById('login');

//Check the event of form
if(form_login.attachEvent){
    form_login.attachEvent('submit', onFormSubmit);
} else{
    form_login.addEventListener('submit', onFormSubmit);
}

//Check email function
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
function isPassword(password) {
    return /[a-z]/.test(password) && /[0-9]/.test(password) && /[A-Z]/.test(password)
}
// Check the requirement of username and password
function checkValidate(){
    var isCheck = true;
    if(input_username.value == null || input_password.value == null)
    {
        isCheck = false;
    } else if(!isEmail(input_username.value)){
        isCheck = false;
    } else if(!isPassword(input_password.value) || input_password.value.length < 8){
        isCheck = false;
    }
    return isCheck;
}
//Finish
function onFormSubmit(event){
    if(checkValidate())
    {
        alert("Success!")
    }
    else
    {
        alert("Wrong! Try agian")
    }
}
