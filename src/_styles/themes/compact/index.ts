import genControlHeight from '../shared/gen-control-height'
import type { DerivativeFunc, MapToken, SeedToken } from '../../interface'
import defaultAlgorithm from '../default'
import genFontMapToken from '../shared/gen-font-size'
import genCompactSizeMapToken from './gen-compact-size-map-token'

const derivative: DerivativeFunc<SeedToken, MapToken> = (token, mapToken) => {
  const mergedMapToken = mapToken ?? defaultAlgorithm(token)

  const fontSize = mergedMapToken.fontSizeSM // Smaller size font-size as base
  const controlHeight = mergedMapToken.controlHeight - 4

  return {
    ...mergedMapToken,
    ...genCompactSizeMapToken(mapToken ?? token),

    // font
    ...genFontMapToken(fontSize),

    // controlHeight
    controlHeight,
    ...genControlHeight({ ...mergedMapToken, controlHeight }),
  }
}

export default derivative
