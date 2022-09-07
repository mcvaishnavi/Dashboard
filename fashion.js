
$(document).ready(function (){
    getProduct();
    
});
function saveProduct()
{
    $('#fashion').empty();
    
    var url = "http://localhost:8080/shoppingservice/webresources/fashionServiceAPI/fashionAPI";
    var objectProduct = {};
    objectProduct.id = $('#id').val();
    objectProduct.type = $('#type').val();
    objectProduct.item_name = $('#item_name').val();
    objectProduct.item_price = $('#item_price').val();
    if(objectProduct){
        $.ajax({
            url: url,
            contentType:"application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify(objectProduct),
            // headers: {
            //     "Access-Control-Allow-Origin": "*",
            //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            //   },
            type: "POST",
            success: function(result){
                //getProduct();
                
                alert("Hi mate, product has been inserted");
               
            },
            error: function(msg){
                alert(msg);
            }
        });

    }
}
function getProduct(){
    
    
    var $fashion = $('#fashion');
    var url = "http://localhost:8080/shoppingservice/webresources/fashionServiceAPI/getFashion";
    $.ajax({
        url: url,
        //contentType:"application/json; charset=utf-8",
        //dataType: "json",
        
        //type: "GET",
        success: function(fashion){

            
            console.log(fashion);
            $.each(fashion.fashion, function(i, fashion){
                $fashion.append ('<li>id: '+fashion.id+', type: ' +fashion.type +', item_name: '+ fashion.item_name + ', item_price: '+fashion.item_price+ '</li>');
            
            });
        },
    });
}
function update(){

    $('#fashion').empty();
    var url = "http://localhost:8080/shoppingservice/webresources/fashionServiceAPI/fashionAPI";
    var objectProduct = {};
    //objectProduct.id = $('#id').val();
    objectProduct.type = $('#type').val();
    objectProduct.item_name = $('#item_name').val();
    //objectProduct.item_price = $('#item_price').val();
    if(objectProduct){
        $.ajax({
            url: url,
            contentType:"application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify(objectProduct),
            // headers: {
            //     "Access-Control-Allow-Origin": "*",
            //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            //   },
            type: "PUT",
            success: function(result){
                //getProduct();
                
                alert("Hi mate, product has been updated");
            },
            error: function(msg){
                alert(msg);
            }
        });
    }

}
function del(){

    $('#fashion').empty();
    var fashname =  document.getElementById("item_name").value;
    var objectProduct = {};
    //objectProduct.id = $('#id').val();
    //objectProduct.type = $('#type').val();
    objectProduct.item_name = $('#item_name').val();
    //objectProduct.item_price = $('#item_price').val();
    if(objectProduct){
        $.ajax({
            url: 'http://localhost:8080/shoppingservice/webresources/fashionServiceAPI/fashionAPI/'+fashname,
            contentType:"application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify(objectProduct),
            // headers: {
            //     "Access-Control-Allow-Origin": "*",
            //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
            //   },
            type: "DELETE",
            success: function(result){
                //getProduct();
                
                alert("Hi mate, product has been deleted");
            },
            error: function(msg){
                alert(msg);
            }
        });
    }


}
