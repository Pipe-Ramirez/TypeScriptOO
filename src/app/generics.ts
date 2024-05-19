function getValue<type>(value: type){
  const num:type = value;
  return value;
}

getValue<number>(12);
