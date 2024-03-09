var selectedStudent = JSON.parse(localStorage.getItem('selectedStudent'));

// Hiển thị thông tin trong card-header
var cardHeader = document.querySelector('.card-header');
cardHeader.textContent = 'Kết quả kỳ thi ' + selectedStudent.kyThi + ' của người dùng ' + selectedStudent.ten;



document.addEventListener("DOMContentLoaded", function () {
   // Hiển thị thông tin trong bảng kết quả
   document.getElementById('studentName').textContent = 'Họ và tên: ' + selectedStudent.ten;
   document.getElementById('completionRate').textContent = 'Tỉ lệ hoàn thành: 90%';
   document.getElementById('correctAnswers').textContent = 'Số câu đúng: 9/10';
   document.getElementById('timeTaken').textContent = 'Thời gian làm bài: 59 phút 12 giây';
    document.getElementById("export-pdf").addEventListener("click", function () {
        exportToPDF();
    });
});

function exportToPDF() {
    html2pdf(document.querySelector('.table-result'), {
        margin: 10,
        filename: 'ket_qua_ky_thi.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    });
}
