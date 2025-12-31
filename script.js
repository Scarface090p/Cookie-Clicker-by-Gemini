cookieEl.addEventListener('mousedown', (e) => {
    const clickText = document.createElement('div');
    clickText.innerText = '+1';
    clickText.style.position = 'absolute';
    clickText.style.left = e.clientX + 'px';
    clickText.style.top = e.clientY + 'px';
    clickText.style.color = 'white';
    clickText.style.fontWeight = 'bold';
    clickText.style.pointerEvents = 'none';
    clickText.style.animation = 'floatUp 1s ease-out forwards';
    document.body.appendChild(clickText);
    
    setTimeout(() => clickText.remove(), 1000);
});
