//make cursor start in input box
window.onload=function() {
document.forms[0][0].focus();
}

$(document).ready( function() {
    $('#item').on('keydown',function(event){ // adds item on enter press
        if(event.keyCode == 13) {
            $(':input').attr('placeholder','');
            event.preventDefault();
            var item = $(this).val();
            if(isBlank(item)){ // if all blanks make text red
                $(':input').val('');
                $(':input').attr('placeholder','Invalid Entry');
                return;
            }
            $(this).css('color','black');
            $(':input').val('');
            $(this).parent().parent().parent().parent().append(listString(item)); //add to end of list
            $('li').last().children().first().addClass('checkbox');
        };
    });
    $(document.body).on('click', '.checkbox', function(){ // on checkbox click
        if(!$(this).next().hasClass('form') ){
            if( !$(this).parent().hasClass('checked') ){
                $(this).parent().addClass('checked');
                $(this).first().html('<img src="check-mark-hi.png" alt="check"/>');
            }
            else{
                $(this).parent().removeClass('checked');
                $(this).first().html('');
            }
        }
    });
    $('#remove').on('click',function(){
        $('.checked').remove();
    });
});


// create the list item
function listString(item){ 
    var before = '<li><div></div><div class="set">';
    var after = '</div><div class="line"></div></li>';
    return before + item + after;
}

// check if string is blank
function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}




                                      
                                      