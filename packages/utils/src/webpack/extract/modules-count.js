import get from 'lodash/get';
import uniq from 'lodash/uniq';

export const extractModulesCount = (webpackStats, currentExtractedData = {}) => {
  const modules = get(currentExtractedData, 'metrics.modules', {});

  const value = uniq(Object.values(modules).map(
    ({ modules: chunkModules }) => Object.values(chunkModules),
  ).flat().map(({ name }) => name)).length;

  return { metrics: { moduleCount: { value } } };
};
