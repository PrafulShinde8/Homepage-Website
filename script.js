$(document).ready(function() {
    // Modal functionality
    let currentIndex = 0;
    const slides = $('.slide');
    const dots = $('.dot');

    function showSlide(index) {
        slides.removeClass('active');
        dots.removeClass('active');
        slides.eq(index).addClass('active');
        dots.eq(index).addClass('active');
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    dots.click(function() {
        currentIndex = $(this).index();
        showSlide(currentIndex);
    });

    setInterval(nextSlide, 3000); // Change slide every 3 seconds
    const modal = $('#contactForm');
    const btn = $('#contactUsBtn');
    const span = $('.close');

    btn.click(function() {
        modal.show();
    });

    span.click(function() {
        modal.hide();
    });

    $(window).click(function(event) {
        if (event.target == modal[0]) {
            modal.hide();
        }
    });

    // Form submission
    $('#form').submit(function(e) {
        e.preventDefault(); // Prevent default form submission

        // Simulate successful form submission (replace with actual AJAX request)
        alert('Form submitted successfully!');
        $('#contactForm').hide();
    });

    // Project section functionality
    $('.list-group-item').click(function() {
        $('.list-group-item').removeClass('active');
        $(this).addClass('active');
        const imageSrc = $(this).data('image');
        $('#projectImage').attr('src', imageSrc);
    });
});
