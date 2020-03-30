const gererateUniqueId = require('../../src/utils/generateUniqueId')

describe('Generate Unique ID', () => {
    it('should gererate an unique ID', () => {
        const id = gererateUniqueId();

        expect(id).toHaveLength(8);
    })
});