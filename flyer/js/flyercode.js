const slides = [
    {
        title: 'Ablauf',
        content: `
            <h2>Ablauf des Abschlussfestes</h2>
            <p><strong>17:00 Uhr</strong> – Begrüßung der Gäste</p>
            <p><strong>17:30 Uhr</strong> – Ansprache der Schulleitung</p>
            <p><strong>18:00 Uhr</strong> – Zertifikatsübergabe und Ehrungen</p>
            <p><strong>19:00 Uhr</strong> – Abendessen & Buffet-Eröffnung</p>
            <p><strong>20:30 Uhr</strong> – Livemusik & Tanz</p>
            <p><strong>22:00 Uhr</strong> – Dankesrede und Überraschung</p>
            <p><strong>23:00 Uhr</strong> – Ausklang und Ende der Veranstaltung</p>
        `,
        className: 'slide-ablauf'
    },
    {
        title: 'Getränke',
        content: `
            <h2>Getränkekarte</h2>
            <p><strong>Alkoholfreies:</strong> Wasser, Cola, Fanta, Sprite, Apfelschorle, Bier (alkoholfrei)</p>
            <p><strong>Alkoholhaltiges:</strong> Bier, Apfelwein (sauer oder mit Cola gespritzt)</p>
            <p><strong>Weine:</strong> Doppio Passo Primitivo (rot oder rosé), Kriedricher Sandgrub (Riesling halbtrocken)</p>
        `,
        className: 'slide-getraenke'
    },
    {
        title: 'Essen',
        content: `
            <h2>Menüauswahl</h2>
            <p><strong>Vorspeise:</strong> Cremige Kürbissuppe oder gemischter Salat</p>
            <p><strong>Hauptspeise:</strong> Gegrilltes Hähnchen mit Kräuterbutter und Ofenkartoffeln, 
                vegetarische Lasagne oder Lachsfilet mit Zitronensoße</p>
            <p><strong>Dessert:</strong> Schokoladenmousse oder Obstsalat mit frischer Minze</p>
        `,
        className: 'slide-essen'
    }
];

let currentSlide = 0;

function showSlide(index) {
    const sliderContent = document.getElementById('sliderContent');
    sliderContent.innerHTML = slides[index].content;
    sliderContent.className = 'slider-content ' + slides[index].className;
}

function nextSlide() {
    currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    showSlide(currentSlide);
}

document.getElementById('sliderContainer').addEventListener('click', function(event) {
    const containerWidth = this.clientWidth;
    const clickPosition = event.clientX;

    if (clickPosition < containerWidth / 2) {
        prevSlide();
    } else {
        nextSlide();
    }
});

let startX = 0;

document.getElementById('sliderContainer').addEventListener('touchstart', function(event) {
    startX = event.touches[0].clientX;
});

document.getElementById('sliderContainer').addEventListener('touchend', function(event) {
    let endX = event.changedTouches[0].clientX;
    
    if (startX > endX + 50) {
        nextSlide();
    } else if (startX < endX - 50) {
        prevSlide();
    }
});

showSlide(currentSlide);