import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {

  constructor() {
  }

  save(key: string, value: string) {
    return new Promise((resolve, reject) => {
      try {
        sessionStorage.setItem(key, value);
      } catch (e) {
        return reject(e);
      }
      return resolve();
    });
  }

  get(key: string) {
    return new Promise((resolve, reject) => {
      try {
        const value = sessionStorage.getItem(key);
        return resolve(value);
      } catch (e) {
        return reject(e);
      }
    });
  }
}

