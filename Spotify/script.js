
console.log('Welcome to spotify India');
let songIndex=0;
let masterPlay=document.getElementById('masterPlay');
let myProgress=document.getElementById('myProgress');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let masterSongName=document.getElementById('masterSongName');

let songs=[
  {songName:"Parbona",filePath:"1.mp3",coverPath:"1p.jpeg"},
  {songName:"Metamorphosis",filePath:"2.mp3",coverPath:"2p.jpg"},
  {songName:"Shape Of You",filePath:"3.mp3",coverPath:"3p.jpeg"},
  {songName:"Taki Taki",filePath:"4.mp3",coverPath:"4p.jpg"},
  {songName:"Russian Bhandana",filePath:"5.mp3",coverPath:"5p.jpg"},
  {songName:"Jhol",filePath:"6.mp3",coverPath:"6p.jpeg"}
]
songItems.forEach((element,i) => {
  
  element.getElementsByTagName("img")[0].src=songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText=songs[i].songName;

});
let audioElement=new Audio('1.mp3');
masterPlay.addEventListener('click',()=>{
  if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
   
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    gif.style.opacity=1;

  }
  else{
    audioElement.pause();
    
    masterPlay.classList.remove('fa-pause-circle');
    masterPlay.classList.add('fa-play-circle');
    gif.style.opacity=0;
  }
})
audioElement.addEventListener('timeupdate',()=>{
  
  progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
  
  myProgress.value=progress;
})
myProgress.addEventListener('change',()=>{
  audioElement.currentTime=myProgress.value*audioElement.duration/100;
})
const makeAllPlays=()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.add('fa-play-circle');
    element.classList.remove('fa-pause-circle');
  })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click',(e)=>{
    
    makeAllPlays();
    
    songIndex=parseInt(e.target.id);
    
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `${songIndex+1}.mp3`;

    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    
  })
})
document.getElementById('next').addEventListener('click',()=>{
  if(songIndex>=5){
    songIndex=0;
  }
  else{
    songIndex +=1;
  }
  audioElement.src = `${songIndex+1}.mp3`;
  
  audioElement.currentTime=0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
  
 
})
document.getElementById('previous').addEventListener('click',()=>{
  if(songIndex<=0){
    songIndex=0;
  }
  else{
    songIndex -=1;
  }
  audioElement.src = `${songIndex+1}.mp3`;
  
  audioElement.currentTime=0;
  audioElement.play();
  masterPlay.classList.remove('fa-play-circle');
  masterPlay.classList.add('fa-pause-circle');
  
 
})

     