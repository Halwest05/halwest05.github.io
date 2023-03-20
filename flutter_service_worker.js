'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "f2f43598425351e9f8ad38fef569861d",
".git/config": "da0620296d59e677fa6c59083edef6e2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "c942ee6afc50ec9cf8d145fa69630902",
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
".git/index": "947ece17a5160a5622e0d5bc23a1a958",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "15c2e405973ab66e78e0e657b7bb97d0",
".git/logs/refs/heads/main": "6b17d96a1efae8f86e688c176587a3d9",
".git/logs/refs/remotes/origin/main": "19496bf27c5835b16c7a412636c46d36",
".git/objects/07/549a7a422dc39111900ea2d3632e254680fc99": "3c2c761237fcbace53dfad674a95b16f",
".git/objects/08/9ba14433b1e51309d901b8a9bea9d7eb8f2cf2": "9b6fb1ae707b63eb101e7e51d116ecdf",
".git/objects/09/3027f5f6ddf4bb05bc4884aec4d8aea5d1ab56": "afd7b5785190076b7933a5b632074851",
".git/objects/09/638be930fc882527a63abcbdb4edb4c71566d6": "cfdffe6bf4fdd23bd58d527e02092920",
".git/objects/0d/0bff28f2d2a372ea4ca431709cac8d0006a101": "1ac59266771d53bba402b27faaf94091",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/13/c5d2dcb591c5f38f9c5f8f8c15ce5ab02285f5": "2c1f43df19c06a07686819451a4883a7",
".git/objects/1d/9aa48db2fb47ba697c7a5ece9ed4a55462082e": "d5f85345d4dd7274f7d0dea6182d1dc9",
".git/objects/2e/5f7cf94bff1da83db755e64c7f7c66bec4ebc7": "57f6ce6de4cbf8a5a6e5b72ee67be469",
".git/objects/2e/7f2adda1d250aaca3c1e437d5599a54a1860a6": "63a766b5f0958b66913027f4711e619a",
".git/objects/2e/d49c26ea165faefdba89a8ab742bf7ed90c649": "3c8c215e4095c766276069e12b31ef91",
".git/objects/2f/cd78231d3ea73d31b9cb85400a91dc9b69a675": "d98466bdd55725ccbf8eee58a62aa44c",
".git/objects/37/565d9799b99ed2617ae0a8b1716cf11cd5af72": "2b9cc2059b12a69383ee45add383129b",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/38/1e2a459205c9e346935ca66780efe369ad5bd2": "aaaf7132e8d7afcf4bcd6d5451862c23",
".git/objects/3b/f37bdcebef748842f9afd9d5ce6daf548139e8": "0e22398479564e35c4a8ba9562a6a0a8",
".git/objects/3e/d2f3e1aaa765d0539a2bfe90904a2e2fea759a": "59a90d2c831cb93d89c72a4f41b5cc87",
".git/objects/41/4d05905300e0a73a66135dec99f13391110bbc": "2a884de9ea9439259e9ae76b574ff729",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/52/52d29e2571ccf75abf12ae07296e688f9b9d30": "0f583b1dcfeafddbb655d4d833f12705",
".git/objects/53/6021642f29bed3c1587c9e77f978d71cdaa573": "88cf64faa5c34cc7b3825c337c750a15",
".git/objects/53/c5112e22579bd8bb334e7244c07a1bf17f6043": "2cd1714f332507cc738166eeabed1c78",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/58/0badf994ca63866e54912561df9a521fac4e7d": "7dc3bb672f88dca7a18234946a8b30c7",
".git/objects/58/8ee436390888950e59f98c1e188daabca7b6d2": "e214ea086c762408ab59cc780c5320b5",
".git/objects/5f/f271e84d53a9cf66852a82237f94d9250ca431": "5d054d5e6f06af4abf42a88aa2e6364d",
".git/objects/61/3df037d2708af32a62379e2acd8b3203fad830": "686fb957be18f6641374ddc06f4d0b28",
".git/objects/67/da5fe2cdcc7aaadc6f1f80f6d454ae92cd0804": "5f382a939c1c4e68c5dbbffa3c19b658",
".git/objects/67/fcd14b874b784f0a9f87241c51bcf177f3157d": "4a3ee01d5d72123929e70cf540cd4b04",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6b/e448f9de913d7c97be0ad351742433c41895f6": "dc2075b6a6bed5f76c5b15683127ee8b",
".git/objects/6c/490ab5cf8431ed09644272d9f8d80e7c65e9aa": "bed6f1c4cf4e4e8b2eb6f20666e000ab",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/d804230927f9260aa33c0a7e51bbab1797f239": "a67ab5ea90211d2deeffaa28afba81f2",
".git/objects/75/85725345c8faeb4af331914c2240a8c63edcfb": "8ac5fc3572c3430931ca6ffdac1a3eba",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/bcd8b406ab1f25fc45b0351ef0f92d59071c4c": "9acd1a08422248cc9b0e73c67188eb85",
".git/objects/7a/b22af36d5a2ece9b9a31fd1a74edd33c80b3db": "df495ca85c1719c1c0c874419f55b54a",
".git/objects/7d/2926ad2db1efd71f4bbf82bece9bb9e56825c5": "8f46baa4e0cebe454558efff21a0b1ca",
".git/objects/7d/993ff447ee540f56cbe07c0c3ff945e4f08a46": "69d85e907d29d69df0e821409d02fbfe",
".git/objects/7d/f294229d1bcc7cdada3ac451ccb4e0b6711ce9": "fcf94172edaf59f9c26b3e18c7c376e1",
".git/objects/7e/3b763a65e93eb353bc7e68a6b7afc4e80f9aa8": "cc6451bb9f51eca7ce3ce9b710870fb2",
".git/objects/81/b6bafd09c61a516e8b074b8ca2b8a777fc74b0": "b4affc42afd5efc3d497f7f572a9d133",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/cd8543e69663f999afd9a911fd7586449a0ae8": "ed1bb1e66effd07fa4e607f873b7a708",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/1e38ed36b157aff2bf5fcf16cadaaf9d08466c": "89891c385e708d5dea8a45c6d6e141f5",
".git/objects/8d/9374a1f536f04af68eb49c04cb9882384885b8": "eaf3a5649620c766a2a4019d9d3c7555",
".git/objects/90/0a6fefed9e991fbcc787295faa5ed4fcdc11ef": "799e37486ba4618468e78bab6402cd76",
".git/objects/91/86396a1f7f880bb9c7de03d781bf620f641a64": "67ac9826bc323b7d22e1825c0f4077e3",
".git/objects/95/b1837a3386e44a313b331bb82b744c5b5a13a0": "ab5d7aeb5c6e25700c3a9a2c7499c303",
".git/objects/9b/df5b63ffb0abd48b00120da36c8ed67d05b165": "e4edc33299b14af48131f45b651092f2",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/914be68652a4616cd3aca3f88ca842e6365a2c": "e5fd58f959f65ce38b2c27fc09bc2f21",
".git/objects/a5/172ae7374cd32f2270bd8f0a41c9790ed58f75": "349b64510a139861f1fd8c1fa1e429f6",
".git/objects/a7/b15330745b531c8b40a44db42501e3f232478a": "50f0732827e3c18112f781361c4313c2",
".git/objects/a7/c03be3e12754b2e603b435ae90e10216c9f853": "7ed00e694fd3e78e8a957333cf2c87bf",
".git/objects/aa/d68dcb052192efafa602d05353f88a73226ac9": "ec00ef1e565e78e0e7283efeca2dbfa1",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/cba6eb384371b43382bb9dd5821e54c4ed02c6": "3ca62a42ec26edc161dbe0f2edf968a7",
".git/objects/af/fae85493ced583171c90b86c9a86fe9b5a9d40": "cbdc5d8e25194fdb0e3b6cd92839438c",
".git/objects/b1/883ea8613880136fa0ce3d49bc4b49adb15bbd": "a1aae49fa5f2c195f21816f3110da7d7",
".git/objects/b2/2ae0c06788b9f17b7d381ef12bd3f01e05c6fd": "0a9b3fedbef591176b8403a6c6fe2e2c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/607df3781ba297a7f59ad673f9007beb70c3c2": "d3fcdce1d70a6e9573b96f897e60a78b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/dad3206cd49fd3f2996a1e37a769270184bb63": "5d9c6c8b78d34bdff709a9e347579a7f",
".git/objects/c1/2235c6966e5b8748001d08e9c0365c1e7dc016": "b77fb4daf605fd289039b65bdad38bd9",
".git/objects/c3/a1eca1c23a94fb2b48dd970014f294a2179c87": "30a21f1a7dc882058bb31cb1ba552b1a",
".git/objects/c6/0be5613ab5a4dbaab031d6f0c034633a062a02": "152bbc99024f2c9b980f4d30ea87e6d8",
".git/objects/cc/ea419f34d81597a0c636b9635410cb7d92121e": "33fb092fb05d1585b37bfa3e25b2fe08",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e1/b3c4200bb02d9a939ac31c9f8ee565eebe8460": "b1187a34250ff80bede38b1f314e6f34",
".git/objects/e2/2b2a290bd2eaf04e5622bf8aba9b2195e97cfe": "f8998a79e364c2d1e417445f0a8d3715",
".git/objects/e3/a87c282ca00d4395c21badafe563aa894682e8": "6a9046af548b9efdcf836cb644a2d8b4",
".git/objects/e4/e2e6d27f1302f619f0f7610851ae8d65216cb0": "c554a09af143541a8c05b74daee44c08",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/77e1df39220abdb70e82013af8a0045e6a8db5": "8d79a185e732b9dbfd8fe0fe024e3159",
".git/objects/e7/cbddee71749f0e74399de0cb75aa45c5524b32": "54f44a2a9de2854d2096c30b6e7d07b1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/2feed9d8e76b41ccf255de9e4e3f46e6af9606": "fbbe755d9b807aa6fcb114c05314b2ae",
".git/objects/f7/8b39e9304be7720a2cced30dd42ac294910d81": "66a125ac4a3b93e37870f38730ba0d91",
".git/objects/fe/fd438e7b8e60742bfe8bd846f6264c7b4fd251": "56d3b4d7c383bf36305d275859064eee",
".git/ORIG_HEAD": "c16c784352d3d10cc6ecefac24319891",
".git/refs/heads/main": "3b2378f4201d78b9cc7d7e9c823dec79",
".git/refs/remotes/origin/main": "3b2378f4201d78b9cc7d7e9c823dec79",
"assets/AssetManifest.json": "ebbd17611d6f715ce569212cd213a8c0",
"assets/assets/images/up.jpg": "703fa68e42f8d3019a6aff70cb629fae",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "9a4e59ba2e3ee5ac8ccc032e635fb268",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "bc4a0f2406aeadaf560b641c5617c18a",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "e275cb040a1d217b0f8f54b8fbd2ef52",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f916451a1f92b11ff8e28c4f8286d327",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4e9b095d18fd60faabbf6f0f0817a84c",
"/": "4e9b095d18fd60faabbf6f0f0817a84c",
"main.dart.js": "28f0f142c48d695309c72dbe1078a6c0",
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
