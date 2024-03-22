// Form Validation for "Register"
//Validate  Name, Email
//IDs: fullName, email, username, password
// If any of the text input fields are left blank, it will return false

function validate(){
        let  fullName = document.getElementById("fullName");
        let email = document.getElementById("email");
        let username = document.getElementById("username");
        let password = document.getElementById("password");

    if(fullName.value=="" || email.value=="" || username.value=="" || password.value==""){
        console.log('Please fill out all fields');
        return false;
    }else{
        return true;
    }
}
