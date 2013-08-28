function doPlay(soundId) {
  var my_media = new Media(soundId+".mp3",
    function() {
	  my_media.release();
    },
    function(err) {
	my_media.release();
  });
  my_media.play();
}