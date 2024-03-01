// Lắng nghe sự kiện thay đổi trường chọn loại kỳ thi
var examTypeSelect = document.getElementById("examType");
examTypeSelect.addEventListener("change", function () {
    var specificTimeSettings = document.getElementById("specificTimeSettings");
    var examStartTime = document.getElementById("examStartTime");
    var examEndTime = document.getElementById("examEndTime");

    // Nếu là kỳ thi tự do, vô hiệu hóa thời gian bắt đầu và kết thúc
    if (examTypeSelect.value === "free") {
        specificTimeSettings.style.display = "none";
        examStartTime.value = "";
        examEndTime.value = "";
    } else {
        // Ngược lại, hiển thị thời gian bắt đầu và kết thúc
        specificTimeSettings.style.display = "block";
    }
});

var questionList = [];

function addQuestion() {
    // Lấy giá trị từ các trường
    var examName = document.getElementById("examName").value;
    var examDescription = document.getElementById("examDescription").value;
    var examType = document.getElementById("examType").value;
    var examStartTime = document.getElementById("examStartTime").value;
    var examEndTime = document.getElementById("examEndTime").value;
    var answerContent = document.getElementsByClassName("answer-content").value;
    var question = document.getElementById("question").value;
    var selectedAnswer = document.querySelector(
        'input[name="answerOptions"]:checked'
    );

    // Kiểm tra các trường cần thiết
    if (
        examName.trim() === "" ||
        examDescription.trim() === "" ||
        question.trim() === "" ||
        !selectedAnswer
    ) {
        alert(
            "Vui lòng điền đầy đủ thông tin kỳ thi, câu hỏi và chọn câu trả lời."
        );
        return;
    }
    // Kiểm tra thêm điều kiện khi examType là "thời gian cụ thể"
    if (examType === "specificTime") {
        if (examStartTime === "" || examEndTime === "") {
            alert("Vui lòng chọn thời gian bắt đầu và kết thúc.");
            return;
        }
    }
    var isFilled = true;
    document
        .querySelectorAll('input[name="answerOptions"]')
        .forEach(function (radio) {
            var answerContent = document.getElementById(
                `answerOption${radio.value}Content`
            );
            if (answerContent.value === "") {
                isFilled = false;
            }
        });
    if (isFilled === false) {
        alert(
            "Vui lòng điền đầy đủ thông tin kỳ thi, câu hỏi và chọn câu trả lời."
        );
        return;
    }
    // Xử lý nội dung câu trả lời
    var selectedAnswerId = selectedAnswer.value; // Lấy id của option đã chọn
    var selectedAnswerContent = document.getElementById(
        `answerOption${selectedAnswerId}Content`
    );
    // Mảng lưu trữ câu trả lời hiện tại
    var currentQuestionAnswers = [];

    if (selectedAnswer) {
        var answerContentText = selectedAnswerContent.value;

        // Bỏ chọn tất cả các radio khác
        document
            .querySelectorAll('input[name="answerOptions"]')
            .forEach(function (radio) {
                radio.checked = false;
                var otherAnswerContent = document.getElementById(
                    `answerOption${radio.value}Content`
                );
                currentQuestionAnswers.push(otherAnswerContent.value);
                questionList.push(otherAnswerContent.value);
                // console.log(otherAnswerContent);
                otherAnswerContent.value = ""; // Xóa nội dung đã chọn trên các câu trả lời khác
            });
    }

    // Tạo biến cục bộ để lưu trữ nội dung câu trả lời của câu hỏi hiện tại

    console.log(currentQuestionAnswers);

    // Reset nội dung câu hỏi
    document.getElementById("question").value = "";
    // Thêm câu hỏi vào bảng
    var questionTableBody = document
        .getElementById("questionTable")
        .getElementsByTagName("tbody")[0];
    var row = questionTableBody.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    // Hiển thị nội dung các câu trả lời trong cell2
    var answerContentHTML = "";
    currentQuestionAnswers.forEach(function (answerContent, index) {
        var answerOption = String.fromCharCode("A".charCodeAt(0) + index);
        if (answerOption === selectedAnswerId) {
            // In đậm câu trả lời đã được check
            answerContentHTML += `<strong class="data-answer">${answerOption}. ${answerContent}</strong><br>`;
        } else {
            answerContentHTML += `<span class="data-answer">${answerOption}. ${answerContent}</span><br>`;
        }
    });
    cell1.innerHTML = question;
    cell2.innerHTML = answerContentHTML;
    cell3.innerHTML = `<button class="btn btn-danger" onclick="deleteQuestion(this)">Xóa</button> <button id="editQuestionBtn" class="btn btn-primary" onclick="editQuestion(this)">Chỉnh sửa</button> `;
}

// Hàm xóa câu hỏi
function deleteQuestion(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

// Chỉnh sửa câu hỏi
function editQuestion(button) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của nút chỉnh sửa
    event.stopPropagation(); // Ngăn chặn lan toả sự kiện

    var row = button.parentNode.parentNode;
    console.log(row);
    var question = row.cells[0].innerText;
    // Lấy giá trị của dòng in đậm trong cột câu trả lời
    var boldAnswerContent = row
        .querySelector("strong")
        .innerText.split(". ")[0];
    // Tìm selectedAnswerId bằng cách lấy ký tự đầu tiên của giá trị dòng in đậm
    var selectedAnswerId = boldAnswerContent.charAt(0);
    console.log(selectedAnswerId);
    // Hiển thị thông tin câu hỏi và câu trả lời trong các trường input
    document.getElementById("question").value = question;
    document.getElementById(`answerOption${selectedAnswerId}`).checked = true;
    // Lấy và hiển thị thông tin của từng câu trả lời
    var answerOptions = row.querySelectorAll(".data-answer");
    console.log(answerOptions);
    answerOptions.forEach(function (answerOption) {
        var option = answerOption.innerText.split(".")[0];
        console.log(option);
        var answerContentInput = document.getElementById(
            `answerOption${option}Content`
        );
        answerContentInput.value = answerOption.innerText.split(". ")[1];
    });

    // Ẩn nút thêm, hiển thị nút "Cập nhật chỉnh sửa" và nút "Hủy chỉnh sửa"
    document.getElementById("addQuestionBtn").style.display = "none";
    document.getElementById("updateQuestionBtn").style.display = "inline-block";
    document.getElementById("cancelEditBtn").style.display = "inline-block";

    // Lưu lại dòng đang chỉnh sửa
    rowBeingEdited = row;
}

function convertCharToNumber(char) {
    if (char >= "A" && char <= "Z") {
        return char.charCodeAt(0) - "A".charCodeAt(0);
    } else {
        return char;
    }
}

function updateQuestion() {
    // Lấy giá trị từ các trường
    var question = document.getElementById("question").value;
    var selectedAnswer = document.querySelector(
        'input[name="answerOptions"]:checked'
    );

    // Kiểm tra các trường cần thiết
    if (question.trim() === "" || !selectedAnswer) {
        alert(
            "Vui lòng điền đầy đủ thông tin kỳ thi, câu hỏi và chọn câu trả lời."
        );
        return;
    }
    var isFilled = true;
    document
        .querySelectorAll('input[name="answerOptions"]')
        .forEach(function (radio) {
            var answerContent = document.getElementById(
                `answerOption${radio.value}Content`
            );
            if (answerContent.value === "") {
                isFilled = false;
            }
        });
    if (isFilled === false) {
        alert(
            "Vui lòng điền đầy đủ thông tin kỳ thi, câu hỏi và chọn câu trả lời."
        );
        return;
    }

    // Xử lý nội dung câu trả lời
    var selectedAnswerId = selectedAnswer.value; // Lấy id của option đã chọn
    var selectedAnswerContent = document.getElementById(
        `answerOption${selectedAnswerId}Content`
    );
    var currentAnswerList = [];
    if (selectedAnswer) {
        // Bỏ chọn tất cả các radio khác
        document
            .querySelectorAll('input[name="answerOptions"]')
            .forEach(function (radio) {
                radio.checked = false;
                var otherAnswerContent = document.getElementById(
                    `answerOption${radio.value}Content`
                );
                currentAnswerList.push(otherAnswerContent.value);
                otherAnswerContent.value = ""; // Xóa nội dung đã chọn trên các câu trả lời khác
            });
    }
    // Reset nội dung câu hỏi
    document.getElementById("question").value = "";
    // Cập nhật câu hỏi trong bảng
    // Hiển thị nội dung các câu trả lời trong cell2
    if (rowBeingEdited) {
        var cell2 = rowBeingEdited.cells[1];
        var answerContentHTML = "";
        currentAnswerList.forEach(function (answerContent, index) {
            var answerOption = String.fromCharCode("A".charCodeAt(0) + index);
            if (answerOption === selectedAnswerId) {
                // In đậm câu trả lời đã được check
                answerContentHTML += `<strong class="data-answer">${answerOption}. ${answerContent}</strong><br>`;
            } else {
                answerContentHTML += `<span class="data-answer">${answerOption}. ${answerContent}</span><br>`;
            }
        });
    }
    cell2.innerHTML = answerContentHTML;
    // Ẩn nút "Cập nhật chỉnh sửa" và nút "Hủy chỉnh sửa", hiển thị nút "Thêm câu hỏi"
    document.getElementById("updateQuestionBtn").style.display = "none";
    document.getElementById("cancelEditBtn").style.display = "none";
    document.getElementById("addQuestionBtn").style.display = "inline-block";
    // Đặt lại giá trị của dòng đang chỉnh sửa
    rowBeingEdited = null;
}

function cancelEdit() {
    // Ẩn nút hủy chỉnh sửa, hiển thị nút thêm
    document.getElementById("cancelEditBtn").style.display = "none";
    document.getElementById("addQuestionBtn").style.display = "inline-block";
    document.getElementById("editQuestionBtn").style.display = "inline-block";
    document.getElementById("updateQuestionBtn").style.display = "none";
    // Reset nội dung câu hỏi và các trường input
    document.getElementById("question").value = "";
    document.querySelector(
        'input[name="answerOptions"]:checked'
    ).checked = false;
    document
        .querySelectorAll(".answer-content")
        .forEach(function (contentInput) {
            contentInput.value = "";
        });

    // Bỏ chọn radio và xóa nội dung câu trả lời trên dòng đang chỉnh sửa
    var selectedAnswerId = rowBeingEdited.cells[1].innerText
        .split(". ")[0]
        .charAt(0);
    document.getElementById(`answerOption${selectedAnswerId}`).checked = false;
    document.getElementById(`answerOption${selectedAnswerId}Content`).value =
        "";

    // Đặt lại giá trị của dòng đang chỉnh sửa
    rowBeingEdited = null;
}

// Xử lý file Excel

function handleFileImport() {
    var input = document.getElementById("fileInput");

    var reader = new FileReader();

    reader.onload = function (e) {
        var data = e.target.result;
        var workbook = XLSX.read(data, { type: "binary" });

        // Đặt sheet cần đọc (chọn sheet đầu tiên)
        var sheetName = workbook.SheetNames[0];
        var worksheet = workbook.Sheets[sheetName];

        // Chuyển đổi dữ liệu từ sheet Excel thành mảng đối tượng
        var dataArray = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        // Gọi hàm thêm dữ liệu vào bảng
        addDataToTable(dataArray);
    };

    reader.readAsBinaryString(input.files[0]);
}

// Thêm dữ liệu vào bảng

function addDataToTable(dataArray) {
    // Lặp qua mảng dữ liệu và thêm vào bảng
    dataArray.forEach(function (row, rowIndex) {
        // Kiểm tra điều kiện dừng: nếu hàng không chứa dữ liệu, dừng lại
        if (!row.some((cell) => cell !== null && cell !== undefined)) {
            return;
        }

        if (rowIndex > 0) {
            // Bỏ qua hàng đầu tiên (tiêu đề)
            var question = row[0];
            console.log(question);
            var answerOptions = row.slice(1, 5); // Lấy 4 câu trả lời
            console.log(answerOptions);

            // Tìm đáp án đúng
            var correctAnswerIndex = -1;
            answerOptions.forEach(function (answer, index) {
                if (answer.includes("*")) {
                    correctAnswerIndex = index;
                    answerOptions[index] = answer.replace("*", ""); // Loại bỏ ký tự đánh dấu
                }
            });

            // Thêm câu hỏi vào bảng
            var questionTableBody = document
                .getElementById("questionTable")
                .getElementsByTagName("tbody")[0];
            console.log(questionTableBody);
            var newRow = questionTableBody.insertRow();

            // Cell câu hỏi
            var cell1 = newRow.insertCell(0);
            cell1.innerHTML = question;

            // Cell câu trả lời
            var cell2 = newRow.insertCell(1);
            var cell3 = newRow.insertCell(2);
            var answerContentHTML = "";
            answerOptions.forEach(function (answer, index) {
                var answerOption = String.fromCharCode(
                    "A".charCodeAt(0) + index
                );
                if (index === correctAnswerIndex) {
                    // In đậm và chọn đáp án đúng
                    answerContentHTML += `<strong class="data-answer">${answerOption}. ${answer}</strong><br>`;
                } else {
                    answerContentHTML += `<span class="data-answer">${answerOption}. ${answer}</span><br>`;
                }
            });
            cell2.innerHTML = answerContentHTML;
            cell3.innerHTML = `<button class="btn btn-danger" onclick="deleteQuestion(this)">Xóa</button> <button id="editQuestionBtn" class="btn btn-primary" onclick="editQuestion(this)">Chỉnh sửa</button>`;
        }
    });
}

// Lưu kỳ thi
function saveExam() {
    // Biến để đếm số câu hỏi
    var numQuestions = 0;
    // Lấy thông tin kỳ thi từ các trường nhập liệu
    var examName = document.getElementById("examName").value;
    var examDescription = document.getElementById("examDescription").value;
    var examType = document.getElementById("examType").value;
    var selectedOptionText =
        document.getElementById("examType").options[
            document.getElementById("examType").selectedIndex
        ].textContent;
    console.log(examType);
    var examStartTime = document.getElementById("examStartTime").value;
    var examEndTime = document.getElementById("examEndTime").value;

    // Kiểm tra các trường cần thiết
    if (examName.trim() === "" || examDescription.trim() === "") {
        alert(
            "Vui lòng điền đầy đủ thông tin kỳ thi, câu hỏi và chọn câu trả lời."
        );
        return;
    }
    // Kiểm tra thêm điều kiện khi examType là "thời gian cụ thể"
    if (examType === "specificTime") {
        if (examStartTime === "" || examEndTime === "") {
            alert("Vui lòng chọn thời gian bắt đầu và kết thúc.");
            return;
        }
    }

    // Lấy danh sách câu hỏi và câu trả lời từ bảng
    var questionTableBody = document
        .getElementById("questionTable")
        .getElementsByTagName("tbody")[0];
    var questions = [];
    for (var i = 0; i < questionTableBody.rows.length; i++) {
        var questionRow = questionTableBody.rows[i];
        var questionText = questionRow.cells[0].innerText;

        // Lấy các câu trả lời từ cell 1
        var answerOptionsHTML = questionRow.cells[1].innerHTML;
        var answerOptionsDiv = document.createElement("div");
        answerOptionsDiv.innerHTML = answerOptionsHTML;
        var answerOptions =
            answerOptionsDiv.getElementsByClassName("data-answer");

        var questionData = {
            question: questionText,
            answers: [],
        };

        for (var j = 0; j < answerOptions.length; j++) {
            var answerText = answerOptions[j].innerText.split(". ")[1];
            questionData.answers.push({
                text: answerText,
                isCorrect: answerOptions[j].classList.contains("data-answer")
                    ? true
                    : false,
            });
        }

        questions.push(questionData);
        numQuestions++;
    }
    console.log(questions);

    // Kiểm tra loại kỳ thi và lưu thông tin vào localStorage
    var examData = {
        name: examName,
        description: examDescription,
        type: selectedOptionText,
        startTime: examStartTime,
        endTime: examEndTime,
        numQuestions: numQuestions,
        questions: questions, // Thêm danh sách câu hỏi và câu trả lời vào đối tượng kỳ thi
    };

    // Kiểm tra xem localStorage đã có dữ liệu kỳ thi chưa
    var examsList = JSON.parse(localStorage.getItem("exams")) || [];
    // Gán id cho kỳ thi mới
    examData.id = examsList.length + 1; // Sử dụng độ dài hiện tại của danh sách + 1 làm id
    examsList.push(examData);

    // Lưu lại danh sách kỳ thi vào localStorage
    localStorage.setItem("exams", JSON.stringify(examsList));

    // Chuyển hướng sang trang exam.html
    window.location.href = "exam.html";
}
// Gọi hàm để kiểm tra và load thông tin chỉnh sửa khi trang được tải
loadEditExamInfo();

// Hàm kiểm tra và load thông tin chỉnh sửa
function loadEditExamInfo() {
    // Lấy id từ sessionStorage
    var editExamId = sessionStorage.getItem("editExamID");

    // Kiểm tra xem có examId để chỉnh sửa không
    if (editExamId) {
        // Lấy danh sách kỳ thi từ localStorage
        var examsList = JSON.parse(localStorage.getItem("exams")) || [];

        // Tìm kỳ thi có id tương ứng
        var selectedExam = examsList.find(function (exam) {
            return exam.id === editExamId;
        });

        // Kiểm tra xem kỳ thi có tồn tại không
        if (selectedExam) {
            // Hiển thị thông tin kỳ thi để chỉnh sửa
            document.getElementById("examName").value = selectedExam.name;
            document.getElementById("examDescription").value =
                selectedExam.description;
            // Các thông tin khác tương tự...

            // Xóa examId khỏi localStorage sau khi sử dụng
            sessionStorage.removeItem("editExamId");
        }
    }
}


