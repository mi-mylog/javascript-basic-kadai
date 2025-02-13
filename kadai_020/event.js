// 定数に代入する
const Btn = document.getElementById("btn");
const Text = document.getElementById("text");

// 処理が実行された時、表示が変更されるように設定する
Btn.addEventListener("click" , () => {
  Text.textContent = "ボタンをクリックしました";
});