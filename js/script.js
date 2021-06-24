 $(document)
     .on('shown.bs.modal', '#subscribe_modal', function () {
         $('body').addClass('modal-open')
     })
     .on('hidden.bs.modal', '#subscribe_modal', function () {
         $('body').removeClass('modal-open')
     });
 $('#got_It').click(function () {
     $('.cookie_box').css({
         display: 'none'
     })
 })
 var width = $('.content').innerWidth();
 console.log(width);
 if (width < 901) {
     // Hide Header on on scroll down
     var didScroll;
     var lastScrollTop = 0;
     var delta = 5;
     var navbarHeight = $('header').outerHeight();
     var height = $('.section1').innerHeight();

     $(window).scroll(function (event) {
         didScroll = true;
     });

     setInterval(function () {
         if (didScroll) {
             hasScrolled();
             didScroll = false;
         }
     }, 500);

     function hasScrolled() {
         var st = $(this).scrollTop();

         // Make sure they scroll more than delta
         if (Math.abs(lastScrollTop - st) <= delta)
             return;

         // If they scrolled down and are past the navbar, add class .nav-up.
         // This is necessary so you never see what is "behind" the navbar.
         if (st > lastScrollTop && st > navbarHeight) {
             // Scroll Down
             $('header').removeClass('nav-down').addClass('nav-up');
         } else {
             // Scroll Up
             if (st + $(window).height() < $(document).height()) {
                 $('header').removeClass('nav-up').addClass('nav-down');

             }
         }
         if (st > height) {
             $('header').addClass('show_arrow');
         } else {
             $('header').removeClass('show_arrow');
         }

         lastScrollTop = st;
     }
 }
 $('.burger_icon').click(function () {
     $('#menu').css({
         transform: 'none',
         opacity: '1'
     })
 })
 $('#menu a').click(function () {
     $('#menu').css({
         transform: 'translate(100%, 0)',
         opacity: '0'
     })
 })
 $('.back').click(function () {
     $('#menu').animate({
         transform: 'translate(100%, 0)',
         opacity: '0'
     })
 })
 $(document).click(function (event) {
     //if you click on anything except the modal itself or the "open modal" link, close the modal
     if (!$(event.target).closest("#menu, #menuToggle").length) {
         $("body").find("#menu").css({
             transform: ' translate(100%, 0)'
         });

     }
 });
