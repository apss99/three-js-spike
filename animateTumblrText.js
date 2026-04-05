import tumblrText from "./tumblrText";

export default function animateTumblrText(time) {
  tumblrText.rotation.x = time / 2000;
  tumblrText.rotation.y = time / 1000;
}
