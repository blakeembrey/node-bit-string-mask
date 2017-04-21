import { mask } from './index'

describe('bit-string-mask', () => {
  it('should use numbers to mask characters', () => {
    expect(mask('test', 0)).toEqual('test')
    expect(mask('test', 1)).toEqual('Test')
    expect(mask('test', 2)).toEqual('tEst')
    expect(mask('test', 3)).toEqual('TEst')
    expect(mask('test', 1000)).toEqual('tesT')

    // Show that all lowercase input works best (no conflicts).
    expect(mask('A-Test', 0)).toEqual('a-Test')
    expect(mask('A-Test', 1)).toEqual('A-Test')
    expect(mask('A-Test', 2)).toEqual('a-Test')
    expect(mask('A-Test', 3)).toEqual('A-Test')
  })
})
