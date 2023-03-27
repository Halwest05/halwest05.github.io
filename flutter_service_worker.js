'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "f2f43598425351e9f8ad38fef569861d",
".git/config": "da0620296d59e677fa6c59083edef6e2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "f4b1d518e5ae6d70a13ddc3cc40fe440",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4b61ada98678ff162d2d406d080b2cd7",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "72f458f456936f4585d37e0f0e1d4c01",
".git/logs/refs/heads/main": "3ce32752c3846fd42c05ce29d1ef3737",
".git/logs/refs/remotes/origin/main": "922234aa387c4bfb0113e400218f78cc",
".git/objects/15/0743e7b9187d7cf1792daca955915103cf3fc9": "6aa8c35184ddc4a3ee6987cc8a6dfd25",
".git/objects/16/72569c55337b0999bdf63cdff47afb06fcdfe1": "9bc32ec31134a3d64f3f40973a0a3b77",
".git/objects/18/4d1799c0ef42512b8f34f56c26b8ac513e7c7b": "efeefb8d1e89b032c28d2ec96421a06f",
".git/objects/1d/fc4acd983917868b1c6afbf822c5139adcd9af": "8e153f85e9ea0aab4004caeb32c898d2",
".git/objects/23/7b28080b8c4906e5dcae01915e70150eb93a68": "2073fb932a7cccf745b779354aec4c10",
".git/objects/23/d44f1cbd3ccfcf4245d1dec8c582d9682ca981": "c21f7806153a68eb253b4aeaf93f061f",
".git/objects/25/efb4572f7d2fee32c0bddc0e40ed4a95c9be09": "209e4d04c4cebd2b7ff5cfa5dbc3c017",
".git/objects/32/22692e7c063e53ec67700dcfd15c6f3cf1cf57": "62cff73749f94481527edff4a9c20f6e",
".git/objects/51/6911314cfe66730486d4a4e00830dacbb44fd2": "cce3555cc0880cc8f984dcee8fb22e64",
".git/objects/52/38b08cc98954b7a137031d0dd4210e1603b3b3": "09c38260b3e7a111958ae109c4359bf1",
".git/objects/55/252f849fc23e9bed126f5be4125e8ff7bc5824": "a5938e8806d8b7f4efe56c98ddf1e25f",
".git/objects/5a/07eea508ce9c9dcf090b4824678af1e62b9f17": "5ce2c8ed070276227478ceb844186768",
".git/objects/68/502897b2ce760492f54a33e5f94b78e7a16771": "df138e5b9e2a1422f17b9cad6b59c78a",
".git/objects/6b/70f3e92d2af98774f514338889446869a76308": "0a1e0176e5248ed84a6aad537434d307",
".git/objects/6d/6f4e54d5a1a8c95e6e28e458c7c53b8a926223": "02e0c86d35074740989c35490b325df7",
".git/objects/7a/1e28420eb5010a665e203142bd0eb93d023c0e": "44b46bfd071adf32bba79064a4deda97",
".git/objects/86/8b6fbbc7d2e5a915d48aa6da9cae13c9d2217b": "d8149ff798c64ec5a65227ef5ff2bcb6",
".git/objects/99/0544e38139bcac585bfe8bdabe624cd809587d": "2b40045726dac3a48d6f57d49f8191ff",
".git/objects/9b/d7314b279f7bd3763e25a8d368bc6c7738126e": "f602224b19cbc7e9bd80c57cf96eda20",
".git/objects/aa/3805dcb248011b9826841602302c59617da95f": "f8e7cf2411a2e2373d8472448fca1884",
".git/objects/c9/2ff06ce0b7f99a09acc253334778f766aec2d2": "f925aff524b825f58da9ff3adfb628b5",
".git/objects/da/dc62cca2eeba84cfa60bba5aa7eb21b22323c9": "66d2898f0d6c18cda1f6d9149bdc8dc5",
".git/objects/e7/4241f0baa89017e8a17c05909e8effe6481a16": "a638d3f2d254196e84a1efe4a4d6c05f",
".git/objects/fe/e443f3a3e58e9b621ae02c9a119ed4ebc1fa37": "d30cf78b1ecefc7f9fdce984e94023ed",
".git/objects/pack/pack-8f6ccf708f07f255b04a3f6c9c08604964c74a20.idx": "e5bb2984ddeb0c90ebd47b0b9df9fd3b",
".git/objects/pack/pack-8f6ccf708f07f255b04a3f6c9c08604964c74a20.pack": "80355ea9ab6b46a545a68095df4ea524",
".git/ORIG_HEAD": "ee0717427663cf6885a6470c2ea4cfb5",
".git/refs/heads/main": "65e9d8e717062f2db276cb81fbc02d40",
".git/refs/remotes/origin/main": "65e9d8e717062f2db276cb81fbc02d40",
"assets/AssetManifest.json": "ebbd17611d6f715ce569212cd213a8c0",
"assets/assets/images/up.jpg": "703fa68e42f8d3019a6aff70cb629fae",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "f94164cef1d44d0696104655f4e9b7c6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "129783e0d4cdb765b21c36fded8dedba",
"/": "129783e0d4cdb765b21c36fded8dedba",
"main.dart.js": "06585fb1b27256a5d9bff36d9313141f",
"manifest.json": "fb5e88f1723105ea4a1304945bacfb8e",
"README.md": "b29b101df69ffd12ee4c1576b1d001b0",
"version.json": "e14141a996815609f154ba325a656f78"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
