const menu=[
 {
   home:'home'
 },
 {
    home:'Computer'
 },
 {
   home:'Phone'
 },
 {
   home:'Computer Accersies'
 },
 {
    home:'Follow Us'
 }
];
var txt=''
for(var i in menu){
    txt +=`<li>${menu[i]['home']}</li>`
}
document.getElementsByClassName('container')[0].innerHTML=`<ul>${txt}</ul>`;