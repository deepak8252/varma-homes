
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        items:2,
        margin:20,
        loop:true,
        autoplay:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
          
            600:{
                items:1,
                nav:false,
                margin:10,
                center:true,
            },
            1000:{
                items:3,
                nav:true,
                loop:false,
                margin:15,

            }
        }
    })
    
});
//  //var a=document.querySelector(".col-md-4");
//  var a=document.getElementsByClassName("col-md-4");
//  console.log(a);
//  $(document).ready(function(){
//      $("p").css("color","red");
//  })
// function pic(){
//     var http=new XMLHttpRequest();
//     http.onreadystatechange=function(){
//         if(this.readyState==4 && this.State==2 ){
//             document.write(this.responseText);
//             console.log(this.responseText);
//         }
//         else{
//             document.write("vng")
//         }
       
//     };
//     http.open("get","../assect/pop.html",true);
//     http.send();
// }
// function search(){
//     var data=[12,67,78,56,45];
//     var item=document.getElementById("abc").value;
//     let index=undefined;
//     for(var i=0;i<data.length-1;i++){
//         if(data[i]===item){
//             index=i;
//         }
//         console.log(index);
//         break;
//     }
// }

