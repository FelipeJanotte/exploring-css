const sections = document.querySelectorAll('section');
const bubble = document.querySelector('.bubble');
const grandients = [
  "linear-gradient(0deg, rgba(251,227,63,1) 0%, rgba(198,0,143,1) 100%)",
  "linear-gradient(0deg, rgba(255,87,20,1) 0%, rgba(227,121,8,1) 100%)",
  "linear-gradient(0deg, rgb(3,122,217) 35%, rgba(9,38,121,1) 100%)"
];

const options = {
  threshold: 0.7
}

let observer =  new IntersectionObserver(navCheck, options);

function navCheck(entries){
  entries.forEach(entry => {
    console.log(entry);
    const className = entry.target.className;
    const activeAnchor = document.querySelector(`[data-page=${className}]`);
    const coords = activeAnchor.getBoundingClientRect();
    const directions = {
      height: coords.height,
      width: coords.width,
      top: coords.top,
      left: coords.left
    }
    if(entry.isIntersecting){
      bubble.style.setProperty('left', `${directions.left}px`)
      bubble.style.setProperty('top', `${directions.top}px`)
      bubble.style.setProperty('width', `${directions.width}px`)
      bubble.style.setProperty('height', `${directions.height}px`)
    }
  });
}

sections.forEach(section => {
  observer.observe(section);
})