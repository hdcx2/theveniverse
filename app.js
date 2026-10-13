// ===== PAGE ROUTING =====
const catFirstPage = {
    genetic: 'chromosomal',
    vascular: 'vascular',
    '3d': 'bycondition',
    treatment: 'specialists',
    community: 'forums',
    learn: 'publications'
};

// Maps page IDs to their HTML file in /pages/
const pageFiles = {
    combined: 'pages/kts.html',
    'singlegene-marfan': 'pages/marfan.html',
    'singlegene-eds': 'pages/eds.html',
    avms: 'pages/avms.html',
    vascular: 'pages/vascular.html',
    venous: 'pages/venous.html',
    lymphatic: 'pages/lymphatic.html',
    capillary: 'pages/capillary.html',
    specialists: 'pages/specialists.html',
    chromosomal: 'pages/chromosomal.html',
    singlegene: 'pages/singlegene.html'
};

// All other pages use the placeholder
const placeholderPages = {
    multifactorial: {
        title: 'Multifactorial / Complex Disorders',
        sub: 'Conditions influenced by multiple genes and environmental factors',
        icon: 'fa-flask',
        breadcrumb: 'Genetic Diseases',
        msg: 'Resources for multifactorial disorders including diabetes, heart disease, and cleft palate.'
    },
    mitochondrial: {
        title: 'Mitochondrial Disorders',
        sub: 'Conditions caused by dysfunctional mitochondria',
        icon: 'fa-flask',
        breadcrumb: 'Genetic Diseases',
        msg: 'Content on Leigh syndrome, MELAS, LHON, and more.'
    },
    venous: {
        title: 'Venous Malformations',
        sub: 'Low-flow vascular anomalies of the venous system',
        icon: 'fa-flask',
        breadcrumb: 'Vascular Malformations',
        msg: 'Comprehensive information on venous malformations.'
    },
    lymphatic: {
        title: 'Lymphatic Malformations',
        sub: 'Abnormal growths of the lymphatic system',
        icon: 'fa-flask',
        breadcrumb: 'Vascular Malformations',
        msg: 'Information on macrocystic, microcystic, and mixed lymphatic malformations.'
    },
    capillary: {
        title: 'Capillary Malformations',
        sub: 'Port-wine stains and related capillary anomalies',
        icon: 'fa-flask',
        breadcrumb: 'Vascular Malformations',
        msg: 'Resources on port-wine stains and Sturge-Weber syndrome.'
    },
    bycondition: {
        title: '3D Models by Condition',
        sub: 'Browse interactive models grouped by diagnosis',
        icon: 'fa-cube',
        breadcrumb: '3D Models',
        msg: 'Interactive 3D models for each condition are being built.'
    },
    bybody: {
        title: '3D Models by Body System',
        sub: 'Cardiovascular, neurological, musculoskeletal models',
        icon: 'fa-cube',
        breadcrumb: '3D Models',
        msg: 'Body system models are being developed.'
    },
    viewer: {
        title: 'Interactive Anatomy Viewer',
        sub: 'Rotate, zoom, and explore cross-sections',
        icon: 'fa-cube',
        breadcrumb: '3D Models',
        msg: 'The interactive anatomy viewer is under development.'
    },
    specialists: {
        title: 'Find a Specialist',
        sub: 'Search by condition, specialty, or location',
        icon: 'fa-user-md',
        breadcrumb: 'Treatment Resources',
        msg: 'A comprehensive directory of specialists is being built.'
    },
    centers: {
        title: 'Treatment Centers',
        sub: 'Centers of excellence by region',
        icon: 'fa-hospital',
        breadcrumb: 'Treatment Resources',
        msg: 'A searchable map of treatment centers is being developed.'
    },
    therapies: {
        title: 'Treatment Options & Therapies',
        sub: 'Surgery, sclerotherapy, embolization, medications',
        icon: 'fa-pills',
        breadcrumb: 'Treatment Resources',
        msg: 'Detailed treatment guides for each condition.'
    },
    trials: {
        title: 'Clinical Trials',
        sub: 'Active studies, eligibility, and enrollment',
        icon: 'fa-microscope',
        breadcrumb: 'Treatment Resources',
        msg: 'A searchable database of relevant clinical trials.'
    },
    insurance: {
        title: 'Insurance & Financial Resources',
        sub: 'Coverage guides and assistance programs',
        icon: 'fa-hand-holding-usd',
        breadcrumb: 'Treatment Resources',
        msg: 'Guides on insurance and financial assistance.'
    },
    forums: {
        title: 'Patient Forums',
        sub: 'Connect with others who understand your journey',
        icon: 'fa-comments',
        breadcrumb: 'Community & Support',
        msg: 'Discussion boards by condition are being set up.'
    },
    caregiver: {
        title: 'Caregiver Support Groups',
        sub: 'Family networks and peer connections',
        icon: 'fa-hands-helping',
        breadcrumb: 'Community & Support',
        msg: 'Support groups for caregivers and families.'
    },
    stories: {
        title: 'Patient Stories & Testimonials',
        sub: 'Real experiences from patients and families',
        icon: 'fa-book-open',
        breadcrumb: 'Community & Support',
        msg: 'Patient journeys and lived experiences.'
    },
    events: {
        title: 'Events & Webinars',
        sub: 'Conferences, Q&As, and awareness days',
        icon: 'fa-calendar-alt',
        breadcrumb: 'Community & Support',
        msg: 'Upcoming webinars and events.'
    },
    publications: {
        title: 'Research & Publications',
        sub: 'Peer-reviewed studies and latest findings',
        icon: 'fa-file-medical-alt',
        breadcrumb: 'Learn & Research',
        msg: 'Curated research papers and publications.'
    },
    articles: {
        title: 'Educational Articles',
        sub: 'Plain-language explainers and guides',
        icon: 'fa-newspaper',
        breadcrumb: 'Learn & Research',
        msg: 'Easy-to-understand articles about each condition.'
    },
    glossary: {
        title: 'Glossary of Terms',
        sub: 'Medical vocabulary, A-Z definitions',
        icon: 'fa-spell-check',
        breadcrumb: 'Learn & Research',
        msg: 'A comprehensive glossary of medical terms.'
    },
    faqs: {
        title: 'Frequently Asked Questions',
        sub: 'Common questions by topic area',
        icon: 'fa-question-circle',
        breadcrumb: 'Learn & Research',
        msg: 'Answers to common questions.'
    }
};

// Search conditions list
const conditions = [
    'Klippel-Trenaunay Syndrome',
    'Marfan Syndrome',
    'Ehlers-Danlos Syndrome',
    'Arteriovenous Malformations',
    'Down Syndrome',
    'Turner Syndrome',
    'Klinefelter Syndrome',
    'Edwards Syndrome',
    'Cystic Fibrosis',
    'Sickle Cell Disease',
    'Venous Malformations',
    'Lymphatic Malformations',
    'Capillary Malformations',
    'Chromosomal Disorders',
    'Mitochondrial Disorders',
    'Vascular Malformations',
    'Blue Rubber Bleb Nevus Syndrome',
    'Facial Venous Malformation',
    'Intramuscular Venous Malformation',
    'Gastrointestinal Venous Malformation',
    'Extremity Venous Malformation',
    'Cystic Hygroma',
    'Tongue Lymphatic Malformation',
    'Axillary Lymphatic Malformation',
    'Retroperitoneal Lymphatic Malformation',
    'Cervical Lymphatic Malformation',
    'Orbital Lymphatic Malformation',
    'CM-AVM Syndrome',
    'Port-Wine Birthmark',
    'Nevus Flammeus',
    'Salmon Patch',
    'Sturge-Weber Syndrome',
    'Brain AVM',
    'Skin AVM',
    'Limb AVM',
    'Pulmonary AVM',
    'Spinal AVM'
];

const searchMap = {
    'vascular malformations': 'vascular',
    'klippel-trenaunay syndrome': 'combined',
    'marfan syndrome': 'singlegene-marfan',
    'ehlers-danlos syndrome': 'singlegene-eds',
    'arteriovenous malformations': 'avms',
    'chromosomal disorders': 'chromosomal',
    'venous malformations': 'venous',
    'lymphatic malformations': 'lymphatic',
    'capillary malformations': 'capillary',
    'mitochondrial disorders': 'mitochondrial',
    'down syndrome': 'chromosomal',
    'turner syndrome': 'chromosomal',
    'klinefelter syndrome': 'chromosomal',
    'edwards syndrome': 'chromosomal',
    'cystic fibrosis': 'singlegene',
    'sickle cell disease': 'singlegene',
    'blue rubber bleb nevus syndrome': 'venous',
    'facial venous malformation': 'venous',
    'intramuscular venous malformation': 'venous',
    'gastrointestinal venous malformation': 'venous',
    'extremity venous malformation': 'venous',
    'cystic hygroma': 'lymphatic',
    'tongue lymphatic malformation': 'lymphatic',
    'axillary lymphatic malformation': 'lymphatic',
    'retroperitoneal lymphatic malformation': 'lymphatic',
    'cervical lymphatic malformation': 'lymphatic',
    'orbital lymphatic malformation': 'lymphatic',
    'cm-avm syndrome': 'capillary',
    'port-wine birthmark': 'capillary',
    'nevus flammeus': 'capillary',
    'salmon patch': 'capillary',
    'sturge-weber syndrome': 'capillary',
    'brain avm': 'avms',
    'skin avm': 'avms',
    'limb avm': 'avms',
    'pulmonary avm': 'avms',
    'spinal avm': 'avms'
};


// ===== LOAD PAGE =====
function loadPage(id) {
    const contentDiv = document.getElementById('page-content');
    const homeDiv = document.getElementById('page-home');
    const contactDiv = document.getElementById('contact');

    if (id === 'home') {
        homeDiv.style.display = '';
        contentDiv.innerHTML = '';
        contentDiv.classList.remove('has-content');
        contactDiv.style.display = 'none';
        updateNav('home');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    if (id === 'contact') {
        homeDiv.style.display = 'none';
        contentDiv.innerHTML = '';
        contentDiv.classList.remove('has-content');
        contactDiv.style.display = '';
        updateNav('');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    // Hide home and contact while a content page is showing
    homeDiv.style.display = 'none';
    contactDiv.style.display = 'none';
    updateNav('');

    if (pageFiles[id]) {
        fetch(pageFiles[id])
            .then(res => {
                if (!res.ok) throw new Error('Page not found');
                return res.text();
            })
            .then(html => {
                contentDiv.innerHTML = html;
                if (['vascular', 'venous', 'lymphatic', 'capillary', 'avms', 'combined'].includes(id)) {
                    const breadcrumb = contentDiv.querySelector('.breadcrumb');
                    if (breadcrumb) breadcrumb.insertAdjacentHTML('afterend', buildVascularSubnav(id));
                }
                contentDiv.classList.add('has-content');
                window.scrollTo({ top: 0, behavior: 'smooth' });
                initTabs();
                initSlideshows();
            })
            .catch(() => {
                contentDiv.innerHTML = buildLoadError();
                contentDiv.classList.add('has-content');
            });
    } else if (placeholderPages[id]) {
        contentDiv.innerHTML = buildPlaceholder(id);
        contentDiv.classList.add('has-content');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

function buildVascularSubnav(activePage) {
    const items = [
        ['vascular', 'Overview'],
        ['venous', 'Venous'],
        ['lymphatic', 'Lymphatic'],
        ['capillary', 'Capillary'],
        ['avms', 'Arteriovenous'],
        ['combined', 'Combined / complex']
    ];

    return `<nav class="vascular-subnav" aria-label="Vascular malformation types">${items.map(([id, label]) =>
        `<a href="#" ${id === activePage ? 'aria-current="page"' : ''} onclick="loadPage('${id}');return false">${label}</a>`
    ).join('')}</nav>`;
}

function buildPlaceholder(id) {
    const p = placeholderPages[id];

    if (!p) {
        return '<div class="coming-soon"><i class="fas fa-flask"></i><h3>Coming Soon</h3></div>';
    }

    return `
        <div class="breadcrumb">
            <a href="#" onclick="loadPage('home'); return false">Home</a> &rsaquo;
            <span>${p.breadcrumb}</span> &rsaquo;
            <span>${p.title}</span>
        </div>
        <h1 class="page-title">${p.title}</h1>
        <p class="page-subtitle">${p.sub}</p>
        <div class="title-bar"></div>
        <div class="coming-soon">
            <i class="fas ${p.icon}"></i>
            <h3>Detailed Content Coming Soon</h3>
            <p>${p.msg}</p>
        </div>
    `;
}

function buildLoadError() {
    return `
        <div class="coming-soon">
            <i class="fas fa-triangle-exclamation"></i>
            <h3>This page could not be loaded</h3>
            <p>Open the site through a local server (for example VS Code's Live Server) instead of double-clicking index.html, and check that the file exists in the pages folder.</p>
        </div>
    `;
}

function showCat(cat) {
    if (catFirstPage[cat]) loadPage(catFirstPage[cat]);
    updateNav(cat);
}

function updateNav(active) {
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    const navLink = document.querySelector(`[data-nav="${active}"]`);
    if (navLink) navLink.classList.add('active');
}


// ===== TABS (works on dynamically loaded content) =====
function switchTab(btn, panelId) {
    const tabsContainer = btn.closest('.tabs');

    tabsContainer.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    tabsContainer.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));

    btn.classList.add('active');
    document.getElementById(panelId).classList.add('active');
}

function initTabs() {
    document.querySelectorAll('#page-content .tabs').forEach(tabGroup => {
        const firstBtn = tabGroup.querySelector('.tab-btn');
        const firstPanel = tabGroup.querySelector('.tab-panel');

        if (firstBtn) firstBtn.classList.add('active');
        if (firstPanel) firstPanel.classList.add('active');
    });
}


// ===== SLIDESHOWS (rotate only when a slideshow has more than one slide) =====
let slideshowTimer = null;

function initSlideshows() {
    clearInterval(slideshowTimer);

    const slides = document.querySelector('#page-content .slides');
    if (!slides || slides.children.length < 2) return;

    let current = 0;

    slideshowTimer = setInterval(() => {
        current = (current + 1) % slides.children.length;
        slides.style.transform = `translateX(-${current * 100}%)`;
    }, 4000);
}


// ===== DARK MODE =====
function toggleDark() {
    document.body.classList.toggle('dark-mode');

    const icon = document.getElementById('darkIcon');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');

    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
    document.getElementById('darkIcon').classList.replace('fa-moon', 'fa-sun');
}


// ===== TOAST =====
function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 2500);
}

function sendContactEmail(event) {
    event.preventDefault();

    const name = document.getElementById('cName').value.trim();
    const sender = document.getElementById('cEmail').value.trim();
    const subject = document.getElementById('cSubject').value;
    const message = document.getElementById('cMsg').value.trim();
    const body = `Name: ${name}\nEmail: ${sender}\n\n${message}`;
    const mailto = `mailto:veniversegenetics@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
}


// ===== BOOKMARK =====
function toggleBookmark(btn, name) {
    btn.classList.toggle('bookmarked');

    const icon = btn.querySelector('i');
    icon.classList.toggle('far');
    icon.classList.toggle('fas');

    const isBookmarked = btn.classList.contains('bookmarked');
    showToast(isBookmarked ? `${name} bookmarked!` : `${name} removed from bookmarks`);

    let bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]');

    if (isBookmarked) {
        if (!bookmarks.includes(name)) bookmarks.push(name);
    } else {
        bookmarks = bookmarks.filter(b => b !== name);
    }

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}


// ===== SEARCH =====
function handleSearch() {
    const val = document.getElementById('searchInput').value.trim().toLowerCase();
    const suggest = document.getElementById('searchSuggest');

    if (val.length < 2) {
        suggest.classList.remove('show');
        return;
    }

    const matches = conditions.filter(c => c.toLowerCase().includes(val));

    if (matches.length) {
        suggest.innerHTML = matches
            .map(m => `<a href="#" role="option" onclick="searchSelect('${m}');return false">${m}</a>`)
            .join('');
        suggest.classList.add('show');
        suggest.setAttribute('role', 'listbox');
    } else {
        suggest.classList.remove('show');
        suggest.innerHTML = '';
    }
}

function submitSearch(event) {
    if (event) event.preventDefault();
    const input = document.getElementById('searchInput');
    const query = input.value.trim().toLowerCase();
    if (!query) {
        input.focus();
        showToast('Enter a condition to search.');
        return;
    }

    const exactMatch = conditions.find(condition => condition.toLowerCase() === query);
    const match = exactMatch || conditions.find(condition => condition.toLowerCase().includes(query));
    document.getElementById('searchSuggest').classList.remove('show');
    if (match) {
        searchSelect(match);
    } else {
        showToast('No matching condition found. Try a different search.');
    }
}

function searchSelect(name) {
    document.getElementById('searchSuggest').classList.remove('show');
    document.getElementById('searchInput').value = name;

    const key = name.toLowerCase();

    if (searchMap[key]) {
        loadPage(searchMap[key]);
    } else {
        showToast(`${name} information is coming soon.`);
    }
}

document.addEventListener('click', event => {
    const section = document.querySelector('.search-section');
    if (section && !section.contains(event.target)) {
        document.getElementById('searchSuggest')?.classList.remove('show');
    }
});


// ===== SCROLL EVENTS =====
window.addEventListener('scroll', () => {
    document.getElementById('backToTop').classList.toggle('show', window.scrollY > 400);

    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    document.getElementById('progressBar').style.width =
        docHeight > 0 ? (window.scrollY / docHeight * 100) + '%' : '0%';

    document.getElementById('topNav').classList.toggle('scrolled', window.scrollY > 10);
});


// ===== TYPING ANIMATION =====
(function typeWriter() {
    const text = 'Understanding Your Condition Starts Here';
    const el = document.getElementById('typedText');

    if (!el) return;

    let i = 0;

    function type() {
        if (i < text.length) {
            el.innerHTML = text.substring(0, i + 1) + '<span class="typed-cursor">|</span>';
            i++;
            setTimeout(type, 60);
        } else {
            el.innerHTML = text;
        }
    }

    type();
})();


// ===== ANIMATED COUNTERS =====
const statsEl = document.getElementById('statsSection');

if (statsEl) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll('.num').forEach(num => {
                    const target = parseInt(num.dataset.target);
                    const step = Math.ceil(target / 60);
                    let current = 0;

                    const timer = setInterval(() => {
                        current += step;

                        if (current >= target) {
                            current = target;
                            clearInterval(timer);
                        }

                        num.textContent = current.toLocaleString() + '+';
                    }, 25);
                });

                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    statsObserver.observe(statsEl);
}


// ===== TESTIMONIAL CAROUSEL =====
(function testimonialCarousel() {
    const slides = document.querySelectorAll('.testimonial-slide');
    if (!slides.length) return;

    let current = 0;

    setInterval(() => {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }, 4000);
})();


// ===== SIDEBAR (pull-out menu with dropdowns) =====
function toggleMenu(forceState) {
    const drawer = document.getElementById('menuDrawer');
    const overlay = document.getElementById('menuOverlay');
    const toggle = document.getElementById('menuToggle');
    const shouldOpen = forceState !== undefined ? forceState : !drawer.classList.contains('open');

    drawer.classList.toggle('open', shouldOpen);
    overlay.classList.toggle('active', shouldOpen);
    drawer.setAttribute('aria-hidden', String(!shouldOpen));
    toggle.setAttribute('aria-expanded', String(shouldOpen));
}

function toggleMenuGroup(btn) {
    const group = btn.closest('.menu-group');
    const wasOpen = group.classList.contains('open');

    // Close every dropdown first so only one is open at a time
    document.querySelectorAll('.menu-group').forEach(g => {
        g.classList.remove('open');
        g.querySelector('.menu-group-btn').setAttribute('aria-expanded', 'false');
        g.querySelector('.menu-sub').style.maxHeight = '0px';
    });

    if (!wasOpen) {
        const sub = group.querySelector('.menu-sub');
        group.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
        sub.style.maxHeight = sub.scrollHeight + 'px';
    }
}

// Switch to a tab (overview, symptoms, ...) on the page that is showing. Returns true if it worked.
function selectTab(tab) {
    const panel = document.querySelector(`#page-content .tab-panel[id$="-${tab}"]`);
    const btn = document.querySelector(`#page-content .tab-btn[onclick*="-${tab}'"]`);

    if (!panel || !btn) return false;

    switchTab(btn, panel.id);

    const tabs = document.querySelector('#page-content .tabs');
    if (tabs) tabs.scrollIntoView({ behavior: 'smooth', block: 'start' });

    return true;
}

// Load a page, then jump to the chosen tab once the page has finished loading
function openCondition(id, tab) {
    const content = document.getElementById('page-content');

    if (tab) {
        const observer = new MutationObserver(() => {
            if (selectTab(tab)) observer.disconnect();
        });
        observer.observe(content, { childList: true });
        setTimeout(() => observer.disconnect(), 3000);
    }

    loadPage(id);
    toggleMenu(false);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') toggleMenu(false);
});

// Condition-to-program guidance. Center-level entries are not endorsements of a particular clinician.
const specialistCenterProfiles = {
    mayo: { name: 'Mayo Clinic Vascular Anomalies Clinic', location: 'Arizona and Minnesota', url: 'https://www.mayoclinic.org/departments-centers/vascular-anomalies-clinic/overview/ovc-20421863', note: 'Multidisciplinary vascular-anomalies program; confirm the campus and exact condition.' },
    chop: { name: 'CHOP Comprehensive Vascular Anomalies Program', location: 'Philadelphia, Pennsylvania', url: 'https://www.chop.edu/centers-programs/vascular-anomalies-program', note: 'Pediatric program; confirm age eligibility and referral requirements.' },
    ucla: { name: 'UCLA Multidisciplinary Vascular Anomalies Clinic', location: 'Los Angeles, California', url: 'https://www.uclahealth.org/medical-services/multidisciplinary-vascular-anomalies-clinic', note: 'Broad program; match the individual clinician to the lesion location and procedure.' },
    hopkins: { name: 'Johns Hopkins Vascular Anomalies Center', location: 'Baltimore, Maryland', url: 'https://www.hopkinsmedicine.org/vascularanomaliescenter/', note: 'Broad complex-anomaly lead; confirm exact subtype and current clinic intake.' },
    chla: { name: "Children's Hospital Los Angeles Vascular Anomalies Center", location: 'Los Angeles, California', url: 'https://www.chla.org/vascular-anomalies-center/find-us', note: 'Pediatric program; verify age eligibility and current referral route.' },
    kki: { name: 'Kennedy Krieger Hunter Nelson Sturge-Weber Syndrome Center', location: 'Baltimore, Maryland', url: 'https://www.kennedykrieger.org/patient-care/centers-and-programs/sturge-weber-syndrome-center', note: 'Condition-specific starting point for Sturge-Weber syndrome; confirm the clinician and services needed.' },
    kkh: { name: "KK Women's and Children's Hospital Vascular Anomalies Clinic", location: 'Singapore', url: 'https://www.kkh.com.sg', note: 'Pediatric lead for venous, lymphatic, and combined anomalies; confirm the exact subtype and referral route.' },
    montpellier: { name: 'University Hospital of Montpellier — Lymphatic and Vascular Anomalies Centre', location: 'Montpellier, France', url: 'https://lymphorare.fr', note: 'Lymphatic and vascular-anomaly lead; ask about the specific anatomy and treatment modality.' },
    laribi: { name: 'Hôpital Lariboisière — Superficial Vascular Anomalies Reference Centre', location: 'Paris, France', url: 'https://hopital-lariboisiere.aphp.fr/centre-de-reference-des-anomalies-vasculaires-superficielles', note: 'The official centre page describes care for superficial vascular anomalies; it is not a match for brain, spinal, or pulmonary AVMs.' },
    uhn: { name: 'University Health Network Multidisciplinary Vascular Malformation Clinic', location: 'Toronto, Ontario, Canada', url: 'https://www.uhn.ca', note: 'Adult-care program; confirm the current clinic, condition scope, and referral requirements.' },
    gosh: { name: 'Great Ormond Street Hospital for Children', location: 'London, England', url: 'https://www.gosh.nhs.uk', note: 'Pediatric lead; confirm the exact lesion expertise and age/referral eligibility.' }
};

const specialistGroupMatches = {
    venous: ['mayo', 'chop', 'ucla', 'hopkins', 'chla', 'kkh', 'montpellier', 'uhn'],
    lymphatic: ['mayo', 'chop', 'ucla', 'chla', 'kkh', 'montpellier', 'uhn', 'gosh'],
    capillary: ['mayo', 'chop', 'kki', 'ucla', 'chla'],
    avm: ['mayo', 'chop', 'ucla', 'hopkins', 'chla', 'laribi'],
    combined: ['mayo', 'chop', 'hopkins', 'chla', 'kkh', 'montpellier', 'uhn']
};

const conditionSpecialistMatches = {
    'brbns': { group: 'venous', specialties: 'Vascular anomalies team, gastroenterology, hematology, and interventional radiology.', direct: ['mayo', 'chop'] },
    'facial-vm': { group: 'venous', specialties: 'Vascular anomalies specialist and interventional radiology; dermatology, ENT, ophthalmology, or plastic surgery depending on location.', direct: [] },
    'intramuscular-vm': { group: 'venous', specialties: 'Vascular anomalies specialist and interventional radiology; orthopedics or rehabilitation if muscle function is affected.', direct: [] },
    'gi-vm': { group: 'venous', specialties: 'Gastroenterology experienced in vascular lesions, with a vascular anomalies team and hematology as needed.', direct: [] },
    'extremity-vm': { group: 'venous', specialties: 'Vascular anomalies specialist and interventional radiology; vascular medicine/surgery or orthopedics according to anatomy.', direct: [] },
    'cystic-hygroma': { group: 'lymphatic', specialties: 'Vascular anomalies team and interventional radiology; ENT or pediatric surgery if the neck or airway is involved.', direct: ['mayo'] },
    'tongue-lm': { group: 'lymphatic', specialties: 'ENT/head-and-neck or oral-maxillofacial surgery, interventional radiology, and speech/swallowing support as needed.', direct: [] },
    'axillary-lm': { group: 'lymphatic', specialties: 'Vascular anomalies specialist, interventional radiology, and surgery familiar with axillary anatomy.', direct: [] },
    'retroperitoneal-lm': { group: 'lymphatic', specialties: 'Vascular anomalies specialist, interventional radiology, and abdominal or pediatric surgery.', direct: [] },
    'cervical-lm': { group: 'lymphatic', specialties: 'ENT/head-and-neck surgery, interventional radiology, and a vascular anomalies team; consider airway expertise.', direct: [] },
    'orbital-lm': { group: 'lymphatic', specialties: 'Oculoplastic/orbital surgery and ophthalmology, with interventional radiology and neuro-ophthalmology as needed.', direct: [] },
    'cm-avm': { group: 'capillary', specialties: 'Vascular anomalies specialist and medical genetics; add neurovascular or interventional specialists if an AVM is identified.', direct: ['mayo'] },
    'port-wine': { group: 'capillary', specialties: 'Vascular dermatologist or laser specialist experienced in vascular birthmarks; assess for a syndrome when indicated.', direct: ['mayo'] },
    'salmon-patch': { group: 'capillary', specialties: 'Usually a pediatrician or dermatologist; seek specialist assessment if the diagnosis is uncertain or features are atypical.', direct: [], ids: [], none: 'No center listed here is specifically identified for salmon patches. A local pediatrician or dermatologist is a good starting point.' },
    'sws': { group: 'capillary', specialties: 'Sturge-Weber team, neurology/epileptology, ophthalmology for glaucoma, and vascular dermatology.', direct: ['mayo', 'kki'] },
    'brain-avm': { group: 'avm', specialties: 'Cerebrovascular neurosurgery, neurointerventional radiology, and vascular neurology; seek a multidisciplinary review.', direct: [], ids: ['mayo', 'ucla', 'hopkins'] },
    'skin-avm': { group: 'avm', specialties: 'High-flow vascular-anomalies team, interventional radiology, and vascular surgery.', direct: ['laribi'], ids: ['mayo', 'chop', 'chla'] },
    'limb-avm': { group: 'avm', specialties: 'High-flow vascular-anomalies team, interventional radiology, and vascular surgery; orthopedics may help with function.', direct: [], ids: ['mayo', 'ucla', 'hopkins', 'chop'] },
    'asymptomatic-brain-avm': { group: 'avm', specialties: 'Cerebrovascular neurosurgery, neurointerventional radiology, and vascular neurology for individualized risk review.', direct: [], ids: ['mayo', 'ucla', 'hopkins'] },
    'pulmonary-avm': { group: 'avm', specialties: 'Pulmonology/pulmonary vascular medicine and interventional radiology experienced in pulmonary AVM embolization.', direct: [], ids: [], none: 'No center listed here is specifically identified for pulmonary AVMs. Ask a pulmonary vascular or hereditary hemorrhagic telangiectasia (HHT) program for a referral.' },
    'spinal-avm': { group: 'avm', specialties: 'Spinal vascular neurosurgery and neurointerventional radiology experienced with spinal angiography.', direct: [], ids: [], none: 'No center listed here is specifically identified for spinal AVMs. Ask a spinal cerebrovascular team whether it evaluates this exact AVM type.' },
    'kts': { group: 'combined', specialties: 'Multidisciplinary vascular-anomalies team, vascular medicine/surgery, interventional radiology, and hematology; orthopedics or rehabilitation as needed.', direct: ['mayo'] }
};

function showConditionSpecialistMatches() {
    const select = document.getElementById('specialistCondition');
    const output = document.getElementById('specialistMatchResults');
    if (!select || !output) return;

    const match = conditionSpecialistMatches[select.value];
    if (!match) {
        output.innerHTML = '<p class="case-note">Choose a condition to view matching specialty guidance and center leads.</p>';
        return;
    }

    const ids = match.ids || specialistGroupMatches[match.group];
    const centerCards = ids.map((id) => {
        const center = specialistCenterProfiles[id];
        const directMatch = match.direct.includes(id);
        return `<article class="specialist-match-card"><h3><a href="${center.url}" target="_blank" rel="noopener">${center.name}</a></h3><p class="match-location">${center.location}</p><p><strong>${directMatch ? 'Potential match for this condition; confirm with the center.' : 'Broader program; confirm this condition.'}</strong> ${center.note}</p></article>`;
    }).join('');
    const noMatch = match.none ? `<p class="case-note">${match.none}</p>` : '';

    output.innerHTML = `<h3>Specialties to look for</h3><p>${match.specialties}</p>${noMatch}<h3>Possible care centers</h3>${centerCards}<p class="match-disclaimer">These are starting points, not verified matches to an individual doctor. Confirm the exact malformation, body location, age group, current clinician, and referral route with the center before sharing records.</p>`;
}
