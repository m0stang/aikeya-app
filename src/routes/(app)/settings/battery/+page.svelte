<script>
  let powerMode = "balanced";
  let backgroundAI = true;
</script>
<div class="page-container">
  <h1>إعدادات البطارية والأداء</h1>
  <div class="card">
    <h3>وضع الأداء</h3>
    <label><input type="radio" bind:group={powerMode} value="saver" /> توفير الطاقة (تخفيف حمل المعالج)</label><br/><br/>
    <label><input type="radio" bind:group={powerMode} value="balanced" /> الوضع المتوازن (موصى به للأداء والشات)</label><br/><br/>
    <label><input type="radio" bind:group={powerMode} value="performance" /> الأداء العالي (أقصى سرعة لاستجابة لاما والـ 3D)</label>
  </div>
  <div class="card">
    <h3>استمرار العمل بالخلفية</h3>
    <label><input type="checkbox" bind:checked={backgroundAI} /> السماح للذكاء الاصطناعي بالعمل والتنبيه أوفلاين بالخلفية</label>
  </div>
</div>
<style>
  .page-container { padding: 20px; max-width: 600px; margin: 0 auto; color: #fff; overflow-y: auto; height: 100vh; box-sizing: border-box; padding-bottom: 100px; }
  .card { background: rgba(255, 255, 255, 0.05); padding: 20px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1); margin-bottom: 20px; }
  label { cursor: pointer; line-height: 1.8; display: block; }
</style>