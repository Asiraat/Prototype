// ページが読み込まれた時に実行される処理
window.onload = function() {
  const randomIndex = Math.floor(Math.random() * 12) + 1; // 1から12のランダムな数値を生成
  const randomImageUrl = `https://Asiraat.github.io/Prototype/picture2/${randomIndex}.png`; // ランダムな数値を含む画像URLを生成

  // ランダムな画像を取得して表示
  const randomImageElement = document.getElementById("random-image");
  randomImageElement.src = randomImageUrl;
};

