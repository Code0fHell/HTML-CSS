const questions = [
  {
    id: "12312",
    option: "options1",
    question: "Hãy cho biết 1+1 bằng bao nhiêu",
    opt: ["2", "3", "4", "55"],
    description:"123123123123",
    correct: "55",
    correct_id: "1"
  },
  {
    id: "1232132",
    question: "Hãy cho biết 1+1213123 bằng bao nhiêu",
    option: "options2",
    opt: ["2", "3", "4", "55"],
    description:"123123123123",
    correct: "2",
    correct_id: "2"
  },
  {
    id: "123213222",
    option: "options3",
    question: "Hãy cho biết 1+1213123 bằng bao nhiêu",
    opt: ["2", "8", "4", "55"],
    description:"123123123123",
    correct: "8",
    correct_id: "3"
  },
  {
    id: "1232132333",
    option: "options4",
    question: "Hãy cho biết 1+132312 bằng bao nhiêu",
    opt: ["10", "3", "4", "55"],
    description:"123123123123",
    correct: "10",
    correct_id: "4"
  },
  {
    id: "1232132555",
    option: "options5",
    question: "Hãy cho biết 1+1123123 bằng bao nhiêu",
    opt: ["21", "3", "4", "55"],
    description:"123123123123",
    correct: "21",
    correct_id: "5"
  },
]
const dapan=[
  {
    dapan:"55",
 
  },
  {
    dapan:"2",

  },
  {
    dapan:"10",

  },
  {
    dapan:"12313",

  },
  {
    dapan: "1231232313",

  }
]
function description(des,correct){
  
  return `<div><span>Đáp án đúng là: ${correct}</span></div>
  <div>Đáp án chi tiết: ${des}</div`
}
const caudung = document.getElementById("caudung");
    const tongcau = document.getElementById("tongcau");
    const diem = document.getElementById("diem");
    const List = document.getElementById("List");
    let Dung=0;
    for(let i=0;i<questions.length;i++){
      if(questions[i].correct==dapan[i].dapan){
        Dung++;
      }
    }
    const Tong = questions.length;
    const Diem= (Dung / Tong) * 10;
    caudung.textContent = Dung;
    tongcau.textContent = Tong;
    diem.textContent = Diem;
    
    for (let i = 0; i < Tong; i++) {
      const answer = document.createElement("li");
      answer.classList.add("answer");
      
      answer.innerHTML = `Câu hỏi ${i + 1}: <div><strong>Đáp án của bạn: ${dapan[i].dapan}</strong></div>`  ;
      if(dapan[i].dapan==questions[i].correct){
        answer.classList.add("correct");
      }
      else{
        answer.classList.add("incorrect");
      }
      answer.innerHTML+=description(questions[i].description,questions[i].correct)
      List.appendChild(answer);
    }

    const thacmac = document.getElementById("thacmac");
    thacmac.addEventListener("click", () => {
      
      alert("Yêu cầu đã được gửi đến giáo viên");
    });