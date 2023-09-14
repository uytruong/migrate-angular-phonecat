export class CheckmarkFilter {
  public static Factory() {
    return (input: boolean) => input ? '\u2713' : '\u2718';
  }
}
