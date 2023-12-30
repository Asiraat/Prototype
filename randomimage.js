// ページが読み込まれた時に実行される処理
window.onload = function() {
  const randomIndex = Math.floor(Math.random() * 12) + 1; // 1から12のランダムな数値を生成
  const randomImageUrl = `https://Asiraat.github.io/Prototype/picture2/${randomIndex}.png`; // ランダムな数値を含む画像URLを生成

  // ランダムな画像を取得して表示
  const randomImageElement = document.getElementById("random-image");
  randomImageElement.src = randomImageUrl;
};

// 画像をリサイズする関数
function resizeImage(img) {
  const container = img.parentNode;
  const containerWidth = container.offsetWidth;
  const containerHeight = container.offsetHeight;

  const imgWidth = img.width;
  const imgHeight = img.height;

  if (imgWidth > containerWidth || imgHeight > containerHeight) {
    const ratioWidth = containerWidth / imgWidth;
    const ratioHeight = containerHeight / imgHeight;

    const minRatio = Math.min(ratioWidth, ratioHeight);

    img.style.width = `${imgWidth * minRatio}px`;
    img.style.height = `${imgHeight * minRatio}px`;
  }
}
