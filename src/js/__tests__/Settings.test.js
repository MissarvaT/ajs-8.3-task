import Settings from '../Settings';

test('устанавливает пользовательстую опцию', () => {
  const settings = new Settings();
  settings.setOption('theme', 'light');

  expect(settings.userSettings.get('theme')).toBe('light');
});

test('выдает текущие настройки', () => {
  const settings = new Settings();
  settings.setOption('theme', 'light');
  settings.setOption('difficulty', 'nightmare');

  expect(Array.from(settings.settings)).toEqual([
    ['theme', 'light'],
    ['music', 'trance'],
    ['difficulty', 'nightmare'],
  ]);
});
