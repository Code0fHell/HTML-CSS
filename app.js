function NhanVien(maNV, hoTen, ngaySinh, phongBan, heSoLuong) {
    this.maNV = maNV;
    this.hoTen = hoTen;
    this.ngaySinh = ngaySinh;
    this.phongBan = phongBan;
    this.heSoLuong = heSoLuong;

    this.capNhatThongTin = function (newMaNV, newHoTen, newNgaySinh, newPhongBan, newHeSoLuong) {
        this.maNV = newMaNV || this.maNV;
        this.hoTen = newHoTen || this.hoTen;
        this.ngaySinh = newNgaySinh || this.ngaySinh;
        this.phongBan = newPhongBan || this.phongBan;
        this.heSoLuong = newHeSoLuong || this.heSoLuong;
    };
}

function hienThiDanhSachNhanVien(danhSachNV) {
    const table = document.getElementById("danhSachNV");
    table.innerHTML = "<tr><th>Mã NV</th><th>Họ và tên</th><th>Ngày sinh</th><th>Phòng ban</th><th>Hệ số lương</th><th>Thao tác</th></tr>";

    for (let i = 0; i < danhSachNV.length; i++) {
        const nv = danhSachNV[i];
        const row = table.insertRow(-1);
        const cellMaNV = row.insertCell(0);
        const cellHoTen = row.insertCell(1);
        const cellNgaySinh = row.insertCell(2);
        const cellPhongBan = row.insertCell(3);
        const cellHeSoLuong = row.insertCell(4);
        const cellThaoTac = row.insertCell(5);

        cellMaNV.textContent = nv.maNV;
        cellHoTen.textContent = nv.hoTen;
        cellNgaySinh.textContent = nv.ngaySinh;
        cellPhongBan.textContent = nv.phongBan;
        cellHeSoLuong.textContent = nv.heSoLuong;

        const btnCapNhat = document.createElement("button");
        btnCapNhat.textContent = "Cập nhật";
        btnCapNhat.onclick = function () {
            hienThiFormCapNhat();
            document.getElementById("maNVCapNhat").value = nv.maNV;
            document.getElementById("newMaNV").value = nv.maNV;
            document.getElementById("newHoTen").value = nv.hoTen;
            document.getElementById("newNgaySinh").value = nv.ngaySinh;
            document.getElementById("newPhongBan").value = nv.phongBan;
            document.getElementById("newHeSoLuong").value = nv.heSoLuong;
        };

        cellThaoTac.appendChild(btnCapNhat);
    }
}

const danhSachNhanVien = [];
function taoDanhSachNhanVien() {
    const soLuongNhanVien = parseInt(document.getElementById("soLuongNV").value);

    for (let i = 0; i < soLuongNhanVien; i++) {
        const maNV = prompt("Nhập mã NV:");
        const hoTen = prompt("Nhập họ và tên:");
        const ngaySinh = prompt("Nhập ngày tháng năm sinh:");
        const phongBan = prompt("Nhập phòng ban:");
        const heSoLuong = prompt("Nhập hệ số lương:");

        const nv = new NhanVien(maNV, hoTen, ngaySinh, phongBan, heSoLuong);
        danhSachNhanVien.push(nv);
    }

    hienThiDanhSachNhanVien(danhSachNhanVien);
}

function hienThiFormCapNhat() {
    document.getElementById("formCapNhat").style.display = "block";
}

function capNhatThongTinNhanVien() {
    const maNVCapNhat = document.getElementById("maNVCapNhat").value;
    const newMaNV = document.getElementById("newMaNV").value;
    const newHoTen = document.getElementById("newHoTen").value;
    const newNgaySinh = document.getElementById("newNgaySinh").value;
    const newPhongBan = document.getElementById("newPhongBan").value;
    const newHeSoLuong = document.getElementById("newHeSoLuong").value;

    for (let i = 0; i < danhSachNhanVien.length; i++) {
        if (danhSachNhanVien[i].maNV === maNVCapNhat) {
            danhSachNhanVien[i].capNhatThongTin(newMaNV, newHoTen, newNgaySinh, newPhongBan, newHeSoLuong);
            console.log(`Đã cập nhật thông tin cho Nhân viên mã ${maNVCapNhat}`);
            hienThiDanhSachNhanVien(danhSachNhanVien);
            document.getElementById("formCapNhat").style.display = "none";
            return;
        }
    }
    console.log(`Không tìm thấy Nhân viên có mã ${maNVCapNhat}`);
}