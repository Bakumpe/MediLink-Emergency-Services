// Filter chips toggle
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', function () {
            document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Card click → go to booking
    document.querySelectorAll('.provider-card').forEach(card => {
        card.addEventListener('click', function () {
            window.location.href = '../booking/booking.html';
        });
    });