const element = document.getElementById('double-click-me');

element.addEventListener('dblclick', function() {
    // Change shape to circle
    element.style.borderRadius = '50%';
    alert('Double Clicked!');
});

