const Tally = artifacts.require('Tally.sol');

contract('Tally', () => {
    it('Should set', async () => {
        const tally = await Tally.new();
        await tally.setCount(10);
        const count = await tally.getCount();
        assert(count.toString() === '10');
    });

    it('Should increment', async () => {
        const tally = await Tally.new();
        await tally.increase();
        const count = await tally.getCount();
        assert(count.toString() === '1');
    }); 
});