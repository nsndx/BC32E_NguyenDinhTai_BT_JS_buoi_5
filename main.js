var x = document.querySelectorAll('.left button')
var y = document.querySelectorAll('.left .fa-book')
var z = document.querySelectorAll('.left .fa-book-open')
var t = document.querySelectorAll('.right .bai')

x[0].onclick = function () {
    for (var i = 0; i < x.length; i++) {
        y[i].style.display = 'inline-block'
        y[0].style.display = 'none'
        z[i].style.display = 'none'
        z[0].style.display = 'inline-block'
        t[i].style.display = 'none'
        t[0].style.display = 'block'
    }
}
x[1].onclick = function () {
    for (var i = 0; i < x.length; i++) {
        y[i].style.display = 'inline-block'
        y[1].style.display = 'none'
        z[i].style.display = 'none'
        z[1].style.display = 'inline-block'
        t[i].style.display = 'none'
        t[1].style.display = 'block'
    }
}
x[2].onclick = function () {
    for (var i = 0; i < x.length; i++) {
        y[i].style.display = 'inline-block'
        y[2].style.display = 'none'
        z[i].style.display = 'none'
        z[2].style.display = 'inline-block'
        t[i].style.display = 'none'
        t[2].style.display = 'block'
    }
}
x[3].onclick = function () {
    for (var i = 0; i < x.length; i++) {
        y[i].style.display = 'inline-block'
        y[3].style.display = 'none'
        z[i].style.display = 'none'
        z[3].style.display = 'inline-block'
        t[i].style.display = 'none'
        t[3].style.display = 'block'
    }
}
//Bài 1: Quản lý tuyển sinh
/* Mô hình 3 khối
 - Đầu vào: điểm chuẩn hội đồng, điểm 3 môn của thí sinh, khu vực, đối tượng dự thi
 - Xử lý: 
    + Tạo biến diemChuan và gán giá trị từ người dùng nhập
    + Tạo biến khuVuc và gán giá trị từ người dùng lựa chọn
    + Tạo biến doiTuong và gán giá trị từ người dùng lựa chọn
    + Tạo biến diemMon1 và gán giá trị từ người dùng nhập
    + Tạo biến diemMon2 và gán giá trị từ người dùng nhập
    + Tạo biến diemMon3 và gán giá trị từ người dùng nhập
    + Tạo biến tongDiem = diemMon1 + diemMon2 + diemMon3 + khuVuc + doiTuong
    + Tạo biến kqBai1
    Nếu tongDiem >= diemChuan và diemMon1>0, diemMon2>0, diemMon3>0 ==> đậu
    Nếu không thoả mãn 1 trong các điều kiện trên ==> trượt
 - Đầu ra: Tổng điểm và kết quả thi đậu hay trượt
 */
document.getElementById('btn_bai1').onclick = function () {
    var diemChuan = Number(document.getElementById('diemChuan').value)
    var khuVuc = Number(document.getElementById('khuVuc').value)
    var doiTuong = Number(document.getElementById('doiTuong').value)
    var diemMon1 = Number(document.getElementById('diemMon1').value)
    var diemMon2 = Number(document.getElementById('diemMon2').value)
    var diemMon3 = Number(document.getElementById('diemMon3').value)
    var tongDiem = diemMon1 + diemMon2 + diemMon3 + khuVuc + doiTuong
    var kqBai1;
    if (diemChuan < 0 || diemChuan > 30) {
        kqBai1 = 'Điểm chuẩn sai'
    } else if (diemMon1 < 0 || diemMon1 > 10 || diemMon2 < 0 || diemMon2 > 10 || diemMon3 < 0 || diemMon3 > 10) {
        kqBai1 = 'Điểm môn sai'
    } else if (tongDiem >= diemChuan && diemMon1 > 0 && diemMon2 > 0 && diemMon3 > 0) {
        kqBai1 = 'Bạn đã đậu. Tổng điểm: ' + tongDiem.toFixed(1)
    } else if (diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0) {
        kqBai1 = 'Bạn đã trượt do có điểm bằng 0'
    } else {
        kqBai1 = 'Bạn đã trượt. Tổng điểm: ' + tongDiem.toFixed(1)
    }
    document.querySelector('.right .kqBai1').innerHTML = kqBai1
}

// Bài 2: Tính tiền điện
/*Mô hình 3 khối
- Đầu vào: Họ tên và số Kw điện sử dụng
- Xử lý: 
    + Tạo biến hoTen và gán giá trị từ người dùng nhập
    + Tạo biến soKw và gán giá trị từ người dùng nhập
    + Tính tiền điện theo khoảng giá 
        50Kw đầu 500d/Kw
        50Kw kế 650d/Kw
        100Kw kế 850d/Kw
        150Kw kế 1100d/Kw
        Còn lại 1300d/Kw
    + Tạo biến kqBai2;
- Đầu ra: Họ tên và tiền điện phải trả
 */
document.getElementById('btn_bai2').onclick = function () {
    var hoTen = document.getElementById('hoTen').value
    var soKw = Number(document.getElementById('soKw').value)
    var kqBai2
    if (soKw <= 0) {
        kqBai2 = 'Mời nhập số Kw điện'
    } else if (soKw > 0 && soKw <= 50) {
        kqBai2 = 'Họ tên: ' + hoTen + ', Tiền điện: ' + (soKw * 500).toLocaleString() + 'đ'
    } else if (soKw > 50 && soKw <= 100) {
        kqBai2 = 'Họ tên: ' + hoTen + ', Tiền điện: ' + (50 * 500 + (soKw - 50) * 650).toLocaleString() + 'đ'
    } else if (soKw > 100 && soKw <= 200) {
        kqBai2 = 'Họ tên: ' + hoTen + ', Tiền điện: ' + (50 * 500 + 50 * 650 + (soKw - 100) * 850).toLocaleString() + 'đ'
    } else if (soKw > 200 && soKw <= 350) {
        kqBai2 = 'Họ tên: ' + hoTen + ', Tiền điện: ' + (50 * 500 + 50 * 650 + 100 * 850 + (soKw - 200) * 1100).toLocaleString() + 'đ'
    } else {
        kqBai2 = 'Họ tên: ' + hoTen + ', Tiền điện: ' + (50 * 500 + 50 * 650 + 100 * 850 + 150 * 1100 + (soKw - 350) * 1300).toLocaleString() + 'đ'
    }
    document.querySelector('.right .kqBai2').innerHTML = kqBai2
}

//Bài 3: Tính thuế thu nhập cá nhân
document.getElementById('btn_bai3').onclick = function () {
    //input
    var b3_hoTen = document.getElementById('b3_hoTen').value
    var thuNhapNam = Number(document.getElementById('thuNhapNam').value)
    var soNguoiPhuThuoc = Number(document.getElementById('nguoiPhuThuoc').value)
    var kqBai3;
    var thuNhapChiuThue = thuNhapNam - 4000000 - soNguoiPhuThuoc * 1600000
    //progress
    if (thuNhapNam == '') {
        kqBai3 = 'Nhập tổng thu nhập năm'
    } else if (thuNhapChiuThue > 0 && thuNhapChiuThue <= 60000000) {
        kqBai3 = 'Họ tên: ' + b3_hoTen + ', Thuế thu nhập cá nhân bằng: ' + (thuNhapChiuThue * 0.05).toLocaleString() + 'đ'
    } else if (thuNhapChiuThue > 60000000 && thuNhapChiuThue <= 120000000) {
        kqBai3 = 'Họ tên: ' + b3_hoTen + ', Thuế thu nhập cá nhân bằng: ' + (60000000 * 0.05 + (thuNhapChiuThue - 60000000) * 0.1).toLocaleString() + 'đ'
    } else if (thuNhapChiuThue > 120000000 && thuNhapChiuThue <= 210000000) {
        kqBai3 = 'Họ tên: ' + b3_hoTen + ', Thuế thu nhập cá nhân bằng: ' + (60000000 * 0.05 + 60000000 * 0.1 + (thuNhapChiuThue - 120000000) * 0.15).toLocaleString() + 'đ'
    } else if (thuNhapChiuThue > 210000000 && thuNhapChiuThue <= 384000000) {
        kqBai3 = 'Họ tên: ' + b3_hoTen + ', Thuế thu nhập cá nhân bằng: ' + (60000000 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + (thuNhapChiuThue - 210000000) * 0.2).toLocaleString() + 'đ'
    } else if (thuNhapChiuThue > 384000000 && thuNhapChiuThue <= 624000000) {
        kqBai3 = 'Họ tên: ' + b3_hoTen + ', Thuế thu nhập cá nhân bằng: ' + (60000000 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + 174000000 * 0.2 + (thuNhapChiuThue - 384000000) * 0.25).toLocaleString() + 'đ'
    } else if (thuNhapChiuThue > 624000000 && thuNhapChiuThue <= 960000000) {
        kqBai3 = 'Họ tên: ' + b3_hoTen + ', Thuế thu nhập cá nhân bằng: ' + (60000000 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + 174000000 * 0.2 + 240000000 * 0.25 + (thuNhapChiuThue - 624000000) * 0.3).toLocaleString() + 'đ'
    } else {
        kqBai3 = 'Họ tên: ' + b3_hoTen + ', Thuế thu nhập cá nhân bằng: ' + (60000000 * 0.05 + 60000000 * 0.1 + 90000000 * 0.15 + 174000000 * 0.2 + 240000000 * 0.25 + 336000000 * 0.3 + (thuNhapChiuThue - 960000000) * 0.35).toLocaleString() + 'đ'
    }

    // output
    document.querySelector('.right .kqBai3').innerHTML = kqBai3
}

// Bài 4: Tính tiền cáp
document.getElementById('khachHang').oninput = function () {
    var khachHang = document.getElementById('khachHang').value
    if (khachHang == 2) {
        document.getElementById('soKetNoi').style.display = 'inline-block'
    } else {
        document.getElementById('soKetNoi').style.display = 'none'
    }
}
document.getElementById('btn_bai4').onclick = function () {
    // input
    var khachHang = document.getElementById('khachHang').value
    var maKhachHang = document.getElementById('maKhachHang').value
    var soKenh = Number(document.getElementById('soKenh').value)
    var soKetNoi = Number(document.getElementById('soKetNoi').value)
    var kqBai4;
    // progress
    if (khachHang == '') {
        kqBai4 = 'Mời chọn loại khách hàng'
    } else if (khachHang == 1) {
        kqBai4 = 'Mã khách hàng: ' + maKhachHang + ', Tiền cáp: $' + (4.5 + 20.5 + 7.5 * soKenh).toFixed(2)
    } else if (khachHang == 2 && soKetNoi <= 10) {
        kqBai4 = 'Mã khách hàng: ' + maKhachHang + ', Tiền cáp: $' + (15 + 75 + 50 * soKenh).toFixed(2)
    } else {
        kqBai4 = 'Mã khách hàng: ' + maKhachHang + ', Tiền cáp: $' + (15 + 75 + 5 * (soKetNoi - 10) + 50 * soKenh).toFixed(2)
    }
    // output
    document.querySelector('.right .kqBai4').innerHTML = kqBai4
}