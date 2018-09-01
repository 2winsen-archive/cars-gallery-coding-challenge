export const getHocDisplayName = (name, WrappedComponent) =>
  `${name}(${WrappedComponent.name || WrappedComponent.displayName})`;

export const compose = (...fns) => (firstArg, ...restArgs) => {
  if (fns.length === 1) {
    return fns[0](firstArg, ...restArgs);
  }
  return fns.reduce((f, g) => g(f(firstArg, ...restArgs), ...restArgs));
};
