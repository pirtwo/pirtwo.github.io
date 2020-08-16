self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('8-puzzle').then(function (cache) {
            return cache.addAll([
                '/tictactoe/',
                '/tictactoe/index.html',
                '/tictactoe/manifest.json',
                '/tictactoe/js/bundle.js',
                '/tictactoe/js/tictac-worker.js',
                '/tictactoe/css/app.css',
                '/tictactoe/favicon.ico',
                '/tictactoe/icons/icon_192.png',
                '/tictactoe/icons/icon_512.png',
                '/tictactoe/assets/sprites/atlas.png',
                '/tictactoe/assets/sprites/atlas.json',
                '/tictactoe/assets/sounds/click.ogg',
                '/tictactoe/assets/sounds/switch.ogg',
                '/tictactoe/assets/sounds/win.ogg',
                '/tictactoe/assets/sounds/lose.ogg',
                '/tictactoe/assets/sounds/music.mp3'
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