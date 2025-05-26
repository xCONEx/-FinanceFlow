self.addEventListener('install', function (event) {
  console.log('[Service Worker] Instalado');
});

self.addEventListener('fetch', function (event) {
  // Você pode adicionar cache aqui se quiser
});
