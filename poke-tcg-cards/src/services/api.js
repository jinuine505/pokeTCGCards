export const getSets = async () => {
    const res = await fetch('https://api.tcgdex.net/v2/en/series/tcgp', {
        cache: "no-cache"
    });

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