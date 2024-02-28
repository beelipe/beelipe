const elements = document.querySelectorAll('.viewport');
const options = {
  root: null,
  rootMargin: '0px',
  threshold: .5
}
const callbacks = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
        entry.target.classList.add('active');
    }
  });
}
let observer = new IntersectionObserver(callbacks, options);
elements.forEach(element => {
  observer.observe(element);
});

/* Name Validation */
function success() {
  if((document.getElementById("formName").value==="") || (document.getElementById("formName").value==="Bitte Namen eingeben")) { 
    alert("true");
    document.getElementById('sendButton').disabled = true; 
  } else { 
    document.getElementById('sendButton').disabled = false;
  }
};

/* Side Scroller Fotobar */
let fotoBanner1 = document.getElementById('fotoBanner1');
let fotoBanner2 = document.getElementById('fotoBanner2');

window.addEventListener('scroll', () => {
  let { scrollY } = window;

  if ( window.innerWidth < 600 ) {
    /* fotoBanner1.style.marginLeft = -0.25 * scrollY + 'px';
    fotoBanner2.style.marginLeft = -0.15 * scrollY + (window.innerWidth/5) + 'px';*/
  }
});