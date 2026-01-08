// ==UserScript==
// @name         Annas Archive Popup Redirect
// @match        https://annas-archive.se/md5/*
// @match        https://annas-archive.org/md5/*
// @run-at       document-start
// ==/UserScript==

(function () {
  const md5 = location.pathname.split("/").pop();
  const url = `${location.origin}/slow_download/${md5}/0/4`;

  if (confirm("Open slow download page?")) {
    window.open(url, "_blank");
  }
})();
