import { mask } from './index'

describe('bit-string-mask', () => {
  it('should use numbers to mask characters', () => {
    expect(mask('test', 0)).toEqual('test')
    expect(mask('test', 1)).toEqual('Test')
    expect(mask('test', 2)).toEqual('tEst')
    expect(mask('test', 3)).toEqual('TEst')
    expect(mask('test', 1000)).toEqual('tesT')

    expect(mask('A-Test', 0)).toEqual('A-Test')
    expect(mask('A-Test', 1)).toEqual('a-Test')
    expect(mask('A-Test', 2)).toEqual('A-test')
    expect(mask('A-Test', 3)).toEqual('a-test')
  })
})
