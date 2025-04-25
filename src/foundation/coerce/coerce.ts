export function boolean(value: any): boolean {
  return value != null && `${value}` !== 'false';
}
