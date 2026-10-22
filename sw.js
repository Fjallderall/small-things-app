/*
 * sw.js - Lets the installed app open without a connection. The page is fetched fresh when online (so updates
 * arrive by themselves) and kept; offline, the kept copy opens. Only this site's own files are kept.
 * The cache name changes with each build (share.js fills in the date), so old copies are cleared.
 */
"use strict";
const CACHE = "small-things-202610220902";
const FILES = ["./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png"];
self.addEventListener("install", e => {
    e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
    e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.startsWith("small-things-") && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
    const u = new URL(e.request.url);
    if (e.request.method !== "GET" || u.origin !== location.origin)
        return; // (the weather goes straight to the network)
    e.respondWith(fetch(e.request).then(r => {
        if (r.ok) {
            const copy = r.clone();
            caches.open(CACHE).then(c => c.put(e.request, copy));
        }
        return r;
    }).catch(() => caches.match(e.request).then(r => r || caches.match("./index.html"))));
});
