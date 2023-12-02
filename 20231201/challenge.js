function findFirstRepeated(gifts) {
    gifts ??= []
    let counters = new Map();
    for (let i = 0; i < gifts.length; i++) {
        const gift = gifts[i];
        let counter = counters.get(gift) ?? 0;
        counter++;
        if (counter == 2) {
            return gift;
        }
        counters.set(gift, counter)
    }
    return -1;
}

export default findFirstRepeated;