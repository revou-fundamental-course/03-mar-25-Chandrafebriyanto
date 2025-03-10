// membuat ucapan selamat datang
let username = window.prompt("what your name: ")
// let login = true
while(login){
    if(username !== null){
        document.getElementById("name").textContent = "Hi, " + username;
        login = false;
    }
    else{
        window.prompt("what your name: ")
    }
}
