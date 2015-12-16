// Generated by CoffeeScript 1.9.3
var camera, config, engine, scene;

config = Config.get();

config.fillWindow();

config.transparentBackground = true;

config.raiseDelay = 5000;

config.raiseDuration = 5000;

config.cloudSize = 6000;

config.flightSpeed = 50;

camera = new THREE.PerspectiveCamera(30, config.width / config.height, 1, 10000);

camera.position.set(0, -120, config.cloudSize / 2);

SoundManager.get().add('intro', 'sounds/68297__computorial__dream-intro.wav');

engine = new Engine3D();

engine.setCamera(camera);

scene = new TkwIntro();

engine.addScene(scene);

engine.render();

console.log("\n _____                             ____  _       \n|  __ \\                           |  _ \\(_)      \n| |  | |_ __ ___  __ _ _ __ ___   | |_) |_  __ _ \n| |  | | '__/ _ \\/ _` | '_ ` _ \\  |  _ <| |/ _` |\n| |__| | | |  __/ (_| | | | | | | | |_) | | (_| |\n|_____/|_|  \\___|\\__,_|_| |_| |_| |____/|_|\\__, |\n                                            __/ |\n                                           |___/ \n\nTecknoworks Dream\n\nShader: https://github.com/mrdoob/three.js/issues/2142\nCloud PNG: http://mrdoob.com/lab/javascript/webgl/clouds/cloud10.png\nSound: https://freesound.org/people/computorial/sounds/68297/\n\n");