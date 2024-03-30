// import './js/1-gallery';
// import './js/2-form';
const linkListItems = document.querySelectorAll('.linkList');

linkListItems.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault(); 

    const href = item.querySelector('a').getAttribute('href'); 

    window.location.href = href; 
  });
});