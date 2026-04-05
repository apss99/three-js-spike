import * as THREE from "three";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { FontLoader } from "three/addons/loaders/FontLoader.js";

const loader = new FontLoader();
const font = await loader.loadAsync(
  "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
);
const textGeometry = new TextGeometry("Rotating text", {
  font: font,
  size: 1,
  depth: 0.2,
  curveSegments: 12,
});

const textMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const tumblrText = new THREE.Mesh(textGeometry, textMaterial);

tumblrText.position.x = -4;
tumblrText.position.y = 2;

export default tumblrText;
