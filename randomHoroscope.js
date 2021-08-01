const zodiacSigns = ['Aries', 'Tauros', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Acquarius', 'Pisces'];
const traits = ['strong emotion', 'enthusiastic', 'passionate', 'temperemental', 'achiever', 'interesting', 
                'refreshing', 'charming', 'mysterious', 'private', 'sensitive', 'emotional', 
                'dependable', 'grounded', 'reliable', 'materialistic', 'loyal', 'practical',
                'powerful', 'creativity', 'fun', 'ideas', 'adventurous', 'exciting'];
const planets = ['Mars', 'Venus', 'Mercury', 'the Moon', 'the Sun', 'Venus', 'Pluto', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

// Generate random zodiac sign 
const zodiacSign = zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];

// Given zodiac sign, choose randomly a trait based on your sign element
const traitElement = zodiacSign => {
    let min = 0;
    let max = 0;
    if (zodiacSign === 'Aries' || zodiacSign === 'Leo' || zodiacSign === 'Sagittarius') {
        min = 0;
        max = 5;
    } else if (zodiacSign === 'Pisces' || zodiacSign === 'Cancer' || zodiacSign === 'Scorpio') {
        min = 6;
        max = 11;
    } else if (zodiacSign === 'Taurus' || zodiacSign === 'Virgo' || zodiacSign === 'Capricorn') {
        min = 12; 
        max = 17;
    } else {
        min = 18;
        max = 23;
    }
    return traits[Math.floor(Math.random() * (max-min) + min)];
}

// Generate random planet
const planet = planets[Math.floor(Math.random() * planets.length)];

// Generate random phrase
const phrase = (zodiacSign, element, planet) => {
    return `${zodiacSign}: ${planet} affects you. You are a very ${element} person`;
}

console.log(phrase(zodiacSign, traitElement(zodiacSign), planet));