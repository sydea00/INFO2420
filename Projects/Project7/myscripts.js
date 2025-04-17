window.onload = function() {

    // Create and set image objects

    window.PrintButton1 = new Image();

    window.PrintButton2 = new Image();

    window.logo1 = new Image();

    window.logo2 = new Image();


    // Set image sources

    PrintButton1.src = "images/print1.png"; 

    PrintButton2.src = "images/print2.png";

    logo1.src = "images/logo1.png";

    logo2.src = "images/logo2.png";


    // Preload images

    preloadImages();

};


// Array for fullsize images

var imgArray = [

    'image1Lg.jpg',

    'image2Lg.jpg',

    'image3Lg.jpg',

    'image4Lg.jpg'

];


// Array for image titles

var titleArray = [

    'Bird and Dog',

    'Hunting Dogs',

    'Kids and Dog',

    'Cat and Dog'

];


// Set path to fullsize images

var imgPath = "images/";


// Function to swap images

function swapImage(imgID) {

    var theImage = document.getElementById('theImage');

    var textDiv = document.getElementById('bottomText');


    if (theImage && textDiv) {

        var newImg = imgArray[imgID];

        var textTitle = titleArray[imgID];


        theImage.src = imgPath + newImg;

        textDiv.innerHTML = textTitle;

    }

}


// Function to preload images

function preloadImages() {

    for(var i = 0; i < imgArray.length; i++) {

        var tmpImg = new Image();

        tmpImg.src = imgPath + imgArray[i];

    }

}