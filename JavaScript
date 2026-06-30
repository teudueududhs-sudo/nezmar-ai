/* ===================================
   NEZ ANIME
   script.js
=================================== */

document.addEventListener("DOMContentLoaded", () => {

const hero = document.getElementById("hero");
const searchPage = document.getElementById("searchPage");

const startButton = document.getElementById("startWatching");
const discordButton = document.getElementById("discordButton");

const searchInput = document.getElementById("searchInput");

const upload = document.getElementById("backgroundUpload");

/* -------------------------
   Hide Loader
------------------------- */

setTimeout(() => {

document.getElementById("loader").style.opacity = "0";

setTimeout(() => {

document.getElementById("loader").style.display = "none";

},800);

},2500);

/* -------------------------
   Start Watching
------------------------- */

startButton.addEventListener("click",()=>{

hero.style.animation="fadeOut .8s forwards";

setTimeout(()=>{

hero.style.display="none";

searchPage.style.display="block";

searchPage.style.animation="fadeIn .8s forwards";

searchInput.focus();

window.scrollTo({

top:0,

behavior:"smooth"

});

},700);

});

/* -------------------------
   Discord
------------------------- */

discordButton.addEventListener("click",()=>{

window.open("https://discord.com","_blank");

});

/* -------------------------
   Search
------------------------- */

document.getElementById("searchButton").addEventListener("click",()=>{

const value=searchInput.value.trim();

if(value===""){

alert("Search for an anime or manga!");

return;

}

searchAnime(value);

});

/* -------------------------
   Enter Key
------------------------- */

searchInput.addEventListener("keydown",(e)=>{

if(e.key==="Enter"){

document.getElementById("searchButton").click();

}

});

/* -------------------------
   Background Upload
------------------------- */

upload.addEventListener("change",(event)=>{

const file=event.target.files[0];

if(!file) return;

const reader=new FileReader();

reader.onload=function(e){

document.body.style.backgroundImage=

`linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.7)),url('${e.target.result}')`;

localStorage.setItem(

"nezBackground",

e.target.result

);

};

reader.readAsDataURL(file);

});

/* -------------------------
   Restore Background
------------------------- */

const saved=

localStorage.getItem("nezBackground");

if(saved){

document.body.style.backgroundImage=

`linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.7)),url('${saved}')`;

}

});

/* ===================================
   API Search
=================================== */

async function searchAnime(query){

const container=document.getElementById("animeResults");

container.innerHTML="<h3>Loading...</h3>";

try{

const response=

await fetch(

`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&limit=12`

);

const data=await response.json();

container.innerHTML="";

data.data.forEach(anime=>{

const card=document.createElement("div");

card.className="anime-card";

card.innerHTML=`

<img src="${anime.images.jpg.image_url}">

<h3>${anime.title}</h3>

<p>${anime.score || "N/A"} ⭐</p>

<button class="favoriteButton">

❤️ Favorite

</button>

`;

container.appendChild(card);

});

}catch(err){

container.innerHTML="<h2>Unable to load anime.</h2>";

console.error(err);

}

}

/* ===================================
   Fade Animations
=================================== */

const style=document.createElement("style");

style.innerHTML=`

@keyframes fadeOut{

to{

opacity:0;

transform:translateY(-40px);

}

}

@keyframes fadeIn{

from{

opacity:0;

transform:translateY(60px);

}

to{

opacity:1;

transform:translateY(0);

}

}

`;

document.head.appendChild(style);
