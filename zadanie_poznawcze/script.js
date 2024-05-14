window.onload = function() {
    const tasks = [
        [
            'https://www.industryplant.xyz/images/1.1_2.93.1.jpg',
            'https://www.industryplant.xyz/images/1.1_2.95.1.jpg',
            'https://www.industryplant.xyz/images/1.1_2.97.1.jpg',
            'https://www.industryplant.xyz/images/1.1_2.99.1.jpg'
        ],
        ['https://www.industryplant.xyz/images/2_2.100.1.jpg', 
        'https://www.industryplant.xyz/images/2_2.102.1.jpg', 
        'https://www.industryplant.xyz/images/2_2.104.1.jpg', 
        'https://www.industryplant.xyz/images/2_2.106.1.jpg',
        'https://www.industryplant.xyz/images/2_2.108.1.jpg',
        'https://www.industryplant.xyz/images/2_2.110.1.jpg',
        'https://www.industryplant.xyz/images/2_2.112.1.jpg',
        'https://www.industryplant.xyz/images/2_2.114.1.jpg',
        'https://www.industryplant.xyz/images/2_2.116.1.jpg',
        'https://www.industryplant.xyz/images/2_2.118.1.jpg',
        'https://www.industryplant.xyz/images/2_2.120.1.jpg',
        'https://www.industryplant.xyz/images/2_2.122.1.jpg'],
    ['https://www.industryplant.xyz/images/4_2.146.1.jpg', 
    'https://www.industryplant.xyz/images/3_2.125.1.jpg', 
    'https://www.industryplant.xyz/images/3_2.127.1.jpg', 
    'https://www.industryplant.xyz/images/3_2.129.1.jpg',
    'https://www.industryplant.xyz/images/3_2.131.1.jpg',
    'https://www.industryplant.xyz/images/3_2.133.1.jpg',
    'https://www.industryplant.xyz/images/3_2.135.1.jpg',
    'https://www.industryplant.xyz/images/3_2.137.1.jpg',
    'https://www.industryplant.xyz/images/3_2.139.1.jpg',
    'https://www.industryplant.xyz/images/3_2.141.1.jpg',
    'https://www.industryplant.xyz/images/3_2.143.1.jpg',
    'https://www.industryplant.xyz/images/3_2.145.1.jpg'],
    ['https://www.industryplant.xyz/images/4_2.146.1.jpg', 
    'https://www.industryplant.xyz/images/4_2.148.1.jpg', 
    'https://www.industryplant.xyz/images/4_2.150.1.jpg',
    'https://www.industryplant.xyz/images/4_2.152.1.jpg',
    'https://www.industryplant.xyz/images/4_2.154.1.jpg',
    'https://www.industryplant.xyz/images/4_2.156.1.jpg',
    'https://www.industryplant.xyz/images/4_2.158.1.jpg',
    'https://www.industryplant.xyz/images/4_2.160.1.jpg',
    'https://www.industryplant.xyz/images/4_2.162.1.jpg',
    'https://www.industryplant.xyz/images/4_2.164.1.jpg',
    'https://www.industryplant.xyz/images/4_2.166.1.jpg']]

    let currentTaskIndex = 0;
    let currentImageIndex = 0;
    const displayTime = 5000;
    const intervalTime = 500;

    const startButton = document.getElementById('startButton');
    const instructionContainer = document.getElementById('instruction-container');
    const imageContainer = document.getElementById('image-container');
    const currentImage = document.getElementById('current-image');
    const responseForm = document.getElementById('response-form');

    startButton.addEventListener('click', function() {
        instructionContainer.style.display = 'none';
        imageContainer.style.display = 'block';
        showImage();
    });

    function showImage() {
        document.getElementById('static-message').style.display = 'block'; // Pokaż komunikat
        if (currentImageIndex < tasks[currentTaskIndex].length) {
            currentImage.src = tasks[currentTaskIndex][currentImageIndex];
            currentImage.style.display = 'block';
            currentImageIndex++;
            setTimeout(() => {
                if (currentImageIndex < tasks[currentTaskIndex].length) {
                    setTimeout(showImage, intervalTime);
                } else {
                    currentImageIndex = 0;
                    displayResponseForm();
                }
            }, displayTime);
        }
    }
    
    function displayResponseForm() {
        document.getElementById('static-message').style.display = 'none'; // Ukryj komunikat
        imageContainer.style.display = 'none';
        responseForm.style.display = 'block';
    }

    function displayResponseForm() {
        imageContainer.style.display = 'none';
        responseForm.style.display = 'block';
    }

    document.getElementById('submitButton').addEventListener('click', function() {
        responseForm.style.display = 'none';
        if (currentTaskIndex === 0) {
            alert("Poprawną odpowiedzią było 'Figura jest trójkątem'. Jeśli zaznaczyłeś/aś poprawnie - gratulacje! Teraz czekają Cię 3 właściwe zadania. Każde zadanie zawiera po 12 figur i trwa po 1 minucie. Po zaznaczeniu odpowiedzi, nie będzie już jednak informacji, która odpowiedź była poprawna. Powodzenia!");
        }
        currentTaskIndex++;
        if (currentTaskIndex < tasks.length) {
            imageContainer.style.display = 'block';
            showImage();
        } else {
            window.location.href = 'https://tally.so/r/wLdZy2'; // Przekierowanie na formularz po ostatnim zadaniu
        }
    });
};
