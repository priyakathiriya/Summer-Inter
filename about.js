window.addEventListener('scroll', process);
function process() {
    var height = window.innerHeight/2;
    var range = document.getElementById('skill');
    var prog = range.getBoundingClientRect().top;
    console.log(prog);
    if (prog<height) {
        const progress1 = document.getElementById('progresshtml');
        progress1.style.width = progress1.getAttribute('data-target');
        progress1.style.opacity = 1;

       const progress2 = document.getElementById("progresscss");
       progress2.style.width = progress2.getAttribute("data-target");
       progress2.style.opacity = 1;

       const progress3 = document.getElementById("progressjs");
       progress3.style.width = progress3.getAttribute("data-target");
       progress3.style.opacity = 1;

       const progress4 = document.getElementById("progressreact");
       progress4.style.width = progress4.getAttribute("data-target");
       progress4.style.opacity = 1;

       const progress5 = document.getElementById("progresspython");
       progress5.style.width = progress5.getAttribute("data-target");
       progress5.style.opacity = 1;
    }
}
    