'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a9133fc073833a1791b6d812d34d8f3f",
".git/config": "f7a375ebb8a248e8df051d8bc08321d5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9e833952e20c44b138212653fffa6c4f",
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
".git/index": "27ddd9341e4b1efad9c13db89e838329",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3c991b4240294457c511cfad52d8b50b",
".git/logs/refs/heads/main": "ae9a10f4015117af66f261be4fd76233",
".git/logs/refs/remotes/origin/main": "7199ab811cce9dd05d5e5a291c37164a",
".git/objects/00/872401d541499f41b800154c6bfa5c529f8e29": "16076fc3308dbaba6d9a780b8148708a",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/02/e5f4c7da94fce83d2a2f24566e95a78487c40c": "60e98cbf5bc89b64aece2ca830d50d25",
".git/objects/06/b336434791cf8a3902aead5e02f4cb55e8a935": "c4cf13748f6e58d523bd419bbe170cc5",
".git/objects/09/931ded291e383ee9a6cdc46687a9664aac6a35": "705cb8e93d792ebd644a7d20aa5113ea",
".git/objects/0c/a036f27966110e8b05b5b4e0836b5f5a9bacc9": "519edcd264e674424b09994f95e78791",
".git/objects/0e/d41579ccb9c34546aeb1afbea555c2e385ac6a": "53766a5c2b3681ee7653332fffcb7cf0",
".git/objects/10/2e985cca04fb51e6cf1ba89e462b1accad3cef": "3161b962b090afce82f0f8a0ac8039dd",
".git/objects/11/5c501d2618fce702ea0b60cdd288ba85843e6e": "38bcca03af93287360bcae61b534de31",
".git/objects/12/977dae37750cef4504075ea788d5166fbb5dd5": "b7ad0613f3c0dccc35a6ec1ad5a95d39",
".git/objects/18/2766e77945b901cc791cf7aac1a520e1be390c": "616e447aac1c87b5a3c34b584d51961a",
".git/objects/18/680ebf109ee9d60e0fe79488488659b4a641b8": "650154a0d7ce8cf5836eef693d4e53ba",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/23/fa1441ceac366b0022a69caec1d15e9217107d": "dc93446af8d694627d39f8282d4aaf4e",
".git/objects/29/593ec3dc7c85b3cafb929738c5bcd4c69d032e": "35f522b11c40b44382c947efcdf6cd01",
".git/objects/2a/01e6aa9e56f9e49ef37363e1a8e28b9229461c": "0e84f608ae5b41389edeb5aaace24c9a",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/48b0f7c0ba4a4619080e23e4dba32f0287d454": "49a269f7177ad1a86d762cb2b4e4098e",
".git/objects/37/22a008c69c4e2d19c8cbcb52d6544047cbe3a8": "4b8588c8d2d9c98be671952861bfbb79",
".git/objects/38/22507cd7693ce272e531fb7f470545255e9db9": "b00430fdf5f531bb8f596b5e08843bbf",
".git/objects/3d/fcd2be51d2278967dd4953313c89ce3163f348": "32a6cf1043dd998957a110c2f0949518",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/53/9e071137dbe8a8694fafb4e8deca90e3b13bf4": "51deb40697ca8f37f2523c783ec71f4b",
".git/objects/56/587cccda5bef26677c47ee2f0de7a17061da8d": "e6c5e11262e77d02876568f953d2f7ff",
".git/objects/59/057f83efff4db5112975c74d72e40a06d01945": "d5691953ec76bad79b46bb5b8421197c",
".git/objects/60/6fdcfe7ec6f22c25858349d39e97f147e9a4fb": "7dfc6c5432d406a18c9df0c419e51978",
".git/objects/60/abbcd26e7a34006691756d9afcff3e9976333d": "9cb593cc69372fb7b51c45bed745eda1",
".git/objects/60/cc2c44de10dc5ef8b40a0db8a19ae6eb6b143b": "83283582438fef1f1ac0b68b0b44bfc4",
".git/objects/62/7e30c32f27493b6f036650852c7846632155f7": "326379ed7b90223ad1ac653931e722ee",
".git/objects/66/bd88c471661e2069517e9c59c4a39c53fc5042": "bc46261ddb14836cb6642ddd18c85657",
".git/objects/6a/d212716dff60ae426b8a6ae6bdfbdc4eca93cd": "e2fb280d3f2cb75bc3b0dd8d651cf11b",
".git/objects/6c/8be119d708408629e64a71d30039fad2bde5e5": "093c0e079746dba45bf601298c7832ae",
".git/objects/70/bc1bbfb1a4d3bf1b7534b6c80899d6ceef11af": "ef86ad196b3ef05029059421b4f39330",
".git/objects/78/c2cd06c4b43e7e48f14c306208f67453773d38": "1e3388f35563c364510136dc0f301580",
".git/objects/79/6958008dafb764fbc01d8e47e615783a081412": "063a906860a0a762bad85a48341de09a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/25bb10bc0771a417df0c9a27256ab6d06e08b4": "dd0e5d8630e84a29bd09571263abee0b",
".git/objects/7d/df973e04e4531e61d8bf560206bb204000d25e": "e90c4c1e5e984f60a57e78f360e6756e",
".git/objects/7e/2d8298605c35d94bdc74d7f03a674f4376b3e3": "14b092e0e3d9272866a3bf46cdb64ab3",
".git/objects/7f/a2931a384d0a500857eea6ccfac7678a42bbe8": "9056d4d3105ac33cfb04728127c77810",
".git/objects/7f/c7857a125f904d45a44cc47997d23cbc765c71": "ef64a54799f9cb4d3c9c9e64e96b4afa",
".git/objects/80/664b81101aeb893e5ad2cf6aad893cef3c8fbc": "a4963962f25d8a7bda0493965dec7179",
".git/objects/80/9071b635d3a13f039c9ad3a4a770512fe133b8": "d98b81bbb4ec08f8a603754e2c4c50f5",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/87/83f8689d326d07fdea2c8bff77b24a3bc27035": "be314a2335aab9930a753c0b48d597b2",
".git/objects/88/62bb18fe0c20b8dc3e80e4b576a329a61f736b": "381e34fdadba4e3c83d58991c849479b",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/f59a68c572993886b00ccab5ce23123ff1f406": "26596b5a1ca1ce6f870353bf8d1809f1",
".git/objects/8f/b9ebda7496cb56681520e823a22bca2b68ecea": "b3a8be522d5f08218007b30492f53b3a",
".git/objects/91/27dfb458b20884c898a34adb7795501816e0e6": "a899a3fcd1a8bd34e92f2cdc5af1714f",
".git/objects/93/517093cb40d5e97c91d7ec4234b774b34af8bd": "d258871729af7d8b3e29785c90c59574",
".git/objects/95/2ca04b01115cda6835c12bdae4d0443b05fe44": "8cd7f9338630eca18c824a4c41ebe897",
".git/objects/9a/86382af3b3479389e44b28663b36da20889527": "8c61b636284ea3261f1f7db48ab2ab24",
".git/objects/9a/899667976a1898bd456dd7c4c5a411faef8e58": "b5e9b70fb9309aa985aef5b7fa176af6",
".git/objects/9f/ec04040235886f1e314ab3c4d3d08646f0cfcb": "b2ba1898510f27403de8662068df7cd3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/b3a5f10a60bed1b2faae0b988dfe7b1e7299de": "8d1b34bfc8173a8bc9807ee1059ed258",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/a5/576b79ebcce09e6ddb9bb17e48226c6f68ee3f": "0ac40aa1bbd0a5021f2f68c97e5dcbb0",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/af/2c9e841c2e24671baebcdd761031a03b7bb1c3": "864661ac2a29597e4b00a94b0918319a",
".git/objects/b0/7a2137d93464fd86c4f1c544a9932eb9a37776": "fdc5f923ea5bdfbeb65f408cf0f77171",
".git/objects/b0/89d358fa84d2b6496ddcca810c0eb76c8f6771": "2ff9be0fc710ef849134e0524255b8f9",
".git/objects/b1/6929786068d2228583d67df0c385b0822682e1": "41f959b0c169056c950696fcb6fc6308",
".git/objects/b2/d57c4334498d176ecf37a875b213530f1a6c24": "3ffe472967923a6d1a63a7ae2b17b38a",
".git/objects/b3/3e3260f2193276cdc72e7115f2a10b5270a089": "ccdd4406cd77385146ef01d62255d4eb",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/be/1ad3ad0d67bcd7a8d0c3b3e91a3c28f8423815": "53c03dca661ad92b35affaa3b24f0a1a",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/c3/6c2c40932c73c4548e3c71ebfb78449b753b9b": "34a58e3bd0ceb93fc3d407bd9a0558f8",
".git/objects/c5/44b4b4c2d792b3dfa90bb5da684235eef77649": "44d36351f3773494465a1477c8668067",
".git/objects/c5/7debca1c240f0e82ec8602cf183e7618ce7716": "ab6a2bf4f3fdd18c0f91aa98ea0ede18",
".git/objects/c6/e69efc27634534edbf0a75ed3205aea1a896e4": "7b9e5b190e281cad53ec6074208fe0d8",
".git/objects/c7/0074276ad59317156bd119149e48615d6b2d9d": "1b5e09fa5538361ece41fd33528c9b6b",
".git/objects/c7/28ddfade0225b4e62411bace435991d451c7fc": "665e6ee8fa71e83305bb7e7bb2609d1b",
".git/objects/c9/8bc90f1cf17c448c505bd1c34ec130ef38c723": "ee3777926f291ebdf79256ef3a48e581",
".git/objects/cd/54a80828cd198523d649d818185c9d05164dee": "e4ab5081f29b2fee6169d6010243e7c9",
".git/objects/d4/e857623d5a2212e7e20f76d135647a5eaebc9a": "6a72b009f80f4cccdd4ff90688418865",
".git/objects/e1/fd1f21280826d84c9cfd6cb0dcd05a6ebdf3e1": "e1940300548447e308a4c93614a64498",
".git/objects/e3/8a2724694df391bd6a2e04616d4189a46497c8": "3798b391926a335cdfce9b702e392af6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/36cb4528f9ce49c1efb2b5048688612c621887": "fda79c63dde4132f2565603048916117",
".git/objects/e9/886e19ccce165c5f2344a9740f53adb40f1d6b": "4bafb16f407621f6618fbbebdc2f4cae",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f1/58339c49f252144b0e665ab8aed9b52b99dca3": "fba69544fe09d78646ccfa6606e51ef6",
".git/objects/f4/71ce431cb00e612c7f637a49ef55350b5a1dbc": "bfe9cd173092c7cce358902e7549ed66",
".git/objects/f6/2c630a07f27e6575425a89a4af010abefb120a": "eb13c6e15050978dc00b7b810d5a02d5",
".git/objects/f9/5bc88015e7d939276de79cba3eae6fc6343af0": "97ac6bf1a673823191c04ccfe06377cf",
".git/refs/heads/main": "1f387fd719ddf9a158d716404eee77aa",
".git/refs/remotes/origin/main": "1f387fd719ddf9a158d716404eee77aa",
"assets/AssetManifest.json": "d150e735b8f835078510d57f2c270a9c",
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
"assets/assets/icons/check.svg": "4220c82511cc1dfb40b8bba7d25c5f55",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/facebook.svg": "c0cd138271276bb33a87c2d174015455",
"assets/assets/icons/github.svg": "4efdc3758d63b35dabc7017493670428",
"assets/assets/icons/instagram.svg": "b3b7a0210038e9a9f2fcb54f17d0f1c1",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/twitter.svg": "6de37c77002e9013e5fb0659418ff8f4",
"assets/assets/images/IamPramo.png": "7134b82c2714dfbbcc28c509fbb80332",
"assets/assets/images/PM.jpg": "f0923c0248684773f6e065eb674ee2b3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "aa831ee401e6f0a888d9d9891c012c75",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.ico": "6cb04c031af255f5ce535cdb77f1caaf",
"icons/Icon-192.png": "9d9b5fc3390ed5d3ec367272d79662be",
"icons/Icon-512.png": "5c12be13ed11a7e619a420df7f58a611",
"index.html": "57983120d66709d1457d9aee69bdd845",
"/": "57983120d66709d1457d9aee69bdd845",
"main.dart.js": "badd82953ca37266824f2eeb729de985",
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
