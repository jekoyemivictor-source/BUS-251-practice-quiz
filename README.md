<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>BUS 251 & 261 Master Practice Quiz</title>
  <style>
    :root {
      --primary: #1e3a8a;
      --primary-light: #3b82f6;
      --accent: #0d9488;
      --neutral-dark: #1f2937;
      --neutral-light: #f3f4f6;
      --success: #16a34a;
      --danger: #dc2626;
    }
    body {
      font-family: 'Helvetica Neue', Arial, sans-serif;
      background-color: var(--neutral-light);
      color: var(--neutral-dark);
      margin: 0;
      padding: 15px;
    }
    .quiz-container {
      max-width: 650px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 12px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.08);
      padding: 20px;
    }
    header h1 {
      font-size: 1.6rem;
      color: var(--primary);
      margin: 0 0 5px 0;
      text-align: center;
    }
    .subtitle {
      font-size: 0.95rem;
      color: #666;
      text-align: center;
      margin-bottom: 20px;
    }
    .tracker-bar {
      display: flex;
      justify-content: space-between;
      font-size: 0.85rem;
      font-weight: bold;
      color: var(--primary);
      margin-bottom: 15px;
      background: var(--neutral-light);
      padding: 8px 12px;
      border-radius: 6px;
    }
    .question-block {
      margin-bottom: 25px;
      display: none;
    }
    .question-block.active {
      display: block;
    }
    .question-text {
      font-size: 1.1rem;
      font-weight: 600;
      margin-bottom: 15px;
      line-height: 1.4;
    }
    .options-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .option-btn {
      background: #ffffff;
      border: 2px solid #e5e7eb;
      border-radius: 8px;
      padding: 12px 15px;
      text-align: left;
      font-size: 0.95rem;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .option-btn:hover {
      background: var(--neutral-light);
      border-color: var(--primary-light);
    }
    .option-btn.selected-correct {
      background: #d1fae5;
      border-color: var(--success);
      color: #065f46;
    }
    .option-btn.selected-wrong {
      background: #fee2e2;
      border-color: var(--danger);
      color: #991b1b;
    }
    .explanation-box {
      margin-top: 12px;
      padding: 10px 15px;
      border-radius: 6px;
      font-size: 0.9rem;
      line-height: 1.4;
      display: none;
    }
    .explanation-box.show {
      display: block;
    }
    .explanation-box.correct {
      background: #ecfdf5;
      color: #047857;
      border-left: 4px solid var(--success);
    }
    .explanation-box.wrong {
      background: #fff5f5;
      color: #b91c1c;
      border-left: 4px solid var(--danger);
    }
    .nav-controls {
      display: flex;
      justify-content: space-between;
      margin-top: 25px;
      border-top: 1px solid #e5e7eb;
      padding-top: 15px;
    }
    .nav-btn {
      background: var(--primary);
      color: #ffffff;
      border: none;
      padding: 10px 20px;
      border-radius: 6px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.2s;
    }
    .nav-btn:hover {
      background: var(--primary-light);
    }
    .nav-btn:disabled {
      background: #cbd5e1;
      cursor: not-allowed;
    }
  </style>
</head>
<body>
  <div class="quiz-container">
    <header>
      <h1>BUS 251 & 261 Practice Hub</h1>
      <div class="subtitle">Management Principles & Macroeconomic Environment</div>
    </header>

  </div>

  <script>
    
    const quizData = [
      // WE WILL PASTE ALL QUESTIONS DIRECTLY INSIDE HERE IN STEP 2
    ];

    let currentIdx = 0;
    let score = 0;
    let answeredQuestions = new Set();

    function initQuiz() {
      const wrapper = document.getElementById('quiz-wrapper');
      wrapper.innerHTML = '';
      
      quizData.forEach((item, qIdx) => {
        const qBlock = document.createElement('div');
        qBlock.className = `question-block ${qIdx === 0 ? 'active' : ''}`;
        qBlock.id = `q-block-${qIdx}`;

        const qText = document.createElement('div');
        qText.className = 'question-text';
        qText.innerText = `${qIdx + 1}. ${item.q}`;
        qBlock.appendChild(qText);

        const optionsContainer = document.createElement('div');
        optionsContainer.className = 'options-list';

        item.o.forEach((option, oIdx) => {
          const btn = document.createElement('button');
          btn.className = 'option-btn';
          btn.id = `q-${qIdx}-opt-${oIdx}`;
          btn.innerText = option;
          btn.onclick = () => checkAnswer(qIdx, oIdx, item.a, item.exp);
          optionsContainer.appendChild(btn);
        });

        qBlock.appendChild(optionsContainer);

        const expBox = document.createElement('div');
        expBox.className = 'explanation-box';
        expBox.id = `q-${qIdx}-exp`;
        qBlock.appendChild(expBox);

        wrapper.appendChild(qBlock);
      });
      updateTracker();
    }

    function checkAnswer(qIdx, selectedIdx, correctIdx, explanationText) {
      if (answeredQuestions.has(qIdx)) return; 

      answeredQuestions.add(qIdx);
      const isCorrect = selectedIdx === correctIdx;
      const selectedBtn = document.getElementById(`q-${qIdx}-opt-${selectedIdx}`);
      const expBox = document.getElementById(`q-${qIdx}-exp`);

      if (isCorrect) {
        selectedBtn.classList.add('selected-correct');
        score++;
        expBox.className = 'explanation-box show correct';
        expBox.innerText = `Correct! ${explanationText}`;
      } else {
        selectedBtn.classList.add('selected-wrong');
        const correctBtn = document.getElementById(`q-${qIdx}-opt-${correctIdx}`);
        correctBtn.classList.add('selected-correct');
        expBox.className = 'explanation-box show wrong';
        expBox.innerText = `Incorrect choice. Explanation: ${explanationText}`;
      }
      
      updateTracker();
    }

    function moveQuestion(step) {
      document.getElementById(`q-block-${currentIdx}`).classList.remove('active');
      currentIdx += step;
      document.getElementById(`q-block-${currentIdx}`).classList.add('active');

      document.getElementById('prev-btn').disabled = currentIdx === 0;
      document.getElementById('next-btn').disabled = currentIdx === quizData.length - 1;
      
      updateTracker();
    }

    function updateTracker() {
      document.getElementById('progress-text').innerText = `Question ${currentIdx + 1} of ${quizData.length} | Answered: ${answeredQuestions.size} (${quizData.length - answeredQuestions.size} Left)`;
      document.getElementById('score-text').innerText = `Score: ${score}`;
    }

    window.onload = initQuiz;
  </script>
</body>
</html>
