$(function () {
    function paralax(event) {
        this.querySelectorAll('.fon').forEach(fon => {
            let speed = fon.getAttribute('speed');
            fon.style.transform = `translate(${event.clientX * speed / 500}px, ${event.clientY * speed / 400}px )`;
        });
    }
    document.addEventListener('mousemove', paralax)

    const group = $('.group')
    const groupLogo = $('.group__logo')
    const groupTextBox = $('.group__textbox')
    
    groupEvent = () => {
        group.toggleClass('group_active')
        groupLogo.toggleClass('group__logo_active')
        groupTextBox.toggleClass('group__textbox_active')
    }
    
        setTimeout(groupEvent, 10000)
    
})