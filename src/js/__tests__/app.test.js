/* eslint-disable eol-last */
import GameSaving from '../GameSaving';
import GameSavingLoader from '../app';

test('async', async () => {
  const char = new GameSaving(9, 1546300800, {
    id: 1, name: 'Hitman', level: 10, points: 2000,
  });
  const data = await GameSavingLoader.load();
  expect(data).toEqual(char);
});