const pingBtn = document.getElementById('ping-btn');
const statusEl = document.getElementById('status');

pingBtn.addEventListener('click', async () => {
  statusEl.textContent = 'Enviando mensagem...';
  try {
    const response = await chrome.runtime.sendMessage({ type: 'PING' });
    if (response && response.ok) {
      statusEl.textContent = `Resposta recebida: o background está vivo! Horário: ${response.time}`;
    } else {
      statusEl.textContent = 'Nenhuma resposta do background.';
    }
  } catch (error) {
    statusEl.textContent = 'Erro ao se comunicar com o background.';
    console.error('Falha na comunicação:', error);
  }
});