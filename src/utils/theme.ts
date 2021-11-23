export default function setTheme(isLight: boolean): string[] {
  let primary: string;
  let secondary: string;
  if (isLight) {
    primary = "light";
    secondary = "dark";
  } else {
    primary = "dark";
    secondary = "light";
  }

  return [primary, secondary];
}
