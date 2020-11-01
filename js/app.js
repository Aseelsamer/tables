// 'use strict;'

// // var cat={
// //     name:'sherry',
// //     age:0,
// //     likes:'string and napping',
// //     goodWithCats:'yes',
// //     goodWithKids:'no',
// //     goodWithotherCats:'yes',
// //     breed:'egyption',
// //     imagePath:
// //     // getAge:function(min,max){
// //     //     this.age=getRandomNumber(min,max);
// //     // }
// // }

// var cat1={
//     name:'lulu',
//     age:0,
//     likes:'cuddling and napping',
//     goodWithCats:false,
//     goodWithKids:true,
//     imagePath:`img/cat1.png`,
//     goodWithotherCats:true,
//     breed:'persian',
//     getAge:function(min,max){
//         this.age=getRandomNumber(min,max);
//     },
//     render:  function(){
//         var container=document.getElementById('kitten');
//         var article=document.createElement('article');
//     container.appendChild(article);
    
//     var header= document.createElement('h2');
//     article.appendChild(header);
//     header.textContent = this.name;
    
//     var para=document.createElement('p');
//     article.appendChild(para);
//     para.textContent=`${name} is adorable and is ${this.age} months old.`
    
//     var ulE1=document.createElement('ul');
//     article.appendChild(ulE1);
    
    
//     var list=document.createElement('li');
//     ulE1.appendChild(list);
//     list.textContent=this.likes;

//     var img=document.createElement('img');
//     article.appendChild(img);
//     img.setAttribute('src',this.imagePath);
    
//     }
//     }


// var cat2={
//     name:'tofi',
//     age:0,
//     likes:'chasing string ',
//     goodWithCats:true,
//     goodWithKids:false,
//     goodWithotherCats:true,
//     imagePath:`img/cat2.jpg`,
//     breed:'british',
//     getAge:function(min,max){
//         this.age=getRandomNumber(min,max);
//     },
    
    
// render:  function(){
//     var container=document.getElementById('kitten');
//     var article=document.createElement('article');
// container.appendChild(article);

// var header= document.createElement('h2');
// article.appendChild(header);
// header.textContent = this.name;

// var para=document.createElement('p');
// article.appendChild(para);
// para.textContent=`${name} is adorable and is ${this.age} months old.`

// var ulE1=document.createElement('ul');
// article.appendChild(ulE1);


// var list=document.createElement('li');
// ulE1.appendChild(list);
// list.textContent=this.likes;


// var img=document.createElement('img');
//     article.appendChild(img);
//     img.setAttribute('src',this.imagePath);
// }
// }

// cat2.getAge(1,9);
// cat2.render();
// cat1.render();
// cat1.getAge(2,8);
// function getRandomNumber(min, max) {
//  return Math.floor(Math.random() * (max - min + 1)) + min;
//  }