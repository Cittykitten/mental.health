        // Mobile Menu Toggle with Hamburger Animation
        const mobileMenuBtn = document.querySelector('.mobile-menu');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navLinks.classList.toggle('active');
            
            // Prevent scrolling when menu is open
            if (navLinks.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking on a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Therapist Search Functionality
        const searchInput = document.querySelector('.search-input');
        const searchBtn = document.querySelector('.search-btn');
        const specialtyFilter = document.getElementById('specialty');
        const locationFilter = document.getElementById('location');
        const therapyTypeFilter = document.getElementById('therapy-type');
        const therapistCards = document.querySelectorAll('.therapist-card');
        const resetBtn = document.querySelector('.btn-outline');
        
        function filterTherapists() {
            const searchTerm = searchInput.value.toLowerCase();
            const specialtyValue = specialtyFilter.value;
            const locationValue = locationFilter.value;
            const therapyTypeValue = therapyTypeFilter.value;
            
            therapistCards.forEach(card => {
                const name = card.querySelector('.therapist-name').textContent.toLowerCase();
                const specialties = card.querySelector('.therapist-specialties').textContent.toLowerCase();
                const location = card.querySelector('.meta-item:nth-child(1)').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                
                const matchesSearch = name.includes(searchTerm) || specialties.includes(searchTerm) || description.includes(searchTerm);
                const matchesSpecialty = !specialtyValue || specialties.includes(specialtyValue);
                const matchesLocation = !locationValue || location.includes(locationValue);
                const matchesTherapyType = !therapyTypeValue || specialties.includes(therapyTypeValue) || description.includes(therapyTypeValue);
                
                if (matchesSearch && matchesSpecialty && matchesLocation && matchesTherapyType) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        }
        
        searchBtn.addEventListener('click', filterTherapists);
        searchInput.addEventListener('keyup', (e) => {
            if (e.key === 'Enter') {
                filterTherapists();
            }
        });
        
        specialtyFilter.addEventListener('change', filterTherapists);
        locationFilter.addEventListener('change', filterTherapists);
        therapyTypeFilter.addEventListener('change', filterTherapists);
        
        resetBtn.addEventListener('click', () => {
            searchInput.value = '';
            specialtyFilter.value = '';
            locationFilter.value = '';
            therapyTypeFilter.value = '';
            therapistCards.forEach(card => {
                card.style.display = 'block';
            });
        });
        
        // Highlight current page in navigation
        const currentPage = window.location.pathname.split('/').pop();
        document.querySelectorAll('.nav-links a').forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
