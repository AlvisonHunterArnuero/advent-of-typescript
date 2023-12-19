type SantasList<BAD extends readonly any[], GOOD extends readonly any[]> = [
  ...BAD,
  ...GOOD
];
