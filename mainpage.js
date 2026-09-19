/* =========================================================
   PROJECT ZERO//LINE
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   HEADER SCROLL
========================================================= */

const header = document.querySelector(".site-header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

});


/* =========================================================
   SECTION DETECTION
========================================================= */

const sections = document.querySelectorAll(".section");

const pageDots =
    document.querySelectorAll(".page-dot");

const navLinks =
    document.querySelectorAll(".nav-link");


const sectionObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting &&
                    entry.intersectionRatio > 0.45
                ) {

                    const id =
                        entry.target.id;


                    updatePagination(id);

                    updateNavigation(id);

                }

            });

        },

        {

            threshold:
                [0.45, 0.6, 0.75]

        }

    );


sections.forEach(section => {

    sectionObserver.observe(section);

});


function updatePagination(sectionId) {

    pageDots.forEach(dot => {

        dot.classList.remove("active");

        if (
            dot.dataset.target ===
            sectionId
        ) {

            dot.classList.add("active");

        }

    });

}


function updateNavigation(sectionId) {

    navLinks.forEach(link => {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (
            href === `#${sectionId}`
        ) {

            link.classList.add("active");

        }

    });

}


/* =========================================================
   PAGE DOT CLICK
========================================================= */

pageDots.forEach(dot => {

    dot.addEventListener(
        "click",
        () => {

            const target =
                dot.dataset.target;

            const section =
                document.getElementById(target);

            section.scrollIntoView({

                behavior:
                    "smooth"

            });

        }
    );

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealItems =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target
                        .classList
                        .add("visible");

                }

            });

        },

        {

            threshold:
                0.15

        }

    );


revealItems.forEach(item => {

    revealObserver.observe(item);

});


/* =========================================================
   HERO SECTION
   LEFT / RIGHT ENTER
========================================================= */

const heroSection =
    document.querySelector(".heroes-section");


const heroSectionObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    heroSection
                        .classList
                        .add("heroes-visible");

                }

            });

        },

        {

            threshold:
                0.25

        }

    );


heroSectionObserver.observe(heroSection);


/* =========================================================
   HERO DATABASE
========================================================= */

const heroes = [

    {

        name:
            "NOVA",

        role:
            "ASSAULT",

        description:
            "A mobile assault specialist who manipulates kinetic energy to break defensive lines and reposition during combat.",

        ability1:
            "IMPULSE",

        ability1Description:
            "Release a directional kinetic burst.",

        ability2:
            "PHASE DASH",

        ability2Description:
            "Rapidly reposition toward the target direction.",

        background:
            "linear-gradient(160deg, #31363d, #151719 75%)"

    },


    {

        name:
            "VESPER",

        role:
            "RECON",

        description:
            "An information warfare operative capable of tracking enemy movement and disrupting battlefield intelligence.",

        ability1:
            "SIGNAL TRACE",

        ability1Description:
            "Reveal nearby enemy movement signatures.",

        ability2:
            "BLACKOUT",

        ability2Description:
            "Temporarily disrupt enemy detection systems.",

        background:
            "linear-gradient(160deg, #242b33, #0c1117 75%)"

    },


    {

        name:
            "RONIN",

        role:
            "DUELIST",

        description:
            "A close-range combat specialist built for high-risk flanking and aggressive single-target engagements.",

        ability1:
            "EDGE DRIVE",

        ability1Description:
            "Charge forward with enhanced combat movement.",

        ability2:
            "COUNTER",

        ability2Description:
            "Prepare a defensive stance against incoming attacks.",

        background:
            "linear-gradient(160deg, #3a2728, #120e0f 75%)"

    }

];


/* =========================================================
   HERO ELEMENTS
========================================================= */

const heroName =
    document.getElementById("heroName");

const heroRole =
    document.getElementById("heroRole");

const heroDescription =
    document.getElementById(
        "heroDescription"
    );

const heroImage =
    document.getElementById("heroImage");

const heroImageText =
    document.getElementById(
        "heroImageText"
    );


const ability1Name =
    document.getElementById(
        "ability1Name"
    );

const ability1Description =
    document.getElementById(
        "ability1Description"
    );

const ability2Name =
    document.getElementById(
        "ability2Name"
    );

const ability2Description =
    document.getElementById(
        "ability2Description"
    );


const heroInformation =
    document.querySelector(
        ".hero-information"
    );


const heroButtons =
    document.querySelectorAll(
        ".hero-select"
    );


/* =========================================================
   HERO SWITCH ANIMATION
========================================================= */

heroButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            const index =
                Number(
                    button.dataset.hero
                );


            heroButtons.forEach(btn => {

                btn.classList.remove(
                    "active"
                );

            });


            button.classList.add(
                "active"
            );


            switchHero(index);

        }
    );

});


function switchHero(index) {

    /*
        OLD HERO EXIT

        LEFT IMAGE → LEFT
        RIGHT TEXT → RIGHT
    */

    heroImage.style.transform =
        "translateX(-100px)";

    heroImage.style.opacity =
        "0";


    heroInformation.style.transform =
        "translateX(100px)";

    heroInformation.style.opacity =
        "0";


    setTimeout(() => {

        const hero =
            heroes[index];


        /*
            CHANGE CONTENT
        */

        heroName.textContent =
            hero.name;

        heroRole.textContent =
            hero.role;

        heroDescription.textContent =
            hero.description;


        ability1Name.textContent =
            hero.ability1;

        ability1Description.textContent =
            hero.ability1Description;


        ability2Name.textContent =
            hero.ability2;

        ability2Description.textContent =
            hero.ability2Description;


        heroImageText.textContent =
            hero.name;


        heroImage.style.background =
            hero.background;


        /*
            NEW HERO START POSITION
        */

        heroImage.style.transform =
            "translateX(100px)";


        heroInformation.style.transform =
            "translateX(-100px)";


        requestAnimationFrame(() => {

            /*
                NEW HERO ENTER
            */

            heroImage.style.opacity =
                "1";

            heroImage.style.transform =
                "translateX(0)";


            heroInformation.style.opacity =
                "1";

            heroInformation.style.transform =
                "translateX(0)";

        });


    }, 380);

}


/* =========================================================
   PARTICLE / PETAL EFFECT
========================================================= */

const particleLayer =
    document.getElementById("particleLayer");


function createParticle(initial = false) {

    /* 如果 HTML 里没有 particleLayer，直接停止 */
    if (!particleLayer) {
        return;
    }


    const particle =
        document.createElement("span");

    particle.classList.add("particle");


    /* =====================================================
       DEPTH
    ===================================================== */

    const depthRandom =
        Math.random();

    let scale;
    let opacity;


    if (depthRandom < 0.35) {

        particle.classList.add("far");

        scale =
            0.45 +
            Math.random() * 0.25;

        opacity =
            0.25 +
            Math.random() * 0.18;

    }

    else if (depthRandom < 0.78) {

        particle.classList.add("mid");

        scale =
            0.75 +
            Math.random() * 0.35;

        opacity =
            0.42 +
            Math.random() * 0.22;

    }

    else {

        particle.classList.add("near");

        scale =
            1.05 +
            Math.random() * 0.5;

        opacity =
            0.58 +
            Math.random() * 0.22;

    }


    /* =====================================================
       POSITION
    ===================================================== */

    const startX =
        Math.random() * 100;

    particle.style.left =
        `${startX}%`;


    /*
        页面第一次打开时：
        花瓣直接随机分布在屏幕里面
    */

    if (initial) {

        const startY =
            5 +
            Math.random() * 85;

        particle.style.top =
            `${startY}vh`;

        particle.classList.add(
            "initial-particle"
        );

    }

    else {

        /*
            后续花瓣：
            从屏幕顶部外开始掉落
        */

        particle.style.top =
            "-8vh";

    }


    /* =====================================================
       SIZE
    ===================================================== */

    const width =
        8 +
        Math.random() * 13;

    particle.style.width =
        `${width}px`;

    particle.style.height =
        `${width * 0.48}px`;


    /* =====================================================
       MOVEMENT
    ===================================================== */

    const drift =
        -130 +
        Math.random() * 300;


    particle.style.setProperty(
        "--drift",
        `${drift}px`
    );


    particle.style.setProperty(
        "--scale",
        scale
    );


    particle.style.setProperty(
        "--particle-opacity",
        opacity
    );


    /* =====================================================
       SPEED
    ===================================================== */

    let duration;


    if (initial) {

        /*
            初始花瓣速度稍微随机一点
        */

        duration =
            7 +
            Math.random() * 8;

    }

    else {

        duration =
            8 +
            Math.random() * 9;

    }


    particle.style.animationDuration =
        `${duration}s`;


    /* =====================================================
       COLOUR
    ===================================================== */

    const colour =
        Math.random();


    /*
        60% ZERO//LINE Green
    */

    if (colour < 0.60) {

        particle.style.background =
            "#8EB59F";

    }


    /*
        30% Warm Ivory
    */

    else if (colour < 0.90) {

        particle.style.background =
            "#E8E3D7";

    }


    /*
        10% Warm Gold
    */

    else {

        particle.style.background =
            "#C6AD7D";

    }


    /* =====================================================
       ADD TO PAGE
    ===================================================== */

    particleLayer.appendChild(
        particle
    );


    /* =====================================================
       REMOVE AFTER ANIMATION
    ===================================================== */

    setTimeout(
        () => {

            particle.remove();

        },

        duration * 1000
    );

}


/* =========================================================
   INITIAL PARTICLES
   页面打开瞬间就存在
========================================================= */

for (
    let i = 0;
    i < 16;
    i++
) {

    createParticle(true);

}


/* =========================================================
   CONTINUOUS PARTICLES
   后续从顶部继续生成
========================================================= */

setInterval(
    () => {

        createParticle(false);

    },

    400
);




/*
    Generate initial particles
*/

/* 页面刚打开时立即生成一批 */

for (
    let i = 0;
    i < 42;
    i++
) {

    createParticle(true);

}

/* 后续持续生成 */

setInterval(
    createParticle,
    330
);

/* =========================================================
   SUBTLE HERO PARALLAX
========================================================= */

const homeHero =
    document.querySelector(
        ".hero-content"
    );


window.addEventListener(
    "scroll",
    () => {

        const scrollY =
            window.scrollY;


        if (
            scrollY <
            window.innerHeight
        ) {

            homeHero.style.transform =
                `translateY(${scrollY * 0.09}px)`;


        }

    }
);

/* =========================================================
   HERO RANDOM GLITCH
========================================================= */

const heroGlitch =
    document.getElementById(
        "heroGlitch"
    );


function triggerHeroGlitch() {

    if (!heroGlitch) {
        return;
    }


    heroGlitch.classList.add(
        "glitch-active"
    );


    /*
        故障持续时间
    */

    setTimeout(() => {

        heroGlitch.classList.remove(
            "glitch-active"
        );

    }, 430);


    /*
        下一次随机出现在
        3 - 7 秒之后
    */

    const nextGlitch =
        3000 +
        Math.random() * 4000;


    setTimeout(
        triggerHeroGlitch,
        nextGlitch
    );

}


/*
    页面第一次加载后，
    先等待一会再发生第一次故障
*/

setTimeout(
    triggerHeroGlitch,
    2200
);