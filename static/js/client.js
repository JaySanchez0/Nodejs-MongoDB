var client = (function(){
    return {
        getPays:function(callback){
            $.get("/pay").then((data)=>callback(null,data),(e)=>callback(e,null));
        },addPay:function(pay,callback){
            $.post({
                url:"/pay",
                data:JSON.stringify(pay),
                contentType:"application/json"
            }).then(()=>callback(null),(e)=>callback(e));
        }
    }
})();