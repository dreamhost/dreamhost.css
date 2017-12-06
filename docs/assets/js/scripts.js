// SideNav mobile click handler
$( document ).ready(function() {
    $('.js-SideNav-mobile').on('click', function() {
        $('.SideNav').toggleClass('SideNav--show');
        $('.SideNav-mobile').toggleClass('SideNav-mobile--white');
    });
});
