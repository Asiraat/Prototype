// 仮の画像URLの配列（実際のランダムな画像URLを取得する方法はサーバーサイドで処理する必要があります）
const imageUrls = [
  "https://Asiraat.github.io/Prototype/picture/kani.ico",
  "https://Asiraat.github.io/Prototype/picture/saya.ico",

  // 他の画像URLを追加
];

// ページが読み込まれた時に実行される処理
window.onload = function() {
  const randomIndex = Math.floor(Math.random() * imageUrls.length);
  const randomImageUrl = imageUrls[randomIndex];

  // ランダムな画像を取得して表示
  const randomImageElement = document.getElementById("random-image");
  randomImageElement.src = randomImageUrl;
};
