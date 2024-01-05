// 画像のリサイズと表示処理
function resizeAndDisplayImage(url) {
  const img = new Image();
  img.onload = function() {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 768;
    canvas.height = 432;
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    
    const resizedImageUrl = canvas.toDataURL(); // リサイズ後の画像のDataURLを取得
    
    // リサイズ後の画像を表示
    const randomImageElement = document.getElementById("random-image");
    randomImageElement.src = resizedImageUrl;
  };
  
  img.src = url;
}

// ランダムな文章を表示する関数
function displayRandomText() {
  const textArray = [
    "これはランダムな文章1です。",
    "ランダムな文章2はこちら。",
    "この文章はランダム3です。",
    // 他のランダムな文章を追加
  ];
  const randomIndex = Math.floor(Math.random() * textArray.length);
  const randomText = textArray[randomIndex];

  const textContainer = document.getElementById("random-text");
  textContainer.textContent = randomText;
}

// ページが読み込まれた時に実行される処理
window.onload = function() {
  const randomIndex = Math.floor(Math.random() * 12) + 1; // 1から23のランダムな数値を生成
  const randomImageUrl = `https://Asiraat.github.io/Prototype/picture2/${randomIndex}.png`; // ランダムな数値を含む画像URLを生成

  // リサイズと表示処理を呼び出す
  resizeAndDisplayImage(randomImageUrl);
};
  // ランダムな文章の表示
  displayRandomText();


  // Regenerateボタンクリック時の処理を追加
  const regenerateButton = document.getElementById("regenerate-button");
  regenerateButton.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * 12) + 1; // 1から23のランダムな数値を生成
    const randomImageUrl = `https://Asiraat.github.io/Prototype/picture2/${randomIndex}.png`; // ランダムな数値を含む画像URLを生成

    // 画像とテキストを再生成するコード
    resizeAndDisplayImage(randomImageUrl);
    displayRandomText();
  });
};
