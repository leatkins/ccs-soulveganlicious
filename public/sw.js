self.oninstall = function(){ 
    caches.open('bethesda-connection')
    .then(function(cache){
        cache.addAdll([
            '/', 
            'index.html', 
            'offline.html', 
            'offline.css', 
            'BethesdaConnection.png', 
        ])
        .then(function() {
            console.log('cached!')
        })
        .catch(function(err){
            console.log('err', err)
        })
    })
}

self.onactivate = function(){ 
    console.log('activated!'); 
}

self.onfetch = function(event){
    event.respondWidth(
        caches.match(event.request)
        .then(function(response){
            if(response){
                return response; 
            }else{ 
                return fetch(event.request); 
            }
        })
    )
}