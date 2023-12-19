type FindSanta<
  T extends Array<any>,
  Indice extends Array<any> = []
> = T extends [infer Inicio, ...infer Fin]
  ? Inicio extends "🎅🏼"
    ? Indice["length"]
    : FindSanta<Fin, [...Indice, Inicio]>
  : never;
