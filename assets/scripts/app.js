

//particlesJS.load('particles-js', 'assets/scripts/particlesjs-config.json', function() {
    //console.log('callback - particles.js config loaded');
//});
let paths = document.querySelectorAll(".sampletext path");
for (let i = 0; i < paths.length; i++) {
    console.log(`Letter ${i} is ${paths[i].getTotalLength()}`);
}
let height = window.innerHeight * 1.06;
let width = window.innerWidth;
const particles = 200;
for (var i = particles - 1; i >= 0; i--) {
  
    var pos = Math.floor(Math.random() * 100);
    var delay = Math.random() * 5;
    var duration = Math.random() * 2 + 5;
    
    let droplet = document.createElement("div");
    droplet.className = "drop";
    droplet.style.left = pos + "%";
    let topr = Math.random() * 100;
    droplet.style.width = Math.random() * 3 + "px";
    droplet.style.height = Math.random() * 3 + "px";
    let tl = gsap.timeline();
    tl.fromTo(droplet, {y: height * topr / 100}, {
        duration: duration  * (100 - topr) / 100,
        y: height,
        ease: "none",
    }).fromTo(droplet, {y: 0}, {
        duration: duration,
        y: height,
        repeat: -1,
        ease: "none",
    });
    gsap.ticker.fps(60);
    console.log(topr);
    document.getElementById('particles-container').appendChild(droplet);
  }
