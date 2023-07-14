/** Tabs code */
function opentab(event,tabId,linkid){
    tabcontent=document.getElementsByClassName('tab-content');
    for(let i=0; i < tabcontent.length; i++)
    {
        tabcontent[i].style.display='none';
    }
    tablink=document.getElementsByClassName('tab-links');
    for(let i=0; i<tablink.length; i++)
    {
        tablink[i].className=tablink[i].className.replace('is-active','');
        tablink[i].style.borderBottom='none';

    }
    document.getElementById(tabId).style.display='block';
    document.getElementById(linkid).style.borderBottom="1px solid #3f00fc";
   
    event.currentTarget.className += "is-active";
}
/** Counter code */
let countDownDate = new Date('Dec 31,2023 23:59:59').getTime();
let count = setInterval(()=> {
    let dateNow = new Date().getTime();
    let dateDiff = countDownDate - dateNow ;
       
    let days = Math.floor(dateDiff/(1000*60*60*24));
    let hours= Math.floor ((dateDiff % (1000*60*60*24)) / (1000*60*60) );
    let minutes= Math.floor ((dateDiff % (1000*60*60)) / (1000*60) );
    let seconds= Math.floor ((dateDiff % (1000*60)) / (1000) );
 
    document.querySelector('.days').innerHTML= days;
    document.querySelector('.hours').innerHTML= hours;
    document.querySelector('.minutes').innerHTML= minutes;
    document.querySelector('.seconds').innerHTML= seconds;

},1000)
/** FAQ code */
const labels = document.querySelectorAll('.label');
labels.forEach(label => {
    label.addEventListener("click",()=>{
        label.classList.toggle("active");
    });
});


/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
  
document.addEventListener('scroll' , ()=>{
    let header = document.querySelector('.navbar');
    if(window.scrollY>0){
        header.classList.add('selected')
    }
    else{
        header.classList.remove('selected')
    }
});

document.addEventListener('scroll' , ()=>{
    let scroller = document.querySelector('.scroll-arrow');
    if(window.scrollY>0){
        scroller.classList.add('selected')
    }
    else{
        scroller.classList.remove('selected')
    }

});


