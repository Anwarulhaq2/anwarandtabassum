// ================================
// Wedding Countdown
// Anwar & Tabassum
// ================================

const targetDate = new Date("2026-08-16T13:30:00+05:30");

function updateCountdown() {

    const now = new Date();

    const difference = targetDate - now;

    if (difference <= 0) {

        document.querySelector(".countdown").innerHTML = `
            <div class="celebration">
                ❤️ Today We Begin Forever ❤️
            </div>
        `;

        clearInterval(interval);

        return;

    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");

}

updateCountdown();

const interval = setInterval(updateCountdown, 1000);