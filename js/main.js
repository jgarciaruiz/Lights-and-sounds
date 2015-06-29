(function(){
  
  //init all sounds but instantly pause them, so they can be reached on mobile devices 
  playSound($(".col").data('beep'));
  player.play();
  player.pause();


  var sequence = new Array();     
	$(".col").on("click", function(e){
    
		var x = e.pageX;
		var y = e.pageY;
		var clickY = y - $(this).offset().top;
		var clickX = x - $(this).offset().left;
    var box = this;
    
    var setX = parseInt(clickX);
    var setY = parseInt(clickY);
    $(this).find("svg").remove();
    $(this).append('<svg><circle cx="'+setX+'" cy="'+setY+'" r="'+0+'"></circle></svg>');
    

      var c = $(box).find("circle");
      c.animate(
        {
          "r" : $(box).outerWidth()/2
        },
        {
          easing: "easeOutQuad",
          duration: 400,
         	step : function(val){
						c.attr("r", val);
					}
        }
      );

      playSound($(this).data('beep'));

      sequence.push( $(this).data('beep'));
      console.info(sequence);

      $(".total-beeps").text(sequence.length);

  });


  function playSound(beep) {
    var audio = $('<audio autoplay></audio>');
    audio.append('<source src="sounds/' + beep + '.ogg" type="audio/ogg" />');
    audio.append('<source src="sounds/' + beep + '.mp3" type="audio/mp3" />');
    $('[data-action=sound]').html(audio);
  }


  //iA
  function randomNumber() {
    return Math.floor((Math.random()*4)+1);
  }
  

}());