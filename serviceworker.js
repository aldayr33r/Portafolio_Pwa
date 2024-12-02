
const CACHE_NAME = "V2_cache_Portafolio_AARR";

urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/script.js',
    '/serviceworker.js',
    '/assets/ALEXANDRO_ALDAYR_RAMOS_CV.pdf',
    '/assets/Certificado_Azle.pdf',
    '/assets/Certificado_Motoko.pdf',
    '/assets/Certificado_Negociacion.pdf',


    //icons  
    '/icon/icon_16.png',
    '/icon/icon_32.png',
    '/icon/icon_64.png',
    '/icon/icon_96.png',
    '/icon/icon_128.png',
    '/icon/icon_192.png',
    '/icon/icon_256.png',
    '/icon/icon_384.png',

    
     // Imágenes del contenido
     '/img/android.png',
     '/img/c.png',
     '/img/copiar.png',
     '/img/css.png',
     '/img/dart.png',
     '/img/dart.png',
     '/img/descargar.png',
     '/img/ejs.png',
     '/img/flutter.png',
     '/img/git.png',
     '/img/gmail.png',
     '/img/html.png',
     '/img/icp.png',
     '/img/js.png',
     '/img/linkedin.png',
     '/img/mongodb.png',
     '/img/nodejs.png',
     '/img/profile.jpg',
     '/img/python.png',
     '/img/react.png',
     '/img/santander.png',
     '/img/send.png',
     '/img/sqlite.png',

   
   //rescursos externos
    '/css/style.css',
    '/css/bootstrap.css',
    '/js/bootstrap.js',
    '/js/script_fun.js',
];

//Funcion de instalacion
//almacena el nombre y los archivos que van a ir guardados en cache

self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            return Promise.all(
                urlsToCache.map(url => {
                    return cache.add(url).catch(error => {
                        console.error('Error al cachear:', url, error);
                    });
                })
            );
        })
        .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', e =>{
    const listaBlancaCache = [CACHE_NAME];

    e.waitUntil(
        caches.keys()
        .then(nombresCache => {
            return Promise.all(
                nombresCache.map(nombresCache =>{
                    if(listaBlancaCache.indexOf(nombresCache) === -1){
                        return caches.delete(nombresCache)
                    }
                })
            )
        })
        //activamos la cache actualizada
        .then(()=> self.clients.claim())
    )

})

// consultar el servidor 
self.addEventListener('fetch', e =>{
    e.respondWith(
        caches.match(e.request)
        .then(res =>{
            if(res)
            {
                return res
            }
            return fetch(e.request)
        })
    )
})