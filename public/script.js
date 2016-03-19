$(document).ready(function () {

    //    setInterval(changy, 1500);
    //    
    //    function changy() {
    //        $("html").css( "transition", "500ms");
    //        $("html").css("backgroundColor","#434343");
    //        $("body").css( "transition", "500ms");
    //        $("body").css("backgroundColor","#434343");
    //    }

    $(".lildiv").on("click", racks);


    function racks() {

        $("#chat").toggleClass("flyout");
        $("#messages").toggleClass("flyoutMessages");

    }


    $(".images img").on("click", changeImg);


    function changeImg() {
        var att = $(this).attr('src');
        $("#bigImg").attr('src', att).hide().slideDown();

    }

    /*    $('input[type="submit"]').on("click", function(){
            event.preventDefault();
        });*/


    var socket = io();

    $('form').submit(function () {
        socket.emit('chat message', $('#m').val());
        $('#m').val('');
        return false;
    });
    socket.on('chat message', function (msg) {
        $('#messages').append($('<li>').text(msg));
    });
});