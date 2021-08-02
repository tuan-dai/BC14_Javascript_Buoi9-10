function QuanLyNhanVien() {
    this.dsnv = JSON.parse(localStorage.getItem("dsnv")) || []
}

QuanLyNhanVien.prototype.khoiTao = function() {
    if(this.dsnv.length === 0) {
        return;
    }
    this.dsnv = this.dsnv.map(function(nv){
        return new NhanVien(
            nv.taiKhoan,
            nv.hoTen,
            nv.email,
            nv.matKhau,
            nv.ngayLam,
            nv.luongCoBan,
            nv.chucVu,
            nv.gioLam,
        )
    })
};

QuanLyNhanVien.prototype.saveLocalStorage = function() {
    localStorage.setItem("dsnv", JSON.stringify(this.dsnv));
};

QuanLyNhanVien.prototype.themNhanVien = function(nhanVien) {
    this.dsnv.push(sinhVien);
    this.saveLocalStorage();
};

QuanLyNhanVien.prototype.capNhatNhanVien = function(nhanVien) {
    this.dsnv = this.dsnv.map(function(nv) {
        if(nv.taiKhoan === nhanVien.taiKhoan) {
            return nhanVien;
        }
        return nv;
    });
    this.saveLocalStorage;
}

QuanLyNhanVien.prototype.xoaNhanVien = function(taiKhoan) {
    this.dsnv = this.dsnv.filter(function(nv) {
        return nv.taiKhoan !== taiKhoan;
    })
}

QuanLyNhanVien.prototype.timKiemNhanVien = function(search) {
    return this.dsnv.filter(function(nv) {
        var searchValue = search.trim().toLowerCase();
        var nameValue = nv.hoTen.trim().toLowerCase();
        return nameValue.indexOf(searchValue) !== -1;
    })
};

QuanLyNhanVien.prototype.chonNhanVien = function(taiKhoan) {
    return this.dsnv.find(function(nv) {
        return nv.taiKhoan === taiKhoan
    });
}

