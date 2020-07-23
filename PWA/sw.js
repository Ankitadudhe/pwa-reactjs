self.addEventListener('install', event => {
    event.waitUntil(
        caches.open("appVersion")
        .then(cache => {
            return cache.addAll(["./", "./src/master.css", "./image/logo192.png"])
                .catch(err => {
                    console.error('Error adding files to cache', err);

                })
        })
    )

})
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request)
        })
    )
})