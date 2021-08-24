// https://www.npmjs.com/package/json.date-extensions
declare interface JSON {
  dateParser(): void;
  parseWithDate(json: unknown): any;
  useDateParser(global?: boolean): void;
  dateStringToDate(json: unknown): any;
}
