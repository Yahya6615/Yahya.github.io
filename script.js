function simulateMotion() {
    // قراءة القيم من المدخلات
    const initialVelocity = parseFloat(document.getElementById('initialVelocity').value);
    const time = parseFloat(document.getElementById('time').value);
  
    // حساب المسافة المقطوعة باستخدام المعادلة: المسافة = السرعة * الزمن
    const distance = initialVelocity * time;
  
    // عرض النتيجة
    document.getElementById('result').innerHTML = `المسافة المقطوعة: ${distance.toFixed(2)} متر`;
  }
  