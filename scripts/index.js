const IMAGES = 
[
    "https://upload.wikimedia.org/wikipedia/commons/0/02/OSIRIS_Mars_true_color.jpg",
    "https://solarsystem.nasa.gov/system/stellar_items/image_files/38_saturn_1600x900.jpg",
    "https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/05/02/11/jupiter-red-spot.jpg?w968h681",
];

// function that generates the thumbnail div 
// function that generates an img element 

function createImage(imageURL) {
    const theImage = document.createElement ('img');

    // theImage.src = imageURL;
    theImage.setAttribute('src', imageURL);

    // add event listener to image
    theImage.addEventListener('click', function () {
        console.log('hello!');
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

// just draww the thumbnail to the body 
let firstImageURL = IMAGES[0];
let testThumb = createThumbnail(firstImageURL);
document.body.appendChild(testThumb);


