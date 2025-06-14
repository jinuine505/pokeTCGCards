export const getSets = async () => {
    const res = await fetch('https://api.tcgdex.net/v2/en/series/tcgp');

    if (!res.ok) {
        throw new Error('Unable to load sets');
    }
    const data = await res.json();
    return data.sets;
}

export const getCards = async () => {
    const res = await fetch('https://raw.githubusercontent.com/chase-manning/pokemon-tcg-pocket-cards/refs/heads/main/v4.json');

    if (!res.ok) {
        throw new Error('Unable to load cards');
    }
    const data = await res.json();
    return data;
}

export const getSetById = async (id) => {
    try {
        const sets = await getSets();
        const set = sets.find((set) => set.id.toLowerCase().replace(/-/g, '') === id.toLowerCase().replace(/-/g, ''));

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

        if (!res.ok) {
            throw new Error('Unable to load data');
        }

        const data = await res.json();
        const formattedSet = set.toLowerCase().replace(/-/g, '');
        const filteredCards = data.filter((card) => card.id.startsWith(`${formattedSet}-`));
        return filteredCards;
    }

    catch (err) {
        throw err;
    }
}

export const getCardFromSetAndNum = async (set, cardNum) => {
    try {
        const cards = await getCardsFromSet(set);
        const card = cards.find((card) => (card.id.split("-")[1] === cardNum))

        if (!card) {
            throw new Error('Card not found');
        }
        return card;
    }

    catch (err) {
        throw err;
    }
}

export const searchCards = async (query) => {
    try {
        const res = await fetch(`https://raw.githubusercontent.com/chase-manning/pokemon-tcg-pocket-cards/refs/heads/main/v4.json`);

        if (!res.ok) {
            throw new Error('Unable to load data');
        }

        const data = await res.json();
        const filteredCards = data.filter(card => card.id.startsWith(`${set}-`));
        return filteredCards;
    }

    catch (err) {
        throw err;
    }
}