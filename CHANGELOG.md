# Changelog


### 0.2.0
Added itemCacheKey prop to be able to specify a custom key for caching Item components. This comes handy if underlaying Item data changes (like a title) and needs to be re-rendered to reflect new height.

Added `scrollToList` and `scrollToAlignment` to set kanban scroll to desired list.

Fixed items not being refreshing when moving lists around.

Updated package.json and added some badges to the README.

### 0.1.1
`onDropRow` callback is now invoked only when dropping into a valid target.

Defended against null component received when hovering over an unmounted row.

Remove dragDropManager prop type warning.


### 0.1.0
Added `overscanListCount` and `overscanRowCount` props to be able to configure the number of extra rendered items. You may use this if you want to tune up kanban performance.

Use `id` as key value for SortableItem and SortableList components. This avoids wierd behaviour when changing component's internal state.

### 0.0.12
Now `Kanban` component gets `DragDropManager` from context or creates a new one. This is useful for scenarios where react-dnd is used inside decorators.

### 0.0.11
Added guard in SortableList component when list reference is not set.

### 0.0.10
Fixed a bug that was causing out of index errors when moving an row between lists.

Now when moving a row to a list, the row will be placed at the beginning of that list (previously was at the end).

### 0.0.9
Updated PropTypes for List decorator. Also pass `rows` prop.

### 0.0.8
Pass `containerWidth` for preview components

Use explicit props for decorated components

### 0.0.7
Use generated lib for demo application

### 0.0.6
Added jest test runner :green_apple:. Also added tests for `updateList` module.

Update param names for `moveRow` and `moveList` callbacks on `SortableList` component.

Defend wierd out of bounds edge case when dragging too fast. Need more investigation though.

Added travis ci.

### 0.0.5
Pass `listIndex` to `onDropList` callback.

### 0.0.4
Pass `rowIndex` and `listIndex` to `onDropRow` callback.

### 0.0.3
Pass updated list to `onDropRow` and `onDropList` callbacks.

### 0.0.2
Fixed missing dom-helpers dependency.

### 0.0.1
Initial release.
