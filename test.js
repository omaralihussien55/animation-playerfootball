let canvas = document.getElementById("canvas1");
let c = canvas.getContext('2d');
canvas.width = window.innerWidth -30;
canvas.height = window.innerHeight - 20;

let gravit = 2;
c.beginPath();
c.fillStyle = 'green';
c.fillRect(0,0,canvas.width,canvas.height)
c.fill()
class BubbleRed{
    constructor(){
this.radus = 10;
this.x = (canvas.width-this.radus) * Math.random();
this.y = (canvas.height - this.radus) * Math.random();
this.width = canvas.width;
this.height = canvas.height;
this.velocity = {x:5*Math.random(),y:9*Math.random()}
this.color =`red`;
this.yshow = false;
this.xshow = false;
this.random= Math.random() < 0.5 ? 1 : 2;
}

draw(){
 c.beginPath();
 c.fillStyle = this.color;
 c.arc(this.x,this.y,this.radus,0,2 * Math.PI)
 c.fill()
    }

 update(){
     this.draw()
     
     if(this.yshow == false ){
        this.y -= this.velocity.y;
      
    }else{
        this.y += this.velocity.y;
    }
    
    if(this.xshow == false){
        this.x += this.velocity.x
    }else{
  
        this.x -= this.velocity.x
    }
    
   
}

}
class BubbleWhite{
    constructor(){
this.radus = 10;
this.x = (canvas.width-this.radus) * Math.random();
this.y = (canvas.height - this.radus) * Math.random();
this.width = canvas.width;
this.height = canvas.height;
this.velocity = {x:5*Math.random(),y:9*Math.random()}
this.color =`white`;
this.yshow = false;
this.xshow = false;

}

draw(){
 c.beginPath();
 c.fillStyle = this.color;
 c.arc(this.x,this.y,this.radus,0,2 * Math.PI)
 c.fill()
    }

 update(){
     this.draw()
this.color =`red`;
     if(this.yshow == false ){
        this.y -= this.velocity.y;
      
    }else{
        this.y += this.velocity.y;
    }
    
    if(this.xshow == false){
        this.x += this.velocity.x
    }else{
  
        this.x -= this.velocity.x
    }
    

}
}

class Football{
    constructor(){
this.radus = 4;
this.x = (canvas.width-this.radus) ;
this.y = (canvas.height - this.radus) ;
this.width = canvas.width;
this.height = canvas.height;
this.velocity = {x:7,y:10}
this.color =`white`;
this.yshow = false;
this.xshow = false;
this.random= Math.random() < 0.5 ? 1 : 2;
}

draw(){
 c.beginPath();
 c.fillStyle = this.color;
 c.arc(this.x,this.y,this.radus,0,2 * Math.PI)
 c.fill()
    }

 update(){
     this.draw()
     
     if(this.yshow == false ){
        this.y -= this.velocity.y;
      
    }else{
        this.y += this.velocity.y;
    }
    
    if(this.xshow == false){
        this.x += this.velocity.x
    }else{
  
        this.x -= this.velocity.x
    }
    
   
}
}
// ..........................
class Strok{
    constructor(){
this.width = canvas.width;
this.height = canvas.height;

    }

    draw(){


c.beginPath()
c.fillStyle ="green"
c.arc(this.width/2,this.height/2,this.width/12,0,2*Math.PI)
c.fill()
c.strokeStyle='white';
c.stroke()

        
c.beginPath()
c.lineWidth = 4;
c.strokeStyle='white';
c.save()
c.moveTo(this.width/2, 0);
c.lineTo(this.width /2 , this.height);
c.restore()
c.stroke()

c.beginPath()
c.lineWidth = 4;
c.strokeStyle='white';
c.save()
c.moveTo(0, 0);
c.lineTo(0 , this.height);
c.restore()
c.stroke()

c.beginPath()
c.lineWidth = 4;
c.strokeStyle='white';
c.save()
c.moveTo(this.width, 0);
c.lineTo(this.width , this.height);
c.restore()
c.stroke()

c.beginPath()
c.lineWidth = 4;
c.strokeStyle='white';
c.save()
c.moveTo(0, this.height);
c.lineTo(this.width , this.height);
c.restore()
c.stroke()

c.beginPath()

c.lineWidth = 5;
c.strokeStyle='white';
c.save()
c.moveTo(0, 0);
c.lineTo(this.width , 0);
c.restore()
c.stroke()


c.beginPath()
c.strokeStyle='white';
c.strokeRect(0,this.height/2 - ((this.height/5)/2),this.width/15,this.height/5)

c.stroke()

c.beginPath()
c.strokeStyle='white';
c.strokeRect(this.width,this.height/2 - ((this.height/5)/2),-this.width/15,this.height/5)

c.stroke()
    }


}

let backArrayRed = [];
for(i=0; i <= 9; i++){
    backArrayRed.push(new BubbleRed)
}
let backArrayWhite = [];
for(i=0; i <= 9 ; i++){
    backArrayWhite.push(new BubbleWhite)
}

class Human{
    constructor(){
this.radus = 9;
this.x =( canvas.width - (this.radus * 4)) *Math.random() ;
this.y = (canvas.height - (this.radus * 4)) *Math.random() ;
this.xshow = true

    }

    draw(){
        c.beginPath();
         c.fillStyle = 'yellow';
         c.arc(this.x,this.y,this.radus,0,2 * Math.PI)
         c.fill() 

    }

    update(){
        this.draw()
        
if (this.xshow ){
    this.x += 1
}else {
    this.x -= 1
}
    }
}

class Goal1{
    constructor(){
this.radus = 9;
this.x = canvas.width - this.radus ;
this.y = (canvas.height / 2)  ;
this.xshow = true

    }

    draw(){
        c.beginPath();
         c.fillStyle = 'rgb(110, 10, 209)';
         c.arc(this.x,this.y,this.radus,0,2 * Math.PI)
         c.fill() 

    }

    update(){
        this.draw()
        if(this.xshow){
            this.x += 0.1;
           }else{
            this.x -= 0.1;
           }
    }
}
class Goal2{
    constructor(){
this.radus = 9;
this.x = 20 ;
this.y = (canvas.height / 2) ;
this.xshow = true

    }

    draw(){
        c.beginPath();
         c.fillStyle = 'pink';
         c.arc(this.x,this.y,this.radus,0,2 * Math.PI)
         c.fill() 

    }

    update(){
        this.draw()
   if(this.xshow){
    this.x += 0.2;
   }else{
    this.x -= 0.2;
   }

}
}
let human = new Human()
let strok = new Strok()
let goal1 = new Goal1()
let goal2 = new Goal2()
let footballArray = [new Football()]
function inmationHuman(){

    if (human.x <=  100 ){
        human.xshow = true
    }else if (human.x >=  canvas.width - 100 ){
        human.xshow = false
    }

    if (goal2.x <=  goal2.radus/2 ){
       goal2.xshow = true
    }else if (goal2.x >= 60 ){
        goal2.xshow = false
    }

    if (goal1.x <= canvas.width-70 ){
        goal1.xshow = true
    }else if (goal1.x >=  canvas.width - goal1.radus){
        goal1.xshow = false
    }



}
function init(){
  
    requestAnimationFrame(init); 
    c.clearRect(0,0,canvas.width,canvas.height);

c.beginPath();
c.fillStyle = 'green';
c.fillRect(0,0,canvas.width,canvas.height)
c.fill()

strok.draw()
human.update()
goal1.update()
goal2.update()

inmationHuman()

backArrayRed.forEach((back,indexback)=>{
    back.update()
    
// let color = `rgb(${Math.random()* 320}, ${Math.random()* 200}, ${Math.random()* 290})`
 back.color = 'red'
    if(back.y <= back.radus ){
        back.yshow = true
    }else if(back.y == canvas.height - back.radus){
        back.yshow = false
    }else if(back.x >= canvas.width-back.radus){
       back.xshow = true
    }else if(back.y >= canvas.height-back.radus){
        back.yshow = false;
     }else if(back.x <= back.radus){
        back.xshow = false;
     }
})
backArrayWhite.forEach((back,indexback)=>{
    back.update()
// let color = `rgb(${Math.random()* 320}, ${Math.random()* 200}, ${Math.random()* 290})`
 back.color = 'blue'
    if(back.y <= back.radus ){
        back.yshow = true
    }else if(back.y == canvas.height - back.radus){
        back.yshow = false
    }else if(back.x >= canvas.width-back.radus){
       back.xshow = true
    }else if(back.y >= canvas.height-back.radus){
        back.yshow = false;
     }else if(back.x <= back.radus){
        back.xshow = false;
     }
})

footballArray.forEach((back,indexback)=>{
    back.update()
// let color = `rgb(${Math.random()* 320}, ${Math.random()* 200}, ${Math.random()* 290})`
 back.color = 'white'
    if(back.y <= back.radus ){
        back.yshow = true
    }else if(back.y == canvas.height - back.radus){
        back.yshow = false
    }else if(back.x >= canvas.width-back.radus){
       back.xshow = true
    }else if(back.y >= canvas.height-back.radus){
        back.yshow = false;
     }else if(back.x <= back.radus){
        back.xshow = false;
     }
})



}
init()

window.addEventListener("mousemove",(e)=>{


  
})