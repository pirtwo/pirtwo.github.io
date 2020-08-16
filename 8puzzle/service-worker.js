self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('8-puzzle').then(function (cache) {
            return cache.addAll([
                '/8puzzle/',
                '/8puzzle/index.html',
                '/8puzzle/manifest.json',
                '/8puzzle/js/bundle.js',
                '/8puzzle/js/puzzle-worker.js',
                '/8puzzle/css/app.css',
                '/8puzzle/favicon.ico',
                '/8puzzle/icons/8puzzle-192.png',
                '/8puzzle/icons/8puzzle-512.png',
                '/8puzzle/assets/sprites/tileset.png',
                '/8puzzle/assets/sprites/tileset.json',
                '/8puzzle/assets/sounds/click.ogg',
                '/8puzzle/assets/sounds/music.mp3',
                '/8puzzle/assets/images/puzzle-01.jpg',
                '/8puzzle/assets/images/puzzle-02.jpg',
                '/8puzzle/assets/images/puzzle-03.jpg',
                '/8puzzle/assets/images/puzzle-04.jpg',
                '/8puzzle/assets/images/puzzle-05.jpg',
                '/8puzzle/assets/images/puzzle-06.jpg',
                '/8puzzle/assets/images/puzzle-07.jpg',
                '/8puzzle/assets/images/puzzle-08.jpg',
                '/8puzzle/assets/images/puzzle-09.jpg',
                '/8puzzle/assets/images/puzzle-10.jpg',
            ]);
        })
    );
});

self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});