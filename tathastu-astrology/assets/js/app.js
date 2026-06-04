/* ==========================================================================
   TATHASTU ASTROLOGY - CORE PLATFORM APPLICATIONS ENGINE
   ========================================================================== */

'use strict';

/**
 * 1. PERSISTENT SYSTEM CENTRAL STATIC DATABASE STORAGE LAYERS
 * Emulates data models for global availability across independent page lifecycles.
 */
const SYSTEM_ASTROLOGER_COLLECTION = [
    { id: "ast-01", name: "Dr. Aditya Sharma", experience: 18, expertise: "vedic", rating: 4.9, language: "English, Hindi", fee: 120, img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80" },
    { id: "ast-02", name: "Meera Ananda", experience: 12, expertise: "synastry", rating: 4.8, language: "English", fee: 95, img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80" },
    { id: "ast-03", name: "Vanguard Marcus", experience: 22, expertise: "financial", rating: 5.0, language: "English, German", fee: 350, img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80" },
    { id: "ast-04", name: "Siddharth Gautam", experience: 15, expertise: "vedic", rating: 4.7, language: "Hindi", fee: 80, img: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80" }
];

const SYSTEM_ZODIAC_MATRIX = [
    { name: "Aries", range: "Mar 21 - Apr 19", profile: "High-level energetic friction detected across your solar axis line. Marshal your operational drives toward precision systems engineering and structure deployment." },
    { name: "Taurus", range: "Apr 20 - May 20", profile: "Venus configurations settling along native core sectors suggest a prime window for balancing asset allocations and securing real-estate contracts." },
    { name: "Gemini", range: "May 21 - Jun 20", profile: "Mercury calculations reveal heavy planetary messaging activity. Isolate critical communications channels to mitigate transit anomalies." },
    { name: "Cancer", range: "Jun 21 - Jul 22", profile: "Lunar tides reaching absolute peak alignment inside your native coordinate sectors emphasize protective defensive security systems." },
    { name: "Leo", range: "Jul 23 - Aug 22", profile: "Solar radiation vectors maximum efficiency outputs. Command structures are highly responsive; maintain execution velocities across active paths." },
    { name: "Virgo", range: "Aug 23 - Sep 22", profile: "Mercury tracking metrics indicate high processing capabilities across mathematical microtasks. Excellent timeline window for systems optimization." },
    { name: "Libra", range: "Sep 23 - Oct 22", profile: "High equilibrium vectors indicate stabilization across strategic relationship charts. Good phase for executing joint ventures." },
    { name: "Scorpio", range: "Oct 23 - Nov 21", profile: "Plutonian deep trends indicate major structural transformations. Eliminate legacy technical debt and outdated operating patterns." },
    { name: "Sagittarius", range: "Nov 22 - Dec 21", profile: "Jupiter expansion maps line up with your primary career axis. Deploy strategic capital investments toward long-range milestones." },
    { name: "Capricorn", range: "Dec 22 - Jan 19", profile: "Saturn direct alignment mandates systematic process accountability. Zero tolerance for path cutting across active frameworks." },
    { name: "Aquarius", range: "Jan 20 - Feb 18", profile: "Disruptive innovation trends cross-referencing your network sectors suggest significant opportunities to deploy transformative engineering models." },
    { name: "Pisces", range: "Feb 19 - Mar 20", profile: "Neptune alignment fields emphasize high intuitive pattern parsing. Balance abstract modeling processes with rigorous analytical checks." }
];

const SYSTEM_BLOG_REPOSITORY = [
    { id: 1, title: "Saturn Transits of 2026: Macro System Re-alignments", category: "Transits", snippet: "An objective analytical breakdown of structural compression vectors across modern financial frameworks during the Saturn shift cycle.", author: "Vanguard Marcus" },
    { id: 2, title: "Calculating Vimshottari Dashas with Modern Ephemerides", category: "Calculus", snippet: "How precision tracking formulas refine the traditional time windows for planet-driven outcomes down to the exact second.", author: "Dr. Aditya Sharma" }
];

// Structural Client/Expert Memory Arrays for Dynamic CRUD Emulation inside Admin Command Core
let RUNTIME_USER_CACHE = [
    { id: "usr-99", email: "client.one@domain.com", tier: "Elite Premium" },
    { id: "usr-88", email: "corporate.strategy@hub.io", tier: "Corporate Retainer" }
];
let RUNTIME_ASTROLOGER_CACHE = [...SYSTEM_ASTROLOGER_COLLECTION];

/**
 * 2. HOROSCOPE PARSING ENGINE ENGINE
 */
window.initializeHoroscopeEngine = function() {
    const selectorBox = document.getElementById('zodiacSelectorContainer');
    const titleBox = document.getElementById('horoscopeTargetTitle');
    const contentBox = document.getElementById('horoscopeTargetContent');
    
    if(!selectorBox) return;
    selectorBox.innerHTML = '';

    SYSTEM_ZODIAC_MATRIX.forEach((sign) => {
        const div = document.createElement('div');
        div.className = 'glass-panel zodiac-tab-card';
        div.innerHTML = `
            <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v12M6 12h12"/></svg>
            <span>${sign.name}</span>
            <small>${sign.range}</small>
        `;
        div.addEventListener('click', () => {
            document.querySelectorAll('.zodiac-tab-card').forEach(c => c.classList.remove('active'));
            div.classList.add('active');
            titleBox.innerText = `${sign.name} Coordinate Analysis Stream`;
            contentBox.innerText = sign.profile;
        });
        selectorBox.appendChild(div);
    });
    // Prime active node index zero
    if(selectorBox.firstChild) selectorBox.firstChild.click();
};

/**
 * 3. KUNDLI INTERACTIVE COMPUTATION SYSTEMS FRAMEWORK
 */
window.processKundliEngine = function(event) {
    event.preventDefault();
    const name = document.getElementById('kName').value;
    const date = document.getElementById('kDate').value;
    const time = document.getElementById('kTime').value;
    const place = document.getElementById('kPlace').value;

    const outputContainer = document.getElementById('kundliOutputMatrixArea');
    const metaBox = document.getElementById('kundliMetaDetailsBlock');
    const tableBody = document.getElementById('kundliPlanetaryTableBody');

    if(!outputContainer) return;

    metaBox.innerHTML = `
        <div><strong>Target Client Node Identifier:</strong> ${name}</div>
        <div><strong>Geographic Coordinates Vector:</strong> ${place}</div>
        <div><strong>Temporal Coordinates Value:</strong> ${date} | ${time}</div>
        <div><strong>Calculation Protocol Status:</strong> VEDIC CORE-V4 SUCCESS</div>
    `;

    const mockCalculations = [
        { body: "Ascendant (Lagna)", long: "14° 22' 45\"", sign: "Leo", nak: "Purva Phalguni", pada: 1 },
        { body: "Sol (Sun)", long: "22° 11' 02\"", sign: "Taurus", nak: "Rohini", pada: 4 },
        { body: "Luna (Moon)", long: "03° 45' 19\"", sign: "Scorpio", nak: "Anuradha", pada: 2 },
        { body: "Mercury", long: "18° 59' 51\"", sign: "Gemini", nak: "Ardra", pada: 1 },
        { body: "Jupiter", long: "29° 14' 08\"", sign: "Aries", nak: "Krittika", pada: 1 },
        { body: "Saturn (Retrograde)", long: "11° 04' 33\"", sign: "Aquarius", nak: "Shatabhisha", pada: 3 }
    ];

    tableBody.innerHTML = '';
    mockCalculations.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><strong>${row.body}</strong></td>
            <td>${row.long}</td>
            <td>${row.sign}</td>
            <td>${row.nak}</td>
            <td>${row.pada}</td>
        `;
        tableBody.appendChild(tr);
    });

    outputContainer.style.display = 'block';
    outputContainer.scrollIntoView({ behavior: 'smooth' });
};

/**
 * 4. ASTROLOGERS FILTERS INTERACTION ARCHITECTURE
 */
window.initializeAstrologerDirectory = function() {
    const grid = document.getElementById('astrologerGridContainer');
    const search = document.getElementById('dirSearch');
    const expertSelect = document.getElementById('dirExpertise');
    const sortSelect = document.getElementById('dirSort');

    if(!grid) return;

    function renderViewGrid(dataset) {
        grid.innerHTML = '';
        if(dataset.length === 0) {
            grid.innerHTML = `<div style="grid-column: 1/-1; text-align:center; padding:40px; color:var(--text-muted);">Zero active advisory assets line up with your filter parameters.</div>`;
            return;
        }
        dataset.forEach(ast => {
            const card = document.createElement('div');
            card.className = 'glass-panel astrologer-card';
            card.innerHTML = `
                <div class="astrologer-img-wrapper">
                    <img src="${ast.img}" alt="${ast.name}">
                </div>
                <div class="astrologer-details">
                    <div class="astrologer-meta">
                        <span>Exp: ${ast.experience} Solar Cycles</span>
                        <span class="astrologer-rating">★ ${ast.rating}</span>
                    </div>
                    <h3 style="font-size:1.2rem; margin-bottom:10px;">${ast.name}</h3>
                    <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:15px; text-transform:uppercase; letter-spacing:0.5px;">Focus: ${ast.expertise} Systems</p>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-top:20px;">
                        <span style="color:var(--accent-gold); font-weight:700;">$${ast.fee}/hr</span>
                        <button class="btn-gold" style="padding:8px 16px; font-size:0.8rem;" onclick="window.triggerBookingModal('${ast.name}')">Book Segment</button>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
    }

    function processPipeFilter() {
        let output = [...SYSTEM_ASTROLOGER_COLLECTION];
        const searchVal = search.value.toLowerCase();
        const expertVal = expertSelect.value;
        const sortVal = sortSelect.value;

        if(searchVal) {
            output = output.filter(a => a.name.toLowerCase().includes(searchVal) || a.expertise.toLowerCase().includes(searchVal));
        }
        if(expertVal !== 'all') {
            output = output.filter(a => a.expertise === expertVal);
        }
        if(sortVal === 'exp') {
            output.sort((a,b) => b.experience - a.experience);
        } else if(sortVal === 'fee') {
            output.sort((a,b) => a.fee - b.fee);
        }
        renderViewGrid(output);
    }

    search.addEventListener('input', processPipeFilter);
    expertSelect.addEventListener('change', processPipeFilter);
    sortSelect.addEventListener('change', processPipeFilter);

    renderViewGrid(SYSTEM_ASTROLOGER_COLLECTION);
};

window.triggerBookingModal = function(name) {
    const modal = document.getElementById('bookingModal');
    const text = document.getElementById('bookingTargetName');
    if(modal && text) {
        text.innerText = `Booking direct line clearance with: ${name}`;
        modal.style.display = 'flex';
    }
};

/**
 * 5. RESEARCH BLOG DATA INTERFACES
 */
window.initializeBlogEngine = function() {
    const postContainer = document.getElementById('blogPostsOutputContainer');
    const categoryContainer = document.getElementById('blogCategoryListContainer');
    const searchInput = document.getElementById('blogSearchInput');

    if(!postContainer) return;

    function renderBlogCards(data) {
        postContainer.innerHTML = '';
        data.forEach(p => {
            const item = document.createElement('article');
            item.className = 'glass-panel blog-card-item';
            item.innerHTML = `
                <span class="category-pill">${p.category}</span>
                <h3 style="margin-bottom:10px; font-size:1.5rem;">${p.title}</h3>
                <p style="color:var(--text-muted); margin-bottom:20px;">${p.snippet}</p>
                <div style="display:flex; justify-content:space-between; font-size:0.8rem; color:var(--text-muted);">
                    <span>Investigator: ${p.author}</span>
                    <span style="color:var(--accent-gold); cursor:pointer;" onclick="alert('Accessing full verified analytical whitepaper text payload...')">Access Full Data Matrix →</span>
                </div>
            `;
            postContainer.appendChild(item);
        });
    }

    // Populate category facets tracking numbers
    const categories = ['All Frameworks', 'Transits', 'Calculus', 'Financial Geometry'];
    categoryContainer.innerHTML = '';
    categories.forEach(cat => {
        const li = document.createElement('li');
        li.style.cursor = 'pointer';
        li.innerText = `✦ ${cat}`;
        li.addEventListener('click', () => {
            if(cat === 'All Frameworks') {
                renderBlogCards(SYSTEM_BLOG_REPOSITORY);
            } else {
                renderBlogCards(SYSTEM_BLOG_REPOSITORY.filter(p => p.category === cat));
            }
        });
        categoryContainer.appendChild(li);
    });

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const filtered = SYSTEM_BLOG_REPOSITORY.filter(p => p.title.toLowerCase().includes(query) || p.snippet.toLowerCase().includes(query));
        renderBlogCards(filtered);
    });

    renderBlogCards(SYSTEM_BLOG_REPOSITORY);
};

/**
 * 6. STATIC SECURED AUTHENTICATION STRUCTURAL PIPELINE
 */
window.executeStaticAuthentication = function(event) {
    event.preventDefault();
    const email = document.getElementById('authEmailInput').value.trim();
    const password = document.getElementById('authPasswordInput').value.trim();
    const errorMsg = document.getElementById('authErrorDisplay');

    if(email === 'user@123' && password === 'userdemo') {
        if(errorMsg) errorMsg.style.display = 'none';
        window.location.href = 'user-dashboard.html';
    } else if(email === 'admin@123' && password === 'admindemo') {
        if(errorMsg) errorMsg.style.display = 'none';
        window.location.href = 'admin-dashboard.html';
    } else {
        if(errorMsg) errorMsg.style.display = 'block';
    }
};

/**
 * 7. ADMIN EXECUTIVE SAS COMMAND CENTRAL WORKSPACE LAYOUT ACTIONS
 */
window.initializeAdminWorkspaceCore = function() {
    window.renderAdminUserTable();
    window.renderAdminAstrologerTable();
};

window.switchAdminTab = function(targetSection) {
    const sections = ['Overview', 'Users', 'Astrologers'];
    sections.forEach(sec => {
        const panel = document.getElementById(`adminPanelSection${sec}`);
        const menuBtn = document.getElementById(`adminMenu${sec}`);
        if(panel) panel.style.display = (sec.toLowerCase() === targetSection) ? 'block' : 'none';
        if(menuBtn) {
            if(sec.toLowerCase() === targetSection) menuBtn.classList.add('active');
            else menuBtn.classList.remove('active');
        }
    });
};

window.renderAdminUserTable = function() {
    const tbody = document.getElementById('adminUsersControlTableBody');
    const userCounter = document.getElementById('countUsers');
    if(!tbody) return;
    
    tbody.innerHTML = '';
    if(userCounter) userCounter.innerText = 1240 + RUNTIME_USER_CACHE.length;

    RUNTIME_USER_CACHE.forEach(u => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><code>${u.id}</code></td>
            <td>${u.email}</td>
            <td>${u.tier}</td>
            <td>
                <button class="btn-outline" style="padding:4px 8px; font-size:0.75rem;" onclick="window.editUserVector
