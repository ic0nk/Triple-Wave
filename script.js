document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('counter');
    const target = +counter.getAttribute('data-target');
    let count = 0;

    const updateCount = () => {
        const increment = target / 100;
        if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count);
            setTimeout(updateCount, 20);
        } else {
            counter.innerText = target;
        }
    };

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            updateCount();
            observer.unobserve(counter);
        }
    });

    observer.observe(counter);
});

document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('counter1');
    const target = +counter.getAttribute('data-target');
    let count = 0;

    const updateCount = () => {
        const increment = target / 100;
        if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count);
            setTimeout(updateCount, 20);
        } else {
            counter.innerText = target;
        }
    };

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            updateCount();
            observer.unobserve(counter);
        }
    });

    observer.observe(counter);
});

document.addEventListener('DOMContentLoaded', () => {
    const counter = document.getElementById('counter2');
    const target = +counter.getAttribute('data-target');
    let count = 0;

    const updateCount = () => {
        const increment = target / 100;
        if (count < target) {
            count += increment;
            counter.innerText = Math.ceil(count);
            setTimeout(updateCount, 20);
        } else {
            counter.innerText = target;
        }
    };

    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            updateCount();
            observer.unobserve(counter);
        }
    });

    observer.observe(counter);
});