// Sidenav mobile click handler
$( document ).ready(function() {
    $('.js-dh-sidenav-mobile').on('click', function() {
        $('.dh-sidenav').toggleClass('dh-sidenav--show');
        $('.dh-sidenav-mobile').toggleClass('dh-sidenav-mobile--white');
    });
});