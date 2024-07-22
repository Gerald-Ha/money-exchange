function calculateChange() {
    const amountDue = parseFloat(document.getElementById('amountDue').value);
    const amountGiven = parseFloat(document.getElementById('amountGiven').value);

    if (isNaN(amountDue) || isNaN(amountGiven)) {
        alert('Bitte geben Sie gültige Beträge ein.');
        return;
    }

    if (amountGiven < amountDue) {
        alert('Der gegebene Betrag ist kleiner als der zu zahlende Betrag.');
        return;
    }

    let change = amountGiven - amountDue;
    const denominations = [
        { name: '100 Euro Schein', value: 100 },
        { name: '50 Euro Schein', value: 50 },
        { name: '20 Euro Schein', value: 20 },
        { name: '10 Euro Schein', value: 10 },
        { name: '5 Euro Schein', value: 5 },
        { name: '2 Euro Münze', value: 2 },
        { name: '1 Euro Münze', value: 1 },
        { name: '50 Cent Münze', value: 0.50 },
        { name: '20 Cent Münze', value: 0.20 },
        { name: '10 Cent Münze', value: 0.10 },
        { name: '5 Cent Münze', value: 0.05 },
        { name: '2 Cent Münze', value: 0.02 },
        { name: '1 Cent Münze', value: 0.01 }
    ];

    let resultHTML = '<h3 class="hh">Wechselgeld:</h3><ul>';

    denominations.forEach(denomination => {
        if (change >= denomination.value) {
            const count = Math.floor(change / denomination.value);
            change = (change % denomination.value).toFixed(2);
            resultHTML += `<li>${count}x ${denomination.name}</li>`;
        }
    });

    resultHTML += '</ul>';
    document.getElementById('result').innerHTML = resultHTML;
}

document.querySelector("button").addEventListener("mouseover", function() {
    document.body.classList.add("transition-fast");
    document.body.classList.remove("transition-slow");
    document.body.classList.add("night");
});

document.querySelector("button").addEventListener("mouseout", function() {
    document.body.classList.add("transition-slow");
    document.body.classList.remove("transition-fast");
    document.body.classList.remove("night");
});





  
  function triggerEffect() {
    const effectButton = document.getElementById('effectButton');
    effectButton.classList.add('hover-effect');
    
    // Effekt nach 2 Sekunden entfernen
    setTimeout(() => {
      effectButton.classList.remove('hover-effect');
    }, 2000);
  }
  