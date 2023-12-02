import findFirstRepeated  from './challenge.js';

const giftIds = [2, 1, 3, 5, 3, 2]
const firstRepeatedId = findFirstRepeated(giftIds)
console.assert(firstRepeatedId == 3)

const giftIds2 = [1, 2, 3, 4]
const firstRepeatedId2 = findFirstRepeated(giftIds2)
console.assert(firstRepeatedId2 == -1)

const giftIds3 = [5, 1, 5, 1]
const firstRepeatedId3 = findFirstRepeated(giftIds3)
console.assert(firstRepeatedId3 == 5)

const giftIds4 = null
const firstRepeatedId4 = findFirstRepeated(giftIds4)
console.assert(firstRepeatedId4 == -1)


