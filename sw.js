importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0050c7e74f3da47c8259.js",
    "revision": "4405f7fe76acf657fc0101fa9df89b74"
  },
  {
    "url": "/_nuxt/0e66af11a4a327efaa4c.js",
    "revision": "33bf7a0f4a1a3c9a688b70d244f701d1"
  },
  {
    "url": "/_nuxt/2367ffcbd5657ec50b64.js",
    "revision": "935431fab2bda6ad78890eb0c53ac003"
  },
  {
    "url": "/_nuxt/23b9d8bc4c51e9815472.js",
    "revision": "f5ae424308c43a5e11c61d518008fa96"
  },
  {
    "url": "/_nuxt/2e5ac779edb1dbd940f5.js",
    "revision": "1e0a07162a9598987efd4711af77bd01"
  },
  {
    "url": "/_nuxt/3429789da588d0ef7a17.js",
    "revision": "9b85cc142e8d189efa7b56f87277dfca"
  },
  {
    "url": "/_nuxt/3b655b87ede99dce20c0.js",
    "revision": "ac0d7607cf1d0943e093744a2e45fca3"
  },
  {
    "url": "/_nuxt/40586e3b90c858183811.js",
    "revision": "f25f135a24b6db819c96c74af572edc4"
  },
  {
    "url": "/_nuxt/831b42183c34b6c7e0e1.js",
    "revision": "b697db7af8ccb088a755a638fe3d9073"
  },
  {
    "url": "/_nuxt/beff96e7deaee4388c6d.js",
    "revision": "d45adfb161e2cbfdf5afc078278dbe45"
  },
  {
    "url": "/_nuxt/c4e58784cf169a1d518e.js",
    "revision": "aa92a38e272db25fc744fb2c01d74e73"
  },
  {
    "url": "/_nuxt/d829f46a90016c5b1c7d.js",
    "revision": "a3238da1fea7429b750b2ad19870fe9b"
  },
  {
    "url": "/_nuxt/e8a9044922e2d4695039.js",
    "revision": "e2d1e61b9854945edc585d5cc7a4501c"
  },
  {
    "url": "/_nuxt/ea2b9f690d9bc8526c91.js",
    "revision": "8dcb6e95146d199dada71eda4bf5c0f8"
  },
  {
    "url": "/_nuxt/f5ef4c09e2bd1fe956c5.js",
    "revision": "26f7c97fa7cb564a685df7aa6ad4366e"
  }
], {
  "cacheId": "multisender.app",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')
