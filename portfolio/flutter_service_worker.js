'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "/index.html": "3b188cfe18658a2b79174bb1515ccf7b",
"/main.dart.js": "649f912567d5475ab1adf1bd5ab36ea2",
"/assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"/assets/FontManifest.json": "592290621294619b16740a9d89232ba6",
"/assets/AssetManifest.json": "44c4b1ef70f0fd3d784f0e6c233f2212",
"/assets/assets/instagram.png": "26631a4043b14dff84180bdf51c3cacb",
"/assets/assets/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"/assets/assets/linkedin.png": "926e2dcf5ab4220a359867614556df68",
"/assets/assets/FontManifest.json": "59c37979205b4b43589051e92e27cbcd",
"/assets/assets/medium.png": "fb86f4060325caef8ea1f0fad0d25f40",
"/assets/assets/medium_light.png": "bd516690c99267a778885736015befe8",
"/assets/assets/saa.jpg": "f64bb3d730a8a3da5eee04fd3ac6afc2",
"/assets/assets/facebook.png": "021ada146ffb7c1753557ff29618d04c",
"/assets/assets/moon.png": "a270b8a10d1a9a52441bf5a322dd1b86",
"/assets/assets/works/wheelie_repairs.png": "cd0c2be230c6e7b9cb6224da0726d7ca",
"/assets/assets/works/messio.png": "827f062f04c16a164d9d7e9d13f24916",
"/assets/assets/works/facelyt.png": "9c21f203fc4d3a9ca53455c525b63f94",
"/assets/assets/works/rajasthan_tourism.png": "d7e838f9f73511fc7038a05b60859356",
"/assets/assets/works/trivz.png": "4fc7b4922689e1508fdbd35a9b1785ee",
"/assets/assets/works/savaari_partner.png": "05e90af963f924eeac54490a5a2dcd38",
"/assets/assets/works/cocoapay.png": "1a116679a577ef4af05f6e3c7f6f23be",
"/assets/assets/works/mynewcar.png": "a856c91717e8817762660e95e591a10f",
"/assets/assets/works/vdrone.png": "f9817772bfa75c8d65c62810d83be284",
"/assets/assets/works/kharedi_now.png": "d0c478d3e7e33419a8f48b34bf1207e3",
"/assets/assets/works/truelancer.png": "1126f584894fa84c5c052ec625ebf54e",
"/assets/assets/works/railenq.png": "7982d54f1972d96a8f10a389ad354db2",
"/assets/assets/works/savaari_consumer.png": "480950a09ee167d32cdabea4b45b676f",
"/assets/assets/works/stattion.png": "3e39fc6c1f96b3201cb661452edc6d7f",
"/assets/assets/works/mydealer.png": "14f62eb3413897290d2b2a248dcd8931",
"/assets/assets/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"/assets/assets/about.html": "cca535e84bb3f1ad20cd1423638d0253",
"/assets/assets/github.png": "d22ee3727a7216019c3848df6eafa024",
"/assets/assets/avatar.jpg": "23d71cdcbfdc4a8dd73315e30cf29d76",
"/assets/LICENSE": "ead2a0d0eddd3ca2637fffa470344acd"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
