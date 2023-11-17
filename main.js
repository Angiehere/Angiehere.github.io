let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
 cursor: "<span style='color: #61377C;'>|</span>",
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #61377C;">Siempre dispuesta a aprender más.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
