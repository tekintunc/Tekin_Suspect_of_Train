// Önce 1'den 10'a kadar rastgele bir sayı üret
var random = Math.floor(Math.random() * 10) + 1;
// tahmin hakkını 4 ile kısıtla
var hak = 4;

for (var tahminsayisi = 1; tahminsayisi <= hak; tahminsayisi++) {
  var tahmin = parseInt(
    prompt("10 vagonlu bu trende şüpheli sence hangi vagonda ?")
  );
  // tahmin edilen ile üretilen eşitse kaçdefada bulduysa görüntülesin
  if (random == tahmin) {
    alert(
      `Bravo ${tahminsayisi} defada  şüphelinin hangi vagonda saklandığını buldun`
    );
    // tahmin sayısına göre puan hesaplasın
    alert(`Kazandığın puan: ${100 - 25 * (tahminsayisi - 1)}`);
  } else if (random > tahmin) {
    // üretilen sayı tahmin edilen sayıdan büyükse aşağıdaki uyarıyı versın
    alert(
      "Daha Büyük bir sayı giriniz,Çünkü şüpheli yukarıdaki vagonlardan birinde"
    );
  } else {
    // üretilen sayı tahmin edilen sayıdan küçükse aşağıdaki uyarıyı versın
    alert(
      "Daha Kücük bir sayı giriniz, Çünkü şüpheli aşağıdaki vagonlardan birinde"
    );
  }
  if (tahminsayisi == hak) {
    // 4 denemede bulamadıysa asağıdaki uyarıyı versin
    alert(" Tahmin hakkınız bitti Şüpheliyi bulamadınız");
  }
}
