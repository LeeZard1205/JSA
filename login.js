let mail = document.getElementById("email");
let mk = document.getElementById("mk");

function checkinf() {
  if (
    localStorage.getItem("Accounts") == null ||
    localStorage.getItem("Accounts") == JSON.stringify([])
  ) {
    alert("You haven't got an account. Please register!");
    window.location.href = "register.html";
  } else {
    var listUser = JSON.parse(localStorage.getItem("Accounts"));
    if (mail.value == "" || mk.value == "") {
      alert("Please fill in the information below!");
    } else {
      let check = 0;
      for (let i = 0; i < listUser.length; i++) {
        if (
          listUser[i].email == mail.value &&
          listUser[i].password == mk.value
        ) {
          alert("Logged in successfully");
          mail.value = "";
          mk.value = "";
          check = 1;
          listUser[i].status = "signed";
          localStorage.setItem("Accounts", JSON.stringify(listUser));
          window.location.href = "index.html";
          break;
        }
      }
      if (check == 0) {
        alert("Please check your email and password and try again!");
      }
    }
  }
}
