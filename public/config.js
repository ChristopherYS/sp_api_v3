// config.js
const config = {
    // Get the current hostname and protocol
    getBaseUrl: function() {
        // If we're on localhost, use localhost:3000
        if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
            return 'http://localhost:3000';
        }
        // Otherwise, use the current origin
        return window.location.origin;
    }
}; 