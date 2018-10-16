const IMAGES = 
[
    "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
    "https://solarsystem.nasa.gov/system/stellar_items/image_files/38_saturn_1600x900.jpg",
    "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/02/11/jupiter-red-spot.jpg?w968h681",
];
const thumbnailContainer = document.querySelector('[data-container]');
const outputElement = document.querySelector('[data-output]');
const modalElement = document.querySelector('[data-modal]');
// console.log(modalElement)
// function that generates the thumbnail div 
// function that generates an img element 

function createImage(imageURL) {
    const theImage = document.createElement ('img');

    // theImage.src = imageURL;
    theImage.setAttribute('src', imageURL);

    // add event listener to image
    theImage.addEventListener('click', function (event) {
        
        // the element that got clicked is accessible 
        // as 'event.target
        console.log(event.target.src);
        outputElement.setAttribute('src',event.target.src);
        
        // remove is more specific
        // modalElement.classList.toggle('modal-hidden');

        modalElement.classList.remove('modal-hidden')

        // I could can now set the outputElement's src to event.target.src
    });

    return theImage;
}
// function generates the thumbnail div
function createThumbnail(url) {
    const theContainer = document.createElement('div')
    theContainer.classList.add('thumbnail-item');
    
    theContainer.appendChild(createImage(url));
    
    return theContainer;

}

// just draw the thumbnail to the body
// loop through the images array
// for each image , call the anonymous function
// the anonymous function should expect to receive an image url
function main() {
IMAGES.forEach(function (planet){
//  We pass that image URL to createThumbnail function
let theThumbnail = createThumbnail(planet);
// displays picture to body
thumbnailContainer.appendChild(theThumbnail);
});

window.addEventListener('keydown', function (event) {

    // console.log('you pressed a key');
    // console.log(event);
    // Escape Key
    // Key code 27

    if(event.keyCode === 27) {
    console.log('I want to hide the modal!');
    modalElement.classList.add('modal-hidden')

    }
   
});



modalElement.addEventListener('click', function (event) {

    if(event.target === onmousedown); {
    console.log('Close me')
    modalElement.classList.add('modal-hidden')
    }
});

window.addEventListener('keydown', function (event) {
 console.log(event.keyCode);

 if (event.keyCode === 37) {
     console.log('go to the previous image');
 } else if (event.keyCode === 39) {
     console.log('go to the next image');
 }

});

}

main ();

