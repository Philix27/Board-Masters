import { appLogger } from "./log";

export function logFn(value?: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    //* This section of the code run instant.
    //*  Once the app runs and not when the function is called
    // descriptor.enumerable = true;
    // console.log("value:", value);
    // console.log("desc value:", descriptor.value);
    // console.log("target:", target);
    // console.log("propertyKey", propertyKey);

    //* our func with all of its content
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      const className = target.constructor.name;
      appLogger(className, String(propertyKey));
      return originalMethod.apply(this, args);
    };
  };
}
