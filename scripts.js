$(function(){

  var currentImg = 0;
  var targetImages = $('section img');
  var howManyImgs = targetImages.length;

  targetImages.eq(0).show();

  var prev = $('.prev');
  var next = $('.next');

  var autoGo;
  autoGallery();

  function runThruImg(currentImg) {
    var imageItem = targetImages.eq(currentImg);
    targetImages.hide();
    imageItem.css('display','inline');
  }

  function autoGallery() {
    autoGo = setInterval(function () {
    currentImg += 1;
    if (currentImg > howManyImgs - 1) {
      currentImg = 0;
    }
    runThruImg(currentImg);
    }, 3000);
  }

  $(next).click(function() {
    clearInterval(autoGo);
    currentImg += 1;
    if (currentImg > howManyImgs - 1)  {
      currentImg = 0;
    }
    runThruImg(currentImg);
    autoGallery();
  });

  $(prev).click(function() {
    clearInterval(autoGo);
    currentImg -= 1;
    if (currentImg < 0)  {
      currentImg = howManyImgs - 1;
    }
    runThruImg(currentImg);
    autoGallery();
  });

});