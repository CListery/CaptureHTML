// ==UserScript==
// @name         网页截全屏
// @namespace    https://github.com/CListery
// @version      0.3
// @description  将整个网页截屏
// @license      MIT
// @author       CListery
// @require      https://cdn.jsdelivr.net/npm/html2canvas@1/dist/html2canvas.min.js
// @require      https://cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js
// @match        http://*/*
// @match        https://*/*
// @icon         data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmZmZmIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjMuMiIvPgogICAgPHBhdGggZD0iTTkgMkw3LjE3IDRINGMtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yaC0zLjE3TDE1IDJIOXptMyAxNWMtMi43NiAwLTUtMi4yNC01LTVzMi4yNC01IDUtNSA1IDIuMjQgNSA1LTIuMjQgNS01IDV6Ii8+CiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+Cjwvc3ZnPgo=
// @grant        none
// ==/UserScript==

(function () {
    'use strict';
    function captureHTML() {
        console.log('captureHTML...');

        $("#tryhtml2canvas").hide();

        html2canvas(document.body, { scale: 3, allowTaint: true, useCORS: true }).then(canvas => {
            canvas.toBlob(function (blob) {
                let url = window.URL.createObjectURL(blob);
                window.open(url);

                $("#tryhtml2canvas").show();

            });
        });
    }

    window.captureHTML = captureHTML;

    let elem_div = document.createElement('div');
    elem_div.innerHTML =
    `<div onclick="captureHTML();" id="tryhtml2canvas" style="background-image: linear-gradient(0deg, #558b2f, #7cb342);cursor: pointer; position: fixed;display: flex;bottom: 40px;right: 40px;z-index: 100001;width: 50px;height: 50px;border-radius: 50%;box-shadow: 0 2px 2px 0 rgba(0,0,0,0.14), 0 1px 5px 0 rgba(0,0,0,0.12), 0 3px 1px -2px rgba(0,0,0,0.2);-webkit-box-pack: center;-webkit-justify-content: center;-webkit-box-align: center;-webkit-align-items: center;">
        <div style="overflow: hidden;">
            <img src="data:image/svg+xml;base64,PHN2ZyBmaWxsPSIjZmZmZmZmIiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTIiIHI9IjMuMiIvPgogICAgPHBhdGggZD0iTTkgMkw3LjE3IDRINGMtMS4xIDAtMiAuOS0yIDJ2MTJjMCAxLjEuOSAyIDIgMmgxNmMxLjEgMCAyLS45IDItMlY2YzAtMS4xLS45LTItMi0yaC0zLjE3TDE1IDJIOXptMyAxNWMtMi43NiAwLTUtMi4yNC01LTVzMi4yNC01IDUtNSA1IDIuMjQgNSA1LTIuMjQgNS01IDV6Ii8+CiAgICA8cGF0aCBkPSJNMCAwaDI0djI0SDB6IiBmaWxsPSJub25lIi8+Cjwvc3ZnPgo="
                alt="Try html2canvas" style="transform: translateX(-210px); filter: drop-shadow(210px 0 0 black);">
        </div>
    </div>`;
    document.body.appendChild(elem_div);
})();
