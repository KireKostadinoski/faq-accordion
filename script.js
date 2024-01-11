function toggleAnswer(id) {
    var answer = document.getElementById(`answer${id}`);
    var image = document.getElementById(`toggle-img${id}`);

    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        image.src = './assets/images/icon-plus.svg'; 
    } else {
        answer.style.display = 'block';
        image.src = './assets/images/icon-minus.svg'; 
    }
}
