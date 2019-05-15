(function(){

let sideNavFragment = document.createDocumentFragment(),
     sections = document.querySelectorAll("section"),
     sideNav = document.createElement("nav"),
     sideNavHeader = document.createElement("h2"),
     sideNavArrow = document.createElement("div"),
     sideNavList = document.createElement("ul"),
     open = false,
    scrlY = window.scrollY;

     buildSideNav();
     setAccessibility();
     document.body.addEventListener("click", sideNavHandler, false);
     addHideOnScroll();
     markPosition();

     
/* building DOM structure, setting classes and appendig it */
function buildSideNav(){
    sideNavFragment.appendChild(sideNav);
    sideNav.classList.add("sideNav");

    sideNav.appendChild(sideNavHeader);
    sideNavHeader.classList.add("sideNav__header");
    sideNavHeader.innerHTML = "JUMP TO SECTION";

    sideNavHeader.appendChild(sideNavArrow);
    sideNavArrow.classList.add("sideNav__arrow");

    sideNav.appendChild(sideNavList);
    sideNavList.classList.add("sideNav__list");

    sections.forEach(function(section){
        let listItem = document.createElement("li"),
            link = document.createElement("a");

        link.setAttribute("href", "#" + section.getAttribute("id"));
        link.innerHTML = section.dataset.linkContent;

        listItem.appendChild(link);
        link.classList.add("sideNav__link");

        sideNavList.appendChild(listItem);
        listItem.classList.add("sideNav__item")
    });

    document.body.insertBefore(sideNavFragment, document.querySelector(".breadcrumbs"));
}

function setAccessibility(){
    sideNavHeader.setAttribute("tabindex", "0");

    document.querySelectorAll(".sideNav__link").forEach(function(link){
        link.setAttribute("tabindex", "-1");
        link.addEventListener("keyup", function(e){
            if(e.keyCode === 27){
                sideNavHeader.click();
            }        
        }, false);
    });

    sideNavHeader.addEventListener("keyup", function(e){
        if(e.keyCode === 27){
            sideNavHeader.click();
        }        
    }, false);
}

/* setting styles on open/close side nav */
function sideNavHandler(e) {
    if( (e.target === sideNavHeader || e.target === sideNavArrow) && open === false ) {
        openSideNav();
    } else {
        closeSideNav();
    }
}

function openSideNav(e) {
    open = true;
    sideNav.classList.add("sideNav_open");
    sideNavHeader.classList.add("sideNav__header_open");
    sideNavArrow.classList.add("sideNav__arrow_open");
    sideNavList.classList.add("sideNav__list_open");
    if(window.innerWidth < 768) {
        document.body.style.overflow= "hidden";
    }

    document.querySelectorAll(".sideNav__link").forEach(function(link){
        link.setAttribute("tabindex", "0");
    });
}

function closeSideNav(e) {
    open = false;
    sideNav.classList.remove("sideNav_open");
    sideNavHeader.classList.remove("sideNav__header_open");
    sideNavArrow.classList.remove("sideNav__arrow_open");
    sideNavList.classList.remove("sideNav__list_open");
    if(window.innerWidth < 768) {
        document.body.style.overflow = "";
    }

    document.querySelectorAll(".sideNav__link").forEach(function(link){
        link.setAttribute("tabindex", "-1");
    });
}

/* function moves the side nav component to the edge of the window */
function addHideOnScroll(){
    if(window.innerWidth > 1023) return;
    let scrlY = window.scrollY,
    links = document.querySelectorAll("a");

    window.addEventListener("scroll", function(){
        if(window.scrollY > scrlY){
            sideNav.style.transform = "translateY(-44px)";
        } else {
            sideNav.style.transform = "";
        }
        scrlY = window.scrollY;
    });

    links.forEach(function(link){
        link.addEventListener("click", function(){
            setTimeout(() => {
              sideNav.style.transform = "translateY(-44px)";
            }, 20);
        })
    });
}

/* mark current section */
function markPosition() {
    let links = document.querySelectorAll(".sideNav__link"),
        offsets = [];

    setPositionData();
    markLink();


    /* set offset of the sections */
    function setPositionData() {
        offsets = [];
        sections.forEach(function(section){
            offsets.push(section.getBoundingClientRect().top - 
            document.body.getBoundingClientRect().top -
            Math.floor(window.innerHeight/2) ); 
        });
        offsets.push(sections[sections.length -1].getBoundingClientRect().bottom - 
        document.body.getBoundingClientRect().top - 
        Math.floor(window.innerHeight/2) );
    }

    /* mark current section link */
    function markLink() {
        offsets.forEach(function(offset, i){
            if(window.scrollY >= offsets[i] && window.scrollY < offsets[i+1] && links[i] != undefined){
                links[i].classList.add("sideNav__link_current");
            } else {
                if(links[i] != undefined){
                    links[i].classList.remove("sideNav__link_current");
                } 
            }
        });

    }

    window.addEventListener("scroll", setPositionData);
    window.addEventListener("scroll", markLink);
    window.addEventListener("resize", setPositionData);
    window.addEventListener("resize", markLink);
}

})();