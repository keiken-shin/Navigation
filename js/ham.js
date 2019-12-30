/*--- Hamigation 
----------------------------------------------------*/

// Lets get the DOM
const hammy = document.querySelector('.hammy');
const navLinks = document.querySelectorAll('.nav-link');

// Set state for hamigation
let state = false;

// Listen for click event on hammy
hammy.addEventListener('click', e => {
    const title = document.querySelector('.logo-title');
    const navBlob = document.querySelector('.nav-blob');

    if(state === false){
        title.style.color = '#fff';
        title.style.textStrokeColor = '#fff';
        title.style.transition = 'all .3s ease-in-out';
        navBlob.style.backgroundColor = '#000';
        navBlob.style.top = `0px`;
        navBlob.style.transition = 'all .3s ease-in-out';
        state = true;
    }else{
        title.style.color = '#000';
        title.style.textStrokeColor = '#000';
        title.style.transition = 'all .3s ease-in-out';
        navBlob.style.backgroundColor = '#fff';
        navBlob.style.top = `-90vh`;
        navBlob.style.transition = 'all .3s ease-in-out';
        state = false;
    }

})

// Listen on navLinks hover
Array.from(navLinks).forEach(e => {
    e.addEventListener('mouseover', item => {
        // const dotContainer = e.querySelector('.dotContainer');
        // dotContainer.style.transform = 'matrix(0.5, 0, 0, 0.5, 0, 0)';
        // dotContainer.querySelector('div').style.transform = ''
        // dotContainer.style.opacity = '1';
        // e.querySelector('.label').style.transform = 'matrix(1, 0, 0, 1, 17, 0)';
    });
})
