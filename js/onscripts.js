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
document.getElementById("print-result").addEventListener("click", function () {
    exportToCSV();
});

function exportToCSV() {
    var table = document.getElementById("datatablesSimple");
    var csvString = tableToCSV(table);

    // Tạo liên kết tải về
    var blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
    var link = document.createElement("a");

    if (link.download !== undefined) {
        var url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", "report.csv");
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

function tableToCSV(table) {
    var csvString = "\uFEFF"; // BOM (Byte Order Mark) để hỗ trợ định dạng UTF-8

    var rows = table.querySelectorAll("tr");

    for (var i = 0; i < rows.length; i++) {
        var row = rows[i];
        var cells = row.querySelectorAll("td, th");

        for (var j = 0; j < cells.length; j++) {
            var cell = cells[j].innerText.trim().replace(/"/g, '""'); // Loại bỏ khoảng trắng và xử lý dấu "

            // Kiểm tra xem cell có định dạng phân phối điểm số không
            var isDistribution = /^\d+\s?-\s?\d+$/.test(cell);

            // Nếu là phân phối điểm số, thì thêm dấu cách trước và sau gạch ngang
            if (isDistribution) {
                cell = ' ' + cell + ' ';
            }

            // Đối với các giá trị khác, có thể thực hiện xử lý định dạng khác ở đây nếu cần
            csvString += '"' + cell + '"';

            if (j < cells.length - 1) {
                csvString += ",";
            }
        }
        csvString += "\n";
    }

    return csvString;
}



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
    var tableRows = document.querySelectorAll('.table tbody tr');

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