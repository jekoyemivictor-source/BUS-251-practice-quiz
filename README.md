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
            {
        q: "The Nigerian Enterprises Promotion Decree of 1972 was enacted under which military administration?",
        o: ["General Ibrahim Babangida", "General Yakubu Gowon", "General Murtala Muhammed", "Major General Muhammadu Buhari"],
        a: 1,
        exp: "The 1972 Indigenization Decree was initiated by the military administration of General Yakubu Gowon following the civil war."
      },
      {
        q: "What was the primary policy objective of the 1972 Indigenization Decree?",
        o: ["To encourage foreign direct investment in retail sectors", "To hand over public infrastructure to private international monopolies", "To transfer corporate ownership and economic control to indigenous citizens", "To fully devalue the national currency against the dollar"],
        a: 2,
        exp: "The policy aimed to grant Nigerians control over the economic driving forces of their nation and ensure capital retention locally."
      },
      {
        q: "Which National Development Plan prioritized post-Civil War physical reconstruction and national integration?",
        o: ["1st NDP (1962–1968)", "2nd NDP (1970–1974)", "3rd NDP (1975–1980)", "4th NDP (1981–1985)"],
        a: 1,
        exp: "The 2nd National Development Plan was specifically engineered to repair infrastructure and foster institutional reintegration."
      },
      {
        q: "The construction of the Kainji Dam for national industrial electrification was a cornerstone infrastructure project of which plan?",
        o: ["1st NDP (1962–1968)", "3rd NDP (1975–1980)", "5th NDP (1986–1990)", "7th NDP (1996–1998)"],
        a: 0,
        exp: "The 1st NDP prioritized foundational electricity and transit infrastructure layouts right after independence."
      },
      {
        q: "Sustainable Entrepreneurship, Industrialisation, and Human Capital Development were the explicit core focus areas of which National Development Plan?",
        o: ["2nd NDP", "4th NDP", "6th NDP", "7th NDP"],
        a: 3,
        exp: "The 7th NDP (1996–1998) was targeted heavily towards long-term sustainability patterns in local enterprise management."
      },
      {
        q: "What was the target macroeconomic milestone of the Nigeria Vision 2020 initiative?",
        o: ["To eradicate 100% of foreign import dependencies", "To position Nigeria among the top 20 largest global economies by 2020", "To establish a singular currency for the West African sub-region", "To fully nationalize the banking and financial sector"],
        a: 1,
        exp: "Vision 2020 sought to rank Nigeria in the league of the top 20 economic giants globally via structural industrial expansion."
      },
      {
        q: "The NEEDS framework was implemented across multiple administrative levels. What does the acronym NEEDS stand for?",
        o: ["National Economic Empowerment Development Strategy", "National Employment Equity and Domestic Support", "Nigerian Enterprise Ecosystem and Development Synergy", "National Environmental Enforcement and Defense System"],
        a: 0,
        exp: "NEEDS prioritized structural poverty reduction, wealth creation, and value reorientation policies at the federal level."
      },
      {
        q: "In which year was the Structural Adjustment Program (S.A.P) introduced in Nigeria to overhaul the economy?",
        o: ["1972", "1981", "1986", "1995"],
        a: 2,
        exp: "S.A.P was rolled out in 1986 to loosen trade boundaries, privatize parastatals, and adjust fiscal policy shocks."
      },
      {
        q: "Which pillar of the active Vision 2050 framework focuses on modernizing state infrastructure grids, digital broadband, and healthcare networks?",
        o: ["Reposition", "Revamp", "Restructure", "Rationalize"],
        a: 1,
        exp: "The Revamp pillar deals with strengthening infrastructure foundations to increase local industrial productivity."
      },
      {
        q: "Which economic index tracks security disruptions and structural instability impacts on corporate supply chains and investments?",
        o: ["Consumer Price Index", "Terrorism Index", "Balance of Trade Index", "Misery Index"],
        a: 1,
        exp: "The Terrorism Index maps security dynamics to analyze risks regarding foreign capital allocation and supply logistics."
      },
      {
        q: "When a country achieves a positive Balance of Trade (BOT), it directly implies that the country:",
        o: ["Imports more finished goods than it exports", "Operates a entirely socialist economic system", "Exports a higher monetary value of goods than it imports", "Eradicates internal structural unemployment"],
        a: 2,
        exp: "A positive balance forms a trade surplus, indicating that local exports generated more cash value than import spendings."
      },
      {
        q: "The headquarters of the Economic Community of West African States (ECOWAS) is located in which city?",
        o: ["Accra, Ghana", "Geneva, Switzerland", "Vienna, Austria", "Abuja, Nigeria"],
        a: 3,
        exp: "The administrative hub and central secretariat of ECOWAS is natively positioned in Abuja, Nigeria."
      },
      {
        q: "Which international financial body focuses on stabilizing global exchange rates and providing short-term balance-of-payment assistance linked to economic reforms?",
        o: ["World Bank", "International Monetary Fund (IMF)", "World Trade Organization (WTO)", "Organization of the Petroleum Exporting Countries (OPEC)"],
        a: 1,
        exp: "The IMF regulates macro liquidity disruptions via targeted short-term corrective lending facility parameters."
      },
      {
        q: "The World Trade Organization (WTO) officially replaced GATT as a permanent international institution on which exact date?",
        o: ["January 1, 1972", "October 1, 1986", "January 1, 1995", "December 31, 2000"],
        a: 2,
        exp: "The WTO assumed operational authority on Jan 1, 1995, following the conclusion of long-running global treaty upgrades."
      },
      {
        q: "Unlike GATT which focused solely on physical merchandise trade, the WTO mandate includes agreements covering:",
        o: ["Military logistics and borders", "Services (GATS) and intellectual property rights (TRIPS)", "Global micro-finance loans exclusively", "Domestic agricultural real estate zoning"],
        a: 1,
        exp: "WTO broadened its regulatory coverage to modern technical frameworks like commercial services and copyright patterns."
      },
      {
        q: "In the SMART framework used to evaluate corporate goals, what does the 'R' stand for?",
        o: ["Revolutionary", "Realistic / Relevant", "Radical", "Rationalized"],
        a: 1,
        exp: "Goals must be Realistic and Relevant to line up smoothly with the concrete capacity parameters of the enterprise."
      },
      {
        q: "Which business model framework prioritizes serving the balanced interests of employees, community, customers, and suppliers rather than focusing entirely on owner profit?",
        o: ["Goal Model", "Planning Model", "Stakeholders Model", "Evolutionary Model"],
        a: 2,
        exp: "The Stakeholders Model looks widely at all actors linked directly or indirectly to the business lifecycle."
      },
      {
        q: "According to management theory, true entrepreneurship requires the dynamic combination of which three variables?",
        o: ["Capital + Labor + Land", "Regulation + Oversight + Enforcement", "Change + Innovation + Growth", "Stability + Consistency + Maintenance"],
        a: 2,
        exp: "Entrepreneurship separates itself from basic trade by enforcing change through innovative scaling dynamics."
      },
      {
        q: "How does a classic entrepreneur primarily differ from a standard, regular business person?",
        o: ["An entrepreneur never utilizes external banking loans", "An entrepreneur focuses directly on market innovation and aggressive scalability", "A regular business person operates entirely outside government regulations", "A regular business person focuses purely on high calculated structural risks"],
        a: 1,
        exp: "Classic entrepreneurs actively disrupt established marketplaces rather than maintaining slow corporate survival paths."
      },
      {
        q: "When an early-stage startup self-manages its organic cash flows using strictly internal operational revenues and personal savings, the practice is called:",
        o: ["Bootstrapping", "Venture Capitalization", "Privatization", "Hedging"],
        a: 0,
        exp: "Bootstrapping protects early corporate equity by avoiding outside investor debt constraints too early."
      },
      {
        q: "The entrepreneurial capacity to systematically shift business strategies and change models when core market assumptions fail is known as:",
        o: ["Deregulation", "Pivoting", "Indigenization", "Merging"],
        a: 1,
        exp: "Pivoting ensures corporate flexibility by matching strategic resource redirection paths to dynamic consumer feedbacks."
      },
      {
        q: "When a government establishes commissions like NAFDAC or the Corporate Affairs Commission (CAC), it is fulfilling its:",
        o: ["Participatory Role", "Promotional Role", "Regulatory Role", "Entrepreneurial Role"],
        a: 2,
        exp: "The regulatory framework maintains market hygiene and legal structures across commercial spaces."
      },
      {
        q: "The offering of pioneer tax holidays, development bank financing via the Bank of Industry (BOI), and building Free Trade Zones represents the government's:",
        o: ["Regulatory Role", "Promotional / Facilitative Role", "Restrictive Role", "Participatory Role"],
        a: 1,
        exp: "Facilitative promotional actions purposefully scale down operational hurdles to lower initial barrier indices."
      },
      {

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
