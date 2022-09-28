if (!self.define) {
    let e, s = {};
    const a = (a,c)=>(a = new URL(a + ".js",c).href,
    s[a] || new Promise((s=>{
        if ("document"in self) {
            const e = document.createElement("script");
            e.src = a,
            e.onload = s,
            document.head.appendChild(e)
        } else
            e = a,
            importScripts(a),
            s()
    }
    )).then((()=>{
        let e = s[a];
        if (!e)
            throw new Error(`Module ${a} didn’t register its module`);
        return e
    }
    )));
    self.define = (c,n)=>{
        const t = e || ("document"in self ? document.currentScript.src : "") || location.href;
        if (s[t])
            return;
        let i = {};
        const r = e=>a(e, t)
          , d = {
            module: {
                uri: t
            },
            exports: i,
            require: r
        };
        s[t] = Promise.all(c.map((e=>d[e] || r(e)))).then((e=>(n(...e),
        i)))
    }
}
define(["./workbox-6a1bf588"], (function(e) {
    "use strict";
    importScripts("fallback-w3nUQiGU3nYUfRw6R3kD7.js"),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute([{
        url: "/_next/static/chunks/02935b41-5e514baecfa9be9c.js",
        revision: "5e514baecfa9be9c"
    }, {
        url: "/_next/static/chunks/065a3ddb-4a4892d0195e3fc3.js",
        revision: "4a4892d0195e3fc3"
    }, {
        url: "/_next/static/chunks/466.222824558ee33734.js",
        revision: "222824558ee33734"
    }, {
        url: "/_next/static/chunks/467-0d17895789c062e8.js",
        revision: "0d17895789c062e8"
    }, {
        url: "/_next/static/chunks/503-6ddebdfccb3832b0.js",
        revision: "6ddebdfccb3832b0"
    }, {
        url: "/_next/static/chunks/59b4e022-6c823f5a3344185b.js",
        revision: "6c823f5a3344185b"
    }, {
        url: "/_next/static/chunks/72585f70-310b6e2faadef46a.js",
        revision: "310b6e2faadef46a"
    }, {
        url: "/_next/static/chunks/794-f6b57236829db1f9.js",
        revision: "f6b57236829db1f9"
    }, {
        url: "/_next/static/chunks/822-9fa3dcda251e8da7.js",
        revision: "9fa3dcda251e8da7"
    }, {
        url: "/_next/static/chunks/891-22a1f83c4e1d7c7a.js",
        revision: "22a1f83c4e1d7c7a"
    }, {
        url: "/_next/static/chunks/8eec4907-a5c48eac8590dcad.js",
        revision: "a5c48eac8590dcad"
    }, {
        url: "/_next/static/chunks/f36c6662-5c509d9f71ae1a55.js",
        revision: "5c509d9f71ae1a55"
    }, {
        url: "/_next/static/chunks/framework-d4c7fbe780b853ea.js",
        revision: "d4c7fbe780b853ea"
    }, {
        url: "/_next/static/chunks/main-290baa9fb8028df2.js",
        revision: "290baa9fb8028df2"
    }, {
        url: "/_next/static/chunks/pages/404-8729a2c09449657f.js",
        revision: "8729a2c09449657f"
    }, {
        url: "/_next/static/chunks/pages/500-30771f96f7aca187.js",
        revision: "30771f96f7aca187"
    }, {
        url: "/_next/static/chunks/pages/_app-0e7bcbd3c670d12d.js",
        revision: "0e7bcbd3c670d12d"
    }, {
        url: "/_next/static/chunks/pages/_error-5f79c00932c7c9f1.js",
        revision: "5f79c00932c7c9f1"
    }, {
        url: "/_next/static/chunks/pages/_offline-9aca08881cc522bc.js",
        revision: "9aca08881cc522bc"
    }, {
        url: "/_next/static/chunks/pages/account-78a06285155321fb.js",
        revision: "78a06285155321fb"
    }, {
        url: "/_next/static/chunks/pages/chat-6c5d510463da312d.js",
        revision: "6c5d510463da312d"
    }, {
        url: "/_next/static/chunks/pages/chat/builder-aa08118b7d61ce5a.js",
        revision: "aa08118b7d61ce5a"
    }, {
        url: "/_next/static/chunks/pages/chat/prepare-21db6e401cf1e483.js",
        revision: "21db6e401cf1e483"
    }, {
        url: "/_next/static/chunks/pages/chat/try-b72948aa575d7bce.js",
        revision: "b72948aa575d7bce"
    }, {
        url: "/_next/static/chunks/pages/index-4b4a505f7f7ee91f.js",
        revision: "4b4a505f7f7ee91f"
    }, {
        url: "/_next/static/chunks/pages/signup-631b883c21e2fb31.js",
        revision: "631b883c21e2fb31"
    }, {
        url: "/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",
        revision: "99442aec5788bccac9b2f0ead2afdd6b"
    }, {
        url: "/_next/static/chunks/webpack-373b4dedc5071313.js",
        revision: "373b4dedc5071313"
    }, {
        url: "/_next/static/css/148dddec84cbfefa.css",
        revision: "148dddec84cbfefa"
    }, {
        url: "/_next/static/css/5a7dd9b7e8a9c366.css",
        revision: "5a7dd9b7e8a9c366"
    }, {
        url: "/_next/static/css/72fdb8b3389cee5c.css",
        revision: "72fdb8b3389cee5c"
    }, {
        url: "/_next/static/css/913605483b61c8db.css",
        revision: "913605483b61c8db"
    }, {
        url: "/_next/static/css/aa6081ade808ae17.css",
        revision: "aa6081ade808ae17"
    }, {
        url: "/_next/static/css/caae8c8aa27cd4de.css",
        revision: "caae8c8aa27cd4de"
    }, {
        url: "/_next/static/css/ebc7643330f6d69f.css",
        revision: "ebc7643330f6d69f"
    }, {
        url: "/_next/static/w3nUQiGU3nYUfRw6R3kD7/_buildManifest.js",
        revision: "aa2289e6315c703a840fb7cd400c7254"
    }, {
        url: "/_next/static/w3nUQiGU3nYUfRw6R3kD7/_middlewareManifest.js",
        revision: "fb2823d66b3e778e04a3f681d0d2fb19"
    }, {
        url: "/_next/static/w3nUQiGU3nYUfRw6R3kD7/_ssgManifest.js",
        revision: "b6652df95db52feb4daf4eca35380933"
    }, {
        url: "/_offline",
        revision: "w3nUQiGU3nYUfRw6R3kD7"
    }], {
        ignoreURLParametersMatching: []
    }),
    e.cleanupOutdatedCaches(),
    e.registerRoute("/", new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [{
            cacheWillUpdate: async({request: e, response: s, event: a, state: c})=>s && "opaqueredirect" === s.type ? new Response(s.body,{
                status: 200,
                statusText: "OK",
                headers: s.headers
            }) : s
        }, {
            handlerDidError: async({request: e})=>self.fallback(e)
        }]
    }), "GET"),
    e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i, new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 31536e3
        }), {
            handlerDidError: async({request: e})=>self.fallback(e)
        }]
    }), "GET"),
    e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i, new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800
        }), {
            handlerDidError: async({request: e})=>self.fallback(e)
        }]
    }), "GET"),
    e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 4,
            maxAgeSeconds: 604800
        }), {
            handlerDidError: async({request: e})=>self.fallback(e)
        }]
    }), "GET"),
    e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400
        }), {
            handlerDidError: async({request: e})=>self.fallback(e)
        }]
    }), "GET"),
    e.registerRoute(/\/_next\/image\?url=.+$/i, new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 64,
            maxAgeSeconds: 86400
        }), {
            handlerDidError: async({request: e})=>self.fallback(e)
        }]
    }), "GET"),
    e.registerRoute(/\.(?:mp3|wav|ogg)$/i, new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [new e.RangeRequestsPlugin, new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        }), {
            handlerDidError: async({request: e})=>self.fallback(e)
        }]
    }), "GET"),
    e.registerRoute(/\.(?:mp4)$/i, new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [new e.RangeRequestsPlugin, new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        }), {
            handlerDidError: async({request: e})=>self.fallback(e)
        }]
    }), "GET"),
    e.registerRoute(/\.(?:js)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        }), {
            handlerDidError: async({request: e})=>self.fallback(e)
        }]
    }), "GET"),
    e.registerRoute(/\.(?:css|less)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        }), {
            handlerDidError: async({request: e})=>self.fallback(e)
        }]
    }), "GET"),
    e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i, new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        }), {
            handlerDidError: async({request: e})=>self.fallback(e)
        }]
    }), "GET"),
    e.registerRoute(/\.(?:json|xml|csv)$/i, new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        }), {
            handlerDidError: async({request: e})=>self.fallback(e)
        }]
    }), "GET"),
    e.registerRoute((({url: e})=>{
        if (!(self.origin === e.origin))
            return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/")
    }
    ), new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({
            maxEntries: 16,
            maxAgeSeconds: 86400
        }), {
            handlerDidError: async({request: e})=>self.fallback(e)
        }]
    }), "GET"),
    e.registerRoute((({url: e})=>{
        if (!(self.origin === e.origin))
            return !1;
        return !e.pathname.startsWith("/api/")
    }
    ), new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 86400
        }), {
            handlerDidError: async({request: e})=>self.fallback(e)
        }]
    }), "GET"),
    e.registerRoute((({url: e})=>!(self.origin === e.origin)), new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({
            maxEntries: 32,
            maxAgeSeconds: 3600
        }), {
            handlerDidError: async({request: e})=>self.fallback(e)
        }]
    }), "GET")
}
));
