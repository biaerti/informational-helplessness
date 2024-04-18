document.addEventListener("DOMContentLoaded", function() {
    const urls = [
        "https://tally.so/r/3jBazR", // Link do scenariusza 1
        "https://tally.so/r/wvNGb8", // Link do scenariusza 2
        "https://tally.so/r/wLdZy2", // Link do scenariusza 3
        "https://tally.so/r/mKMYyK", // Link do scenariusza 4
        "https://tally.so/r/npLb9E", // Link do scenariusza 5
        "https://tally.so/r/31rA5L"  // Link do scenariusza 6
    ];

    // Funkcja losująca unikalne indeksy scenariuszy
    function getRandomScenarios(count, total) {
        let indices = new Set();
        while(indices.size < count) {
            const randomIndex = Math.floor(Math.random() * total);
            indices.add(randomIndex);
        }
        return Array.from(indices);
    }

    const selectedIndices = getRandomScenarios(3, urls.length);
    const selectedUrls = selectedIndices.map(index => urls[index]);

    // Przekierowanie do pierwszego wylosowanego scenariusza
    window.location.href = selectedUrls[0];

    // Możesz również zapisać wybrane URL-e do localStorage, jeśli potrzebujesz przekazać te informacje między stronami
    localStorage.setItem('remainingUrls', JSON.stringify(selectedUrls.slice(1)));
});
