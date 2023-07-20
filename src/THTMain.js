const fs = require('fs');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);

async function countWordsAndChars(input) {
    let charCount, wordCount;
    
    if (typeof input === 'string' && fs.existsSync(input)) {
        try {
            input = await readFileAsync(input, 'utf8');
        } catch (error) {
            console.error("Error reading the file:", error);
            return { error, chars: -1, words: -1 };
        }
    }
    
    charCount = input.length;
    wordCount = input.match(/\b\w+\b/g).length;
    
    return { chars: charCount, words: wordCount };
}

module.exports = countWordsAndChars;