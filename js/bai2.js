function soTienDien () {
    var soKW = document.getElementById("soKW").value;
    var tongTien = 0;

    const TIENKW_1 = 500;
    const TIENKW_2 = 650;
    const TIENKW_3 = 850;
    const TIENKW_4 = 1100;
    const TIENKW_5 = 1300;

if (soKW <= 50) {
    tongTien = soKW * TIENKW_1;
} else if (soKW > 50 && soKW <= 100) {
    tongTien = 50 * TIENKW_1 + (soKW - 50) * TIENKW_2;
} else if (soKW > 100 && soKW <= 200) {
    tongTien = 50 * TIENKW_1 + 50 * TIENKW_2 + (soKW - 100) * TIENKW_3;
} else if (soKW> 200 && soKW <= 350) {
    tongTien = 50 * TIENKW_1 + 50 * TIENKW_2 + 100 * TIENKW_3 + (soKW - 200) * TIENKW_4;
} else {
    tongTien = 50 * TIENKW_1 + 50 * TIENKW_2 + 100 * TIENKW_3 + 150 * TIENKW_4 + (soKW - 350) * TIENKW_5;
}

var divHienThi = document.getElementById ("divHienThi")
divHienThi.style.display = "block";

var spanHienThi = document.getElementById ("hienThi")
spanHienThi.innerHTML = tongTien;
}