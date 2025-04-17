var PrintButton1 = new Image();

var PrintButton2 = new Image();

var logo1 = new Image();

var logo2 = new Image();


// Preload images

if (document.images) {

    PrintButton1.src = "images/print1.png";

    PrintButton2.src = "images/print2.png";

    logo1.src = "images/logo1.png";

    logo2.src = "images/logo2.png";

}


// Arrays for thumbnail swapping

var imgArray = new Array(
  'image1lg.jpg',
  'image2lg.jpg',
  'image3lg.jpg',
  'image4lg.jpg'
);


		var titleArray = new Array(
			'Bird and Dog',
			'Hunting Dogs',
			'Kids and Dog',
			'Cat and Dog'
			
		);


var imgPath = "images/fullsize/";


// Image swap function for thumbnails

function swapImage(imgID) {

    var theImage = document.getElementById('theImage');
    var textDiv = document.getElementById('bottomText');

    var newImg = imgArray[imgID];
    var textTitle = titleArray[imgID];

newImg = imgArray[imgID];
			theImage.src = imgPath + newImg;

			textTitle=titleArray[imgID];
	textDiv.innerHTML = textTitle;
		}
			
		function preloadImages() {		
			for(var i = 0; i < imgArray.length; i++) {
				var tmpImg = new Image;
				tmpImg.src = imgPath + imgArray[i];
			}
		}


// Preload function for all images

function preloadImages() {

    // Preload thumbnail images

    for(var i = 0; i < imgArray.length; i++) {

        var tmpImg = new Image();

        tmpImg.src = imgPath + imgArray[i];

    }

    

    // Preload rollover images

    var rolloverImages = [

        PrintButton1.src,

        PrintButton2.src,

        logo1.src,

        logo2.src

    ];

    

    for(var j = 0; j < rolloverImages.length; j++) {

        var tmpRollover = new Image();

        tmpRollover.src = rolloverImages[j];

    }

}


// Add window onload event if not already present in HTML

if (window.addEventListener) {

    window.addEventListener('load', preloadImages);

} else if (window.attachEvent) {

    window.attachEvent('onload', preloadImages);

}