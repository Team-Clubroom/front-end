export const classIf = (
  condition: boolean | string | null | undefined,
  className: string,
) => (condition ? className : "");
