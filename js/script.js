// // tittle: membuat ucapan selamat datang
// let username;
// let login = false

// while(!login){
//     username = window.prompt("what your name: ")
//     if(username !== null && isNaN(username)){
//         document.getElementById("username").textContent = "Hi," + username;
//         document.getElementById("thanks").textContent = "Thank You," + username;
//         login = true;
//     }
// }

// tittle: membuat fungsi message
let username;
let date;
let men;
let women;
let message;

document.getElementById("submit").onclick = function () {
  username = document.getElementById("name").value.trim();
  date = document.getElementById("date").value.trim();
  men = document.getElementById("men");
  women = document.getElementById("women");
  message = document.getElementById("message").value.trim();

  if (
    username === "" ||
    date === "" ||
    message === "" ||
    (!men.checked && !women.checked)
  ) {
    window.alert("Error: Semua input harus diisi!");
    return;
  }

  else{
    if (men.checked) {
        document.getElementById("output-name").textContent = "Name: " + username;
        document.getElementById("output-date").textContent = "Date: " + date;
        document.getElementById("output-gender").textContent = "Gender: Men";
        document.getElementById("output-message").textContent =
          "Message: " + message;
      } else if (women.checked) {
        document.getElementById("output-name").textContent = "Name: " + username;
        document.getElementById("output-date").textContent = "Date: " + date;
        document.getElementById("output-gender").textContent = "Gender: Women";
        document.getElementById("output-message").textContent =
          "Message: " + message;
      } else {
        window.alert("error");
      }
  }
};
