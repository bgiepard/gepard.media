export const theme = {
    colors: {
        primary: '#f7bc0a',       // żółty — tło lewej sekcji, akcenty
        black: '#000000',
        white: '#ffffff',
    },
    font: {
        sizeHero: '5rem',         // nagłówki h1
        weightBold: '800',        // font-extrabold
    },
    metaBalls: {
        color: '#000000',
        cursorBallColor: '#000000',
        cursorBallSize: 2,
        ballCount: 16,
        animationSize: 30,
        clumpFactor: 2.5,
        speed: 0.05,
    },
    dotGrid: {
        dotSize: 4,
        gap: 20,
        baseColor: 'rgba(0,0,0,0.05)',
        proximity: 50,
        shockRadius: 250,
        shockStrength: 5,
        resistance: 750,
        returnDuration: 1.5,
    },
} as const;
