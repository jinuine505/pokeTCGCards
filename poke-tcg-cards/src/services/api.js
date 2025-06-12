export const getPacks = async () => {
    try {
        const res = await fetch('https://api.tcgdex.net/v2/en/series/tcgp');
        
        if (!res.ok)
        {
            throw new Error('Unable to load data');
        }

        const data = await res.json();
        return data.sets;
    }

    catch(err) {
        throw err;
    }
}

export const getCardsFromSet = async (set) => {
    try {
        const res = await fetch(`https://api.tcgdex.net/v2/en/sets/${set}`);
        
        if (!res.ok)
        {
            throw new Error('Unable to load data');
        }

        const data = await res.json();
        return data.cards;
    }

    catch(err) {
        throw err;
    }
}