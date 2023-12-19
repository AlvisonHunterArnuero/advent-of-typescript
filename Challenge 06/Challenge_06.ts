type FilterChildrenBy<WHOLE_LIST, FILTERED> = WHOLE_LIST extends FILTERED
  ? never
  : WHOLE_LIST;
