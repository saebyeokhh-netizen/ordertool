// 앱 설치 조건을 맞추기 위한 최소한의 서비스 워커. 화면은 항상 인터넷에서 새로 받아요(캐시 안 함).
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", (e) => e.respondWith(fetch(e.request)));
