import read from './__mocks__/reader';
import json from './__mocks__/parser';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      read()
        .then((data) => json(data))
        .then((result) => JSON.parse(result))
        .then((saving) => resolve(saving));
    });
  }
}
