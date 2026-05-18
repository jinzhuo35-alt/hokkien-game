// ==================== 增强版题库（中+英+闽南语 文化解读） ====================
const questions = [
    // ========== 一枝草，一点露 (3题) ==========
    {
        text: "🌱 “一枝草，一点露” 的闽南语正确读音是？\nWhat is the correct Hokkien pronunciation of 'One blade of grass, one drop of dew'?",
        hint: "💡 提示：回忆视频中的发音～\nRemember the sounds from the video?",
        options: ["Tsi̍t ki tsháu, tsi̍t tiám lōo", "It-ti ki tsháu, it-ti lōo", "Tsi̍t pun tsháu, tsi̍t tah lōo", "Tsi̍t ki tsháu, nn̄g tiám lōo"],
        correct: 0,
        explanation: "✅ 正确读音是 Tsi̍t ki tsháu, tsi̍t tiám lōo。'一枝草，一点露'，字面虽小，哲理却深。\nCorrect! 'One blade of grass, one drop of dew' — a small phrase with deep meaning."
    },
    {
        text: "🌱 俗语 “一枝草，一点露” 最主要想表达的人生哲理是什么？\nWhat life philosophy does 'One blade of grass, one drop of dew' mainly convey?",
        hint: "💡 提示：这句话给下南洋的闽南人带来了什么力量？\nWhat strength did this saying give to Hokkien people who went to Southeast Asia?",
        options: ["做人要谦虚 / Stay humble", "天无绝人之路 / There's always a way out", "万物生长靠雨水 / Rain nurtures all", "要珍惜时间 / Treasure every moment"],
        correct: 1,
        explanation: "✅ 它传递的是'天无绝人之路'。即使再平凡的人，也有自己的际遇和出路。\nCorrect! It means 'Heaven never seals off all the exits' — even ordinary people have their own path forward."
    },
    {
        text: "🌱 英语中，与 “一枝草，一点露” 含义最接近的谚语是？\nWhich English saying best matches the meaning of 'One blade of grass, one drop of dew'?",
        hint: "💡 提示：哪句英语谚语表达了'困境中总有希望'？\nWhich saying expresses 'hope in tough times'?",
        options: ["Every dog has its day", "No pain, no gain", "Every cloud has a silver lining", "When in Rome, do as the Romans do"],
        correct: 2,
        explanation: "✅ Every cloud has a silver lining（乌云背后都有一线光芒）。这与'一枝草，一点露'传达的乐观和希望完美契合。\nCorrect! 'Every cloud has a silver lining' perfectly captures the optimism and hope of this Hokkien proverb."
    },

    // ========== 海蛎煎 (3题) ==========
    {
        text: "🦪 “海蛎煎”（蚵仔煎）的正确闽南语读法是？\nWhat is the correct Hokkien pronunciation for 'Oyster Omelette'?",
        hint: "💡 提示：视频里铁板上'滋啦'一声的那道菜～\nThink of the sizzling sound on the iron pan from the video!",
        options: ["Há-lē-tsian", "Ô-á-tsian", "Hái-lē-tsian", "Hō-sai-tsian"],
        correct: 1,
        explanation: "✅ 正确读音是 Ô-á-tsian（蚵仔煎）。'Ô-á'是海蛎，'tsian'是煎。\nCorrect! 'Ô-á' means oysters, and 'tsian' means pan-fried."
    },
    {
        text: "🦪 根据视频介绍，海蛎煎的主要原料不包括以下哪一项？\nAccording to the video, which one is NOT a main ingredient of Oyster Omelette?",
        hint: "💡 提示：地瓜粉是闽南特色，但面粉不是哦～\nSweet potato starch is the key — flour is not used!",
        options: ["新鲜海蛎 / Fresh Oysters", "地瓜粉 / Sweet Potato Starch", "面粉 / Flour", "鸡蛋 / Eggs"],
        correct: 2,
        explanation: "✅ 正宗海蛎煎用的是地瓜粉（番薯粉），让口感Q弹，而不是面粉。\nCorrect! Authentic Oyster Omelette uses sweet potato starch for its chewy texture, not flour."
    },
    {
        text: "🦪 视频中提到，对很多闽南人来说，海蛎煎不仅仅是一道小吃，更代表了什么？\nAccording to the video, what does Oyster Omelette represent for the Hokkien people beyond just a snack?",
        hint: "💡 提示：这和闽南人靠海为生的生活方式有关。\nThink about how Hokkien people live close to the sea.",
        options: ["靠海吃海的智慧 / Living by the sea", "宴客的体面 / A dish for guests", "宫廷御膳 / Imperial cuisine", "现代快餐文化 / Modern fast food"],
        correct: 0,
        explanation: "✅ 它代表'靠海吃海'的生活智慧。过去渔民不富裕，用简单食材做出满足的一餐。\nCorrect! It represents the wisdom of 'living by the sea' — turning simple ingredients into a satisfying meal."
    },

    // ========== 送王船 (3题) ==========
    {
        text: "🚢 闽南古老仪式“送王船”的闽南语读音是？\nWhat is the Hokkien pronunciation of the ancient ritual 'Sending Off the Royal Boat'?",
        hint: "💡 提示：这项仪式已延续数百年。\nThis ritual has been passed down for centuries.",
        options: ["Sàng huông-tsûn", "Sàng ông-chûn", "Sàng Ông-tsûn", "Sàng wáng-chuán"],
        correct: 2,
        explanation: "✅ 正确读音是 Sàng Ông-tsûn。这是一项延续数百年的闽南古老仪式。\nCorrect! 'Sàng Ông-tsûn' is a centuries-old Hokkien ritual."
    },
    {
        text: "🚢 “送王船”仪式中，精心打造的王船最终被如何处理？\nWhat happens to the meticulously crafted Royal Boat at the end of the ceremony?",
        hint: "💡 提示：船承载着灾厄与不顺，被送走。\nThe boat carries misfortune and hardship away.",
        options: ["保存在庙中供奉 / Kept in a temple", "推入海中漂流或焚化 / Set adrift at sea or burned", "拆解后分给村民 / Dismantled for villagers", "作为文物收藏 / Preserved as a relic"],
        correct: 1,
        explanation: "✅ 王船被推入海中漂流或焚化，象征着把苦难和不祥还给大海，留给人们的是风调雨顺和平安顺遂。\nCorrect! The boat is set adrift or burned, symbolizing misfortune returning to the sea, leaving behind favorable weather and lasting peace."
    },
    {
        text: "🚢 “送王船”仪式于哪一年被列入联合国教科文组织非物质文化遗产名录？\nIn which year was 'Sending Off the Royal Boat' inscribed on UNESCO's Intangible Cultural Heritage list?",
        hint: "💡 提示：视频中提到，这不只是对仪式的认可，更是对闽南精神的致敬。\nNot just a ritual recognition, but a tribute to the Hokkien spirit.",
        options: ["2015", "2016", "2017", "2018"],
        correct: 1,
        explanation: "✅ 2016年，送王船被列入联合国教科文组织人类非物质文化遗产名录，这是对闽南人'敬天爱人、悲喜共担'精神的致敬。\nCorrect! In 2016, this ritual was recognized as a UNESCO Intangible Cultural Heritage — a tribute to the Hokkien spirit of 'revering heaven and loving humanity, sharing sorrow and joy together.'"
    }
];

// ==================== 游戏状态 ====================
let currentIndex = 0;
let score = 0;
let answered = false;
let totalQuestions = questions.length;

// ==================== DOM 元素 ====================
const questionText = document.getElementById('questionText');
const questionHint = document.getElementById('questionHint');
const optionsBtns = document.querySelectorAll('.option-btn');
const feedbackText = document.getElementById('feedbackText');
const nextBtn = document.getElementById('nextBtn');
const scoreSpan = document.getElementById('score');
const currentQSpan = document.getElementById('currentQ');
const totalQSpan = document.getElementById('totalQ');

// ==================== 重新开始按钮（动态创建） ====================
let restartBtn = null;

function createRestartButton() {
    if (restartBtn) return;
    restartBtn = document.createElement('button');
    restartBtn.textContent = '🔄 再玩一次 / Play Again';
    restartBtn.className = 'restart-btn';
    restartBtn.style.cssText = `
        background: #f4a261;
        color: white;
        border: none;
        padding: 14px 24px;
        border-radius: 60px;
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
        margin: 8px 0 16px;
        transition: background 0.2s;
        width: 100%;
    `;
    restartBtn.addEventListener('click', restartGame);
    nextBtn.parentNode.insertBefore(restartBtn, nextBtn.nextSibling);
}

function removeRestartButton() {
    if (restartBtn) {
        restartBtn.remove();
        restartBtn = null;
    }
}

// ==================== 重新开始游戏 ====================
function restartGame() {
    currentIndex = 0;
    score = 0;
    answered = false;
    scoreSpan.textContent = score;
    removeRestartButton();
    loadQuestion();
}

// ==================== 加载题目 ====================
function loadQuestion() {
    answered = false;
    optionsBtns.forEach(btn => {
        btn.disabled = false;
        btn.classList.remove('correct-highlight', 'wrong-highlight', 'disabled-btn');
        btn.style.display = 'block';
    });
    nextBtn.style.display = 'none';
    feedbackText.innerHTML = '🤔 选择一个选项，测试你的闽南语知识！\nChoose an option to test your Hokkien knowledge!';
    feedbackText.style.color = '#2d6a4f';

    const q = questions[currentIndex];
    questionText.innerHTML = q.text.replace(/\n/g, '<br>');
    questionHint.innerHTML = q.hint.replace(/\n/g, '<br>');

    for (let i = 0; i < optionsBtns.length; i++) {
        if (i < q.options.length) {
            optionsBtns[i].textContent = q.options[i];
            optionsBtns[i].style.display = 'block';
        } else {
            optionsBtns[i].style.display = 'none';
        }
    }
    currentQSpan.textContent = currentIndex + 1;
    totalQSpan.textContent = totalQuestions;
}

// ==================== 检查答案 ====================
function checkAnswer(selectedIndex) {
    if (answered) return;
    const q = questions[currentIndex];
    const isCorrect = (selectedIndex === q.correct);

    if (isCorrect) {
        score++;
        scoreSpan.textContent = score;
        feedbackText.innerHTML = `🎉 正确！ ${q.explanation.replace(/\n/g, '<br>')}`;
        feedbackText.style.color = '#2d6a4f';
        optionsBtns[selectedIndex].classList.add('correct-highlight');
    } else {
        feedbackText.innerHTML = `❌ 再想想！正确答案是：${q.options[q.correct]}。<br><br>${q.explanation.replace(/\n/g, '<br>')}`;
        feedbackText.style.color = '#e76f51';
        optionsBtns[selectedIndex].classList.add('wrong-highlight');
        optionsBtns[q.correct].classList.add('correct-highlight');
    }

    optionsBtns.forEach(btn => {
        btn.disabled = true;
        btn.classList.add('disabled-btn');
    });
    answered = true;
    nextBtn.style.display = 'block';
}

// ==================== 下一题 ====================
function nextQuestion() {
    if (!answered) return;
    currentIndex++;
    if (currentIndex < totalQuestions) {
        loadQuestion();
    } else {
        gameOver();
    }
}

// ==================== 游戏结束 ====================
function gameOver() {
    const percentage = Math.round((score / totalQuestions) * 100);
    let message = '';
    if (percentage === 100) message = '🎉 博霸！你已经是闽南文化大使了！ / Hokkien Master! You\'re now an ambassador of Hokkien culture!';
    else if (percentage >= 60) message = '👍 袂䆀 (bē-bái)！很不错，继续了解会更厉害！ / Good job! Keep learning and you\'ll know even more!';
    else message = '🌱 阁再试--看 (koh-tsài-tshì--khòo)！再玩一次，让闽南文化留在心里~ / Try again! Let Hokkien culture stay in your heart~';
    
    feedbackText.innerHTML = `📣 闯关完成！ 得分：${score}/${totalQuestions} (${percentage}分)<br><br>${message}`;
    feedbackText.style.color = '#f4a261';
    nextBtn.style.display = 'none';
    createRestartButton();
}

// ==================== 绑定事件与启动 ====================
optionsBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => checkAnswer(idx));
});
nextBtn.addEventListener('click', nextQuestion);
loadQuestion();