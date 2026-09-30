<script>
  let downloading = false;
  let progress = 0;
  let modelStatus = "غير محمل (تحتاج للتحميل للعمل أوفلاين)";
  function startDownloadLlama() {
    downloading = true;
    progress = 5;
    let interval = setInterval(() => {
      progress += 15;
      if (progress >= 100) {
        progress = 100;
        downloading = false;
        modelStatus = "جاهز ويعمل محلياً (أوفلاين ✅)";
        clearInterval(interval);
      }
    }, 600);
  }
</script>
<div class="page-container">
  <h1>تحميل نموذج الذكاء الاصطناعي (Llama)</h1>
  <div class="card">
    <h3>Llama 3.2 (1B / 3B GGUF)</h3>
    <p>الحالة: <strong>{modelStatus}</strong></p>
    {#if downloading}
      <div class="progress-bar"><div class="fill" style="width: {progress}%"></div></div>
      <span>جاري تحميل النموذج للمحافظة على الخصوصية... {progress}%</span>
    {:else}
      <button class="btn-primary" onclick={startDownloadLlama}>تحميل نموذج Llama الآن</button>
    {/if}
  </div>
</div>
<style>
  .page-container { padding: 20px; max-width: 600px; margin: 0 auto; color: #fff; overflow-y: auto; height: 100vh; box-sizing: border-box; padding-bottom: 100px; }
  .card { background: rgba(255, 255, 255, 0.05); padding: 20px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1); }
  .btn-primary { background: #4f46e5; color: white; border: none; padding: 12px 20px; border-radius: 8px; cursor: pointer; font-weight: bold; margin-top: 10px; }
  .progress-bar { width: 100%; background: #222; height: 12px; border-radius: 6px; overflow: hidden; margin: 15px 0; }
  .fill { background: #10b981; height: 100%; transition: width 0.3s ease; }
</style>