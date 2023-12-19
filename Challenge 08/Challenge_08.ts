type RemoveNaughtyChildren<T> = Omit<
  { [K in keyof T as `${string & K}`]: T[K] },
  `naughty_${string}`
>;
