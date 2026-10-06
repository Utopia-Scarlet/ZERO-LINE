/* =========================================================
   ZERO//LINE
   BUY GAME
========================================================= */


const buyNowButton =
    document.getElementById(
        "buyNowButton"
    );


const platformModal =
    document.getElementById(
        "platformModal"
    );


const platformClose =
    document.getElementById(
        "platformClose"
    );


const platformBackdrop =
    document.getElementById(
        "platformBackdrop"
    );



/* =========================================================
   OPEN PLATFORM SELECTOR
========================================================= */

function openPlatformSelector() {

    platformModal
        .classList
        .add("open");


    platformModal
        .setAttribute(
            "aria-hidden",
            "false"
        );


    document.body.style.overflow =
        "hidden";

}



/* =========================================================
   CLOSE PLATFORM SELECTOR
========================================================= */

function closePlatformSelector() {

    platformModal
        .classList
        .remove("open");


    platformModal
        .setAttribute(
            "aria-hidden",
            "true"
        );


    document.body.style.overflow =
        "";

}



/* =========================================================
   EVENTS
========================================================= */

buyNowButton.addEventListener(
    "click",
    openPlatformSelector
);


platformClose.addEventListener(
    "click",
    closePlatformSelector
);


platformBackdrop.addEventListener(
    "click",
    closePlatformSelector
);



/* ESC CLOSE */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            platformModal
                .classList
                .contains("open")
        ) {

            closePlatformSelector();

        }

    }
);

/* =========================================================
   PAGE ENTRANCE
========================================================= */

window.addEventListener(
    "load",
    () => {

        requestAnimationFrame(() => {

            document.body
                .classList
                .add("page-ready");

        });

    }
);