let clickCount = 0;

document.getElementById('show-hearts-btn').addEventListener('click', function() {
    // Show floating hearts
    for (let i = 0; i < 10; i++) {
        let heart = document.createElement('div');
        heart.classList.add('heart');

        // Randomize the position of the heart all over the screen
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = Math.random() * 100 + 'vh';

        // Randomize the animation duration for a natural effect
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';

        document.getElementById('hearts-container').appendChild(heart);

        // Remove the heart after the animation ends
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Arabic text lines to be displayed based on the click count
    const arabicTextGroups = [
        [
            "رمتني بالسهام نواهل ولم تصابني",
            "فحملتهن لاغرسن جسدي بها",
            "واصابتني بفأسٍ وبعضِ خدشاتٍ",
            "ففتحت مكان دمي فداءاً لها",
            "ففرحت بنصرها وان كان مني",
            "كأنها حربٌ, انا وهي على انا وانا",
            "فقالت أرأيت فعل الضبي بالأسد؟",
            "رددتها إن الليوثَ تُغلبُ حباً لفرائسها"
        ],
        [
            "عشقت قطرات خمرِ شفتيها",
            "كأن لا سكير غيري في زماني",
            "واشعلت بي جزئاً او بعض جزءٍ",
            "فذقت لهيب الجهيم قبل فواني",
            "فطلبت ان اعادُ لاكفر ذنبي",
            "وللآن ثالث مرة اعود وثواني",
            "هل لي من النعيم ولو بعضٌ",
            "ام اني ذقته بخدها الذي هواني"
        ],
        [
            "عشت جناتٍ وهي بين يدي",
            "واستلذت الفردوس بين السواقي",
            "يا ليت الف ذراع احتضنها",
            "والف عين واذنٍ وتبت يدا الاماني",
            "لم ارى كحور عينها يلقيني اسيراً",
            "يا ليتني سجينها بقيودها الداني",
            "سارةٌ هية وكم مم اسررتني",
            "من غيرها من الجحيم للنعيم سراني"
        ]
    ];

    const quotesContainer = document.getElementById('quotes-container');
    quotesContainer.innerHTML = ''; // Clear any existing content

    // Loop through the text groups
    const quoteBox = document.createElement('div');
    quoteBox.classList.add('quote-box');

    // Add each line in the group to the quote box
    arabicTextGroups[clickCount % arabicTextGroups.length].forEach((line) => {
        const lineElement = document.createElement('p');
        lineElement.textContent = line;
        quoteBox.appendChild(lineElement);
    });

    quotesContainer.appendChild(quoteBox);

    clickCount++;
});
