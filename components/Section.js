export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderItems = items;
    this._renderer = renderer;
    this._class = document.querySelector(containerSelector);
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
