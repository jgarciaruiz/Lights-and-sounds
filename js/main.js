(function(){
    var sequence = new Array();     
  $(".col").on("touchstart", function(e){
    
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


      sequence.push( $(this).data('beep'));
      console.info(sequence);

      $(".total-beeps").text(sequence.length);

  });


  var greenSound = document.getElementById('green-sound');
  var redSound = document.getElementById('red-sound');
  var yellowSound = document.getElementById('yellow-sound');
  var blueSound = document.getElementById('blue-sound');


  $("#color-green").on("touchstart", function(){
    document.getElementById('green-sound').play();
     AndroidFunction.onClickButton(1);
  })
  $("#color-red").on("touchstart", function(){
    document.getElementById('red-sound').play();
     AndroidFunction.onClickButton(2);
  })
  $("#color-yellow").on("touchstart", function(){
    document.getElementById('yellow-sound').play();
     AndroidFunction.onClickButton(3);
  })
  $("#color-blue").on("touchstart", function(){
    document.getElementById('blue-sound').play();
     AndroidFunction.onClickButton(4);
  })       



}());