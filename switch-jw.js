// PLAYER :
var rematch = true;

while (rematch == true) {
    var player = prompt('Apa Pilihan Kamu: \n(cth gajah, semut, orang)');
    // VS COMPUTER : Math.random() adalah fungsi untuk menggenerate angka random/ random value.
    var computer = Math.random();

    // deklarasi:
    if (computer < 0.35) {
        computer = 'semut';
    } else if (computer >= 0.35 && computer < 0.68) {
        computer = 'orang';
    } else {
        computer = 'gajah';
    }

    // RULES :
    var hasil = '';

    if (player == computer) {
        hasil = 'SERI';
    } else if (player == 'gajah') {
        // if (computer == 'orang') {
        //     hasil == 'MENANG';
        // } else {
        //     hasil = 'KALAH!';
        // }
        // operator ternary:
        hasil = (computer == 'semut') ? 'KALAH!' : 'MENANG';
    } else if (player == 'semut') {
        hasil = (computer = 'orang') ? 'KALAH!' : 'MENANG';
    }
    else if (player == 'orang') {
        hasil = (computer == 'gajah') ? 'KALAH!' : 'MENANG';
    }
    else {
        hasil = 'kamu memasukan pilihan yang salah!';
    }
    // TAMPIL HASIL 
    alert(`Kamu : ${player} \nvs\nComputer : ${computer} \n\nHasilnya :\nKamu ${hasil}`);
    rematch = confirm('Suit Ulang?');
}
alert('Terima Kasih Telah Bermain!');
