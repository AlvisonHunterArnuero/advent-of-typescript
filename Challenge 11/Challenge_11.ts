type SantaListProtector<ArbitraryType> = {
  readonly [Key in keyof ArbitraryType]: ArbitraryType[Key] extends (
    ...attributes: any[]
  ) => any
    ? ArbitraryType[Key]
    : ArbitraryType[Key] extends object
    ? SantaListProtector<ArbitraryType[Key]>
    : ArbitraryType[Key];
};
