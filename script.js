
const questions = {
    easy: [
        {
            q: "Madaniyat tushunchasi nimani anglatadi?",
            a: ["Faqat binolarni", "Jamiyat yaratgan moddiy va ma'naviy boyliklarni", "Faqat kiyimlarni", "Faqat musiqani"],
            c: 1,
            e: "Madaniyat jamiyat tomonidan yaratilgan moddiy va ma'naviy qadriyatlar, bilimlar va faoliyat usullarini qamrab oladi."
        },
        {
            q: "Muzeyning asosiy vazifasi nima?",
            a: ["Faqat savdo qilish", "Sport musobaqalarini o‘tkazish", "Madaniy va tarixiy merosni saqlash va namoyish etish", "Faqat ovqat tayyorlash"],
            c: 2,
            e: "Muzeylar tarixiy, ilmiy va badiiy ahamiyatga ega buyumlarni saqlaydi, o‘rganadi va namoyish etadi."
        },
        {
            q: "O‘zbekistonning milliy cholg‘u asboblaridan biri qaysi?",
            a: ["Dutor", "Saksofon", "Bagpipe", "Banjo"],
            c: 0,
            e: "Dutor — o‘zbek musiqa madaniyatida keng tarqalgan ikki torli cholg‘u asbobidir."
        },
        {
            q: "UNESCO tashkiloti qaysi sohalarga alohida e'tibor beradi?",
            a: ["Faqat sportga", "Ta'lim, fan va madaniyatga", "Faqat savdoga", "Faqat transportga"],
            c: 1,
            e: "UNESCO ta'lim, fan, madaniyat va axborot sohalarida xalqaro hamkorlikni rivojlantiradi."
        },
        {
            q: "Folklor nima?",
            a: ["Xalq og‘zaki ijodi", "Faqat zamonaviy texnologiya", "Rasmiy qonunlar", "Savdo turi"],
            c: 0,
            e: "Folklor xalqning og‘zaki ijodi, urf-odatlari, qo‘shiqlari, ertaklari va rivoyatlarini o‘z ichiga oladi."
        },
        {
            q: "Me'morchilik nimani o‘rganadi va yaratadi?",
            a: ["Faqat kiyimlarni", "Binolar va inshootlarni loyihalash hamda qurish san'atini", "Faqat musiqa asarlarini", "Faqat xaritalarni"],
            c: 1,
            e: "Me'morchilik binolar va inshootlarni estetik, funksional va texnik jihatdan loyihalash san'atidir."
        },
        {
            q: "Milliy bayramlar nimani aks ettiradi?",
            a: ["Faqat ob-havoni", "Xalqning urf-odatlari va qadriyatlarini", "Faqat sport natijalarini", "Faqat iqtisodiy ko‘rsatkichlarni"],
            c: 1,
            e: "Milliy bayramlar xalqning tarixi, an'analari, qadriyatlari va ijtimoiy hayotini ifodalaydi."
        },
        {
            q: "Kaligrafiya nima?",
            a: ["Chiroyli yozuv san'ati", "Raqs turi", "Haykaltaroshlik usuli", "Musiqa janri"],
            c: 0,
            e: "Kaligrafiya — harflarni estetik va mahorat bilan yozish san'atidir."
        },
        {
            q: "Teatr san'atining asosiy xususiyati nima?",
            a: ["Faqat rasm chizish", "Sahna orqali obraz va voqealarni namoyish etish", "Faqat kitob chop etish", "Faqat suratga olish"],
            c: 1,
            e: "Teatr sahna ijrosi orqali badiiy obrazlar va voqealarni tomoshabinga yetkazadi."
        },
        {
            q: "Meros tushunchasi nimani bildiradi?",
            a: ["Faqat yangi texnika", "Faqat kelajak rejalari", "Avlodlardan qolgan moddiy va ma'naviy boyliklar", "Faqat savdo mahsulotlari"],
            c: 2,
            e: "Madaniy meros avlodlardan avlodlarga o‘tadigan tarixiy, moddiy va ma'naviy qadriyatlardir."
        },
        {
            q: "Raqs san'ati qaysi vosita orqali ifodalanadi?",
            a: ["Faqat yozuv orqali", "Faqat matematik belgilar orqali", "Tana harakatlari va ritm orqali", "Faqat ranglar orqali"],
            c: 2,
            e: "Raqs harakat, ritm va ifodali tana harakatlari orqali badiiy mazmun yaratadi."
        },
        {
            q: "Navro‘z bayrami qaysi fasl bilan bog‘liq?",
            a: ["Qish", "Bahor", "Kuz", "Yoz"],
            c: 1,
            e: "Navro‘z bahorgi tengkunlik davrida nishonlanadigan qadimiy bayramdir."
        }
    ],

    medium: [
        {
            q: "Madaniyatshunoslik fanining asosiy tadqiqot obyekti nima?",
            a: ["Faqat iqtisodiy bozor", "Madaniyatning shakllanishi, rivojlanishi va namoyon bo‘lishi", "Faqat biologik jarayonlar", "Faqat geografik iqlim"],
            c: 1,
            e: "Madaniyatshunoslik madaniyatning mohiyati, tuzilishi, rivojlanishi va jamiyatdagi rolini o‘rganadi."
        },
        {
            q: "Renessans atamasi qanday ma'noni anglatadi?",
            a: ["Inqiroz", "Urush", "Uyg‘onish", "Ko‘chish"],
            c: 2,
            e: "Renessans Yevropa tarixidagi fan, san'at va adabiyotning yuksalish davrini anglatadi."
        },
        {
            q: "Moddiy madaniyatga qaysi misol kiradi?",
            a: ["Axloqiy me'yorlar", "Me'moriy obida", "Dunyoqarash", "Og‘zaki rivoyat"],
            c: 1,
            e: "Moddiy madaniyatga inson yaratgan binolar, buyumlar, asboblar va boshqa jismoniy obyektlar kiradi."
        },
        {
            q: "Nomoddiy madaniy merosga qaysi biri misol bo‘ladi?",
            a: ["Ko‘prik", "Tarixiy saroy", "An'anaviy xalq qo‘shig‘i", "Qadimiy idish"],
            c: 2,
            e: "Nomoddiy merosga og‘zaki ijod, urf-odatlar, an'anaviy san'at va bilimlar kiradi."
        },
        {
            q: "Etnotsentrizm nima?",
            a: ["O‘z madaniyatini boshqa madaniyatlarni baholash mezoni sifatida ko‘rish", "Barcha madaniyatlarni bir xil deb hisoblash", "Til o‘rganish usuli", "San'at turi"],
            c: 0,
            e: "Etnotsentrizm o‘z guruhining madaniy me'yorlarini markazga qo‘yib, boshqalarni shu mezon asosida baholashdir."
        },
        {
            q: "Madaniy diffuziya nima?",
            a: ["Madaniy aloqalarning uzilishi", "Madaniy elementlarning bir jamiyatdan boshqasiga tarqalishi", "Faqat tilning yo‘qolishi", "Faqat me'moriy buzilish"],
            c: 1,
            e: "Madaniy diffuziya g‘oya, urf-odat, texnologiya va boshqa madaniy elementlarning jamiyatlar orasida tarqalishidir."
        },
        {
            q: "Gotika me'morchiligining xarakterli belgisi qaysi?",
            a: ["Faqat gumbazsiz past binolar", "Uchli ravoqlar va baland konstruksiyalar", "Faqat yog‘och kulbalar", "Faqat dumaloq minoralar"],
            c: 1,
            e: "Gotika uslubida uchli ravoqlar, qovurg‘ali gumbazlar va baland vitrajli binolar keng qo‘llangan."
        },
        {
            q: "Antropologiya madaniyatshunoslik bilan qanday bog‘liq?",
            a: ["Inson va jamiyat madaniyatini o‘rganish orqali", "Faqat sayyoralarni o‘rganish orqali", "Faqat kimyoviy reaksiyalar orqali", "Faqat ob-havoni o‘rganish orqali"],
            c: 0,
            e: "Madaniy antropologiya inson guruhlarining turmushi, urf-odatlari va madaniy amaliyotlarini o‘rganadi."
        },
        {
            q: "Simvol nima?",
            a: ["Faqat bezak", "Muayyan ma'no yoki g‘oyani ifodalovchi belgi", "Faqat raqam", "Faqat tovush"],
            c: 1,
            e: "Simvol muayyan tushuncha, qadriyat yoki g‘oyani ifodalovchi belgi hisoblanadi."
        },
        {
            q: "Ommaviy madaniyatning muhim tarqalish vositalaridan biri qaysi?",
            a: ["Faqat qadimiy qo‘lyozmalar", "Faqat mahalliy hunarmandchilik", "Ommaviy axborot vositalari", "Faqat arxeologik qazishmalar"],
            c: 2,
            e: "Televideniye, internet, kino va boshqa ommaviy axborot vositalari ommaviy madaniyat tarqalishida muhim rol o‘ynaydi."
        },
        {
            q: "Madaniy identiklik nimani anglatadi?",
            a: ["Insonning madaniy guruh va qadriyatlarga mansublik hissini", "Faqat yashash manzilini", "Faqat kasbni", "Faqat yoshni"],
            c: 0,
            e: "Madaniy identiklik insonning muayyan madaniyat, til, tarix va qadriyatlar bilan bog‘liqligini anglatadi."
        },
        {
            q: "Ipak yo‘li tarixda qanday vazifani bajargan?",
            a: ["Faqat harbiy mashg‘ulot maydoni bo‘lgan", "Savdo va madaniy almashinuvga xizmat qilgan", "Faqat dehqonchilik hududi bo‘lgan", "Faqat dengiz yo‘li bo‘lgan"],
            c: 1,
            e: "Ipak yo‘li savdo bilan birga dinlar, ilmiy bilimlar, san'at va texnologiyalar almashinuviga ham xizmat qilgan."
        }
    ],

    hard: [
        {
            q: "Klifford Girtsning madaniyat haqidagi yondashuvi nimaga asoslangan?",
            a: ["Madaniyatni ma'nolar va ramzlar tizimi sifatida talqin qilishga", "Madaniyatni faqat iqtisodiy boylik deb hisoblashga", "Madaniyatni biologik kodga tenglashtirishga", "Faqat me'morchilikni o‘rganishga"],
            c: 0,
            e: "Girts madaniyatni insonlar o‘zlari yaratgan va talqin qiladigan ramziy ma'nolar tizimi sifatida o‘rgangan."
        },
        {
            q: "Strukturaviy antropologiya qaysi olim nomi bilan bog‘liq?",
            a: ["Maks Veber", "Klod Levi-Stross", "Emil Dyurkgeym", "Auguste Kont"],
            c: 1,
            e: "Klod Levi-Stross strukturaviy antropologiyaning eng muhim namoyandalaridan biridir."
        },
        {
            q: "Madaniy relativizm tamoyili nimani ta'kidlaydi?",
            a: ["Barcha madaniyatlarni bir xil qilishni", "Madaniyatni o‘z tarixiy va ijtimoiy kontekstida tushunishni", "Faqat bitta madaniyatni ustun qo‘yishni", "Madaniyatni faqat iqtisod bilan izohlashni"],
            c: 1,
            e: "Madaniy relativizm boshqa madaniyatlarni o‘z qadriyatlari va sharoitlari doirasida tushunishga intiladi."
        },
        {
            q: "Frankfurt maktabi tadqiqotchilari qaysi masalaga alohida e'tibor qaratgan?",
            a: ["Ommaviy madaniyat va madaniyat industriyasiga", "Faqat qadimgi geometriyaga", "Faqat biologik evolyutsiyaga", "Faqat qishloq xo‘jaligiga"],
            c: 0,
            e: "Frankfurt maktabi vakillari ommaviy madaniyat, ommaviy axborot vositalari va madaniyat industriyasini tanqidiy tahlil qilgan."
        },
        {
            q: "Benedikt Andersonning 'tasavvur qilingan hamjamiyatlar' tushunchasi nimani izohlaydi?",
            a: ["Millatlarning umumiy tasavvur va ramzlar orqali shakllanishini", "Faqat oilaviy munosabatlarni", "Faqat shahar qurilishini", "Faqat diniy marosimlarni"],
            c: 0,
            e: "Anderson millatni a'zolari bir-birini tanimasa ham, o‘zlarini umumiy hamjamiyat deb tasavvur qiladigan ijtimoiy birlik sifatida izohlaydi."
        },
        {
            q: "Pyer Burdye nazariyasidagi 'madaniy kapital' nima?",
            a: ["Faqat pul mablag‘i", "Bilim, ko‘nikma, did va madaniy resurslar", "Faqat yer maydoni", "Faqat texnik jihozlar"],
            c: 1,
            e: "Madaniy kapital bilim, ta'lim, til, did va ijtimoiy muhitda qadrlanadigan madaniy resurslarni anglatadi."
        },
        {
            q: "Madaniyatning institutsional tahlili nimani o‘rganadi?",
            a: ["Madaniyat bilan bog‘liq tashkilotlar va ijtimoiy qoidalarni", "Faqat individual hissiyotlarni", "Faqat tabiiy hodisalarni", "Faqat biologik xususiyatlarni"],
            c: 0,
            e: "Institutsional tahlil muzey, ta'lim, din, davlat va boshqa tashkilotlarning madaniy hayotdagi rolini o‘rganadi."
        },
        {
            q: "Intertekstuallik tushunchasi nimani bildiradi?",
            a: ["Matnlar va madaniy asarlar o‘rtasidagi mazmuniy aloqalarni", "Faqat matn hajmini", "Faqat yozuv tezligini", "Faqat grammatik xatolarni"],
            c: 0,
            e: "Intertekstuallik bir matn yoki asarning boshqa matn va madaniy asarlar bilan aloqadorligini ifodalaydi."
        },
        {
            q: "Postkolonial tadqiqotlar asosan nimani tahlil qiladi?",
            a: ["Faqat qadimiy me'morchilikni", "Mustamlakachilik merosi, hokimiyat va madaniy identiklikni", "Faqat iqlim o‘zgarishini", "Faqat matematik modellarni"],
            c: 1,
            e: "Postkolonial tadqiqotlar mustamlakachilikning siyosiy, ijtimoiy va madaniy oqibatlarini o‘rganadi."
        },
        {
            q: "Madaniy xotira tushunchasi nimani anglatadi?",
            a: ["Jamiyatning umumiy tarixiy tajribani ramzlar va amaliyotlar orqali saqlashini", "Faqat insonning qisqa muddatli xotirasini", "Faqat yozuv tezligini", "Faqat shaxsiy kundalikni"],
            c: 0,
            e: "Madaniy xotira jamiyatning tarixiy tajribasi, xotiralari va ramzlarini avlodlarga yetkazish jarayonidir."
        },
        {
            q: "Mifologik tafakkur qanday xususiyatga ega?",
            a: ["Faqat statistik dalillarga tayanadi", "Olamni obrazlar, timsollar va rivoyatlar orqali izohlaydi", "Faqat laboratoriya tajribasidan foydalanadi", "Faqat matematik formulalarni qo‘llaydi"],
            c: 1,
            e: "Mifologik tafakkur tabiat va jamiyat hodisalarini afsona, timsol va rivoyatlar orqali anglashga asoslanadi."
        },
        {
            q: "Madaniyatlararo kommunikatsiyada stereotip nima?",
            a: ["Guruh haqida umumlashtirilgan va soddalashtirilgan tasavvur", "Ilmiy tajriba usuli", "San'at asari", "Tilning grammatik qoidasi"],
            c: 0,
            e: "Stereotip muayyan guruh vakillari haqida shakllangan umumlashtirilgan tasavvur bo‘lib, individual farqlarni e'tibordan chetda qoldirishi mumkin."
        }
    ],

    expert: [
        {
            q: "Styuart Xollning madaniy tadqiqotlardagi 'encoding/decoding' modeli nimani tushuntiradi?",
            a: ["Media xabarlarini yaratish va auditoriya tomonidan turlicha talqin qilish jarayonini", "Faqat tarixiy sanalarni yodlashni", "Faqat binolarni loyihalashni", "Faqat iqtisodiy almashinuvni"],
            c: 0,
            e: "Xoll modelida media xabarlari muayyan ma'nolar bilan kodlanadi, auditoriya esa ularni turli pozitsiyalardan talqin qilishi mumkin."
        },
        {
            q: "Moris Xalbvaksning 'kollektiv xotira' tushunchasi nimaga urg‘u beradi?",
            a: ["Xotiraning faqat biologik jarayon ekaniga", "Xotiraning ijtimoiy guruhlar va ularning ramkalari orqali shakllanishiga", "Faqat shaxsiy kundaliklarga", "Faqat yozma hujjatlarga"],
            c: 1,
            e: "Xalbvaks xotira ijtimoiy guruhlar va umumiy eslash shakllari ta'sirida shakllanishini ta'kidlagan."
        },
        {
            q: "Mikhel Fuko nazariyasida diskurs nimani anglatadi?",
            a: ["Bilim va hokimiyat bilan bog‘liq ma'no ishlab chiqarish tizimlarini", "Faqat kundalik suhbatni", "Faqat she'riy vaznni", "Faqat iqtisodiy savdoni"],
            c: 0,
            e: "Fuko diskursni muayyan davrda nima haqida qanday gapirish va bilim hosil qilish mumkinligini shakllantiradigan qoidalar tizimi sifatida tahlil qilgan."
        },
        {
            q: "Burdye nazariyasidagi habitus tushunchasi nimani ifodalaydi?",
            a: ["Faqat tug‘ma biologik reflekslarni", "Ijtimoiy tajriba orqali shakllangan barqaror moyillik va amaliyotlarni", "Faqat rasmiy qonunlarni", "Faqat iqtisodiy daromadni"],
            c: 1,
            e: "Habitus insonning ijtimoiy tajribasi davomida shakllanadigan idrok, did va harakat moyilliklari tizimidir."
        },
        {
            q: "Arjun Appaduraining global madaniy oqimlar modeli qanday maqsadga xizmat qiladi?",
            a: ["Global madaniy oqimlarning turli yo‘nalishlarini tahlil qilishga", "Faqat mahalliy ob-havoni o‘rganishga", "Faqat til grammatikasini tekshirishga", "Faqat tarixiy xaritalarni chizishga"],
            c: 0,
            e: "Appadurai etnik, media, texnologik, moliyaviy va g‘oyaviy oqimlar orqali globallashuvni tahlil qilgan."
        },
        {
            q: "Semiotika madaniyatni qanday o‘rganadi?",
            a: ["Faqat iqtisodiy ko‘rsatkichlar orqali", "Belgilar, ramzlar va ma'nolar tizimi sifatida", "Faqat iqlim sharoiti orqali", "Faqat biologik jarayonlar orqali"],
            c: 1,
            e: "Semiotika belgilar va ramzlarning ma'no yaratishi hamda talqin qilinishini o‘rganadi."
        },
        {
            q: "Ernest Kassirerning ramziy shakllar falsafasi nimani ta'kidlaydi?",
            a: ["Inson dunyoni til, mif, san'at va boshqa ramziy shakllar orqali anglashini", "Inson faqat sezgi bilan yashashini", "Madaniyat faqat moddiy buyumlardan iboratligini", "Tarixning ahamiyatsizligini"],
            c: 0,
            e: "Kassirer insonni ramziy mavjudot sifatida ko‘rib, til, mif, san'at va fan orqali dunyoni anglashini ta'kidlagan."
        },
        {
            q: "Glokalizatsiya tushunchasi nimani anglatadi?",
            a: ["Global jarayonlarning mahalliy sharoitlarga moslashishini", "Barcha mahalliy madaniyatlarning yo‘qolishini", "Faqat xalqaro savdoni", "Faqat qishloq xo‘jaligini"],
            c: 0,
            e: "Glokalizatsiya global g‘oya va mahsulotlarning mahalliy sharoit, ehtiyoj va qadriyatlarga moslashishidir."
        },
        {
            q: "Madaniy gegemoniya tushunchasi qaysi olim bilan bog‘liq?",
            a: ["Antonio Gramsci", "Isaak Nyuton", "Charlz Darvin", "Ivan Pavlov"],
            c: 0,
            e: "Antonio Gramsci gegemoniya tushunchasi orqali hukmron guruhlarning madaniy va mafkuraviy ta'sirini tahlil qilgan."
        },
        {
            q: "Merosni nomoddiy deb tan olishda UNESCO qaysi jihatlarga e'tibor beradi?",
            a: ["Faqat iqtisodiy qiymatiga", "Amaliyot, bilim, ko‘nikma va avlodlararo uzatishga", "Faqat binoning balandligiga", "Faqat buyumning yoshiga"],
            c: 1,
            e: "Nomoddiy madaniy merosga jamoalar tan oladigan, avloddan avlodga o‘tadigan amaliyotlar, bilimlar va ifoda shakllari kiradi."
        },
        {
            q: "Madaniy gibridlik nimani anglatadi?",
            a: ["Turli madaniy ta'sirlarning qo‘shilishi natijasida yangi shakllarning paydo bo‘lishini", "Faqat bitta an'anani saqlashni", "Madaniyatlar o‘rtasidagi aloqaning to‘xtashini", "Faqat tarixiy yodgorliklarni tiklashni"],
            c: 0,
            e: "Madaniy gibridlik turli madaniy tajriba va ta'sirlarning o‘zaro aralashuvi natijasida yangi shakllar yuzaga kelishidir."
        },
        {
            q: "Madaniy tarjima tushunchasi nimani qamrab oladi?",
            a: ["Faqat so‘zlarni bir tildan boshqasiga o‘girishni", "Madaniy ma'nolarni boshqa kontekstda tushunish va qayta talqin qilishni", "Faqat kitob chop etishni", "Faqat imlo qoidalarini"],
            c: 1,
            e: "Madaniy tarjima g‘oya, ramz va qadriyatlarning boshqa madaniy muhitda qanday tushunilishi va qayta talqin qilinishini o‘rganadi."
        }
    ]
};

// Javoblarni tasodifiy aralashtirish va to‘g‘ri indeksni yangilash
function shuffleAnswers(question) {
    const options = question.a.map((answer, index) => ({
        text: answer,
        correct: index === question.c
    }));

    const shuffled = shuffle(options);

    return {
        q: question.q,
        a: shuffled.map(item => item.text),
        c: shuffled.findIndex(item => item.correct),
        e: question.e
    };
}

const screens = document.querySelectorAll(".screen");
const homeScreen = document.getElementById("home-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let selectedLevel = "easy";
let answered = false;

const levelNames = {
    easy: "Oson daraja",
    medium: "O‘rta daraja",
    hard: "Qiyin daraja",
    expert: "Ekspert darajasi"
};

function showScreen(screen) {
    screens.forEach(item => item.classList.remove("active"));
    screen.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function shuffle(array) {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}

function updateBestScore() {
    const best = Number(localStorage.getItem("cultureBestScore")) || 0;
    document.getElementById("best-score").textContent = best;
}

document.querySelectorAll(".level").forEach(button => {
    button.addEventListener("click", () => {
        startQuiz(button.dataset.level);
    });
});

function startQuiz(level) {
    selectedLevel = level;

    currentQuestions = shuffle(questions[level])
        .slice(0, 10)
        .map(shuffleAnswers);

    currentIndex = 0;
    score = 0;

    document.getElementById("level-name").textContent = levelNames[level];
    document.getElementById("correct-count").textContent = "0";

    showScreen(quizScreen);
    showQuestion();
}

function showQuestion() {
    answered = false;

    const question = currentQuestions[currentIndex];

    document.getElementById("question-counter").textContent =
        `${currentIndex + 1} / 10`;

    document.getElementById("question-number").textContent =
        `SAVOL ${String(currentIndex + 1).padStart(2, "0")}`;

    document.getElementById("question-text").textContent = question.q;

    document.getElementById("progress-bar").style.width =
        `${(currentIndex + 1) * 10}%`;

    const explanation = document.getElementById("explanation");
    explanation.classList.remove("show");
    explanation.textContent = "";

    const answersBox = document.getElementById("answers");
    answersBox.innerHTML = "";

    question.a.forEach((answer, index) => {
        const button = document.createElement("button");
        button.className = "answer";
        button.textContent = `${String.fromCharCode(65 + index)}. ${answer}`;

        button.addEventListener("click", () => checkAnswer(index));

        answersBox.appendChild(button);
    });

    const nextButton = document.getElementById("next-btn");
    nextButton.disabled = true;
    nextButton.textContent =
        currentIndex === 9 ? "Natijani ko‘rish →" : "Keyingi savol →";
}

function checkAnswer(selected) {
    if (answered) return;

    answered = true;

    const question = currentQuestions[currentIndex];
    const buttons = document.querySelectorAll(".answer");

    buttons.forEach((button, index) => {
        button.disabled = true;

        if (index === question.c) {
            button.classList.add("correct");
        }

        if (index === selected && selected !== question.c) {
            button.classList.add("wrong");
        }
    });

    if (selected === question.c) {
        score++;
        document.getElementById("correct-count").textContent = score;
    }

    const status = selected === question.c
        ? "✓ To‘g‘ri javob!"
        : "✗ Noto‘g‘ri javob!";

    const explanation = document.getElementById("explanation");
    explanation.textContent = `${status} ${question.e}`;
    explanation.classList.add("show");

    document.getElementById("next-btn").disabled = false;
}

document.getElementById("next-btn").addEventListener("click", () => {
    if (!answered) return;

    currentIndex++;

    if (currentIndex < 10) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    showScreen(resultScreen);

    const wrong = 10 - score;
    const percent = score * 10;

    document.getElementById("final-score").textContent = score;
    document.getElementById("correct-result").textContent = score;
    document.getElementById("wrong-result").textContent = wrong;
    document.getElementById("percentage").textContent = `${percent}%`;

    let title;
    let message;

    if (score === 10) {
        title = "MUKAMMAL NATIJA!";
        message = "Siz madaniyatshunoslik bo‘yicha ajoyib bilimga egasiz!";
    } else if (score >= 8) {
        title = "AJOYIB NATIJA!";
        message = "Madaniyatlar olami haqidagi bilimlaringiz juda yaxshi!";
    } else if (score >= 6) {
        title = "YAXSHI NATIJA!";
        message = "Yana biroz mashq qilsangiz, yanada yuqori natijaga erishasiz.";
    } else if (score >= 4) {
        title = "YANA MASHQ QILING!";
        message = "Yangi ma'lumotlarni o‘rganing va qayta urinib ko‘ring.";
    } else {
        title = "BOSHLASH VAQTI!";
        message = "Har bir urinish yangi bilim sari qadamdir.";
    }

    document.getElementById("result-title").textContent = title;
    document.getElementById("result-message").textContent = message;

    const best = Number(localStorage.getItem("cultureBestScore")) || 0;

    if (score > best) {
        localStorage.setItem("cultureBestScore", score);
    }

    updateBestScore();
}

document.getElementById("retry-btn").addEventListener("click", () => {
    startQuiz(selectedLevel);
});

document.getElementById("home-btn").addEventListener("click", () => {
    updateBestScore();
    showScreen(homeScreen);
});

updateBestScore();
