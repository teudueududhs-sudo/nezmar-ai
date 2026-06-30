/* ===================================
   NEZ ANIME
   settings.js
=================================== */

const Settings = {

    theme: localStorage.getItem("nez_theme") || "purple",

    init(){

        this.loadTheme();

        this.loadBackground();

        this.attachEvents();

    },

    attachEvents(){

        const themeButton = document.getElementById("themeButton");

        if(themeButton){

            themeButton.addEventListener("click",()=>{

                this.nextTheme();

            });

        }

        const upload = document.getElementById("backgroundUpload");

        if(upload){

            upload.addEventListener("change",(event)=>{

                const file = event.target.files[0];

                if(!file) return;

                const reader = new FileReader();

                reader.onload = (e)=>{

                    const image = e.target.result;

                    document.body.style.backgroundImage =
                    `linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.75)), url('${image}')`;

                    localStorage.setItem("nez_background",image);

                };

                reader.readAsDataURL(file);

            });

        }

    },

    nextTheme(){

        const themes = [

            "purple",

            "galaxy",

            "black",

            "blue",

            "red"

        ];

        let index = themes.indexOf(this.theme);

        index++;

        if(index >= themes.length){

            index = 0;

        }

        this.theme = themes[index];

        localStorage.setItem("nez_theme",this.theme);

        this.loadTheme();

    },

    loadTheme(){

        document.body.classList.remove(

            "purple",

            "galaxy",

            "black",

            "blue",

            "red"

        );

        document.body.classList.add(this.theme);

    },

    loadBackground(){

        const bg = localStorage.getItem("nez_background");

        if(bg){

            document.body.style.backgroundImage =
            `linear-gradient(rgba(0,0,0,.65),rgba(0,0,0,.75)), url('${bg}')`;

        }

    }

};

document.addEventListener("DOMContentLoaded",()=>{

    Settings.init();

});
