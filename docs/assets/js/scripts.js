// SideNav mobile click handler
$( document ).ready(function() {
    $('.js-sidenav-mobile').on('click', function() {
        $('.SideNav').toggleClass('SideNav--show');
        $('.sidenav-mobile').toggleClass('SideNav-mobile--white');
    });
});
