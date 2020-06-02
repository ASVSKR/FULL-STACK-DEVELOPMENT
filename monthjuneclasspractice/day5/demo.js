function myFun(){
            window.alert("hii allll");
        }
function myFun1(){
    document.write("Hiii alll this is documnet .write");
}
function myFun2(){
    console.log("logging some errors");
}
function myFun3(){
    document.getElementById("ID").innerHTML = "PRACTICING JAVA TOUGHT BY DHYANAHITHA";
}
function myFun4(){
    var name;
    name = document.getElementById("textUsername").value;
    window.alert(name);
}
function myFun5(){
    var username;
    var password;
    username = document.getElementById("textUsername").value;
    password = document.getElementById("textpassword").value;
    if(username == "admin"){
        if(password == "admin"){
        window.alert("Access Granted");
        }
        else{
            window.alert("Enter correct credentials");
        }
    }
    else{
        window.alert("Enter correct credentials");
    }
}