/* arrow to top script */
(function(){
    "use strict"
    let arrowTop = document.createElement("div");
    arrowTop.classList.add("arrowToTop");
    arrowTop.setAttribute("tabindex", "0");
    arrowTop.style.display = "none";
    document.body.appendChild(arrowTop);
    
    window.addEventListener("scroll", function(){
        if(window.scrollY > 500 && arrowTop.style.display === "none") arrowTop.style.display = "block";
        if(window.scrollY < 500 && arrowTop.style.display === "block") arrowTop.style.display = "none";
    });
    
    arrowTop.onclick = function(){
        window.scrollTo(0,0);
    }

})();

/* open tabindex on enter */
(function(){
    "use strict"
    document.querySelectorAll("[tabindex]").forEach(function(elem){
        elem.addEventListener("keyup", function(e){
            if(e.keyCode === 13){
                e.target.click();
            }        
        }, false);
    });

})();

/* hide menu on scroll or click link */
(function(){
    "use strict"
    if(window.innerWidth > 1023) return;
    let scrlY = window.scrollY,
        menu = document.querySelector(".menu"),
        links = document.querySelectorAll("a");

    window.addEventListener("scroll", function(){
        if(window.scrollY > scrlY){
            menu.style.transform = "translateY(-100%)";
        } else {
            menu.style.transform = "";
        }
        scrlY = window.scrollY;
    });

    links.forEach(function(link){
        link.addEventListener("click", function(){
            setTimeout(() => {
                menu.style.transform = "translateY(-100%)";
            }, 20);
        })
    });
})();

/* init lozad */
(function(){
    "use strict"
    const observer = lozad();
    observer.observe();
})();