const dethiContainer = document.getElementById("dethi_container");
const dethiContainer1 = document.getElementById("description");
console.log(dethiContainer1);
test_giuaky = [
    {
        content: "Đề thi THPT QG môn Toán",
        description:
            "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Toán sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Toán được sưu tập qua các năm với đầy đủ lời giải chi tiết",
        img: "./assets/img/toan.png",
    },
    {
        content: "Đề thi THPT QG môn Vật Lý",
        description:
            "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Vật Lý sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Vật Lý được sưu tập qua các năm với đầy đủ lời giải chi tiết.",
        img: "./assets/img/vatly.png",
    },
    {
        content: "Đề thi THPT QG môn Sinh Học",
        description:
            "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Sinh Học sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Sinh Học được sưu tập qua các năm với đầy đủ lời giải chi tiết.",
        img: "./assets/img/van.jpg",
    },
    {
        content: "Đề thi đội tuyển quốc gia Ngữ Văn",
        description:
        "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Sinh Học sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Sinh Học được sưu tập qua các năm với đầy đủ lời giải chi tiết.",
        img: "./assets/img/van.jpg",
    },
    {
        content: "Đề thi THPT QG môn Toán",
        description:
            "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Toán sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Toán được sưu tập qua các năm với đầy đủ lời giải chi tiết",
        img: "./assets/img/toan.png",
    },
    {
        content: "Đề thi THPT QG môn Vật Lý",
        description:
            "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Vật Lý sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Vật Lý được sưu tập qua các năm với đầy đủ lời giải chi tiết.",
        img: "./assets/img/vatly.png",
    },
    {
        content: "Đề thi THPT QG môn Sinh Học",
        description:
            "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Sinh Học sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Sinh Học được sưu tập qua các năm với đầy đủ lời giải chi tiết.",
        img: "./assets/img/van.jpg",
    },
    {
        content: "Đề thi đội tuyển quốc gia Ngữ Văn",
        description:
        "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Sinh Học sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Sinh Học được sưu tập qua các năm với đầy đủ lời giải chi tiết.",
        img: "./assets/img/van.jpg",
    },
    {
        content: "Đề thi THPT QG môn Toán",
        description:
            "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Toán sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Toán được sưu tập qua các năm với đầy đủ lời giải chi tiết",
        img: "./assets/img/toan.png",
    },
    {
        content: "Đề thi THPT QG môn Vật Lý",
        description:
            "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Vật Lý sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Vật Lý được sưu tập qua các năm với đầy đủ lời giải chi tiết.",
        img: "./assets/img/vatly.png",
    },
    {
        content: "Đề thi THPT QG môn Sinh Học",
        description:
            "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Sinh Học sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Sinh Học được sưu tập qua các năm với đầy đủ lời giải chi tiết.",
        img: "./assets/img/van.jpg",
    },
    {
        content: "Đề thi đội tuyển quốc gia Ngữ Văn",
        description:
        "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Sinh Học sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Sinh Học được sưu tập qua các năm với đầy đủ lời giải chi tiết.",
        img: "./assets/img/van.jpg",
    },
];
test_luyentap = [
    {
        content: "Đề thi THPT QG môn Toán",
        description:
            "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Toán sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Toán được sưu tập qua các năm với đầy đủ lời giải chi tiết",
        img: "./assets/img/math.jpeg",
    },
    {
        content: "Đề thi THPT QG môn Vật Lý",
        description:
            "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Vật Lý sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Vật Lý được sưu tập qua các năm với đầy đủ lời giải chi tiết.",
        img: "./assets/img/dialy.png",
    },
    {
        content: "Đề thi THPT QG môn Sinh Học",
        description:
            "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Sinh Học sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Sinh Học được sưu tập qua các năm với đầy đủ lời giải chi tiết.",
        img: "./assets/img/math.jpeg",
    },
    {
        content: "Đề thi đội tuyển quốc gia Ngữ Văn",
        description:
        "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Sinh Học sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Sinh Học được sưu tập qua các năm với đầy đủ lời giải chi tiết.",
        img: "./assets/img/van.jpg",
    },
    {
        content: "Đề thi THPT QG môn Toán",
        description:
            "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Toán sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Toán được sưu tập qua các năm với đầy đủ lời giải chi tiết",
        img: "./assets/img/toan.png",
    },
    {
        content: "Đề thi THPT QG môn Vật Lý",
        description:
            "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Vật Lý sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Vật Lý được sưu tập qua các năm với đầy đủ lời giải chi tiết.",
        img: "./assets/img/gdcd.png",
    },
    {
        content: "Đề thi THPT QG môn Sinh Học",
        description:
            "Nhằm giúp các em chuẩn bị thật tốt cho kì thi THPT QG môn Sinh Học sắp đến. Xin gửi đến các em bộ đề thi trắc nghiệm THPT QG môn Sinh Học được sưu tập qua các năm với đầy đủ lời giải chi tiết.",
        img: "./assets/img/gdcd.png",
    },
];

function dethi(test) {
    return `<div class="card ">
    <div class="card-header">
      <h5 class="card-title">${test.content}</h5>
    </div>
    <div class="card-body d-flex">
      <img src="${test.img}" class="img-fluid float-left" >
      <p class="description">${test.description}</p>
      <p class="xct">
        <a href="BaiThi.html" class="btn btn-primary">Làm ngay</a>
      </p>
    </div>
</div>`;
}
const myMap = new Map();
function mymap() {
    myMap.set(1, test_luyentap);
    myMap.set(2, test_giuaky);
    myMap.set(3, test_giuaky);
    myMap.set(4, test_giuaky);
    myMap.set(5, test_luyentap);
    myMap.set(6, test_luyentap);
}
mymap();
function show(number, otherDate = new Date()) {
    if (number % 2 == 0) {
        const today = new Date();
        if (today < otherDate) {
            alert("Chưa đến ngày truy cập");
            return;
        }
    }
    var a = myMap.get(number);
    dethiContainer.innerHTML = "";
    a.forEach((element) => {
        if (element != null) dethiContainer.innerHTML += dethi(element);
        else {
            console.error(`Không tìm thấy dữ liệu cho số ${number}`);
            return;
        }
    });
}
show(1);
function search(event) {
    const searchInput = document.getElementById("input-search").value;
    searchOutput = [];
    test_giuaky.forEach((element) => {
        if (
            element.content.includes(searchInput) ||
            element.description.includes(searchInput)
        ) {
            searchOutput.push(element);
        }
    });
    test_luyentap.forEach((element) => {
        if (
            element.content.includes(searchInput) ||
            element.description.includes(searchInput)
        ) {
            searchOutput.push(element);
        }
    });
    myMap.set(7, searchOutput);
    show(7);
    myMap.delete(7);
}
const myCategory = [];
function showCategory(value) {
    list = [];
    value = value.toLowerCase();
    test_giuaky.forEach((element) => {
        if (
            element.content.toLowerCase().includes(value) ||
            element.description.toLowerCase().includes(value)
        ) {
            list.push(element);
        }
    });
    test_luyentap.forEach((element) => {
        if (
            element.content.toLowerCase().includes(value) ||
            element.description.toLowerCase().includes(value)
        ) {
            list.push(element);
        }
    });
    dethiContainer.innerHTML = "";
    list.forEach((element) => {
        dethiContainer.innerHTML += dethi(element);
    });
}
