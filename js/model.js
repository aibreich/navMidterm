var MODEL = (function(){
    // hidden function to change page
    var _changePage = function(page){
        // get function that grabs html document information from pages
        $.get(`pages/${page}/${page}.html`, function(data){
            console.log("Page is being loaded");
            console.log("Page loaded:"+ page)
            $("#app").html(data);
        })
    };
    return{
        changePage: _changePage,
    }
})();