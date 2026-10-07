/* 라포르테공도 서비스워커 — 설치 품격(웹앱 패키지)용
   캐싱하지 않는다: 요청을 가로채지 않고 항상 네트워크 최신본을 내려보냄 */
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(clients.claim()));
self.addEventListener("fetch", () => {}); /* 아무 응답도 대신하지 않음 = 항상 네트워크 */
