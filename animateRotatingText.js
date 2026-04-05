import tumblrText from "./rotatingText";

export default function animateRotatingText(time) {
  tumblrText.rotation.x = time / 2000;
  tumblrText.rotation.y = time / 1000;
}
