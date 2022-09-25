<div align="center">
  <img src="https://raw.githubusercontent.com/sptruz/mix/main/assets/logo.svg" alt="@MKAbuMattar/sptruz"
   width="400" height="200"
  />

  <h1>@sptruz/mix</h1>

<a href="https://sptruz.vercel.app/">https://sptruz.vercel.app/</a>

  <p>@sptruz/mix is a package for mixing two colors together in variable proportion.</p>
</div>

## Installation

### Node/npm

```sh
#npm
npm install --save @sptruz/mix

#yarn
yarn add @sptruz/mix

#pnpm
pnpm add @sptruz/mix
```

### Deno

Unlike Node, Deno doesn't use a package management like NPM and instead depends on direct URL imports. You can access @sptruz/mix on deno.land/x. This is how the most recent version may be imported:

You can also specify a particular version:

```ts
import * as sptruzMix from 'https://deno.land/x/sptruz_mix@0.0.0-beta.0.0.1/mod.ts';
```

or letest version:

```ts
import * as sptruzMix from 'https://deno.land/x/sptruz_mix/mod.ts';
```

### CDN

```html
<!-- jsDelivr -->
<script src="https://cdn.jsdelivr.net/npm/@sptruz/mix/lib/index.umd.js"></script>

<!-- Unpkg -->
<script src="https://unpkg.com/@sptruz/mix/lib/index.umd.js"></script>
```

> NOTE: There isn't much of a change in how it's used, but the remainder of this README assumes you're using npm and importing straight from the @sptruz/mix.

## Basic Usage

```ts
import sptruzMix from '@sptruz/mix';

(() => {
  // Mixin two HEX/a colors
  console.log(sptruzMix('#ff0000', '#0000ff'));
  // output:
  /*
    {
      hex: '#800080',
      hexa: '#800080ff',
      rgb: [ 128, 0, 128 ],
      rgba: [ 128, 0, 128, 1 ],
      hsl: [ 300, 100, 25 ],
      hsla: [ 300, 100, 25, 1 ]
    }
  */

  // mixing percentage can be set as third argument (default is 50) a value between 0 and 100
  console.log(sptruzMix('#ff0000', '#0000ff', 0.5));
  // output:
  /*
    {
      hex: '#0100fe',
      hexa: '#0100feff',
      rgb: [ 1, 0, 254 ],
      rgba: [ 1, 0, 254, 1 ],
      hsl: [ 240, 100, 50 ],
      hsla: [ 240, 100, 50, 1 ]
    }
  */

  console.log(sptruzMix('#ff00005f', '#00ff003f'));
  /*
    {
      hex: '#907000',
      hexa: '#9070004f',
      rgb: [ 144, 112, 0 ],
      rgba: [ 144, 112, 0, 0.30980392 ],
      hsl: [ 47, 100, 28 ],
      hsla: [ 47, 100, 28, 0.30980392 ]
    }
  */

  // Mixin two RGB/a colors
  console.log(sptruzMix('rgb(255, 0, 0)', 'rgb(0, 0, 255)'));
  // output:
  /*
    {
      hex: '#800080',
      hexa: '#800080ff',
      rgb: [ 128, 0, 128 ],
      rgba: [ 128, 0, 128, 1 ],
      hsl: [ 300, 100, 25 ],
      hsla: [ 300, 100, 25, 1 ]
    }
  */

  // Mixin two HSL/a colors
  console.log(sptruzMix('hsl(0, 100%, 50%)', 'hsl(240, 100%, 50%)'));
  // output:
  /*
    {
      hex: '#800080',
      hexa: '#800080ff',
      rgb: [ 128, 0, 128 ],
      rgba: [ 128, 0, 128, 1 ],
      hsl: [ 300, 100, 25 ],
      hsla: [ 300, 100, 25, 1 ]
    }
  */

  // Mixin two colors by name
  console.log(sptruzMix('babyblue', 'radiantsunrise'));
  // output:
  /*
    {
      hex: '#c8c78d',
      hexa: '#c8c78dff',
      rgb: [ 200, 199, 141 ],
      rgba: [ 200, 199, 141, 1 ],
      hsl: [ 59, 35, 67 ],
      hsla: [ 59, 35, 67, 1 ]
    }
  */

  // Mixin two HSL/a & RGB/a colors
  console.log(sptruzMix('hsl(0, 100%, 50%)', 'rgb(0, 0, 255)'));
  // output:
  /*
    {
      hex: '#800080',
      hexa: '#800080ff',
      rgb: [ 128, 0, 128 ],
      rgba: [ 128, 0, 128, 1 ],
      hsl: [ 300, 100, 25 ],
      hsla: [ 300, 100, 25, 1 ]
    }
  */
})();
```

## Supports

- color value
  - HEX/a (hexadecimal) | example: #FF0000, #FF0000FF, #F00, #F00F
  - RGB/a (red, green, blue) | example: rgb(255, 0, 0), rgb(100%, 0%, 0%), rgba(255, 0, 0, 0.5), rgba(100%, 0%, 0%, 50%)
  - HSL/a (hue, saturation, lightness) | example: hsl(0, 100%, 50%), hsl(0turn, 100%, 50%), hsl(0rad, 100%, 50%), hsl(0deg, 100%, 50%), hsla(0, 100%, 50%, 0.5), hsla(0turn, 100%, 50%, 50%), hsla(0rad, 100%, 50%, 50%), hsla(0deg, 100%, 50%, 50%)
- color name
  - example: red, green, blue, yellow, orange, purple, pink, brown, black, white, gray, silver, gold, cyan, magenta, lime, maroon, navy, olive, teal, aqua, fuchsia, transparent.

## License

@sptruz/parse is licensed under the [MIT License](https://raw.githubusercontent.com/sptruz/mix/main/LICENSE).

Created with ♥ by [@MKAbuMattar](https://github.com/MKAbuMattar).
