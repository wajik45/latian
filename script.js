alert ('tebak angka');
alert ('kalo salah angka jawaban berubah');
var ulang = 0;
while (ulang < 5) {
	var gua = prompt ('Masukkan Nilai 1 - 5');
	var bot = Math.random();
	var hasil = '';

	if (bot <= 0.20) {
		hasil = '1';
	} else if (bot >= 0.20 && bot <=0.40) {
		hasil = '2';
	} else if (bot >= 0.40 && bot <=0.60) {
		hasil = '3';
	} else if (bot >= 0.60 && bot <=0.80) {
		hasil = '4';
	} else {
		hasil = '5';
	}

	if (gua == hasil) {
		alert('BENAR!');
		ulang = 5;
	} else if (gua != hasil && gua < hasil) {
		ulang++;
		if (ulang == 1) {
			alert ('SALAH \nSISA 4');
		} else if (ulang == 2) {
			alert ('SALAH \nSISA 3');
		} else if (ulang == 3) {
			alert ('SALAH \nSISA 2');
		} else if (ulang == 4) {
			alert ('SALAH \nSISA 1');
		} else {
			alert ('SALAH \nSISA 0 GAME OVER');
			ulang = confirm('coba lagi?');
			if (ulang == false) {
				ulang = 5;
			}
		}
	} else if (gua != hasil && gua > hasil && gua <= 5) {
		ulang++;
		if (ulang == 1) {
			alert ('SALAH \nSISA 4');
		} else if (ulang == 2) {
			alert ('SALAH \nSISA 3');
		} else if (ulang == 3) {
			alert ('SALAH \nSISA 2');
		} else if (ulang == 4) {
			alert ('SALAH \nSISA 1');
		} else {
			alert ('SALAH \nSISA 0 GAME OVER');
			ulang = confirm('coba lagi?');
			if (ulang == false) {
				ulang = 5;
			}
		}
	} else {
		alert ('masukkan input yang sesuai');
		alert ('coba lagi');
		ulang = true;
	}
	if (ulang==5) {
		alert('terima kasih sudah bermain');
		if (true) {
			ulang = true;
			if (ulang) {
				ulang = confirm ('main lagi ga cui?');
				if (ulang==false) {
					ulang = 5;
				}
			}
		}
	}
}