// 画像のリサイズと表示処理
function resizeAndDisplayImage(url) {
  const img = new Image();
  img.onload = function() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 384;
    canvas.height = 216;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    
    const resizedImageUrl = canvas.toDataURL(); // リサイズ後の画像のDataURLを取得
    
    // リサイズ後の画像を表示
    const randomImageElement = document.getElementById("random-image");
    randomImageElement.src = resizedImageUrl;
  };
  
  img.src = url;
}

// ページが読み込まれた時に実行される処理
window.onload = function() {
  const randomIndex = Math.floor(Math.random() * 12) + 1; // 1から23のランダムな数値を生成
  const randomImageUrl = `path_to_my_image${randomIndex}.jpg`; // ランダムな数値を含む画像URLを生成

  // リサイズと表示処理を呼び出す
  resizeAndDisplayImage(randomImageUrl);
};
