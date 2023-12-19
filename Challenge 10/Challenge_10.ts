type StreetSuffixTester<
  Street extends string,
  Prefix extends string
> = Street extends `${infer _}${Prefix}${infer _}` ? true : false;
