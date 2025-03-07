// document.getElementById('hintButton').addEventListener('click', function() {
//     var hint = document.getElementById('hint');
//     var button = document.getElementById('hintButton');
    
//     // ヒントが表示されているか確認
//     if (hint.style.display === 'block') {
//         // ヒントを非表示にする
//         hint.style.display = 'none';
        
//         // ボタンのテキストを「ヒントを表示」に変更
//         button.textContent = 'ヒントを表示';
//     } else {
//         // ヒントを表示する
//         hint.style.display = 'block';
        
//         // ボタンのテキストを「ヒントを非表示」に変更
//         button.textContent = 'ヒントを非表示';
//     }
// });

document.getElementById('hintButton').addEventListener('click', function() {
  var hintContainer = document.getElementById('hintContainer');
  var hint1 = document.getElementById('hint1');
  
  if (hintContainer.style.display === 'none' || hintContainer.style.display === '') {
      hintContainer.style.display = 'block';
      // hint1.style.display = 'block';
      this.textContent = 'ヒントを非表示';
  } else {
      hintContainer.style.display = 'none';
      hint1.style.display = 'none';
      this.textContent = 'エニ先生に相談する（ヒント）';
  }
});

function checkAnswers_Q1() {
  // 正解リスト（ここを正しい答えに変更）
  const correctAnswers = {
      Q1: "もち",
      Q2: "はなや",
      Q3: "こうちょう",
      Q4: "こうえん",
      Q5: "りかしつ",
      Q6: "えに"
  };

  let allCorrect = true;

  // すべての入力欄をチェック
  for (let key in correctAnswers) {
      let inputField = document.getElementById(key);

      // まずはスタイルをリセット
      inputField.classList.remove("incorrect");

      // ユーザーの回答を取得し、正解と比較
      if (inputField.value.trim() !== correctAnswers[key]) {
          allCorrect = false;
          inputField.classList.add("incorrect"); // 間違っていたら赤くする
      }
  }

  // 全問正解ならページを遷移
  if (allCorrect) {
    window.location.href = "sagashimono.html"; // 遷移先URLを変更してください
  }
  else {
    alert("間違えがあるよ！もうすこし考えてみて！")
  }
}


function checkAnswers_Q2() {
  // 正解リスト（ここを正しい答えに変更）
  const correctAnswers = {
      Q1: "まよいみち"
  };

  let allCorrect = true;

  // すべての入力欄をチェック
  for (let key in correctAnswers) {
      let inputField = document.getElementById(key);

      // まずはスタイルをリセット
      inputField.classList.remove("incorrect");

      // ユーザーの回答を取得し、正解と比較
      if (inputField.value.trim() !== correctAnswers[key]) {
          allCorrect = false;
          inputField.classList.add("incorrect"); // 間違っていたら赤くする
      }
  }

  // 全問正解ならページを遷移
  if (allCorrect) {
    window.location.href = "keyget.html"; // 遷移先URLを変更してください
  }
  else {
    alert("間違えがあるよ！もうすこし考えてみて！")
  }
}

function checkAnswers_Q3() {
  // 正解リスト（ここを正しい答えに変更）
  const correctAnswers = {
      // Q1: "液体窒素",
      Q2: "怪盗20",
      Q3: "音楽室",       // プルダウン
      Q4: "音子・エネルジコ"
  };

  let allCorrect = true;

  // すべての入力欄をチェック
  for (let key in correctAnswers) {
      let inputField = document.getElementById(key);

      // まずはスタイルをリセット
      inputField.classList.remove("incorrect");

      let userAnswer = "";

      // **プルダウン (select) の場合とテキスト入力 (input) の場合を判別**
      if (inputField.tagName === "SELECT") {
          userAnswer = inputField.options[inputField.selectedIndex].value; // 選択された値
      } else {
          userAnswer = inputField.value.trim(); // テキスト入力
      }

      // ユーザーの回答を取得し、正解と比較
      if (userAnswer !== correctAnswers[key]) {
          allCorrect = false;
          inputField.classList.add("incorrect"); // 間違っていたら赤くする
      }
  }

  // 全問正解ならページを遷移
  if (allCorrect) {
    window.location.href = "ending.html"; // 遷移先URLを変更してください
  } else {
    alert("間違えがあるよ！もうすこし考えてみて！");
  }
}


function postToX() {
    const text = encodeURIComponent("数多エニ謎解きセット『てらめたる学園に隠されし秘宝』でエニ先生と一緒に謎を解いた！ #てらめたる秘宝");
    const xUrl = `https://twitter.com/intent/tweet?text=${text}`;
    
    window.open(xUrl, "_blank"); // 新しいタブで開く
}

function toggleHint(hintNumber) {
  var hint = document.getElementById("hint" + hintNumber);
  hint.style.display = (hint.style.display === "none" || hint.style.display === "") ? "block" : "none";
}



// document.getElementById('submitAnswer').addEventListener('click', function() {
//   // ユーザーの答えを取得
//   const userAnswer = document.getElementById('userAnswer').value.trim().toLowerCase();

//   // 正解の答え
//   const correctAnswer = "メガネ";

//   if (userAnswer === correctAnswer) {
//     // 正解なら正解ページに遷移
//     window.location.href = "./quiz_correct.html";  // 正解ページのURL
//   } else {
//     // 不正解ならアラート
//     alert("不正解！もう一度試してみてね！");
//   }
// });

//let quizData = {};

// JSONファイルを読み込む関数
// async function loadQuizData() {
//   const response = await fetch("quiz.json");
//   quizData = await response.json();
// }

// 回答をチェックする関数
// function checkAnswers() {
//   const messageDiv = document.getElementById("message");
//   messageDiv.innerHTML = ""; // メッセージをリセット
//   let allCorrect = true;

//   // 各問題の回答をチェック
//   Object.keys(quizData).forEach((questionKey) => {
//     const questionData = quizData[questionKey];

//     // 各質問の回答をチェック
//     Object.keys(questionData).forEach((questionId) => {
//       const userAnswer = document.getElementById(`${questionKey}_${questionId}`).value.trim().toUpperCase();

//       if (questionData[questionId][userAnswer]) {
//         const answerData = questionData[questionId][userAnswer];
//         // メッセージを表示
//         const message = document.createElement("p");
//         message.textContent = `${questionKey} 問題${questionId}: ${answerData.message}`;
//         messageDiv.appendChild(message);

//         // 正解でなければフラグを更新
//         if (!answerData.incorrect) {
//           allCorrect = false;
//         }
//       } else {
//         // 無効な回答の場合
//         const invalidMessage = document.createElement("p");
//         invalidMessage.textContent = `${questionKey} 問題${questionId}: 無効な回答です。`;
//         messageDiv.appendChild(invalidMessage);
//         allCorrect = false;
//       }
//     });
//   });

//   // 全て正解なら正解ページに遷移
//   if (allCorrect) {
//     window.location.href = "quiz_correct.html";
//   }
// }

// ページロード時にJSONデータを読み込む
// window.onload = loadQuizData;

  