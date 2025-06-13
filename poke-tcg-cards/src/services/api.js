export const getSets = async () => {
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

export const getSetById = async (id) => {
    try {
        const sets = await getSets();
        const set = sets.find((set) => set.id.toLowerCase() === id.toLowerCase());

        if (!set) {
            throw new Error("Set not found");
        }
    
        return set;
    }
    
    catch (err) {
        throw err;
    }    
}

export const getCardsFromSet = async (set) => {
    try {
        const res = await fetch(`https://raw.githubusercontent.com/chase-manning/pokemon-tcg-pocket-cards/refs/heads/main/v4.json`);
        
        if (!res.ok)
        {
            throw new Error('Unable to load data');
        }

        const data = await res.json();
        const filteredCards = data.filter((card) => card.id.startsWith(`${set}-`));
        return filteredCards;
    }

    catch(err) {
        throw err;
    }
}

export const searchCards = async (query) => {
    try {
        const res = await fetch(`https://raw.githubusercontent.com/chase-manning/pokemon-tcg-pocket-cards/refs/heads/main/v4.json`);
        
        if (!res.ok)
        {
            throw new Error('Unable to load data');
        }

        const data = await res.json();
        const filteredCards = data.filter(card => card.id.startsWith(`${set}-`));
        return filteredCards;
    }

    catch(err) {
        throw err;
    }
}