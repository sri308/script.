function vfun() {
    var unname = document.forms["myform"]["Username"].value;
    var upswd = document.forms["myform"]["password"].value;

    if (!unname) {
        document.getElementById("ErrorBox").innerHTML = "Enter the username";
        return false;
    }
    if (!upswd) {
        document.getElementById("ErrorBox").innerHTML = "Enter the password";
        return false;
    }

    alert("Login Successfully");
    return true;
}

function vfun1() {
    var unname = document.forms["registerForm"]["regUsername"].value;
    var uemail = document.forms["registerForm"]["regEmail"].value;
    var upswd = document.forms["registerForm"]["regPassword"].value;
    var upswd2 = document.forms["registerForm"]["regPassword2"].value;

    if (!unname) {
        document.getElementById("RegisterErrorBox").innerHTML = "Enter the username";
        return false;
    }
    if (!uemail) {
        document.getElementById("RegisterErrorBox").innerHTML = "Enter the email";
        return false;
    }
    if (!upswd) {
        document.getElementById("RegisterErrorBox").innerHTML = "Enter the password";
        return false;
    }
    if (!upswd2) {
        document.getElementById("RegisterErrorBox").innerHTML = "Enter the confirm password";
        return false;
    }
    if (upswd !== upswd2) {
        document.getElementById("RegisterErrorBox").innerHTML = "Passwords do not match";
        return false;
    }

    alert("Register Successfully");
    return true;
}
