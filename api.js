/* ===================================
   NEZ ANIME
   api.js
   Powered by Jikan API
=================================== */

const API = "https://api.jikan.moe/v4";

/* -----------------------------
   Search Anime
----------------------------- */

async function searchAnime(query){

    const results = document.getElementById("animeResults");

    results.innerHTML = "<h2>Searching...</h2>";

    try{

        const response = await fetch(
            `${API}/anime?q=${encodeURIComponent(query)}&limit=18`
        );

        const data = await response.json();

        displayAnime(data.data);

    }catch(error){

        console
