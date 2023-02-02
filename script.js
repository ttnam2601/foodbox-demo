


// nav mobile
$('.navbar-toggle').click(function () {
    $('.nav-mobile').addClass('active');
    $('.overlay-mobile').addClass('active');
});

$('.overlay-mobile').click(function () {
    $('.nav-mobile').removeClass('active');
    $(this).removeClass('active');
});

$('.close-nav').click(function () {
    $('.nav-mobile').removeClass('active');
    $('.overlay-mobile').removeClass('active');
});
// end nav mobile



//  filter category
$('.category-item  h4').click(function () {
    $(this).prev().children('input').trigger('click')

})

$('.filter-btn').click(function () {
    $('.filter-container').toggleClass('active');
    $('.Special-food').toggleClass('active');
    $('.filter-btn').toggleClass('active');
    $('.filter-mobile-container').toggleClass('active');

})

$('.filter-mobile-title').click(function () {
    $('.filter-btn').trigger('click')
})


$('.filter-container>h2').click(function () {
    $('.filter-btn').trigger('click');
})



//filter right


$('.filter-right li:first-child').click(function () {
    $('.filter-price').children('span').html('Giá tiền');
    $(this).addClass('active');
    $('.filter-right li:nth-child(2)').removeClass('active')
    $('.filter-right li:nth-child(3)').removeClass('active')
})

$('.filter-price').click(function () {
    $('.filter-right').toggleClass('active');


});


$('.filter-right li:nth-child(2)').click(function () {
    $('.filter-price').children('span').html('Giảm giá');
    $(this).addClass('active');
    $('.filter-right li:first-child').removeClass('active');
    $('.filter-right li:last-child').removeClass('active')
})

$('.filter-right li:nth-child(3)').click(function () {
    $('.filter-price').children('span').html('Bán chạy');
    $(this).addClass('active');
    $('.filter-right li:first-child').removeClass('active');
    $('.filter-right li:nth-child(2)').removeClass('active')

})
$('.filter-right li').click(function () {
    $('.filter-price').trigger('click');
})

















// checkout method
$('.checkout-item').click(function () {
    $(this).prev('input').trigger('click');

})



//tab admin


// Show the first tab and hide the rest
$('.tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('.tabs-nav li').click(function () {
    $('.tabs-nav li').removeClass('active');
    $(this).addClass('active');
    $('.tab-content').hide();

    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
});



//admin
$('thead .checkbox').click(function () {
    let checkeds = $('tbody .checkbox input');
    $(this).parents('.tab-content-same').find('tbody .checkbox input').prop('checked', true);

})

//admin

$('.delete').click(function () {
    $(this).parents('tr').remove();
})




//chi tiet sp
$('.btn-toggle').next().hide();



$('.btn-toggle').click(function () {

    $(this).next().toggle();

    $(this).toggleClass('active');

})












// quantity cảt :))
function increaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;
}

function decreaseValue() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number').value = value;
};


function increaseValue2() {
    var value = parseInt(document.getElementById('number-2').value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number-2').value = value;
}

function decreaseValue2() {
    var value = parseInt(document.getElementById('number-2').value, 10);
    value = isNaN(value) ? 0 : value;
    value < 1 ? value = 1 : '';
    value--;
    document.getElementById('number-2').value = value;
};


$('.cart .remove').click(function () {
    $(this).parents('tr').remove();
})
$('.cart .remove').click(function () {
    $(this).parents('.table-row').remove();
})

// slide cart page

$('.responsive').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,

            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});






