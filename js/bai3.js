function tinhSoThue () {
    var thuNhapNam = document.getElementById("thuNhapNam").value;
    var soPhuThuoc = document.getElementById("soPhuThuoc").value;
    var soChiuThue = thuNhapNam - 4 - soPhuThuoc * 1.6;
    var tienThue = 0;

    if (thuNhapNam <=60) {
        tienThue = soChiuThue * 5 / 100;
    } else if (thuNhapNam > 60 && thuNhapNam <= 120) {
        tienThue = soChiuThue * 10 / 100;
    } else if (thuNhapNam > 120 && thuNhapNam <= 210) {
        tienThue = soChiuThue * 15 / 100;
    } else if (thuNhapNam > 210 && thuNhapNam <= 384) {
        tienThue = soChiuThue * 20 / 100;
    } else if (thuNhapNam > 384 && thuNhapNam <= 624) {
        tienThue = soChiuThue * 25 / 100;
    } else if (thuNhapNam > 624 && thuNhapNam <= 960) {
        tienThue = soChiuThue * 30 / 100;
    } else {
        tienThue = soChiuThue * 35 / 100;
    }
    
    var divTienThue = document.getElementById("divTienThue");
    divTienThue.style.display = "block";

    var spanTienThue = document.getElementById("tienThue");
    spanTienThue.innerHTML = tienThue
}
