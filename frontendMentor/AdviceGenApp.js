document.getElementById('advice-button').addEventListener('click', fetchAdvice);

function fetchAdvice() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            console.log('API Response:', data);
            
            if (data.slip) {
                const adviceText = data.slip.advice;
                const slipId = data.slip.id;

                document.getElementById('advice-text').textContent = `${adviceText}`;
                document.getElementById('advice-id').textContent = `Advice #${slipId}`;
            } else {
                document.getElementById('advice-text').textContent = "Sorry, no advice received.";
                document.getElementById('advice-id').textContent = "";
            }
        })
        .catch(error => {
            console.error('Error fetching advice:', error);
            document.getElementById('advice-text').textContent = "Sorry, we couldn't get any advice at this moment.";
            document.getElementById('advice-id').textContent = "";
        });
}

fetchAdvice();