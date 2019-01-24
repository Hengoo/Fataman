var container;
var camera, scene, renderer;
var mouseX = 0, mouseY = 0;
var windowHalfX = window.innerWidth / 2;
var windowHalfY = window.innerHeight / 2;
var object;

var controls;
var root;

init();
animate();

function init() {
    container = document.createElement('div');
    root = document.getElementById("container3d")
    root.appendChild(container);

    width = root.clientWidth;
    height = root.clientHeight;

    windowHalfX = width / 2;
    windowHalfY = height / 2;

    console.log(width);

    //document.body.appendChild( container );
    camera = new THREE.PerspectiveCamera(45, width / height, 0.25, 500);
    camera.position.x = 33
    camera.position.y = 10
    camera.position.z = -30

    onMouseDownPosition = new THREE.Vector2();

    //controls:
    controls = new THREE.OrbitControls(camera);
    controls.target.set(35, 0.8, - 30);
    controls.maxPolarAngle = Math.PI / 2.001;
    controls.update();
    controls.enabled = false;

    // scene
    scene = new THREE.Scene();
    var ambientLight = new THREE.AmbientLight(0xcccccc, 0.4);
    scene.add(ambientLight);
    var pointLight = new THREE.PointLight(0xffffff, 0.8);
    camera.add(pointLight);
    light = new THREE.HemisphereLight(0xbbbbff, 0x444422);
    light.position.set(34, 1, -30);
    //scene.add( light );
    scene.add(camera);

    //background
    var urls = ['px.jpg', 'nx.jpg', 'py.jpg', 'ny.jpg', 'pz.jpg', 'nz.jpg'];
    var loader = new THREE.CubeTextureLoader().setPath('textures/skyboxsun25deg/');
    var background = loader.load(urls);
    scene.background = background;

    // model
    var loader = new THREE.GLTFLoader().setPath('models/House/');
    loader.load('House2.gltf', function (gltf) {
        gltf.scene.traverse(function (child) {
            if (child.isMesh) {
                child.material.envMap = background;
            }
        });
        scene.add(gltf.scene);
    }, undefined, function (e) {
        console.error(e);
    });

    //Prepare Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.gammaOutput = true;
    container.appendChild(renderer.domElement);


    //window.addEventListener( 'resize', onWindowResize, false );
}

function contextmenu(event) {
    event.preventDefault();
}

function onWindowResize() {
    const canvas = renderer.domElement;
    // look up the size the canvas is being displayed
    const width = root.clientWidth;
    const height = root.clientHeight;

    //only resize if needed
    if (canvas.width !== width || canvas.height !== height) {
        console.log(width)
        windowHalfX = width / 2;
        windowHalfY = height / 2;
        camera.aspect = width / height;

        camera.updateProjectionMatrix();

        renderer.setSize(width, height);

        if (width === 0) {
            //deactivate control so we have normal website control again
            controls.enabled = false;
        } else {
            //activate control again
            controls.enabled = true;
        }
    }

    //renderer.setSize( window.innerWidth, window.innerHeight );
}

function animate() {
    requestAnimationFrame(animate);
    render();
}
function render() {
    //manually call resize every frame
    onWindowResize();
    if (windowHalfX === 0) {
        //this loads the 3d image when you open the page. remove it and it loads it when you open the modal
        renderer.render(scene, camera);
    } else {
        renderer.render(scene, camera);
    }
    //console.log( renderer.info );
}