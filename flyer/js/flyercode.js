const slides = [
    {
        title: 'Ablauf',
        content: `
            <h2>Ablauf des Abschlussfestes</h2>
            <p><strong>17:00 Uhr</strong> - Begrüßung der Gäste</p>
            <p><strong>17:30 Uhr</strong> - Ansprache der Schulleitung</p>
            <p><strong>18:00 Uhr</strong> - Zertifikatsübergabe und Ehrungen</p>
            <p><strong>19:00 Uhr</strong> - Abendessen & Buffet-Eröffnung</p>
            <p><strong>20:30 Uhr</strong> - Livemusik & Tanz</p>
            <p><strong>22:00 Uhr</strong> - Dankesrede und Überraschung</p>
            <p><strong>23:00 Uhr</strong> - Ausklang und Ende der Veranstaltung</p>
        `,
        className: 'slide-ablauf'
    },
    {
        title: 'Getränke',
        content: `
            <div class="background-wrapper"></div>
            <div class="content-wrapper">
                <h2>Getränkekarte</h2>
                <p style="text-align: center; font-size: 28px; margin: 0; padding: 0; margin-top: 30px;"><strong>Alkoholfreies<br></strong></p>
                <p style="text-align: left;">
                <strong>Wasser</strong> still oder mit Kohlensäure<br>
                <strong>Cola/Fanta/Sprite</strong><br>
                <strong>Apfelschorle</strong><br>
                <strong>Bier</strong> (alkoholfrei)
                </p>
                <p style="text-align: center; font-size: 28px; margin: 0; padding: 0;"><strong>Alkoholhaltiges<br></strong></p>
                <p style="text-align: left;">
                <strong>Bier</strong><br>
                <strong>Apfelwein</strong> (sauer-oder mit Cola gespritzt)
                </p>
                <p style="text-align: center; font-size: 28px; margin: 0; padding: 0;"><strong>Weine<br></strong></p>
                <p style="text-align: left;">
                <strong>Doppio Passo Primitivo</strong> (rot oder rosé)<br>
                <strong>Kriedricher Sandgrub</strong> (Riesling halbtrocken)
                </p>
            </div>
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