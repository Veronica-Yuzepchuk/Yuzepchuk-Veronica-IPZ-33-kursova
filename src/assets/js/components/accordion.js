document.addEventListener('DOMContentLoaded', () => {
    const accordionBoxes = document.querySelectorAll('.accordion-box');

    accordionBoxes.forEach((box) => {
        const button = box.querySelector('.accordion-btn');
        const content = box.querySelector('.accordion-content');

        button.addEventListener('click', () => {
            accordionBoxes.forEach((otherBox) => {
                const otherButton = otherBox.querySelector('.accordion-btn');
                const otherContent = otherBox.querySelector('.accordion-content');

                if (otherBox !== box) {
                    otherBox.classList.remove('accordion-box_active');
                    otherButton.classList.remove('accordion-btn_active');
                    otherContent.style.maxHeight = null;
                }
            });

            const isActive = box.classList.contains('accordion-box_active');
            if (isActive) {
                box.classList.remove('accordion-box_active');
                button.classList.remove('accordion-btn_active');
                content.style.maxHeight = null;
            } else {
                box.classList.add('accordion-box_active');
                button.classList.add('accordion-btn_active');
                content.style.maxHeight = content.scrollHeight + 'px';
            }
        });
    });
});