// Sidenav mobile click handler
$( document ).ready(function() {
    $('.js-Sidenav-mobile').on('click', function() {
        $('.Sidenav').toggleClass('Sidenav--show');
        $('.Sidenav-mobile').toggleClass('Sidenav-mobile--white');
    });
});
