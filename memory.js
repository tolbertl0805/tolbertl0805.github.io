(function() {
    'use strict';

    window.addEventListener('load', init);

    var seconds = 25
    var timer

    function init() {
        if (hasVisited()){
            id('timer').style.display='none'
            id('words').style.display='none'
            qs('h1').textContent = 'Thank you for participating!'
            qs('h1').style.display='flex'
        }
        else {
            markVisited()
            timer = setInterval(tick,1000)
        }
    }

    function tick() {
        if (seconds==1){
            clearInterval(timer)
            id('timer').style.display='none'
            id('words').style.display='none'
            qs('h1').textContent = 'Time\'s up!'
            qs('h1').style.display='flex'
        }
        else {
            seconds--
            id('timer').textContent = `Time: ${seconds}`
        }
    }

function hasVisited() {
  return document.cookie.split("; ").some(c => c.startsWith("visited=1"));
}

function markVisited() {
  const oneYear = 60 * 60 * 24 * 365;
  document.cookie = `visited=1; max-age=${oneYear}; path=/; SameSite=Lax`;
}

    /////////////////////////////////////////////////////////////////////
    // Helper functions
    /**
    * Helper function to return the response's result text if successful, otherwise
    * returns the rejected Promise result with an error status and corresponding text
    * @param {object} res - response to check for success/error

    * @return {object} - valid response if response was successful, otherwise rejected
    *                    Promise result
    */
    async function statusCheck(res) {
        if (!res.ok) {
            throw new Error(await res.text());
        }
        return res;
    }

    function id(id) {
        return document.getElementById(id);
    }

    function qs(selector) {
        return document.querySelector(selector);
    }

    function qsa(selector) {
        return document.querySelectorAll(selector);
    }
})();