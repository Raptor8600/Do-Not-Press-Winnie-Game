const physicsLayer = document.getElementById('physics-layer');
const elements = [];

export function spawnElement(type, x, y) {
    const el = document.createElement('div');
    el.className = 'floating-element';

    if (type === 'cheeto') {
        el.innerHTML = `<img src="https://www.pngall.com/wp-content/uploads/15/Cheeto-PNG-Photos.png" style="width:100%; height:100%; object-fit:contain;">`;
    } else if (type === 'form') {
        el.innerHTML = `<div style="width:100%; height:100%; background:white; border:1px solid #ccc; padding:5px; font-size:4px; box-shadow: 2px 2px 5px rgba(0,0,0,0.1);">
            <div style="background:#ddd; height:4px; margin-bottom:2px;"></div>
            <div style="background:#eee; height:2px; margin-bottom:1px;"></div>
            <div style="color:red; font-weight:bold;">DENIED</div>
        </div>`;
    } else if (type === 'number') {
        const amount = (Math.random() * 1000).toFixed(2);
        el.innerHTML = `<div style="font-size:12px; color:green; font-weight:bold;">$${amount}</div>`;
        el.style.width = 'auto';
        el.style.height = 'auto';
    }

    el.style.left = `${x}px`;
    el.style.top = `${y}px`;

    // Physics properties
    const item = {
        dom: el,
        x: x,
        y: y,
        vx: (Math.random() - 0.5) * 10,
        vy: (Math.random() - 0.5) * 10,
        vr: (Math.random() - 0.5) * 5,
        rotation: Math.random() * 360,
        scale: 0.8 + Math.random() * 0.4,
        isDraggable: true,
        grabbed: false
    };

    // Interaction
    el.addEventListener('mousedown', (e) => {
        item.grabbed = true;
        el.style.zIndex = 1000;
    });

    window.addEventListener('mouseup', () => {
        item.grabbed = false;
        el.style.zIndex = 100;
    });

    window.addEventListener('mousemove', (e) => {
        if (item.grabbed) {
            item.x = e.clientX - 25;
            item.y = e.clientY - 25;
            item.vx = 0;
            item.vy = 0;
        }
    });

    physicsLayer.appendChild(el);
    elements.push(item);
}

export function spawnCrumb(x, y) {
    const crumb = document.createElement('div');
    crumb.className = 'cheeto-crumb';
    crumb.style.left = `${x}px`;
    crumb.style.top = `${y}px`;
    crumb.style.backgroundColor = `hsl(${10 + Math.random() * 20}, 100%, 50%)`;

    const vx = (Math.random() - 0.5) * 15;
    const vy = (Math.random() - 0.5) * 15 - 5;
    let cx = x;
    let cy = y;
    let life = 1.0;

    physicsLayer.appendChild(crumb);

    const animate = () => {
        cx += vx;
        cy += vy;
        life -= 0.02;
        crumb.style.left = `${cx}px`;
        crumb.style.top = `${cy}px`;
        crumb.style.opacity = life;
        crumb.style.transform = `scale(${life})`;

        if (life > 0) {
            requestAnimationFrame(animate);
        } else {
            crumb.remove();
        }
    };
    animate();
}

export function updatePhysics(chaosLevel, gravityDirection = 1) {
    const width = window.innerWidth;
    const height = window.innerHeight;

    elements.forEach(item => {
        if (item.grabbed) return;

        // Apply chaos-based forces
        if (chaosLevel >= 3) {
            // Antigravity / Drift
            item.vy += 0.1 * gravityDirection; // 1 for down, -1 for up (antigravity)
        }

        item.x += item.vx;
        item.y += item.vy;
        item.rotation += item.vr;

        // Bounce off walls
        if (item.x < 0 || item.x > width - 50) item.vx *= -0.8;
        if (item.y < 0 || item.y > height - 50) item.vy *= -0.8;

        // Drag factor
        item.vx *= 0.99;
        item.vy *= 0.99;

        item.dom.style.transform = `translate(${item.x}px, ${item.y}px) rotate(${item.rotation}deg) scale(${item.scale})`;
    });
}
