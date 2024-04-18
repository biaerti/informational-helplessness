document.addEventListener("DOMContentLoaded", function() {
    // Lista URLi do formularzy
    const urls = [
        "https://tally.so/r/3jBazR", // Link do scenariusza 1
        "https://tally.so/r/wvNGb8", // Link do scenariusza 2
        "https://tally.so/r/wLdZy2", // Link do scenariusza 3
        "https://tally.so/r/mKMYyK", // Link do scenariusza 4
        "https://tally.so/r/npLb9E", // Link do scenariusza 5
        "https://tally.so/r/31rA5L"  // Link do scenariusza 6
    ];

    // Funkcja do losowania unikalnych indeksów scenariuszy
    function getRandomScenarios(count, total) {
        let indices = new Set();
        while(indices.size < count) {
            const randomIndex = Math.floor(Math.random() * total);
            indices.add(randomIndex);
        }
        return Array.from(indices);
    }

    // Pobranie i przetworzenie danych z localStorage
    let remainingUrls = localStorage.getItem('remainingUrls');
    let scenarios = remainingUrls ? JSON.parse(remainingUrls) : [];

    if (!scenarios.length) {
        // Jeśli brak scenariuszy, losuj nowe i zapisz do localStorage
        const selectedIndices = getRandomScenarios(3, urls.length);
        scenarios = selectedIndices.map(index => urls[index]);
        localStorage.setItem('remainingUrls', JSON.stringify(scenarios));
        // Przekieruj do pierwszego wylosowanego scenariusza
        window.location.href = scenarios.shift();
    } else {
        // Przekieruj do kolejnego scenariusza lub strony podziękowań
        const nextUrl = scenarios.shift();
        if (scenarios.length > 0) {
            localStorage.setItem('remainingUrls', JSON.stringify(scenarios));
            window.location.href = nextUrl;
        } else {
            // Usuń dane z localStorage i przekieruj na stronę podziękowań
            localStorage.removeItem('remainingUrls');
            window.location.href = 'https://twoj.link.do/strony_z_podziekowaniami';
        }
    }
});
