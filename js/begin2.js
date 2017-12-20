console.log("connected");
//first part----------------------------
var rank,percent;
var  nameq, gender, district;
var govt, fem;
    //getting datas of 3rd part


document.querySelector('#button1').addEventListener('click',function(){
//getting datas of first part


//for name
nameq = document.querySelector('#nameof').value;
    console.log(nameq);
if(nameq==null || nameq.length<7){
	//error message
}
else{
	//further process
}

//for gender
gender=document.querySelector('input[name=gender]:checked').value;

//for districts----
district=document.querySelector('#d').value;
    console.log(district);

});



//second part----------------------------
document.querySelector("#button2").addEventListener('click',function(){
//getting datas of 2nd part

rank=document.querySelector('#rank').value;
    console.log(rank);
if(rank==null){
	//error message
}
else{
	//further process
}
    
percent=document.querySelector('#percent').value;
if(percent==null){
	//error message
}
else{
	//further process
}
   console.log(percent);

//validating the inputs
});


//third part----------------------------

document.querySelector("#button3").addEventListener('click',function(){
govt = document.querySelector('input[name=govtquota]:checked').value;
fem = document.querySelector('input[name=femalequota]:checked').value;
    console.log(govt);
    console.log(fem);
    //getting datas of 3rd part
govt = document.querySelector('input[name=govtquota]:checked').value;
fem = document.querySelector('input[name=femalequota]:checked').value;
    console.log(govt);
    console.log(fem);
    //validating the inputs
    
    

//final part-----------------------------

/*
var html;
html ='<body id="interface"><buttonid="pulchowk">Western Region Campus</button><button id="pulchowk">Pulckowk Engneering Campus</button><br/><h3>Chances of Getting following Faculties</h3><div> <ul id=""><li id="bct" class="eng">Computer Engineering<ul><li class="regular" id="bctr">Regular<div class="bar" ><div class="barin bar-20" data-percent="20%"></div></div></li><li class="fullfee" id="bctf">Fullfee<div class="bar" ><div class="barin bar-90" data-percent="90%"></div></div></li></ul></li><li id="bce" class="eng">Civil Engineering<ul><li class="regular" id="bcer">Regular<div class="bar" ><div class="barin bar-90" data-percent="90%"></div></div></li><li class="fullfee" id="bcef">Fullfee<div class="bar" ><div class="barin bar-90" data-percent="90%"></div></div></li></ul></li><li id="bme" class="eng">Mechanical Engineering<ul><li class="regular" id="bmer" >Regular<div class="bar" ></div></li><li class="fullfee" id="bmef">Fullfee<div class="bar" ><div class="barin bar-90" data-percent="90%"></div></div></li></ul></li><li id="bel" class="eng">Electrical Engineering<ul><li class="regular" id="belr">Regular<div class="bar" ><div class="barin bar-90" data-percent="90%"></div></div></li><li class="fullfee" id="belf">Fullfee<div class="bar" ><div class="barin bar-90" data-percent="90%"></div></div></li></ul></li><li id="bex" class="eng">Electronics Engineering<ul><li class="regular" id="bexr">Regular<div class="bar" ><div class="barin bar-90" data-percent="90%"></div></div></li><li class="fullfee" id="bexf">Fullfee<div class="bar" ><div class="barin bar-90" data-percent="90%"></div></div></li></ul></li></ul></div></body>';
document.querySelector('#formbody').insertAdjacentHTML('beforeend', html);
*/

document.querySelector('#formdiv').style.display="none";  
//document.querySelector('#interfacew').style.display="none";  
document.querySelector('#interfacep').style.display="block";
    
    function pulchowk(){
    
var barin =document.querySelectorAll('.barin');
var bar =document.querySelectorAll('.bar');
//selects all ten barin boxes
       
var gl=new Array(10);

 function make(index,barlen){
barin[index].style.width=barlen+'%';
barin[index].insertAdjacentHTML('beforeend', '<b>'+barlen+'%'+'</b>');
    }
function sorry(index){
barin[index].style.width='0%';
bar[index].insertAdjacentHTML('afterbegin','<em>Probably, You won\'t get any chance.<em>');
        
    }
    
    
    function calculatep(){
    var i; //indicates index of faculties
    
    //computer regular
    i=0;
    if(rank<=35){
        make(i,100);
    }
       else if(rank>35 && rank<=55){
           make(i,80)
       }
    else if(rank>55 && rank<=75){
        make(i,30);
    }
    else{
        sorry(i);
    }
    i++;
    
        //computer fullfee
    if(rank<=120){
        make(i,100);
    }
       else if(rank>120 && rank<=180){
           make(i,70)
       }
    else if(rank>180 && rank<=220){
        make(i,35);
    }
    else{
        sorry(i);
    }
    i++;
    
// civil regular
    if(rank<=159){
        make(i,100);
    }
       else if(rank>159 && rank<=210){
           make(i,75)
       }
    else if(rank>210 && rank<=230){
        make(i,25);
    }
    else{
        sorry(i);
    }
    i++;
    
    
    //civil fullfee
     if(rank<=299){
        make(i,100);
    }
       else if(rank>299 && rank<=310){
           make(i,85)
       }
    else if(rank>310 && rank<=365){
        make(i,40);
    }
    else{
        sorry(i);
    }
    i++;
    
    //mechanical regular
    
     if(rank<=100){
        make(i,100);
    }
       else if(rank>100 && rank<=144){
           make(i,72)
       }
    else if(rank>144 && rank<=200){
        make(i,30);
    }
    else{
        sorry(i);
    }
    i++;
    
    //mechanical fullfee
    
     if(rank<=200){
        make(i,100);
    }
       else if(rank>200 && rank<=228){
           make(i,80)
       }
    else if(rank>228 && rank<=280){
        make(i,30);
    }
    else{
        sorry(i);
    }
    i++;
    
    //electrical regular
    
     if(rank<=228){
        make(i,100);
    }
       else if(rank>228 && rank<=295){
           make(i,80)
       }
    else if(rank>295 && rank<=320){
        make(i,30);
    }
    else{
        sorry(i);
    }
    i++;
    
    //electrical fullfee
    
     if(rank<=330){
        make(i,100);
    }
       else if(rank>330 && rank<=370){
           make(i,80)
       }
    else if(rank>370 && rank<=432){
        make(i,30);
    }
    else{
        sorry(i);
    }
    i++;
    
    //electronics regular
    
     if(rank<=200){
        make(i,100);
    }
       else if(rank>200 && rank<=228){
           make(i,80)
       }
    else if(rank>228 && rank<=275){
        make(i,30);
    }
    else{
        sorry(i);
    }
    i++;
    
    //electronics fullfee
 
 
     if(rank<=300){
        make(i,100);
    }
       else if(rank>300 && rank<=350){
           make(i,80)
       }
    else if(rank>350 && rank<=432){
        make(i,30);
    }
    else{
        sorry(i);
    }
    i++;
    }
    calculatep();
}
    
    pulchowk();
    //--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 
});























