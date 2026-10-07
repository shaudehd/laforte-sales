/* 라포르테공도 서비스워커 — 설치 품격(웹앱 패키지) + 업데이트 즉시 반영
   화면 열림(네비게이션)만 가로채어 캐시를 재검증(no-cache)해 최신본을 받아오고,
   그 외 요청은 가로채지 않는다 */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(clients.claim()));
self.addEventListener("fetch", e => {
  if(e.request && e.request.mode === "navigate") {
    e.respondWith(fetch(e.request, {cache: "no-cache"}).catch(() => Response.error()));
  }
});
