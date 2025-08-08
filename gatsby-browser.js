import wrapRootElement from "./src/AllContextsWrapper";

export function onServiceWorkerUpdateReady() {
  console.log("[SW] Update ready, reloading page...");
  window.location.reload(true);
}

function handleChunkError() {
  console.warn("ChunkLoadError detected — forcing full reload...");
  if (navigator.serviceWorker?.controller) {
    navigator.serviceWorker.controller.postMessage("RELOAD_ALL_CLIENTS");
  } else {
    window.location.reload(true);
  }
}

if (typeof window !== "undefined") {
  window.addEventListener("error", (e) => {
    if (
      e?.message?.includes("Loading chunk") ||
      e?.message?.includes("ChunkLoadError")
    ) {
      handleChunkError();
    }
  });

  window.addEventListener("unhandledrejection", (e) => {
    if (
      e?.reason?.message?.includes("Loading chunk") ||
      e?.reason?.message?.includes("ChunkLoadError")
    ) {
      handleChunkError();
    }
  });
}

export { wrapRootElement };
