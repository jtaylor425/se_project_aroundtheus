export default class Section {
  constructor({ items, renderer }, classSelector) {
    this._renderItems = items;
    this._renderer = renderer;
    this._class = document.querySelector(classSelector);
  }
  renderItems() {
    this.renderItems.forEach((item) => {
      this._renderer(item);
    });
  }
  addItem(element) {
    this._container.append(element);
  }
}
