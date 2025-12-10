// ==UserScript==
// @name         Insta Image Downloader (Strong Version) - Explained
// @namespace    shadow.insta.downloader
// @version      3.0
// @match        https://www.instagram.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    /*
     --------------------------------------------------------------------
     addButton()
     --------------------------------------------------------------------
     - This function creates a "Download IMG" button on the Instagram page.
     - It runs continuously but only adds the button once.
     - Button is fixed on screen (top-right corner).
    */
    function addButton() {

        // Avoid creating duplicate buttons
        if (document.querySelector("#shadowDownloadBtn")) return;

        // Create the button
        let btn = document.createElement("button");
        btn.id = "shadowDownloadBtn";
        btn.innerText = "Download IMG";

        // Visual styling
        btn.style.position = "fixed";         // always visible on the screen
        btn.style.top = "20px";              // distance from top
        btn.style.right = "20px";            // distance from right
        btn.style.zIndex = "999999999";      // appear above other elements
        btn.style.padding = "10px 15px";
        btn.style.background = "#ff0066";
        btn.style.color = "#fff";
        btn.style.border = "none";
        btn.style.borderRadius = "10px";
        btn.style.cursor = "pointer";
        btn.style.fontSize = "16px";

        // When clicked → call downloadImage()
        btn.onclick = downloadImage;

        // Add button to page
        document.body.appendChild(btn);
    }

    /*
     --------------------------------------------------------------------
     downloadImage()
     --------------------------------------------------------------------
     - Instagram hides the real image URL but final CDN images always contain:
           fbcdn
           instagram
     - So we search all <img> elements where src includes these words.
     - The script picks the first one (usually highest resolution).
     - Then automatically triggers download.
    */
    function downloadImage() {

        // Find any Instagram real CDN image
        let imgs = document.querySelectorAll("img[src*='fbcdn'][src*='instagram']");

        // If no image found → show message
        if (!imgs.length) {
            alert("No image found!");
            return;
        }

        // Select the first / best image URL
        let best = imgs[0].src;

        // Create a hidden link and download it
        let a = document.createElement("a");
        a.href = best;
        a.download = "instagram_image.jpg";  // default file name
        document.body.appendChild(a);
        a.click();   // auto-click
        a.remove();  // clean up
    }

    /*
     --------------------------------------------------------------------
     Automatic Button Creation (Every 1200ms)
     --------------------------------------------------------------------
     - Instagram loads content dynamically (React SPA).
     - New pages do NOT reload the browser.
     - So we repeatedly check and create the button if missing.
    */
    setInterval(() => {
        addButton();
    }, 1200);

})();
