// ============================
// AOS INIT
// ============================

AOS.init({
    duration: 800,
    once: true,
    offset: 80,
    easing: 'ease-out-quart'
});


// ============================
// GSAP HERO ANIMATION
// ============================

gsap.from(".navbar", { y: -80, opacity: 0, duration: .9, ease: "power3.out" });
gsap.from(".hero-badge",  { y: 30, opacity: 0, duration: .8, delay: .2 });
gsap.from(".hero-title",  { y: 60, opacity: 0, duration: 1, delay: .35 });
gsap.from(".hero-content > p", { y: 40, opacity: 0, duration: .9, delay: .55 });
gsap.from(".hero-buttons",{ y: 30, opacity: 0, duration: .8, delay: .7 });
gsap.from(".stats-bar",   { y: 20, opacity: 0, duration: .8, delay: .9 });
gsap.from(".hero-visual", { scale: .85, opacity: 0, duration: 1.2, delay: .5, ease: "back.out(1.7)" });
gsap.from(".mini-card.one",{ x: 40, opacity: 0, duration: .8, delay: 1.1 });
gsap.from(".mini-card.two",{ x: -40, opacity: 0, duration: .8, delay: 1.3 });


// ============================
// SCROLL PROGRESS BAR
// ============================

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    document.getElementById("progress-bar").style.width = (scrollTop / scrollHeight * 100) + "%";
});


// ============================
// NAVBAR SCROLL EFFECT
// ============================

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    navbar.style.background = window.scrollY > 80
        ? "rgba(5,5,8,0.92)"
        : "rgba(5,5,8,0.7)";
});


// ============================
// SMOOTH SCROLL
// ============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
    });
});


// ============================
// PARTICLES JS
// ============================

particlesJS("particles-js", {
    particles: {
        number: { value: 50 },
        color: { value: "#6d28d9" },
        shape: { type: "circle" },
        opacity: { value: 0.25, random: true },
        size: { value: 2.5, random: true },
        line_linked: {
            enable: true,
            distance: 160,
            color: "#6d28d9",
            opacity: 0.18,
            width: 1
        },
        move: { enable: true, speed: 1.2 }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
        },
        modes: {
            repulse: { distance: 80 },
            push: { particles_nb: 2 }
        }
    },
    retina_detect: true
});


// ============================
// SCROLL REVEAL
// ============================

const revealEls = document.querySelectorAll(
    ".bento-item, .project-card, .price-card, .testimonial"
);

const revealOnScroll = () => {
    revealEls.forEach((el, i) => {
        if (el.getBoundingClientRect().top < window.innerHeight - 80) {
            setTimeout(() => el.classList.add("active"), i * 60);
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// ============================
// MAGNETIC BUTTON EFFECT
// ============================

document.querySelectorAll(".btn-primary, .btn-secondary, .nav-btn").forEach(btn => {
    btn.addEventListener("mousemove", (e) => {
        const r = btn.getBoundingClientRect();
        const x = e.clientX - r.left - r.width / 2;
        const y = e.clientY - r.top - r.height / 2;
        btn.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
    });
    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translate(0,0)";
    });
});


// ============================
// TYPING EFFECT (hero title only)
// ============================

// Type the plain-text portion only; restore full innerHTML (with span) at the end
const heroTitle = document.querySelector(".hero-title");
const fullHTML = heroTitle.innerHTML; // preserve the real HTML
const plainText = "Websites That\n"; // first line plain text
const gradientPart = '<br><span class="gradient-text">Actually Convert</span>';

heroTitle.innerHTML = "";
let idx = 0;

function typeWriter() {
    if (idx < plainText.length) {
        heroTitle.innerHTML = plainText.substring(0, ++idx).replace("\n", "<br>");
        setTimeout(typeWriter, 38);
    } else {
        // snap in the gradient span cleanly
        heroTitle.innerHTML = plainText.replace("\n", "<br>") + gradientPart;
    }
}

window.addEventListener("load", () => setTimeout(typeWriter, 600));


// ============================
// 3D PARALLAX ON HERO CARD
// ============================

const glassCard = document.querySelector(".glass-card");
document.addEventListener("mousemove", (e) => {
    if (!glassCard) return;
    const x = (window.innerWidth / 2 - e.pageX) / 35;
    const y = (window.innerHeight / 2 - e.pageY) / 35;
    glassCard.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
});


// ============================
// CONTACT FORM
// ============================

const form = document.querySelector(".contact-form");
if (form) {
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const btn = form.querySelector("button");
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Message Sent!';
        btn.style.background = "linear-gradient(135deg,#059669,#10b981)";
        setTimeout(() => {
            btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Send Message';
            btn.style.background = "";
            form.reset();
        }, 3000);
    });
}


// ============================
// BACK TO TOP BUTTON
// ============================

const backTop = document.createElement("button");
backTop.innerHTML = '<i class="fas fa-arrow-up"></i>';
backTop.id = "backToTop";
Object.assign(backTop.style, {
    position:"fixed", bottom:"100px", right:"28px",
    width:"48px", height:"48px", border:"1px solid rgba(255,255,255,.1)",
    borderRadius:"12px", cursor:"pointer",
    background:"rgba(13,13,20,.9)",
    backdropFilter:"blur(12px)",
    color:"#fff", fontSize:"14px",
    display:"none", zIndex:"999",
    transition:"all .3s"
});
document.body.appendChild(backTop);

window.addEventListener("scroll", () => {
    backTop.style.display = window.scrollY > 500 ? "block" : "none";
});

backTop.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));


// ============================
// CONSOLE BRANDING
// ============================

console.log(`
%c Your_Page %c Premium Website Development
%c Developed by Devansh Tripathi | github.com/Devanshtrip112221
`, 
"background:#6d28d9;color:white;padding:4px 10px;border-radius:4px;font-weight:bold",
"color:#8b5cf6;font-weight:bold",
"color:#7a7a9a"
);