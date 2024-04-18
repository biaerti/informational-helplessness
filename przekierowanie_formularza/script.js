

document.addEventListener("DOMContentLoaded", function() {
    // Funkcja losująca unikalne indeksy scenariuszy
    function getRandomScenarios(count, total) {
        let indices = new Set();
        while(indices.size < count) {
            const randomIndex = Math.floor(Math.random() * total);
            indices.add(randomIndex);
        }
        return Array.from(indices);
    }

    const urls = [
        "https://tally.so/r/3jBazR", // Link do scenariusza 1
        "https://tally.so/r/wvNGb8", // Link do scenariusza 2
        "https://tally.so/r/wLdZy2", // Link do scenariusza 3
        "https://tally.so/r/mKMYyK", // Link do scenariusza 4
        "https://tally.so/r/npLb9E", // Link do scenariusza 5
        "https://tally.so/r/31rA5L"  // Link do scenariusza 6
    ];

    // Sprawdź, czy mamy już wybrane scenariusze w localStorage
    let remainingUrls = localStorage.getItem('remainingUrls') ? JSON.parse(localStorage.getItem('remainingUrls')) : null;

    if (!remainingUrls || remainingUrls.length === 0) {
        // Jeśli to pierwsze uruchomienie, wylosuj trzy scenariusze
        const selectedIndices = getRandomScenarios(3, urls.length);
        remainingUrls = selectedIndices.map(index => urls[index]);
        localStorage.setItem('remainingUrls', JSON.stringify(remainingUrls));
        window.location.href = remainingUrls.shift(); // Przekieruj do pierwszego wybranego scenariusza
    } else {
        // Przekieruj do następnego wybranego scenariusza lub strony z podziękowaniami
        const nextUrl = remainingUrls.shift();
        if (remainingUrls.length > 0) {
            localStorage.setItem('remainingUrls', JSON.stringify(remainingUrls));
            window.location.href = nextUrl;
        } else {
            localStorage.removeItem('remainingUrls'); // Usuń dane z localStorage
            window.location.href = 'https://biaerti.github.io/informational-helplessness/podziekowanie'; // Przekieruj na stronę z podziękowaniami
        }
    }
});
