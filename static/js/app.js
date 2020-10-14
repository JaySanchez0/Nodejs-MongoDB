var app = (function(){
    var showData = (err,data)=>{
        if(err!=null){
            alert("Error");
            return;
        }
        $("#data").html("");
        var table = $("<table><tr><td>Fecha</td><td>Valor</td><td>Factura</td></tr></table>");
        data.forEach((elm)=>{
            table.append($("<tr><td>"+elm.fecha+"</td><td>"+elm.valor+"</td><td>"+elm.factura+"</td></tr>"))
        });
        $("#data").append(table);

    }
    return {
        getPays:function(){
            client.getPays(showData);
        },addPay:function(){
            client.addPay({factura:$("#factura").val(),fecha:null,valor:$("#valor").val()},(e)=>{
                if(e!=null) return ;
                alert("Pago exitoso");
                app.getPays();
            });
        }
    }
})();