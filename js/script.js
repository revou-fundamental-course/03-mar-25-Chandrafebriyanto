// membuat ucapan selamat datang
let username;
let login = false

while(!login){
    username = window.prompt("what your name: ")
    if(username !== null && isNaN(username)){
        document.getElementById("name").textContent = "Hi, " + username;
        login = true;
    }
}
