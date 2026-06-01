// Hero 3D Background
function initHeroCanvas() {
    const container = document.getElementById('hero-canvas-container');
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    camera.position.z = 50;

    // Create geometric shapes for tech theme
    const geometry1 = new THREE.IcosahedronGeometry(8, 4);
    const geometry2 = new THREE.TorusGeometry(15, 3, 16, 100);
    const geometry3 = new THREE.TetrahedronGeometry(10);
    const geometry4 = new THREE.OctahedronGeometry(12);

    const material1 = new THREE.MeshPhongMaterial({
        color: 0x0066cc,
        emissive: 0x004499,
        wireframe: false,
        opacity: 0.8,
        transparent: true
    });

    const material2 = new THREE.MeshPhongMaterial({
        color: 0x00d4ff,
        emissive: 0x00aaff,
        wireframe: true,
        opacity: 0.6,
        transparent: true,
        linewidth: 2
    });

    const material3 = new THREE.MeshPhongMaterial({
        color: 0x0066cc,
        emissive: 0x004499,
        wireframe: true,
        opacity: 0.5,
        transparent: true
    });

    const mesh1 = new THREE.Mesh(geometry1, material1);
    const mesh2 = new THREE.Mesh(geometry2, material2);
    const mesh3 = new THREE.Mesh(geometry3, material3);
    const mesh4 = new THREE.Mesh(geometry4, material1);

    mesh1.position.set(-20, 15, 0);
    mesh2.position.set(0, 0, 0);
    mesh3.position.set(25, -10, 0);
    mesh4.position.set(-15, -20, 0);

    scene.add(mesh1, mesh2, mesh3, mesh4);

    // Lighting
    const light1 = new THREE.PointLight(0x00d4ff, 1, 100);
    light1.position.set(30, 30, 30);
    
    const light2 = new THREE.PointLight(0x0066cc, 0.8, 80);
    light2.position.set(-30, -30, 30);
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);

    scene.add(light1, light2, ambientLight);

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);

        mesh1.rotation.x += 0.005;
        mesh1.rotation.y += 0.008;
        
        mesh2.rotation.x += 0.003;
        mesh2.rotation.y -= 0.005;
        
        mesh3.rotation.x += 0.006;
        mesh3.rotation.z += 0.004;
        
        mesh4.rotation.y += 0.007;
        mesh4.rotation.z -= 0.005;

        // Floating motion
        mesh1.position.y += Math.sin(Date.now() * 0.001) * 0.01;
        mesh3.position.y += Math.cos(Date.now() * 0.001) * 0.01;

        renderer.render(scene, camera);
    }

    animate();

    // Handle resize
    window.addEventListener('resize', () => {
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
    });
}

// About Section 3D Canvas
function initAboutCanvas() {
    const container = document.getElementById('about-canvas-container');
    if (!container) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(width, height);
    renderer.setClearColor(0xffffff, 0);
    container.appendChild(renderer.domElement);

    camera.position.z = 40;

    // Create network nodes
    const nodeGeometry = new THREE.SphereGeometry(2, 16, 16);
    const nodeMaterial = new THREE.MeshPhongMaterial({
        color: 0x00d4ff,
        emissive: 0x0088ff,
        shininess: 100
    });

    const nodes = [];
    const positions = [
        [-15, 15, 0], [15, 15, 0], [0, -15, 0],
        [-10, 0, 0], [10, 0, 0], [0, 8, 0]
    ];

    positions.forEach(pos => {
        const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
        node.position.set(...pos);
        scene.add(node);
        nodes.push({
            mesh: node,
            basePos: [...pos],
            phase: Math.random() * Math.PI * 2
        });
    });

    // Create connection lines
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = [];

    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            linePositions.push(...nodes[i].basePos);
            linePositions.push(...nodes[j].basePos);
        }
    }

    lineGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(linePositions), 3));
    const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x0066cc,
        opacity: 0.4,
        transparent: true,
        linewidth: 1
    });

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // Central rotating element
    const centralGeometry = new THREE.TorusGeometry(8, 1.5, 16, 100);
    const centralMaterial = new THREE.MeshPhongMaterial({
        color: 0x0066cc,
        emissive: 0x004499,
        opacity: 0.8,
        transparent: true
    });
    const central = new THREE.Mesh(centralGeometry, centralMaterial);
    scene.add(central);

    // Lighting
    const light1 = new THREE.PointLight(0x00d4ff, 1, 100);
    light1.position.set(30, 30, 30);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(light1, ambientLight);

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);

        // Animate nodes
        nodes.forEach((node, index) => {
            node.phase += 0.01;
            node.mesh.position.x = node.basePos[0] + Math.cos(node.phase) * 3;
            node.mesh.position.y = node.basePos[1] + Math.sin(node.phase) * 3;
            node.mesh.rotation.x += 0.01;
            node.mesh.rotation.y += 0.01;
        });

        // Rotate central element
        central.rotation.x += 0.005;
        central.rotation.z += 0.008;

        renderer.render(scene, camera);
    }

    animate();

    // Handle resize
    window.addEventListener('resize', () => {
        const newWidth = container.clientWidth;
        const newHeight = container.clientHeight;
        camera.aspect = newWidth / newHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(newWidth, newHeight);
    });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    initHeroCanvas();
    initAboutCanvas();
});