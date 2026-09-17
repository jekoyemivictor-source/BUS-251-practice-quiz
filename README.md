<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BUS251/261 Master Quiz App</title>
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

</head>
<body>

<div class="quiz-container">
    <header>
        <h1>BUS 251 & 261 Master Practice Quiz</h1>
        <div class="subtitle">Introduction to the Principles and Practices of Management</div>
    </header>
  
</div>

<script>
    const quizData = [
        {
            q: "The Nigerian Enterprises Promotion Decree of 1972 was enacted under which military administration?",
            o: ["General Ibrahim Babangida", "General Yakubu Gowon", "General Murtala Muhammed", "Major General Muhammadu Buhari"],
            a: 1,
            exp: "The 1972 Indigenization decree was initiated by the military administration of General Yakubu Gowon following the civil war."
        },
        {
            q: "What was the primary policy objective of the 1972 Indigenization Decree?",
            o: ["To encourage foreign direct investment in retail sectors", "To hand over public infrastructure to private international monopolies", "To transfer corporate ownership and economic control to indigenous citizens", "To fully devalue the national currency against the dollar"],
            a: 2,
            exp: "The policy aimed to grant Nigerians control over the economic driving forces of their nation and ensure capital retention locally."
        },
        {
            q: "Which National Development Plan prioritised post-Civil War physical reconstruction and national integration?",
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
            exp: "The 7th NDP (1996-1998) was targeted heavily towards long-term sustainability patterns in local enterprise management."
        },
        {
            q: "What was the target macroeconomic milestone of the Nigeria Vision 2020 initiative?",
            o: ["To eradicate 100% of foreign import dependencies", "To position Nigeria among the top 20 largest global economies by 2020", "To establish a singular currency for the West African sub-region", "To fully nationalize the banking and financial sector"],
            a: 1,
            exp: "Vision 2020 sought to rank Nigeria in the league of the top 20 economic giants globally via structural industrial expansion."
        },
        {
