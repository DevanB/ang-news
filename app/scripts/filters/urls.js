'use strict';

app.filter('hostnameFromUrl', function hostnameFromUrl(){
   return function(str) {
       var url = document.createElement('a');

       url.href = str;

       return url.hostname;
   }
});