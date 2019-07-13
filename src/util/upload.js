// Setting
imgur.setClientId('aCs53GSs4tga0ikp');
 
// Getting
imgur.getClientId();
 
// Saving to disk. Returns a promise.
// NOTE: path is optional. Defaults to ~/.imgur
imgur.saveClientId(path)
    .then(function () {
        console.log('Saved.');
    })
    .catch(function (err) {
        console.log(err.message);
    });
 
    // Loading from disk
// NOTE: path is optional. Defaults to ~/.imgur
imgur.loadClientId(path)
.then(imgur.setClientId);

