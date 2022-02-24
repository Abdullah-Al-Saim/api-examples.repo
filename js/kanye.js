const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayQuots(data))
}

const displayQuots = quote => {
    const quotElement = document.getElementById('quote');
    quotElement.innerText = quote.quote;
}