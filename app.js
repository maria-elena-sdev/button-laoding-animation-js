const loadButton = document.querySelector('#loadButton');
const loader = document.querySelector('#loader');
const demoForm = document.querySelector('#my-form');

loadButton.addEventListener('click',()=> {
    // Disable the Button
    // and prevent further clicks
    loadButton.disabled = true;
    loader.style.display = 'inline-block';

    setTimeout(()=>{
        // Restore the button state
        // after the operation is document
        loadButton.disabled=false;
        loader.style.display = 'none';
        demoForm.reset();
    }, 2000);
});