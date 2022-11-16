export class Utils {
  public static getAgeEnding(age: number) {
    if (age === 1) {
      return "rok";
    } else if (age % 10 > 1 && age % 10 < 5) {
      return "lata";
    } else {
      return "lat";
    }
  }
}
