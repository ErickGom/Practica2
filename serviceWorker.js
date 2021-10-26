const Anime = "dev-TICsPWA-site-v1";
const assets = [
    "/",
    "/index.html",
    "/css/style.css",
    "/js/app.js",
    "/images/image1.1.jpg",
    "/images/image2.1.jpg",
    "/images/image3.jpg",
    "/images/image4.1.jpg",
    "/images/image5.jpg",
    "/images/image6.1.jpg",
    "/images/image7.jpg",
    "/images/image8.jpg",
    "/images/image9.jpg"
];

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(Anime).then(cache => {
            cache.addAll(assets);
        })
    );
});

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request);
        })
    );
});