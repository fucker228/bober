var jQ = false;



//CUSTOM VARIABLES====================================================
var CURRENT_SCREEN;
var SCREEN_ARRAY = [
    'start-screen',
    'color-screen',
    'start-sreps-screen',
    'step-screen-1',
    'step-screen-2',
    'step-screen-3',
    'step-screen-4',
    'step-screen-5',
    'step-screen-6',
    'step-screen-7',
    'step-screen-8',
    'form-screen',
    'contact-screen',
];

var INTERVAL_COLORS_TOGGLE, TIMEOUT_COLORS_TOGGLE, INTERVAL_TIME, INTERVAL_FLAG;
//CUSTOM VARIABLES====================================================


//FROM sCREEN SCROLL==================================================
var stepScreen8Heigh, stepScreen8Offset, houseFormHeight, houseFormOffset, formScreenHeight, formScreenOffset;
//FROM sCREEN SCROLL==================================================

function initJQ() {
    if (typeof(jQuery) == 'undefined') {
        if (!jQ) {
            jQ = true;

            document.write('<script type="text/javascript" src="js/jquery-latest.min.js"></script>');
            document.write('<script type="text/javascript" src="js/bootstrap.min.js"></script>');
            document.write('<script type="text/javascript" src="js/jquery.touchSwipe.min.js"></script>');


            document.write('<script type="text/javascript" src="js/color-collection-constants.js"></script>');
            document.write('<script type="text/javascript" src="js/autotab/jquery.autotab.js"></script>');
            document.write('<script type="text/javascript" src="js/handlers.js"></script>');




            //smoothscroll
            //document.write('<script type="text/javascript" src="js/jquery.smoothscroll.js"></script>');
            //document.write('<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js" async></script>');
            //document.write('<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/plugins/ScrollToPlugin.min.js" async></script>');

        }
        setTimeout('initJQ()', 50);
    } else {
        (function($) {
            $(function() {
                //  My Jquery code
                //-------------------------------------------------------------------------------------------------------------------------			

                $(window).unload(function() {
                    window.scrollTo(0, 0);
                });


                $(document).unbind("scroll");
                $('#form-screen .home-arrow').css({
                    'position': 'absolute'
                });




                window.addEventListener('orientationchange', doOnOrientationChange);
                // Initial execution if needed
                doOnOrientationChange();



                //Detect current block-----------------------------------------------------------
                window.CURRENT_SCREEN = 0;
                var LAST_SCROLL = 0;


                //Color-block house------------------------
                window.stepScreen8Height = parseInt($('#step-screen-8').height());
                window.stepScreen8Offset = parseInt($('#step-screen-8').offset().top);

                window.houseFormHeight = parseInt($('#form-screen .home-arrow').height());
                window.houseFormOffset = parseInt($('#form-screen .home-arrow').offset().top);

                window.formScreenHeight = parseInt($('#form-screen').height());
                window.formScreenOffset = parseInt($('#form-screen').offset().top);
                //Color-block house------------------------

                $(window).scroll(function() {
                    //alert( $(window).scrollTop() );
                    var COUNT_SECTIONS = $('body').find('section').length;
                    var CURRENT_SCROLL = $(this).scrollTop();

                    //Detect scroll direction------------------------
                    var currentHeight = parseInt($($('body').find('section')[window.CURRENT_SCREEN]).height());
                    var currentOffset = parseInt($($('body').find('section')[window.CURRENT_SCREEN]).offset().top);

                    if (CURRENT_SCROLL > LAST_SCROLL) {
                        // downscroll--------------------------
                        if ($(window).scrollTop() >= currentOffset + currentHeight) {

                            if (window.CURRENT_SCREEN < COUNT_SECTIONS) {
                                window.CURRENT_SCREEN++;
                            }

                            $('.page-navigation ul li').removeClass('active');
                            $('.page-navigation ul li').removeClass('active-gray');

                            //Change nav button color---------
                            if (window.CURRENT_SCREEN > 1) {
                                $('.page-navigation ul li[anch="' + window.SCREEN_ARRAY[window.CURRENT_SCREEN] + '"]').addClass('active-gray');
                                $('.page-navigation ul li').css('border-color', '#A6A8AB');
                            } else {
                                $('.page-navigation ul li[anch="' + window.SCREEN_ARRAY[window.CURRENT_SCREEN] + '"]').addClass('active');
                            }

                           
                        }

                    } else {
                        // upscroll-----------------------------
                        if ($(window).scrollTop() < currentOffset - currentHeight / 2) {

                            if (window.CURRENT_SCREEN > 0) {
                                window.CURRENT_SCREEN--;
                            }

                            $('.page-navigation ul li').removeClass('active');
                            $('.page-navigation ul li').removeClass('active-gray');

                            //Change nav button color---------
                            if (window.CURRENT_SCREEN <= 1) {
                                $('.page-navigation ul li[anch="' + window.SCREEN_ARRAY[window.CURRENT_SCREEN] + '"]').addClass('active');
                                $('.page-navigation ul li').css('border-color', '#FFFFFF');
                            } else {
                                $('.page-navigation ul li[anch="' + window.SCREEN_ARRAY[window.CURRENT_SCREEN] + '"]').addClass('active-gray');
                            }
                        }
                    }
                    LAST_SCROLL = CURRENT_SCROLL;


                    funcToogleRedHouseColor($(window).scrollTop());
                    funcToogleRedHouseForm($(window).scrollTop());

                });
                //Detect current block-----------------------------------------------------------


                //Navigation---------------------------------------------------------------------
                $('nav ul li').on('click', function() {
                    var anchor = $(this).attr('anch');
                    var offset = $('#' + anchor).offset();

                    if (anchor.indexOf('step') >= 0) {
                        $("html, body").animate({
                            scrollTop: offset.top
                        }, 1000);
                    } else {
                        $("html, body").animate({
                            scrollTop: offset.top
                        }, 1000);
                    }

                    $('nav ul li').removeClass('active');
                    $(this).addClass('active');
                });
                //Navigation---------------------------------------------------------------------


                //Start-block==========================================================================================================
                //Init start-block------------------------------------------------------------
                //Load animate brush
                if (msieversion() == false) {
                    if ($(window).width() >= 1000) {
                        $('.start-block .brush').load('img/icons/start-brush.svg');
                    } else {
                        $('.start-block .brush').load('img/icons/start-brush-mobile.svg');
                    }
                } else {
                    if ($(window).width() >= 1000) {
                        $('.start-block .brush').load('img/icons/start-brush-ie.svg');
                    } else {
                        $('.start-block .brush').load('img/icons/start-brush-mobile-ie.svg');
                    }
                }
                // $('.start-block .slider-bgr[bgr-item="1"]').css({ 'background' : 'url(img/bg1.jpg) no-repeat center bottom fixed', '-webkit-background-size': 'cover', '-moz-background-size': 'cover', '-o-background-size': 'cover', 'background-size': 'cover' });
                // $('.start-block .slider-bgr[bgr-item="2"]').css({ 'background' : 'url(img/bg2.jpg) no-repeat center bottom fixed', '-webkit-background-size': 'cover', '-moz-background-size': 'cover', '-o-background-size': 'cover', 'background-size': 'cover' });
                // $('.start-block .slider-bgr[bgr-item="3"]').css({ 'background' : 'url(img/bg3.jpg) no-repeat center bottom fixed', '-webkit-background-size': 'cover', '-moz-background-size': 'cover', '-o-background-size': 'cover', 'background-size': 'cover' });
                // $('.start-block .slider-bgr[bgr-item="4"]').css({ 'background' : 'url(img/bg4.jpg) no-repeat center bottom fixed', '-webkit-background-size': 'cover', '-moz-background-size': 'cover', '-o-background-size': 'cover', 'background-size': 'cover' });
                // $('.start-block .slider-bgr[bgr-item="5"]').css({ 'background' : 'url(img/bg5.jpg) no-repeat center bottom fixed', '-webkit-background-size': 'cover', '-moz-background-size': 'cover', '-o-background-size': 'cover', 'background-size': 'cover' });

                //Chages background
                setInterval(function() {
                    var currItem = parseInt($('.start-block .slider-bgr.active').attr('bgr-item'));
                    var countBgr = parseInt($('.start-block .slider-bgr.active').attr('bgr-count'));

                    if (currItem + 1 > countBgr) {
                        var nextBgr = 1;
                    } else {
                        var nextBgr = currItem + 1;
                    }

                    $('.start-block .slider-bgr').removeClass('active');
                    $('.start-block .slider-bgr[bgr-item="' + nextBgr + '"]').addClass('active');


                }, 10000);
                //Init start-block------------------------------------------------------------

                $('.start-block .brush').on('click', function() {
                    var offset = $('#color-screen').offset();

                    if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
                        //window.scrollTo(0, offset.top); // first value for left offset, second value for top offset
                        location.hash = "#color-screen";
                    } else {
                        $("html, body").animate({
                            scrollTop: offset.top
                        }, 1000);
                    }
                });
                //Start-block==========================================================================================================



                //Colors-block=========================================================================================================
                //Init colors-block-----------------------------------------------------------
                window.INTERVAL_TIME = 0;
                window.INTERVAL_FLAG = false;
                $('#color-screen').attr('current-color-marker', '0');


                //Set home-arrow tablet
                if ($(window).width() >= 768 && $(window).width() < 1000) {
                    var borderWidth = $(window).width() / 2;
                    $('.home-arrow-tablet .arrow').css({
                        'border-left-width': borderWidth,
                        'border-right-width': borderWidth
                    });
                } else if ($(window).width() < 768) {
                    var borderWidth = $(window).width() / 2;
                    $('.home-arrow-mobile .arrow').css({
                        'border-left-width': borderWidth,
                        'border-right-width': borderWidth
                    });
                }

                //Load arrows
                if ($(window).width() >= 0) {
                    $('.colors-block .control .arrow-left').load('img/icons/colors-slider-left.svg');
                    $('.colors-block .control .arrow-right').load('img/icons/colors-slider-right.svg');
                } else {
                    $('.colors-block .control .arrow-left').load('img/icons/colors-slider-left-mobile.svg');
                    $('.colors-block .control .arrow-right').load('img/icons/colors-slider-right-mobile.svg');
                }


                $('.colors-block .phone-input-group .btn-primary').load('img/icons/btn-phone-arrow.svg');
                //Init colors-block-----------------------------------------------------------

                //Handlers--------------------------------------------------------------------
                $('.colors-block .control .nav').on('click', function() {

                    var collection = ['', 'clear', 'opaque', 'clear', 'opaque'];

                    var action = $(this).attr('action');
                    var item = $(this).attr('item-current');
                    var count = $(this).attr('count-collection');

                    //Set next item
                    if (action == 'right') {
                        if (parseInt(item) + 1 > parseInt(count)) {
                            var next = 1;
                        } else {
                            var next = parseInt(item) + 1;
                        }
                    } else {
                        if (parseInt(item) - 1 < 1) {
                            var next = parseInt(count);
                        } else {
                            var next = parseInt(item) - 1;
                        }
                    }

                    $('.colors-block .control .nav').attr('item-current', next);


                    //Change content----------------------------------------------
                    //control-title
                    $('.colors-block .control .titles .title').removeClass('active');
                    $('.colors-block .control .titles .title[item="' + next + '"]').addClass('active');

                    //control-description
                    $('.colors-block .control .descriptions .description').removeClass('active');
                    $('.colors-block .control .descriptions .description[item="' + next + '"]').addClass('active');

                    //control-contents
                    $('.colors-block .parameters .parameter').removeClass('active');
                    $('.colors-block .parameters .parameter[item="' + next + '"]').addClass('active');

                    //Open/close previeew------------------------------------------



                    //Start colors toggles-----------------------------------------
                    if (typeof window.INTERVAL_COLORS_TOGGLE != 'undefined') {
                        clearInterval(window.INTERVAL_COLORS_TOGGLE);
                        clearTimeout(window.TIMEOUT_COLORS_TOGGLE);
                        window.INTERVAL_TIME = 0;
                        window.INTERVAL_FLAG = false;
                        $('#color-screen').attr('current-color-marker', '0');
                    }

                    $('.colors-block .preview').css({
                        'bottom': '-1000px'
                    });

                    //Start animation
                    window.INTERVAL_COLORS_TOGGLE = setInterval(function() {

                        if (window.INTERVAL_FLAG == true) {
                            return false;
                        }

                        //window.INTERVAL_TIME = 2000;
                        window.INTERVAL_FLAG = true;

                        var colors = window.GLOB_COLLECTION[next][0];
                        var types = window.GLOB_COLLECTION[next][1];
                        var text = window.GLOB_COLLECTION[next][2];
                        var marker = parseInt($('#color-screen').attr('current-color-marker'));

                        //Set color---------------------------------------
                        $('.colors-block').css({
                            'background-color': colors[marker]
                        });

                        if (types[marker] == 'clear') {
                            $('.colors-block .preview').css('background-color', colors[marker]);

                            setTimeout(function() {
                                $('.colors-block .preview').addClass('visible-md');
                                $('.colors-block .preview').addClass('visible-lg');
                                $('.colors-block .preview').css({
                                    'bottom': '0px'
                                });
                                $('.colors-block .timber-color').css({
                                    'bottom': '-1000px'
                                });
                            }, 1000);

                        } else {
                            $('.colors-block .timber-color').css('background-color', colors[marker]);
                            $('.colors-block .timber-color .arrow').css('border-bottom-color', colors[marker]);

                            $('.colors-block .preview').css({
                                'bottom': '-1000px'
                            });
                            $('.colors-block .timber-color').css({
                                'bottom': '0px'
                            });
                            $('.colors-block .preview').css({
                                'background-color': 'transparent'
                            });

                            $('.colors-block .preview').removeClass('visible-md');
                            $('.colors-block .preview').removeClass('visible-lg');
                        }



                        //Change inside colors-----------------------------------------------------------------
                        $('.colors-block h1').css({
                            'color': text[marker]
                        });
                        $('.colors-block h3').css({
                            'color': text[marker]
                        });
                        $('.colors-block .control .nav ').css({
                            'border-color': text[marker]
                        });
                        $('.colors-block .parameters .parameter .description').css({
                            'color': text[marker]
                        });


                        $('.colors-block .timber-color').css({
                            'border-color': text[marker]
                        });
                        $('.colors-block .timber-color p.bottom').css({
                            'color': text[marker]
                        });
                        $('.colors-block .timber-color .arrow-black').css({
                            'border-bottom-color': text[marker]
                        });

                        if (text[marker] == '#ffffff') {
                            $('.colors-block .timber-color p.top').html('<img src="img/icons/circle-check.svg">');
                        } else {
                            $('.colors-block .timber-color p.top').html('<img src="img/icons/circle-check-black.svg">');
                        }

                        //Change inside colors-----------------------------------------------------------------




                        //Phone input----------------------------------------
                        if (text[marker] == '#ffffff') {
                            $('.colors-block .phone-input-group .form-control').removeClass('gray');
                        } else {
                            $('.colors-block .phone-input-group .form-control').addClass('gray');
                        }

                        //Change class button
                        if (text[marker] == '#ffffff') {
                            $('.colors-block .btn-primary').removeClass('gray');
                        } else {
                            $('.colors-block .btn-primary').addClass('gray');
                        }


                        //Change arrow
                        $('.colors-block svg polyline').css({
                            'stroke': text[marker]
                        });

                        //Change form
                        $('.colors-block .block-client-answer p').css({
                            'color': text[marker]
                        });

                        //Change marker----------------------------------
                        if (marker + 1 < colors.length) {
                            $('#color-screen').attr('current-color-marker', (marker + 1));
                        } else {
                            $('#color-screen').attr('current-color-marker', '0');
                        }


                        window.TIMEOUT_COLORS_TOGGLE = setTimeout(function() {
                            window.INTERVAL_FLAG = false;
                        }, 3000);

                    }, window.INTERVAL_TIME);
                    //Start colors toggles-----------------------------------------

                });
                //Handlers--------------------------------------------------------------------


                //First start toggles--------------------------------------------------------
                //Start colors toggles-----------------------------------------
                if (typeof window.INTERVAL_COLORS_TOGGLE != 'undefined') {
                    clearInterval(window.INTERVAL_COLORS_TOGGLE);
                    clearTimeout(window.TIMEOUT_COLORS_TOGGLE);
                    window.INTERVAL_TIME = 0;
                    window.INTERVAL_FLAG = false;
                    $('#color-screen').attr('current-color-marker', '0');
                }


                //Start animation
                window.INTERVAL_COLORS_TOGGLE = setInterval(function() {

                    if (window.INTERVAL_FLAG == true) {
                        return false;
                    }

                    //window.INTERVAL_TIME = 2000;
                    window.INTERVAL_FLAG = true;

                    var colors = window.GLOB_COLLECTION[1][0];
                    var types = window.GLOB_COLLECTION[1][1];
                    var text = window.GLOB_COLLECTION[1][2];
                    var marker = parseInt($('#color-screen').attr('current-color-marker'));

                    //Set color---------------------------------------
                    $('.colors-block').css({
                        'background-color': colors[marker]
                    });

                    if (types[marker] == 'clear') {
                        $('.colors-block .preview').css('background-color', colors[marker]);

                        setTimeout(function() {
                            $('.colors-block .preview').addClass('visible-md');
                            $('.colors-block .preview').addClass('visible-lg');
                            $('.colors-block .preview').css({
                                'bottom': '0px'
                            });
                            $('.colors-block .timber-color').css({
                                'bottom': '-1000px'
                            });
                        }, 1000);

                    } else {
                        $('.colors-block .timber-color').css('background-color', colors[marker]);
                        $('.colors-block .timber-color .arrow').css('border-bottom-color', colors[marker]);

                        $('.colors-block .preview').css({
                            'bottom': '-1000px'
                        });
                        $('.colors-block .timber-color').css({
                            'bottom': '0px'
                        });
                        $('.colors-block .preview').css({
                            'background-color': 'transparent'
                        });

                        $('.colors-block .preview').removeClass('visible-md');
                        $('.colors-block .preview').removeClass('visible-lg');
                    }

                    //Change inside colors-----------------------------------------------------------------
                    $('.colors-block h1').css({
                        'color': text[marker]
                    });
                    $('.colors-block h3').css({
                        'color': text[marker]
                    });
                    $('.colors-block .control .nav ').css({
                        'border-color': text[marker]
                    });
                    $('.colors-block .parameters .parameter .description').css({
                        'color': text[marker]
                    });


                    $('.colors-block .timber-color').css({
                        'border-color': text[marker]
                    });
                    $('.colors-block .timber-color p.bottom').css({
                        'color': text[marker]
                    });
                    $('.colors-block .timber-color .arrow-black').css({
                        'border-bottom-color': text[marker]
                    });

                    if (text[marker] == '#ffffff') {
                        $('.colors-block .timber-color p.top').html('<img src="img/icons/circle-check.svg">');
                    } else {
                        $('.colors-block .timber-color p.top').html('<img src="img/icons/circle-check-black.svg">');
                    }

                    //Change inside colors-----------------------------------------------------------------




                    //Phone input----------------------------------------
                    if (text[marker] == '#ffffff') {
                        $('.colors-block .phone-input-group .form-control').removeClass('gray');
                    } else {
                        $('.colors-block .phone-input-group .form-control').addClass('gray');
                    }


                    //Change class button
                    if (text[marker] == '#ffffff') {
                        $('.colors-block .btn-primary').removeClass('gray');
                    } else {
                        $('.colors-block .btn-primary').addClass('gray');
                    }


                    //Change arrow
                    $('.colors-block svg polyline').css({
                        'stroke': text[marker]
                    });

                    //Change form
                    $('.colors-block .block-client-answer p').css({
                        'color': text[marker]
                    });

                    //Change marker----------------------------------
                    if (marker + 1 < colors.length) {
                        $('#color-screen').attr('current-color-marker', (marker + 1));
                    } else {
                        $('#color-screen').attr('current-color-marker', '0');
                    }


                    window.TIMEOUT_COLORS_TOGGLE = setTimeout(function() {
                        window.INTERVAL_FLAG = false;
                    }, 3000);

                }, window.INTERVAL_TIME);
                //Start colors toggles-----------------------------------------



                //Send phone--------------------------------------------------
                $('#color-screen .btn-primary').on('click', function() {
                    //Hide button
                    $('#color-screen .btn-primary.about').fadeOut('fast');

                    //Show phone input---------------------------------
                    setTimeout(function() {
                        $('#color-screen .phone-input-group').fadeIn('slow');
                    }, 800);

                });



                //Form submit-----------------------------------------------------------------------
                $('.form-color').submit(function() {
                    var phoneVal = $('.form-color').find('input[name="phone"]').val();
                    phoneVal = phoneVal.replace(/_/g, ''); //удаляем подчеркивания				
                    phoneVal = phoneVal.replace(/\s+/g, ''); //удаляем пробелы				
                    phoneVal = phoneVal.replace(/\W+/g, ''); //удаляем скобки



                    //Empty fields-------------------------------------
                    if (phoneVal.length < 11) {
                        $('.form-color').find('input[name="phone"]').addClass('empty-field');
                        return false;
                    }

                    var name = 'Гость';
                    var phone = $('.form-color').find('input[name="phone"]').val();
                    var email = 'Нет';

                    $.post('/mail.php', {
                        name: name,
                        phone: phone,
                        email: email
                    }, function(data) {

                        $('.colors-block .form-group .phone-input-group .input-group').css({
                            'display': 'none'
                        });
                        $('.colors-block .form-group .phone-input-group .block-client-answer').css({
                            'display': 'block'
                        });

                        colorPhoneSentGoal();

                    }, 'json');

                    return false;
                });
                //Form submit-----------------------------------------------------------------------

                //Send phone--------------------------------------------------
                //Colors-block=========================================================================================================


                // Form-block==========================================================================================================
                //Set home-arrow
                if ($(window).width() >= 768 && $(window).width() < 1000) {
                    var borderWidth = $(window).width() / 2;
                    $('.form-arrow-tablet .arrow').css({
                        'border-left-width': borderWidth,
                        'border-right-width': borderWidth
                    });
                } else if ($(window).width() < 768) {
                    var borderWidth = $(window).width() / 2;
                    $('.form-arrow-mobile .arrow').css({
                        'border-left-width': borderWidth,
                        'border-right-width': borderWidth
                    });
                }

                //Form submit-----------------------------------------------------------------------
                $('.connect-to-manager').submit(function() {

                    //Empty fields-------------------------------------
                    if ($('.connect-to-manager').find('input[name="name"]').val() == '') {
                        $('.connect-to-manager').find('input[name="name"]').addClass('empty-field');
                        return false;
                    }


                    var phoneVal = $('.connect-to-manager').find('input[name="phone"]').val();
                    phoneVal = phoneVal.replace(/_/g, ''); //удаляем подчеркивания				
                    phoneVal = phoneVal.replace(/\s+/g, ''); //удаляем пробелы				
                    phoneVal = phoneVal.replace(/\W+/g, ''); //удаляем скобки
                    if (phoneVal < 11) {
                        $('.connect-to-manager').find('input[name="phone"]').addClass('empty-field');
                        return false;
                    }


                    var name = $('.connect-to-manager').find('input[name="name"]').val();
                    var phone = $('.connect-to-manager').find('input[name="phone"]').val();
                    var email = 'нет';

                    $.post('/mail.php', {
                        name: name,
                        phone: phone,
                        email: email
                    }, function(data) {

                        $('.connect-to-manager .row .form-content').css({
                            'visibility': 'hidden'
                        });
                        //$('.connect-to-manager .row .block-client-answer').css({'display' : 'block'});

                        $('.form-block .content p').html($('.form-block .connect-to-manager .block-client-answer p').html());


                        sentBidGoal();

                    }, 'json');

                    return false;
                });
                //Form submit-----------------------------------------------------------------------
                // Form-block==========================================================================================================


                //Contact-block========================================================================================================

                //Set home-arrow
                if ($(window).width() >= 768 && $(window).width() < 1000) {
                    var borderWidth = $(window).width() / 2;

                    $('.contact-block .footer-home-arrow-tablet .arrow').css({
                        'border-left-width': borderWidth,
                        'border-right-width': borderWidth
                    });

                    $('.contact-block .footer-logo-arrow-tablet .arrow').css({
                        'border-left-width': borderWidth,
                        'border-right-width': borderWidth
                    });
                } else if ($(window).width() < 768) {
                    var borderWidth = $(window).width() / 2;
                    $('.contact-block .footer-home-arrow-mobile .arrow').css({
                        'border-left-width': borderWidth,
                        'border-right-width': borderWidth
                    });

                    $('.contact-block .footer-logo-arrow-mobile .arrow').css({
                        'border-left-width': borderWidth,
                        'border-right-width': borderWidth
                    });
                }

                //Load our logo
                if (msieversion() == false) {
                    if ($(window).width() >= 1000) {
                        $('.contact-block .logo .outlanding').load('img/outlanding.svg');
                    } else {
                        $('.contact-block .logo .outlanding').load('img/outlanding-mobile.svg');
                    }
                } else {
                    if ($(window).width() >= 1000) {
                        $('.contact-block .logo .outlanding').load('img/outlanding-ie.svg');
                    } else {
                        $('.contact-block .logo .outlanding').load('img/outlanding-mobile-ie.svg');
                    }
                }



                var offsetLeft = $(window).width() / 2;
                $('.contact-block .footer-home-arrow').css({
                    'left': (offsetLeft - 70) + 'px'
                });
                //Contact-block========================================================================================================



                //Timber-block=========================================================================================================
                //Init colors-block-----------------------------------------------------------
                //Set sikkens-arrow tablet
                if ($(window).width() >= 768 && $(window).width() < 1000) {
                    var borderWidth = $(window).width() / 2;
                    $('.block-start .sikkens-home-arrow .arrow').css({
                        'border-left-width': borderWidth,
                        'border-right-width': borderWidth
                    });
                } else if ($(window).width() < 768) {
                    var borderWidth = $(window).width() / 2;
                    $('.block-start .sikkens-home-arrow .arrow').css({
                        'border-left-width': borderWidth,
                        'border-right-width': borderWidth
                    });
                }



                //Load timber
                if ($(window).width() >= 1000) {
                    $('.timber-block.block-start .row .col-md-5').html(' <img src="/img/timber/timber.png"/>');
                } else {
                    $('#step-screen-1 .col-timber-preview').html('<img class="timber-img-mobile" src="img/timber/start-step-1-mobile.png"/>');
                    $('#step-screen-2 .col-timber-preview').html('<img class="timber-img-mobile" src="img/timber/step-2-mobile.png"/>');
                    $('#step-screen-3 .col-timber-preview').html('<img class="timber-img-mobile" src="img/timber/step-3-mobile.png"/>');
                    $('#step-screen-4 .col-timber-preview').html('<img class="timber-img-mobile" src="img/timber/step-4-mobile.png"/>');
                    $('#step-screen-5 .col-timber-preview').html('<img class="timber-img-mobile" src="img/timber/step-5-mobile.png"/>');
                    $('#step-screen-6 .col-timber-preview').html('<img class="timber-img-mobile" src="img/timber/step-6-mobile.png"/>');
                    $('#step-screen-7 .col-timber-preview').html('<img class="timber-img-mobile" src="img/timber/step-7-mobile.png"/>');
                    $('#step-screen-8 .col-timber-preview').html('<img class="timber-img-mobile" src="img/timber/step-8-mobile.png"/>');
                }

                //Load timber accordion arrow for mobile
                $('.timber-block .row.visible-xs.visible-sm .btn-link').load('img/icons/timber-accordion-arrow.svg');



                //Load arrow to question block
                if (msieversion() == false) {
                    $('.page-question .btn-link.arrow').load('img/icons/question-arrow.svg');
                } else {
                    $('.page-question .btn-link.arrow').load('img/icons/question-arrow-ie.svg');
                }

                //Init colors-block-----------------------------------------------------------

                //Upload covers---------------------------------------------------------------
                timberLoadCovers();
                //Upload covers---------------------------------------------------------------


                //Handlers--------------------------------------------------------------------
                $('.timber-block .slider .slider-arrow').on('click', function() {
                    var action = $(this).attr('action');
                    var item = parseInt($('.timber-block .slider').attr('item-current'));
                    var count = parseInt($('.timber-block .slider').attr('count-items'));


                    if (action == 'right') {
                        if (item == count) {
                            if (count >= 3) {
                                $('.timber-block .slider').attr('item-current', '3');
                            } else {
                                $('.timber-block .slider').attr('item-current', count);
                            }

                            var leftLast = item - 2;
                            $('.timber-block .slider .col-md-10 .col-md-4[item="' + leftLast + '"]').css({
                                'margin-left': '-15%'
                            });
                            $('.timber-block .slider .col-md-10 .marker line').css({
                                'stroke': '#A6A8AB'
                            });

                            setTimeout(function() {
                                $($(".timber-block .slider .col-md-10 .col-md-4").get().reverse()).each(function() {
                                    if (parseInt($(this).attr('item')) > 3) {
                                        $(this).css({
                                            'margin-right': '-33.333%'
                                        });
                                    } else {
                                        $(this).css({
                                            'margin-left': '0%'
                                        });
                                        $('.timber-block .slider .col-md-10 .marker[item="' + parseInt($(this).attr('item')) + '"] line').css({
                                            'stroke': '#F44040'
                                        });
                                    }
                                });
                            }, 700);

                            return false;
                        }


                        var leftLast = item - 2;
                        var rightLast = item + 1;

                        //Hidden left video-----------------------------------------
                        $('.timber-block .slider .col-md-10 .col-md-4[item="' + leftLast + '"]').css({
                            'margin-left': '-33.333%'
                        });
                        $('.timber-block .slider .col-md-10 .col-md-4[item="' + rightLast + '"]').css({
                            'margin-right': '-1px'
                        });
                        //Hidden left video-----------------------------------------

                        $('.timber-block .slider').attr('item-current', rightLast);

                        //Change marker-----------------------------------------------
                        $('.timber-block .slider .col-md-10 .marker line').css({
                            'stroke': '#A6A8AB'
                        });

                        $('.timber-block .slider .col-md-10 .marker[item="' + (item - 1) + '"] line').css({
                            'stroke': '#F44040'
                        });
                        $('.timber-block .slider .col-md-10 .marker[item="' + item + '"] line').css({
                            'stroke': '#F44040'
                        });
                        $('.timber-block .slider .col-md-10 .marker[item="' + rightLast + '"] line').css({
                            'stroke': '#F44040'
                        });
                    } else {

                        if (item <= 3) {

                            $('.timber-block .slider').attr('item-current', count);

                            $('.timber-block .slider .col-md-10 .col-md-4[item="1"]').css({
                                'margin-left': '15%'
                            });
                            $('.timber-block .slider .col-md-10 .col-md-4[item="3"]').css({
                                'margin-right': '-15%'
                            });
                            $('.timber-block .slider .col-md-10 .marker line').css({
                                'stroke': '#A6A8AB'
                            });

                            setTimeout(function() {
                                $(".timber-block .slider .col-md-10 .col-md-4").each(function() {
                                    if (parseInt($(this).attr('item')) <= count - 3) {
                                        $(this).css({
                                            'margin-left': '-33.333%'
                                        });
                                    } else {
                                        $(this).css({
                                            'margin-right': '-1px'
                                        });
                                        $('.timber-block .slider .col-md-10 .marker[item="' + parseInt($(this).attr('item')) + '"] line').css({
                                            'stroke': '#F44040'
                                        });
                                    }
                                });
                            }, 700);


                            return false;
                        }
                        var leftLast = item - 3;
                        var rightLast = item;


                        //Hidden left video-----------------------------------------
                        $('.timber-block .slider .col-md-10 .col-md-4[item="' + leftLast + '"]').css({
                            'margin-left': '0'
                        });

                        $('.timber-block .slider .col-md-10 .col-md-4[item="' + rightLast + '"]').css({
                            'margin-right': '-33.333%'
                        });

                        setTimeout(function() {
                            $('.timber-block .slider .col-md-10.container .col-md-4[item"' + rightLast + '"]').css({
                                'margin-right': '0%'
                            });
                        }, 600);
                        //Hidden left video-----------------------------------------


                        $('.timber-block .slider').attr('item-current', rightLast - 1);

                        //Change marker-----------------------------------------------
                        $('.timber-block .slider .col-md-10 .marker line').css({
                            'stroke': '#A6A8AB'
                        });

                        $('.timber-block .slider .col-md-10 .marker[item="' + leftLast + '"] line').css({
                            'stroke': '#F44040'
                        });
                        $('.timber-block .slider .col-md-10 .marker[item="' + (item - 2) + '"] line').css({
                            'stroke': '#F44040'
                        });
                        $('.timber-block .slider .col-md-10 .marker[item="' + (item - 1) + '"] line').css({
                            'stroke': '#F44040'
                        });
                    }
                });



                $('.page-question .btn-link').on('click', function() {
                    var offset = $('#form-screen').offset();
                    $("html, body").animate({
                        scrollTop: offset.top
                    }, 1000);
                });


                //Accordion-------------------------------------------------
                $('.timber-block .row[type="accordion"]').on('click', function() {
                    if ($(window).width() >= 1000) {
                        return false;
                    }

                    var marker = $(this).attr('marker');

                    if ($('.accordion-content#step-screen-' + marker + '-content').css('display') == 'none') {
                        $('#step-screen-' + marker + ' .col-accordion-btn .btn-link').css({
                            '-webkit-transform': 'rotate(180deg)',
                            'transform': 'rotate(180deg)'
                        });
                        $('.accordion-content#step-screen-' + marker + '-content').slideDown('slow');
                    } else {
                        $('#step-screen-' + marker + ' .col-accordion-btn .btn-link').css({
                            '-webkit-transform': 'rotate(360deg)',
                            'transform': 'rotate(360deg)'
                        });
                        $('.accordion-content#step-screen-' + marker + '-content').slideUp('slow');
                    }
                });
                //Handlers--------------------------------------------------------------------
                //Timber-block=========================================================================================================





                //Swipe for mobile devices=============================================================================================
                if ($(window).width() < 1000) {

                    //CLick on next------------------------------------------------------------------------------------------
                    $('.accordion-content').on('click', '.item.next', function() {
                        mobileSlider('right');
                    });
                    $('.accordion-content').on('click', '.item.prev', function() {
                        mobileSlider('left');
                    });
                    //CLick on next------------------------------------------------------------------------------------------


                    //Swipe function-----------------------------------------------------------------------------------------
                    $(function() {

                        if ($(window).width() < 1000) {
                            $("body").swipe({
                                fingers: 'all',
                                swipeStatus: swipeFunc,
                                allowPageScroll: "vertical"
                            });
                        }

                        function swipeFunc(event, phase, direction, distance) {
                            if (phase == 'start' || phase == 'move') {
                                //console.log( phase +" you have swiped " + distance + "px in direction:" + direction );
                                //Set offset-------------------------------------
                                if (phase == 'move') {
                                    if (direction == 'left' && distance >= 100) {
                                        mobileSlider('right');
                                        return false;
                                    } else if (direction == 'right' && distance >= 100) {
                                        mobileSlider('left');
                                        return false;
                                    }
                                }
                            } // phase start/move
                        } //swipeFunc function

                    });
                    //Swipe function-----------------------------------------------------------------------------------------
                } // /.For mobile devices



               



                //-------------------------------------------------------------------------------------------------------------------------			
                // /.My Jquery code
            });
        })(jQuery)
    } //.else jquery plugged 
} //.initJQ

initJQ(); // --- START JQuery Script


function msieversion() {

    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) // If Internet Explorer, return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf(".", msie)));
    else // If another browser, return 0
        return false;
} // .msieversion



function mobileSlider(action) {
    var item = $('.accordion-content .slider-mobile').attr('item-current');
    var count = $('.accordion-content .slider-mobile').attr('count-items');


    //Set next item
    if (action == 'right') {
        //Set prev item
        if (parseInt(item) - 1 < 1) {
            var prev = parseInt(count);
        } else {
            var prev = parseInt(item) - 1;
        }
        //Set next item
        if (parseInt(item) + 1 > parseInt(count)) {
            var next = 1;
        } else {
            var next = parseInt(item) + 1;
        }
        //Set new next item
        if (parseInt(next) + 1 >= parseInt(count)) {
            var newnext = 1;
        } else {
            var newnext = parseInt(next) + 1;
        }

        // alert( newnext );

        //Change content--------------------------------------------------
        //PREV
        $('.accordion-content .slider-mobile .items .item[item="' + prev + '"]').removeClass('prev');

        //CURRENT
        $('.accordion-content .slider-mobile .items .item[item="' + item + '"]').removeClass('active');
        $('.accordion-content .slider-mobile .items .item[item="' + item + '"]').addClass('prev');


        //NEXT
        $('.accordion-content .slider-mobile .items .item[item="' + next + '"]').removeClass('next');
        $('.accordion-content .slider-mobile .items .item[item="' + next + '"]').addClass('active');

        //NEW NEXT
        $('.accordion-content .slider-mobile .items .item[item="' + newnext + '"]').addClass('next');


        $('.accordion-content .slider-mobile').attr('item-current', next);

        //Change marker-----------------------------------------------
        $('.accordion-content .slider-mobile .markers .marker line').css({
            'stroke': '#A6A8AB'
        });
        $('.accordion-content .slider-mobile .markers .marker[item="' + next + '"] line').css({
            'stroke': '#F44040'
        });
    } else {
        //Set prev item
        if (parseInt(item) - 1 < 1) {
            var prev = parseInt(count);
        } else {
            var prev = parseInt(item) - 1;
        }
        //Set next item
        if (parseInt(item) + 1 > parseInt(count)) {
            var next = 1;
        } else {
            var next = parseInt(item) + 1;
        }
        //Set new next item
        if (parseInt(prev) - 1 < 1) {
            var newprev = parseInt(count);
        } else {
            var newprev = parseInt(prev) - 1;
        }


        //Change content--------------------------------------------------
        //NEXT
        $('.accordion-content .slider-mobile .items .item[item="' + next + '"]').removeClass('next');


        //CURRENT
        $('.accordion-content .slider-mobile .items .item[item="' + item + '"]').removeClass('active');
        $('.accordion-content .slider-mobile .items .item[item="' + item + '"]').addClass('next');


        //PREV
        $('.accordion-content .slider-mobile .items .item[item="' + prev + '"]').removeClass('prev');
        $('.accordion-content .slider-mobile .items .item[item="' + prev + '"]').addClass('active');



        //NEW PREV
        $('.accordion-content .slider-mobile .items .item[item="' + newprev + '"]').addClass('prev');


        $('.accordion-content .slider-mobile').attr('item-current', prev);

        //Change marker-----------------------------------------------
        $('.accordion-content .slider-mobile .markers .marker line').css({
            'stroke': '#A6A8AB'
        });
        $('.accordion-content .slider-mobile .markers .marker[item="' + prev + '"] line').css({
            'stroke': '#F44040'
        });
    }


} // .mobileSlider


function doOnOrientationChange() {
    switch (window.orientation) {
        case -90:
        case 90:
            //alert('landscape');
            break;
        default:
            //alert('portrait');
            break;
    }



    //Set home-arrow tablet
    if ($(window).width() >= 768 && $(window).width() < 1000) {
        var borderWidth = $(window).width() / 2;
        $('.home-arrow-tablet .arrow').css({
            'border-left-width': borderWidth,
            'border-right-width': borderWidth
        });
    } else if ($(window).width() < 768) {
        var borderWidth = $(window).width() / 2;
        $('.home-arrow-mobile .arrow').css({
            'border-left-width': borderWidth,
            'border-right-width': borderWidth
        });
    }

    //Set home-arrow
    if ($(window).width() < 1000) {
        var borderWidth = $(window).width() / 2;
        $('.form-arrow-mobile .arrow').css({
            'border-left-width': borderWidth,
            'border-right-width': borderWidth
        });
    }


    //Set home-arrow
    if ($(window).width() >= 768 && $(window).width() < 1000) {
        var borderWidth = $(window).width() / 2;
        $('.contact-block .footer-home-arrow-tablet .arrow').css({
            'border-left-width': borderWidth,
            'border-right-width': borderWidth
        });

        $('.contact-block .footer-logo-arrow-tablet .arrow').css({
            'border-left-width': borderWidth,
            'border-right-width': borderWidth
        });
    } else if ($(window).width() < 768) {
        var borderWidth = $(window).width() / 2;
        $('.contact-block .footer-home-arrow-mobile .arrow').css({
            'border-left-width': borderWidth,
            'border-right-width': borderWidth
        });

        $('.contact-block .footer-logo-arrow-mobile .arrow').css({
            'border-left-width': borderWidth,
            'border-right-width': borderWidth
        });
    }


    if ($(window).width() >= 768 && $(window).width() < 1000) {
        var borderWidth = $(window).width() / 2;
        $('.block-start .sikkens-home-arrow .arrow').css({
            'border-left-width': borderWidth,
            'border-right-width': borderWidth
        });
    } else if ($(window).width() < 768) {
        var borderWidth = $(window).width() / 2;
        $('.block-start .sikkens-home-arrow .arrow').css({
            'border-left-width': borderWidth,
            'border-right-width': borderWidth
        });
    }


} //doOnOrientationChange



function funcToogleRedHouseColor(scrollVAL) {
    //Color-block house------------------------
    var startScreenHeight = parseInt($('#start-screen').height());

    var houseColorHeight = parseInt($('#color-screen .home-arrow').height());
    var houseColorOffset = parseInt($('#color-screen .home-arrow').offset().top);

    var blockColorHeight = parseInt($('#color-screen').height());
    var blockColorOffset = parseInt($('#color-screen').offset().top);
    //Color-block house------------------------

    var windowHEIGHT = $(window).height();


    //Fixed house for color-screen-----------------------------------------------
    if (scrollVAL >= houseColorHeight && scrollVAL <= blockColorOffset) {
        $('#color-screen .home-arrow').css({
            'position': 'fixed',
            'top': (windowHEIGHT - houseColorHeight) + 'px',
            'right': '70px'
        });
    } else if (scrollVAL > blockColorOffset) {
        $('#color-screen .home-arrow').css({
            'position': 'absolute',
            'bottom': '0px',
            'right': '70px'
        });
    } else {
        $('#color-screen .home-arrow').css({
            'position': 'absolute',
            'top': '0px',
            'right': '70px'
        });
    }
    //Fixed house for color-screen-----------------------------------------------
} // .funcToogleRedHouseColor

function funcToogleRedHouseForm(scrollVAL) {
    //Form-block house------------------------
    var windowHEIGHT = $(window).height();


    //Fixed house for color-screen-----------------------------------------------
    if (scrollVAL >= window.houseFormOffset - windowHEIGHT + window.houseFormHeight + 25 && scrollVAL <= window.formScreenOffset + 25) {
        //alert('OK');

        $('#form-screen .home-arrow').css({
            'position': 'fixed',
            'top': (windowHEIGHT - window.houseFormHeight + 25) + 'px',
            'right': '70px'
        });
    } else if (scrollVAL > window.formScreenOffset + 25) {
        $('#form-screen .home-arrow').css({
            'position': 'absolute',
            'bottom': '0px',
            'right': '70px'
        });
    } else {
        $('#form-screen .home-arrow').css({
            'position': 'absolute',
            'top': '0px',
            'right': '70px'
        });
    }
    //Fixed house for form-screen-----------------------------------------------
} // .funcToogleRedHouseForm


function timberLoadCovers() {

    $.post('php/getCovers.php', function(data) {


        //Cleare content-----------------------------------------

        if (data.items == '[]') {
            $('#step-screen-7 .slider .items').html('<p> Нет покрытий...</p>');
            $('#step-screen-7-content .slider-mobile .items').html('<p> Нет покрытий...</p>');
            return false;
        }


        //Set slider parameters
        //DESKTOP
        if (data.items.length >= 3) {
            $('#step-screen-7 .slider').attr('item-current', '3');
        } else {
            $('#step-screen-7 .slider').attr('item-current', data.items.length);
        }
        $('#step-screen-7 .slider').attr('count-items', data.items.length);

        //MOBILE
        $('#step-screen-7 .slider-mobile').attr('item-current', '1');
        $('#step-screen-7 .slider-mobile').attr('count-items', data.items.length);
        //Set slider parameters




        //Go-round data------------------------------------------
        $('#step-screen-7 .slider .items').html('');
        $('#step-screen-7-content .slider-mobile .items').html('');

        $.each(data.items, function(i) {
            $('#step-screen-7 .slider .items').append(data.items[i]);
            $('#step-screen-7-content .slider-mobile .items').append(data.items_mobile[i]);
        });

        $('#step-screen-7 .slider .items').append(data.markersHTML);
        $('#step-screen-7-content .slider-mobile').append(data.markersHTML);

        if (data.items.length <= 3) {
            $('#step-screen-7 .slider .slider-arrow').fadeOut('slow');
        }
        $('#step-screen-7 .slider').attr('count-items', data.items.length);



        //Load arrows slider
        if (msieversion() == false) {
            $('.timber-block .slider .items .marker').load('img/icons/slider-marker.svg', function() {
                $('.timber-block .slider .items .marker[item="1"] line').css({
                    'stroke': '#F44040'
                });
                $('.timber-block .slider .items .marker[item="2"] line').css({
                    'stroke': '#F44040'
                });
                $('.timber-block .slider .items .marker[item="3"] line').css({
                    'stroke': '#F44040'
                });
            });

            $('.accordion-content .slider-mobile .marker').load('img/icons/slider-marker.svg', function() {
                $('.accordion-content .slider-mobile .marker[item="1"] line').css({
                    'stroke': '#F44040'
                });
            });

            $('.timber-block .slider .arrow-left').load('img/icons/timber-slider-left.svg');
            $('.timber-block .slider .arrow-right').load('img/icons/timber-slider-right.svg');
        } else {
            $('.timber-block .slider .items .marker').load('img/icons/slider-marker-ie.svg', function() {
                $('.timber-block .slider .items .marker[item="1"] line').css({
                    'stroke': '#F44040'
                });
                $('.timber-block .slider .items .marker[item="2"] line').css({
                    'stroke': '#F44040'
                });
                $('.timber-block .slider .items .marker[item="3"] line').css({
                    'stroke': '#F44040'
                });
            });

            $('.accordion-content .slider-mobile .marker').load('img/icons/slider-marker.svg', function() {
                $('.accordion-content .slider-mobile .marker[item="1"] line').css({
                    'stroke': '#F44040'
                });
            });

            $('.timber-block .slider .arrow-left').load('img/icons/timber-slider-left-ie.svg');
            $('.timber-block .slider .arrow-right').load('img/icons/timber-slider-right-ie.svg');
        }


    }, 'json');

} // .timberLoadCovers



