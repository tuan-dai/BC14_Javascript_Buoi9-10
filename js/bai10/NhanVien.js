function NhanVien(
    taiKhoan,
    hoTen,
    email,
    matKhau,
    ngayLam,
    luongCoBan,
    chucVu,
    gioLam,
) {
    this.taiKhoan = taiKhoan;
    this.hoTen = hoTen;
    this.email = email;
    this.matKhau = matKhau;
    this.ngayLam = ngayLam;
    this.luongCoBan = luongCoBan;
    this.chucVu = chucVu;
    this.gioLam = gioLam;
}

NhanVien.prototype.tongLuong = function () {
    if (this.chucVu === "Giám đốc") {
        return this.luongCoBan * 3;
    }
    if (this.chucVu === "Trưởng phòng") {
        return this.luongCoBan * 2
    }
    if (this.chucVu === "Nhân viên") {
        return this.luongCoBan;
    }
}

NhanVien.prototype.xepLoaiNV = function () {
    if (this.gioLam >= 192) {
        return "Nhân viên xuất sắc"
    }
    if (this.gioLam >= 176) {
        return "Nhân viên Giỏi"
    }
    if (this.gioLam >= 160) {
        return "Nhân viên Khá"
    }
    return "Nhân viên Trung bình"
}