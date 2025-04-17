var PrintButton1 = new Image();

var PrintButton2 = new Image();

var logo1 = new Image();

var logo2 = new Image();

// Set image sources

PrintButton1.src = "images/print1.png"; 

PrintButton2.src = "images/print2.png";

logo1.src = "images/logo1.png";

logo2.src = "images/logo2.png"





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
		
		function swapImage(imgID) {

			var theImage = document.getElementById('theImage');
			var textDiv = document.getElementById('bottomText');

			var newImg;
			var textTitle;

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
