const CACHE_VERSION = 'acertivo-1.0.0';

const RESOURCES = [
    // pages
    '/',
    '/login',
    '/cadastro',
    '/listaquestoes',

    // scripts
    '/main.js',

    // images
    '/img/sprite.svg',
    '/img/logo.png',
];

self.addEventListener("install", function(event) {
    event.waitUntil(
        caches.open(CACHE_VERSION).then(function(cache) {
            cache.addAll(RESOURCES).then(self.skipWaiting);
        })
    );
});

self.addEventListener("fetch", function(event) {
    event.respondWith(caches.match(event.request).then(function(response) {
        return (response) ? response : fetch(event.request);
    }));
});
