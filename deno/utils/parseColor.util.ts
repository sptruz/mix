import convert from 'https://deno.land/x/sptruz_convert@0.0.0-beta.0.0.1/mod.ts';
import parse from 'https://deno.land/x/sptruz_parse@0.0.0-beta.0.0.0/mod.ts';

const parseColor = (color: string) => {
  const result = parse(color);

  if (result === null) return null;

  if (result.type === 'hsl') {
    result.values = convert.hsl.rgb(result.values);
  }

  return result;
};

export default parseColor;
