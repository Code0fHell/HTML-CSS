const dethiContainer = document.getElementById('dethi_container')
const dethiContainer1 = document.getElementById('description')
console.log(dethiContainer1)
test_giuaky = [
    {
        content: "Đề thi đôi tuyển quốc gia vật lý",
        description: "+ Phần I: Kiến thức chung, 60 câu hỏi hiểu biết chung về hệ thống chính trị, tổ chức bộ máy của Đảng, Nhà nước, các tổ chức chính trị - xã hội; quản lý hành chính nhà nước; công chức, công vụ và các kiến thức khác để đánh giá năng lực. Thời gian thi 60 phút+ Phần II: Ngoại ngữ, 30 câu hỏi theo yêu cầu của vị trí việc làm về một trong năm thứ tiếng Anh, Nga, Pháp, Đức, Trung Quốc hoặc ngoại ngữ khác do người đứng đầu cơ quan có thẩm quyền tuyển dụng công chức quyết định. Thời gian thi 30 phút;",
        img: "./assets/img/PTIT.png"
    }, {
        content: "Đề thi đôi tuyển quốc gia Toán",
        description: "+ Phần I: Kiến thức chung, 60 câu hỏi hiểu biết chung về hệ thống chính trị, tổ chức bộ máy của Đảng, Nhà nước, các tổ chức chính trị - xã hội; quản lý hành chính nhà nước; công chức, công vụ và các kiến thức khác để đánh giá năng lực. Thời gian thi 60 phút+ Phần II: Ngoại ngữ, 30 câu hỏi theo yêu cầu của vị trí việc làm về một trong năm thứ tiếng Anh, Nga, Pháp, Đức, Trung Quốc hoặc ngoại ngữ khác do người đứng đầu cơ quan có thẩm quyền tuyển dụng công chức quyết định. Thời gian thi 30 phút;",
        img: "./assets/img/fb.png"
    },
    {
        content: "Đề thi đôi tuyển quốc gia Ngữ Văn",
        description: "+ Phần I: Kiến thức chung, 60 câu hỏi hiểu biết chung về hệ thống chính trị, tổ chức bộ máy của Đảng, Nhà nước, các tổ chức chính trị - xã hội; quản lý hành chính nhà nước; công chức, công vụ và các kiến thức khác để đánh giá năng lực. Thời gian thi 60 phút+ Phần II: Ngoại ngữ, 30 câu hỏi theo yêu cầu của vị trí việc làm về một trong năm thứ tiếng Anh, Nga, Pháp, Đức, Trung Quốc hoặc ngoại ngữ khác do người đứng đầu cơ quan có thẩm quyền tuyển dụng công chức quyết định. Thời gian thi 30 phút;",
        img: "./assets/img/fb.png"
    },
    {
        content: "Đề thi đôi tuyển quốc gia Sinh Học",
        description: "+ Phần I: Kiến thức chung, 60 câu hỏi hiểu biết chung về hệ thống chính trị, tổ chức bộ máy của Đảng, Nhà nước, các tổ chức chính trị - xã hội; quản lý hành chính nhà nước; công chức, công vụ và các kiến thức khác để đánh giá năng lực. Thời gian thi 60 phút+ Phần II: Ngoại ngữ, 30 câu hỏi theo yêu cầu của vị trí việc làm về một trong năm thứ tiếng Anh, Nga, Pháp, Đức, Trung Quốc hoặc ngoại ngữ khác do người đứng đầu cơ quan có thẩm quyền tuyển dụng công chức quyết định. Thời gian thi 30 phút;",
        img: "./assets/img/facebook.svg"
    }
]
test_luyentap = [
    {
        content: "Đề thi đôi tuyển quốc gia vật lý",
        description: "+ Phần I: Kiến thức chung, 60 câu hỏi hiểu biết chung về hệ thống chính trị, tổ chức bộ máy của Đảng, Nhà nước, các tổ chức chính trị - xã hội; quản lý hành chính nhà nước; công chức, công vụ và các kiến thức khác để đánh giá năng lực. Thời gian thi 60 phút+ Phần II: Ngoại ngữ, 30 câu hỏi theo yêu cầu của vị trí việc làm về một trong năm thứ tiếng Anh, Nga, Pháp, Đức, Trung Quốc hoặc ngoại ngữ khác do người đứng đầu cơ quan có thẩm quyền tuyển dụng công chức quyết định. Thời gian thi 30 phút;",
        img: "./assets/img/facebook.svg"
    }, {
        content: "Đề thi đôi tuyển quốc gia Toán",
        description: "Thời gian thi 30 phút;",
        img: "./assets/img/facebook.svg"
    },
    {
        content: "Đề thi đôi tuyển quốc gia Ngữ Văn",
        description: "+ Phần I: Kiến thức chung, 60 câu hỏi hiểu biết chung về hệ thống chính trị, tổ chức bộ máy của Đảng, Nhà nước, các tổ chức chính trị - xã hội; quản lý hành chính nhà nước; công chức, công vụ và các kiến thức khác để đánh giá năng lực. Thời gian thi 60 phút+ Phần II: Ngoại ngữ, 30 câu hỏi theo yêu cầu của vị trí việc làm về một trong năm thứ tiếng Anh, Nga, Pháp, Đức, Trung Quốc hoặc ngoại ngữ khác do người đứng đầu cơ quan có thẩm quyền tuyển dụng công chức quyết định. Thời gian thi 30 phút;",
        img: "./assets/img/facebook.svg"
    },
    {
        content: "Đề thi đôi tuyển quốc gia Sinh Học",
        description: "+ Phần I: Kiến thức chung, 60 câu hỏi hiểu biết chung về hệ thống chính trị, tổ chức bộ máy của Đảng, Nhà nước, các tổ chức chính trị - xã hội; quản lý hành chính nhà nước; công chức, công vụ và các kiến thức khác để đánh giá năng lực. Thời gian thi 60 phút+ Phần II: Ngoại ngữ, 30 câu hỏi theo yêu cầu của vị trí việc làm về một trong năm thứ tiếng Anh, Nga, Pháp, Đức, Trung Quốc hoặc ngoại ngữ khác do người đứng đầu cơ quan có thẩm quyền tuyển dụng công chức quyết định. Thời gian thi 30 phút;",
        img: "./assets/img/facebook.svg"
    }
]

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
</div>`
}
const myMap = new Map();
function mymap() {
    myMap.set(1, test_luyentap)
    myMap.set(2, test_giuaky)
    myMap.set(3, test_giuaky)
    myMap.set(4, test_giuaky)
    myMap.set(5, test_luyentap)
    myMap.set(6, test_luyentap)
}
mymap()
function show(number, otherDate = new Date()) {
    if (number % 2 == 0) {
        const today = new Date();
        if (today < otherDate) {
            alert("Chưa đến ngày truy cập");
            return;
        }
    }
    var a = myMap.get(number)
    dethiContainer.innerHTML = "";
    a.forEach(element => {
        if (element != null)
            dethiContainer.innerHTML += dethi(element);
        else {
            console.error(`Không tìm thấy dữ liệu cho số ${number}`);
            return;
        }
    });
}
show(1)
function search(event) {
    const searchInput = document.getElementById("input-search").value
    searchOutput = []
    test_giuaky.forEach((element) => {
        if (element.content.includes(searchInput) || element.description.includes(searchInput)) {
            searchOutput.push(element)
        }
    })
    test_luyentap.forEach((element) => {
        if (element.content.includes(searchInput) || element.description.includes(searchInput)) {
            searchOutput.push(element)
        }
    })
    myMap.set(7, searchOutput)
    show(7)
    myMap.delete(7)
}
const myCategory = []
function showCategory(value) {
    list = []
    value=value.toLowerCase();
    test_giuaky.forEach((element) => {
        if (element.content.toLowerCase().includes(value) || element.description.toLowerCase().includes(value)) {
            list.push(element)
        }
    })
    test_luyentap.forEach((element) => {
        if (element.content.toLowerCase().includes(value) || element.description.toLowerCase().includes(value)) {
            list.push(element)
        }
    })
    dethiContainer.innerHTML = "";
    list.forEach(element => {
        dethiContainer.innerHTML += dethi(element);
    });
}