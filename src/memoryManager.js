export const MemoryManager = {
  // حفظ الرسائل في ذاكرة الجهاز المحلية
  saveMessage: (sender, text) => {
    const history = JSON.parse(localStorage.getItem('aikeya_chat_history') || '[]');
    history.push({ sender, text, timestamp: new Date().toISOString() });
    localStorage.setItem('aikeya_chat_history', JSON.stringify(history));
  },
  
  // استرجاع سجل المحادثة بالكامل
  getHistory: () => {
    return JSON.parse(localStorage.getItem('aikeya_chat_history') || '[]');
  },

  // حفظ معلومات المستخدم الخاصة لتتذكرها الشخصية دائماً
  saveUserProfile: (profileData) => {
    const current = JSON.parse(localStorage.getItem('aikeya_user_profile') || '{}');
    const updated = { ...current, ...profileData };
    localStorage.setItem('aikeya_user_profile', JSON.stringify(updated));
  },

  getUserProfile: () => {
    return JSON.parse(localStorage.getItem('aikeya_user_profile') || '{}');
  }
};
