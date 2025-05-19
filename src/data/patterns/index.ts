
import { factoryPattern } from './factory';
import { strategyPattern } from './strategy';
import { decoratorPattern } from './decorator';
import { observerPattern } from './observer';
import { adapterPattern } from './adapter';
import { dependencyInjectionPattern } from './di';

// Export all patterns individually
export {
  factoryPattern,
  strategyPattern,
  decoratorPattern,
  observerPattern,
  adapterPattern,
  dependencyInjectionPattern
};

// Export combined array for compatibility with existing code
export const designPatterns = [
  factoryPattern,
  strategyPattern,
  decoratorPattern,
  observerPattern,
  adapterPattern,
  dependencyInjectionPattern
];
