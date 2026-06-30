/* ======================================
   NEZ ANIME
   storage.js
====================================== */

const Storage = {

    /* -----------------------------
       Save Background
    ----------------------------- */

    saveBackground(image){

        localStorage.setItem(
            "nez_background",
            image
        );

    },

    getBackground(){

        return localStorage.getItem(
            "nez_background"
        );

    },

    /* -----------------------------
       Favorites
    ----------------------------- */

    saveFavorites(list){

        localStorage.setItem(
            "nez_favorites",
            JSON.stringify(list)
        );

    },

    getFavorites(){

        return JSON.parse(
            localStorage.getItem(
                "nez_favorites"
            )
        ) || [];

    },

    addFavorite(anime){

        let favorites = this.getFavorites();

        favorites.push(anime);

        this.saveFavorites(favorites);

    },

    removeFavorite
