function signup(e){
    event.preventDefault();
    var username = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
    var user = {
        username : user,
        email : email,
        password : pass,
    };
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    alert("Đăng kí thành công!");

}
function login(e){
    var username = document.getElementById("user").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("pass").value;
 
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if(user == null){
        alert("Vui lòng nhập username và password");

    }
    else if( username == data.username && email == data.email && password == data.password){
        // alert("Đăng nhập thành công!");
        location.replace ("index.html");
        // location.replace("index.html");
    }
    else{
        alert("Đăng nhập không thành công!")
    }
}