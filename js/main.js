(function(){
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


      sequence.push( $(this).data('beep'));
      console.info(sequence);

      $(".total-beeps").text(sequence.length);

  });


  var greenSound = document.getElementById('green-sound');
  var redSound = document.getElementById('red-sound');
  var yellowSound = document.getElementById('yellow-sound');
  var blueSound = document.getElementById('blue-sound');


  $("#color-green").click(function() {
    document.getElementById('green-sound').play();
  })
  $("#color-red").click(function() {
    document.getElementById('red-sound').play();
  })
  $("#color-yellow").click(function() {
    document.getElementById('yellow-sound').play();
  })
  $("#color-blue").click(function() {
    document.getElementById('blue-sound').play();
  })    



}());