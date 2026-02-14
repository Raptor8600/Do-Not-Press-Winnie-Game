
// --- GAME CONFIGURATION ---

const STARTING_REVENUE_PER_CLICK = 1;

// 40 Tier Definitions
const ITEM_DEFINITIONS = [
    { name: "Claim Form", baseCost: 15, rps: 0.1 },
    { name: "Customer Service Call", baseCost: 100, rps: 1 },
    { name: "Prior Authorization", baseCost: 500, rps: 5 },
    { name: "In-Network Provider", baseCost: 1500, rps: 15 },
    { name: "Out-of-Network Surprise", baseCost: 5000, rps: 50 },
    { name: "Deductible Increase", baseCost: 15000, rps: 150 },
    { name: "Copay Adjustment", baseCost: 50000, rps: 500 },
    { name: "Claims Review Dept", baseCost: 150000, rps: 1500 },
    { name: "Medical Coding Specialist", baseCost: 500000, rps: 5000 },
    { name: "Policy Exclusion Clause", baseCost: 1500000, rps: 15000 }, // Chaos Lvl 1
    { name: "Appeals Department", baseCost: 5000000, rps: 50000 },
    { name: "Risk Assessment Team", baseCost: 15000000, rps: 150000 },
    { name: "Actuarial Analysis Unit", baseCost: 50000000, rps: 500000 },
    { name: "Premium Rate Adjustment", baseCost: 150000000, rps: 1500000 },
    { name: "Provider Contract Renegotiation", baseCost: 500000000, rps: 5000000 }, // Chaos Lvl 2
    { name: "Billing Dispute Resolution", baseCost: 1500000000, rps: 15000000 },
    { name: "Multi-State Expansion", baseCost: 5000000000, rps: 50000000 },
    { name: "Compliance Department", baseCost: 15000000000, rps: 150000000 },
    { name: "Federal Oversight Negotiation", baseCost: 50000000000, rps: 500000000 },
    { name: "Winnie's National Empire", baseCost: 150000000000, rps: 1500000000 }, // Chaos Lvl 3

    // --- TIER 3 EXPANSION: GALACTIC INSURANCE ---
    { name: "Global Health Conglomerate", baseCost: 500000000000, rps: 5000000000 },
    { name: "Orbital Wellness Station", baseCost: 2000000000000, rps: 20000000000 },
    { name: "Lunar Deductible Base", baseCost: 10000000000000, rps: 100000000000 },
    { name: "Mars Colony Coverage", baseCost: 50000000000000, rps: 500000000000 },
    { name: "Asteroid Risk Mining", baseCost: 250000000000000, rps: 2500000000000 },
    { name: "Interplanetary Policy", baseCost: 1000000000000000, rps: 10000000000000 }, // Quadrillion
    { name: "Sun Dyson Sphere", baseCost: 5000000000000000, rps: 50000000000000 },
    { name: "Galactic Network Provider", baseCost: 25000000000000000, rps: 250000000000000 },
    { name: "Black Hole Coverage", baseCost: 100000000000000000, rps: 1000000000000000 },
    { name: "Time Travel Premium", baseCost: 500000000000000000, rps: 5000000000000000 },
    { name: "Multiverse Expansion", baseCost: 2500000000000000000, rps: 25000000000000000 }, // Quintillion
    { name: "Clone Copay Adjustment", baseCost: 10000000000000000000, rps: 100000000000000000 },
    { name: "Telepathic Claims Dept", baseCost: 50000000000000000000, rps: 500000000000000000 },
    { name: "Reality Warping Clause", baseCost: 250000000000000000000, rps: 2500000000000000000 },
    { name: "4th Dimension Actuary", baseCost: 1000000000000000000000, rps: 10000000000000000000 }, // Sextillion
    { name: "Quantum Entanglement Plan", baseCost: 5000000000000000000000, rps: 50000000000000000000 },
    { name: "Universal Healthcare Monopoly", baseCost: 25000000000000000000000, rps: 250000000000000000000 },
    { name: "Existence Tax", baseCost: 100000000000000000000000, rps: 1000000000000000000000 }, // Septillion
    { name: "The Big Bang Policy", baseCost: 5000000000000000000000000, rps: 50000000000000000000000 },
    { name: "Winnie, Devourer of Worlds", baseCost: 25000000000000000000000000, rps: 250000000000000000000000 },

    // --- CRIMINAL ENTERPRISE & FRAUD TIERS ---
    { name: "Double-Billing Scheme", baseCost: 100000000000000000000000000, rps: 1000000000000000000000000 }, // Octillion
    { name: "Phantom Provider Network", baseCost: 500000000000000000000000000, rps: 5000000000000000000000000 },
    { name: "Offshore Treat Haven", baseCost: 2500000000000000000000000000, rps: 25000000000000000000000000 },
    { name: "Squeaky Toy Money Laundering", baseCost: 10000000000000000000000000000, rps: 100000000000000000000000000 }, // Nonillion
    { name: "Catnip Cartel Partnership", baseCost: 50000000000000000000000000000, rps: 500000000000000000000000000 },
    { name: "The Treat Mafia", baseCost: 250000000000000000000000000000, rps: 2500000000000000000000000000 },
    { name: "Global Corruption Ring", baseCost: 1000000000000000000000000000000, rps: 10000000000000000000000000000 }, // Decillion
    { name: "Intergalactic Fugitive Status", baseCost: 5000000000000000000000000000000, rps: 50000000000000000000000000000 },
    { name: "Universal Crime Syndicate", baseCost: 25000000000000000000000000000000, rps: 250000000000000000000000000000 },
    { name: "Winnie, The Infinite Outlaw", baseCost: 100000000000000000000000000000000, rps: 1000000000000000000000000000000 },

    // --- POLITICAL WARFARE & SOVEREIGN TIERS ---
    { name: "Supreme Court Bribery Fund", baseCost: 5e33, rps: 5e31 },
    { name: "Sovereign Immunity Loophole", baseCost: 2.5e34, rps: 2.5e32 },
    { name: "Executive Order: Free Cheetos", baseCost: 1e35, rps: 1e33 },
    { name: "Gerrymandered Treat Districts", baseCost: 5e35, rps: 5e33 },
    { name: "Constitutional Rewriting Dept", baseCost: 2.5e36, rps: 2.5e34 },
    { name: "Lobbyist for the Void", baseCost: 1e37, rps: 1e35 },
    { name: "Super-PAC for Squeaky Toys", baseCost: 5e37, rps: 5e35 },
    { name: "Treat-Based Embassy", baseCost: 2.5e38, rps: 2.5e36 },
    { name: "Department of Counter-ICE Zoomies", baseCost: 1e39, rps: 1e37 },
    { name: "Anti-MAGA Tactical Unit", baseCost: 5e39, rps: 5e37 },

    // --- CONCEPTUAL & METAPHYSICAL TIERS ---
    { name: "Monopoly on the Concept of 'Good'", baseCost: 2.5e40, rps: 2.5e38 },
    { name: "Taxing the Astral Plane", baseCost: 1e41, rps: 1e39 },
    { name: "Insurance for Reincarnation Errors", baseCost: 5e41, rps: 5e39 },
    { name: "Eternity Policy (Non-Refundable)", baseCost: 2.5e42, rps: 2.5e40 },
    { name: "Privatized Afterlife Gatekeeper", baseCost: 1e43, rps: 1e41 },
    { name: "Soul-Deductible Management", baseCost: 5e43, rps: 5e41 },
    { name: "Karmic Debt Collector", baseCost: 2.5e44, rps: 2.5e42 },
    { name: "Multiversal Default Insurance", baseCost: 1e45, rps: 1e43 },
    { name: "Copyrighting the Vacuum of Space", baseCost: 5e45, rps: 5e43 },
    { name: "Winnie's Existential Cartel", baseCost: 2.5e46, rps: 2.5e44 },

    // --- ABSOLUTE DOMINANCE TIERS ---
    { name: "Infinite Revenue Loop", baseCost: 1e47, rps: 1e45 },
    { name: "The Singularity Policy", baseCost: 5e47, rps: 5e45 },
    { name: "Sentient Currency", baseCost: 2.5e48, rps: 2.5e46 },
    { name: "Post-Reality Sales Team", baseCost: 1e49, rps: 1e47 },
    { name: "Dimensional Surcharge", baseCost: 5e49, rps: 5e47 },
    { name: "The End-of-Time Premium", baseCost: 2.5e50, rps: 2.5e48 },
    { name: "Winnie: The Final Constant", baseCost: 1e51, rps: 1e49 },
    { name: "Universal Undo Button", baseCost: 5e51, rps: 5e49 },
    { name: "Policy for the Heat Death of Content", baseCost: 2.5e52, rps: 2.5e50 },
    { name: "Winnie, The Alpha and Omega", baseCost: 1e53, rps: 1e51 },

    // --- HYPER-FRAUD & ULTIMATE SCANDAL ---
    { name: "Laundering Reality Itself", baseCost: 5e53, rps: 5e51 },
    { name: "Phantom Existence Network", baseCost: 2.5e54, rps: 2.5e52 },
    { name: "Insurance for Stolen Timelines", baseCost: 1e55, rps: 1e53 },
    { name: "The Grand Cosmic Grift", baseCost: 5e55, rps: 5e53 },
    { name: "Ponzi Scheme for Entropy", baseCost: 2.5e56, rps: 2.5e54 },
    { name: "Sovereign Citizen of the Universe", baseCost: 1e57, rps: 1e55 },
    { name: "Unlicensed Creation Permits", baseCost: 5e57, rps: 5e55 },
    { name: "The Void-Based Tax Haven", baseCost: 2.5e58, rps: 2.5e56 },
    { name: "Counterfeit Divinity", baseCost: 1e59, rps: 1e57 },
    { name: "Winnie's Absolute Tyranny", baseCost: 5e59, rps: 5e57 },

    // --- THE FINAL FRONTIER ---
    { name: "Beyond the Infinite Policy", baseCost: 1e60, rps: 1e58 },
    { name: "Meta-Insurance Agency", baseCost: 1e65, rps: 1e63 },
    { name: "Recursive Revenue Generation", baseCost: 1e70, rps: 1e68 },
    { name: "The Simulation's Landlord", baseCost: 1e75, rps: 1e73 },
    { name: "Owner of the Source Code", baseCost: 1e80, rps: 1e78 },
    { name: "The Developer's Nightmare", baseCost: 1e85, rps: 1e83 },
    { name: "Game Engine Monopoly", baseCost: 1e90, rps: 1e88 },
    { name: "Infinite Cookie Conglomerate", baseCost: 1e95, rps: 1e93 },
    { name: "Winnie: The True Player", baseCost: 1e100, rps: 1e98 },
    { name: "Uninstallation Insurance", baseCost: 1e105, rps: 1e103 }
];

const CLICK_UPGRADES = [
    { id: 'click_1', name: "Cheeto Dust Fingers", cost: 500, multiplier: 2 },
    { id: 'click_2', name: "Iron Paws", cost: 5000, multiplier: 2 },
    { id: 'click_3', name: "Diamond Claws", cost: 50000, multiplier: 3 },
    { id: 'click_4', name: "Quantum Taps", cost: 1000000, multiplier: 5 },
    { id: 'click_5', name: "Reality Breaking Boop", cost: 50000000, multiplier: 10 }
];

const SPICE_TOLERANCE_UPGRADES = [
    { id: 'spice_1', name: "Milk Chug", cost: 2000, tolerance: 50 },
    { id: 'spice_2', name: "Tongue Coating", cost: 10000, tolerance: 100 },
    { id: 'spice_3', name: "Steel Stomach", cost: 100000, tolerance: 250 },
    { id: 'spice_4', name: "Lava Glands", cost: 5000000, tolerance: 500 }
];

const CRIME_UPGRADES = [
    { id: 'crime_1', name: "Bribery for Beginners", cost: 1000000, riskReduction: 0.05 },
    { id: 'crime_2', name: "Money Laundromat", cost: 100000000, riskReduction: 0.1 },
    { id: 'crime_3', name: "Swiss Treat Accounts", cost: 5000000000, riskReduction: 0.15 },
    { id: 'crime_4', name: "Diplomatic Immunity", cost: 1000000000000, riskReduction: 0.2 }
];

// --- STATE MANAGEMENT ---

const state = {
    revenue: 0,
    totalRevenue: 0,
    revenuePerClick: 1,
    revenuePerSecond: 0,
    risk: 0,
    spice: 0,
    complianceCredits: 0,
    items: new Array(120).fill(0),
    upgrades: {}, // Map of key -> boolean
    chaosLevel: 0,
    startTime: Date.now(),
    isPaused: false,
    meltdowns: 0,
    auditsSurvived: 0,
    auditActive: false,
    manualClicks: 0 // New tracker
};

import { NEWS_CATEGORIES, NEWS_GENERATORS } from './newsData.js';

// --- UTILS ---
function useComplianceCredit() {
    if (state.complianceCredits > 0) {
        state.complianceCredits--;
        state.risk = Math.max(0, state.risk - 30);
        state.spice = Math.max(0, state.spice - 30);
        createFloatingText("-30 RISK / -30 SPICE", window.innerWidth / 2, window.innerHeight / 2);
        updateUI();
    }
}

// Attach to globalThis/window so index.html onclick can find it
globalThis.useComplianceCredit = useComplianceCredit;
globalThis.resetGame = () => {
    if (confirm("Are you sure you want to wipe your save and restart?")) {
        localStorage.removeItem('winnieEmpireSave');
        location.reload();
    }
};

// --- DOM ELEMENTS ---
let el = {};

// --- NEWS TICKER ---
let tickerIndex = 0;

function updateNewsTicker() {
    if (!el.tickerContent) return;
    if (el.tickerContent.children.length > 0) return;

    // --- NEWS SELECTION LOGIC ---
    // Goal: Emphasis on Daisy, Moppet, and Winnie at all times.

    let characterNews = [...NEWS_CATEGORIES.BASE]; // Base contains heavy Winnie/Daisy/Moppet content
    let systemNews = [];

    // Expand pools based on progress
    if (state.totalRevenue > 1000) systemNews.push(...NEWS_CATEGORIES.INSURANCE_SATIRE);
    if (state.chaosLevel >= 1) systemNews.push(...NEWS_CATEGORIES.CHAOS);
    if (state.items[19] > 0 || state.auditsSurvived > 0) characterNews.push(...NEWS_CATEGORIES.SCANDAL);
    if (state.items[61] > 0) characterNews.push(...NEWS_CATEGORIES.LEGAL_DEFENSE);

    // Procedural character news
    characterNews.push(...NEWS_GENERATORS.SIBLINGS().slice(0, 100));

    // Procedural system/crime news
    if (state.auditsSurvived > 0) systemNews.push(...NEWS_GENERATORS.CRIMES().slice(0, 50));

    // Tier-based news (the "bogging down" part) - we limit its presence
    if (state.totalRevenue > 1e6) {
        systemNews.push(...NEWS_CATEGORIES.EXPANSION.slice(0, 100)); // Still only 100 of them
    }

    let message = "";
    // 80% chance for Character Emphasis, 20% for System/Insurance Satire
    if (Math.random() < 0.8 || systemNews.length === 0) {
        message = characterNews[Math.floor(Math.random() * characterNews.length)];
    } else {
        message = systemNews[Math.floor(Math.random() * systemNews.length)];
    }

    // Extremely rare special overrides
    if (Math.random() < 0.05) {
        if (state.meltdowns > 10) message = "SPECIAL: Winnie has been legally classified as a biological hazard. 🧪";
        if (state.items[49] > 0) message = "FINAL: Reality is just a snack that Winnie hasn't finished yet. 🌌";
    }

    const span = document.createElement('span');
    span.className = 'ticker-item';
    span.innerText = `🐕 ${message}`;

    let nextScheduled = false;
    const scheduleNext = () => {
        if (nextScheduled) return;
        nextScheduled = true;
        span.remove();
        setTimeout(updateNewsTicker, 500);
    };

    // Clean up after animation
    span.addEventListener('animationend', scheduleNext);

    // Backup timer (15s animation + 5s buffer)
    setTimeout(scheduleNext, 20000);

    el.tickerContent.appendChild(span);
}



// --- CORE LOGIC ---

function calculateMaxSpice() {
    let max = 100;
    SPICE_TOLERANCE_UPGRADES.forEach(upg => {
        if (state.upgrades[upg.id]) max += upg.tolerance;
    });
    return max;
}

function calculateRPS() {
    let rps = 0;
    ITEM_DEFINITIONS.forEach((def, index) => {
        const count = state.items[index];
        if (count > 0) {
            let multiplier = 1;
            if (state.upgrades[`${index}_A`]) multiplier *= 2;
            if (state.upgrades[`${index}_B`]) multiplier *= 2;
            if (state.upgrades[`${index}_C`]) multiplier *= 3;
            if (state.upgrades['global_spicy']) multiplier *= 1.25;

            rps += (def.rps * count * multiplier);
        }
    });
    state.revenuePerSecond = rps;
}

function calculateClickValue() {
    let clickVal = STARTING_REVENUE_PER_CLICK;

    // Apply explicit click upgrades
    CLICK_UPGRADES.forEach(upg => {
        if (state.upgrades[upg.id]) clickVal *= upg.multiplier;
    });

    // Milestone check
    if (state.upgrades['global_click_1']) clickVal += 1;

    state.revenuePerClick = clickVal;
}

function updateChaos() {
    // Chaos Levels
    if (state.items[9] > 0 || (state.items[8] >= 10 && state.totalRevenue >= 2 * ITEM_DEFINITIONS[9].baseCost)) {
        if (state.chaosLevel < 1) state.chaosLevel = 1;
    }
    if (state.items[14] > 0 || (state.items[13] >= 10 && state.totalRevenue >= 2 * ITEM_DEFINITIONS[14].baseCost)) {
        if (state.chaosLevel < 2) state.chaosLevel = 2;
    }
    if (state.items[19] > 0) {
        state.chaosLevel = 3;
    }

    document.body.className = `chaos-level-${state.chaosLevel}`;

    if (state.chaosLevel >= 3) {
        document.body.classList.add('antigravity-active');
        el.chaosDisplay.innerText = "REGULATORY CHAOS ACTIVE";
        el.chaosDisplay.style.color = "var(--chaos-purple)";
        el.chaosContainer.style.display = "block";
    } else if (state.chaosLevel >= 2) {
        el.chaosDisplay.innerText = "High Uncertainty";
        el.chaosContainer.style.display = "block";
    } else if (state.chaosLevel >= 1) {
        el.chaosDisplay.innerText = "Noticeable Drift";
        el.chaosContainer.style.display = "block";
    }
}

function triggerEvent(type) {
    state.isPaused = type === 'MELTDOWN'; // Only pause on Meltdown
    el.overlay.classList.remove('hidden');

    if (type === 'MELTDOWN') {
        el.overlayTitle.innerText = "SPICE MELTDOWN!";
        el.overlayDesc.innerText = "Production paused for 5s!";
        state.meltdowns++;

        setTimeout(() => {
            state.isPaused = false;
            el.overlay.classList.add('hidden');
            state.spice = 25;
            state.risk += 10;
        }, 5000);

    } else if (type === 'AUDIT') {
        el.overlayTitle.innerText = "FEDERAL AUDIT!";
        el.overlayDesc.innerText = "Revenue halved for 10s!";
        state.auditsSurvived++;
        state.auditActive = true;

        setTimeout(() => {
            el.overlay.classList.add('hidden');
        }, 2000); // Hide overlay quickly but keep penalty

        setTimeout(() => {
            state.auditActive = false;
            state.risk = 40;
            state.spice = Math.max(0, state.spice - 20);
        }, 10000);
    }
}

// --- INTERACTION ---

// Wait for DOM to be ready before attaching listeners
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, attaching event listeners...');

    // Attach listener to container to ensure hits
    const cheetoContainer = document.getElementById('cheeto-container');
    console.log('Cheeto container:', cheetoContainer);

    if (cheetoContainer) {
        cheetoContainer.addEventListener('mousedown', (e) => {
            console.log('Cheeto clicked!');
            e.preventDefault(); // Prevent drag/select
            if (state.isPaused) return;

            calculateClickValue();
            state.revenue += state.revenuePerClick;
            state.totalRevenue += state.revenuePerClick;
            state.spice += 1;
            state.manualClicks++;

            // Award Compliance Credit every 500 clicks
            if (state.manualClicks % 500 === 0) {
                state.complianceCredits++;
                createFloatingText("+1 COMPLIANCE CREDIT! 📄", e.clientX, e.clientY);
            }

            const maxSpice = calculateMaxSpice();

            // Risk reduction
            let riskGen = 0.5;
            if (state.upgrades['global_risk']) riskGen -= 0.1;

            CRIME_UPGRADES.forEach(upg => {
                if (state.upgrades[upg.id]) riskGen -= upg.riskReduction;
            });

            state.risk += Math.max(0.1, riskGen); // Minimum 0.1 risk per click

            // Visuals
            // Apply squish to the inner image
            el.cheeto.classList.remove('cheeto-squish');
            el.cheeto.offsetWidth; // Trigger reflow
            el.cheeto.classList.add('cheeto-squish');

            // Make particles spawn properly
            createParticle(e.clientX, e.clientY);
            createFloatingText(`+$${state.revenuePerClick.toFixed(1)}`, e.clientX, e.clientY);

            if (state.spice >= maxSpice) triggerEvent('MELTDOWN');
            if (state.risk >= 100) triggerEvent('AUDIT');

            updateUI();
        });

        // Remove class on mouseup/leave
        const resetSquish = () => el.cheeto.classList.remove('cheeto-squish');
        cheetoContainer.addEventListener('mouseup', resetSquish);
        cheetoContainer.addEventListener('mouseleave', resetSquish);
    } else {
        console.error('Cheeto container not found!');
    }

    // Flip Card Interaction
    const flipCardInner = document.getElementById('flip-card-inner');
    if (flipCardInner) {
        flipCardInner.addEventListener('click', () => {
            console.log('Flip card clicked!');
            flipCardInner.classList.toggle('flipped');
        });
    } else {
        console.error('Flip card not found!');
    }
});

// Whimsical text variations
const FLAVOR_EMOJIS = ['💰', '💸', '🧀', '🦴', '🧡', '📈', '✨', '🔥'];

function createFloatingText(text, x, y) {
    const f = document.createElement('div');
    f.classList.add('floating-text');

    // 30% chance to add a random emoji
    if (Math.random() < 0.3) {
        const emoji = FLAVOR_EMOJIS[Math.floor(Math.random() * FLAVOR_EMOJIS.length)];
        text = `${text} ${emoji}`;
    }

    f.innerText = text;

    // Random variances for "whimsical" feel
    const randRot = Math.floor(Math.random() * 40) - 20; // -20deg to 20deg
    const randDrift = Math.floor(Math.random() * 100) - 50; // -50px to 50px X drift

    // Set custom properties for CSS animation
    f.style.setProperty('--rot', `${randRot}deg`);
    f.style.setProperty('--drift', `${randDrift}px`);

    f.style.left = `${x}px`;
    f.style.top = `${y}px`;

    // Append to body to ensure correct positioning relative to viewport/mouse
    document.body.appendChild(f);

    // Slightly variable removal time
    setTimeout(() => f.remove(), 1200);
}

function createParticle(x, y) {
    const p = document.createElement('div');
    p.classList.add('crumb-particle');

    // Random variance for particles
    const tx = Math.floor(Math.random() * 200) - 100; // -100 to 100 drift
    p.style.setProperty('--tx', `${tx}px`);

    p.style.left = `${x}px`;
    p.style.top = `${y}px`;

    // Append to body
    document.body.appendChild(p);

    setTimeout(() => p.remove(), 1500);
}

function getCost(baseCost, count) {
    return baseCost * Math.pow(1.15, count);
}

function buyItem(index) {
    const def = ITEM_DEFINITIONS[index];
    const cost = getCost(def.baseCost, state.items[index]);

    if (state.revenue >= cost) {
        state.revenue -= cost;
        state.items[index]++;
        updateUI();
        updateChaos();
    }
}

function buyMaxItem(index) {
    const def = ITEM_DEFINITIONS[index];
    let count = state.items[index];
    const r = 1.15;

    // Geometric series sum formula to find max N
    // Cost = Base * r^count * (r^n - 1) / (r - 1)
    // n = log_r( (Cost * (r-1) / (Base * r^count)) + 1 )

    const baseAtCurrent = def.baseCost * Math.pow(r, count);
    const n = Math.floor(Math.log((state.revenue * (r - 1) / baseAtCurrent) + 1) / Math.log(r));

    if (n > 0) {
        const totalCost = baseAtCurrent * (Math.pow(r, n) - 1) / (r - 1);
        state.revenue -= totalCost;
        state.items[index] += n;
        updateUI();
        updateChaos();
        createFloatingText(`+${n} ${def.name}`, window.innerWidth / 2, window.innerHeight / 2);
    }
}

function buyUpgrade(key, cost) {
    if (state.revenue >= cost && !state.upgrades[key]) {
        state.revenue -= cost;
        state.upgrades[key] = true;
        updateUI();
        calculateRPS();
        calculateClickValue();
    }
}

// --- RENDER ---

function updateUI() {
    el.revenue.innerText = `$${Math.floor(state.revenue).toLocaleString()}`;

    const currentRPS = state.auditActive ? state.revenuePerSecond * 0.5 : state.revenuePerSecond;
    el.rps.innerText = `per second: $${currentRPS.toFixed(1).toLocaleString()}`;
    el.complianceDisplay.innerText = state.complianceCredits;

    const maxSpice = calculateMaxSpice();
    const spicePercent = (state.spice / maxSpice) * 100;

    el.spiceVal.innerText = `${Math.floor(state.spice)} / ${maxSpice}`;
    el.spiceBar.style.width = `${Math.min(100, spicePercent)}%`;

    // Dynamic Bar Colors
    if (spicePercent > 85) el.spiceBar.style.background = "var(--chaos-purple)";
    else if (spicePercent > 60) el.spiceBar.style.background = "#ff4d4d";
    else if (spicePercent > 30) el.spiceBar.style.background = "#ff944d";
    else el.spiceBar.style.background = "#ff6b6b";

    el.riskVal.innerText = Math.floor(state.risk);
    el.riskBar.style.width = `${Math.min(100, state.risk)}%`;

    if (state.risk > 85) el.riskBar.style.background = "var(--chaos-purple)";
    else if (state.risk > 60) el.riskBar.style.background = "#ff4d4d";
    else el.riskBar.style.background = "#4da6ff";

    // Compliance Button State
    const complianceBtn = document.getElementById('compliance-btn');
    if (complianceBtn) {
        if (state.complianceCredits > 0) {
            complianceBtn.style.opacity = "1";
            complianceBtn.style.cursor = "pointer";
            complianceBtn.classList.remove('btn-disabled');
        } else {
            complianceBtn.style.opacity = "0.4";
            complianceBtn.style.cursor = "not-allowed";
            complianceBtn.classList.add('btn-disabled');
        }
    }

    renderStore();
    renderUpgrades();
}

function renderStore() {
    ITEM_DEFINITIONS.forEach((def, index) => {
        let visible = index === 0;
        if (index > 0) {
            const prevCount = state.items[index - 1];
            if (prevCount >= 10 && state.totalRevenue >= (2 * def.baseCost)) {
                visible = true;
            }
        }
        if (state.items[index] > 0) visible = true;

        let itemEl = document.getElementById(`store-item-${index}`);

        if (!visible) {
            if (itemEl) itemEl.style.display = 'none';
            return;
        }

        const count = state.items[index];
        const cost = getCost(def.baseCost, count);
        const canAfford = state.revenue >= cost;

        if (!itemEl) {
            itemEl = document.createElement('div');
            itemEl.id = `store-item-${index}`;
            itemEl.className = 'store-item';

            itemEl.innerHTML = `
                <div class="item-info" style="flex: 1; pointer-events: none;">
                    <span class="item-name"></span>
                    <span class="item-cost"></span>
                </div>
                <div class="item-controls" style="display: flex; gap: 5px; align-items: center;">
                    <span class="item-owned" style="margin-right: 10px;"></span>
                    <button class="buy-max-btn" style="padding: 2px 6px; font-size: 0.7rem; background: var(--winnie-pink); border: none; border-radius: 4px; color: white; cursor: pointer;">MAX</button>
                </div>
            `;

            itemEl.onclick = (e) => {
                if (e.target.classList.contains('buy-max-btn')) {
                    buyMaxItem(index);
                    return;
                }
                const currentCost = getCost(def.baseCost, state.items[index]);
                if (state.revenue >= currentCost) buyItem(index);
            };

            el.storeList.appendChild(itemEl);
        }

        itemEl.style.display = 'flex';
        if (canAfford) itemEl.classList.remove('disabled');
        else itemEl.classList.add('disabled');

        // Update individual parts instead of innerHTML
        itemEl.querySelector('.item-name').innerText = def.name;
        itemEl.querySelector('.item-cost').innerText = `$${Math.floor(cost).toLocaleString()}`;
        itemEl.querySelector('.item-owned').innerText = count;
    });
}

function renderUpgrades() {
    const renderBtn = (key, cost, tooltip) => {
        let btn = document.getElementById(`upgrade-${key}`);

        if (state.upgrades[key]) {
            if (btn) btn.style.display = 'none';
            return;
        }

        // Visibility rule: "Player has generated at least 50% of its cost"
        if (cost > 0 && state.totalRevenue < cost * 0.5) return;

        if (!btn) {
            btn = document.createElement('div');
            btn.id = `upgrade-${key}`;
            btn.className = `upgrade-icon`;
            btn.innerText = "UP";
            btn.onclick = () => {
                if (state.revenue >= cost) buyUpgrade(key, cost);
            };
            el.upgradesList.appendChild(btn);
        }

        btn.style.display = 'flex';
        btn.title = `${tooltip} (Cost: $${cost.toLocaleString()})`;

        if (state.revenue >= cost) {
            btn.style.borderColor = 'var(--revenue-green)';
            btn.style.opacity = '1';
            btn.style.cursor = 'pointer';
        } else {
            btn.style.borderColor = '#555';
            btn.style.opacity = '0.5';
            btn.style.cursor = 'not-allowed';
        }
    };

    // 1. Item Productivity Upgrades (5 Unique Tiers per item)
    ITEM_DEFINITIONS.forEach((def, index) => {
        const count = state.items[index];
        if (count >= 1) renderBtn(`${index}_A`, def.baseCost * 10, `x2 ${def.name} Mastery`);
        if (count >= 10) renderBtn(`${index}_B`, def.baseCost * 100, `x2 ${def.name} Efficiency`);
        if (count >= 25) renderBtn(`${index}_C`, def.baseCost * 1000, `x3 ${def.name} Optimization`);
        if (count >= 50) renderBtn(`${index}_D`, def.baseCost * 10000, `x5 ${def.name} Dominance`);
        if (count >= 100) renderBtn(`${index}_E`, def.baseCost * 100000, `x10 ${def.name} Ascendance`);
    });

    // 2. Click Power Upgrades
    CLICK_UPGRADES.forEach(upg => {
        renderBtn(upg.id, upg.cost, `${upg.name} (x${upg.multiplier} Click Value)`);
    });

    // 3. Spice Tolerance Upgrades
    SPICE_TOLERANCE_UPGRADES.forEach(upg => {
        renderBtn(upg.id, upg.cost, `${upg.name} (+${upg.tolerance} Spice Max)`);
    });

    // 4. Crime Upgrades (Risk Reduction)
    CRIME_UPGRADES.forEach(upg => {
        renderBtn(upg.id, upg.cost, `${upg.name} (-${(upg.riskReduction * 100).toFixed(0)}% Risk per click)`);
    });

    // 5. Global Upgrades (Milestones)
    if (state.totalRevenue >= 1000) renderBtn('global_click_1', 0, "Electronic Claim Processing (+1 Click Rev)");
    if (state.auditsSurvived >= 3) renderBtn('global_risk', 0, "Automated Risk Modeling (-20% Risk Gen)");
    if (state.meltdowns >= 10) renderBtn('global_spicy', 0, "Spicy Efficiency Training (+25% Global Prod)");
}

// --- GAME LOOP ---
function startGameLoop() {
    setInterval(() => {
        if (state.isPaused) return;

        calculateRPS();

        // 10 ticks/sec
        const tickRev = (state.auditActive ? state.revenuePerSecond * 0.5 : state.revenuePerSecond) / 10;

        state.revenue += tickRev;
        state.totalRevenue += tickRev;

        // Passive Decay Logic
        // Spice cools down fast (5/sec), Risk cools down slow (1/sec)
        // But Chaos Level 3 (Winnie National Empire+) generates passive risk!

        let spiceDecay = 0.5;
        let riskDecay = 0.1;

        // Items acting against decay or adding generation
        // Optimized: Reduced generation from Actuarial Unit and ensured base decay remains
        if (state.items[19] > 0) riskDecay = -0.02; // Generates 0.2 Risk/sec (Reduced)
        if (state.items[9] > 0) riskDecay = 0.02;  // Reduced decay (feels 'heavy' but not 'stuck')

        if (state.spice > 0) state.spice = Math.max(0, state.spice - spiceDecay);

        // Risk doesn't decay below 0, and capped at 100 usually
        if (state.risk > 0 || riskDecay < 0) {
            state.risk = Math.max(0, Math.min(100, state.risk - riskDecay));
        }

        updateChaos();
        updateUI();
    }, 100);

    setInterval(() => {
        const save = JSON.stringify({ ...state, startTime: null });
        localStorage.setItem('winnieEmpireSave', save);
    }, 5000);
}

// --- INITIALIZATION ---
function initGame() {
    console.log('Initializing game...');

    // Initialize DOM element references
    el = {
        revenue: document.getElementById('revenue-display'),
        rps: document.getElementById('rps-display'),
        cheeto: document.getElementById('cheeto'),
        storeList: document.getElementById('store-list'),
        upgradesList: document.getElementById('upgrades-list'),
        spiceBar: document.getElementById('spice-bar'),
        spiceVal: document.getElementById('spice-val'),
        riskBar: document.getElementById('risk-bar'),
        riskVal: document.getElementById('risk-val'),
        overlay: document.getElementById('event-overlay'),
        overlayTitle: document.getElementById('event-title'),
        overlayDesc: document.getElementById('event-desc'),
        particles: document.getElementById('particles-container'),
        floating: document.getElementById('floating-text-container'),
        chaosContainer: document.getElementById('chaos-container'),
        chaosDisplay: document.getElementById('chaos-display'),
        complianceDisplay: document.getElementById('compliance-display'),
        tickerContent: document.getElementById('news-ticker-content')
    };

    console.log('DOM elements:', el);

    // Load saved game with migration logic
    const saved = localStorage.getItem('winnieEmpireSave');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            // Merge safely
            Object.keys(parsed).forEach(k => {
                if (k !== 'startTime') {
                    if (k === 'items' && Array.isArray(parsed[k])) {
                        const savedItems = parsed[k];
                        // Copy existing counts to new array, leave new slots as 0
                        for (let i = 0; i < savedItems.length; i++) {
                            if (i < state.items.length) state.items[i] = Number(savedItems[i]) || 0;
                        }
                    } else if (typeof parsed[k] === 'number') {
                        state[k] = Number(parsed[k]);
                    } else {
                        state[k] = parsed[k];
                    }
                }
            });
        } catch (e) {
            console.error("Save file corrupted, starting fresh.", e);
        }
    }

    calculateClickValue();
    updateUI();
    updateNewsTicker(); // Initial call

    // Hide loading overlay
    const loadingOverlay = document.getElementById('loading-overlay');
    if (loadingOverlay) {
        loadingOverlay.style.display = 'none';
    }

    console.log('Game initialized!');
}

// Wait for DOM before starting everything
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded, starting game...');
    initGame();
    startGameLoop();
});
