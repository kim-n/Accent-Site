$(function() {

    //DEFAULT
    $("section.spanish").hide()

    //SWITCH LANGUAGES
    var changeSection = function (event) {
      event.preventDefault();
      $("section").hide();
      $("section."+this.className).show();
     
      other_language = this.className == "english" ? "spanish" : "english"
       $("body > div").removeClass(other_language)
       $("body > div").addClass(this.className)
       
      document.title = document.title.substring(0,24) + " " + this.className;
    };

    $("a.english").click(changeSection);
    $("a.spanish").click(changeSection);

    var makeBlink = function (domObject, firstColor, secondColor) {
        $(domObject).css({"border-color":firstColor})
        setTimeout(function(){$(domObject).css({"border-color":secondColor})}, 300)
        setTimeout(function(){$(domObject).css({"border-color":firstColor})}, 600)
        setTimeout(function(){$(domObject).css({"border-color":secondColor})}, 900)
    }
    
    //PLAY SOUND
    $("section > a").on("click", function (event) {
      event.preventDefault();
      accent = this.className;
  
      words = $("input").val();
  
      if (words == ""){
          //make input field blink
          makeBlink('input', "red", "rgba(33, 171, 205, .5)")
      }
      else if (typeof InstallTrigger !== 'undefined'){
        //Firefox   
      }
      else {
        $('footer').empty();
        $('footer').append('<iframe src="http://translate.google.com/translate_tts?tl=' + accent + '&q=' + words + '" style="display:none;"></iframe>')
      };

    });
    
    //DISABLE FORM SUBMIT (HITTING ENTER KEY IN INPUT AREA)
    $('form').on("submit", function (event) {
        event.preventDefault();
        console.log("here")
        makeBlink('section > a',"white", "#FF9966")
    });
});