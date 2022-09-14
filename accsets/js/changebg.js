

var color = ["#1D375A","#124534","#1E1E1E","#170F23","#731717"];
var i = 0;
document.querySelector(".layers").addEventListener("click",
    function(){
        i = i < color.length ? ++i : 0;
        document.querySelector("body").style.background = color[i]
        document.querySelector("header").style.background = color[i]
        document.querySelector(".sidetab").style.background = color[i]


})  

var color1 = ["#294162","#1E4E3E","#292929","#231B2E","#7A2323"];
var j = 0;
document.querySelector(".layers").addEventListener("click",
    function(){
        j = j < color1.length ? ++j : 0;
        document.querySelector("nav").style.background = color1[j]
        document.querySelector(".dashboard").style.background = color1[j]
        document.querySelector(".searcher").style.background = color1[j]
        document.querySelector(".icon1").style.background = color1[j]
        document.querySelector(".icon2").style.background = color1[j]
        document.querySelector(".icon3").style.background = color1[j]
        document.querySelector(".icon4").style.background = color1[j]

})      

var color3 = ["#274A78","#126E54","#282828","#432275","#883036"];
var z = 0;
document.querySelector(".layers").addEventListener("click",
    function(){
        z = z < color3.length ? ++z : 0;
        document.querySelector(".active").style.background = color3[z]
        document.querySelector(".subnav").style.background = color3[z]
        document.querySelector(".subnav-child").style.background = color3[z]
        document.querySelector(".subnav-child2").style.background = color3[z]



})        
