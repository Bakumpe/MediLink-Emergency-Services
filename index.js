// Smooth scroll for anchor links on same page
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Interactive steps
    document.querySelectorAll('.step').forEach(step => {
        step.addEventListener('click', function () {
            document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Ambulance list selection
    document.querySelectorAll('.amb-item').forEach(item => {
        item.addEventListener('click', function () {
            document.querySelectorAll('.amb-item').forEach(i => i.classList.remove('active'));
            this.classList.add('active');
        });
    });