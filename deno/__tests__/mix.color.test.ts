import { expect } from 'https://deno.land/x/expect@v0.2.6/mod.ts';
const test = Deno.test;
import ColorName from 'https://deno.land/x/sptruz_color_name@0.0.0-beta.0.1.0/mod.ts';
import convert from 'https://deno.land/x/sptruz_convert@0.0.0-beta.0.1.0/mod.ts';

import Mix from '../index.ts';

test('mix color hsl with rgb', async () => {
  const color = Mix(
    convert.hsl.string(ColorName.Red.hsl),
    convert.rgb.string(ColorName.Blue.rgb),
  );

  expect(color).toEqual({
    hex: '#800080',
    hexa: '#800080ff',
    rgb: [128, 0, 128],
    rgba: [128, 0, 128, 1],
    hsl: [300, 100, 25],
    hsla: [300, 100, 25, 1],
  });
});

test('mix color hsl with hex', async () => {
  const color = Mix(
    convert.hsl.string(ColorName.BabyBlue.hsl),
    ColorName.RadiantSunrise.hex,
    30,
  );

  expect(color).toEqual({
    hex: '#d8c35f',
    hexa: '#d8c35fff',
    rgb: [216, 195, 95],
    rgba: [216, 195, 95, 1],
    hsl: [50, 61, 61],
    hsla: [50, 61, 61, 1],
  });
});
