// フレーズ集の表示
document.getElementById('showPhrase').addEventListener('click', () => {
    const phraseSelector = document.getElementById('phraseSelector');
    const phraseDisplay = document.getElementById('phraseDisplay');
    
    const phrases = {
        'greeting': 'Hello, welcome!',
        'menu': 'Please take a look at the menu.',
        'bill': 'I will bring your bill.'
    };
    
    const selectedPhrase = phraseSelector.value;
    phraseDisplay.textContent = phrases[selectedPhrase];
});

// 翻訳機能
document.getElementById('translateButton').addEventListener('click', async () => {
    const inputText = document.getElementById('inputText').value;
    const translationDisplay = document.getElementById('translationDisplay');
    
    try {
        const response = await fetch('https://translation.googleapis.com/language/translate/v2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer YOUR_GOOGLE_CLOUD_API_KEY'
            },
            body: JSON.stringify({
                q: inputText,
                target: 'en',
                format: 'text'
            })
        });
        const data = await response.json();
        translationDisplay.textContent = data.data.translations[0].translatedText;
    } catch (error) {
        translationDisplay.textContent = '翻訳に失敗しました。';
        console.error(error);
    }
});
