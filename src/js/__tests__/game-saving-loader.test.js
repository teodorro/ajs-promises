import GameSavingLoader from '../game-saving-loader';

test('GameSavingLoader should load', async () => {
  const gameSaving = await GameSavingLoader.load();

  expect(gameSaving.id).toBe(9);
  expect(gameSaving.userInfo.name).toBe('Hitman');
});
