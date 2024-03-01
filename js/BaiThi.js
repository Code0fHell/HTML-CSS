const questions = [
  {
    id: "12312",
    option: "options1",
    question: "Hãy cho biết 1+1 bằng bao nhiêu",
    opt: ["2", "3", "4", "55"],
    correct: "55",
    correct_id: "1"
  },
  {
    id: "1232132",
    question: "Hãy cho biết 1+1213123 bằng bao nhiêu",
    option: "options2",
    opt: ["2", "3", "4", "55"],
    correct: "2",
    correct_id: "2"
  },
  {
    id: "123213222",
    option: "options3",
    question: "Hãy cho biết 1+1213123 bằng bao nhiêu",
    opt: ["2", "8", "4", "55"],
    correct: "8",
    correct_id: "3"
  },
  {
    id: "1232132333",
    option: "options4",
    question: "Hãy cho biết 1+132312 bằng bao nhiêu",
    opt: ["10", "3", "4", "55"],
    correct: "10",
    correct_id: "4"
  },
  {
    id: "1232132555",
    option: "options5",
    question: "Hãy cho biết 1+1123123 bằng bao nhiêu",
    opt: ["21", "3", "4", "55"],
    correct: "21",
    correct_id: "5"
  },
]
function showNotification(message) {
  alert(message);

}
const questionsContainer = document.getElementById("questions-container");
console.log(questionsContainer)
function submit() {
  return `<button type="submit" name="submit" onClick="showNotification('Bạn đã nộp bài')">Nộp bài</button>`
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
    disableSubmitButton();
  }
}, 1000);
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