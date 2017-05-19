
import assert from 'assert'

suite('Drag and drop', () => {
  test('same list', async () => {
    await browser.url('/')
    await browser.waitForVisible('.ItemWrapper:nth-child(1)')
    await browser.customDragDrop('.ItemWrapper:nth-child(1)', '.ItemWrapper:nth-child(2)')

    assert(browser.isVisible('.ItemWrapper:nth-child(2)'))
  })
})
