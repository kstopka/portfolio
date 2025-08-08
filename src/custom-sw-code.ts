self.addEventListener("message", (event: MessageEvent) => {
  if (event.data === "SKIP_WAITING") {
    (self as ServiceWorkerGlobalScope).skipWaiting();
  }
  if (event.data === "RELOAD_ALL_CLIENTS") {
    (self as ServiceWorkerGlobalScope).clients.matchAll().then((clients) => {
      clients.forEach((client) => {
        (client as WindowClient).navigate(client.url);
      });
    });
  }
});

self.addEventListener("install", (event: ExtendableEvent) => {
  event.waitUntil((self as ServiceWorkerGlobalScope).skipWaiting());
});

self.addEventListener("activate", (event: ExtendableEvent) => {
  event.waitUntil((self as ServiceWorkerGlobalScope).clients.claim());
});
