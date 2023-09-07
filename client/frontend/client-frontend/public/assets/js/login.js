$(document).ready(function () {
    $(".button-log a").click(function () {
        $(".overlay-login").fadeToggle(200);
        $(this).toggleClass('btn-open').toggleClass('btn-close');
    });
        
    $('.overlay-close1').on('click', function () {
        $(".overlay-login").fadeToggle(200);
        $(".button-log a").toggleClass('btn-open').toggleClass('btn-close');
        open = false;
    });

    // $('.popup-with-zoom-anim').magnificPopup({
    //     type: 'inline',
    //     fixedContentPos: false,
    //     fixedBgPos: true,
    //     overflowY: 'auto',
    //     closeBtnInside: true,
    //     preloader: false,
    //     midClick: true,
    //     removalDelay: 300,
    //     mainClass: 'my-mfp-zoom-in'
    //     });

    // $('.navbar-toggler').click(function () {
    //     $('body').toggleClass('noscroll');
    // })

    // $('#customerhnyCarousel').carousel({
    //     interval: 5000
    //  });
});

// (function(){
//     if(typeof _bsa !== 'undefined' && _bsa) {
//         _bsa.init('flexbar', 'CKYI627U', 'placement:w3layoutscom');
//     }
// })();





//     (function(){
//         if(typeof _bsa !== 'undefined' && _bsa) {
//             format, zoneKey, segment,value, options
//             _bsa.init('stickybox', 'CKYI653J', 'placement:w3layoutscom');
//         }
//     })();


    
// 		window.dataLayer = window.dataLayer || [];
// 		function gtag(){dataLayer.push(arguments);}
// 		gtag('js', new Date());

// 		gtag('config', 'G-98H8KRKT85');






transmitv.render();

transmitv.cart.on('transmitv-cart ptransmitv-cart add-to-cart', function (evt) {
    var items, len, i;

    if (this.subtotal() > 0) {
        items = this.items();

        for (i = 0, len = items.length; i < len; i++) {}
    }
 });




