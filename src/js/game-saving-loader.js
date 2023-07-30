import read from './reader';
import json from './parser';
import GameSaving from './game-saving';

export default class GameSavingLoader {
  static load() {
    return read()
      .then((response) => json(response))
      .then((data) => new Promise((resolve) => {
        const gsJson = JSON.parse(data);
        const gameSaving = new GameSaving(
          gsJson.id,
          gsJson.created,
          gsJson.userInfo.id,
          gsJson.userInfo.name,
          gsJson.userInfo.level,
          gsJson.userInfo.points,
        );
        resolve(gameSaving);
      }))
      .catch((error) => {
        console.log(error);
      });
  }
}
