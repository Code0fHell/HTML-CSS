var selectedStudent = JSON.parse(localStorage.getItem('selectedStudent'));

// Hiển thị thông tin trong card-header
var cardHeader = document.querySelector('.card-header');
cardHeader.textContent = 'Kết quả kỳ thi ' + selectedStudent.kyThi + ' của người dùng ' + selectedStudent.ten;

// Hiển thị thông tin chi tiết trong card-body
var cardBody = document.querySelector('.card-body ul');
var studentNameLi = document.createElement('li');
studentNameLi.textContent = 'Họ và tên: ' + selectedStudent.ten;
cardBody.appendChild(studentNameLi);
// Thêm các thông tin khác
var completionRateLi = document.createElement('li');
completionRateLi.textContent = 'Tỉ lệ hoàn thành: 90%';
cardBody.appendChild(completionRateLi);

var correctAnswersLi = document.createElement('li');
correctAnswersLi.textContent = 'Số câu đúng: 9/10';
cardBody.appendChild(correctAnswersLi);

var timeTakenLi = document.createElement('li');
timeTakenLi.textContent = 'Thời gian làm bài: 59 phút 12 giây';
cardBody.appendChild(timeTakenLi);
