const assert = require('assert');
const child_process = require('child_process');

describe('cli', () => {
    it('runs greeting with presss argv[2] as name and prints to the CLI', () => {
        const output = child_process.execSync(
            'node ./bin/cli.js world',
            { encoding: 'utf8' }
        );
        assert.equal(output, 'hello world\n');
    });
});
