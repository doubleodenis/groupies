$(document).ready(function() {
    $(document).delegate('.open', 'click', function(event){
        $(this).addClass('oppenned');
        event.stopPropagation();
    })
    $(document).delegate('body', 'click', function(event) {
        $('.open').removeClass('oppenned');
    })
    $(document).delegate('.cls', 'click', function(event){
        console.log('closing nav')
        $('.open').removeClass('oppenned');
        event.stopPropagation();
    });
});

$(document).ready(function() {
    $(document).delegate('.open', 'click', function(event){
        $(this).ad
        event.stopPropagation();
    })
})