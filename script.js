// Önce 1'den 10'a kadar rastgele bir sayı üret

var random = Math.floor(Math.random() * 10) + 1;
var hak = 4;

for (var tahminsayisi = 1; tahminsayisi <= hak; tahminsayisi++) {
  var tahmin = parseInt(prompt("10 vagonlu bu trende şüpheli sence hangi vagonda ?"));

  if (random == tahmin) {
    alert(
      `Bravo ${tahminsayisi} defada  şüphelinin hangi vagonda saklandığını buldun`
    );

    alert(`Kazandığın puan: ${100 - 25 * (tahminsayisi - 1)}`);
  } else if (random > tahmin) {
    alert("Daha Büyük bir sayı giriniz,Çünkü şüpheli yukarıdaki vagonlardan birinde");
  } else {
    alert("Daha Kücük bir sayı giriniz, Çünkü şüpheli aşağıdaki vagonlardan birinde");
  }
  if (tahminsayisi == hak) {
    alert(" Tahmin hakkınız bitti Şüpheliyi bulamadınız");
  }
}
