export const coerce = {
  boolean,
};

function boolean(value: any): boolean {
  return value != null && `${value}` !== 'false';
}
