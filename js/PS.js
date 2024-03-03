const password=document.getElementById('password');
const submit=document.getElementById("submit");
const kiemTraEmail = (password) => {
    return password.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  function check(){
    var giatriemail=document.getElementById("password").value.trim();
    if (giatriemail == "" || !kiemTraEmail(giatriemail)) {     
        alert("Gmail is invalid!");
        document.getElementById("password").value = "";
        
    } 
     else {
      alert("Đã gửi mã đăng nhập về gmail của bạn!");
      
          window.location.href="./change.html";
        
    }
    
}