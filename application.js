window.onload=function() {
document.forms[0][0].focus();
}
var init = 0;
$(document).ready( function() {
    $('#item').on('keydown',function(event){
        if(event.keyCode == 13) {
            event.preventDefault();
            var item = $(this).val();
            if(isBlank(item)){
                $(':input').val('Invalid Entry');
                $(this).css('color','red');
                return;
            }
            $(this).css('color','black');
            $(':input').val('');
            $(this).parent().parent().parent().parent().append(listString(item));
            $('li').last().children().first().addClass('checkbox');
        };
    });
    $(document.body).on('click', '.checkbox', function(){
        if(!$(this).next().hasClass('form') ){
            if( !$(this).parent().hasClass('checked') ){
                $(this).parent().addClass('checked');
                $(this).first().html('<img src="check-mark-hi.png" />');
            }
            else{
                $(this).parent().removeClass('checked');
                $(this).first().html('');
            }
        }
    });
    $('#remove').on('click',function(){
        $('.checked').next().remove();
        $('.checked').remove();
    });
});



function listString(item){
    var before = '<li><div></div><div class="set">';
    var after = '</div></li><hr size="2" color="black">';
    return before + item + after;
}

function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}




                                      
                                      