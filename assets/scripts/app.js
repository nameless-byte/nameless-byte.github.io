import { Sine } from "./gsap-core.js";

//particlesJS.load('particles-js', 'assets/scripts/particlesjs-config.json', function() {
    //console.log('callback - particles.js config loaded');
//});
let paths = document.querySelectorAll(".sampletext path");
for (let i = 0; i < paths.length; i++) {
    console.log(`Letter ${i} is ${paths[i].getTotalLength()}`);
}
let height = window.innerHeight*1.06;
let width = window.innerWidth;
const particles = 100;
for (var i = particles - 1; i >= 0; i--) {
  
    var pos = Math.floor(Math.random() * 100);
    var delay = Math.random() * 5;
    var duration = (Math.random() * 1) + 1;
    
    let droplet = document.createElement("div");
    droplet.className = "drop";
    droplet.style.left = pos + "%";

    gsap.to(droplet, {
        duration: duration,
        y: height,
        delay: delay,
        repeat: -1,
        ease: "none"
    });
    
    document.getElementById('particles-container').appendChild(droplet);
  }
