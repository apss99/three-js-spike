import * as THREE from "three";

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const greenCube = new THREE.Mesh(cubeGeometry, material);

export default greenCube;
