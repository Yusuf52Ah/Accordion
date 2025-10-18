document.querySelectorAll('.accordion-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const content = trigger.nextElementSibling;
        const isActive = content.classList.contains('active');

        document.querySelectorAll('.accordion-content').forEach(c => c.classList.remove('active'));
        if (!isActive) content.classList.add('active');
    });
});