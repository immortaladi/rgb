const numSegments = 30;  // Number of snake segments
const segmentSize = 15;  // Size of each snake segment
const speed = 0.15;      // Speed factor for smoothness
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let segments = [];

// Create snake segments and append to the body
for (let i = 0; i < numSegments; i++) {
    const segment = document.createElement('div');
    segment.classList.add('snake-segment');
    document.body.appendChild(segment);
    segments.push({ x: mouseX, y: mouseY, element: segment });
}

// Track the mouse position
document.addEventListener('mousemove', (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

// Animation loop to make the segments follow the mouse
function animate() {
    let targetX = mouseX;
    let targetY = mouseY;

    segments.forEach((segment, index) => {
        // Move each segment towards the target (previous segment or mouse)
        const dx = targetX - segment.x;
        const dy = targetY - segment.y;
        segment.x += dx * speed;
        segment.y += dy * speed;

        // Set position of the segment
        segment.element.style.transform = `translate(${segment.x - segmentSize / 2}px, ${segment.y - segmentSize / 2}px)`;

        // Update the target for the next segment to be the current segment's position
        targetX = segment.x;
        targetY = segment.y;
    });

    requestAnimationFrame(animate);
}

animate();  // Start the animation
