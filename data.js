/* ===================================
   NEZ ANIME
   data.js
=================================== */

const featuredAnime = [

{
title:"Solo Leveling",
genre:"Action",
rating:"9.6",
image:"https://cdn.myanimelist.net/images/anime/1700/146690.jpg"
},

{
title:"Demon Slayer",
genre:"Adventure",
rating:"9.4",
image:"https://cdn.myanimelist.net/images/anime/1286/99889.jpg"
},

{
title:"Jujutsu Kaisen",
genre:"Dark Fantasy",
rating:"9.5",
image:"https://cdn.myanimelist.net/images/anime/1171/109222.jpg"
},

{
title:"One Piece",
genre:"Adventure",
rating:"9.8",
image:"https://cdn.myanimelist.net/images/anime/6/73245.jpg"
},

{
title:"Bleach TYBW",
genre:"Action",
rating:"9.7",
image:"https://cdn.myanimelist.net/images/anime/1764/126627.jpg"
},

{
title:"Naruto Shippuden",
genre:"Adventure",
rating:"9.3",
image:"https://cdn.myanimelist.net/images/anime/1565/111305.jpg"
}

];

document.addEventListener("DOMContentLoaded",()=>{

const container=document.querySelector(".card-container");

if(!container) return;

featuredAnime.forEach(anime=>{

const card=document.createElement("div");

card.className="anime-card";

card.innerHTML=`

<img src="${anime.image}" alt="${anime.title}">

<div class="card-info">

<h3>${anime.title}</h3>

<p>${anime.genre}</p>

<span>⭐ ${anime.rating}</span>

<button class="watchButton">

▶ Watch Now

</button>

<button class="favoriteButton">

❤️ Favorite

</button>

</div>

`;

container.appendChild(card);

});

});
