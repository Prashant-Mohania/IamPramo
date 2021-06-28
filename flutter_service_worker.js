'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "5a60f0fbcf64d667276bdc163aca2710",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a8e2d471d2bd421c50af035ef27eddad",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
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
".git/index": "2a4aa8e2f567d10ab401360ef6d9c7e9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a79909371ce5b6d47fe3c73c9f30e7f9",
".git/logs/refs/heads/main": "f3a83cd7051d4fc656a10e250e15291d",
".git/logs/refs/remotes/origin/main": "f8afdb9edbfa8692ab242e8374e390bc",
".git/objects/00/872401d541499f41b800154c6bfa5c529f8e29": "16076fc3308dbaba6d9a780b8148708a",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/09/931ded291e383ee9a6cdc46687a9664aac6a35": "705cb8e93d792ebd644a7d20aa5113ea",
".git/objects/0e/d41579ccb9c34546aeb1afbea555c2e385ac6a": "53766a5c2b3681ee7653332fffcb7cf0",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/29/593ec3dc7c85b3cafb929738c5bcd4c69d032e": "35f522b11c40b44382c947efcdf6cd01",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/37/22a008c69c4e2d19c8cbcb52d6544047cbe3a8": "4b8588c8d2d9c98be671952861bfbb79",
".git/objects/38/22507cd7693ce272e531fb7f470545255e9db9": "b00430fdf5f531bb8f596b5e08843bbf",
".git/objects/3d/fcd2be51d2278967dd4953313c89ce3163f348": "32a6cf1043dd998957a110c2f0949518",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/53/9e071137dbe8a8694fafb4e8deca90e3b13bf4": "51deb40697ca8f37f2523c783ec71f4b",
".git/objects/56/587cccda5bef26677c47ee2f0de7a17061da8d": "e6c5e11262e77d02876568f953d2f7ff",
".git/objects/66/bd88c471661e2069517e9c59c4a39c53fc5042": "bc46261ddb14836cb6642ddd18c85657",
".git/objects/6c/8be119d708408629e64a71d30039fad2bde5e5": "093c0e079746dba45bf601298c7832ae",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/25bb10bc0771a417df0c9a27256ab6d06e08b4": "dd0e5d8630e84a29bd09571263abee0b",
".git/objects/7d/df973e04e4531e61d8bf560206bb204000d25e": "e90c4c1e5e984f60a57e78f360e6756e",
".git/objects/7e/2d8298605c35d94bdc74d7f03a674f4376b3e3": "14b092e0e3d9272866a3bf46cdb64ab3",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/f59a68c572993886b00ccab5ce23123ff1f406": "26596b5a1ca1ce6f870353bf8d1809f1",
".git/objects/8f/b9ebda7496cb56681520e823a22bca2b68ecea": "b3a8be522d5f08218007b30492f53b3a",
".git/objects/9a/86382af3b3479389e44b28663b36da20889527": "8c61b636284ea3261f1f7db48ab2ab24",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/b2/d57c4334498d176ecf37a875b213530f1a6c24": "3ffe472967923a6d1a63a7ae2b17b38a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/e3/8a2724694df391bd6a2e04616d4189a46497c8": "3798b391926a335cdfce9b702e392af6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f6/2c630a07f27e6575425a89a4af010abefb120a": "eb13c6e15050978dc00b7b810d5a02d5",
".git/refs/heads/main": "fcd0b61b6fcac2e5973f3c6b2c4d5cb3",
".git/refs/remotes/origin/main": "fcd0b61b6fcac2e5973f3c6b2c4d5cb3",
"assets/AssetManifest.json": "f6b2811aad67ac776f2e7e60809e95c9",
"assets/assets/certificates/1.jpg": "6b7565268f5f8b18c8dd739e9502361b",
"assets/assets/certificates/10.jpg": "1409a6202fa8dab5b6370c6c7d71c67b",
"assets/assets/certificates/11.jpg": "86f1a792be52cd1e015c3237563ed75d",
"assets/assets/certificates/12.jpg": "aadd245ed94c505685dd41d0741fafe7",
"assets/assets/certificates/13.jpg": "a48f1400f5688acbb43d1ed1d8d234de",
"assets/assets/certificates/14.jpg": "d7af057ab1439bbd98583307e5a4bb5f",
"assets/assets/certificates/15.jpg": "7f908f4b0afa61e03e0c4db0361f5dd0",
"assets/assets/certificates/16.jpg": "6f27eebd6bfb479226e4cb10749b3c53",
"assets/assets/certificates/17.jpg": "05878ba182c59194124ab2216b70ee67",
"assets/assets/certificates/18.jpg": "28dc591969f6c4c4360f1450bfc0c31f",
"assets/assets/certificates/2.jpg": "56768fa7e45133d9e561dc897ea8505b",
"assets/assets/certificates/3.jpg": "a80c085c8f293c27c16c2acf62460b2b",
"assets/assets/certificates/4.jpg": "bea808cd654a54a9092a667c6df0f887",
"assets/assets/certificates/5.jpg": "006d413a9c8dde1da954af27ad4f669d",
"assets/assets/certificates/6.jpg": "c79a2425c317fb36a69a848d5724267b",
"assets/assets/certificates/7.jpg": "1f5ff4379361a08a754d73a3b5c39c8c",
"assets/assets/certificates/8.jpg": "e5e9e772a6c4c5791e1f057e2eede704",
"assets/assets/certificates/9.jpg": "e40a149fdffc2628d56cea6522c49611",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/images/Picture1.png": "7134b82c2714dfbbcc28c509fbb80332",
"assets/assets/images/PM.jpg": "f0923c0248684773f6e065eb674ee2b3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "2fb8f3f713e1cc287246837da54ec1cf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "135fdca545e01b7c6f4bbfc75178118f",
"/": "135fdca545e01b7c6f4bbfc75178118f",
"main.dart.js": "6c86927808aa2d0b5578b6e73b96b871",
"manifest.json": "db900e5c8d84e9e95fb7dd24e10747ea",
"README.md": "4a6ba0c432a5c8c91473f81aaaed3fa4",
"version.json": "c7d0a392e2baa92571f0e444e90cbee6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
