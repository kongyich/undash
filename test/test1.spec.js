import { describe, it, test, expect} from 'vitest'
import { testfn } from "../core/modules/testfn"
// The two tests marked with concurrent will be run in parallel

describe('testfn', () => {
  test('person is defined', () => {
    expect(testfn([1, 2])).toBe(1)
  })
  // it('serial test', async() => { /* ... */ })
  // it.concurrent('concurrent test 1', async() => { /* ... */ })
  // it.concurrent('concurrent test 2', async() => { /* ... */ })
})
