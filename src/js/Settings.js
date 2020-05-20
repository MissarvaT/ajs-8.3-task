export default class Settings {
  constructor() {
    this.defaultSettings = new Map([['theme', 'dark'], ['music', 'trance'], ['difficulty', 'easy']]);

    this.userSettings = new Map();

    this.options = {
      theme: ['dark', 'light', 'gray'],
      music: ['trance', 'pop', 'rock', 'chillout', 'off'],
      difficulty: ['easy', 'normal', 'hard', 'nightmare'],
    };
  }

  setOption(name, value) {
    if (this.options[name].includes(value)) {
      this.userSettings.set(name, value);
    }
  }

  get settings() {
    const settingsToShow = this.defaultSettings;
    const keys = [...this.userSettings.keys()];
    keys.forEach((key) => {
      settingsToShow.set(key, this.userSettings.get(key));
    });
    return settingsToShow;
  }
}
