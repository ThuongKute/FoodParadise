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
showMenu('nav-toggle','navbar','body')
document.getElementById('next1').onclick = function(){
    const widthItem = document.querySelector('.item-menu').offsetWidth;
    document.getElementById('formList').scrollLeft += widthItem;
}
document.getElementById('prev1').onclick = function(){
    const widthItem = document.querySelector('.item-menu').offsetWidth;
    document.getElementById('formList').scrollLeft -= widthItem;
}
console.clear();
var hamb = document.querySelector('.bar');
var nav = document.querySelector('.nav-items');

hamb.addEventListener('click', function(){
  nav.classList.toggle('display');
})
google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2004',  1000,      400],
          ['2005',  1170,      460],
          ['2006',  660,       1120],
          ['2007',  1030,      540]
        ]);

        var options = {
          title: '',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart'));

        chart.draw(data, options);
      }