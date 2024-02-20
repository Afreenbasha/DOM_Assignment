const element = document.getElementById('hover-me');

element.addEventListener('mouseover', function() {
    element.classList.add('hovered'); 
});

element.addEventListener('mouseout', function() {
    element.classList.remove('hovered'); 

    alert(
        "you entered in Restricted Area 🙅 (mouse over event is working properly)"
      );
});
