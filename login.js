function main() {
   let a = document.getElementById("uname").value;
   let b = document.getElementById("pass").value;
   if (a != "" && b != "") {
      if (a == "fy" && b == "s1") {
         let c = document.getElementById('login-btn');
         let d = "./sem1bca.html";
         c.addEventListener('click',() => {
            window.open(d,"_self")
         })
      }else if (a == "fy" && b == "s2") {
         let c = document.getElementById('login-btn');
         let d = "./sem2bca.html";
         c.addEventListener('click',() => {
            window.open(d,"_self")
         })
      }else if (a == "sy" && b == "s3") {
         let c = document.getElementById('login-btn');
         let d = "./sem3bca.html";
         c.addEventListener('click',() => {
            window.open(d,"_self")
         })
      }else if (a == "sy" && b == "s4") {
         let c = document.getElementById('login-btn');
         let d = "./sem4bca.html";
         c.addEventListener('click',() => {
            window.open(d,"_self")
         })
      }else if (a == "ty" && b == "s5") {
         let c = document.getElementById('login-btn');
         let d = "./sem5bca.html";
         c.addEventListener('click',() => {
            window.open(d,"_self")
         })
      }else if (a == "ty" && b == "s6") {
         let c = document.getElementById('login-btn');
         let d = "./sem6bca.html";
         c.addEventListener('click',() => {
            window.open(d,"_self")
         })
      }
   }else {
      alert("Username and Password are Blank.");
   }
}