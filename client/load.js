document.addEventListener("DOMContentLoaded", function(){
    impress().init();

    window.addEventListener("hashchange", function(e){
        var hash = location.hash,
            obj = pages ? pages.findOne("1") : null;
        if (/.*slide\d\d?\d?$/.test(e.oldURL)){
            if (!obj || obj.text !== hash){
                pages.update("1", {$set: {text: hash}});
            }
        } else {
            var interval = setInterval(function(){
                var obj1 = pages ? pages.findOne("1") : null;
                if(!!obj1) {
                    location.hash = obj1.text;
                    clearInterval(interval);
                }
            },5);
        }
    }, false);
});