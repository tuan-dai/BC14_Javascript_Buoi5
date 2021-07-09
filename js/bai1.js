function tinhDiem() {
    var diemChuan = document.getElementById('diemChuan').value;
    var diemToan = document.getElementById('diemToan').value;
    var diemLy = document.getElementById('diemLy').value;
    var diemHoa = document.getElementById('diemHoa').value;

    var khuVuc = document.getElementById('khuVuc').value;
    var doiTuong = document.getElementById('doiTuong').value;

    var divKetQua = document.getElementById('divKetQua');
    divKetQua.style.display = "block";

switch (khuVuc) {
    case "A":
        {
            diemKhuVuc = 2;
        }
        break;
    case "B":
        {
            diemKhuVuc = 1;
        }
        break;
    case "C":
        {
            diemKhuVuc = 0.5;
        }
        break;
    default:
        {
            diemKhuVuc = 0;
        }
}

switch (doiTuong) {
    case "1":
        {
            diemDoiTuong = 2.5;
        }
        break;
    case "2":
        {
            diemDoiTuong = 1.5;
        }
        break;
    case "3":
        {
            diemDoiTuong = 1;
        }
        break;
    default:
        {
            diemDoiTuong = 0;
        }
}

var tongSoDiem = +diemToan + +diemLy + +diemHoa + +diemKhuVuc + +diemDoiTuong;
console.log(tongSoDiem);

if (tongSoDiem >= diemChuan && diemToan > 0 && diemLy > 0 && diemHoa > 0) {
     var ketQua = "Đậu";
} else {
    var ketQua = "Rớt";  
}
var spanKetQua = document.getElementById('ketQua');
spanKetQua.innerHTML = ketQua

var spantongDiem = document.getElementById('tongDiem');
spantongDiem.innerHTML = tongSoDiem;
}
