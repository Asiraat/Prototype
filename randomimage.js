// 画像のプリロードと表示処理
const imageCache = new Map();

function preloadImage(url) {
  return new Promise((resolve, reject) => {
    if (imageCache.has(url)) {
      resolve(imageCache.get(url));
      return;
    }

    const img = new Image();
    img.crossOrigin = "anonymous";  // CORS対策
    img.onload = function() {
      imageCache.set(url, url); // 直接URLをキャッシュ
      resolve(url);
    };
    
    img.onerror = function() {
      console.error('画像の読み込みに失敗しました:', url);
      reject(new Error('画像の読み込みに失敗しました'));
    };
    
    img.src = url;
  });
}

function displayImage(imageUrl) {
  const randomImageElement = document.getElementById("random-image");
  randomImageElement.src = imageUrl;
}

function displayErrorImage() {
  const randomImageElement = document.getElementById("random-image");
  randomImageElement.src = 'path/to/error-image.png';  // エラー時の画像パスを設定してください
  randomImageElement.alt = '画像を読み込めませんでした';
}

// テキストデータの準備
const textArray = [
  "標本調査を用いてどのくらいの数用意されているか当ててみるといい",
  "全部AI絵だよ",
  "画像の表示が遅いのはJavaScriptのせいにしてもらって構わないよ",
  "負荷軽減のためにJavaScriptでリサイズしたら更に遅くなっちゃった",
  "標本調査を用いてどのくらいの数用意されているか当ててみるといい",
  "このフォントって機械彫刻用標準書体みたいでいいね",
  "ここに30字以上入力するとスマホのレイアウトが崩れちゃう",
  "自分でも画面上部のトップバー気に入っている",
  "Ctrl+Uで答え確認",
];

// ランダムな文章を表示する関数
function displayRandomText() {
  const randomIndex = Math.floor(Math.random() * textArray.length);
  const randomText = textArray[randomIndex];
  const textContainer = document.getElementById("random-text");
  textContainer.textContent = randomText;
}

// GitHubの正しい画像URLを生成する関数
function getGitHubImageUrl(index) {
  return `https://raw.githubusercontent.com/Asiraat/Prototype/main/picture3/${index}.avif`;
}

// ブラウザがAVIFをサポートしているか確認
function isAvifSupported() {
  const canvas = document.createElement('canvas');
  return canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0;
}

// ランダムな画像を表示する関数
async function displayRandomImage() {
  const randomIndex = Math.floor(Math.random() * 30) + 1;
  const format = isAvifSupported() ? 'avif' : 'png'; // AVIFがサポートされていない場合はPNGにフォールバック
  const randomImageUrl = getGitHubImageUrl(randomIndex, format);
  try {
    const imageUrl = await preloadImage(randomImageUrl);
    displayImage(imageUrl);
  } catch (error) {
    console.error('画像の表示に失敗しました:', error);
    displayErrorImage();
  }
}

// ページ読み込み時の処理
window.addEventListener('DOMContentLoaded', function() {
  displayRandomImage();
  displayRandomText();

  // Regenerateボタンの処理
  const regenerateButton = document.getElementById("regenerate-button");
  regenerateButton.addEventListener("click", function() {
    displayRandomImage();
    displayRandomText();
  });
});

// 他の画像をバックグラウンドでプリロード
function preloadOtherImages() {
  const format = isAvifSupported() ? 'avif' : 'png';
  for (let i = 1; i <= 15; i++) {
    const imageUrl = getGitHubImageUrl(i, format);
    preloadImage(imageUrl).catch(error => console.error('プリロード中にエラーが発生しました:', error));
  }
}

// ページ読み込み完了後にバックグラウンドでプリロード開始
window.addEventListener('load', preloadOtherImages);
