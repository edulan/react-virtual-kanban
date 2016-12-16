// Cache singleton
const cachedRows = new Map();

export class ItemCache {
  constructor(items, store = cachedRows) {
    this.items = items;
    this.store = store;
  }

  clearAllRowHeights() {
    this.store.clear();
  }

  clearRowHeight(index) {
    const { id } = this.items[index];

    this.store.delete(id);
  }

  getRowHeight(index) {
    const { id } = this.items[index];

    return this.store.get(id);
  }

  setRowHeight(index, height) {
    const { id } = this.items[index];

    this.store.set(id, height);
  }

  // Not implemented

  clearAllColumnWidths() {}
  clearColumnWidth(index) {}
  getColumnWidth(index) {}
  setColumnWidth(index, width) {}
}
