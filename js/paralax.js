$(function () {
    function paralax(event) {
        this.querySelectorAll('.fon').forEach(fon => {
            let speed = fon.getAttribute('speed');
            fon.style.transform = `translate(${event.clientX * speed / 500}px, ${event.clientY * speed / 400}px )`;
        });
    }
    document.addEventListener('mousemove', paralax)
}
)