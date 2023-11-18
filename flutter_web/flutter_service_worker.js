'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "2f79991100e0be9274b2395814f33160",
"assets/AssetManifest.json": "451e00c5f7f4c97692eac83c4efc9952",
"assets/assets/avatar.png": "57498f7c5bdf5a66dcafbb799df4359b",
"assets/assets/background.png": "90b8cf17312b43a0f0e7b6764acf717b",
"assets/assets/bronze.png": "b154cfc1f2e4374dcd8481b8e867f8dc",
"assets/assets/emerald.png": "d12ba9f1f3e3bbb1f2a28e4c7d59de17",
"assets/assets/footer.png": "2ce92af1ebf265e62b9472e0a81c5ef3",
"assets/assets/gold.png": "c07382c42ea063eb2878b3b3085f6a61",
"assets/assets/innohive.png": "27e7db39c686644870c03be92a569b6c",
"assets/assets/neterror.json": "de4c8893a25a2fda33cf5202a9867d67",
"assets/assets/night-mode.png": "6fb4c52d8421b22bf0898c608e96b9b2",
"assets/assets/points.png": "e0cd39718ca1253d896fb366762db690",
"assets/assets/silver.png": "65b97a3ba66b1524c429eb9943c572b0",
"assets/assets/site_under_construction.json": "f2b90a252bbbf9ca9057e714d2069770",
"assets/assets/streak.png": "be1501e7334f26ab6adcbe7e34c7c697",
"assets/assets/warning.png": "efc182efb7163e84342f50f4b395c976",
"assets/FontManifest.json": "adc35d50d341cae06da4fd545da7135f",
"assets/fonts/MaterialIcons-Regular.otf": "5b71b10e1c72641c29b9829ecbecff4f",
"assets/fonts/Quicksand/static/Quicksand-Regular.ttf": "3dfedd2b3e7b35ec3ac8a295a166a880",
"assets/NOTICES": "46ea51df7d094a43eab6f15c2c4ff1e1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/quickalert/assets/confirm.gif": "bdc3e511c73e97fbc5cfb0c2b5f78e00",
"assets/packages/quickalert/assets/error.gif": "c307db003cf53e131f1c704bb16fb9bf",
"assets/packages/quickalert/assets/info.gif": "90d7fface6e2d52554f8614a1f5deb6b",
"assets/packages/quickalert/assets/loading.gif": "ac70f280e4a1b90065fe981eafe8ae13",
"assets/packages/quickalert/assets/success.gif": "dcede9f3064fe66b69f7bbe7b6e3849f",
"assets/packages/quickalert/assets/warning.gif": "f45dfa3b5857b812e0c8227211635cc4",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.js.symbols": "34eb740000df15c03210028f34bc9cf5",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.js.symbols": "afe994e4d3d6d23db1d643573c9839ce",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.js.symbols": "36607a151127e3736083d241f6e7356b",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"flutter_web/.git/COMMIT_EDITMSG": "5c96fac8b59704b6922c4c24845a0a8c",
"flutter_web/.git/config": "2422b6ddb99c87452108d3108242031f",
"flutter_web/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"flutter_web/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"flutter_web/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"flutter_web/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"flutter_web/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"flutter_web/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"flutter_web/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"flutter_web/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"flutter_web/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"flutter_web/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"flutter_web/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"flutter_web/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"flutter_web/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"flutter_web/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"flutter_web/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"flutter_web/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"flutter_web/.git/index": "6d51e01bac26a7685ab6329680d9bec1",
"flutter_web/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"flutter_web/.git/logs/HEAD": "7732724224f1cf93b9ab99a90b580fc1",
"flutter_web/.git/logs/refs/heads/main": "e22471df09e015f83afb7f15cb22a3a8",
"flutter_web/.git/logs/refs/remotes/origin/main": "c4a235a6fcca481814405322a8384849",
"flutter_web/.git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
"flutter_web/.git/objects/06/0ee37e69f58e88bf50c920ee6b73258961af38": "685168ff92ee4389f6e12bc81d5aae94",
"flutter_web/.git/objects/14/a5098ff90cb88d452ad2716399353d7ab5e01a": "613ec5f6049086ac904c39626bcdd688",
"flutter_web/.git/objects/16/eb302eace4f88bb080b62d865d749c9548b5f9": "657bd207387b992a830f45f531363f48",
"flutter_web/.git/objects/2b/b0b4eb1673eb9103ebb0786f52b636eb012eb7": "d58460dd39b9e33ef09f483319d5d43e",
"flutter_web/.git/objects/2f/176991b1a3508cf9363cb4ff62109677830a63": "50fbbc21f1fbdea6f3c1cbf3f2e5777e",
"flutter_web/.git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
"flutter_web/.git/objects/30/f89a255fd8db0b3a1558f95d598b5a25b94f9b": "d96d8702b91e6c2dff76598bf8d595d0",
"flutter_web/.git/objects/33/bd2edde617bd43bbe04cca637f6188e90e9908": "391580d739d5225ebb845be5ea9b7aec",
"flutter_web/.git/objects/34/e62cdc8af04efd4fda8d63b3625429825dcebd": "1140df8eabc89bef740f04d81202bdac",
"flutter_web/.git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
"flutter_web/.git/objects/46/a90629b6e4d447e856f74b6447bf06bc828801": "8d8cc533006d1807e70f4d0ff2504f46",
"flutter_web/.git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
"flutter_web/.git/objects/4d/1a8fab85894081bfbb42f57f6de19f4c19dd9e": "0a6b54fb042c4d57d68565021ecc68fa",
"flutter_web/.git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
"flutter_web/.git/objects/55/3813215a5d8af1d571e4adc2fca5f4e7db2c2c": "adb6230e48cd58d8b69732dd618c324a",
"flutter_web/.git/objects/57/683563a29f971813a9d67b86376df7a3e24934": "62c9c445b79c25cf7f31baa0f5a8dfa7",
"flutter_web/.git/objects/57/d002f632f8f758bb14ab74423e3eb4fe8c5cf6": "686fcd1ade4988f8b3cbf26cd295aea1",
"flutter_web/.git/objects/5b/c7e1749445e583d8b9b09f92c0b5a59185440b": "eb53e9f7d69b611a232073d8de780734",
"flutter_web/.git/objects/63/7db4117e0d138b02e213f871231b4bd3cb82be": "015cd612b5f64adb5b611e44654d67f9",
"flutter_web/.git/objects/6a/423d8340f5015fe01fdfdfa852a16a50807dd4": "60914ce214741389e5d5fea584cab844",
"flutter_web/.git/objects/6e/11a6e335b2dbe26eac84c100b8868b279a1aff": "bbe1a81c591a372dd24e62a8890ff006",
"flutter_web/.git/objects/70/d6f620b5ed1aa008a28d95504b33617d312ac8": "7470742356f6c93c2c09658b154e0ad6",
"flutter_web/.git/objects/76/e02dd41de4897b34b327fda74a27c52240dde4": "4f62d5645758f93b7fbfb360702e7f5f",
"flutter_web/.git/objects/77/a282eba99bce25434bbcf05ebf33c43fe0c223": "fd8929c14673efa7b331f01b376fe1ea",
"flutter_web/.git/objects/7e/157aedbd600de35636a031b77656a6700ce783": "ac1ad333b885d60ff9685d375740bdef",
"flutter_web/.git/objects/80/68d95a5e39daabc170e38d2b501d3d49b2cb1f": "52195d49c89e695d08c2d6bda059eeda",
"flutter_web/.git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
"flutter_web/.git/objects/86/5eba15c08df01fce129d8206472810085a6c8e": "c122b4e82dafa353e93ea7f799856e5a",
"flutter_web/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"flutter_web/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"flutter_web/.git/objects/93/3c1a2bdfd9b0f38f5aa86123179211507f8f62": "647a485c7bdf20746eb139825bc88142",
"flutter_web/.git/objects/93/61a3bbfea53914147cfc12b6056eab221896fd": "9df7ac7f69771a9554b02694723ff4d0",
"flutter_web/.git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
"flutter_web/.git/objects/97/646ecd4e1a0a905277767cb3ca4f677790dbe7": "40e40170fa952461fe506c4dfd49a3b0",
"flutter_web/.git/objects/99/7a57227740144fff675d0f8ee04f2a15c1c4ba": "bcb09d65e8e9f2cdde11bf1134f9d010",
"flutter_web/.git/objects/9c/155223c738d623349fccaca93ad85d9e6ff487": "d307140158cc5b0e698eb791e496bc67",
"flutter_web/.git/objects/9c/982a3266b61eb1b9db4c15387d49fd3a9dfa8b": "c80dc794a485b812601bdc1779e3e71b",
"flutter_web/.git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
"flutter_web/.git/objects/a8/53bc1b574c4a68a73eaf2a801e3350d2f1e895": "918154195f4d226a7ea27a53dd7271c4",
"flutter_web/.git/objects/a9/4d7c5bd13ae3ce0a9cfdca4f213eb7c23ffb71": "95bc5d99861bf32cd2ff2f51444925e2",
"flutter_web/.git/objects/ad/83e3b93fce57e1af09274c5cf51abc142032cc": "b47923e44c049b1c85d4f6a69dc8034e",
"flutter_web/.git/objects/b6/bce9b46fc8e5835620f59d4a1df317fd4d99b4": "c9724bd95b0866a6d8e35d9a4e2563d6",
"flutter_web/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"flutter_web/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"flutter_web/.git/objects/b9/f43e9a91165aa62d1f0eb620007017800957ed": "c97dc2c5c831da230d506ab5e402ca25",
"flutter_web/.git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
"flutter_web/.git/objects/c0/42bba97b8d7cc3346c02708f347bb5d7a3dc51": "f75f38a62039e09416c7c29ccd6429ac",
"flutter_web/.git/objects/c0/84247e889adaf1c89bb6ca3110f69c0e654d0c": "99dce733cf6ca8857cfe2abb212980d6",
"flutter_web/.git/objects/c3/c6c62f00ad88355267df7fcb795f678798933d": "e5f1e73a717f9a90c70621cd79468d39",
"flutter_web/.git/objects/d1/2943977ff86d38e1b49529b542e0fa3eeae58b": "e496210279a3bb59bf7a5437bf7d9237",
"flutter_web/.git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
"flutter_web/.git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
"flutter_web/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"flutter_web/.git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
"flutter_web/.git/objects/d8/4615b0e0c30f0d38392cd229400b7bd0c8c0fa": "750cd226c97bccfc7e79d6eee817d2f8",
"flutter_web/.git/objects/da/d00bf9342cba109f70706420dfe569dfed29b4": "ee0160748a1ca9f39dfcec832242a8a1",
"flutter_web/.git/objects/e0/6c5c6d2b5b50f09397028ddc8600541872449e": "0b7f9613d6349d561ada3e53b4cdd39f",
"flutter_web/.git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
"flutter_web/.git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
"flutter_web/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"flutter_web/.git/objects/f7/6967d577a70ce46d2b6ed98aab860ead7bbd32": "e0e84cb49c48198a2358be2b8c37c42f",
"flutter_web/.git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
"flutter_web/.git/refs/heads/main": "5b00cfac3c1cae9d873969d906aba2e6",
"flutter_web/.git/refs/remotes/origin/main": "5b00cfac3c1cae9d873969d906aba2e6",
"flutter_web/assets/AssetManifest.bin": "2f79991100e0be9274b2395814f33160",
"flutter_web/assets/AssetManifest.json": "451e00c5f7f4c97692eac83c4efc9952",
"flutter_web/assets/assets/avatar.png": "57498f7c5bdf5a66dcafbb799df4359b",
"flutter_web/assets/assets/background.png": "90b8cf17312b43a0f0e7b6764acf717b",
"flutter_web/assets/assets/bronze.png": "b154cfc1f2e4374dcd8481b8e867f8dc",
"flutter_web/assets/assets/emerald.png": "d12ba9f1f3e3bbb1f2a28e4c7d59de17",
"flutter_web/assets/assets/footer.png": "2ce92af1ebf265e62b9472e0a81c5ef3",
"flutter_web/assets/assets/gold.png": "c07382c42ea063eb2878b3b3085f6a61",
"flutter_web/assets/assets/innohive.png": "27e7db39c686644870c03be92a569b6c",
"flutter_web/assets/assets/neterror.json": "de4c8893a25a2fda33cf5202a9867d67",
"flutter_web/assets/assets/night-mode.png": "6fb4c52d8421b22bf0898c608e96b9b2",
"flutter_web/assets/assets/points.png": "e0cd39718ca1253d896fb366762db690",
"flutter_web/assets/assets/silver.png": "65b97a3ba66b1524c429eb9943c572b0",
"flutter_web/assets/assets/site_under_construction.json": "f2b90a252bbbf9ca9057e714d2069770",
"flutter_web/assets/assets/streak.png": "be1501e7334f26ab6adcbe7e34c7c697",
"flutter_web/assets/assets/warning.png": "efc182efb7163e84342f50f4b395c976",
"flutter_web/assets/FontManifest.json": "adc35d50d341cae06da4fd545da7135f",
"flutter_web/assets/fonts/MaterialIcons-Regular.otf": "5b71b10e1c72641c29b9829ecbecff4f",
"flutter_web/assets/fonts/Quicksand/static/Quicksand-Regular.ttf": "3dfedd2b3e7b35ec3ac8a295a166a880",
"flutter_web/assets/NOTICES": "46ea51df7d094a43eab6f15c2c4ff1e1",
"flutter_web/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"flutter_web/assets/packages/quickalert/assets/confirm.gif": "bdc3e511c73e97fbc5cfb0c2b5f78e00",
"flutter_web/assets/packages/quickalert/assets/error.gif": "c307db003cf53e131f1c704bb16fb9bf",
"flutter_web/assets/packages/quickalert/assets/info.gif": "90d7fface6e2d52554f8614a1f5deb6b",
"flutter_web/assets/packages/quickalert/assets/loading.gif": "ac70f280e4a1b90065fe981eafe8ae13",
"flutter_web/assets/packages/quickalert/assets/success.gif": "dcede9f3064fe66b69f7bbe7b6e3849f",
"flutter_web/assets/packages/quickalert/assets/warning.gif": "f45dfa3b5857b812e0c8227211635cc4",
"flutter_web/assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"flutter_web/canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"flutter_web/canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"flutter_web/canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"flutter_web/canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"flutter_web/canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"flutter_web/canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"flutter_web/canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"flutter_web/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_web/flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"flutter_web/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"flutter_web/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"flutter_web/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"flutter_web/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"flutter_web/index.html": "9626d47e5b13b913883e76d635564e15",
"/": "b235a0cf2665c8dab25a3faa717b3eb1",
"flutter_web/main.dart.js": "4c5618ce1724e99cd08bdf9249f7615a",
"flutter_web/manifest.json": "834b410d39845fbdc5048911a8cfac40",
"flutter_web/version.json": "03a1a66860626fe4ce44b695aa870a37",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b235a0cf2665c8dab25a3faa717b3eb1",
"main.dart.js": "a4433fa3327b82e7687a96b902deec64",
"manifest.json": "834b410d39845fbdc5048911a8cfac40",
"version.json": "03a1a66860626fe4ce44b695aa870a37"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
