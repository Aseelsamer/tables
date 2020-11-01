var cats=[];
function Cat (catName,likes,goodWithCats,goodWithKids,goodWithotherCats,breed,imagePath){
    this.catName = catName;
    this.age=0;
    this.likes= likes;
    this.goodWithCats=goodWithCats;
    this.goodWithKids=goodWithKids;
    this.goodWithotherCats=goodWithotherCats;
    this.breed=breed;
    this.imgPath=imagePath;
    cats.push(this);
}

Cat.prototype.getAge=function(min,max) {
    this.age=getRandomNumber(min,max);

}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }


Cat.prototype.render = function(){
    var container= document.getElementById('kitten');
    var article= document.createElement('article');
    container.appendChild(article);

    var header= document.createElement('h2');
    article.appendChild(header);
    header.textContent=this.catName;

    var para = document.createElement('p');
    article.appendChild(para);
    para.textContent=`${this.catName} is adorable , and is ${this.age} months.`

    var ulE1= document.createElement('ul');
    article.appendChild(ulE1);
    
    for(var i=0;i<this.likes.length;i++){
        var liE1=document.createElement('li');
        ulE1.appendChild(liE1);
        liE1.textContent=this.likes[i];
    }

    var image=document.createElement('img');
    article.appendChild(image);
    image.setAttribute('src',this.imagePath)
    // var tableE1=document.createElement('table');
    // article.appendChild(tableE1);
    
   var table=document.createElement('table');
   article.appendChild(table);
   var headerRow=document.createElement('tr');
   table.appendChild(headerRow);
   var header2=document.createElement('tr');
   table.appendChild(header2);

   var theader=document.createElement('th');
   theader.textContent='good with cats'
   headerRow.appendChild(theader);

   var theader2=document.createElement('th');
   theader2.textContent='good with dogs'
   headerRow.appendChild(theader2);

   var theader3=document.createElement('th');
   theader3.textContent='good with kids'
   headerRow.appendChild(theader3);

   var trow=document.createElement('td');
   trow.textContent=this.goodWithCats
   header2.appendChild(trow);

   var trow1=document.createElement('td');
   trow1.textContent=this.goodWithotherCats
   header2.appendChild(trow1);

   var trow2=document.createElement('td');
   trow2.textContent=this.goodWithKids
   header2.appendChild(trow2);



}  


var myForm=document.getElementById('myform');

myForm.addEventListener('submit',function(event){
event.preventDefault();
console.log(event.target);
var catName=event.target.catName.value;
console.log(catName);

var likes= event.target.likes.value;
var breed=event.target.breed.value;

var cats=event.target.good.checked;
var dogs=event.target.goodwith.checked;
var kids=event.target.Kids.checked;
var imgPath= `img/${catName}.jpg`

var cat = new Cat(catName,likes,imgPath,kids,dogs,cats,breed);
console.log(cat);
cat.getAge(1,10);
cat.render();
myForm.reset();

})



// var cat1=new Cat ('Frankie',["cuddling", "chasing string", "napping", "food"],true,false,false,'dhfkshf',`img/cat1.png`,);
// console.log(cats);

// var cat1=new Cat ('serena',["cuddling", "chasing ", "napping", "food"],true,true,false,'smooth',`img/cat2.jpg`,);
// console.log(cats);

// for (var i = 0; i < cats.length; i++) {
//     cats[i].getAge(1, 11);
//     cats[i].render();
//     console.log(cats[i]);
//   }


    

  

