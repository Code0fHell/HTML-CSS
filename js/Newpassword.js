const newpassword=document.getElementById("newpassword");
const renewpassword=document.getElementById("renewpassword");
const ma=document.getElementById("ma");
const sub=document.getElementById("newsub");
function check(){
    var giatrimatkhau = document.getElementById("newpassword").value.trim();
    var matkhau=document.getElementById("newpassword");
    var laimatkhau=document.getElementById("renewpassword");
    var giatrimatkhaunew=document.getElementById("renewpassword").value.trim();
    var ma=document.getElementById("ma");
    var nhapma=document.getElementById("ma").value.trim();
    if (giatrimatkhau == "") {
        matkhau.style.border = "1px solid #ff8471";
        alert("Mật khẩu không được bỏ trống");
      } else if (giatrimatkhau.length < 8) {
        matkhau.style.border = "1px solid #ff8471";
        alert("Vui lòng nhập mật khẩu nhiều hơn 8 ký tự");
        document.getElementById("newpassword").value="";
      } else {
        if (giatrimatkhaunew == "") {
          laimatkhau.style.border = "1px solid #ff8471";
          alert("Vui lòng hoàn thiện mật khẩu ");
          
        }  else {
          if(giatrimatkhaunew.length < 8){
            laimatkhau.style.border = "1px solid #ff8471";
          alert("Vui lòng hoàn thiện mật khẩu ");
          document.getElementById("renewpassword").value="";
          }
          else {
            if(nhapma.length < 3)
            {
              ma.style.border="1px solid #ff8471";
              alert("Vui lòng nhập mã xác nhận ");
              document.getElementById("newpassword").value="";
              document.getElementById("renewpassword").value="";
            }
            else{
            if(giatrimatkhaunew===giatrimatkhau){
              alert("Đổi mật khẩu thành công! Vui lòng đăng nhập để tiếp tục");
              window.location.href="./index.html";
            }
            else alert("Mật khẩu không khớp nhau!");
          }
        }
        }
      }
    
      
}
