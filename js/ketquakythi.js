var selectedStudent = JSON.parse(localStorage.getItem('selectedStudent'));

// Hiển thị thông tin trong card-header
var cardHeader = document.querySelector('.card-header');
cardHeader.textContent = 'Kết quả kỳ thi ' + selectedStudent.kyThi + ' của người dùng ' + selectedStudent.ten;