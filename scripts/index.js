const IMAGES = 
[
    "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
    "https://solarsystem.nasa.gov/system/stellar_items/image_files/38_saturn_1600x900.jpg",
    "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/02/11/jupiter-red-spot.jpg?w968h681",
];

const outputElement = document.querySelector('[data-output]');
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
IMAGES.forEach(function (planet){
// let firstImageURL = IMAGES[2];
// creates variable for function to receive 
let testThumb = createThumbnail(planet);
// displays picture to body
document.body.appendChild(testThumb);
});





