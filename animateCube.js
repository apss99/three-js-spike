import greenCube from "./greenCube";

export default function animateCube(time) {
  greenCube.rotation.x = time / 2000;
  greenCube.rotation.y = time / 1000;
}
