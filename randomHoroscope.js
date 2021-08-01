const zodiacSigns = ['Aries', 'Tauros', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Acquarius', 'Pisces'];
const elements = ['strong emotion', 'enthusiastic', 'passionate', 'temperemental', 'achiever', 'interesting', 
                'refreshing', 'charming', 'mysterious', 'private', 'sensitive', 'emotional', 
                'dependable', 'grounded', 'reliable', 'materialistic', 'loyal', 'practical',
                'powerful', 'creativity', 'fun', 'ideas', 'adventurous', 'exciting'];
const planets = ['Mars', 'Taurus', 'Mercury', 'Moon', 'Sun', 'Venus', 'Pluto', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];


const zodiacSign = zodiacSigns[Math.floor(Math.random() * zodiacSigns.length)];

const elementFinder = zodiacSign => {
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
    return elements[Math.floor(Math.random() * (max-min) + min)];
}


