export const classIf = (
  condition: boolean | string | null,
  className: string,
) => (condition ? className : "");
