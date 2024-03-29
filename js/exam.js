var isEditing = false;

// Hàm chuyển hướng sang trang thêm mới kỳ thi
function addExam() {
    sessionStorage.clear();
    window.location.href = "ec-exams.html";
}

// Kiểm tra xem localStorage có dữ liệu kỳ thi không
var storedExams = JSON.parse(localStorage.getItem("exams")) || [];

// Nếu có dữ liệu, gán vào biến global exams
exams = storedExams;

// Hàm chuyển đổi chuỗi "hh:mm" thành phút
function convertTimeToMinutes(timeString) {
    var parts = timeString.split(":");
    var hours = parseInt(parts[0], 10);
    var minutes = parseInt(parts[1], 10);
    return hours * 60 + minutes;
}

// Hàm tính thời gian giữa hai thời điểm (đơn vị: phút)
function calculateTimeDifference(startTime, endTime) {
    var startMinutes = convertTimeToMinutes(startTime);
    var endMinutes = convertTimeToMinutes(endTime);
    return endMinutes - startMinutes;
}
// Lưu examID vào sessionStorage khi bấm vào nút chỉnh sửa
function editExam(examID) {
    sessionStorage.setItem("editExamID", examID);
    sessionStorage.setItem("isEditing", true);
    window.location.href = "ec-exams.html";
}

// Hàm hiển thị danh sách kỳ thi
function displayExamList() {
    // Lấy danh sách kỳ thi từ localStorage
    var examsList = JSON.parse(localStorage.getItem("exams")) || [];

    // Lấy phần tử examList
    var examListElement = document.getElementById("examList");

    // Xóa nội dung hiện tại của examList
    examListElement.innerHTML = "";
    var editExamID = sessionStorage.getItem("editExamID");
    console.log(editExamID);
    // Hiển thị từng kỳ thi trong danh sách
    examsList.forEach(function (exam) {
        if (editExamID == exam.id) {
            // Kiểm tra xem kỳ thi có tồn tại trong danh sách không
            var existingListItem = examListElement.querySelector(
                `[exam-item-id="${exam.id}"]`
            );
            console.log(existingListItem);
            // Nếu tồn tại, thay thế nội dung của phần tử
            if (existingListItem) {
                existingListItem.innerHTML = `
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${exam.name}</h5>
                            <p class="card-text">${exam.description}</p>
                            <p class="card-text">Loại: ${exam.type}</p>
                            <p class="card-text">Số câu hỏi: ${
                                exam.numQuestions
                            }</p>
                            ${
                                exam.type === "Thời gian cụ thể"
                                    ? `<p class="card-text">Thời gian: ${calculateTimeDifference(
                                          exam.startTime,
                                          exam.endTime
                                      )}</p>`
                                    : ""
                            }
                            <button class="btn btn-primary edit-exam-btn" data-exam-id="${
                                exam.id
                            }">Chỉnh sửa</button>
                            <button class="btn btn-danger delete-exam-btn" data-exam-id="${
                                exam.id
                            }">Xóa</button>
                        </div>
                    </div>
                `;
                // Thêm event listener cho nút Chỉnh sửa
                var editButton =
                    existingListItem.querySelector(".edit-exam-btn");
                editButton.addEventListener("click", function () {
                    editExam(exam.id);
                });

                // Thêm event listener cho nút Xóa
                var deleteButton =
                    existingListItem.querySelector(".delete-exam-btn");
                deleteButton.addEventListener("click", function () {
                    deleteExam(exam.id);
                });
            }
        } else {
            // Nếu không tồn tại, tạo phần tử mới
            var listItem = document.createElement("div");
            listItem.className = "mb-3";
            listItem.setAttribute("exam-item-id", exam.id);
            listItem.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${exam.name}</h5>
                        <p class="card-text">${exam.description}</p>
                        <p class="card-text">Loại: ${exam.type}</p>
                        <p class="card-text">Số câu hỏi: ${
                            exam.numQuestions
                        }</p>
                        ${
                            exam.type === "Thời gian cụ thể"
                                ? `<p class="card-text">Thời gian: ${calculateTimeDifference(
                                      exam.startTime,
                                      exam.endTime
                                  )}</p>`
                                : ""
                        }
                        <button class="btn btn-primary edit-exam-btn" data-exam-id="${
                            exam.id
                        }">Chỉnh sửa</button>
                        <button class="btn btn-danger delete-exam-btn" data-exam-id="${
                            exam.id
                        }">Xóa</button>
                    </div>
                </div>
            `;
            // Thêm event listener cho nút Chỉnh sửa
            var editButton = listItem.querySelector(".edit-exam-btn");
            editButton.addEventListener("click", function () {
                editExam(exam.id);
            });

            // Thêm event listener cho nút Xóa
            var deleteButton = listItem.querySelector(".delete-exam-btn");
            deleteButton.addEventListener("click", function () {
                deleteExam(exam.id);
            });
            examListElement.appendChild(listItem);
        }
    });
}
// Gọi hàm để hiển thị danh sách khi trang được tải
displayExamList();

// Xóa kì thi
function deleteExam(examID) {
    // Lấy danh sách kỳ thi từ localStorage
    var examsList = JSON.parse(localStorage.getItem("exams")) || [];

    // Lọc ra kỳ thi cần xóa
    var updatedExams = examsList.filter(function (exam) {
        return exam.id != examID;
    });
    console.log(updatedExams);
    // Cập nhật danh sách kỳ thi
    localStorage.setItem("exams", JSON.stringify(updatedExams));

    // Hiển thị lại danh sách kỳ thi
    displayExamList();
}
