import Chance from 'chance';

export default function handler(req, res) {
    const chance = new Chance();
    const randomCharacter = {
        firstName: chance.first(),
        lastName: chance.last(),
        twitter: chance.twitter(),
        geohash: chance.geohash(),
    };
    res.status(200).json(randomCharacter)
}