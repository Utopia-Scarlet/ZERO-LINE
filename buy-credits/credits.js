/* =========================================================
   PROJECT ZERO//LINE
   GAME CREDITS
========================================================= */



/* =========================================================
   PAGE ENTRANCE
========================================================= */

window.addEventListener(
    "load",
    () => {

        requestAnimationFrame(
            () => {

                document.body
                    .classList
                    .add(
                        "page-ready"
                    );

            }
        );

    }
);



/* =========================================================
   ELEMENTS
========================================================= */

const creditCards =
    document.querySelectorAll(
        ".credit-card"
    );


const selectedCredits =
    document.getElementById(
        "selectedCredits"
    );


const selectedBreakdown =
    document.getElementById(
        "selectedBreakdown"
    );


const selectedPrice =
    document.getElementById(
        "selectedPrice"
    );


const purchaseButton =
    document.getElementById(
        "purchaseButton"
    );


const purchaseNote =
    document.getElementById(
        "purchaseNote"
    );



/* =========================================================
   CURRENT SELECTION
========================================================= */

let currentSelection = {

    base:
        500,

    bonus:
        0,

    total:
        500,

    price:
        "4.99"

};



/* =========================================================
   UPDATE SELECTION
========================================================= */

function updateCreditSelection(
    card
) {

    /* -----------------------------------------
       REMOVE OLD ACTIVE STATE
    ----------------------------------------- */

    creditCards.forEach(
        item => {

            item.classList.remove(
                "active"
            );

        }
    );



    /* -----------------------------------------
       ADD NEW ACTIVE STATE
    ----------------------------------------- */

    card.classList.add(
        "active"
    );



    /* -----------------------------------------
       READ DATA
    ----------------------------------------- */

    const base =
        Number(
            card.dataset.base
        );


    const bonus =
        Number(
            card.dataset.bonus
        );


    const price =
        card.dataset.price;


    const total =
        base + bonus;



    /* -----------------------------------------
       SAVE CURRENT PACKAGE
    ----------------------------------------- */

    currentSelection = {

        base:
            base,

        bonus:
            bonus,

        total:
            total,

        price:
            price

    };



    /* -----------------------------------------
       UPDATE SUMMARY TITLE
    ----------------------------------------- */

    selectedCredits.textContent =
        `${total.toLocaleString()} ZERO CREDITS`;



    /* -----------------------------------------
       UPDATE BREAKDOWN
    ----------------------------------------- */

    if (
        bonus > 0
    ) {

        selectedBreakdown.textContent =
            `${base.toLocaleString()} Credits + ${bonus.toLocaleString()} Bonus`;

    }

    else {

        selectedBreakdown.textContent =
            `${base.toLocaleString()} Credits`;

    }



    /* -----------------------------------------
       UPDATE PRICE
    ----------------------------------------- */

    selectedPrice.textContent =
        `$${price}`;



    /* -----------------------------------------
       RESET PURCHASE NOTE
    ----------------------------------------- */

    purchaseNote.textContent =
        "ZERO Credits are linked to your account and cannot be transferred between accounts.";

}



/* =========================================================
   CREDIT CARD EVENTS
========================================================= */

creditCards.forEach(
    card => {

        card.addEventListener(
            "click",
            () => {

                updateCreditSelection(
                    card
                );

            }
        );

    }
);



/* =========================================================
   PURCHASE BUTTON
========================================================= */

purchaseButton.addEventListener(
    "click",
    () => {

        /*
            目前没有真实支付系统。

            所以这里只做前端反馈，
            后续如果需要可以继续设计：

            PAYMENT METHOD
            ↓
            CREDIT CARD
            PAYPAL
            APPLE PAY
            ETC.
        */


        purchaseNote.textContent =
            `${currentSelection.total.toLocaleString()} ZERO Credits selected — payment integration coming next.`;


        purchaseButton
            .classList
            .add(
                "purchase-confirmed"
            );


        setTimeout(
            () => {

                purchaseButton
                    .classList
                    .remove(
                        "purchase-confirmed"
                    );

            },

            350
        );

    }
);