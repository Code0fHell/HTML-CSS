var students = JSON.parse(localStorage.getItem("students")) || [];

// Hàm hiển thị danh sách sinh viên
function displayStudentList() {
    var studentTableElement = document.getElementById("studentTable");
    var tbody = studentTableElement.querySelector("tbody");
    tbody.innerHTML = ""; // Xóa nội dung hiện tại

    // Hiển thị từng sinh viên trong danh sách
    students.forEach(function (student) {
        var row = tbody.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);

        cell1.textContent = student.name;
        cell2.textContent = student.id;

        // Tạo nút chỉnh sửa
        var editButton = document.createElement("button");
        editButton.className = "btn btn-warning";
        editButton.textContent = "Chỉnh Sửa";
        editButton.onclick = function () {
            editStudent(student.id);
        };

        // Thêm sự kiện onclick cho nút chỉnh sửa
        var editButtons = document.querySelectorAll(".edit-student-btn");
        editButtons.forEach(function (button) {
            button.addEventListener("click", function () {
                var studentID = this.getAttribute("data-student-id");
                editStudent(studentID);
            });
        });

        // Tạo nút xóa
        var deleteButton = document.createElement("button");
        deleteButton.className = "btn btn-danger offset-1";
        // deleteButton.id = "delBtn"
        deleteButton.textContent = "Xóa";
        deleteButton.onclick = function () {
            deleteStudent(student.id);
        };

        cell3.appendChild(editButton);
        cell3.appendChild(deleteButton);
    });
}

function addNewStudent() {
    // Xóa lắng nghe sự kiện "hidden.bs.modal" trước khi mở modal thêm mới
    var addEditStudentModal = document.getElementById("addEditStudentModal");
    addEditStudentModal.removeEventListener(
        "hidden.bs.modal",
        handleHiddenModal
    );

    // Xóa giá trị của các input
    document.getElementById("studentName").value = "";
    document.getElementById("studentID").value = "";

    // Hiển thị nút "Lưu", ẩn nút "Cập nhật" và "Xóa"
    document.getElementById("saveBtn").style.display = "block";
    document.getElementById("updateBtn").style.display = "none";
    document.getElementById("delBtn").style.display = "none";

    // Mở modal thêm mới
    $("#addEditStudentModal").modal("show");
}

// Hàm lưu thông tin sinh viên từ modal
function saveStudent() {
    var name = document.getElementById("studentName").value;
    var id = document.getElementById("studentID").value;

    // Kiểm tra xem họ tên sinh viên có tồn tại hay chưa
    var existingName = students.some(function (student) {
        return student.name === name;
    });

    if (!existingName) {
        // Kiểm tra xem sinh viên có tồn tại hay chưa
        var existingStudent = students.find(function (student) {
            return student.id === id;
        });

        if (!existingStudent) {
            // Thêm sinh viên mới vào danh sách
            students.push({ name: name, id: id });

            // Lưu danh sách vào localStorage
            localStorage.setItem("students", JSON.stringify(students));

            // Hiển thị lại danh sách sinh viên
            displayStudentList();

            // Đóng modal sau khi lưu
            $("#addEditStudentModal").modal("hide");
        } else {
            alert("Mã sinh viên đã tồn tại. Vui lòng chọn mã sinh viên khác.");
            document.getElementById("studentID").value = "";
        }
    } else {
        alert("Họ tên sinh viên đã tồn tại. Vui lòng chọn họ tên khác.");
        document.getElementById("studentName").value = "";
    }
    // Xóa giá trị của các input
    document.getElementById("studentName").value = "";
    document.getElementById("studentID").value = "";
}

// Chỉnh sửa thông tin sinh viên
function editStudent(studentID) {
    // Lưu studentID vào sessionStorage
    sessionStorage.setItem("editStudentID", studentID);

    // Lấy thông tin sinh viên cần chỉnh sửa
    var studentToEdit = students.find(function (student) {
        return student.id === studentID;
    });

    // Hiển thị thông tin sinh viên trong modal
    document.getElementById("studentName").value = studentToEdit.name;
    document.getElementById("studentID").value = studentToEdit.id;

    // Hiển thị nút "Cập nhật" và "Xóa", ẩn nút "Lưu"
    document.getElementById("saveBtn").style.display = "none";
    document.getElementById("updateBtn").style.display = "block";
    document.getElementById("delBtn").style.display = "none";

    // Mở modal
    var modal = new bootstrap.Modal(
        document.getElementById("addEditStudentModal")
    );
    modal.show();
    // Lấy modal
    var addEditStudentModal = document.getElementById("addEditStudentModal");

    // Đặt lắng nghe sự kiện "hidden.bs.modal" để reset giá trị của các input
    addEditStudentModal.addEventListener("hidden.bs.modal", function () {
        // Xóa giá trị của các input
        document.getElementById("studentName").value = "";
        document.getElementById("studentID").value = "";

        // Hiển thị lại nút "Lưu", ẩn nút "Cập nhật" và "Xóa"
        document.getElementById("saveBtn").style.display = "block";
        document.getElementById("updateBtn").style.display = "none";
        document.getElementById("delBtn").style.display = "none";
    });
}

// Hàm cập nhật thông tin sinh viên
function updateStudent() {
    var name = document.getElementById("studentName").value;
    var id = document.getElementById("studentID").value;

    // Lấy studentID từ sessionStorage
    var editStudentID = sessionStorage.getItem("editStudentID");

    // Cập nhật thông tin sinh viên trong danh sách
    students.forEach(function (student) {
        if (student.id === editStudentID) {
            student.name = name;
            student.id = id;
        }
    });

    // Lưu danh sách vào localStorage
    localStorage.setItem("students", JSON.stringify(students));

    // Đặt lắng nghe sự kiện "hidden.bs.modal" để hiển thị lại danh sách sau khi modal đã được ẩn
    var addEditStudentModal = document.getElementById("addEditStudentModal");
    addEditStudentModal.addEventListener("hidden.bs.modal", function () {
        // Hiển thị lại danh sách sinh viên
        displayStudentList();
    });
    // Xóa giá trị của các input
    document.getElementById("studentName").value = "";
    document.getElementById("studentID").value = "";

    // Đóng modal sau khi cập nhật
    $("#addEditStudentModal").modal("hide");
    // Hiển thị nút "Lưu" và ẩn nút "Cập nhật" và "Xóa"
    document.getElementById("saveBtn").style.display = "block";
    document.getElementById("updateBtn").style.display = "none";
    document.getElementById("delBtn").style.display = "none";
}

// Hàm xóa sinh viên
function deleteStudent(studentID) {
    // Lọc ra danh sách mới không chứa sinh viên cần xóa
    students = students.filter(function (student) {
        return student.id !== studentID;
    });

    // Lưu danh sách mới vào localStorage
    localStorage.setItem("students", JSON.stringify(students));

    // Hiển thị lại danh sách sinh viên
    displayStudentList();
}

// Gọi hàm để hiển thị danh sách khi trang được tải
displayStudentList();
