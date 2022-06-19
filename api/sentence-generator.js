words = ["cat", "dog", "mouse", "horse", "cow", "pig", "sheep", "goat", "chicken", "duck", "snake", "fish", "frog", "turtle", "monkey", "bird"];

verbs = ["sits", "runs", "jumps", "sleeps", "eats", "drinks", "cries", "barks", "meows", "flies", "swims", "walks", "climbs", "flies"];

objects = ["on the floor", "in the air", "in the water", "in the sky", "in the ocean", "in the rain", "in the sun", "in the snow", "in the rain"];

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function getRandomVerb() {
    return verbs[Math.floor(Math.random() * verbs.length)];
}

function getRandomObject() {
    return objects[Math.floor(Math.random() * objects.length)];
}

function getRandomSentence() {
    return "da " + getRandomWord() + " " + getRandomVerb() + " " + getRandomObject();
}

var RandomSentence = getRandomSentence();

module.exports = (req, res) => {
    res.json([
        { sentence: RandomSentence},
    ]);
};
