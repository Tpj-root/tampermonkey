// ==UserScript==
// @name         Annas Archive Rewrite URL (org + se)
// @match        https://annas-archive.se/md5/*
// @match        https://annas-archive.org/md5/*
// @run-at       document-start
// ==/UserScript==

(function () {
  const md5 = location.pathname.split("/").pop();
  const base = location.origin;
  const newUrl = `${base}/slow_download/${md5}/0/4`;

  history.replaceState(null, "", newUrl);
  location.reload();
})();
