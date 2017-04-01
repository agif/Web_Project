        // Slider
        $(document).ready(function(){
        	var nilai = parseInt($('.bar').attr('nilai'));
                // Filters - Slider 1
        	$('.slider-min').css({left: nilai});
        	$('.slider-max').css({left: nilai});
        	$('.range-min').css({width: nilai+5});
        	$('.range-max').css({width: nilai+5});
        	$('#nilai-min').val(nilai);
        	$('#nilai-max').val(nilai);

                // Filters - Slider 2
                $('.slider-min2').css({left: nilai});
                $('.slider-max2').css({left: nilai});
                $('.range-min2').css({width: nilai+5});
                $('.range-max2').css({width: nilai+5});
                $('#nilai-min2').val(nilai);
                $('#nilai-max2').val(nilai);

                // Filters - Slider 3
                $('.slider-min3').css({left: nilai});
                $('.slider-max3').css({left: nilai});
                $('.range-min3').css({width: nilai+5});
                $('.range-max3').css({width: nilai+5});
                $('#nilai-min3').val(nilai);
                $('#nilai-max3').val(nilai);

                // Filters - Slider 4
                $('.slider-min4').css({left: nilai});
                $('.slider-max4').css({left: nilai});
                $('.range-min4').css({width: nilai+5});
                $('.range-max4').css({width: nilai+5});
                $('#nilai-min4').val(nilai);
                $('#nilai-max4').val(nilai);

                // Method - Filters - Slider 1
        	$('.slider-min').mousedown(function(e){
        		var offsetX=e.pageX-parseInt($(this).css('left'));
        		var slider = $(this);

        		slider.addClass('active');

        		$(window).mousemove(function(e){
        			var posX = e.pageX - offsetX;

        			var barW = parseInt($('.bar').width());
        			var h    = parseInt(slider.width());

        			//Membatasi Drag slider dengan lebar bar
        			if(posX <= 0) posX = 4;
        			if(posX + h >= barW) posX = barW - h;

        			if(slider.hasClass('active')){
        				//Menempatkan slider sesuai mouse
        				slider.css({left: posX});
        				$('.range-min').css({width: posX});
        				$('#nilai-min').val(posX * 4 - 16);
        			}
        		});

        		$(window).mouseup(function(e){
        			slider.removeClass('active');
        		});
        	});

        	$('.slider-max').mousedown(function(e){
        		var offsetX=e.pageX-parseInt($(this).css('left'));
        		var slider = $(this);

        		slider.addClass('active');

        		$(window).mousemove(function(e){
        			var posX = e.pageX - offsetX;

        			var barW = parseInt($('.bar').width());
        			var h    = parseInt(slider.width());

        			//Membatasi Drag slider dengan lebar bar
        			if(posX <= 0) posX = 4;
        			if(posX + h >= barW) posX = barW - h;

        			if(slider.hasClass('active')){
        				//Menempatkan slider sesuai mouse
        				slider.css({left: posX});
        				$('.range-max').css({width: posX});
        				$('#nilai-max').val(posX * 4 - 16);
        			}
        		});

        		$(window).mouseup(function(e){
        			slider.removeClass('active');
        		});
        	});

                // Method - Filters - Slider 2
                $('.slider-min2').mousedown(function(e){
                        var offsetX=e.pageX-parseInt($(this).css('left'));
                        var slider = $(this);

                        slider.addClass('active');

                        $(window).mousemove(function(e){
                                var posX = e.pageX - offsetX;

                                var barW = parseInt($('.bar').width());
                                var h    = parseInt(slider.width());

                                //Membatasi Drag slider dengan lebar bar
                                if(posX <= 0) posX = 4;
                                if(posX + h >= barW) posX = barW - h;

                                if(slider.hasClass('active')){
                                        //Menempatkan slider sesuai mouse
                                        slider.css({left: posX});
                                        $('.range-min2').css({width: posX});
                                        $('#nilai-min2').val(posX * 4 - 16);
                                }
                        });

                        $(window).mouseup(function(e){
                                slider.removeClass('active');
                        });
                });

                $('.slider-max2').mousedown(function(e){
                        var offsetX=e.pageX-parseInt($(this).css('left'));
                        var slider = $(this);

                        slider.addClass('active');

                        $(window).mousemove(function(e){
                                var posX = e.pageX - offsetX;

                                var barW = parseInt($('.bar').width());
                                var h    = parseInt(slider.width());

                                //Membatasi Drag slider dengan lebar bar
                                if(posX <= 0) posX = 4;
                                if(posX + h >= barW) posX = barW - h;

                                if(slider.hasClass('active')){
                                        //Menempatkan slider sesuai mouse
                                        slider.css({left: posX});
                                        $('.range-max2').css({width: posX});
                                        $('#nilai-max2').val(posX * 4 - 16);
                                }
                        });

                        $(window).mouseup(function(e){
                                slider.removeClass('active');
                        });
                });

                // Method - Filters - Slider 3
                $('.slider-min3').mousedown(function(e){
                        var offsetX=e.pageX-parseInt($(this).css('left'));
                        var slider = $(this);

                        slider.addClass('active');

                        $(window).mousemove(function(e){
                                var posX = e.pageX - offsetX;

                                var barW = parseInt($('.bar').width());
                                var h    = parseInt(slider.width());

                                //Membatasi Drag slider dengan lebar bar
                                if(posX <= 0) posX = 9;
                                if(posX + h >= barW) posX = barW - h;

                                if(slider.hasClass('active')){
                                        //Menempatkan slider sesuai mouse
                                        slider.css({left: posX});
                                        $('.range-min3').css({width: posX});
                                        $('#nilai-min3').val(posX * 10 - 90);
                                }
                        });

                        $(window).mouseup(function(e){
                                slider.removeClass('active');
                        });
                });

                $('.slider-max3').mousedown(function(e){
                        var offsetX=e.pageX-parseInt($(this).css('left'));
                        var slider = $(this);

                        slider.addClass('active');

                        $(window).mousemove(function(e){
                                var posX = e.pageX - offsetX;

                                var barW = parseInt($('.bar').width());
                                var h    = parseInt(slider.width());

                                //Membatasi Drag slider dengan lebar bar
                                if(posX <= 0) posX = 9;
                                if(posX + h >= barW) posX = barW - h;

                                if(slider.hasClass('active')){
                                        //Menempatkan slider sesuai mouse
                                        slider.css({left: posX});
                                        $('.range-max3').css({width: posX});
                                        $('#nilai-max3').val(posX * 10 - 90);
                                }
                        });

                        $(window).mouseup(function(e){
                                slider.removeClass('active');
                        });
                });

                // Method - Filters - Slider 4
                $('.slider-min4').mousedown(function(e){
                        var offsetX=e.pageX-parseInt($(this).css('left'));
                        var slider = $(this);

                        slider.addClass('active');

                        $(window).mousemove(function(e){
                                var posX = e.pageX - offsetX;

                                var barW = parseInt($('.bar').width());
                                var h    = parseInt(slider.width());

                                //Membatasi Drag slider dengan lebar bar
                                if(posX <= 0) posX = 4;
                                if(posX + h >= barW) posX = barW - h;

                                if(slider.hasClass('active')){
                                        //Menempatkan slider sesuai mouse
                                        slider.css({left: posX});
                                        $('.range-min4').css({width: posX});
                                        $('#nilai-min4').val(posX * 4 - 16);
                                }
                        });

                        $(window).mouseup(function(e){
                                slider.removeClass('active');
                        });
                });

                $('.slider-max4').mousedown(function(e){
                        var offsetX=e.pageX-parseInt($(this).css('left'));
                        var slider = $(this);

                        slider.addClass('active');

                        $(window).mousemove(function(e){
                                var posX = e.pageX - offsetX;

                                var barW = parseInt($('.bar').width());
                                var h    = parseInt(slider.width());

                                //Membatasi Drag slider dengan lebar bar
                                if(posX <= 0) posX = 4;
                                if(posX + h >= barW) posX = barW - h;

                                if(slider.hasClass('active')){
                                        //Menempatkan slider sesuai mouse
                                        slider.css({left: posX});
                                        $('.range-max4').css({width: posX});
                                        $('#nilai-max4').val(posX * 4 - 16);
                                }
                        });

                        $(window).mouseup(function(e){
                                slider.removeClass('active');
                        });
                });
        });