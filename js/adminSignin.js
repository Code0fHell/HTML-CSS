
// kiểm tra định dạng email
const kiemTraEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

//kiểm tra các trường nhập của đăng nhập
function xacnhan(event) {
  var giatriemail = document.getElementById("email").value.trim();
  var giatrimatkhau = document.getElementById("matkhau").value.trim();
  var email = document.getElementById("email");
  var matkhau = document.getElementById("matkhau");

  if (giatriemail == "") {
    email.style.border = "1px solid #ff8471";
    loi("loi_email", "Email không được bỏ trống");
  } else if (!kiemTraEmail(giatriemail)) {
    email.style.border = "1px solid #ff8471";
    loi("loi_email", "Email sai");
  } else {
    email.style.border = "1px solid #7b5be4";
    loi("loi_email", "");
  }

  if (giatrimatkhau == "") {
    matkhau.style.border = "1px solid #ff8471";
    loi("loi_mat_khau", "Mật khẩu không được bỏ trống");
  } else if (giatrimatkhau.length < 8) {
    matkhau.style.border = "1px solid #ff8471";
    loi("loi_mat_khau", "Mật khẩu phải nhiều hơn 8 kí tự");
  } else {
    matkhau.style.border = "1px solid #7b5be4";
    loi("loi_mat_khau", "");
  }

  if (
    giatriemail == "" ||
    giatrimatkhau == "" ||
    !kiemTraEmail(giatriemail) ||
    giatrimatkhau.length < 8
  ) {
    return false;
  } 
  window.location.href="dashboard.html"
    return true;

}

function loi(id, message) {
  document.getElementById(id).innerHTML = message;
}

