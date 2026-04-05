import * as THREE from "three";
import tumblrText from "./rotatingText";
import greenCube from "./greenCube";
import animateCube from "./animateCube";
import animateRotatingText from "./animateRotatingText";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

scene.add(greenCube);

camera.position.z = 5;

scene.add(tumblrText);

function animate(time = 0) {
  requestAnimationFrame(animate);

  animateCube(time);
  animateRotatingText(time);

  renderer.render(scene, camera);
}

animate();
