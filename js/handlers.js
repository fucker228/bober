$('.form-color .phone').autotab({
    format: 'numeric',
    target: 'null',
    maxlength: '19'
});
$('.connect-to-manager .phone').autotab({
    format: 'numeric',
    target: 'null',
    maxlength: '19'
});

$(".phone").focus(function() {
    var value = $(this).val();
    value = value.replace(/_/g, ''); //удаляем подчеркивания
    value = value.replace(/\s+/g, ''); //удаляем пробелы				
    value = value.replace(/\W+/g, ''); //удаляем скобки

    if (value.length < 11) {
        $(this).val('+7 (9__) ___ __ __');
        $(this).setCursorPosition(5);
    }
});


$(".phone").click(function() {
    var value = $(this).val();
    value = value.replace(/_/g, ''); //удаляем подчеркивания
    value = value.replace(/\s+/g, ''); //удаляем пробелы				
    value = value.replace(/\W+/g, ''); //удаляем скобки

    if (value.length < 11) {
        $('.form-color .phone').autotab({
            format: 'numeric',
            target: 'null',
            maxlength: '19'
        });
        $('.connect-to-manager .phone').autotab({
            format: 'numeric',
            target: 'null',
            maxlength: '19'
        });

        $(this).val('+7 (9__) ___ __ __');
        $(this).setCursorPosition(5);
    }
});


$(".phone").blur(function() {
    var value = $(this).val();
    value = value.replace(/_/g, ''); //удаляем подчеркивания
    value = value.replace(/\s+/g, ''); //удаляем пробелы				
    value = value.replace(/\W+/g, ''); //удаляем скобки		

    if (value.length < 11)
        $(this).val('');
});



$(function() {
    $('.phone').keyup(function(eventObject) {

        if ((eventObject.which == 8) || (eventObject.which == 46)) {
            var value = $(this).val();

            $(this).val(value.substring(0, value.length));

            if (value.length < 4)
                $(this).val('+7 (');




            var value = $(this).val();
            value = value.replace(/_/g, ''); //удаляем подчеркивания				
            value = value.replace(/\s+/g, ''); //удаляем пробелы				
            value = value.replace(/\W+/g, ''); //удаляем скобки


            var buffer1 = '';
            var buffer2 = '';
            //проверка кода с 9
            if (value.charAt(1) != 9)
                value = '79' + value.substr(2, value.length);

            for (var i = 0; i <= value.length - 1; i++) {
                var str_char = value.charAt(i);
                buffer2 = buffer1 + str_char;
                if (i == 0) buffer2 = buffer2 + ' (';
                if (i == 1 && value.charAt(i + 1) == '') buffer2 = buffer2 + '__) ___ __ __';
                if (i == 2 && value.charAt(i + 1) == '') buffer2 = buffer2 + '_) ___ __ __';
                if (i == 3) buffer2 = buffer2 + ') ';
                if (i == 3 && value.charAt(i + 1) == '') buffer2 = buffer2 + '___ __ __';

                if (i == 4 && value.charAt(i + 1) == '') buffer2 = buffer2 + '__ __ __';
                if (i == 5 && value.charAt(i + 1) == '') buffer2 = buffer2 + '_ __ __';

                if (i == 6) buffer2 = buffer2 + ' ';
                if (i == 6 && value.charAt(i + 1) == '') buffer2 = buffer2 + '__ __';

                if (i == 7 && value.charAt(i + 1) == '') buffer2 = buffer2 + '_ __';

                if (i == 8) buffer2 = buffer2 + ' ';
                if (i == 8 && value.charAt(i + 1) == '') buffer2 = buffer2 + '__';

                if (i == 9 && value.charAt(i + 1) == '') buffer2 = buffer2 + '_';

                if (i == 10) buffer2 = buffer2;
                buffer1 = buffer2;
            }

            $(this).val('+' + buffer1);


            if (value.length == 2) {
                $(this).setCursorPosition(5);
            } else if (value.length == 3) {
                $(this).setCursorPosition(6);
            } else if (value.length == 4) {
                $(this).setCursorPosition(7);
            } else if (value.length == 5) {
                $(this).setCursorPosition(10);
            } else if (value.length == 6) {
                $(this).setCursorPosition(11);
            } else if (value.length == 7) {
                $(this).setCursorPosition(12);
            } else if (value.length == 8) {
                $(this).setCursorPosition(14);
            } else if (value.length == 9) {
                $(this).setCursorPosition(15);
            } else if (value.length == 10) {
                $(this).setCursorPosition(17);
                $('.form-color .phone').autotab({
                    format: 'numeric',
                    target: 'null',
                    maxlength: '19'
                });
                $('.connect-to-manager .phone').autotab({
                    format: 'numeric',
                    target: 'null',
                    maxlength: '19'
                });
            }


        } else {


            var value = $(this).val();

            console.log(value);

            value = value.replace(/_/g, ''); //удаляем подчеркивания				
            value = value.replace(/\s+/g, ''); //удаляем пробелы				
            value = value.replace(/\W+/g, ''); //удаляем скобки


            var buffer1 = '';
            var buffer2 = '';
            //проверка кода с 9
            if (value.charAt(1) != 9)
                value = '79' + value.substr(2, value.length);

            for (var i = 0; i <= value.length - 1; i++) {
                var str_char = value.charAt(i);
                buffer2 = buffer1 + str_char;
                if (i == 0) buffer2 = buffer2 + ' (';
                if (i == 1 && value.charAt(i + 1) == '') buffer2 = buffer2 + '__) ___ __ __';
                if (i == 2 && value.charAt(i + 1) == '') buffer2 = buffer2 + '_) ___ __ __';
                if (i == 3) buffer2 = buffer2 + ') ';
                if (i == 3 && value.charAt(i + 1) == '') buffer2 = buffer2 + '___ __ __';

                if (i == 4 && value.charAt(i + 1) == '') buffer2 = buffer2 + '__ __ __';
                if (i == 5 && value.charAt(i + 1) == '') buffer2 = buffer2 + '_ __ __';

                if (i == 6) buffer2 = buffer2 + ' ';
                if (i == 6 && value.charAt(i + 1) == '') buffer2 = buffer2 + '__ __';

                if (i == 7 && value.charAt(i + 1) == '') buffer2 = buffer2 + '_ __';

                if (i == 8) buffer2 = buffer2 + ' ';
                if (i == 8 && value.charAt(i + 1) == '') buffer2 = buffer2 + '__';

                if (i == 9 && value.charAt(i + 1) == '') buffer2 = buffer2 + '_';

                if (i == 10) buffer2 = buffer2;
                buffer1 = buffer2;
            }

            $(this).val('+' + buffer1);


            if (value.length == 2) {
                $(this).setCursorPosition(5);
            } else if (value.length == 3) {
                $(this).setCursorPosition(6);
            } else if (value.length == 4) {
                $(this).setCursorPosition(7 + 2);
            } else if (value.length == 5) {
                $(this).setCursorPosition(10);
            } else if (value.length == 6) {
                $(this).setCursorPosition(11);
            } else if (value.length == 7) {
                $(this).setCursorPosition(13);
            } else if (value.length == 8) {
                $(this).setCursorPosition(14);
            } else if (value.length == 9) {
                $(this).setCursorPosition(16);
            } else if (value.length == 10) {
                $(this).setCursorPosition(17);
            } else {
                $('.form-color .phone').autotab({
                    format: 'numeric',
                    target: 'null',
                    maxlength: '18'
                });
                $('.connect-to-manager .phone').autotab({
                    format: 'numeric',
                    target: 'null',
                    maxlength: '18'
                });
            }
        }
    });
});



$.fn.setCursorPosition = function(pos) {
    this.each(function(index, elem) {
        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            var range = elem.createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    });
    return this;
};