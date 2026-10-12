const card=document.getElementById('resumeCard');
const scene=document.getElementById('scene');
const glow=document.querySelector('.cursor-glow');
scene.addEventListener('mousemove',e=>{const r=scene.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;card.style.transform=`rotateY(${x*18}deg) rotateX(${y*-18}deg) translateZ(12px)`});
scene.addEventListener('mouseleave',()=>card.style.transform='rotateY(0deg) rotateX(0deg)');
document.addEventListener('mousemove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});
document.querySelectorAll('.tilt').forEach(el=>{el.addEventListener('mousemove',e=>{const r=el.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5;const y=(e.clientY-r.top)/r.height-.5;el.style.transform=`perspective(700px) rotateY(${x*5}deg) rotateX(${y*-5}deg) translateY(-3px)`});el.addEventListener('mouseleave',()=>el.style.transform='')});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>e.isIntersecting&&e.target.classList.add('show')),{threshold:.12});document.querySelectorAll('.reveal').forEach(x=>observer.observe(x));
document.getElementById('themeBtn').addEventListener('click',()=>document.body.classList.toggle('light'));
