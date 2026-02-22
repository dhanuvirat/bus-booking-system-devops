// Sashmi Lanka Travels - Main Logic

document.addEventListener('DOMContentLoaded', () => {

    // --- SEAT SELECTION LOGIC ---
    const seatGrid = document.getElementById('seat-grid');
    if (seatGrid) {
        initSeatSelection(seatGrid);
    }

    // --- BOOKING PAGE LOGIC ---
    const bookingForm = document.querySelector('.booking-form');
    if (bookingForm) {
        initBookingPage();
    }
});

// Function to generate seats and handle clicks
function initSeatSelection(seatGrid) {
    const totalSeats = 32;
    const ticketPrice = 1500; // Rs.
    const selectedSeats = new Set();
    const payBtn = document.getElementById('book-btn');
    const totalPriceEl = document.getElementById('total-price');
    const countEl = document.getElementById('selected-seats-count');

    // Generate Seats
    for (let i = 1; i <= totalSeats; i++) {
        const seat = document.createElement('div');
        seat.className = 'seat';
        seat.innerText = i;

        // Simulate random booked seats
        if (Math.random() < 0.3) {
            seat.classList.add('booked');
        } else {
            // Add click listener only to available seats
            seat.addEventListener('click', () => {
                seat.classList.toggle('selected');

                if (seat.classList.contains('selected')) {
                    selectedSeats.add(i);
                } else {
                    selectedSeats.delete(i);
                }

                updateCheckoutPanel(selectedSeats, ticketPrice, totalPriceEl, countEl, payBtn);
            });
        }
        seatGrid.appendChild(seat);
    }
}

// Update the side panel on seat selection
function updateCheckoutPanel(seats, price, totalEl, countEl, btn) {
    const count = seats.size;
    const total = count * price;

    countEl.innerText = count;
    totalEl.innerText = 'Rs. ' + total.toLocaleString();

    if (count > 0) {
        btn.disabled = false;
        // Store data for next page
        localStorage.setItem('selectedSeats', JSON.stringify(Array.from(seats)));
        localStorage.setItem('totalAmount', total);
    } else {
        btn.disabled = true;
    }
}

// Function to handle Booking Page load
function initBookingPage() {
    const seats = JSON.parse(localStorage.getItem('selectedSeats')) || [];
    const amount = localStorage.getItem('totalAmount') || 0;

    // Display summary data if elements exist
    const seatDisplay = document.getElementById('summary-seats');
    const amountDisplay = document.getElementById('summary-amount');

    if (seatDisplay) seatDisplay.innerText = seats.join(', ');
    if (amountDisplay) amountDisplay.innerText = 'Rs. ' + parseInt(amount).toLocaleString();

    // Payment Selection Interaction
    const payOptions = document.querySelectorAll('.payment-card');
    payOptions.forEach(opt => {
        opt.addEventListener('click', () => {
            payOptions.forEach(p => p.classList.remove('active'));
            opt.classList.add('active');
        });
    });

    // Handle Form Submit
    const form = document.getElementById('booking-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            document.querySelector('.modal-overlay').style.display = 'flex';
        });
    }
}
