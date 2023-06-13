import read from './__mocks__/reader';
import json from './__mocks__/parser';

export default class GameSavingLoader {
  static load() {
    read()
      .then((data) => json(data))
      .then((string) => new Promise((resolve) => {
        resolve(JSON.parse(string));
      }));
  }
}
