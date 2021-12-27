export class Menu {
  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get total() {
    return this._total;
  }

  set total(total: number) {
    this._total = total;
  }

  constructor(
    private _name: string,
    private _total: number
  ) { }

  add() {
    this._total++;
  }

  subtract() {
    this._total--;
  }
}
