export const formatId = (id) => {
    return id.toLowerCase().replace(/-/g, '');
}

export const getSetById = (sets, setId) => {
    // Assign the set from given setId, or else null
    if (!Array.isArray(sets)) return null;
    return sets.find((set) => formatId(set.id) === formatId(setId));
}