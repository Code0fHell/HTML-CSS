// const tenSinhVienElement = document.querySelector("#ten-sinh-vien");
// const tenKyThiElement = document.querySelector("#ten-ky-thi");

// const tenSinhVien = tenSinhVienElement.textContent;
// const tenKyThi = tenKyThiElement.textContent;

// // Sử dụng tên sinh viên và tên kỳ thi trong JavaScript
// console.log(tenSinhVien, tenKyThi);

// function print_student_name() {
//     return tenSinhVien;
// }

// function print_exam_name() {
//     console.log(tenKyThi);
// }

const printButton = document.getElementById("print-result");

printButton.addEventListener("click", function () {
    alert("Sẵn sàng để in!");
    window.print();
});



const students = [
    {
        name: "Hoàng Anh Quân",
        msv: "HV001",
        exam_name: `<a href="ket_qua_ky_thi.html">Ngữ văn</a>`,
        diem_so: "9",
        ngay_thi: "20/02/2024",
        trang_thai: "Đã hoàn thành"
    },

    {
        name: "Hoàng Anh Quân",
        msv: "HV001",
        exam_name: `<a href="ket_qua_ky_thi.html">Vật lý</a>`,
        diem_so: "9",
        ngay_thi: "20/02/2024",
        trang_thai: "Đã hoàn thành"
    },
]


function saveStudentInfo(link) {
    // Lấy tất cả các hàng từ bảng
    var tableRows = document.querySelectorAll('#datatablesSimple tbody tr');

    // Mảng để lưu trữ thông tin sinh viên
    var studentsData = [];

    tableRows.forEach(function (row) {
        // Lấy các ô dữ liệu từ mỗi hàng
        var cells = row.getElementsByTagName('td');

        // Lấy dữ liệu từ từng ô và thêm vào đối tượng sinh viên
        var student = {
            ten: cells[0].textContent,
            msv: cells[1].textContent,
            kyThi: cells[2].textContent,
            diem: cells[3].textContent,
            ngayThi: cells[4].textContent,
            trangThai: cells[5].textContent
        };

        // Thêm đối tượng sinh viên vào mảng
        studentsData.push(student);
    });

    // Lưu mảng sinh viên vào localStorage
    localStorage.setItem('studentsData', JSON.stringify(studentsData));


    window.location.href = 'StudentInfo.html';
}
