const questions = [
  {
    id: "12313",
    option: "options2",
    question: "Trong một ngày, bao nhiêu giờ bạn thường ngủ?",
    opt: ["6", "7", "8", "9"],
    description: "Hãy chọn số giờ trung bình mà bạn thường ngủ trong một ngày.",
    correct: "8",
    correct_id: "3"
  },
  {
    id: "12314",
    option: "options3",
    question: "Bạn thích điều gì nhất trong việc nghỉ ngơi?",
    opt: ["Đọc sách", "Xem phim", "Ngủ", "Tham gia các hoạt động ngoại ô"],
    description: "Hãy chọn một trong những hoạt động bạn thích nhất khi nghỉ ngơi.",
    correct: "Ngủ",
    correct_id: "3"
  },
  {
    id: "12315",
    option: "options4",
    question: "Bạn có thường xuyên tham gia vào hoạt động thể chất hàng ngày không?",
    opt: ["Có", "Không"],
    description: "Hãy chọn một trong hai câu trả lời.",
    correct: "Có",
    correct_id: "1"
  },
  {
    id: "12316",
    option: "options5",
    question: "Trong tuần này, bạn đã dành bao nhiêu thời gian cho việc học tập hoặc làm việc?",
    opt: ["Dưới 10 giờ", "Từ 10 đến 20 giờ", "Từ 20 đến 30 giờ", "Trên 30 giờ"],
    description: "Hãy chọn một khoảng thời gian phù hợp nhất.",
    correct: "Từ 20 đến 30 giờ",
    correct_id: "3"
  },
  {
    id: "12317",
    option: "options6",
    question: "Bạn thường làm gì vào cuối tuần?",
    opt: ["Đi du lịch", "Ở nhà xem phim", "Tham gia các hoạt động xã hội", "Làm việc"],
    description: "Hãy chọn một hoạt động mà bạn thường làm vào cuối tuần.",
    correct: "Ở nhà xem phim",
    correct_id: "2"
  },
  {
    id: "12318",
    option: "options7",
    question: "Bạn thường ăn gì vào bữa sáng?",
    opt: ["Bánh mì", "Xôi", "Phở", "Cereal"],
    description: "Hãy chọn một loại thức ăn mà bạn thường ăn vào bữa sáng.",
    correct: "Cereal",
    correct_id: "4"
  },
  {
    id: "12319",
    option: "options8",
    question: "Bạn thích loại hình giải trí nào nhất?",
    opt: ["Đọc sách", "Xem phim", "Chơi game", "Nghe nhạc"],
    description: "Hãy chọn một loại hình giải trí mà bạn thích nhất.",
    correct: "Xem phim",
    correct_id: "2"
  },
  {
    id: "12320",
    option: "options9",
    question: "Bạn có thích nấu ăn không?",
    opt: ["Có", "Không"],
    description: "Hãy chọn một trong hai câu trả lời.",
    correct: "Có",
    correct_id: "1"
  },
  {
    id: "12321",
    option: "options10",
    question: "Bạn đã từng tham gia các lớp học ngoại khóa không?",
    opt: ["Có", "Không"],
    description: "Hãy chọn một trong hai câu trả lời.",
    correct: "Không",
    correct_id: "2"
  },
  {
    id: "12319",
    option: "options8",
    question: "Bạn thích loại hình giải trí nào nhất?",
    opt: ["Đọc sách", "Xem phim", "Chơi game", "Nghe nhạc"],
    description: "Hãy chọn một loại hình giải trí mà bạn thích nhất.",
    correct: "Xem phim",
    correct_id: "2"
  },
];
function showNotification(message) {
  alert(message);
  window.location.href="Bailamchitiet.html"

}
const questionsContainer = document.getElementById("questions-container");
console.log(questionsContainer)
function submit() {
  return `<button type="submit" name="submit" id="nopbai"onClick="showNotification('Bạn đã nộp bài')">Nộp bài</button>`
}
function renderQuestions() {

  questions.forEach((question) => {
    const radioGroup = document.createElement('div');
    radioGroup.classList.add('bulgy-radios');
    radioGroup.setAttribute('role', 'radiogroup');
    radioGroup.setAttribute('aria-labelledby', 'bulgy-radios-label');
    const labelId = 'bulgy-radios-label';
    const h2 = document.createElement('h2');
    h2.id = labelId;
    h2.textContent = question.question;
    radioGroup.appendChild(h2);
    for (let i = 0; i < question.opt.length; i++) {
      const label = document.createElement('label');
      const input = document.createElement('input');
      const radio = document.createElement('span');
      radio.classList.add('radio');
      const labelSpan = document.createElement('span');
      labelSpan.classList.add('label');
      labelSpan.textContent = question.opt[i];
      if (question.opt[i] == question.correct) {
        labelSpan.id = question.correct_id;
      }
      input.type = 'radio';
      input.name = question.option;

      label.appendChild(input);
      label.appendChild(radio);
      label.appendChild(labelSpan);
      radioGroup.appendChild(label);
    }
    questionsContainer.appendChild(radioGroup);
  });
  questionsContainer.innerHTML += submit();
}
renderQuestions();
const labels = document.querySelectorAll('.label');
labels.forEach(label => {
  const chars = label.textContent.split('');
  label.innerHTML = '';
  chars.forEach(char => {
    label.innerHTML += `<span>${char === ' ' ? '&nbsp' : char}</span>`;
  });
})
var timeLeft = 3600;
setInterval(function() {
  if(timeLeft>=0)
    timeLeft--;
  document.getElementById("timer").innerHTML = formatTime(timeLeft);
  if (timeLeft < 0) {
    showNotification("Hết giờ!");
  }
},1000);
function formatTime(seconds) {
  var minutes = Math.floor(seconds / 60);
  var seconds = seconds % 60;

  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}
const questionsNumber=document.getElementById("questions-number")
function soCau(){
  return questions.length+" câu"
}
function numQuestions(){
  questionsNumber.innerHTML+=soCau();
}
numQuestions();