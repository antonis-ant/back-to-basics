const logTestResults = (input, output, expected) => {
    console.log(`Input: [${input.join(', ')}]`);
    console.log(`output: [${output.join(', ')}]`);
    console.log(`Expected: [${expected.join(', ')}]`);
}

module.exports = {
    logTestResults
}