export function appLogger(...rest: string[]) {
  console.debug(rest.join(" --> "));
}

appLogger.err = (...rest: string[]) => {
  console.error(rest.join(" --> "));
};

appLogger.debug = (...rest: string[]) => {
  console.debug(rest.join(" --> "));
};
