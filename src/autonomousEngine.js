import { sendAppNotification } from './notificationsAndVoice';

// محرك السلوك الذاتي
export function startAutonomousBehavior(llamaEngine, callbackTalk) {
  // فحص تلقائي كل 30 دقيقة
  setInterval(async () => {
    const currentHour = new Date().getHours();
    
    // مثال: السلوك الذاتي في فترات اليوم المختلفة
    if (currentHour === 9) {
      const msg = "صباح الخير! هل سنبدأ العمل على مهام اليوم؟";
      await sendAppNotification("Aikeya", msg);
      if (callbackTalk) callbackTalk(msg);
    } else if (currentHour === 22) {
      const msg = "ألا تعتقد أن الوقت تأخر؟ حان وقت الراحة.";
      await sendAppNotification("Aikeya", msg);
      if (callbackTalk) callbackTalk(msg);
    }
  }, 30 * 60 * 1000); // كل 30 دقيقة
}
