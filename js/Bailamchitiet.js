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
const dapan=[
  {
    dapan:"8",
 
  },
  {
    dapan:"Tham gia các hoạt động ngoại ô",

  },
  {
    dapan:"Có",

  },
  {
    dapan:"Trên 30 giờ",

  },
  {
    dapan:  "Trên 30 giờ"
  },
  {
    dapan:"8",
 
  },
  {
    dapan:"Xem phim"
  },
  {
    dapan:"Có",

  },
  {
    dapan:"Trên 30 giờ",

  },
  {
    dapan:  "Ở nhà xem phim",

  },
  {
    dapan:"Tham gia các hoạt động ngoại ô",

  },
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