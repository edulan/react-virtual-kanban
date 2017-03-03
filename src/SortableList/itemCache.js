// Cache singleton
const cachedItems = new Map();

export class ItemCache {
  constructor(items, cacheKey, store = cachedItems) {
    this.items = items;
    this.cacheKey = cacheKey;
    this.store = store;
  }

  clearAllRowHeights() {
    this.store.clear();
  }

  clearRowHeight(index) {
    const item = this.items[index];

    this.store.delete(this.cacheKey(item));
  }

  getRowHeight(index) {
    const item = this.items[index];

    return this.store.get(this.cacheKey(item));
  }

  setRowHeight(index, height) {
    const item = this.items[index];

    this.store.set(this.cacheKey(item), height);
  }

  // Not implemented

  clearAllColumnWidths() {}
  clearColumnWidth(index) {}
  getColumnWidth(index) {}
  setColumnWidth(index, width) {}
}
