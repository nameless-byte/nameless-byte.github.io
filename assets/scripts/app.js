particlesJS.load('particles-js', 'assets/scripts/particlesjs-config.json', function() {
    console.log('callback - particles.js config loaded');
});
let paths = document.querySelectorAll(".sampletext path");
for (let i = 0; i < paths.length; i++) {
    console.log(`Letter ${i} is ${paths[i].getTotalLength()}`);
}