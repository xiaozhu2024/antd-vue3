export const PresetColors = [
  'blue',
  'purple',
  'cyan',
  'green',
  'magenta',
  'pink',
  'red',
  'orange',
  'yellow',
  'volcano',
  'geekblue',
  'lime',
  'gold',
] as const

type PresetColorKey = typeof PresetColors[number]

export type PresetColorType = Record<PresetColorKey, string>

export type PresetColorKeys = keyof PresetColorType

type ColorPaletteKeyIndex = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

export type ColorPalettes = {
  [key in `${keyof PresetColorType}-${ColorPaletteKeyIndex}`]: string;
}
