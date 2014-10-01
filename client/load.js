document.addEventListener("DOMContentLoaded", function(){
    debugger;
    impress().init();

    window.addEventListener("hashchange", function(e){debugger;
        var hash = location.hash,
            obj = pages ? pages.findOne("1") : null;
        if (/.*slide\d$/.test(e.oldURL)){
            if (!obj || obj.text !== hash){
                pages.update("1", {$set: {text: hash}});
            }
        } else {
            if(!!obj) {
                location.hash = obj.text;
            }
        }
    }, false);
});