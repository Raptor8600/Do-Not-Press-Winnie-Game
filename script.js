import { spawnElement, spawnCrumb, updatePhysics } from './physics.js';

const physicsLayer = document.getElementById('physics-layer');
const winnieAnchor = document.getElementById('winnie-anchor');
const winnieImg = document.getElementById('winnie-img');
const log = document.getElementById('event-log');
const bdy = document.body;

let clicks = 0;
let chaosLevel = 0;

// Initialize with safe values, we'll update once the window is ready
let winnieTargetX = (globalThis.innerWidth || 1000) / 2 - 75;
let winnieTargetY = (globalThis.innerHeight || 800) / 2 - 75;
let winnieCurrentX = winnieTargetX;
let winnieCurrentY = winnieTargetY;

// Update once we have a real window size
const updateInitialPos = () => {
    if (clicks === 0) {
        winnieTargetX = globalThis.innerWidth / 2 - 75;
        winnieTargetY = globalThis.innerHeight / 2 - 75;
    }
};
globalThis.addEventListener('resize', updateInitialPos);
updateInitialPos();

const LOG_MESSAGES = [
    "She's alert now...",
    "Winnie filed a claim on your cursor!",
    "Premiums are due... everywhere.",
    "Moppet is judging your lack of self-control.",
    "Daisy found another bag of Flamin' Hots.",
    "The corporate structure is vibrating.",
    "Audit risk: 1000%.",
    "Physics is now an elective, not a law.",
    "Winnie says: 'No take, only throw. No stop, only press.'",
    "The 4th dimension ignores your deductible.",
    "Wait, is that a Cheeto cloud forming?",
    "Your health plan now excludes gravity.",
    "Winnie is growing in power...",
    "Why are you still clicking?",
    "The board of directors has been replaced by kibble."
];

function addLog(msg) {
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.innerText = msg;
    log.prepend(entry);
    if (log.children.length > 5) log.lastElementChild.remove();
}

function teleportWinnie() {
    winnieTargetX = Math.random() * (globalThis.innerWidth - 150);
    winnieTargetY = Math.random() * (globalThis.innerHeight - 150);

    // Check for "trapped" corners
    if (winnieTargetX < 50) winnieTargetX = 50;
    if (winnieTargetX > globalThis.innerWidth - 200) winnieTargetX = globalThis.innerWidth - 200;
    if (winnieTargetY < 50) winnieTargetY = 50;
    if (winnieTargetY > globalThis.innerHeight - 200) winnieTargetY = globalThis.innerHeight - 200;
}

function handlePress(e) {
    clicks++;
    chaosLevel += 0.1;

    // 1. Particle effect
    for (let i = 0; i < 5; i++) {
        spawnCrumb(e.clientX, e.clientY);
    }

    // 2. Teleport logic
    teleportWinnie();
    addLog("Denied! Winnie moved to reconsider.");

    // 3. Escalation Logic

    // Click 4+: Background shift
    if (clicks > 4) {
        const hue = 210 - (Math.min(clicks, 50) * 4); // 210 (Blue) -> 10 (Red/Orange)
        document.body.style.backgroundColor = `hsl(${hue}, 80%, 90%)`;
    }

    // Click 10+: Spawn persistent elements
    if (clicks > 10 && clicks % 2 === 0) {
        let type;
        if (Math.random() < 0.4) {
            type = 'cheeto';
        } else {
            type = Math.random() < 0.5 ? 'form' : 'number';
        }
        spawnElement(type, Math.random() * globalThis.innerWidth, Math.random() * globalThis.innerHeight);
    }

    // Click 25+: Page tilting
    if (clicks > 25) {
        const tilt = (Math.random() - 0.5) * 10;
        bdy.style.transform = `rotate(${tilt}deg)`;
    }

    // Click 50+: Maximum Chaos
    if (clicks > 50) {
        bdy.classList.add('shake');
        spawnElement('cheeto', e.clientX, e.clientY);
    }

    // Random Log
    if (clicks % 5 === 0) {
        addLog(LOG_MESSAGES[Math.floor(Math.random() * LOG_MESSAGES.length)]);
    }

    if (clicks === 26) addLog("Antigravity protocols engaged.");
    if (clicks === 51) addLog("TOTAL SYSTEM COLLAPSE. WINNIE WINS.");
}

winnieAnchor.addEventListener('click', handlePress);

// Evasion Logic
globalThis.addEventListener('mousemove', (e) => {
    const rx = winnieCurrentX + 75;
    const ry = winnieCurrentY + 75;
    const dx = e.clientX - rx;
    const dy = e.clientY - ry;
    const dist = Math.hypot(dx, dy);

    // If cursor is within 200px, push target away
    const threshold = 150 + (chaosLevel * 10); // Evasion gets "vaster" as chaos increases
    if (dist < threshold) {
        const force = (threshold - dist) / threshold;
        winnieTargetX -= dx * force * 5;
        winnieTargetY -= dy * force * 5;

        // Keep in bounds
        winnieTargetX = Math.max(0, Math.min(globalThis.innerWidth - 150, winnieTargetX));
        winnieTargetY = Math.max(0, Math.min(globalThis.innerHeight - 150, winnieTargetY));
    }
});

// Core Loop
function loop() {
    const gravityDir = clicks > 25 ? -1 : 1;
    updatePhysics(chaosLevel, gravityDir);

    // Smooth Winnie Movement (Lerp)
    winnieCurrentX += (winnieTargetX - winnieCurrentX) * 0.1;
    winnieCurrentY += (winnieTargetY - winnieCurrentY) * 0.1;

    winnieAnchor.style.left = `${winnieCurrentX}px`;
    winnieAnchor.style.top = `${winnieCurrentY}px`;

    // Winnie scaling (breathing/pulse)
    if (clicks >= 0) {
        const baseScale = 1 + (clicks > 50 ? (clicks - 50) * 0.05 : 0);
        const pulse = 1 + Math.sin(Date.now() / 500) * (0.05 + chaosLevel * 0.02);
        winnieAnchor.style.transform = `scale(${baseScale * pulse}) rotate(${Math.sin(Date.now() / 1000) * (chaosLevel * 2)}deg)`;
    }

    requestAnimationFrame(loop);
}

loop();
