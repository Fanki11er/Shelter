export class Utils {
  public static getAgeEnding(age: number, results: string[] = ["", "", ""]) {
    if (age === 1) {
      return results[0];
    } else if (age % 10 > 1 && age % 10 < 5) {
      return results[1];
    } else {
      return results[2];
    }
  }
}
