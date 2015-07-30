var $arataProd = $('#toate_produsele');
var $ascundeProd = $('#produsele');

$('#homePic').click(function(event){
    event.preventDefault();
    location.reload();
});

$('#bioCat').click(function(event){
    event.preventDefault();
    $('#top').hide();
    hideAllProducts();
    showProductsContainer();
    $("#bioMem").show();
});

$('#specialCat').click(function(event){
    event.preventDefault();
    $('#top').hide();
    hideAllProducts();
    showProductsContainer();
    $("#specialitate").show();
});

$('#fictCat').click(function(event){
    event.preventDefault();
    $('#top').hide();
    hideAllProducts();
    showProductsContainer();
    $("#fictiune").show();
});

$('#kidsCat').click(function(event){
    event.preventDefault();
    $('#top').hide();
    hideAllProducts();
     showProductsContainer();
    $("#copii").show();
});

$('#dictCat').click(function(event){
    event.preventDefault();
    $('#top').hide();
    hideAllProducts();
    showProductsContainer();
    $("#dictionare").show();
});

function hideAllProducts(){
    $(".all-poroducts").hide();
}
function showProductsContainer(){
    $("#produsele").show();
}
