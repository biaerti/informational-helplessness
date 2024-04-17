window.onload = function() {
    const videos = [
        'https://www.industryplant.xyz/videos/Zadanie_próbne.mp4',
        'https://www.industryplant.xyz/videos/Zadanie_1_Kontrolne.mp4',
        'https://www.industryplant.xyz/videos/Zadanie_2_Kontrolne.mp4',
        'https://www.industryplant.xyz/videos/Zadanie_3_Kontrolne.mp4',
        'https://www.industryplant.xyz/videos/Zadanie_4_Kontrolne.mp4'
        // Dodaj resztę filmów zależnie od grupy (kontrolnej/eksperymentalnej)
    ];

    let currentVideoIndex = 0;

    document.getElementById('startButton').addEventListener('click', function() {
        document.getElementById('instruction-container').style.display = 'none';
        document.getElementById('video-container').style.display = 'block';
        showTaskLabel('Zadanie próbne', 5000); // Wyświetl etykietę zadania próbnego przez 5 sekund
    });

    function showTaskLabel(label, duration) {
        const videoContainer = document.getElementById('video-container');
        videoContainer.innerHTML = `<h2>${label}</h2>`;
        videoContainer.style.display = 'block';
    
        setTimeout(function() {
            loadVideo(currentVideoIndex);
        }, duration);
    }

    function loadVideo(index) {
        const videoContainer = document.getElementById('video-container');
        videoContainer.innerHTML = `<video id="current-video" width="640" height="360" autoplay muted oncontextmenu="return false;" style="pointer-events: none;">
            <source src="${videos[index]}" type="video/mp4">
            Twoja przeglądarka nie wspiera tagu video.
        </video>`;

        const video = document.getElementById('current-video');
        video.onended = function() {
            displayResponseForm();
        };
    }
    
    function displayResponseForm() {
        const responseForm = document.getElementById('response-form');
        responseForm.innerHTML = `
            <h2>Wybierz cechę figury z filmiku:</h2>
            <select id="response-select">
                <option value="capital">Figura ma literę "R"</option>
                <option value="small">Figura ma literę "r"</option>
                <option value="large">Figura jest duża</option>
                <option value="small_size">Figura jest mała</option>
                <option value="square">Figura jest kwadratem</option>
                <option value="triangle">Figura jest trójkątem</option>
                <option value="upper">Figura ma kreskę u góry</option>
                <option value="lower">Figura ma kreskę u dołu</option>
                <option value="plain">Figura jest gładka</option>
                <option value="patterned">Figura jest kreskowana</option>
            </select>
            <button id="submitButton">Zatwierdź odpowiedź</button>
        `;
        responseForm.style.display = 'block';
    
        // Dodaj nasłuchiwacz zdarzeń do nowo utworzonego przycisku
document.getElementById('submitButton').addEventListener('click', submitResponse);    }


    document.getElementById('submitButton').addEventListener('click', submitResponse);

    function submitResponse() {
        const responseForm = document.getElementById('response-form');
        responseForm.style.display = 'none';  // Ukryj formularz po zatwierdzeniu odpowiedzi
    
        if (currentVideoIndex < videos.length - 1) {
            currentVideoIndex++;
            showTaskLabel(`Zadanie ${currentVideoIndex}`, 5000);
        } else {
            window.location.href = 'https://tally.so/r/3jBazR';  // Przekierowanie na zakończenie
        }
    }
    
};
