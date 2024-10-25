document.addEventListener('DOMContentLoaded', function() {
    // Date picker functionality
    const dateInput = document.querySelector('.dates input');
    const guestsInput = document.querySelector('.guests input');
    
    // Toggle active states for search items
    const searchItems = document.querySelectorAll('.search-item');
    searchItems.forEach(item => {
        const input = item.querySelector('input');
        
        input.addEventListener('focus', () => {
            searchItems.forEach(si => si.classList.remove('active'));
            item.classList.add('active');
        });
    });

    // Handle search button click
    const searchBtn = document.querySelector('.search-btn');
    searchBtn.addEventListener('click', () => {
        const location = document.querySelector('.location input').value;
        const dates = dateInput.value;
        const guests = guestsInput.value;
        
        // Add your search logic here
        console.log('Search params:', { location, dates, guests });
    });

    // Close active states when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-box')) {
            searchItems.forEach(item => item.classList.remove('active'));
        }
    });

    // Responsive navigation for mobile
    const navToggle = document.createElement('button');
    navToggle.className = 'nav-toggle';
    navToggle.innerHTML = '☰';
    
    if (window.innerWidth <= 768) {
        const navLeft = document.querySelector('.nav-left');
        navLeft.style.display = 'none';
        document.querySelector('.navbar').prepend(navToggle);
        
        navToggle.addEventListener('click', () => {
            navLeft.style.display = navLeft.style.display === 'none' ? 'flex' : 'none';
        });
    }
});