const starts = document.querySelectorAll(".starts i");
// select all elements with the "i" tag and stire them i a NodeList called "starts"
// Loop through the "starts" Nodelist 
starts.forEach((star, index1) => {
    // add an event listener that runs a fuction when the click
    star.addEventListener("click",() => {
        console.log(index1);
       // Loop through the "starts" Nodelist  again
       starts.forEach((star, index2)=> {
// add the "active" class to the clicked star with a lower index
// and remove the "active" class from any star
    index1 >= index2 ? star.classList.add('active') : star.classList.remove('active');

       }) 
    })
});

const showMenu = (toggleId, navbarId,bodyId) => {
    const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId)
    bodypadding = document.getElementById(bodyId)
    if(toggle && navbar){
        toggle.addEventListener('click',()=>{
            navbar.classList.toggle('show')
            toggle.classList.toggle('rorate')
            bodypadding.classList.toggle('expander')
        })
    }
}
// showMenu('nav-toggle','navbar','body')
// document.getElementById('next1').onclick = function(){
//     const widthItem = document.querySelector('.item-menu').offsetWidth;
//     document.getElementById('formList').scrollLeft += widthItem;
// }
// document.getElementById('prev1').onclick = function(){
//     const widthItem = document.querySelector('.item-menu').offsetWidth;
//     document.getElementById('formList').scrollLeft -= widthItem;
// }
console.clear();
var hamb = document.querySelector('.bar');
var nav = document.querySelector('.nav-items');

hamb.addEventListener('click', function(){
  nav.classList.toggle('display');
})

// function openWeb(evt ,NameWeb){
// var i, tabcontent, tablinks;
// tabcontent=document.getElementsByClassName("tabcontent");
// for(i=0; i < tabcontent.length;i++){
//     tabcontent[i].style.display="none";
// }
// tablinks=document.getElementsByClassName("tablinks");
// for(i=0; i < tablinks.length;i++){
//     tablinks[i].className = tablinks[i].className.replace(" active","");
// }
// document.getElementById(NameWeb).style.display = "block";
// evt.currentTarget.className += " active";
// }