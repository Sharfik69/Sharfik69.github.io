$(function(){
    var id = 0, check = false;
    $('.add-new-list').click(function() {
        $('.add-new-list').before(   
            '<div class="new-list" id="' + id + '">' + 
                '<p class="delete"> x </p> ' +
                '<input class="edit-name-column" type="text" placeholder="Введите название колонки">' +
                '<input id="add-column" class="button-add-card add-col" type="button" value="Добавить колонку">' + 
                '<h2 class="name-column"> Введите название колонки </h2>' +
                '<div class="card" id="sortable' + id + '"> </div>' +
                '<div class="adding-field">' +
                    '<textarea class="field-add-card" type="text" cols=39> </textarea>' +
                    '<input class="button-add-card" type="button" value="Добавить карточку">' +
                '</div>' +
                '<p class="add-card-text"> Добавить карточку </p>' +
            '</div>'
        );
        id++;
        $('.add-card-text').unbind("click").click(function(){
            if (!check)
            {
                $('div[id=' + $(this).parent().attr('id') + ']').children('.adding-field').show();
                $('div[id=' + $(this).parent().attr('id') + ']').children('.add-card-text').text('Скрыть поле ввода');
                check = true;
            }
            else
            {
                $('div[id=' + $(this).parent().attr('id') + ']').children('.adding-field').hide();
                $('div[id=' + $(this).parent().attr('id') + ']').children('.add-card-text').text('Добавить карточку');
                check = false;
            }
        });
        $('.button-add-card').unbind("click").click(function(){
            var x = $(this).parent().parent().attr('id');
            if (($('div[id=' + x +'] .field-add-card').val()).length == 0)
            {
                alert('Карточка пустая :(');
            }
            else
            {
                $('div[id=' + $(this).parent().parent().attr('id') + ']').children('.card').append(
                    '<div class="card-element ui-state-default">' + 
                        '<p class="card-text" >' + $('div[id=' + x +'] .field-add-card').val() + '</p>' + 
                    '</div>'
                );
                $('.field-add-card').val('');
            }
        });
        $('#add-column.button-add-card.add-col').unbind("click").click(function(){
            var x = $(this).parent().attr('id');
            $('div#' + x).children('.edit-name-column').hide();
            $('div#' + x).children('#add-column').hide();
            $('div#' + x).children('.name-column').show();
            var new_name = $('div#' + x).children('.edit-name-column').val();
            if (new_name == '')
            {
                $('div#' + x).children('.name-column').text('Новая колонка');
            }
            else
            {
                $('div#' + x).children('.name-column').text(new_name);
            }
            $('div#' + x).children('.add-card-text').show();
        });

        $('.delete').unbind("click").click(function(){
            var x = $('div[id=' + $(this).parent().attr('id') + ']').attr('id');
            $('div[id=' + x + ']').remove();
        });
        for (var i = 0; i <= id; i++)
        {
            $("#sortable" + i).sortable({
                connectWith: "div"
            });
        
            $("#sortable" + i).disableSelection();
        }
    });

});