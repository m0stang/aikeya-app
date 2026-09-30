import { LocalNotifications } from '@capacitor/local-notifications';

// 1. تفعيل صلاحيات الإشعارات
export async function requestNotificationPermission() {
  const perm = await LocalNotifications.requestPermissions();
  return perm.display === 'granted';
}

// 2. إرسال إشعار بصوت الشخصية المخصص (avatar_voice.wav)
export async function sendAppNotification(title, body) {
  await LocalNotifications.schedule({
    notifications: [
      {
        title: title,
        body: body,
        id: Math.floor(Math.random() * 100000),
        sound: 'avatar_voice', // اسم ملف الصوت المنسوخ في res/raw بدون امتداد
        schedule: { at: new Date(Date.now() + 1000) },
        actionTypeId: '',
        extra: null
      }
    ]
  });
}
