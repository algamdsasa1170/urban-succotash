function switchLanguage() {
  const lang = document.getElementById("language").value;
  document.getElementById("title").innerText =
    lang === "ar" ? "✍️ كاتب الذكاء الصناعي إبراهيم بلس" : "✍️ IbrahimPlus AI Writer";
  document.getElementById("input").placeholder =
    lang === "ar" ? "اكتب فكرة أو عنوان هنا..." : "Enter your idea or title here...";
}

function generateContent() {
  const input = document.getElementById("input").value;
  const lang = document.getElementById("language").value;
  const output = document.getElementById("output");

  if (!input.trim()) {
    output.innerText = lang === "ar" ? "الرجاء إدخال فكرة." : "Please enter an idea.";
    return;
  }

  // توليد محلي بدون API – لأغراض التجربة فقط
  const examples = {
    ar: [
      "هذا مقال ذكي تم توليده بناءً على فكرتك.",
      "تم إنشاء هذا المحتوى باستخدام الذكاء الصناعي المحلي.",
      "مقدمة جذابة لموضوعك بناءً على: " + input
    ],
    en: [
      "This is a smart article generated from your input.",
      "Content created using local AI simulation.",
      "Engaging intro based on: " + input
    ]
  };

  const result = lang === "ar"
    ? examples.ar[Math.floor(Math.random() * examples.ar.length)]
    : examples.en[Math.floor(Math.random() * examples.en.length)];

  output.innerText = result;
}

function copyOutput() {
  const text = document.getElementById("output").innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert("Copied!");
  });
}