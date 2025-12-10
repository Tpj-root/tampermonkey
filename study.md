---

# 🌱 **1. What is Tampermonkey? (Basic)**

Tampermonkey lets you run **custom JavaScript** on any website.
You can:

* Modify pages
* Add buttons
* Auto-click things
* Download hidden files
* Change website behavior
* Remove ads
* Do automation

It's like writing **your own extension** but easier.

---

# 🧩 **2. How to Install**

1. Open browser
2. Go to [https://www.tampermonkey.net](https://www.tampermonkey.net)
3. Install extension
4. A black icon appears in your toolbar.

---

# 📝 **3. How to Create and Run a Script**

1. Click Tampermonkey icon
2. Choose **Create a new script**
3. Delete everything
4. Paste your code
5. Save (Ctrl + S)
6. Make sure the script switch is **ON**
7. Refresh the website

Done.

---

# 🔍 **4. Script Header Meaning**

```javascript
// ==UserScript==
// @name         My Script
// @match        https://example.com/*
// @grant        none
// ==/UserScript==
```

### Explanation:

* `@name` → script name
* `@match` → which website the script runs on
* `@grant` → permissions (none is safest)

If `@match` doesn’t match the site URL → script will not run.

---

# 🎮 **5. How Tampermonkey Executes**

Tampermonkey loads after the website loads.
So your code can:

✔ Add buttons
✔ Change HTML
✔ Modify styles
✔ Grab hidden URLs
✔ Auto-fill forms
✔ Auto-download

Think of it as **editing the live page** using JavaScript.

---

# 🧠 **6. Core Skills (Beginner to Master)**

## **A. Select elements**

```javascript
document.querySelector("img");
document.querySelectorAll("a[href*='download']");
```

## **B. Edit elements**

```javascript
let x = document.querySelector(".title");
x.innerText = "Hello Shadow!";
x.style.color = "red";
```

## **C. Add new buttons**

```javascript
let btn = document.createElement("button");
btn.innerText = "Click me";
document.body.appendChild(btn);
```

## **D. Listen for clicks**

```javascript
btn.onclick = function() {
    alert("Button clicked!");
};
```

## **E. Auto-download**

```javascript
let a = document.createElement("a");
a.href = "image.jpg";
a.download = "pic.jpg";
a.click();
```

## **F. Run code repeatedly (SPA websites)**

```javascript
setInterval(() => {
    // check and modify page
}, 1000);
```

---

# 🏆 **7. MASTER LEVEL: Power Techniques**

### **1. Observe page changes (MutationObserver)**

Useful for Instagram / YouTube, etc.

```javascript
new MutationObserver(() => {
    console.log("Page changed");
}).observe(document.body, { childList: true, subtree: true });
```

---

### **2. Inject CSS**

```javascript
GM_addStyle(`
    .shadow-button {
        background: #ff0066;
        color: white;
    }
`);
```

---

### **3. Run code only when URL changes**

(Instagram uses dynamic navigation)

```javascript
let lastUrl = location.href;
setInterval(() => {
    if (location.href !== lastUrl) {
        lastUrl = location.href;
        console.log("URL changed!");
    }
}, 500);
```

---

### **4. Store data (Local Storage)**

```javascript
localStorage.setItem("mykey", "myvalue");
let x = localStorage.getItem("mykey");
```

---

# 🚀 **8. Tips to Become an Expert**

✔ Inspect website elements using **F12 → Elements**
✔ Test code in **F12 → Console**
✔ When it works → put inside Tampermonkey
✔ Learn basic DOM:

* querySelector
* createElement
* appendChild
* style
  ✔ Use intervals for dynamic pages
  ✔ Use match rules correctly

---

# 📚 **9. Practice Exercises**

If you want, I can teach you by practice.
Examples:

* Add a floating button to any website
* Auto-click a button on page
* Auto-fill a form
* Auto-scroll
* Auto-close popups
* Auto-save images
* Auto-download Instagram reels
* Make your own ad-blocker
* Write your own website UI

Just tell me **which you want to learn next**.

---

