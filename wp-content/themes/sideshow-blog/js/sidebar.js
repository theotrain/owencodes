jQuery(document).ready(function ($) {
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#dismiss, #sidebarCollapse').on('click', function () {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    // var $title_area = $('.post-title-box h1 a');
    // var title = $title_area.html();
    // var letters = title.split('');
    // $title_area.text('');
    // for(var i = 0; i < letters.length; i++){
    //     if(i % 2 == 0){
    //         $title_area.append('<span class="t0">' + letters[i] + '</span>');
    //     }
    //     else{
    //         $title_area.append('<span class="t1">' + letters[i] + '</span>');
    //     }
    // }

});
