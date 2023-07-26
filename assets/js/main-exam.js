// "Categories" accordion dropdown logic
let categories = $(".templatemo-accordion > li > ul").hide();

$(".templatemo-accordion > li > a").click(function() {
    let options = $(this).next();
    if(options.hasClass("active") == false){
        categories.removeClass("active").slideUp();
        options.addClass("active").slideDown();
    }
})


// product quantity selection logic
$('#btn-minus').click(function(){
    var val = $("#var-value").html();
    val = (val=='1')?val:val-1;
    $("#var-value").html(val);
    return false;
});
$('#btn-plus').click(function(){
    var val = $("#var-value").html();
    val++;
    $("#var-value").html(val);
    return false;
});


// product size selection
$('.btn-size').click(function(){
    var this_val = $(this).html();
    $(".btn-size").removeClass('btn-secondary');
    $(".btn-size").addClass('btn-success');
    $(this).removeClass('btn-success');
    $(this).addClass('btn-secondary');
    return false;
});


// "Related Products" adaptive carousel
$('#carousel-related-product').slick({
    infinite: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 3,
    dots: true,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 3
            }
        }
    ]
});


// Brands pictures replacement
$(document).ready(function(){
    $.ajax({
      url: "https://jsonplaceholder.typicode.com/photos",
      success: function(data){
        let brandFrames = document.querySelectorAll(".brand-img");
        for(let i = 0; i < brandFrames.length; i++){
            brandFrames[i].src = data[i].thumbnailUrl;
        }
      }
    });
});