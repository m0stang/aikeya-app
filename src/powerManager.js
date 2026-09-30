// إدارة الطاقة ووضع Low Power Mode
export async function checkPowerStatus(renderer3D) {
  if ('getBattery' in navigator) {
    const battery = await navigator.getBattery();
    
    const applyOptimization = (isLowPower) => {
      if (isLowPower) {
        console.log("تفعيل وضع توفير الطاقة: تخفيض دقة الـ 3D والإنعكاسات");
        if (renderer3D) renderer3D.setPixelRatio(1); // تقليل دقة الرسم
      } else {
        if (renderer3D) renderer3D.setPixelRatio(window.devicePixelRatio);
      }
    };

    // الفحص عند التشغيل
    applyOptimization(battery.level <= 0.20 || battery.charging === false);

    // الاستماع لتغير حالة البطارية
    battery.addEventListener('levelchange', () => {
      applyOptimization(battery.level <= 0.20);
    });
  }
}
