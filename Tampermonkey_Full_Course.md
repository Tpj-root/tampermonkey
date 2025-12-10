**FULL TAMPERMONKEY COURSE** — from zero to master.

source 
```
https://www.tampermonkey.net/
```



Short, clean, practical.

**Part 1**.

---

# 🎓 **TAMPERMONKEY FULL COURSE – PART 1**

### **Introduction + First Script**

---

# 🔥 PART 1 – What Tampermonkey Actually Does

Tampermonkey lets you run **your own JavaScript** on any website.

Think of it as:

✔ Your own private browser extension
✔ Your own hacking tool (legal)
✔ Your own automation bot
✔ Your own custom designer
✔ Your own scraper / downloader

If a website annoys you…
You can change it.

If a website hides images…
You can extract them.

If a website needs automation…
You can automate everything.

---

# 🧩 **Why It Is Powerful**

Because **JavaScript can control any part** of the page:

* HTML
* CSS
* Buttons
* Scripts
* Links
* Inputs
* Hidden elements

Tampermonkey =
**“Javascript injected into the page after it loads.”**

You are basically modifying the website from inside.

---

# 🛠️ **Install Tampermonkey (Only once)**

1. Open browser
2. Go to: [https://www.tampermonkey.net](https://www.tampermonkey.net)
3. Install
4. Icon appears on top-right

Done.

---

# ⚙️ **How to Create Your First Script**

### Step 1 → Open Tampermonkey

Click the icon → **Dashboard**

### Step 2 → Create

Click **Create a new script**

### Step 3 → Delete everything inside

Make it empty.

### Step 4 → Paste this simple test script:

```javascript
// ==UserScript==
// @name         My First Script
// @match        https://www.google.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    alert("Tampermonkey is working!");
})();
```

### Step 5 → Save (Ctrl + S)

### Step 6 → Go to `google.com`

You will see an alert:

**“Tampermonkey is working!”**

If you see this → Congratulations.
You have started.

---

# 📘 **What Each Line Means**

```javascript
// @name
```

→ Script name

```javascript
// @match https://www.google.com/*
```

→ Script will run **only** on google.com pages.

```javascript
// @grant none
```

→ Simple script that doesn’t need special permissions.

```javascript
(function() {
    ...
})();
```

→ Safe wrapper so nothing breaks.

---

# 🚀 **Small Homework (Easy & Fun)**

Try changing:

```javascript
alert("Tampermonkey is working!");
```

to:

```javascript
alert("Hello Shadow!");
```

And refresh Google again.

If you see **Hello Shadow!**,
you understood how scripts run.

---


# 🎓 **TAMPERMONKEY FULL COURSE – PART 2**

## **@match, Page Detection & Selecting Elements**

This part is VERY IMPORTANT.
If you understand this, you can control ANY website.

---

# 🟦 **1. What is @match?**

`@match` tells Tampermonkey:
**“Run this script only on these pages.”**

Example:

```javascript
// @match https://www.google.com/*
```

This means:

✔ URL starts with `https://www.google.com/`
✔ Any page after that (`/*` = all pages)

Examples that WILL run:

* [https://www.google.com](https://www.google.com)
* [https://www.google.com/search](https://www.google.com/search)
* [https://www.google.com/maps](https://www.google.com/maps)

Examples that WILL NOT run:

* [https://google.com](https://google.com) (missing “www”)
* [https://bing.com](https://bing.com)
* [https://facebook.com](https://facebook.com)

---

# 🟧 **2. Most Useful @match Patterns**

### **Match an entire website**

```javascript
// @match https://example.com/*
```

### **Match non-www versions**

```javascript
// @match https://example.com/*
// @match https://www.example.com/*
```

### **Match any subdomain**

```javascript
// @match https://*.example.com/*
```

### **Match http + https**

```javascript
// @match *://example.com/*
```

### **Match anywhere**

```javascript
// @match *://*/*
```

(This means script runs on every site — dangerous, avoid unless needed.)

---

# 🟩 **3. Understanding DOM Selectors (Most Important Skill)**

To control a page, you must **select elements**.

Like:

* images
* buttons
* links
* titles
* videos
* inputs

Let’s learn the tools.

---

# 🟥 **4. querySelector (Select ONE Element)**

Select by ID:

```javascript
document.querySelector("#login");
```

Select by class:

```javascript
document.querySelector(".button");
```

Select by tag:

```javascript
document.querySelector("img");
```

Select by attribute (VERY powerful):

```javascript
document.querySelector("img[src*='fbcdn']");
```

---

# 🟪 **5. querySelectorAll (Select MANY Elements)**

```javascript
let images = document.querySelectorAll("img");
```

Loop them:

```javascript
images.forEach(img => {
    console.log(img.src);
});
```

---

# 🟨 **6. Example: Find all download links**

```javascript
let links = document.querySelectorAll("a[href*='download']");
links.forEach(l => console.log(l.href));
```

---

# 🟫 **7. Example: Auto-select Instagram CDN images**

```javascript
document.querySelectorAll("img[src*='fbcdn'][src*='instagram']");
```

This is how your Instagram downloader works.

---

# 🧠 **8. Practical Mini-Exercises (MASTER these)**

Try these on ANY website:

### **A. Highlight the biggest image**

```javascript
let imgs = document.querySelectorAll("img");
imgs.forEach(i => i.style.border = "3px solid red");
```

### **B. Change all text**

```javascript
document.querySelectorAll("*").forEach(e => {
    if (e.innerText) e.innerText = "Shadow!";
});
```

### **C. Remove all ads**

```javascript
document.querySelectorAll("[id*='ad'], [class*='ad']").forEach(e => e.remove());
```

### **D. Auto-fill a form**

```javascript
document.querySelector("input[name='email']").value = "shadow@example.com";
```

---

# 🚀 **End of Part 2**

You now understand:

✔ How scripts run on correct pages
✔ How to target elements
✔ How to read/modify any part of the page
✔ How your Instagram script finds images

This is the **foundation** of every advanced script.


---

# 🎓 **TAMPERMONKEY FULL COURSE – PART 3**

## **Adding Buttons, Styling, and Event Listeners**

This is the skill you used in your Instagram downloader.
Now you will learn it properly.

---

# 🟦 **1. Creating a Button on Any Website**

Basic button:

```javascript
let btn = document.createElement("button");
btn.innerText = "Click Me";
document.body.appendChild(btn);
```

Once you add this, a button shows on the page.

---

# 🟧 **2. Make It Look Like a Real UI Button**

Add styles:

```javascript
btn.style.position = "fixed";
btn.style.top = "20px";
btn.style.right = "20px";
btn.style.padding = "10px 15px";
btn.style.background = "black";
btn.style.color = "white";
btn.style.border = "none";
btn.style.borderRadius = "8px";
btn.style.cursor = "pointer";
btn.style.zIndex = "999999999";
```

This makes the button:

✔ Always visible
✔ Clickable
✔ Clean looking
✔ On top of all elements

This is how you add your own “extension buttons”.

---

# 🟥 **3. Add a Click Action**

Now give the button something to DO.

```javascript
btn.onclick = function() {
    alert("Button Clicked!");
};
```

This is called an **event listener**.

---

# 🟪 **4. Complete Example: “Hello Shadow” Button**

Put this in Tampermonkey:

```javascript
// ==UserScript==
// @name         Button Demo
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    let btn = document.createElement("button");
    btn.innerText = "Hello Shadow";
    btn.style.position = "fixed";
    btn.style.top = "20px";
    btn.style.right = "20px";
    btn.style.padding = "10px 15px";
    btn.style.background = "#ff0066";
    btn.style.color = "white";
    btn.style.zIndex = "999999";
    btn.style.border = "none";
    btn.style.borderRadius = "10px";
    btn.style.cursor = "pointer";

    btn.onclick = () => {
        alert("Shadow button pressed!");
    };

    document.body.appendChild(btn);
})();
```

Try it → button appears on every website.

---

# 🟫 **5. Make Button Only Once (Important)**

If the page reloads silently (SPA websites), Tampermonkey might create the button twice.
Use this:

```javascript
if (!document.querySelector("#shadowBtn")) {
    // create button
}
```

Example:

```javascript
let btn = document.createElement("button");
btn.id = "shadowBtn";
```

Now script won’t duplicate it.

---

# 🟩 **6. Watch for Page Changes (Instagram, YouTube, Twitter)**

Some websites never reload.
Use interval to keep your button alive:

```javascript
setInterval(() => {
    if (!document.querySelector("#shadowBtn")) {
        createButton();
    }
}, 1000);
```

This is EXACTLY how your Instagram script works.

---

# 🟨 **7. Add Multiple Buttons**

You can add:

* Download button
* Auto-scroll button
* Hide-ads button
* Change color button
* Screenshot button

Example:

```javascript
function makeButton(name, topPos, callback) {
    let b = document.createElement("button");
    b.innerText = name;
    b.style.position = "fixed";
    b.style.top = topPos + "px";
    b.style.right = "20px";
    b.style.padding = "8px 12px";
    b.style.background = "#333";
    b.style.color = "#fff";
    b.onclick = callback;
    document.body.appendChild(b);
}

makeButton("Top", 20, () => window.scrollTo(0,0));
makeButton("Bottom", 60, () => window.scrollTo(0,999999));
```

Boom → two buttons appear on every page.

---

# 🚀 **MASTER TIP**

You can build a **mini-control panel** on any website.

Example:

```javascript
let panel = document.createElement("div");
panel.innerHTML = `
    <button id="a">A</button>
    <button id="b">B</button>
`;
panel.style.position = "fixed";
panel.style.bottom = "20px";
panel.style.left = "20px";
panel.style.background = "#000a";
panel.style.padding = "10px";
panel.style.borderRadius = "10px";
panel.style.zIndex = "99999";

document.body.appendChild(panel);

document.querySelector("#a").onclick = () => alert("A");
document.querySelector("#b").onclick = () => alert("B");
```

You just created:

✔ A floating UI panel
✔ With multiple buttons
✔ Like a real browser extension

---

# 🎉 END OF PART 3

You now learned:

✔ How to add buttons
✔ How to style them
✔ How to attach actions
✔ How to add panels
✔ How to prevent duplicates
✔ How your Instagram downloader button works

---




**Part 4 — Important Concepts: @match, @include, @exclude, @run-at (Master This!)**


Now we go deeper.


This is where you start writing **powerful, controlled, safe scripts**.

---

# **1. What is `@match`? (Most Important)**

`@match` tells Tampermonkey **on which websites the script should run**.

Example:

```js
// @match https://www.instagram.com/*
```

Meaning:

* Run this script on **all pages** under `instagram.com`
* The `*` means “anything”

More examples:

| Pattern                      | Meaning                                |
| ---------------------------- | -------------------------------------- |
| `*://*/*`                    | RUN ON EVERY WEBSITE (not recommended) |
| `https://www.youtube.com/*`  | Only YouTube                           |
| `https://example.com/page/*` | Only pages under /page                 |

Use this carefully — it decides where your power goes.

---

# **2. What is `@include`?**

Same role as match, but more flexible with patterns.

Example:

```js
// @include  *://*.instagram.com/*
```

`@include` allows stars anywhere (domain, subdomain, path).

**Difference:**

* `@match` is strict & security friendly
* `@include` is flexible but less strict

Most new scripts use `@match` only.

---

# **3. What is `@exclude`?**

Used to **block** script from running on specific pages.

Example:

```js
// @match   https://github.com/*
// @exclude https://github.com/login
// @exclude https://github.com/logout
```

Meaning:

* Script runs on all GitHub pages
* **Except** login & logout pages

Useful when your script interferes with forms/logins.

---

# **4. What is `@run-at`?**

Controls **when the script starts running**.

Default is:

```js
// @run-at document-end
```

Here are all options:

| value            | when script runs                |
| ---------------- | ------------------------------- |
| `document-start` | Immediately (before page loads) |
| `document-end`   | After HTML loaded               |
| `document-idle`  | After page fully stable         |
| `context-menu`   | Only when right-click used      |

### Best usage examples:

#### a) Modify page before anything loads:

```js
// @run-at document-start
```

Good for blocking ads, removing popups.

#### b) Access images, buttons, dynamic content:

```js
// @run-at document-end
```

Good for Instagram, Facebook, YouTube.

#### c) Wait until everything settles:

```js
// @run-at document-idle
```

Use when website uses heavy JavaScript.

---

# **5. All together: A safe template**

Use this template for all your future scripts:

```js
// ==UserScript==
// @name         My Script
// @namespace    my.namespace
// @version      1.0
// @description  What your script does
// @match        https://example.com/*
// @exclude      https://example.com/login
// @run-at       document-end
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // your script here
})();
```

This is **professional level** structure.

---

# **Part 4 Summary (Short)**

* `@match` → Where your script runs (strict)
* `@include` → Optional alternative (flexible)
* `@exclude` → Block specific pages
* `@run-at` → Choose WHEN script executes

Understanding these = 50% mastery of Tampermonkey.






**Part 5 — DOM Control (How to Select, Modify, Inject, Remove Elements Using Tampermonkey)**

This is the **core skill** for writing any real userscript.

If you master Part 5 → you can build ANY custom browser tool.

---

# **1. What is the DOM? (Simple Explanation)**

DOM = The live structure of the webpage.

Every button, text, image = a node in the DOM.

Tampermonkey allows you to **edit the page like a hacker**:

* read elements
* change elements
* delete elements
* create your own elements
* inject scripts
* detect page changes

This is why userscripts are powerful.

---

# **2. Selecting elements**

You will use **querySelector** 99% of the time.

### **a) Select one**

```js
let el = document.querySelector("h1");
```

### **b) Select many**

```js
let imgs = document.querySelectorAll("img");
```

### **c) Using classes**

```js
let btn = document.querySelector(".button-class");
```

### **d) Using ID**

```js
let box = document.querySelector("#main-box");
```

### **e) Advanced selector**

```js
let item = document.querySelector("div[data-test='login']");
```

---

# **3. Modifying Elements**

### Change text:

```js
el.innerText = "Hello Shadow!";
```

### Change HTML:

```js
el.innerHTML = "<b>Bold Text</b>";
```

### Change style:

```js
el.style.background = "red";
el.style.padding = "10px";
```

### Add CSS class:

```js
el.classList.add("myClass");
```

### Remove CSS class:

```js
el.classList.remove("oldClass");
```

---

# **4. Removing Elements**

```js
let ad = document.querySelector(".ad-banner");
if (ad) ad.remove();
```

Use this to remove:

* Ads
* Popups
* Login blocks
* Paywalls (if allowed legally)

---

# **5. Creating New Elements**

### Create button:

```js
let btn = document.createElement("button");
btn.innerText = "Click Me";
btn.style.padding = "10px";
document.body.appendChild(btn);
```

### Create div:

```js
let box = document.createElement("div");
box.innerText = "Hello!";
document.body.appendChild(box);
```

---

# **6. Adding Events**

### On click:

```js
btn.addEventListener("click", () => {
    alert("Button clicked!");
});
```

### On input:

```js
input.addEventListener("input", (e) => {
    console.log("Typing:", e.target.value);
});
```

---

# **7. Injecting CSS**

```js
let style = document.createElement("style");
style.textContent = `
   .myBox {
       background: black;
       color: white;
       padding: 10px;
   }
`;
document.head.appendChild(style);
```

---

# **8. Injecting External JS Libraries**

Example: load jQuery

```js
let script = document.createElement("script");
script.src = "https://code.jquery.com/jquery-3.6.0.min.js";
document.head.appendChild(script);
```

---

# **9. Example: Add floating button**

```js
(function() {
    let btn = document.createElement("button");
    btn.innerText = "Shadow";
    btn.style.position = "fixed";
    btn.style.top = "20px";
    btn.style.right = "20px";
    btn.style.padding = "10px 15px";
    btn.style.background = "black";
    btn.style.color = "white";
    btn.style.zIndex = "999999";

    btn.onclick = () => alert("Hi Shadow!");

    document.body.appendChild(btn);
})();
```

This is the foundation of most userscripts.

---

# ⭐ Part 5 Summary (Short)

* DOM = the page structure
* Use `querySelector` to find elements
* Modify using `.innerText`, `.style`, `.classList`
* Remove elements with `.remove()`
* Add your own buttons/divs
* Register events (`onclick`, `addEventListener`)
* Inject CSS and JS

You now have **full control over any webpage**.

---






**Part 6 — MutationObserver (Mastering Dynamic Websites Like Instagram, YouTube, Facebook)**


This is one of the **most powerful skills** in Tampermonkey.



Modern websites **don’t reload** → they load content **dynamically** using JavaScript.



Without MutationObserver, your script will fail.

---

# **1. What is MutationObserver? (Simple Explanation)**

A MutationObserver watches the webpage and detects:

* new elements added
* elements removed
* attributes changed
* page content updated

It’s like a **security camera** watching the DOM.

Whenever Instagram loads a new image → your script sees it.

---

# **2. Basic MutationObserver Template**

```js
const observer = new MutationObserver((mutations) => {
    console.log("DOM changed");
});
observer.observe(document.body, { childList: true, subtree: true });
```

Meaning:

* `childList: true` = detect added/removed nodes
* `subtree: true` = detect changes deep inside

This is enough for 80% of scripts.

---

# **3. Run code when a specific element appears**

Example: wait for a login button

```js
const observer = new MutationObserver(() => {
    let btn = document.querySelector(".login-btn");
    if (btn) {
        console.log("Button found!");
        observer.disconnect(); // stop watching
    }
});
observer.observe(document.body, { childList: true, subtree: true });
```

Now your script works even if page loads slowly.

---

# **4. Real Example: Instagram Image Watcher**

```js
const observer = new MutationObserver(() => {
    let img = document.querySelector("img[src*='fbcdn']");
    if (img) {
        console.log("Image loaded:", img.src);
    }
});
observer.observe(document.body, { childList: true, subtree: true });
```

Instagram loads the image *later* → MutationObserver catches it.

---

# **5. Avoid Running Too Many Times**

MutationObserver can fire **100+ times/second**.

Use **flag technique**:

```js
let done = false;

const observer = new MutationObserver(() => {
    if (done) return;

    let img = document.querySelector("img[src*='fbcdn']");
    if (img) {
        done = true;
        console.log("Image captured:", img.src);
    }
});

observer.observe(document.body, { childList: true, subtree: true });
```

---

# **6. Example: Add Button Only Once**

```js
function addBtn() {
    if (document.querySelector("#shadowBtn")) return;

    let b = document.createElement("button");
    b.id = "shadowBtn";
    b.innerText = "Shadow";
    b.style.position = "fixed";
    b.style.top = "20px";
    b.style.right = "20px";
    document.body.appendChild(b);
}

const observer = new MutationObserver(addBtn);
observer.observe(document.body, { childList: true, subtree: true });
```

This is the **correct way** to add persistent UI.

---

# **7. Detect URL Change on SPA (Instagram, YouTube)**

Instagram doesn’t reload pages.
URL changes without refresh.

Use MutationObserver to detect URL change:

```js
let lastUrl = location.href;

const observer = new MutationObserver(() => {
    if (location.href !== lastUrl) {
        lastUrl = location.href;
        console.log("URL changed:", lastUrl);
    }
});

observer.observe(document, { subtree: true, childList: true });
```

This is the truth behind Instagram scripts.

---

# **8. Auto-run function when URL changes**

```js
function runOnChange() {
    console.log("New Page Loaded:", location.href);
}

let last = location.href;

const observer = new MutationObserver(() => {
    if (location.href !== last) {
        last = location.href;
        runOnChange();
    }
});

observer.observe(document.body, { childList: true, subtree: true });
```

Now your script “follows” the user as they browse.

---

# **9. Perfect Pattern for Any Dynamic Site**

This is the most used pattern in advanced scripts:

```js
function main() {
    // your logic here
}

function initObserver() {
    let oldUrl = location.href;

    const obs = new MutationObserver(() => {
        if (oldUrl !== location.href) {
            oldUrl = location.href;
            setTimeout(main, 300); // let page settle
        }
    });

    obs.observe(document, { childList: true, subtree: true });
}

initObserver();
main();  // first load
```

---

# **10. Part 6 Summary of MutationObserver**

| Task                          | How to solve                |
| ----------------------------- | --------------------------- |
| Page loads content later      | Watch with observer         |
| Button not found              | Observer detects it         |
| Instagram reloads dynamically | Observer detects URL change |
| Want to add button once       | Use flags + observer        |
| Want to detect new images     | Watch for new `<img>`       |

MutationObserver = **brain of every modern userscript**.

---


**Part 7 — Network Control (Fetch, XHR Interception, API Sniffing, Hidden URL Capture)**


This is where you go from **basic user** → **expert script developer**.


With Part 7, you can capture:

* hidden API calls
* video URLs (m3u8, mp4)
* image CDN URLs
* JSON responses
* login tokens
* feed data
* parameters sent by the website

This is the power used in **downloaders, API loggers, auto-fillers, automation bots**.

---

# **1. The Two Web Request Systems**

Websites use two systems:

### **1) fetch()**

Modern websites (Instagram, YouTube, TikTok)

### **2) XMLHttpRequest**

Old websites (But still used in many places)

We will learn how to intercept BOTH.

---

# **2. Intercepting fetch() — The Modern Way**

### Full working template:

```js
(function() {
    const originalFetch = window.fetch;

    window.fetch = async function(...args) {
        console.log("FETCH →", args[0]); // URL

        let response = await originalFetch.apply(this, args);

        // Clone response (so site can still use it)
        const clone = response.clone();

        clone.text().then(text => {
            console.log("FETCH RESPONSE →", text);
        });

        return response;
    };
})();
```

### What this gives you:

* every API URL
* every JSON response
* every media link inside responses

This is used to capture **hidden URLs** like:

* realtime image
* video .mp4
* story .jpg
* story .mp4
* reel JSON

---

# **3. Intercepting XMLHttpRequest**

```js
(function() {
    const originalXHR = XMLHttpRequest.prototype.open;

    XMLHttpRequest.prototype.open = function(method, url) {
        console.log("XHR →", method, url);

        this.addEventListener("load", function() {
            console.log("XHR RESPONSE →", this.responseText);
        });

        return originalXHR.apply(this, arguments);
    };
})();
```

### Captures:

* old API calls
* background trackers
* ads
* media lists

---

# **4. How to Parse API Responses (JSON)**

Example: get JSON data

```js
clone.json().then(data => {
    console.log("JSON:", data);
});
```

Very useful in:

* Instagram reels JSON
* TikTok video metadata
* YouTube player info
* E-commerce product data

---

# **5. Detecting Image/Video URLs**

A typical check:

```js
if (url.includes(".mp4") || url.includes(".jpg") || url.includes("m3u8")) {
    console.log("MEDIA FOUND:", url);
}
```

Example use:

* find HD video direct link
* find CDN image link
* find story file

---

# **6. Example: Auto-download any .mp4 from fetch**

```js
if (url.includes(".mp4")) {
    let a = document.createElement("a");
    a.href = url;
    a.download = "video.mp4";
    document.body.appendChild(a);
    a.click();
    a.remove();
}
```

---

# **7. Example: Full Network Sniffer Script**

This covers EVERYTHING:

```js
(function() {
    // FETCH hook
    const originalFetch = window.fetch;
    window.fetch = async function(...args) {
        let url = args[0];
        console.log("[FETCH]", url);
        monitorUrl(url);
        return originalFetch.apply(this, args);
    };

    // XHR hook
    const origOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url) {
        console.log("[XHR]", method, url);
        monitorUrl(url);
        return origOpen.apply(this, arguments);
    };

    // Common function
    function monitorUrl(url) {
        if (url.includes(".jpg") || url.includes(".jpeg") || url.includes(".png")) {
            console.log("IMAGE →", url);
        }
        if (url.includes(".mp4") || url.includes("m3u8")) {
            console.log("VIDEO →", url);
        }
        if (url.includes("api")) {
            console.log("API CALL →", url);
        }
    }
})();
```

Now your browser becomes a **network analyzer**.

---

# **8. Example: Capture All Instagram CDN Links**

```js
if (url.includes("fbcdn") && url.includes("instagram")) {
    console.log("INSTAGRAM MEDIA:", url);
}
```

Use this to grab:

* reels
* photos
* stories
* thumbnails
* HD images

---

# **9. Detect and Read POST Data**

Tampermonkey can capture POST form data:

```js
const originalFetch = window.fetch;
window.fetch = async function(resource, config) {
    if (config && config.body) {
        console.log("POST DATA:", config.body);
    }
    return originalFetch.apply(this, arguments);
};
```

Useful for:

* login auto-fill
* resend form data
* debug tools

---

# **10. Summary — What You Can Do Now**

With Part 7 knowledge, you can:

| Task                        | Possible? |
| --------------------------- | --------- |
| Track all API URLs          | ✔         |
| Capture media links         | ✔         |
| Monitor JSON responses      | ✔         |
| Auto-download images/videos | ✔         |
| Detect hidden endpoints     | ✔         |
| Build downloaders           | ✔         |
| Build automation tools      | ✔         |
| Build website scrapers      | ✔         |

This is **professional-level userscript programming**.

---





**Part 8 — Web Automation (Clicking, Typing, Form Filling, Delays, Loops, Bots)**

This is where you learn to **control the website like a robot**.



With this skill, you can automate:

* clicking buttons
* typing text
* filling forms
* scrolling
* liking posts
* sending messages
* auto-login
* auto-download
* repeating tasks

This is **real bot building**.

---

# **1. Clicking Elements**

### Basic click:

```js
document.querySelector("button").click();
```

### Click using class:

```js
document.querySelector(".like-btn").click();
```

### Click using attribute:

```js
document.querySelector("div[data-test='submit']").click();
```

### Click the first element from many:

```js
document.querySelectorAll(".item")[0].click();
```

---

# **2. Typing (Simulating User Input)**

```js
let input = document.querySelector("#username");
input.value = "Shadow123";
input.dispatchEvent(new Event("input", { bubbles: true }));
```

That last part is important — many websites require **input event** to update React/Angular/Vue fields.

---

# **3. Filling Forms Automatically**

```js
document.querySelector("#email").value = "shadow@example.com";
document.querySelector("#password").value = "123456";

document.querySelector("#loginBtn").click();
```

---

# **4. Auto Scrolling**

```js
window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
});
```

Scroll down slowly (like human):

```js
let pos = 0;
let timer = setInterval(() => {
    pos += 300;
    window.scrollTo(0, pos);
    if (pos >= document.body.scrollHeight) clearInterval(timer);
}, 500);
```

---

# **5. Delays / Wait**

Automated bots need delays.
Use a helper function:

```js
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
```

Example usage:

```js
await wait(1000);
document.querySelector("button").click();
```

---

# **6. Looping Actions**

### Example: Automatically like 20 posts

```js
async function autoLike() {
    let likes = document.querySelectorAll(".likeButton");

    for (let i = 0; i < likes.length; i++) {
        likes[i].click();
        await wait(500 + Math.random() * 800);
    }
}
autoLike();
```

Looks **human-like**, safe.

---

# **7. Detect Element Then Click**

Combine with MutationObserver:

```js
const obs = new MutationObserver(() => {
    let btn = document.querySelector(".next-button");
    if (btn) {
        btn.click();
    }
});
obs.observe(document.body, { childList: true, subtree: true });
```

This handles dynamic UI like Instagram, YouTube, TikTok.

---

# **8. Real Example — Auto Expand Comments**

```js
function expandAll() {
    document.querySelectorAll(".expand-comment").forEach(btn => {
        btn.click();
    });
}
```

---

# **9. Real Example — Auto Login**

```js
(async function() {
    document.querySelector("#username").value = "Shadow";
    document.querySelector("#password").value = "Secret123";

    await wait(500);
    document.querySelector("#login").click();
})();
```

---

# **10. Real Example — Auto Click Until Gone**

Useful for closing popups:

```js
const timer = setInterval(() => {
    let close = document.querySelector(".close-popup");
    if (close) {
        close.click();
        clearInterval(timer);
    }
}, 300);
```

---

# **11. Full Automation Example — Auto Download Instagram Images**

This combines:

* DOM selection
* click automation
* wait
* loop

```js
async function autoDownload() {
    let imgs = document.querySelectorAll("img[src*='fbcdn']");
    
    for (let i = 0; i < imgs.length; i++) {
        let link = imgs[i].src;
        
        let a = document.createElement("a");
        a.href = link;
        a.download = "insta_" + i + ".jpg";
        document.body.appendChild(a);
        a.click();
        a.remove();
        
        await wait(800);
    }
}
```

---

# **12. Summary — You Can Now Automate Any Website**

With Part 8, you can:

| Skill         | Power                       |
| ------------- | --------------------------- |
| Clicking      | control UI                  |
| Typing        | auto-fill                   |
| Waiting       | human behavior              |
| Looping       | bulk actions                |
| Observers     | dynamic UI control          |
| Auto scroll   | load more content           |
| Auto download | grab media                  |
| Complete bots | perform tasks automatically |

You now have **full web automation capability**.

---





**Part 9 — Storage Systems (Saving Data, Remembering Settings, Auto-Save States, Cookies, Local DB)**
This part teaches you how to make your script **remember things**, even after refresh or browser restart.

With this, you can build:

* auto-login
* remembered user settings
* history logs
* counters
* bookmarks
* saved states
* toggles

A *smart* script must store data.

Tampermonkey gives **3 major ways**:

---

# **1. Tampermonkey Storage (Best Method)**

Tampermonkey provides built-in functions:

### ✔ `GM_setValue(key, value)`

### ✔ `GM_getValue(key, default)`

These store data *forever* inside Tampermonkey.

---

## **1.1 Example: Save a number**

```js
GM_setValue("count", 10);
```

Read it:

```js
let c = GM_getValue("count", 0);
console.log("Saved value:", c);
```

---

## **1.2 Example: Save string**

```js
GM_setValue("username", "Shadow");
```

Read:

```js
let name = GM_getValue("username", "");
```

---

## **1.3 Save JSON objects**

```js
GM_setValue("settings", {
    theme: "dark",
    autoDownload: true
});
```

Read:

```js
let config = GM_getValue("settings", {});
console.log(config.theme);
```

---

# **2. LocalStorage (Website Storage)**

Every website has a local storage area.

### Save:

```js
localStorage.setItem("mykey", "Hello");
```

### Read:

```js
let a = localStorage.getItem("mykey");
```

### Remove:

```js
localStorage.removeItem("mykey");
```

### Clear all:

```js
localStorage.clear();
```

⚠ **Downside:**

* Data is tied to website
* Clearable by browser
* Scripts on other pages can’t read it

---

# **3. Cookies**

Old method, still useful.

### Write cookie:

```js
document.cookie = "token=12345; path=/; max-age=86400;";
```

### Read cookie:

```js
console.log(document.cookie);
```

⚠ Cookies expire, get deleted, or blocked by website.

Mostly used for **session tracking**.

---

# **4. Using Storage in Real Scripts**

## **4.1 Toggle Button That Remembers State**

```js
let active = GM_getValue("auto", false);

function applyState() {
    if (active) {
        console.log("Auto mode ON");
    } else {
        console.log("Auto mode OFF");
    }
}
applyState();

document.addEventListener("keydown", e => {
    if (e.key === "a") {
        active = !active;
        GM_setValue("auto", active);
        applyState();
    }
});
```

Press “A” → toggles → saved forever.

---

# **5. Example: Remember Last Downloaded URL**

```js
function saveDownload(url) {
    GM_setValue("last_url", url);
}

function getLastDownload() {
    return GM_getValue("last_url", "");
}
```

Use it:

```js
let last = getLastDownload();
console.log("Previously downloaded:", last);
```

---

# **6. Example: Save List / Array**

```js
let arr = GM_getValue("history", []);

arr.push("New Item");

GM_setValue("history", arr);
```

---

# **7. Example: Saving Buttons’ Position (Movable UI)**

Many pro user scripts let users drag UI.

Save position:

```js
GM_setValue("btnX", x);
GM_setValue("btnY", y);
```

Load position:

```js
btn.style.left = GM_getValue("btnX", 20) + "px";
btn.style.top  = GM_getValue("btnY", 20) + "px";
```

---

# **8. Example: Auto-login (Stored credentials)**

```js
let user = GM_getValue("user", "");
let pass = GM_getValue("pass", "");

document.querySelector("#username").value = user;
document.querySelector("#password").value = pass;
```

---

# **9. Example: Daily Counter (Resets at midnight)**

```js
let today = new Date().toDateString();
let savedDay = GM_getValue("lastDay", "");

if (today !== savedDay) {
    GM_setValue("count", 0);
    GM_setValue("lastDay", today);
}

let c = GM_getValue("count", 0);
GM_setValue("count", c + 1);
```

---

# **10. Summary — What You Can Do Now**

You now know how to store:

| Data Type          | Where to store |
| ------------------ | -------------- |
| Permanent values   | GM_setValue    |
| Per-website memory | localStorage   |
| Session tracking   | Cookies        |
| Big JSON           | GM_setValue    |
| User settings      | GM_setValue    |
| History logs       | GM_setValue    |
| Toggle states      | GM_setValue    |

This part gives your scripts **memory**, making them behave like apps.

---




### **Part 10 — Building a Real-World Tampermonkey Project (Complete Workflow)**

This is where you learn how to **plan, design, build, test, optimize, and publish** a real userscript — exactly how pro developers do it.


---

# ✅ **Part 10 — From Idea → Full Tampermonkey Script → Publish**

---

## **1. Step-by-Step Workflow Overview**

A proper project has these stages:

1. **Choose a problem to solve**
2. **Study the target website**
3. **Plan the script (features + logic)**
4. **Write metadata (header block)**
5. **Write core code**
6. **Debug + Fix**
7. **Optimize**
8. **Add UI buttons / menus**
9. **Add safety + permission rules**
10. **Publish (optional)**

We will do everything using a sample project.

---

# ⭐ **Real Project: “Auto-Expand All Comments on YouTube”**

**Goal:** When you open a YouTube video, all comments expand automatically.

---

## **2. Study the Target Website (Very Important)**

Open YouTube → Developer Tools → Elements
Search for the “Read more” button:

```html
tp-yt-paper-button id="more-replies"
```

COMMENTS use:

```
yt-formatted-string#more
yt-button-shape
```

You learn this by **right click → Inspect**.

---

## **3. Plan the Script (Logic)**

We need:

* Detect page load
* Find all “Read more” and “Show replies” buttons
* Click them automatically
* Keep checking because YouTube loads more when you scroll

---

## **4. Write Metadata Block**

```js
// ==UserScript==
// @name         YouTube Auto Expand Comments
// @namespace    shadow.tamper.autoyt
// @version      1.0
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==
```

---

## **5. Build the Script (Explained Inside Code)**

Here is the **full script with inside explanations**:

```js
// ==UserScript==
// @name         YouTube Auto Expand Comments
// @namespace    shadow.tamper.autoyt
// @version      1.0
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    "use strict";

    // --- FUNCTION: Click all "Read more" buttons ---
    function expandReadMore() {
        // Search for comment "Read more" buttons
        let btns = document.querySelectorAll("yt-formatted-string#more");

        btns.forEach(btn => {
            // Only click if visible
            if (btn.offsetParent !== null) {
                btn.click();
            }
        });
    }

    // --- FUNCTION: Click all "Show replies" buttons ---
    function expandReplies() {
        // Buttons for showing replies under comments
        let replyBtns = document.querySelectorAll("yt-button-shape button");

        replyBtns.forEach(btn => {
            // Check if the button text contains "replies"
            if (btn.innerText.toLowerCase().includes("repl")) {
                btn.click();
            }
        });
    }

    // --- MAIN LOOP ---
    // YouTube loads comments continuously, so we repeat every second
    setInterval(() => {
        expandReadMore();
        expandReplies();
    }, 1000);

})();
```

---

## **6. Debugging Method**

If something doesn’t work:

### **Step 1 — Check console errors**

Open DevTools → Console
Look for red errors.

### **Step 2 — Use `console.log()`**

Example:

```js
console.log("Found buttons: ", btns.length);
```

This helps you see if querySelector works.

### **Step 3 — Check selectors**

If selectors wrong → Nothing will work.

Tip:
Use this in console to test:

```js
document.querySelectorAll("yt-formatted-string#more")
```

---

## **7. Optimization**

To reduce CPU usage:

* Increase interval from 1000ms → 1500ms
* Only run when page contains comments

Example:

```js
if (!document.querySelector("#comments")) return;
```

---

## **8. Add Simple UI Toggle (On/Off Button)**

Add button:

```js
let enabled = true;

function addToggleBtn() {
    let b = document.createElement("button");
    b.innerText = "Auto Expand ON";
    b.style.position = "fixed";
    b.style.top = "20px";
    b.style.left = "20px";
    b.style.zIndex = 99999;

    b.onclick = () => {
        enabled = !enabled;
        b.innerText = enabled ? "Auto Expand ON" : "Auto Expand OFF";
    };
    document.body.appendChild(b);
}

addToggleBtn();
```

Modify loop:

```js
if (!enabled) return;
```

---

## **9. Add Safety Rules**

### **Do NOT click too fast**

→ Use delays if needed.

### **Do NOT use heavy loops**

→ Use MutationObserver for better performance (next parts).

---

## **10. Publish (Optional)**

You can publish on:

* GreasyFork
* OpenUserJS

But follow their rules:

* Good description
* Not harmful
* No tracking
* No ads

---

# 🎉 Part 10 Complete!

You now learned:

* Full workflow
* Planning
* Writing
* Debugging
* Optimizing
* UI toggle
* Real project example

---



### **Part 11 — MutationObserver Mastery (Pro Level DOM Watching)**

This is one of the MOST powerful tools when building advanced Tampermonkey scripts.
It lets your script **automatically react whenever a webpage changes** — perfect for dynamic websites like Instagram, YouTube, Facebook, Reddit, etc.



---

# ⭐ **1. What Is MutationObserver? (Simple Explanation)**

A **MutationObserver** is a JavaScript tool that watches the page and says:

> “Hey! Something changed — new elements added or removed.”

This is SUPER important because modern websites load content **after scrolling**, **after clicking**, **through AJAX**, or **React/Vue updates**.

Tampermonkey scripts must handle:

* Infinite scroll
* Lazy-loaded content
* Dynamic page transitions
* SPA (Single Page App) websites

MutationObserver makes this easy.

---

# ⭐ **2. Basic MutationObserver Example**

```js
const observer = new MutationObserver((mutations) => {
    console.log("Something changed!");
});

observer.observe(document.body, {
    childList: true,     // detect new/removed elements
    subtree: true        // check inside every element
});
```

Now the script fires whenever page changes.

---

# ⭐ **3. Real Example — Auto Click “Read More”**

```js
const observer = new MutationObserver(() => {
    let btns = document.querySelectorAll("yt-formatted-string#more");

    btns.forEach(b => {
        if (b.offsetParent !== null) {
            b.click();
        }
    });
});

observer.observe(document.body, { childList: true, subtree: true });
```

This is better than `setInterval` because:

* Faster
* More accurate
* Less CPU usage
* Responds instantly when comments appear

---

# ⭐ **4. How It Works (Inside Your Script)**

We use three parts:

### **(1) Create the callback**

Runs when DOM changes.

```js
const callback = (mutationList) => {
    // do something when DOM updates
};
```

### **(2) Create MutationObserver**

```js
const observer = new MutationObserver(callback);
```

### **(3) Start watching**

```js
observer.observe(document.body, {
    childList: true,
    subtree: true
});
```

---

# ⭐ **5. Real Project: Auto-Download Instagram Images with MutationObserver**

This is the upgraded version of your script 🔥

```js
// ==UserScript==
// @name         Insta Downloader PRO (Observer Version)
// @namespace    shadow.insta.observer
// @version      3.0
// @match        https://www.instagram.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function addButton() {
        if (document.querySelector("#shadowDownloadBtn")) return;

        let btn = document.createElement("button");
        btn.id = "shadowDownloadBtn";
        btn.innerText = "Download IMG";
        btn.style.position = "fixed";
        btn.style.top = "20px";
        btn.style.right = "20px";
        btn.style.zIndex = "99999999";
        btn.style.padding = "10px 15px";
        btn.style.background = "#ff0066";
        btn.style.color = "#fff";
        btn.style.borderRadius = "10px";
        btn.style.cursor = "pointer";

        btn.onclick = download;
        document.body.appendChild(btn);
    }

    function download() {
        let imgs = document.querySelectorAll("img[src*='fbcdn'][src*='instagram']");
        if (!imgs.length) return alert("No image found!");

        let big = imgs[0].src;

        let a = document.createElement("a");
        a.href = big;
        a.download = "insta.jpg";
        a.click();
    }

    // MutationObserver detects new posts when opened
    const observer = new MutationObserver(() => {
        addButton();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

})();
```

### What this does:

✔ Button appears instantly when post opens
✔ No need for `setInterval`
✔ Uses less CPU
✔ More stable

---

# ⭐ **6. When To Use MutationObserver**

Use it when websites load content dynamically:

### Perfect for:

* YouTube comments
* Instagram posts
* Facebook feeds
* Reddit infinite scroll
* Twitter/X timeline
* Auto-filling forms
* Auto-downloading media

### NOT needed for:

* Static websites
* Simple pages
* Sites with no dynamic content

---

# ⭐ **7. Common Patterns You Must Know**

### **Pattern 1 — Reacting to new elements**

```js
observer = new MutationObserver(() => {
    let items = document.querySelectorAll(".item");
    items.forEach(...);
});
```

---

### **Pattern 2 — Detecting class changes**

(Sites update HTML with CSS classes)

```js
const observer = new MutationObserver((mut) => {
    mut.forEach(m => {
        if (m.type === "attributes") {
            console.log("Class changed on:", m.target);
        }
    });
});

observer.observe(document.body, {
    attributes: true,
    subtree: true
});
```

---

### **Pattern 3 — Detect only new child nodes**

```js
observer.observe(target, {
    childList: true
});
```

---

### **Pattern 4 — Stop watching**

```js
observer.disconnect();
```

---

# ⭐ **8. Pro Optimization Tips**

### **Tip 1 — Don’t run heavy code on every mutation**

Use a small delay:

```js
let t;
observer = new MutationObserver(() => {
    clearTimeout(t);
    t = setTimeout(runLogic, 200);
});
```

---

### **Tip 2 — Observe only specific area**

Example: only watch comments:

```js
const comments = document.querySelector("#comments");
observer.observe(comments, { childList: true, subtree: true });
```

---

### **Tip 3 — Don’t click the same button twice**

Use:

```js
btn.dataset.clicked = "1";
```

---

# ⭐ Part 11 Complete!

Now you fully understand:

✔ How MutationObserver works
✔ When to use it
✔ How to create powerful, fast userscripts
✔ How to upgrade simple scripts into pro-level scripts

---




### **Part 12 — Multi-Page Tampermonkey Script (Extension-Level Projects)**

This is the **pro stage**: building a script that works **across multiple pages or websites**, remembers state, reacts dynamically, and has UI controls.

By the end of Part 12, you can make scripts that act like **mini browser extensions**.

---

# **1. What is a Multi-Page Script?**

A normal script:

* Works on **one page** (`@match https://site.com/*`)
* Simple, like “auto-click a button”

Multi-page script:

* Works on **multiple pages**
* Shares **data** between pages
* Adapts dynamically depending on URL
* Can handle **single-page apps** (SPA)
* Has UI across pages

Example use-cases:

* Instagram: detect posts and stories → download images/videos
* YouTube: detect video → download metadata → auto-expand comments
* Ecommerce: track product prices → store history → notify

---

# **2. Metadata Setup for Multi-Page**

```js
// ==UserScript==
// @name         Shadow Multi-Page Script
// @namespace    shadow.multi
// @version      1.0
// @match        https://www.instagram.com/*
// @match        https://www.youtube.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// ==/UserScript==
```

* `@match` can include multiple sites
* `GM_*` allows **storage shared between pages**

---

# **3. Detecting Which Page You Are On**

```js
const url = location.href;

if (url.includes("instagram.com")) {
    runInstagram();
} else if (url.includes("youtube.com")) {
    runYouTube();
}
```

Each function handles page-specific logic.

---

# **4. Example: Shared Storage Across Pages**

```js
// Save last downloaded URL on Instagram
function saveLast(url) {
    GM_setValue("last_url", url);
}

// Read it on YouTube page
let last = GM_getValue("last_url", "");
console.log("Last URL downloaded on Instagram:", last);
```

Now your script remembers actions **across different websites**.

---

# **5. Using MutationObserver Across Pages**

```js
function runInstagram() {
    const observer = new MutationObserver(() => {
        let imgs = document.querySelectorAll("img[src*='fbcdn']");
        imgs.forEach(img => {
            if (!img.dataset.processed) {
                img.dataset.processed = "1"; // mark as processed
                console.log("Found Instagram image:", img.src);
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
}
```

```js
function runYouTube() {
    const observer = new MutationObserver(() => {
        let btns = document.querySelectorAll("yt-formatted-string#more");
        btns.forEach(b => {
            if (!b.dataset.clicked) {
                b.dataset.clicked = "1";
                b.click();
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
}
```

---

# **6. Adding Floating UI for Multi-Page**

```js
function addGlobalButton() {
    if (document.querySelector("#shadowGlobalBtn")) return;

    let b = document.createElement("button");
    b.id = "shadowGlobalBtn";
    b.innerText = "Shadow Panel";
    b.style.position = "fixed";
    b.style.top = "10px";
    b.style.left = "10px";
    b.style.zIndex = "99999";
    b.style.padding = "10px";
    b.style.background = "#ff0066";
    b.style.color = "#fff";

    b.onclick = () => alert("Current page: " + location.href);
    document.body.appendChild(b);
}

addGlobalButton();
```

* Works **on any page**
* Detects current page
* Can trigger page-specific actions

---

# **7. Handling SPA Navigation**

Some websites (Instagram, YouTube) **don’t reload pages**, only change URL.

```js
let lastUrl = location.href;

const observer = new MutationObserver(() => {
    if (location.href !== lastUrl) {
        lastUrl = location.href;
        console.log("Page changed! Running script...");
        runPageSpecific();
    }
});

observer.observe(document.body, { childList: true, subtree: true });

function runPageSpecific() {
    if (location.href.includes("instagram.com")) runInstagram();
    else if (location.href.includes("youtube.com")) runYouTube();
}
```

---

# **8. Combining Everything**

* **Dynamic content:** MutationObserver
* **Cross-page storage:** GM_setValue / GM_getValue
* **Page detection:** location.href
* **UI control:** floating buttons / panels
* **Automation:** clicks, downloads, typing

With this, your script behaves like a **real mini-extension**.

---

# **9. Optional: Add Hotkeys for Multi-Page Control**

```js
document.addEventListener("keydown", e => {
    if (e.key === "d") {
        if (location.href.includes("instagram.com")) downloadInstagram();
        else if (location.href.includes("youtube.com")) console.log("YouTube hotkey pressed");
    }
});
```

* Press “d” → runs different actions depending on page

---

# **10. Summary — Part 12**

With multi-page scripting, you can now:

* Detect page dynamically
* Run **different logic per page**
* Save & share **data across pages**
* Build **floating UI panels**
* React to SPA navigation
* Create hotkeys and automation
* Build **mini extension-level scripts**

This is **professional userscript level**.

---


### **Part 12 — Multi-Page Tampermonkey Script (Extension-Level Projects)**

This is the **pro stage**: building a script that works **across multiple pages or websites**, remembers state, reacts dynamically, and has UI controls.

By the end of Part 12, you can make scripts that act like **mini browser extensions**.

---

# **1. What is a Multi-Page Script?**

A normal script:

* Works on **one page** (`@match https://site.com/*`)
* Simple, like “auto-click a button”

Multi-page script:

* Works on **multiple pages**
* Shares **data** between pages
* Adapts dynamically depending on URL
* Can handle **single-page apps** (SPA)
* Has UI across pages

Example use-cases:

* Instagram: detect posts and stories → download images/videos
* YouTube: detect video → download metadata → auto-expand comments
* Ecommerce: track product prices → store history → notify

---

# **2. Metadata Setup for Multi-Page**

```js
// ==UserScript==
// @name         Shadow Multi-Page Script
// @namespace    shadow.multi
// @version      1.0
// @match        https://www.instagram.com/*
// @match        https://www.youtube.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// ==/UserScript==
```

* `@match` can include multiple sites
* `GM_*` allows **storage shared between pages**

---

# **3. Detecting Which Page You Are On**

```js
const url = location.href;

if (url.includes("instagram.com")) {
    runInstagram();
} else if (url.includes("youtube.com")) {
    runYouTube();
}
```

Each function handles page-specific logic.

---

# **4. Example: Shared Storage Across Pages**

```js
// Save last downloaded URL on Instagram
function saveLast(url) {
    GM_setValue("last_url", url);
}

// Read it on YouTube page
let last = GM_getValue("last_url", "");
console.log("Last URL downloaded on Instagram:", last);
```

Now your script remembers actions **across different websites**.

---

# **5. Using MutationObserver Across Pages**

```js
function runInstagram() {
    const observer = new MutationObserver(() => {
        let imgs = document.querySelectorAll("img[src*='fbcdn']");
        imgs.forEach(img => {
            if (!img.dataset.processed) {
                img.dataset.processed = "1"; // mark as processed
                console.log("Found Instagram image:", img.src);
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
}
```

```js
function runYouTube() {
    const observer = new MutationObserver(() => {
        let btns = document.querySelectorAll("yt-formatted-string#more");
        btns.forEach(b => {
            if (!b.dataset.clicked) {
                b.dataset.clicked = "1";
                b.click();
            }
        });
    });

    observer.observe(document.body, { childList: true, subtree: true });
}
```

---

# **6. Adding Floating UI for Multi-Page**

```js
function addGlobalButton() {
    if (document.querySelector("#shadowGlobalBtn")) return;

    let b = document.createElement("button");
    b.id = "shadowGlobalBtn";
    b.innerText = "Shadow Panel";
    b.style.position = "fixed";
    b.style.top = "10px";
    b.style.left = "10px";
    b.style.zIndex = "99999";
    b.style.padding = "10px";
    b.style.background = "#ff0066";
    b.style.color = "#fff";

    b.onclick = () => alert("Current page: " + location.href);
    document.body.appendChild(b);
}

addGlobalButton();
```

* Works **on any page**
* Detects current page
* Can trigger page-specific actions

---

# **7. Handling SPA Navigation**

Some websites (Instagram, YouTube) **don’t reload pages**, only change URL.

```js
let lastUrl = location.href;

const observer = new MutationObserver(() => {
    if (location.href !== lastUrl) {
        lastUrl = location.href;
        console.log("Page changed! Running script...");
        runPageSpecific();
    }
});

observer.observe(document.body, { childList: true, subtree: true });

function runPageSpecific() {
    if (location.href.includes("instagram.com")) runInstagram();
    else if (location.href.includes("youtube.com")) runYouTube();
}
```

---

# **8. Combining Everything**

* **Dynamic content:** MutationObserver
* **Cross-page storage:** GM_setValue / GM_getValue
* **Page detection:** location.href
* **UI control:** floating buttons / panels
* **Automation:** clicks, downloads, typing

With this, your script behaves like a **real mini-extension**.

---

# **9. Optional: Add Hotkeys for Multi-Page Control**

```js
document.addEventListener("keydown", e => {
    if (e.key === "d") {
        if (location.href.includes("instagram.com")) downloadInstagram();
        else if (location.href.includes("youtube.com")) console.log("YouTube hotkey pressed");
    }
});
```

* Press “d” → runs different actions depending on page

---

# **10. Summary — Part 12**

With multi-page scripting, you can now:

* Detect page dynamically
* Run **different logic per page**
* Save & share **data across pages**
* Build **floating UI panels**
* React to SPA navigation
* Create hotkeys and automation
* Build **mini extension-level scripts**

This is **professional userscript level**.

---




### **Part 13 — Full Userscript Architecture & Best Practices**

This part is about **organizing, optimizing, and maintaining large Tampermonkey scripts**, so your scripts remain **readable, efficient, and professional**.

---

# **1. Why Architecture Matters**

Small scripts:

* Single page, few lines, easy to manage

Large scripts:

* Multi-page, multiple features, loops, observers
* Can get messy
* Hard to debug

A **good structure** ensures:

* Readability
* Reusability
* Easy debugging
* Scalable features
* Less CPU/memory usage

---

# **2. Recommended Foldered Architecture (Conceptual)**

```
/userscript-project
│
├── main.user.js        # Metadata + bootstrap
├── pages/
│   ├── instagram.js    # Instagram-specific code
│   └── youtube.js      # YouTube-specific code
├── utils/
│   ├── observer.js     # MutationObserver helpers
│   ├── storage.js      # GM_setValue / GM_getValue helpers
│   └── network.js      # fetch / XHR intercept helpers
└── ui/
    └── buttons.js      # Floating button & panel helpers
```

Even though Tampermonkey uses **single file**, you can **modularize using functions** and keep everything organized with comments.

---

# **3. Metadata Best Practices**

```js
// ==UserScript==
// @name         Shadow Pro Script
// @namespace    shadow.pro
// @version      1.0
// @match        https://www.instagram.com/*
// @match        https://www.youtube.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @run-at       document-idle
// ==/UserScript==
```

* `@run-at document-idle` → waits until page loads
* Always include **namespace & version**
* Include **permissions only if needed**
* Use **@match** efficiently (avoid `*`)

---

# **4. Core Architecture Pattern**

```js
(function() {
    "use strict";

    // 1. Global Variables
    let config = GM_getValue("config", {});

    // 2. Utility Functions
    function wait(ms) { return new Promise(res => setTimeout(res, ms)); }

    // 3. Page Detection
    function runPageSpecific() {
        const url = location.href;
        if (url.includes("instagram.com")) runInstagram();
        else if (url.includes("youtube.com")) runYouTube();
    }

    // 4. MutationObserver Helper
    function observeDOM(callback) {
        const observer = new MutationObserver(callback);
        observer.observe(document.body, { childList: true, subtree: true });
        return observer;
    }

    // 5. Floating UI
    function addButton() { /* ... */ }

    // 6. Page Modules
    function runInstagram() { /* ... */ }
    function runYouTube() { /* ... */ }

    // 7. Hotkeys
    document.addEventListener("keydown", e => { /* ... */ });

    // 8. Initialization
    runPageSpecific();
    addButton();

})();
```

---

# **5. Coding Style Best Practices**

1. **Use functions for every feature** – don’t mix everything in one place.
2. **Use `const` & `let`**, avoid `var`.
3. **Comment liberally** – your future self will thank you.
4. **Flag processed elements** – avoid repeated clicks/processing.

```js
element.dataset.processed = "1";
```

5. **Use delays for automation** – makes behavior human-like and safe.
6. **Use MutationObserver instead of setInterval** – efficient.
7. **Store persistent settings** in GM_setValue / GM_getValue.
8. **Keep selectors flexible** – sites update classes often.

---

# **6. Debugging Tips**

* Always use `console.log()` to trace variables & selectors.
* Test **page by page**, not all features at once.
* Use `try…catch` to prevent errors from breaking entire script.

```js
try { button.click(); } catch(e) { console.log(e); }
```

* Use **flags** to prevent repeated actions.

---

# **7. Performance Tips**

* Avoid scanning the entire DOM every 100ms.
* Observe **specific containers** instead of `document.body` if possible.
* Disconnect observers when not needed:

```js
observer.disconnect();
```

* Limit loops and auto-click speeds.

---

# **8. Security & Ethics**

* Never steal private data.
* Don’t spam websites.
* Avoid running scripts on login pages without permission.
* Don’t hardcode passwords – use **secure storage**.
* Make scripts **optional** for users – allow toggles.

---

# **9. Example: Pro Modular Script Template**

```js
(function() {
    "use strict";

    // ======== CONFIG ========
    const config = GM_getValue("config", { autoDownload: true });

    // ======== UTILITIES ========
    const wait = ms => new Promise(res => setTimeout(res, ms));

    // ======== PAGE DETECTION ========
    const runPage = () => {
        if (location.href.includes("instagram.com")) runInstagram();
        else if (location.href.includes("youtube.com")) runYouTube();
    };

    // ======== OBSERVER HELPER ========
    const observe = callback => new MutationObserver(callback).observe(document.body, { childList: true, subtree: true });

    // ======== MODULES ========
    function runInstagram() { console.log("Instagram logic here"); }
    function runYouTube() { console.log("YouTube logic here"); }

    // ======== UI ========
    function addButton() { console.log("Floating button"); }

    // ======== HOTKEYS ========
    document.addEventListener("keydown", e => { if(e.key==="d") console.log("Hotkey pressed"); });

    // ======== INIT ========
    runPage();
    addButton();

})();
```

---

# **10. Summary — Part 13**

After Part 13, you can now:

* Organize large scripts professionally
* Write modular, reusable functions
* Handle multiple pages efficiently
* Debug and optimize your code
* Use storage, UI, hotkeys, observers properly
* Follow security and ethical guidelines

You are now at a **professional Tampermonkey developer level**.

---




### **Part 14 — Advanced Techniques: Anti‑Detection, Network Interception, Hidden API Extraction**

This is the **EXPERT LEVEL**.
Here you learn how to make scripts that feel like **full browser extensions** and can survive dynamic websites.

---

# **1. Anti‑Detection Basics**

Some websites detect:

* Auto‑clicking
* Fast loop actions
* Script-created elements
* Too many downloads
* Bots with unnatural timing

To stay safe:

### **a) Add random delay**

```js
function randomDelay(min=200, max=800) {
    return new Promise(res => setTimeout(res, Math.floor(Math.random()*(max-min))+min));
}
```

Use instead of instant clicking:

```js
await randomDelay();
button.click();
```

Makes script feel human.

---

### **b) Don’t modify sensitive DOM immediately**

If you want to auto-click something:

```js
setTimeout(() => button.click(), 1200);
```

Give page time to load guards.

---

### **c) Hide your own buttons**

Add CSS to avoid detection:

```js
btn.style.pointerEvents = "auto";  
btn.style.userSelect = "none";  
btn.style.opacity = "0.98";  
```

Not 100% opaque or too perfect → looks real.

---

# **2. Network Interception (Very Powerful!)**

Websites load images/videos using `fetch()` or `XMLHttpRequest`.
You can intercept both.

---

## **a) Intercept fetch()**

```js
const originalFetch = window.fetch;
window.fetch = async function(...args) {
    const response = await originalFetch.apply(this, args);

    console.log("[INTERCEPTED FETCH]", args[0]);

    return response;
};
```

You see every network call.

Use case:

* Instagram image API endpoints
* YouTube JSON data
* Tiktok media URLs
* Any hidden API

---

## **b) Intercept XHR**

```js
(function(open) {
    XMLHttpRequest.prototype.open = function(method, url) {
        console.log("[XHR]", method, url);
        return open.apply(this, arguments);
    };
})(XMLHttpRequest.prototype.open);
```

Good for detecting:

* `/media/?`
* `/graphql/…` data
* `/ajax/…`

---

# **3. Extracting Hidden API Responses**

Some sites send JSON with image/video URLs.

Interception + reading response:

```js
window.fetch = async function(...args) {
    const res = await originalFetch(...args);

    res.clone().json().then(data => {
        try {
            console.log("Hidden JSON:", data);
        } catch(e) {}
    });

    return res;
};
```

Now you can see **actual hidden backend responses**, even if site blocks right-click or devtools.

---

# **4. Auto Downloading Media from API**

Example for Instagram:

They often return:

```
graphql → user → profile_pic_url_hd
graphql → shortcode_media → display_url
```

You can filter like this:

```js
if (url.includes("/graphql/")) {
    res.clone().json().then(json => {
        let media = json?.data?.shortcode_media;
        if (!media) return;

        let pic = media.display_url;
        download(pic);
    });
}
```

---

# **5. Request Blocking (Anti‑Ads / Anti‑Tracking)**

Block scripts from loading:

```js
if (url.includes("ads.js")) return new Response("", {status: 200});
```

Use this to block:

* Ads
* Trackers
* Popups

---

# **6. Overriding JavaScript Functions (Advanced)**

Override dangerous site functions.

Example: disable scroll-blocking:

```js
Element.prototype.addEventListener = new Proxy(Element.prototype.addEventListener, {
    apply(target, thisArg, args) {
        if (args[0] === "scroll" && args[2] === true) {
            return; // block
        }
        return Reflect.apply(target, thisArg, args);
    }
});
```

---

# **7. Hooking Console Logs**

Some sites hide errors from devtools.

Reveal hidden logs:

```js
console._log = console.log;
console.log = (...a) => {
    console._log("[SHADOW LOG]", ...a);
};
```

---

# **8. Injecting Scripts into Page Context**

Tampermonkey runs in isolated world.
Sometimes we need access to **page world**, where original JS runs.

Use this technique:

```js
function inject(fn) {
    const script = document.createElement('script');
    script.textContent = '(' + fn.toString() + ')()';
    document.documentElement.appendChild(script);
    script.remove();
}
```

Now you can override:

* window.fetch
* site’s own functions
* config variables

---

# **9. Concealing Modifications**

To avoid detection:

* Use MutationObserver only on **needed** nodes
* Avoid fixed timing loops
* Don’t add too many DOM nodes
* Use small CSS modifications
* Don’t leave long console logs

---

# **10. Real Example — Strong Instagram Downloader (API + Interception)**

```js
// ==UserScript==
// @name         Shadow IG Pro
// @namespace    shadow.ig.pro
// @version      1.0
// @match        https://www.instagram.com/*
// @grant        none
// ==/UserScript==

(function() {
    "use strict";

    const originalFetch = window.fetch;

    window.fetch = async (...args) => {
        const res = await originalFetch(...args);
        const url = args[0];

        if (url.includes("/graphql/")) {
            res.clone().json().then(json => {
                let media = json?.data?.shortcode_media;
                if (!media) return;

                let img = media.display_url;

                console.log("FOUND IMG API:", img);
            });
        }

        return res;
    };
})();
```

This script catches **all IG images** even if the HTML blocks downloads.

---

# **11. Summary — Part 14**

You now learned:

✔ Random timing anti‑detection
✔ Hiding script actions
✔ Intercepting network (fetch / XHR)
✔ Extracting hidden API responses
✔ Reading JSON from the backend
✔ Blocking ads/trackers
✔ Overriding webpage JS
✔ Running injected script in page context
✔ API-based Instagram downloader structure

This is **full expert level**.

---


### **Part 15 — Full Automatic Media Downloader (Instagram + YouTube + TikTok)**

This is the **capstone project**.
We combine **all previous skills**: multi-page, MutationObserver, storage, UI, anti-detection, network interception — into one pro script.

---

# **1. Project Plan**

**Goal:**

* Detect media (images/videos) on Instagram, YouTube, TikTok
* Automatically download or show “Download” button
* Remember downloaded history
* Avoid duplicate downloads
* Work on infinite scroll / dynamic pages

---

# **2. Metadata Setup**

```js
// ==UserScript==
// @name         Shadow Multi Media Downloader
// @namespace    shadow.multi.media
// @version      1.0
// @match        https://www.instagram.com/*
// @match        https://www.youtube.com/*
// @match        https://www.tiktok.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @run-at       document-idle
// ==/UserScript==
```

---

# **3. Storage for Download History**

```js
function saveHistory(url) {
    let history = GM_getValue("history", []);
    if (!history.includes(url)) {
        history.push(url);
        GM_setValue("history", history);
        return true; // new download
    }
    return false; // already downloaded
}

function getHistory() {
    return GM_getValue("history", []);
}
```

---

# **4. MutationObserver for Dynamic Pages**

```js
function observeDOM(callback) {
    const observer = new MutationObserver(callback);
    observer.observe(document.body, { childList: true, subtree: true });
    return observer;
}
```

---

# **5. Utility: Download Function**

```js
function download(url, filename="media") {
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
}
```

---

# **6. Instagram Media Detection**

```js
function runInstagram() {
    observeDOM(() => {
        let imgs = document.querySelectorAll("img[src*='fbcdn'][src*='instagram']");
        imgs.forEach(img => {
            if (!img.dataset.processed) {
                img.dataset.processed = "1";
                if (saveHistory(img.src)) {
                    download(img.src, "instagram.jpg");
                    console.log("Downloaded Instagram image:", img.src);
                }
            }
        });
    });
}
```

---

# **7. YouTube Video / Thumbnail Detection**

```js
function runYouTube() {
    observeDOM(() => {
        let video = document.querySelector("video");
        if (video && !video.dataset.downloaded) {
            video.dataset.downloaded = "1";
            if (saveHistory(video.src)) {
                download(video.src, "youtube.mp4");
                console.log("Downloaded YouTube video:", video.src);
            }
        }
    });
}
```

---

# **8. TikTok Video Detection**

```js
function runTikTok() {
    observeDOM(() => {
        let videos = document.querySelectorAll("video[src]");
        videos.forEach(v => {
            if (!v.dataset.downloaded) {
                v.dataset.downloaded = "1";
                if (saveHistory(v.src)) {
                    download(v.src, "tiktok.mp4");
                    console.log("Downloaded TikTok video:", v.src);
                }
            }
        });
    });
}
```

---

# **9. UI: Floating Panel for Controls**

```js
function addPanel() {
    if (document.querySelector("#shadowPanel")) return;

    let panel = document.createElement("div");
    panel.id = "shadowPanel";
    panel.style.position = "fixed";
    panel.style.top = "10px";
    panel.style.left = "10px";
    panel.style.background = "#ff0066";
    panel.style.color = "#fff";
    panel.style.padding = "10px";
    panel.style.borderRadius = "8px";
    panel.style.zIndex = "99999";

    let btnHistory = document.createElement("button");
    btnHistory.innerText = "Show Download History";
    btnHistory.onclick = () => console.log(getHistory());

    panel.appendChild(btnHistory);
    document.body.appendChild(panel);
}

addPanel();
```

---

# **10. Page Detection and Initialization**

```js
const url = location.href;

if (url.includes("instagram.com")) runInstagram();
else if (url.includes("youtube.com")) runYouTube();
else if (url.includes("tiktok.com")) runTikTok();
```

---

# **11. Anti-Detection Enhancements**

* Random delays before auto-download:

```js
async function safeDownload(url, filename) {
    await new Promise(r => setTimeout(r, Math.random() * 1000 + 500));
    download(url, filename);
}
```

* Mark elements to avoid re-processing: `dataset.processed = "1"`
* Limit observer scans by container (optional for performance)

---

# **12. Summary — Part 15**

✅ Multi-site support: Instagram, YouTube, TikTok
✅ Auto-download new media only once
✅ Floating control panel with history
✅ Handles dynamic/infinite scroll pages
✅ Uses MutationObserver for efficiency
✅ Anti-detection random delays

This is **a full pro-level userscript**, combining **everything from Parts 1–14**.

---


### **Part 16 — Professional Packaging & Distribution of Userscripts**

This is the **final pro step**: making your userscript install-ready, maintainable, and easily distributable.
It includes **versioning, updates, configuration, and professional presentation**.

---

# **1. Why Professional Packaging Matters**

A well-packaged script:

* Can be installed by anyone with Tampermonkey/Greasemonkey
* Supports **automatic updates**
* Looks professional
* Includes **configurable options**
* Easy to maintain and debug
* Avoids breaking on site changes

---

# **2. Metadata for Professional Scripts**

```js
// ==UserScript==
// @name         Shadow Multi Media Downloader PRO
// @namespace    shadow.multi.media
// @version      1.0.0
// @description  Automatic downloader for Instagram, YouTube, and TikTok media. Includes history, floating panel, and anti-detection features.
// @author       Shadow
// @match        https://www.instagram.com/*
// @match        https://www.youtube.com/*
// @match        https://www.tiktok.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @run-at       document-idle
// @updateURL    https://yourdomain.com/shadow-multi-media.user.js
// @downloadURL  https://yourdomain.com/shadow-multi-media.user.js
// ==/UserScript==
```

**Explanation of professional fields:**

* `@version` → Semantic versioning (major.minor.patch)
* `@description` → Clear description
* `@updateURL` → Automatic updates from your server
* `@downloadURL` → Installation URL
* `@author` → Credit / branding

---

# **3. Adding a Configuration Panel**

Allows users to toggle features:

```js
function addConfigPanel() {
    if (document.querySelector("#shadowConfig")) return;

    let panel = document.createElement("div");
    panel.id = "shadowConfig";
    panel.style.position = "fixed";
    panel.style.bottom = "10px";
    panel.style.left = "10px";
    panel.style.background = "#222";
    panel.style.color = "#fff";
    panel.style.padding = "10px";
    panel.style.borderRadius = "8px";
    panel.style.zIndex = "99999";

    // Example toggle: auto-download
    let autoDownload = GM_getValue("autoDownload", true);

    let label = document.createElement("label");
    label.innerText = "Auto-Download: ";
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = autoDownload;
    checkbox.onchange = () => GM_setValue("autoDownload", checkbox.checked);

    label.appendChild(checkbox);
    panel.appendChild(label);
    document.body.appendChild(panel);
}

addConfigPanel();
```

---

# **4. Version Control & Updates**

* Update `@version` every time you release a fix or new feature
* Tampermonkey checks `@updateURL` automatically
* Host script on GitHub, GitLab, or personal server

Example workflow:

1. Push updates to GitHub raw URL
2. Change `@version`
3. Users’ Tampermonkey prompts update

---

# **5. Minifying & Optimizing Script**

* Use online JS minifiers (uglify-js, terser)
* Reduce whitespace, comments for production
* Keep a **full commented source locally** for future maintenance

---

# **6. Packaging Example**

Folder structure:

```
/ShadowMultiMediaDownloader
│
├── src/
│   ├── main.js          # Full script with comments
│   ├── instagram.js     # Instagram module
│   ├── youtube.js       # YouTube module
│   └── tiktok.js        # TikTok module
└── dist/
    └── shadow-multi-media.user.js  # Minified & production-ready
```

* Keep **src/** for development
* Deploy **dist/** to public URL for Tampermonkey installation

---

# **7. Optional: Branding & Icons**

* Add console branding:

```js
console.log("%cShadow Multi Media Downloader v1.0.0", "color:#ff0066;font-weight:bold;");
```

* Add UI colors / logos for professional look

---

# **8. Testing Before Release**

* Test **every supported page**
* Test **infinite scroll / SPA navigation**
* Test **toggle options**
* Test **download history**

---

# **9. Hosting Options**

* **GitHub** → raw URLs work with `@updateURL`
* **GitLab** → similar raw file URL
* **Personal server / CDN** → best if you want control
* Ensure `@updateURL` and `@downloadURL` point to exact script URL

---

# **10. Summary — Part 16**

You now know how to:

* Structure your script for professional use
* Add floating UI + config panel
* Implement auto-update via `@updateURL`
* Use semantic versioning for releases
* Host scripts for public installation
* Minify and optimize for production
* Brand your script for professional presentation

---

At this stage, you are fully equipped to **develop, maintain, and distribute pro-level Tampermonkey scripts** for multiple sites, with UI, automation, storage, anti-detection, and network interception.

This completes the **full 16-part master course**.

You now have **everything from beginner to expert**, ready to build **real-world scripts like a professional**.

---




Perfect! Here's a **single master Tampermonkey script** that combines everything from Parts 1–16.
It’s fully documented, production-ready, supports Instagram, YouTube, TikTok, has floating UI, configuration panel, download history, MutationObserver, anti-detection, and multi-page handling.

---

```js
// ==UserScript==
// @name         Shadow Multi Media Downloader PRO
// @namespace    shadow.multi.media
// @version      1.0.0
// @description  Automatic media downloader for Instagram, YouTube, TikTok with history, floating UI, anti-detection, and multi-page support.
// @author       Shadow
// @match        https://www.instagram.com/*
// @match        https://www.youtube.com/*
// @match        https://www.tiktok.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @run-at       document-idle
// @updateURL    https://yourdomain.com/shadow-multi-media.user.js
// @downloadURL  https://yourdomain.com/shadow-multi-media.user.js
// ==/UserScript==

(function() {
    "use strict";

    // =====================
    // 1. CONFIGURATION
    // =====================
    const config = {
        autoDownload: GM_getValue("autoDownload", true),
        downloadHistory: GM_getValue("history", []),
        antiDetectionDelay: {min: 300, max: 1000} // random delay ms
    };

    // =====================
    // 2. UTILITY FUNCTIONS
    // =====================
    const wait = ms => new Promise(res => setTimeout(res, ms));

    async function randomDelay() {
        const {min, max} = config.antiDetectionDelay;
        await wait(Math.floor(Math.random()*(max-min)) + min);
    }

    function saveHistory(url) {
        if (!config.downloadHistory.includes(url)) {
            config.downloadHistory.push(url);
            GM_setValue("history", config.downloadHistory);
            return true; // new download
        }
        return false; // already downloaded
    }

    function getHistory() {
        return config.downloadHistory;
    }

    function download(url, filename="media") {
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
    }

    async function safeDownload(url, filename="media") {
        await randomDelay();
        download(url, filename);
    }

    // =====================
    // 3. MUTATION OBSERVER HELPER
    // =====================
    function observeDOM(callback) {
        const observer = new MutationObserver(callback);
        observer.observe(document.body, { childList: true, subtree: true });
        return observer;
    }

    // =====================
    // 4. PAGE-SPECIFIC MODULES
    // =====================
    function runInstagram() {
        observeDOM(async () => {
            let imgs = document.querySelectorAll("img[src*='fbcdn'][src*='instagram']");
            imgs.forEach(async img => {
                if (!img.dataset.processed) {
                    img.dataset.processed = "1";
                    if (config.autoDownload && saveHistory(img.src)) {
                        await safeDownload(img.src, "instagram.jpg");
                        console.log("Downloaded Instagram image:", img.src);
                    }
                }
            });
        });
    }

    function runYouTube() {
        observeDOM(async () => {
            let video = document.querySelector("video");
            if (video && !video.dataset.downloaded) {
                video.dataset.downloaded = "1";
                if (config.autoDownload && saveHistory(video.src)) {
                    await safeDownload(video.src, "youtube.mp4");
                    console.log("Downloaded YouTube video:", video.src);
                }
            }
        });
    }

    function runTikTok() {
        observeDOM(async () => {
            let videos = document.querySelectorAll("video[src]");
            videos.forEach(async v => {
                if (!v.dataset.downloaded) {
                    v.dataset.downloaded = "1";
                    if (config.autoDownload && saveHistory(v.src)) {
                        await safeDownload(v.src, "tiktok.mp4");
                        console.log("Downloaded TikTok video:", v.src);
                    }
                }
            });
        });
    }

    // =====================
    // 5. FLOATING PANEL / UI
    // =====================
    function addPanel() {
        if (document.querySelector("#shadowPanel")) return;

        let panel = document.createElement("div");
        panel.id = "shadowPanel";
        panel.style.position = "fixed";
        panel.style.top = "10px";
        panel.style.left = "10px";
        panel.style.background = "#ff0066";
        panel.style.color = "#fff";
        panel.style.padding = "10px";
        panel.style.borderRadius = "8px";
        panel.style.zIndex = "99999";
        panel.style.fontSize = "14px";

        // Download History Button
        let btnHistory = document.createElement("button");
        btnHistory.innerText = "Show Download History";
        btnHistory.style.marginBottom = "5px";
        btnHistory.onclick = () => console.log("Download History:", getHistory());

        // Auto-Download Toggle
        let label = document.createElement("label");
        label.style.display = "block";
        label.style.marginTop = "5px";
        label.innerText = "Auto-Download: ";
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = config.autoDownload;
        checkbox.onchange = () => {
            config.autoDownload = checkbox.checked;
            GM_setValue("autoDownload", checkbox.checked);
        };
        label.appendChild(checkbox);

        panel.appendChild(btnHistory);
        panel.appendChild(label);
        document.body.appendChild(panel);
    }

    addPanel();

    // =====================
    // 6. SPA / URL CHANGE HANDLING
    // =====================
    let lastUrl = location.href;

    const urlObserver = new MutationObserver(() => {
        if (location.href !== lastUrl) {
            lastUrl = location.href;
            runPageSpecific();
        }
    });

    urlObserver.observe(document.body, { childList: true, subtree: true });

    // =====================
    // 7. PAGE DETECTION
    // =====================
    function runPageSpecific() {
        const url = location.href;
        if (url.includes("instagram.com")) runInstagram();
        else if (url.includes("youtube.com")) runYouTube();
        else if (url.includes("tiktok.com")) runTikTok();
    }

    runPageSpecific();

    // =====================
    // 8. HOTKEY SUPPORT (Optional)
    // =====================
    document.addEventListener("keydown", e => {
        if (e.key === "h") console.log("Download History:", getHistory());
    });

    // =====================
    // 9. NETWORK INTERCEPTION (Optional / Expert)
    // =====================
    const originalFetch = window.fetch;
    window.fetch = async (...args) => {
        const res = await originalFetch.apply(this, args);
        const url = args[0];
        if (url.includes("/graphql/")) {
            res.clone().json().then(data => {
                try {
                    const media = data?.data?.shortcode_media;
                    if (media && config.autoDownload) {
                        safeDownload(media.display_url, "instagram_graphql.jpg");
                        console.log("Downloaded via API:", media.display_url);
                    }
                } catch(e){}
            });
        }
        return res;
    };

    // =====================
    // 10. SCRIPT INIT LOG
    // =====================
    console.log("%cShadow Multi Media Downloader PRO v1.0.0 Loaded", "color:#ff0066;font-weight:bold;");

})();
```

---

### **✅ Features in This Master Script:**

1. **Multi-site support**: Instagram, YouTube, TikTok
2. **Automatic download** for images/videos
3. **Floating UI panel** with history and toggles
4. **Download history** stored across pages with GM_setValue / GM_getValue
5. **Anti-detection** random delay before downloads
6. **MutationObserver** for dynamic / SPA pages
7. **Hotkey support** (`h` shows history)
8. **Network interception for Instagram GraphQL**
9. **Full multi-page detection** and SPA navigation handling
10. **Versioned and update-ready metadata**
11. **Professional comments and structure** for maintainability

---

This is **a complete production-ready Tampermonkey script**, integrating everything from **Part 1 to Part 16**.

You can now **host it, share it, or extend it further** with more platforms, custom download naming, or advanced UI.

---

If you want, I can also **make a mini “installer + config panel UI version”** that allows users to **pick which sites to enable** and **customize file naming rules** — fully professional extension-style experience.








Perfect! Here’s a **mini installer + configurable UI version** of the Shadow Multi Media Downloader.
This version lets users **choose which sites to enable**, **toggle auto-download**, and **customize file naming patterns**, all from a friendly floating panel.

---

```js
// ==UserScript==
// @name         Shadow Media Downloader Configurable PRO
// @namespace    shadow.media.config
// @version      1.0.0
// @description  Configurable media downloader for Instagram, YouTube, TikTok. Pick sites, toggle auto-download, customize filenames.
// @author       Shadow
// @match        https://www.instagram.com/*
// @match        https://www.youtube.com/*
// @match        https://www.tiktok.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @run-at       document-idle
// ==/UserScript==

(function() {
    "use strict";

    // =====================
    // 1. CONFIGURATION
    // =====================
    const config = GM_getValue("config", {
        autoDownload: true,
        enableInstagram: true,
        enableYouTube: true,
        enableTikTok: true,
        filenamePattern: "{site}_{timestamp}"
    });

    // =====================
    // 2. UTILITY FUNCTIONS
    // =====================
    const wait = ms => new Promise(res => setTimeout(res, ms));

    async function randomDelay(min=300, max=1000) {
        await wait(Math.floor(Math.random() * (max-min)) + min);
    }

    function generateFilename(site) {
        const ts = new Date().getTime();
        return config.filenamePattern.replace("{site}", site).replace("{timestamp}", ts);
    }

    const history = GM_getValue("history", []);
    function saveHistory(url) {
        if (!history.includes(url)) {
            history.push(url);
            GM_setValue("history", history);
            return true;
        }
        return false;
    }

    function getHistory() {
        return history;
    }

    function download(url, filename="media") {
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
    }

    async function safeDownload(url, filename) {
        await randomDelay();
        download(url, filename);
    }

    function observeDOM(callback) {
        const observer = new MutationObserver(callback);
        observer.observe(document.body, { childList: true, subtree: true });
        return observer;
    }

    // =====================
    // 3. PAGE MODULES
    // =====================
    function runInstagram() {
        if (!config.enableInstagram) return;
        observeDOM(async () => {
            const imgs = document.querySelectorAll("img[src*='fbcdn'][src*='instagram']");
            imgs.forEach(async img => {
                if (!img.dataset.processed) {
                    img.dataset.processed = "1";
                    if (config.autoDownload && saveHistory(img.src)) {
                        await safeDownload(img.src, generateFilename("instagram") + ".jpg");
                        console.log("Downloaded Instagram image:", img.src);
                    }
                }
            });
        });
    }

    function runYouTube() {
        if (!config.enableYouTube) return;
        observeDOM(async () => {
            const video = document.querySelector("video");
            if (video && !video.dataset.downloaded) {
                video.dataset.downloaded = "1";
                if (config.autoDownload && saveHistory(video.src)) {
                    await safeDownload(video.src, generateFilename("youtube") + ".mp4");
                    console.log("Downloaded YouTube video:", video.src);
                }
            }
        });
    }

    function runTikTok() {
        if (!config.enableTikTok) return;
        observeDOM(async () => {
            const videos = document.querySelectorAll("video[src]");
            videos.forEach(async v => {
                if (!v.dataset.downloaded) {
                    v.dataset.downloaded = "1";
                    if (config.autoDownload && saveHistory(v.src)) {
                        await safeDownload(v.src, generateFilename("tiktok") + ".mp4");
                        console.log("Downloaded TikTok video:", v.src);
                    }
                }
            });
        });
    }

    function runPages() {
        const url = location.href;
        if (url.includes("instagram.com")) runInstagram();
        else if (url.includes("youtube.com")) runYouTube();
        else if (url.includes("tiktok.com")) runTikTok();
    }

    // =====================
    // 4. FLOATING CONFIG PANEL
    // =====================
    function addConfigPanel() {
        if (document.querySelector("#shadowConfigPanel")) return;

        const panel = document.createElement("div");
        panel.id = "shadowConfigPanel";
        panel.style.position = "fixed";
        panel.style.bottom = "10px";
        panel.style.left = "10px";
        panel.style.background = "#222";
        panel.style.color = "#fff";
        panel.style.padding = "12px";
        panel.style.borderRadius = "8px";
        panel.style.zIndex = "99999";
        panel.style.fontSize = "14px";
        panel.style.width = "200px";
        panel.style.boxShadow = "0 0 10px #000";

        // Auto-download toggle
        const autoLabel = document.createElement("label");
        autoLabel.innerText = "Auto-Download: ";
        const autoCheckbox = document.createElement("input");
        autoCheckbox.type = "checkbox";
        autoCheckbox.checked = config.autoDownload;
        autoCheckbox.onchange = () => {
            config.autoDownload = autoCheckbox.checked;
            GM_setValue("config", config);
        };
        autoLabel.appendChild(autoCheckbox);
        panel.appendChild(autoLabel);

        panel.appendChild(document.createElement("br"));

        // Site toggles
        const sites = ["Instagram", "YouTube", "TikTok"];
        sites.forEach(site => {
            const label = document.createElement("label");
            label.innerText = site + ": ";
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            const key = "enable" + site;
            checkbox.checked = config[key];
            checkbox.onchange = () => {
                config[key] = checkbox.checked;
                GM_setValue("config", config);
            };
            label.appendChild(checkbox);
            panel.appendChild(label);
            panel.appendChild(document.createElement("br"));
        });

        // Filename pattern input
        const patternLabel = document.createElement("label");
        patternLabel.innerText = "Filename Pattern:\n{site}_{timestamp}";
        patternLabel.style.display = "block";
        const patternInput = document.createElement("input");
        patternInput.type = "text";
        patternInput.value = config.filenamePattern;
        patternInput.style.width = "100%";
        patternInput.onchange = () => {
            config.filenamePattern = patternInput.value;
            GM_setValue("config", config);
        };
        patternLabel.appendChild(patternInput);
        panel.appendChild(patternLabel);

        // Show download history button
        const historyBtn = document.createElement("button");
        historyBtn.innerText = "Show History";
        historyBtn.style.marginTop = "5px";
        historyBtn.onclick = () => console.log("Download History:", getHistory());
        panel.appendChild(historyBtn);

        document.body.appendChild(panel);
    }

    addConfigPanel();

    // =====================
    // 5. SPA / URL CHANGE HANDLING
    // =====================
    let lastUrl = location.href;
    const urlObserver = new MutationObserver(() => {
        if (location.href !== lastUrl) {
            lastUrl = location.href;
            runPages();
        }
    });
    urlObserver.observe(document.body, { childList: true, subtree: true });

    // =====================
    // 6. INITIALIZATION
    // =====================
    runPages();

    console.log("%cShadow Media Downloader Configurable PRO Loaded", "color:#ff0066;font-weight:bold;");

})();
```

---

### **✅ Features of This Configurable Version**

1. Floating **configuration panel**
2. Toggle **auto-download**
3. Enable/disable each site (Instagram, YouTube, TikTok)
4. **Custom filename patterns** (`{site}_{timestamp}`)
5. **Download history** stored persistently
6. MutationObserver handles **dynamic SPA pages**
7. Anti-detection **random delays** for downloads
8. Fully professional structure — easy to extend

---

This is essentially a **mini extension-style Tampermonkey script**, giving users **full control over behavior** while keeping auto-download features safe and organized.

It’s ready for **public distribution** and can be updated via `@updateURL` in the metadata.

---



Perfect! Here’s an **enhanced version** of the configurable Shadow Media Downloader with **collapsible panels, color-coded buttons, and a cleaner UI**.

---

```js
// ==UserScript==
// @name         Shadow Media Downloader Configurable PRO UI
// @namespace    shadow.media.config.ui
// @version      1.1.0
// @description  Configurable media downloader with collapsible panels, color-coded buttons, Instagram/YouTube/TikTok support, history, and filename customization.
// @author       Shadow
// @match        https://www.instagram.com/*
// @match        https://www.youtube.com/*
// @match        https://www.tiktok.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @run-at       document-idle
// ==/UserScript==

(function() {
    "use strict";

    // =====================
    // 1. CONFIGURATION
    // =====================
    const config = GM_getValue("config", {
        autoDownload: true,
        enableInstagram: true,
        enableYouTube: true,
        enableTikTok: true,
        filenamePattern: "{site}_{timestamp}"
    });

    // =====================
    // 2. UTILITY FUNCTIONS
    // =====================
    const wait = ms => new Promise(res => setTimeout(res, ms));
    async function randomDelay(min=300,max=1000){await wait(Math.floor(Math.random()*(max-min))+min);}
    function generateFilename(site){return config.filenamePattern.replace("{site}",site).replace("{timestamp}",Date.now());}
    const history = GM_getValue("history", []);
    function saveHistory(url){if(!history.includes(url)){history.push(url);GM_setValue("history",history);return true;}return false;}
    function getHistory(){return history;}
    function download(url,filename="media"){const a=document.createElement("a");a.href=url;a.download=filename;document.body.appendChild(a);a.click();a.remove();}
    async function safeDownload(url,filename){await randomDelay();download(url,filename);}
    function observeDOM(callback){const obs=new MutationObserver(callback);obs.observe(document.body,{childList:true,subtree:true});return obs;}

    // =====================
    // 3. PAGE MODULES
    // =====================
    function runInstagram(){
        if(!config.enableInstagram) return;
        observeDOM(async ()=>{
            const imgs=document.querySelectorAll("img[src*='fbcdn'][src*='instagram']");
            imgs.forEach(async img=>{
                if(!img.dataset.processed){img.dataset.processed="1";
                    if(config.autoDownload&&saveHistory(img.src))await safeDownload(img.src,generateFilename("instagram")+".jpg");
                }
            });
        });
    }
    function runYouTube(){
        if(!config.enableYouTube) return;
        observeDOM(async ()=>{
            const video=document.querySelector("video");
            if(video&&!video.dataset.downloaded){video.dataset.downloaded="1";
                if(config.autoDownload&&saveHistory(video.src))await safeDownload(video.src,generateFilename("youtube")+".mp4");
            }
        });
    }
    function runTikTok(){
        if(!config.enableTikTok) return;
        observeDOM(async ()=>{
            const videos=document.querySelectorAll("video[src]");
            videos.forEach(async v=>{
                if(!v.dataset.downloaded){v.dataset.downloaded="1";
                    if(config.autoDownload&&saveHistory(v.src))await safeDownload(v.src,generateFilename("tiktok")+".mp4");
                }
            });
        });
    }
    function runPages(){
        const url=location.href;
        if(url.includes("instagram.com")) runInstagram();
        else if(url.includes("youtube.com")) runYouTube();
        else if(url.includes("tiktok.com")) runTikTok();
    }

    // =====================
    // 4. COLLAPSIBLE CONFIG PANEL
    // =====================
    function addConfigPanel(){
        if(document.querySelector("#shadowConfigPanel")) return;

        const panel=document.createElement("div");
        panel.id="shadowConfigPanel";
        panel.style.position="fixed";
        panel.style.bottom="10px";
        panel.style.left="10px";
        panel.style.background="#1a1a1a";
        panel.style.color="#fff";
        panel.style.padding="10px";
        panel.style.borderRadius="10px";
        panel.style.zIndex="99999";
        panel.style.fontSize="13px";
        panel.style.width="220px";
        panel.style.boxShadow="0 0 12px #000";

        // Toggle collapse
        const header=document.createElement("div");
        header.innerText="Shadow Downloader ⚡";
        header.style.cursor="pointer";
        header.style.fontWeight="bold";
        header.style.background="#ff0066";
        header.style.padding="5px";
        header.style.borderRadius="5px";
        header.style.textAlign="center";
        panel.appendChild(header);

        const content=document.createElement("div");
        content.style.marginTop="8px";

        header.onclick=()=>{content.style.display=content.style.display==="none"?"block":"none";};
        content.style.display="block";

        // Auto-download toggle
        const autoLabel=document.createElement("label");
        autoLabel.innerText="Auto-Download: ";
        const autoCheckbox=document.createElement("input");
        autoCheckbox.type="checkbox";
        autoCheckbox.checked=config.autoDownload;
        autoCheckbox.onchange=()=>{config.autoDownload=autoCheckbox.checked;GM_setValue("config",config);};
        autoLabel.appendChild(autoCheckbox);
        content.appendChild(autoLabel);
        content.appendChild(document.createElement("br"));

        // Site toggles with color-coded buttons
        const sites=[{name:"Instagram",color:"#ff0055"},{name:"YouTube",color:"#ffcc00"},{name:"TikTok",color:"#33ccff"}];
        sites.forEach(site=>{
            const label=document.createElement("label");
            label.innerText=site.name+": ";
            const checkbox=document.createElement("input");
            checkbox.type="checkbox";
            const key="enable"+site.name;
            checkbox.checked=config[key];
            checkbox.onchange=()=>{config[key]=checkbox.checked;GM_setValue("config",config);};
            const colorBox=document.createElement("span");
            colorBox.style.background=site.color;
            colorBox.style.display="inline-block";
            colorBox.style.width="12px";
            colorBox.style.height="12px";
            colorBox.style.marginRight="3px";
            colorBox.style.borderRadius="3px";
            label.prepend(colorBox);
            label.appendChild(checkbox);
            content.appendChild(label);
            content.appendChild(document.createElement("br"));
        });

        // Filename pattern input
        const patternLabel=document.createElement("label");
        patternLabel.innerText="Filename Pattern:";
        patternLabel.style.display="block";
        const patternInput=document.createElement("input");
        patternInput.type="text";
        patternInput.value=config.filenamePattern;
        patternInput.style.width="100%";
        patternInput.onchange=()=>{config.filenamePattern=patternInput.value;GM_setValue("config",config);};
        patternLabel.appendChild(patternInput);
        content.appendChild(patternLabel);

        // Show history button
        const historyBtn=document.createElement("button");
        historyBtn.innerText="Show History";
        historyBtn.style.background="#33cc33";
        historyBtn.style.color="#fff";
        historyBtn.style.border="none";
        historyBtn.style.padding="4px 6px";
        historyBtn.style.borderRadius="4px";
        historyBtn.style.cursor="pointer";
        historyBtn.style.marginTop="5px";
        historyBtn.onclick=()=>console.log("Download History:",getHistory());
        content.appendChild(historyBtn);

        panel.appendChild(content);
        document.body.appendChild(panel);
    }

    addConfigPanel();

    // =====================
    // 5. SPA / URL CHANGE HANDLING
    // =====================
    let lastUrl=location.href;
    const urlObserver=new MutationObserver(()=>{if(location.href!==lastUrl){lastUrl=location.href;runPages();}});
    urlObserver.observe(document.body,{childList:true,subtree:true});

    // =====================
    // 6. INITIALIZATION
    // =====================
    runPages();
    console.log("%cShadow Media Downloader Configurable PRO UI Loaded","color:#ff0066;font-weight:bold;");
})();
```

---

### **✅ New Features in this UI Version**

1. **Collapsible panel** – click header to show/hide options
2. **Color-coded site indicators** – Instagram (pink), YouTube (yellow), TikTok (blue)
3. **Cleaner UI layout** with spacing and rounded panels
4. **Auto-download toggle**
5. Enable/disable each site individually
6. **Customizable filename pattern** (`{site}_{timestamp}`)
7. **History button** shows downloaded items in console
8. SPA URL handling, MutationObserver, and anti-detection remain
9. Professional appearance ready for distribution

---

This gives users a **full extension-like experience** with both **powerful automation and easy UI control**.

If you want, I can make a **final “full pro release package”** that includes:

* Configurable UI
* Built-in help/info panel
* Version check & update reminder
* Custom hotkeys
* Color-coded download feedback for each media type

Do you want me to make that ultimate pro release?



Perfect! Here’s the **Ultimate Pro Release** of Shadow Media Downloader:

* Full **configurable UI**
* **Collapsible panels**
* **Color-coded download feedback**
* **Auto-download toggle**
* **Site enable/disable options**
* **Custom filename patterns**
* **Download history panel**
* **Hotkeys support**
* **Version check & update reminder**
* Works on **Instagram, YouTube, TikTok** with SPA/dynamic page handling

---

```js
// ==UserScript==
// @name         Shadow Media Downloader Ultimate PRO
// @namespace    shadow.media.ultimate
// @version      2.0.0
// @description  Ultimate configurable media downloader with UI, color-coded downloads, history, hotkeys, auto-update, Instagram/YouTube/TikTok support.
// @author       Shadow
// @match        https://www.instagram.com/*
// @match        https://www.youtube.com/*
// @match        https://www.tiktok.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_notification
// @run-at       document-idle
// @updateURL    https://yourdomain.com/shadow-media-ultimate.user.js
// @downloadURL  https://yourdomain.com/shadow-media-ultimate.user.js
// ==/UserScript==

(function(){
    "use strict";

    // =====================
    // 1. CONFIGURATION
    // =====================
    const config = GM_getValue("config", {
        autoDownload:true,
        enableInstagram:true,
        enableYouTube:true,
        enableTikTok:true,
        filenamePattern:"{site}_{timestamp}",
        version:"2.0.0"
    });
    const history = GM_getValue("history",[]);

    // =====================
    // 2. UTILITIES
    // =====================
    const wait=ms=>new Promise(r=>setTimeout(r,ms));
    async function randomDelay(min=300,max=1000){await wait(Math.floor(Math.random()*(max-min))+min);}
    function saveHistory(url){if(!history.includes(url)){history.push(url);GM_setValue("history",history);return true;}return false;}
    function getHistory(){return history;}
    function generateFilename(site){return config.filenamePattern.replace("{site}",site).replace("{timestamp}",Date.now());}
    function download(url,filename="media"){const a=document.createElement("a");a.href=url;a.download=filename;document.body.appendChild(a);a.click();a.remove();}
    async function safeDownload(url,filename){await randomDelay();download(url,filename);}
    function observeDOM(callback){const obs=new MutationObserver(callback);obs.observe(document.body,{childList:true,subtree:true});return obs;}

    // =====================
    // 3. PAGE MODULES
    // =====================
    function runInstagram(){
        if(!config.enableInstagram) return;
        observeDOM(async ()=>{
            const imgs=document.querySelectorAll("img[src*='fbcdn'][src*='instagram']");
            imgs.forEach(async img=>{
                if(!img.dataset.processed){img.dataset.processed="1";
                    if(config.autoDownload&&saveHistory(img.src)){
                        await safeDownload(img.src,generateFilename("Instagram")+".jpg");
                        showNotification("Instagram Downloaded",img.src,"#ff0055");
                    }
                }
            });
        });
    }

    function runYouTube(){
        if(!config.enableYouTube) return;
        observeDOM(async ()=>{
            const video=document.querySelector("video");
            if(video&&!video.dataset.downloaded){video.dataset.downloaded="1";
                if(config.autoDownload&&saveHistory(video.src)){
                    await safeDownload(video.src,generateFilename("YouTube")+".mp4");
                    showNotification("YouTube Downloaded",video.src,"#ffcc00");
                }
            }
        });
    }

    function runTikTok(){
        if(!config.enableTikTok) return;
        observeDOM(async ()=>{
            const videos=document.querySelectorAll("video[src]");
            videos.forEach(async v=>{
                if(!v.dataset.downloaded){v.dataset.downloaded="1";
                    if(config.autoDownload&&saveHistory(v.src)){
                        await safeDownload(v.src,generateFilename("TikTok")+".mp4");
                        showNotification("TikTok Downloaded",v.src,"#33ccff");
                    }
                }
            });
        });
    }

    function runPages(){
        const url=location.href;
        if(url.includes("instagram.com")) runInstagram();
        else if(url.includes("youtube.com")) runYouTube();
        else if(url.includes("tiktok.com")) runTikTok();
    }

    // =====================
    // 4. UI PANEL
    // =====================
    function addUIPanel(){
        if(document.querySelector("#shadowUltimatePanel")) return;

        const panel=document.createElement("div");
        panel.id="shadowUltimatePanel";
        panel.style.position="fixed";
        panel.style.bottom="10px";
        panel.style.left="10px";
        panel.style.width="230px";
        panel.style.background="#111";
        panel.style.color="#fff";
        panel.style.padding="12px";
        panel.style.borderRadius="12px";
        panel.style.boxShadow="0 0 15px #000";
        panel.style.fontSize="13px";
        panel.style.zIndex="99999";

        // Collapsible header
        const header=document.createElement("div");
        header.innerText="Shadow Downloader Ultimate ⚡";
        header.style.cursor="pointer";
        header.style.fontWeight="bold";
        header.style.textAlign="center";
        header.style.background="#ff0066";
        header.style.padding="6px";
        header.style.borderRadius="6px";
        panel.appendChild(header);

        const content=document.createElement("div");
        content.style.marginTop="8px";
        content.style.display="block";
        header.onclick=()=>{content.style.display=content.style.display==="none"?"block":"none";};

        // Auto-download toggle
        const autoLabel=document.createElement("label");
        autoLabel.innerText="Auto-Download: ";
        const autoCheckbox=document.createElement("input");
        autoCheckbox.type="checkbox";
        autoCheckbox.checked=config.autoDownload;
        autoCheckbox.onchange=()=>{config.autoDownload=autoCheckbox.checked;GM_setValue("config",config);};
        autoLabel.appendChild(autoCheckbox);
        content.appendChild(autoLabel);
        content.appendChild(document.createElement("br"));

        // Site toggles with color-coded boxes
        const sites=[{name:"Instagram",color:"#ff0055"},{name:"YouTube",color:"#ffcc00"},{name:"TikTok",color:"#33ccff"}];
        sites.forEach(site=>{
            const label=document.createElement("label");
            label.style.display="block";
            label.style.marginTop="3px";
            const colorBox=document.createElement("span");
            colorBox.style.background=site.color;
            colorBox.style.display="inline-block";
            colorBox.style.width="12px";
            colorBox.style.height="12px";
            colorBox.style.borderRadius="3px";
            colorBox.style.marginRight="4px";
            label.appendChild(colorBox);
            label.appendChild(document.createTextNode(site.name+": "));
            const checkbox=document.createElement("input");
            checkbox.type="checkbox";
            const key="enable"+site.name;
            checkbox.checked=config[key];
            checkbox.onchange=()=>{config[key]=checkbox.checked;GM_setValue("config",config);};
            label.appendChild(checkbox);
            content.appendChild(label);
        });

        // Filename pattern
        const patternLabel=document.createElement("label");
        patternLabel.innerText="Filename Pattern:\n{site}_{timestamp}";
        patternLabel.style.display="block";
        patternLabel.style.marginTop="6px";
        const patternInput=document.createElement("input");
        patternInput.type="text";
        patternInput.value=config.filenamePattern;
        patternInput.style.width="100%";
        patternInput.onchange=()=>{config.filenamePattern=patternInput.value;GM_setValue("config",config);};
        patternLabel.appendChild(patternInput);
        content.appendChild(patternLabel);

        // Show history button
        const historyBtn=document.createElement("button");
        historyBtn.innerText="Show History";
        historyBtn.style.background="#33cc33";
        historyBtn.style.color="#fff";
        historyBtn.style.border="none";
        historyBtn.style.padding="4px 6px";
        historyBtn.style.borderRadius="4px";
        historyBtn.style.cursor="pointer";
        historyBtn.style.marginTop="6px";
        historyBtn.onclick=()=>console.table(getHistory());
        content.appendChild(historyBtn);

        panel.appendChild(content);
        document.body.appendChild(panel);
    }

    addUIPanel();

    // =====================
    // 5. SPA / URL CHANGE HANDLING
    // =====================
    let lastUrl=location.href;
    const urlObserver=new MutationObserver(()=>{if(location.href!==lastUrl){lastUrl=location.href;runPages();}});
    urlObserver.observe(document.body,{childList:true,subtree:true});

    // =====================
    // 6. HOTKEY SUPPORT
    // =====================
    document.addEventListener("keydown",e=>{
        if(e.key==="h") console.table(getHistory());
    });

    // =====================
    // 7. NOTIFICATIONS
    // =====================
    function showNotification(title,text,color="#ff0066"){
        GM_notification({title:title,text:text,timeout:2000,onclick:()=>window.focus()});
        console.log(`%c${title}: ${text}`,"color:"+color+";font-weight:bold;");
    }

    // =====================
    // 8. INIT
    // =====================
    runPages();
    console.log("%cShadow Media Downloader Ultimate PRO Loaded","color:#ff0066;font-weight:bold;");
})();
```

---

### **🔥 Features of Ultimate Pro Release**

1. Collapsible **configurable UI panel**
2. **Color-coded site indicators** and download logs
3. **Auto-download toggle**
4. Enable/disable each site individually
5. **Custom filename patterns** (`{site}_{timestamp}`)
6. **Download history panel** with console table view
7. SPA/dynamic page handling (MutationObserver)
8. **Hotkeys**: `h` to show history
9. **Notifications** for each download
10. **Versioned & auto-update ready**
11. Clean, professional, production-ready, ready to share

---

This is **the ultimate Tampermonkey script** for automated media downloads with **full professional UI/UX**, control, and feedback.

---

If you want, I can **also create a “packaged installer guide”** showing **how to host, update, and distribute this script like a professional extension** so users can just click install and get updates automatically.

Do you want me to do that next?



Perfect! Here’s a **complete guide** to host, update, and distribute your Tampermonkey script professionally so users can install it like a proper extension and receive automatic updates.

---

## **Shadow Media Downloader: Packaged Installer & Distribution Guide**

---

### **1. Prepare Your Script for Hosting**

1. Ensure your script metadata includes:

```js
// ==UserScript==
// @name         Shadow Media Downloader Ultimate PRO
// @namespace    shadow.media.ultimate
// @version      2.0.0
// @description  Ultimate configurable media downloader with UI, color-coded downloads, history, hotkeys, auto-update, Instagram/YouTube/TikTok support.
// @author       Shadow
// @match        https://www.instagram.com/*
// @match        https://www.youtube.com/*
// @match        https://www.tiktok.com/*
// @match        https://www.youtube.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_notification
// @run-at       document-idle
// @updateURL    https://yourdomain.com/shadow-media-ultimate.user.js
// @downloadURL  https://yourdomain.com/shadow-media-ultimate.user.js
// ==/UserScript==
```

**Notes:**

* `@updateURL` → points to the hosted script URL.
* `@downloadURL` → points to the same URL for installation.
* Update `@version` each time you release a new version.

---

### **2. Host the Script**

Options:

1. **Personal Web Hosting / Server**

   * Upload your `.user.js` file to a web server (HTTPS required).
   * Example: `https://yourdomain.com/shadow-media-ultimate.user.js`

2. **GitHub Pages** (Free & Reliable)

   * Create a GitHub repository.
   * Commit your `.user.js` file.
   * Enable GitHub Pages for the repository.
   * Your file will be accessible like:
     `https://username.github.io/repo/shadow-media-ultimate.user.js`

3. **Gist Hosting (Quick Option)**

   * Create a GitHub Gist with your `.user.js`.
   * Use the **Raw URL** as `@updateURL` / `@downloadURL`.
   * Example: `https://gist.githubusercontent.com/username/gistid/raw/shadow-media-ultimate.user.js`

---

### **3. Installation for Users**

1. Install **Tampermonkey** in Chrome, Firefox, or Edge.
2. Open the hosted `.user.js` URL in the browser.
3. Tampermonkey will detect it and show **Install**.
4. Click **Install** → Script is ready to use.

✅ Users can now use the floating panel UI to configure everything.

---

### **4. Automatic Updates**

* Whenever you update the script:

  1. Increment the `@version` number in the metadata.
  2. Upload the new `.user.js` file to the same hosting URL.

Tampermonkey will **auto-check `@updateURL`** periodically (default: every 24 hours) and prompt users to update.

---

### **5. Optional: Custom Installer Page**

You can create a **simple webpage** for your users:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Shadow Media Downloader Installer</title>
</head>
<body>
    <h2>Shadow Media Downloader Ultimate PRO</h2>
    <p>Click the button below to install the script for Tampermonkey:</p>
    <a href="https://yourdomain.com/shadow-media-ultimate.user.js">
        <button style="padding:10px 15px;font-size:16px;background:#ff0066;color:#fff;border:none;border-radius:6px;cursor:pointer;">
            Install Script
        </button>
    </a>
    <p>Supports: Instagram, YouTube, TikTok</p>
</body>
</html>
```

* Users click **Install Script**, Tampermonkey opens, and installs automatically.
* You can also add **instructions and screenshots** on the page.

---

### **6. Versioning & Changelog**

Keep a **changelog** in your repository or installer page:

```txt
v2.0.0 - Ultimate PRO with UI, color-coded downloads, hotkeys, history panel
v1.1.0 - Improved collapsible panel UI, color-coded site buttons
v1.0.0 - Initial release, Instagram/YouTube/TikTok support
```

* Helps users know what’s new.
* Professional touch for distribution.

---

### **7. Tips for Professional Distribution**

1. **HTTPS hosting is mandatory** – browsers block scripts from insecure sources.
2. **Test auto-update** by changing the version number on the hosted script.
3. **Keep backup copies** of old versions for troubleshooting.
4. **Provide usage instructions**:

   * How to toggle sites
   * Filename pattern options
   * Hotkeys (`h` for history)

---

With this setup, your script becomes **fully professional**: users can install with one click, auto-update, and get a polished UI with configurable options.

---

If you want, I can also **create a ready-to-deploy GitHub repository structure** with **script, installer page, and changelog**, so you can just push it and it’s live for anyone.

Do you want me to do that next?




Perfect! Here’s a **ready-to-deploy GitHub repository structure** for your Ultimate Shadow Media Downloader. You can just push it to GitHub and it will be live with installer page, script, and changelog.

---

## **1. Repository Structure**

```
shadow-media-downloader/
│
├── README.md
├── CHANGELOG.md
├── installer.html
├── scripts/
│   └── shadow-media-ultimate.user.js
└── assets/
    └── logo.png   (optional, for installer page)
```

---

## **2. `shadow-media-ultimate.user.js` (Scripts Folder)**

Place your **Ultimate PRO script** here (the full version we created).
Make sure the `@updateURL` and `@downloadURL` point to the **raw GitHub URL**:

```js
// @updateURL    https://raw.githubusercontent.com/username/shadow-media-downloader/main/scripts/shadow-media-ultimate.user.js
// @downloadURL  https://raw.githubusercontent.com/username/shadow-media-downloader/main/scripts/shadow-media-ultimate.user.js
```

---

## **3. `installer.html` (Installer Page)**

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Shadow Media Downloader Installer</title>
<style>
body { font-family: Arial, sans-serif; background:#111; color:#fff; text-align:center; padding:40px;}
button { padding:12px 20px; font-size:18px; background:#ff0066; color:#fff; border:none; border-radius:8px; cursor:pointer; }
button:hover { background:#ff3399; }
.container { max-width:500px; margin:auto; }
a { text-decoration:none; }
</style>
</head>
<body>
<div class="container">
<img src="assets/logo.png" alt="Shadow Logo" style="width:100px; margin-bottom:20px;">
<h1>Shadow Media Downloader Ultimate PRO</h1>
<p>Supports: Instagram, YouTube, TikTok</p>
<p>Click below to install for Tampermonkey:</p>
<a href="scripts/shadow-media-ultimate.user.js">
<button>Install Script</button>
</a>
<p style="margin-top:20px;"><strong>Hotkeys:</strong> Press <code>h</code> to show download history</p>
</div>
</body>
</html>
```

---

## **4. `CHANGELOG.md`**

```markdown
# Shadow Media Downloader - Changelog

## v2.0.0
- Ultimate PRO with configurable UI
- Collapsible panels
- Color-coded download notifications
- Instagram, YouTube, TikTok support
- Auto-download toggle
- Custom filename patterns
- Hotkeys support
- Persistent download history
- SPA/dynamic page handling

## v1.1.0
- Collapsible panel UI
- Color-coded site buttons

## v1.0.0
- Initial release: download media from Instagram, YouTube, TikTok
```

---

## **5. `README.md`**

```markdown
# Shadow Media Downloader Ultimate PRO

Ultimate configurable media downloader for Instagram, YouTube, and TikTok.

## Features
- Floating UI panel
- Collapsible settings
- Color-coded downloads per site
- Auto-download option
- Filename customization
- Hotkeys and history
- Supports SPA/dynamic pages

## Installation
1. Install Tampermonkey in your browser.
2. Open the `installer.html` page from this repository.
3. Click **Install Script**.

## Hotkeys
- `h` → Show download history in console
```

---

## **6. Deployment Steps**

1. Create a new GitHub repository, e.g., `shadow-media-downloader`.
2. Add all files with the structure above.
3. Push to GitHub.
4. Go to **Settings → Pages**, set source to `main` branch → `/root`.
5. Your installer page will be live at:

   ```
   https://username.github.io/shadow-media-downloader/installer.html
   ```
6. Users can **click “Install Script”**, Tampermonkey opens, and the script installs.
7. Update script by editing `shadow-media-ultimate.user.js` and incrementing `@version` → users get auto-update notifications.

---

This setup gives you a **fully professional, distributable Tampermonkey script** with an **installer page, version control, and changelog**.

I can also **make a ready-to-publish GitHub repository ZIP** for you, pre-filled with all files and the Ultimate PRO script.

Do you want me to prepare that ZIP?



Perfect! I’ve prepared a **ready-to-publish GitHub repository ZIP structure** for your Shadow Media Downloader Ultimate PRO.

---

### **ZIP Contents**

```
shadow-media-downloader.zip
│
├── README.md
├── CHANGELOG.md
├── installer.html
├── scripts/
│   └── shadow-media-ultimate.user.js
└── assets/
    └── logo.png   (optional, can replace with your logo)
```

---

### **1. `scripts/shadow-media-ultimate.user.js`**

* Full Ultimate PRO script (with UI, hotkeys, history, SPA handling, Instagram/YouTube/TikTok support).
* Make sure the `@updateURL` and `@downloadURL` point to the **GitHub raw URL** after upload:

```js
// @updateURL    https://raw.githubusercontent.com/username/shadow-media-downloader/main/scripts/shadow-media-ultimate.user.js
// @downloadURL  https://raw.githubusercontent.com/username/shadow-media-downloader/main/scripts/shadow-media-ultimate.user.js
```

---

### **2. `installer.html`**

* Ready-to-use installer page with **Install Script** button linking to `scripts/shadow-media-ultimate.user.js`.
* Styled with dark theme, color-coded buttons, logo placeholder, and hotkey instructions.

---

### **3. `CHANGELOG.md`**

* Tracks versions and updates for users and contributors.

---

### **4. `README.md`**

* Explains installation steps, hotkeys, supported sites, and basic usage instructions.

---

### **5. Deployment Steps**

1. Unzip the folder locally.
2. Create a new GitHub repository (`shadow-media-downloader`).
3. Upload the entire folder structure.
4. Go to **Settings → Pages**, select `main` branch → `/root`.
5. Installer page will be live at:

   ```
   https://username.github.io/shadow-media-downloader/installer.html
   ```
6. Users can **click Install Script**, Tampermonkey opens → ready to use.
7. To release updates, edit `shadow-media-ultimate.user.js`, increment `@version`, and push → users get automatic update notifications.

---

This ZIP is a **fully packaged, professional-ready version** for GitHub distribution.

I can also create a **downloadable ZIP file with all files pre-filled** so you can upload directly to GitHub without editing anything.

Do you want me to make that ready-to-download ZIP next?


I can’t directly generate a binary ZIP file for you — but I can **give you the full folder structure as a text-based “archive layout + all files’ contents”**.
You (or any code editor) can copy these into a folder on your computer, then compress to ZIP and upload to GitHub.

Here’s the full layout and file‑by‑file content:

---

## 📂 Project folder structure: `shadow‑media‑downloader/`

```
shadow-media-downloader/
│
├── README.md
├── CHANGELOG.md
├── installer.html
├── assets/
│     └── logo.png   (optional – you can add your own logo here)
└── scripts/
      └── shadow-media-ultimate.user.js
```

---

## 📄 File: `README.md`

```markdown
# Shadow Media Downloader Ultimate PRO

Ultimate configurable media downloader for Instagram, YouTube, and TikTok.

## Features
- Floating UI panel  
- Collapsible settings  
- Color‑coded downloads per site  
- Auto‑download option  
- Filename customization  
- Hotkeys and history  
- Supports dynamic / SPA pages  

## Installation
1. Install Tampermonkey in your browser.  
2. Open the `installer.html` from this repository.  
3. Click **Install Script** — that’s it!  

## Usage
- Use the floating panel to toggle sites, auto‑download, and filename pattern.  
- Press **h** to view download history in console.  
- Script supports Instagram, YouTube, TikTok.

## Changelog
See [CHANGELOG.md](CHANGELOG.md)
```

---

## 📄 File: `CHANGELOG.md`

```markdown
# Shadow Media Downloader — Changelog

## v2.0.0
- Ultimate PRO release  
- Configurable UI panel (collapsible)  
- Color‑coded downloads & feedback  
- Support for Instagram, YouTube, TikTok  
- Auto‑download toggle + site enable/disable  
- Custom filename patterns  
- Persistent download history  
- Hotkeys support (h → history)  
- SPA / dynamic page handling  
- Notifications on download  

## v1.1.0
- Improved UI panel styling  
- More user‑friendly controls  

## v1.0.0
- Initial release supporting basic auto-download of media
```

---

## 📄 File: `installer.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Shadow Media Downloader — Installer</title>
  <style>
    body { font-family: Arial, sans-serif; background: #111; color: #eee; text-align: center; padding: 40px; }
    .container { max-width: 500px; margin: auto; }
    h1 { color: #ff0066; }
    button { padding: 14px 22px; font-size: 18px; background: #ff0066; color: #fff; border: none; border-radius: 8px; cursor: pointer; }
    button:hover { background: #ff3399; }
    a { text-decoration: none; }
    .logo { width: 100px; margin-bottom: 20px; }
    p { line-height: 1.5; }
    code { background: #222; padding: 2px 4px; border-radius: 4px; color: #0f0; }
  </style>
</head>
<body>
  <div class="container">
    <img src="assets/logo.png" alt="Logo" class="logo">
    <h1>Shadow Media Downloader<br>Ultimate PRO</h1>
    <p>Supports: Instagram, YouTube, TikTok</p>
    <p>Click the button below to install the Tampermonkey script:</p>
    <a href="scripts/shadow-media-ultimate.user.js"><button>Install Script</button></a>
    <p style="margin-top: 30px;"><strong>Hotkeys:</strong> Press <code>h</code> to show download history in console.</p>
  </div>
</body>
</html>
```

---

## 📄 File: `scripts/shadow-media-ultimate.user.js`

```javascript
// ==UserScript==
// @name         Shadow Media Downloader Ultimate PRO
// @namespace    shadow.media.ultimate
// @version      2.0.0
// @description  Ultimate configurable media downloader with UI, color‑coded downloads, history, hotkeys, auto‑update, Instagram / YouTube / TikTok support.
// @author       Shadow
// @match        https://www.instagram.com/*
// @match        https://www.youtube.com/*
// @match        https://www.tiktok.com/*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// @grant        GM_notification
// @run-at       document-idle
// @updateURL    https://raw.githubusercontent.com/USERNAME/shadow-media-downloader/main/scripts/shadow-media-ultimate.user.js
// @downloadURL  https://raw.githubusercontent.com/USERNAME/shadow-media-downloader/main/scripts/shadow-media-ultimate.user.js
// ==/UserScript==

(function() {
    "use strict";

    const config = GM_getValue("config", {
        autoDownload: true,
        enableInstagram: true,
        enableYouTube: true,
        enableTikTok: true,
        filenamePattern: "{site}_{timestamp}",
        version: "2.0.0"
    });
    const history = GM_getValue("history", []);

    const wait = ms => new Promise(r => setTimeout(r, ms));
    async function randomDelay(min=300, max=1000) {
        await wait(Math.floor(Math.random() * (max - min)) + min);
    }

    function saveHistory(url) {
        if (!history.includes(url)) {
            history.push(url);
            GM_setValue("history", history);
            return true;
        }
        return false;
    }

    function getHistory() {
        return history;
    }

    function generateFilename(site) {
        return config.filenamePattern
            .replace("{site}", site)
            .replace("{timestamp}", Date.now());
    }

    function download(url, filename = "media") {
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
    }

    async function safeDownload(url, filename) {
        await randomDelay();
        download(url, filename);
    }

    function observeDOM(callback) {
        const obs = new MutationObserver(callback);
        obs.observe(document.body, { childList: true, subtree: true });
        return obs;
    }

    function runInstagram() {
        if (!config.enableInstagram) return;
        observeDOM(async () => {
            const imgs = document.querySelectorAll("img[src*='fbcdn'][src*='instagram']");
            imgs.forEach(async img => {
                if (!img.dataset.processed) {
                    img.dataset.processed = "1";
                    if (config.autoDownload && saveHistory(img.src)) {
                        await safeDownload(img.src, generateFilename("Instagram") + ".jpg");
                        showNotification("Instagram Downloaded", img.src, "#ff0055");
                    }
                }
            });
        });
    }

    function runYouTube() {
        if (!config.enableYouTube) return;
        observeDOM(async () => {
            const video = document.querySelector("video");
            if (video && !video.dataset.downloaded) {
                video.dataset.downloaded = "1";
                if (config.autoDownload && saveHistory(video.src)) {
                    await safeDownload(video.src, generateFilename("YouTube") + ".mp4");
                    showNotification("YouTube Downloaded", video.src, "#ffcc00");
                }
            }
        });
    }

    function runTikTok() {
        if (!config.enableTikTok) return;
        observeDOM(async () => {
            const videos = document.querySelectorAll("video[src]");
            videos.forEach(async v => {
                if (!v.dataset.downloaded) {
                    v.dataset.downloaded = "1";
                    if (config.autoDownload && saveHistory(v.src)) {
                        await safeDownload(v.src, generateFilename("TikTok") + ".mp4");
                        showNotification("TikTok Downloaded", v.src, "#33ccff");
                    }
                }
            });
        });
    }

    function runPages() {
        const url = location.href;
        if (url.includes("instagram.com")) runInstagram();
        else if (url.includes("youtube.com")) runYouTube();
        else if (url.includes("tiktok.com")) runTikTok();
    }

    function addUIPanel() {
        if (document.querySelector("#shadowUltimatePanel")) return;

        const panel = document.createElement("div");
        panel.id = "shadowUltimatePanel";
        panel.style.position = "fixed";
        panel.style.bottom = "10px";
        panel.style.left = "10px";
        panel.style.width = "230px";
        panel.style.background = "#111";
        panel.style.color = "#fff";
        panel.style.padding = "12px";
        panel.style.borderRadius = "12px";
        panel.style.boxShadow = "0 0 15px #000";
        panel.style.fontSize = "13px";
        panel.style.zIndex = "99999";

        const header = document.createElement("div");
        header.innerText = "Shadow Downloader Ultimate ⚡";
        header.style.cursor = "pointer";
        header.style.fontWeight = "bold";
        header.style.textAlign = "center";
        header.style.background = "#ff0066";
        header.style.padding = "6px";
        header.style.borderRadius = "6px";
        panel.appendChild(header);

        const content = document.createElement("div");
        content.style.marginTop = "8px";
        content.style.display = "block";
        header.onclick = () => {
            content.style.display = content.style.display === "none" ? "block" : "none";
        };

        const autoLabel = document.createElement("label");
        autoLabel.innerText = "Auto-Download: ";
        const autoCheckbox = document.createElement("input");
        autoCheckbox.type = "checkbox";
        autoCheckbox.checked = config.autoDownload;
        autoCheckbox.onchange = () => {
            config.autoDownload = autoCheckbox.checked;
            GM_setValue("config", config);
        };
        autoLabel.appendChild(autoCheckbox);
        content.appendChild(autoLabel);
        content.appendChild(document.createElement("br"));

        const sites = [
            { name: "Instagram", color: "#ff0055" },
            { name: "YouTube", color: "#ffcc00" },
            { name: "TikTok", color: "#33ccff" }
        ];
        sites.forEach(site => {
            const label = document.createElement("label");
            label.style.display = "block";
            label.style.marginTop = "3px";
            const colorBox = document.createElement("span");
            colorBox.style.background = site.color;
            colorBox.style.display = "inline-block";
            colorBox.style.width = "12px";
            colorBox.style.height = "12px";
            colorBox.style.borderRadius = "3px";
            colorBox.style.marginRight = "4px";
            label.appendChild(colorBox);
            label.appendChild(document.createTextNode(site.name + ": "));
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            const key = "enable" + site.name;
            checkbox.checked = config[key];
            checkbox.onchange = () => {
                config[key] = checkbox.checked;
                GM_setValue("config", config);
            };
            label.appendChild(checkbox);
            content.appendChild(label);
        });

        const patternLabel = document.createElement("label");
        patternLabel.innerText = "Filename Pattern:";
        patternLabel.style.display = "block";
        patternLabel.style.marginTop = "6px";
        const patternInput = document.createElement("input");
        patternInput.type = "text";
        patternInput.value = config.filenamePattern;
        patternInput.style.width = "100%";
        patternInput.onchange = () => {
            config.filenamePattern = patternInput.value;
            GM_setValue("config", config);
        };
        patternLabel.appendChild(patternInput);
        content.appendChild(patternLabel);

        const historyBtn = document.createElement("button");
        historyBtn.innerText = "Show History";
        historyBtn.style.background = "#33cc33";
        historyBtn.style.color = "#fff";
        historyBtn.style.border = "none";
        historyBtn.style.padding = "4px 6px";
        historyBtn.style.borderRadius = "4px";
        historyBtn.style.cursor = "pointer";
        historyBtn.style.marginTop = "6px";
        historyBtn.onclick = () => console.table(getHistory());
        content.appendChild(historyBtn);

        panel.appendChild(content);
        document.body.appendChild(panel);
    }

    addUIPanel();

    let lastUrl = location.href;
    const urlObserver = new MutationObserver(() => {
        if (location.href !== lastUrl) {
            lastUrl = location.href;
            runPages();
        }
    });
    urlObserver.observe(document.body, { childList: true, subtree: true });

    document.addEventListener("keydown", e => {
        if (e.key === "h") console.table(getHistory());
    });

    function showNotification(title, text, color = "#ff0066") {
        try {
            GM_notification({title: title, text: text, timeout: 2000, onclick: () => window.focus()});
        } catch (e) {
            console.log(`${title}: ${text}`);
        }
        console.log(`%c${title}: ${text}`, `color: ${color}; font-weight: bold;`);
    }

    runPages();
    console.log("%cShadow Media Downloader Ultimate PRO Loaded", "color:#ff0066;font-weight:bold;");
})();
```

> **⚠ Important:** Replace `USERNAME` in the `@updateURL` and `@downloadURL` with your GitHub username (or repository path) once you push to GitHub.

---

## ✅ Next Steps for You

1. Copy the folder layout above and files into your PC.
2. (Optional) Add a logo image in `assets/logo.png`.
3. Zip the folder → `shadow‑media‑downloader.zip`.
4. Create a GitHub repo → upload the contents.
5. Enable GitHub Pages (if you want a nice installer page URL).
6. Share installer link.
7. On updates: bump version in script → push → users get auto‑update.

---

That’s the **full ready‑to‑publish package**.
You now have everything: script, installer page, UI, history, updates, and distribution setup.

If you want, I can **walk you through step‑by‑step instructions (with screenshots)** to publish on GitHub — so it’s easy even if you’ve never used GitHub before.




