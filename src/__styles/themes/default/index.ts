import { generate } from '@ant-design/colors'
import genControlHeight from '../shared/gen-control-height'
import genSizeMapToken from '../shared/gen-size-map-token'
import type { ColorPalettes, MapToken, SeedToken } from '../../interface'
import { defaultPresetColors } from '../seed'
import genColorMapToken from '../shared/gen-color-map-token'
import genCommonMapToken from '../shared/gen-common-map-token'
import genFontMapToken from '../shared/gen-font-map-token'
import type { PresetColorKeys } from '../../interface/preset-colors'
import { generateColorPalettes, generateNeutralColorPalettes } from './colors'

export default function derivative(token: SeedToken): MapToken {
  const colorPalettes = Object.keys(defaultPresetColors)
    .map((colorKey) => {
      const colors = generate(token[colorKey as PresetColorKeys])

      return new Array(10).fill(1).reduce((prev, _, i) => {
        prev[`${colorKey}-${i + 1}`] = colors[i]
        return prev
      }, {}) as ColorPalettes
    })
    .reduce((prev, cur) => {
      prev = {
        ...prev,
        ...cur,
      }
      return prev
    }, {} as ColorPalettes)

  return {
    ...token,
    ...colorPalettes,
    // Colors
    ...genColorMapToken(token, {
      generateColorPalettes,
      generateNeutralColorPalettes,
    }),
    // Font
    ...genFontMapToken(token.fontSize),
    // Size
    ...genSizeMapToken(token),
    // Height
    ...genControlHeight(token),
    // Others
    ...genCommonMapToken(token),
  }
}
