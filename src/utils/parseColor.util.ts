import convert from '@sptruz/convert';
import parse from '@sptruz/parse';

const parseColor = (color: string) => {
  const result = parse(color);

  if (result === null) return null;

  if (result.type === 'hsl') {
    result.values = convert.hsl.rgb(result.values);
  }

  return result;
};

export default parseColor;
