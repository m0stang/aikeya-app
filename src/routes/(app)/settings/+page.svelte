<script>
  import { goto } from "$app/navigation";
</script>
<div class="settings-menu">
  <h1>إعدادات التطبيق</h1>
  <div class="menu-item" onclick={() => goto("/settings/data")}>
    <h3>📥 إدارة البيانات ونموذج الذكاء الاصطناعي (Llama)</h3>
    <p>تحميل نموذج Llama محلياً وإدارة التخزين</p>
  </div>
  <div class="menu-item" onclick={() => goto("/settings/battery")}>
    <h3>🔋 إعدادات البطارية والأداء</h3>
    <p>التحكم في استهلاك الطاقة والتشغيل بالخلفية</p>
  </div>
</div>
<style>
  .settings-menu { padding: 20px; max-width: 600px; margin: 0 auto; color: #fff; overflow-y: auto; height: 100vh; box-sizing: border-box; padding-bottom: 100px; }
  .menu-item { background: rgba(255, 255, 255, 0.08); padding: 18px; border-radius: 12px; margin-bottom: 15px; cursor: pointer; border: 1px solid rgba(255, 255, 255, 0.15); }
  h3 { margin: 0 0 5px 0; color: #818cf8; }
  p { margin: 0; color: #aaa; font-size: 0.9rem; }
</style>