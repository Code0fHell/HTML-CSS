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




// Lấy tất cả các hàng từ tbody
const rows = document.querySelectorAll('tbody tr');

// Tạo một mảng để lưu trữ dữ liệu
const data = [];

// Lặp qua mỗi hàng và lưu dữ liệu vào mảng
rows.forEach(row => {
    const cells = row.children;
    const rowData = {
        'Họ và tên': cells[0].textContent,
        'Môn thi': cells[1].textContent,
        'Số lần tham gia': cells[2].textContent,
        'Tỷ lệ hoàn thành': cells[3].textContent,
        'Điểm trung bình': cells[4].textContent,
        'Phân phối điểm số': cells[5].textContent
    };

    data.push(rowData);
});

// Lưu mảng dữ liệu vào local storage
localStorage.setItem('studentData', JSON.stringify(data));

// Đọc dữ liệu từ local storage (ví dụ)
const storedData = JSON.parse(localStorage.getItem('studentData'));
console.log(storedData);