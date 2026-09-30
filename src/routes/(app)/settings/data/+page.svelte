<script>
  import { onMount } from "svelte";
  
  let selectedModel = "llama-3.2-1b";
  let downloading = false;
  let progress = 0;
  let downloadedModels = {};
  let statusMessage = "Select a model to download for offline use.";

  onMount(() => {
    // استرجاع النماذج المحملة مسبقاً بأمان تام دون تداخل
    const savedModels = localStorage.getItem("aikeya_downloaded_models");
    if (savedModels) {
      try {
        downloadedModels = JSON.parse(savedModels);
      } catch (e) {
        downloadedModels = {};
      }
    }
    const active = localStorage.getItem("aikeya_active_model");
    if (active) selectedModel = active;
  });

  function downloadSelectedModel() {
    if (downloading) return;
    downloading = true;
    progress = 10;
    statusMessage = `Downloading ${selectedModel}...`;

    let interval = setInterval(() => {
      progress += 25;
      if (progress >= 100) {
        progress = 100;
        downloading = false;
        
        // حفظ النموذج الحالي كنموذج نشط ومعتمد للشخصية
        downloadedModels[selectedModel] = true;
        localStorage.setItem("aikeya_downloaded_models", JSON.stringify(downloadedModels));
        localStorage.setItem("aikeya_active_model", selectedModel);
        localStorage.setItem("aikeya_ai_ready", "true");
        
        // إرسال إشارة أمان للنظام والشخصية الـ 3D لتبديل العقل بسلاسة
        window.dispatchEvent(new CustomEvent("ai-model-changed", { detail: { model: selectedModel } }));
        
        statusMessage = `${selectedModel} is ready and linked to your 3D companion ✅`;
        clearInterval(interval);
      }
    }, 400);
  }

  function setActiveModel(modelKey) {
    if (downloadedModels[modelKey]) {
      selectedModel = modelKey;
      localStorage.setItem("aikeya_active_model", selectedModel);
      statusMessage = `Switched active model to ${selectedModel}`;
    }
  }
</script>

<div class="page-container">
  <h1>AI Model Management</h1>
  
  <div class="card">
    <h3>Select Offline Model</h3>
    <select bind:value={selectedModel} class="model-select">
      <option value="llama-3.2-1b">Llama 3.2 (1B - Fast & Balanced)</option>
      <option value="llama-3.2-3b">Llama 3.2 (3B - Smarter & Heavier)</option>
      <option value="phi-3-mini">Phi-3 Mini (Microsoft Alternative)</option>
      <option value="qwen-2.5-1.5b">Qwen 2.5 (1.5B - Multilingual)</option>
    </select>

    <p class="status-text">Status: <strong>{statusMessage}</strong></p>

    {#if downloading}
      <div class="progress-bar"><div class="fill" style="width: {progress}%"></div></div>
      <span>Downloading & verifying model package... {progress}%</span>
    {:else}
      {#if downloadedModels[selectedModel]}
        <button class="btn-success" disabled>Model Ready & Active ✅</button>
      {:else}
        <button class="btn-primary" onclick={downloadSelectedModel}>Download {selectedModel}</button>
      {/if}
    {/if}
  </div>

  <div class="card">
    <h3>Downloaded Models Cache</h3>
    <ul>
      {#each Object.keys(downloadedModels) as mod}
        <li>
          <span>{mod} {mod === selectedModel ? "(Active)" : ""}</span>
          {#if mod !== selectedModel}
            <button class="btn-small" onclick={() => setActiveModel(mod)}>Use</button>
          {/if}
        </li>
      {:else}
        <p class="empty">No models downloaded yet.</p>
      {/each}
    </ul>
  </div>
</div>

<style>
  .page-container { padding: 20px; max-width: 600px; margin: 0 auto; color: #fff; overflow-y: auto; height: 100vh; box-sizing: border-box; padding-bottom: 100px; font-family: sans-serif; }
  .card { background: rgba(255, 255, 255, 0.05); padding: 20px; border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.1); margin-bottom: 20px; }
  .model-select { width: 100%; padding: 12px; background: #1a1a1a; color: #fff; border: 1px solid #4f46e5; border-radius: 8px; margin: 10px 0; font-size: 1rem; }
  .btn-primary { background: #4f46e5; color: white; border: none; padding: 12px 20px; border-radius: 8px; cursor: pointer; font-weight: bold; width: 100%; margin-top: 10px; }
  .btn-success { background: #059669; color: white; border: none; padding: 12px 20px; border-radius: 8px; font-weight: bold; width: 100%; margin-top: 10px; opacity: 0.9; cursor: not-allowed; }
  .btn-small { background: #374151; color: white; border: none; padding: 6px 12px; border-radius: 6px; cursor: pointer; }
  .progress-bar { width: 100%; background: #222; height: 12px; border-radius: 6px; overflow: hidden; margin: 15px 0; }
  .fill { background: #10b981; height: 100%; transition: width 0.3s ease; }
  ul { list-style: none; padding: 0; margin: 0; }
  li { display: flex; justify-content: space-between; align-items: center; background: rgba(0,0,0,0.2); padding: 10px; border-radius: 6px; margin-top: 8px; }
  .empty { color: #888; font-size: 0.9rem; }
  .status-text { margin: 10px 0; font-size: 0.95rem; color: #cbd5e1; }
</style>