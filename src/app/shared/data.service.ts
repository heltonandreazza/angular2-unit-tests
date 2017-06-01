export class DataService {
  getDetails() {
    const resultPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('RealData');
      }, 1500);
    });
    return resultPromise;
  }
}