function removeVietnameseAccents(str) {
    // Chuyển đổi chuỗi có dấu sang chuỗi không dấu
    var withAccents = "àáảãạâầấẩẫậăằắẳẵặèéẻẽẹêềếểễệđìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵ";
    var withoutAccents = "aaaaaaaaaaaaaaaaaeeeeeeeeeeediiiiiooooooooooooooooouuuuuuuuuuuyyyyy";
    var result = '';

    for (var i = 0; i < str.length; i++) {
        var char = str.charAt(i);
        var index = withAccents.indexOf(char);

        if (index !== -1) {
            result += withoutAccents.charAt(index);
        } else {
            result += char;
        }
    }

    return result.toLowerCase(); // Chuyển đổi sang chữ thường
}

// function searchStudents() {
//     var searchTerm = removeAccentsAndToLower(document.getElementById('searchInput').value);
//     var studentsData = JSON.parse(localStorage.getItem("studentsData"));
//     console.log(studentsData.length);
//     var filteredStudents = [];

//     for (var i = 0; i < studentsData.length; i++) {
//         var student = studentsData[i];
//         console.log(typeof (student.ten))
//         var studentFullName = removeAccentsAndToLower(student.ten);
//         var studentLastName = removeAccentsAndToLower(student.ho);
//         var studentMiddleName = removeAccentsAndToLower(student.hoDem);

//         var regexSearchTerm = new RegExp(searchTerm, 'g');

//         if (
//             studentFullName.match(regexSearchTerm) ||
//             student.msv.toLowerCase().includes(searchTerm)
//         ) {
//             filteredStudents.push(student);
//         }
//     }

//     displaySearchResults(filteredStudents);
// }

function searchStudents() {
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();
    var studentsData = JSON.parse(localStorage.getItem("studentsData"));
    console.log(typeof (studentsData));
    var filteredStudents = studentsData.filter(function (student) {
        return removeVietnameseAccents(student.ten).toLowerCase().includes(searchTerm) || student.msv.toLowerCase().includes(searchTerm);
    });

    displaySearchResults(filteredStudents);
}

function displaySearchResults(results) {
    var tableBody = document.querySelector('#searchResults tbody');
    tableBody.innerHTML = '';

    results.forEach(function (student) {
        var row = tableBody.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        var cell7 = row.insertCell(6);

        cell1.innerHTML = student.ten;
        cell2.innerHTML = student.msv;
        cell3.innerHTML = student.kyThi;
        cell4.innerHTML = student.diem;
        cell5.innerHTML = student.ngayThi;
        cell6.innerHTML = student.trangThai;

        // Tạo nút Chi tiết và thêm sự kiện click
        var detailButton = document.createElement('button');
        detailButton.textContent = 'Chi tiết';
        detailButton.className = 'btn btn-success'

        detailButton.addEventListener('click', function () {
            showDetailStundent(student);
        });

        // Thêm nút Chi tiết vào ô mới
        cell7.appendChild(detailButton);
    });
}

function showDetailStundent(student) {
    // Lưu thông tin sinh viên và kỳ thi vào localStorage
    localStorage.setItem('selectedStudent', JSON.stringify(student));

    // Chuyển hướng đến trang kết quả
    window.location.href = 'ket_qua_ky_thi.html';
}