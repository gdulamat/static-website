/* menu items color script */
(function(){
    "use sctrict"
    let menuItems = document.querySelectorAll("nav ul a"),
        workBegin,
        workEnd,
        aboutBegin,
        aboutEnd, 
        contactBegin,
        contactEnd,
        activeItemIndex = -1;
    //-----------------------------------------------------    
    function setValues(){
        let bodyRect = document.body.getBoundingClientRect().top;
        workBegin = document.querySelector("header").getBoundingClientRect().bottom - bodyRect;
        workEnd = document.querySelector("#work").getBoundingClientRect().bottom - bodyRect;
        aboutBegin = document.querySelector("#about").getBoundingClientRect().top - bodyRect;
        aboutEnd = document.querySelector("#about").getBoundingClientRect().bottom - bodyRect;
        contactBegin = document.querySelector("#contact").getBoundingClientRect().top - bodyRect;
        contactEnd = document.querySelector("footer").getBoundingClientRect().bottom - bodyRect;
        
        aboutBegin = workEnd + 1;
        aboutEnd = contactBegin - 250;
        contactBegin = contactBegin - 249;
    }
    //-----------------------------------------------------
    function trackFocusedSection(){
        if(window.scrollY > workBegin && window.scrollY < workEnd && activeItemIndex !== 0){
            markMenuItem(0);
        } else if(window.scrollY > aboutBegin && window.scrollY < aboutEnd && activeItemIndex !== 1) {
            markMenuItem(1);
        } else if(window.scrollY > contactBegin && window.scrollY < contactEnd && activeItemIndex !== 2) {
            markMenuItem(2);
        } else if(window.scrollY < workBegin && activeItemIndex !== -1) {
            markMenuItem(-1);
        }
    }
    //-----------------------------------------------------
    function markMenuItem(index){
        [].forEach.call(menuItems, function(item) {
            item.classList.remove("markBlue");
        });
        if(index !== -1) menuItems[index].classList.add("markBlue");
        activeItemIndex = index;
    }
    setValues();
    trackFocusedSection();
    window.addEventListener("scroll", trackFocusedSection);
    window.addEventListener("resize", setValues);
    
})();

/* lazy links for make it safety */
(function(){
    "use strict"
    window.addEventListener("scroll", setData, false);

    function setData(){
        if(window.scrollY > 2000){
            document.querySelectorAll(".phoneLink").forEach(function(link){
                link.href = "tel:+48697138160";  
                if(link.children.length === 0){
                    link.innerHTML = "+48 697 138 160";
                }
            });
            document.querySelectorAll(".mailLink").forEach(function(link){
                link.href = "mailto:agnieszka.korber@gmail.com";
                if(link.children.length === 0){
                    link.innerHTML = "agnieszka.korber@gmail.com";
                }
            });
            window.removeEventListener("scroll", setData, false);
        }  
    }
})();