// ẨN HIỆN SỐ KẾT NỐI
window.onload = function () {
    if (loaiKH.value === "nhaDan") {
        document.getElementById("soKetNoi").disabled = true;
    }
}

loaiKH.addEventListener("change", hienThi);
function hienThi() {
    if (loaiKH.value === "nhaDan") {
        document.getElementById("soKetNoi").disabled = true;
    } else {
        document.getElementById("soKetNoi").disabled = false;
    }
}

// TÍNH TIỀN CÁP
function tinhTienCap() {
    var maKH = document.getElementById("maKH").value;
    var loaiKH = document.getElementById("loaiKH")
    var soKetNoi = document.getElementById("soKetNoi").value;
    var soKenhCC = document.getElementById("soKenhCC").value;

    var tienCap = 0;
    if (loaiKH.value === "nhaDan") {
        tienCap = 4.5 + 20.5 + 7.5 * soKenhCC
    } else {
        if (soKetNoi <= 10) {
            tienCap = 15 + 75 + 50 * soKenhCC;
        } else {
            tienCap = 15 + 75 + (soKetNoi - 10) * 5 + 50 * soKenhCC;
        }
    }
    var divTienCap = document.getElementById("divTienCap");
    divTienCap.style.display = "block";

    var spanTienCap = document.getElementById("tienCap");
    spanTienCap.innerHTML = tienCap;
}
