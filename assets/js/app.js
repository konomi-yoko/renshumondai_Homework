


$(function(){

// Q1
	$('#q1-btn').on('click',function(){
		$(this).addClass('small-btn');
	});

// Q2
	$('#q2-btn').on('mouseover',function(){
		$(this).css('opacity','0.2');
	});

// Q3
	$('#q3-btn')
		.on('mouseover',function(){
			$(this).css('opacity','0.2');
		})
		.on('mouseleave',function(){
			$(this).css('opacity','0.1');
		});

// Q4
	$('#q4-btn').on('click',function(){
		$('#q4-text').text('任意の文字に変更してみた')
	});

// Q5
	$('#q5-btn').on('click',function(){
		$('.orange').before('<li class="apple">りんご</li>');
	});

	// Q6
	$('#q6-btn').on('click',function(){
		$('.q6-text').after('<p class="red">追加</p>')
	});

// Q7
	$('#q7-btn').on('click',function(){
		$(this).toggleClass('on');
	});

// Q8
	$('#q8-btn').on('click',function(){
	$(this)
	.siblings()
	.slideToggle();
	});

// Q9
	$('#q9-btn').on('click',function(){
		$('body , html').animate({scrollTop:0},500);
	});

// Q10
	$('.q10-show-btn').on('click',function(){
		$('.q10-target').fadeIn(1000);
	});
	$('.q10-hide-btn').on('click',function(){
		$('.q10-target').fadeOut(1000);
	});

// Q11
	$(window).on('scroll',function(){
		let q11_position = $('#q11').offset().top;
		let = wh = $(window).height();
		let now_position = $(window).scrollTop();
		if (q11_position <= wh + now_position){
			$('.q11-target').removeClass('hide');
		}else {
			$('.q11-target').addClass('hide');
		}
	});


	$('#q12-btn').on('click',function(){
		$('.q12-target').toggleClass('hide');
	});


});













