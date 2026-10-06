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
    document.querySelectorAll(".nav-link, .mobile-top-link");


// Track the section at the reading line, including sections taller than the viewport.
let sectionFrame = 0;
function syncCurrentSection() {
    sectionFrame = 0;
    const readingLine = header.getBoundingClientRect().height + 40;
    let current = sections[0];
    sections.forEach(section => {
        if (section.getBoundingClientRect().top <= readingLine) current = section;
    });
    if (current) { updatePagination(current.id); updateNavigation(current.id); }
}
window.addEventListener("scroll", () => {
    if (!sectionFrame) sectionFrame = requestAnimationFrame(syncCurrentSection);
}, { passive: true });
new ResizeObserver(() => {
    document.documentElement.style.setProperty("--header-height", `${header.offsetHeight + 12}px`);
    syncCurrentSection();
}).observe(header);

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
        const active = link.getAttribute("href") === `#${sectionId}`;
        const changed = active && !link.classList.contains("active");
        link.classList.toggle("active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
        if (changed && link.classList.contains("mobile-top-link")) {
            const nav = link.parentElement;
            nav.scrollTo({ left: link.offsetLeft - nav.clientWidth / 2 + link.offsetWidth / 2,
                behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
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

    // =====================================================
    // 01 — NOVA
    // =====================================================

    {
        name: "NOVA",

        role: "VANGUARD",

        image: "./image/hero-nova.png",

        description:
            "A Japanese blade wielder who inherited her family's oath to protect the last human strongholds. She fights on the front line, shielding her younger brother and breaking enemy formations.",

        ability1:
            "CRIMSON SEVER",

        ability1Description:
            "Launch a fast energy slash through enemies ahead.",

        ability2:
            "MAPLE GUARD",

        ability2Description:
            "Raise the blade to reduce incoming damage and empower the next strike.",

        ability3:
            "OATHFALL",

        ability3Description:
            "Drive the sword into the ground, releasing a shockwave that launches nearby enemies.",

        background:
            "linear-gradient(160deg, #4a302d, #171413 75%)"
    },


    // =====================================================
    // 02 — VESPER
    // =====================================================

    {
        name: "VESPER",

        role: "INFILTRATOR",

        image: "./image/hero-vesper.png",

        description:
            "NOVA's younger brother and a shinobi trained in covert warfare. By combining traditional hand seals with modern combat technology, he hunts targets from the shadows.",

        ability1:
            "SHADOW SEAL",

        ability1Description:
            "Mark an enemy through a hand seal, revealing their position for a short time.",

        ability2:
            "VEIL STEP",

        ability2Description:
            "Dash rapidly in the target direction and leave behind a deceptive afterimage.",

        ability3:
            "NIGHTFALL",

        ability3Description:
            "Enter a silent combat state, increasing mobility and empowering attacks against marked enemies.",

        background:
            "linear-gradient(160deg, #20262b, #0c1013 75%)"
    },


    // =====================================================
    // 03 — RONIN
    // =====================================================

    {
        name: "RONIN",

        role: "HEAVY",

        image: "./image/hero-ronin.png",

        description:
            "A heavy combat machine created by inventor Elias Ward after autonomous war systems turned against humanity. RONIN was built to protect allied forces and overpower mechanical threats.",

        ability1:
            "SIEGE BURST",

        ability1Description:
            "Unleash sustained heavy fire that becomes more accurate while continuously attacking.",

        ability2:
            "AEGIS WALL",

        ability2Description:
            "Project a reinforced energy barrier that protects RONIN and nearby allies.",

        ability3:
            "OVERDRIVE",

        ability3Description:
            "Overcharge the combat core, enhancing weapons and unleashing a devastating assault barrage.",

        background:
            "linear-gradient(160deg, #303b34, #101513 75%)"
    }

];


/* =========================================================
   HERO ELEMENTS
========================================================= */

const heroName =
    document.getElementById("heroName");

const heroRole =
    document.getElementById("heroRole");

const heroImagePhoto =
    document.getElementById("heroImagePhoto");

const heroDescription =
    document.getElementById(
        "heroDescription"
    );

const heroImage =
    document.getElementById("heroImage");




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

const ability3Name =
    document.getElementById(
        "ability3Name"
    );

const ability3Description =
    document.getElementById(
        "ability3Description"
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

    // Old hero leaves
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


        // Change hero content
        heroName.textContent =
            hero.name;

        heroRole.textContent =
            hero.role;

        heroImagePhoto.src =
            hero.image;

        heroImagePhoto.alt =
            hero.name;

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

        ability3Name.textContent =
            hero.ability3;

        ability3Description.textContent =
            hero.ability3Description;

        heroImage.style.background =
            hero.background;


        // New hero starting position
        heroImage.style.transform =
            "translateX(100px)";

        heroInformation.style.transform =
            "translateX(-100px)";


        requestAnimationFrame(() => {

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


