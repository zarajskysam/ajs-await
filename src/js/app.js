/* eslint-disable eol-last */
import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const jsonData = await json(data);
      const jsonParse = await JSON.parse(jsonData);
      return new GameSaving(jsonParse.id, jsonParse.created, jsonParse.userInfo);
    } catch (error) {
      return error;
    }
  }
}