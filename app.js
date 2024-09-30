const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    titles: { 
      en: "Air Force<br>NEW<br>SEASON", 
      mr: "एअर फोर्स<br>नवीन<br>मोसम", 
      ur: "ایئر فورس<br>نئی<br>موسم", 
      kn: "ಎರ್ ಫೋರ್ಸ್<br>ಹೊಸ<br>ಊರು", 
      ta: "ஏர் ஃபோர்ஸ்<br>புதிய<br>காலம்", 
      bn: "এয়ার ফোর্স<br>নতুন<br>মৌসুম" 
    },
    price: 119,
    colors: [
      { code: "black", img: "./img/air.png" },
      { code: "darkblue", img: "./img/air2.png" },
    ],
  },
  {
    id: 2,
    titles: { 
      en: "Air Jordan<br>NEW<br>SEASON", 
      mr: "एअर जॉर्डन<br>नवीन<br>मोसम", 
      ur: "ایئر جیورڈن<br>نئی<br>موسم", 
      kn: "ಎರ್ ಜೋರ್ಡನ್<br>ಹೊಸ<br>ಊರು", 
      ta: "ஏர் ஜோர்டன்<br>புதிய<br>காலம்", 
      bn: "এয়ার জর্ডান<br>নতুন<br>মৌসুম" 
    },
    price: 149,
    colors: [
      { code: "lightgray", img: "./img/jordan.png" },
      { code: "green", img: "./img/jordan2.png" },
    ],
  },
  {
    id: 3,
    titles: { 
      en: "Blazer<br>NEW<br>SEASON", 
      mr: "ब्लेझर<br>नवीन<br>मोसम", 
      ur: "بلیزر<br>نئی<br>موسم", 
      kn: "ಬ್ಲೇಜರ್<br>ಹೊಸ<br>ಊರು", 
      ta: "பிளேசர்<br>புதிய<br>காலம்", 
      bn: "ব্লেজার<br>নতুন<br>মৌসুম" 
    },
    price: 109,
    colors: [
      { code: "lightgray", img: "./img/blazer.png" },
      { code: "green", img: "./img/blazer2.png" },
    ],
  },
  {
    id: 4,
    titles: { 
      en: "Crater<br>NEW<br>SEASON", 
      mr: "क्रेटर<br>नवीन<br>मोसम", 
      ur: "کریٹر<br>نئی<br>موسم", 
      kn: "ಕ್ರೇಟರ್<br>ಹೊಸ<br>ಊರು", 
      ta: "க்ரேட்டர்<br>புதிய<br>காலம்", 
      bn: "ক্রেটার<br>নতুন<br>মৌসুম" 
    },
    price: 129,
    colors: [
      { code: "black", img: "./img/crater.png" },
      { code: "lightgray", img: "./img/crater2.png" },
    ],
  },
  {
    id: 5,
    titles: { 
      en: "Hippie<br>NEW<br>SEASON", 
      mr: "हिप्पी<br>नवीन<br>मोसम", 
      ur: "ہیپی<br>نئی<br>موسم", 
      kn: "ಹಿಪ್ಪಿ<br>ಹೊಸ<br>ಊರು", 
      ta: "ஹிப்பி<br>புதிய<br>காலம்", 
      bn: "হিপ্পি<br>নতুন<br>মৌসুম" 
    },
    price: 99,
    colors: [
      { code: "gray", img: "./img/hippie.png" },
      { code: "black", img: "./img/hippie2.png" },
    ],
  },
];

let choosenProduct = products[0];
let currentLang = 'en'; // Default language

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

// Define translations
const translations = {
  en: {
    title: "Nike Store",
    limitedOffer: "Limited Offer!",
    menuItems: ["AIR FORCE", "JORDAN", "BLAZER", "CRATER", "HIPPIE"],
    productTitle: "Product Title",
    productPrice: "Product Price",
    productDesc: "A classic style for every occasion.",
    buyNow: "BUY NOW!",
    checkout: "Checkout!",
    close: "X",
    freeShipping: "FREE SHIPPING",
    freeShippingDesc: "Free worldwide shipping on all orders.",
    daysReturn: "30 DAYS RETURN",
    daysReturnDesc: "No question return and easy refund in 14 days.",
    giftCards: "GIFT CARDS",
    giftCardsDesc: "Buy gift cards and use coupon codes easily.",
    contactUs: "CONTACT US!",
    contactUsDesc: "Keep in touch via email and support system.",
    galleryTitles: ["Be Yourself!", "This is the First Day of Your New Life", "Just Do it!"],
    footer: {
      aboutUs: "About Us",
      usefulLinks: "Useful Links",
      products: "Products",
      company: "Company",
      contact: "Contact",
      careers: "Careers",
      Affiliates: "Affiliates",
      stores: "Stores",
      support: "Support",
      refund: "Refund",
      faq: "FAQ",
      feedback: "Feedback",
      stories: "Stories",
      AirForce: "AIR FORCE",
      AirJordan: "AIR JORDAN",
      Blazer: "BLAZER",
      Crater: "CRATER",
      Hippie: "HIPPIE",
      subscribe: "Subscribe to our newsletter",
      followUs: "Follow Us",
      join: "Join!",
      allRightsReserved: "©Lama Dev. All rights reserved. 2022."
    }
  },
  mr: {
    title: "नाइक स्टोअर",
    limitedOffer: "मर्यादित ऑफर!",
    menuItems: ["एअर फोर्स", "एअर जॉर्डन", "ब्लेझर", "क्रेटर", "हिप्पी"],
    productTitle: "उत्पादन शीर्षक",
    productPrice: "उत्पादन किंमत",
    productDesc: "प्रत्येक प्रसंगासाठी एक क्लासिक शैली.",
    buyNow: "खरेदी करा!",
    checkout: "चेकआउट!",
    close: "X",
    freeShipping: "फ्री शिपिंग",
    freeShippingDesc: "सर्व ऑर्डर्ससाठी फ्री जागतिक शिपिंग.",
    daysReturn: "30 दिवसांची परतफेड",
    daysReturnDesc: "कुठल्याही प्रश्नाशिवाय परतफेड आणि 14 दिवसांत सोपे रिफंड.",
    giftCards: "गिफ्ट कार्ड",
    giftCardsDesc: "गिफ्ट कार्ड खरेदी करा आणि कूपन कोड सहज वापरा.",
    contactUs: "आमच्याशी संपर्क साधा!",
    contactUsDesc: "ईमेलद्वारे आणि सपोर्ट सिस्टमद्वारे संपर्क साधा.",
    galleryTitles: ["तुम्ही स्वतः व्हा!", "तुमच्या नव्या जीवनाचा हा पहिला दिवस आहे", "फक्त करा!"],
    footer: {
      aboutUs: "आमच्याबद्दल",
      usefulLinks: "उपयुक्त दुवे",
      products: "उत्पादन",
      company: "कंपनी",
      contact: "संपर्क",
      careers: "करिअर्स",
      Affiliates: "संबंधित",
      stores: "दुकाने",
      support: "समर्थन",
      refund: "परतफेड",
      faq: "सामान्य प्रश्न",
      feedback: "प्रतिसाद",
      stories: "कथा",
      AirForce: "एअर फोर्स",
      AirJordan: "एअर जॉर्डन",
      Blazer: "ब्लेझर",
      Crater: "क्रेटर",
      Hippie: "हिप्पी",
      subscribe: "आमच्या बातम्या सब्सक्राइब करा",
      followUs: "आमचाला अनुसरण करा",
      join: "सामील व्हा!",
      allRightsReserved: "सर्व हक्क राखीव."
    }
  },
  ur: {
    title: "نائکی اسٹور",
    limitedOffer: "محدود پیشکش!",
    menuItems: ["ایئر فورس", "جیورڈن", "بلیزر", "کریٹر", "ہیپی"],
    productTitle: "پروڈکٹ کا عنوان",
    productPrice: "پروڈکٹ کی قیمت",
    productDesc: "ہر موقع کے لیے ایک کلاسک انداز۔",
    buyNow: "ابھی خریدیں!",
    checkout: "چیک آؤٹ!",
    close: "X",
    freeShipping: "مفت شپنگ",
    freeShippingDesc: "تمام آرڈرز پر مفت عالمی شپنگ۔",
    daysReturn: "30 دن کی واپسی",
    daysReturnDesc: "14 دن میں آسان واپسی اور ریفنڈ۔",
    giftCards: "گفٹ کارڈ",
    giftCardsDesc: "گفٹ کارڈ خریدیں اور آسانی سے کوپن کوڈ استعمال کریں۔",
    contactUs: "ہم سے رابطہ کریں!",
    contactUsDesc: "ای میل اور سپورٹ سسٹم کے ذریعے رابطہ میں رہیں۔",
    galleryTitles: ["خود بنو!", "یہ آپ کی نئی زندگی کا پہلا دن ہے", "بس کرو!"],
    footer: {
      aboutUs: "ہمارے بارے میں",
      usefulLinks: "مفید لنکس",
      products: "مصنوعات",
      company: "کمپنی",
      contact: "رابطہ کریں",
      careers: "کیریئر",
      Affiliates: "الحاق",
      stores: "اسٹورز",
      support: "سپورٹ",
      refund: "ریفنڈ",
      faq: "سوالات",
      feedback: "فیڈبیک",
      stories: "کہانیاں",
      AirForce: "ایئر فورس",
      AirJordan: "ایئر جیورڈن",
      Blazer: "بلیزر",
      Crater: "کریٹر",
      Hippie: "ہیپی",
      subscribe: "ہمارے نیوز لیٹر کو سبسکرائب کریں",
      followUs: "ہمیں فالو کریں",
      join: "شامل ہوں!",
      allRightsReserved: "©Lama Dev. جملہ حقوق محفوظ ہیں۔ 2022۔"
    }
  },
  kn: {
    title: "ನೈಕಿ ಸ್ಟೋರ್",
    limitedOffer: "ಮಿತವಾದ ಆಫರ್!",
    menuItems: ["ಎರ್ ಫೋರ್ಸ್", "ಜೋರ್ಡನ್", "ಬ್ಲೇಜರ್", "ಕ್ರೇಟರ್", "ಹಿಪ್ಪಿ"],
    productTitle: "ಉತ್ಪನ್ನ ಶೀರ್ಷಿಕೆ",
    productPrice: "ಉತ್ಪನ್ನ ಬೆಲೆ",
    productDesc: "ಪ್ರತಿ ಸಂದರ್ಭಕ್ಕೂ ಶ್ರೇಷ್ಠ ಶೈಲಿ.",
    buyNow: "ಈಗ ಖರೀದಿಸಿ!",
    checkout: "ಚೆಕ್‌ಔಟ್!",
    close: "X",
    freeShipping: "ಉಚಿತ ಶಿಪ್ಪಿಂಗ್",
    freeShippingDesc: "ಎಲ್ಲಾ ಆರ್ಡರ್‌ಗಳಿಗೆ ಉಚಿತ ವಿಶ್ವವ್ಯಾಪಿ ಶಿಪ್ಪಿಂಗ್.",
    daysReturn: "30 ದಿನಗಳ ಮರಳಿಸುವಿಕೆ",
    daysReturnDesc: "ಯಾವುದೇ ಪ್ರಶ್ನೆಗಳಿಲ್ಲದೆ 14 ದಿನಗಳಲ್ಲಿ ಸುಲಭ ವಾಪಾಸು.",
    giftCards: "ಉಡುಗೆ ಕಾರ್ಯಾಗಾರಗಳು",
    giftCardsDesc: "ಉಡುಗೆ ಕಾರ್ಯಾಗಾರಗಳನ್ನು ಖರೀದಿಸಿ ಮತ್ತು ಕ್ಯೂಪನ್ ಕೋಡ್‌ಗಳನ್ನು ಸುಲಭವಾಗಿ ಬಳಸಿರಿ.",
    contactUs: "ನಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಿ!",
    contactUsDesc: "ಇಮೇಲ್ ಮತ್ತು ಬೆಂಬಲ ವ್ಯವಸ್ಥೆಯ ಮೂಲಕ ಸಂಪರ್ಕದಲ್ಲಿರಿ.",
    galleryTitles: ["ನೀನು ನಿನ್ನ ಹಾಗೆ ಇರು!", "ಇದು ನಿನ್ನ ಹೊಸ ಜೀವನದ ಮೊದಲ ದಿನ", "ಮಾಡಿ ತೋರಿ!"],
    footer: {
      aboutUs: "ನಮ್ಮ ಬಗ್ಗೆ",
      usefulLinks: "ಉಪಯುಕ್ತ ಕೊಂಡಿಗಳು",
      products: "ಉತ್ಪನ್ನಗಳು",
      company: "ಕಂಪನಿ",
      contact: "ಸಂಪರ್ಕ",
      careers: "ಉದ್ಯೋಗ",
      Affiliates: "ಸಂಬಂಧಿತ",
      stores: "ಅಂಗಡಿಗಳು",
      support: "ಬೆಂಬಲ",
      refund: "ಮರುಪಾವತಿ",
      faq: "ಪ್ರಶ್ನೋತ್ತರ",
      feedback: "ಪ್ರತಿಕ್ರಿಯೆ",
      stories: "ಕಥೆಗಳು",
      AirForce: "ಎರ್ ಫೋರ್ಸ್",
      AirJordan: "ಎರ್ ಜೋರ್ಡನ್",
      Blazer: "ಬ್ಲೇಜರ್",
      Crater: "ಕ್ರೇಟರ್",
      Hippie: "ಹಿಪ್ಪಿ",
      subscribe: "ನಮ್ಮ ಸುದ್ದಿಪತ್ರವನ್ನು ಚಂದಾದಾರರಾಗಿ",
      followUs: "ನಮ್ಮನ್ನು ಅನುಸರಿಸಿ",
      join: "ಸೇರಿಸು!",
      allRightsReserved: "©Lama Dev. ಎಲ್ಲಾ ಹಕ್ಕುಗಳು ರಕ್ಷಿಸಲಾಗಿದೆ. 2022."
    }
  },
  ta: {
    title: "நைக்கி கடை",
    limitedOffer: "வரையறுக்கப்பட்ட சலுகை!",
    menuItems: ["ஏர் ஃபோர்ஸ்", "ஜோர்டன்", "பிளேசர்", "க்ரேட்டர்", "ஹிப்பி"],
    productTitle: "தயாரிப்பு தலைப்பு",
    productPrice: "தயாரிப்பு விலை",
    productDesc: "ஒவ்வொரு நிகழ்விற்கும் ஒரு கிளாசிக் பாணி.",
    buyNow: "இப்போது வாங்குங்கள்!",
    checkout: "சரிபார்த்தல்!",
    close: "X",
    freeShipping: "இலவச கப்பல் போக்குவரத்து",
    freeShippingDesc: "அனைத்து ஆர்டர்களுக்கும் உலகளாவிய இலவச கப்பல் போக்குவரத்து.",
    daysReturn: "30 நாட்கள் திரும்பவும்",
    daysReturnDesc: "14 நாட்களுக்குள் எளிதான திரும்புதல் மற்றும் பணத்தைத் திரும்பப் பெறுதல்.",
    giftCards: "விளையாட்டு அட்டைகள்",
    giftCardsDesc: "விளையாட்டு அட்டைகளை வாங்கவும் மற்றும் கூப்பன் குறியீடுகளை எளிதாக பயன்படுத்தவும்.",
    contactUs: "எங்களை தொடர்பு கொள்ளுங்கள்!",
    contactUsDesc: "மின்னஞ்சல் மற்றும் ஆதரவு அமைப்பு மூலம் தொடர்பில் இருங்கள்.",
    galleryTitles: ["நீங்கள் நீங்களே இருங்கள்!", "இது உங்கள் புதிய வாழ்க்கையின் முதல் நாள்", "செய்து முடி!"],
    footer: {
      aboutUs: "எங்களை பற்றி",
      usefulLinks: "பயனுள்ள இணைப்புகள்",
      products: "தயாரிப்புகள்",
      company: "நிறுவனம்",
      contact: "தொடர்பு",
      careers: "வேலைவாய்ப்புகள்",
      Affiliates: "இணைப்புகள்",
      stores: "அங்காடிகள்",
      support: "ஆதரவு",
      refund: "திரும்புதல்",
      faq: "வினாவு",
      feedback: "பின்னூட்டம்",
      stories: "கதைகள்",
      AirForce: "ஏர் ஃபோர்ஸ்",
      AirJordan: "ஏர் ஜோர்டன்",
      Blazer: "பிளேசர்",
      Crater: "க்ரேட்டர்",
      Hippie: "ஹிப்பி",
      subscribe: "எங்களின் செய்திமடலுக்கு பதிவு செய்யுங்கள்",
      followUs: "எங்களை பின்தொடருங்கள்",
      join: "சேருங்கள்!",
      allRightsReserved: "©Lama Dev. அனைத்து உரிமைகள் பாதுகாக்கப்பட்டவை. 2022."
    }
  },
  bn: {
    title: "নাইক স্টোর",
    limitedOffer: "সীমিত অফার!",
    menuItems: ["এয়ার ফোর্স", "জর্ডান", "ব্লেজার", "ক্রেটার", "হিপ্পি"],
    productTitle: "পণ্য শিরোনাম",
    productPrice: "পণ্যের দাম",
    productDesc: "প্রত্যেক উপলক্ষ্যে একটি ক্লাসিক স্টাইল।",
    buyNow: "এখনই কিনুন!",
    checkout: "চেকআউট!",
    close: "X",
    freeShipping: "ফ্রি শিপিং",
    freeShippingDesc: "সব অর্ডারে বিশ্বব্যাপী ফ্রি শিপিং।",
    daysReturn: "30 দিনের রিটার্ন",
    daysReturnDesc: "14 দিনের মধ্যে সহজ রিটার্ন এবং রিফান্ড।",
    giftCards: "উপহার কার্ড",
    giftCardsDesc: "উপহার কার্ড কিনুন এবং কুপন কোড সহজে ব্যবহার করুন।",
    contactUs: "আমাদের সাথে যোগাযোগ করুন!",
    contactUsDesc: "ইমেইল এবং সাপোর্ট সিস্টেমের মাধ্যমে সংযোগে থাকুন।",
    galleryTitles: ["নিজেকে হন!", "এটি আপনার নতুন জীবনের প্রথম দিন", "শুধু করুন!"],
    footer: {
      aboutUs: "আমাদের সম্পর্কে",
      usefulLinks: "দরকারী লিঙ্ক",
      products: "পণ্য",
      company: "প্রতিষ্ঠান",
      contact: "যোগাযোগ",
      careers: "ক্যারিয়ার",
      Affiliates: "অ্যাফিলিয়েটস",
      stores: "স্টোর",
      support: "সমর্থন",
      refund: "রিফান্ড",
      faq: "প্রশ্নাবলী",
      feedback: "প্রতিক্রিয়া",
      stories: "গল্প",
      AirForce: "এয়ার ফোর্স",
      AirJordan: "এয়ার জর্ডান",
      Blazer: "ব্লেজার",
      Crater: "ক্রেটার",
      Hippie: "হিপ্পি",
      subscribe: "আমাদের নিউজলেটারে সাবস্ক্রাইব করুন",
      followUs: "আমাদের অনুসরণ করুন",
      join: "যোগদান করুন!",
      allRightsReserved: "©Lama Dev. সর্বস্বত্ব সংরক্ষিত. 2022."
    }
  }
};

const updateLanguage = () => {
  document.title = translations[currentLang].title;
  document.querySelector('.limitedOffer').textContent = translations[currentLang].limitedOffer;

  // Update menu items
  menuItems.forEach((item, index) => {
    item.textContent = translations[currentLang].menuItems[index];
  });

  // Update product details with the current language
  updateProductDetails();

  // Update button texts
  document.querySelector('.productButton').textContent = translations[currentLang].buyNow; // Ensure this is correct
  document.querySelector('.payButton').textContent = translations[currentLang].checkout; // Ensure this is correct
  document.querySelector('.close').textContent = translations[currentLang].close;

  // Update gallery titles
  const galleryTitles = document.querySelectorAll('.galleryTitle');
  galleryTitles.forEach((title, index) => {
    title.innerHTML = translations[currentLang].galleryTitles[index];
  });

  // Update features text and descriptions
  updateFeatures();

  // Update footer text
  updateFooter();
};

const updateFooter = () => {
  // Update footer menu titles
  const footerMenus = document.querySelectorAll('.footerMenu');
  footerMenus[0].querySelector('.fMenuTitle').textContent = translations[currentLang].footer.aboutUs;
  footerMenus[1].querySelector('.fMenuTitle').textContent = translations[currentLang].footer.usefulLinks;
  footerMenus[2].querySelector('.fMenuTitle').textContent = translations[currentLang].footer.products;

  // Update footer items
  const footerItems = [
    'company', 'contact', 'careers', 'affiliates', 'stores',
    'support', 'refund', 'faq', 'feedback', 'stories'
  ];
  
  footerItems.forEach((item, index) => {
    const listItem = footerMenus[index < 3 ? 0 : 1].querySelectorAll('.fListItem')[index % 5];
    if (listItem) {
      listItem.textContent = translations[currentLang].footer[item];
    }
  });

  // Update subscribe and follow sections
  document.querySelector('.footerRightMenu:nth-child(1) .fMenuTitle').textContent = translations[currentLang].footer.subscribe;
  document.querySelector('.footerRightMenu:nth-child(2) .fMenuTitle').textContent = translations[currentLang].footer.followUs;

  // Update copyright
  document.querySelector('.copyright').textContent = translations[currentLang].footer.allRightsReserved;
};

const updateFeatures = () => {
  const features = document.querySelectorAll('.feature');
  
  features[0].querySelector('.featureTitle').textContent = translations[currentLang].freeShipping;
  features[0].querySelector('.featureDesc').textContent = translations[currentLang].freeShippingDesc;

  features[1].querySelector('.featureTitle').textContent = translations[currentLang].daysReturn;
  features[1].querySelector('.featureDesc').textContent = translations[currentLang].daysReturnDesc;

  features[2].querySelector('.featureTitle').textContent = translations[currentLang].giftCards;
  features[2].querySelector('.featureDesc').textContent = translations[currentLang].giftCardsDesc;

  features[3].querySelector('.featureTitle').textContent = translations[currentLang].contactUs;
  features[3].querySelector('.featureDesc').textContent = translations[currentLang].contactUsDesc;
};

const updateProductDetails = () => {
  currentProductTitle.innerHTML = choosenProduct.titles[currentLang];
  currentProductPrice.textContent = "₹" + choosenProduct.price; // Changed to INR for Marathi context
  currentProductImg.src = choosenProduct.colors[0].img;
  
  // Assign new colors
  currentProductColors.forEach((color, index) => {
    color.style.backgroundColor = choosenProduct.colors[index].code;
  });
};

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    // Change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    // Change the chosen product
    choosenProduct = products[index];

    // Update product details
    updateProductDetails();
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

// Change language based on dropdown selection
const changeLanguage = () => {
  const languageSelector = document.getElementById("languageSelector");
  currentLang = languageSelector.value;
  updateLanguage(); // Update all text when language changes
};

// Initial call to set the default language
updateLanguage();
