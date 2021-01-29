import { FILE_TYPE_CSS, FILE_TYPE_JS } from '@bundle-stats/utils/lib-esm/config/file-types';

import { ASSET_FILTERS, COMPONENT, PACKAGE_FILTERS, SECTIONS } from './constants';
import { getAssetEntryTypeFilters, getAssetFileTypeFilters } from './utils';
import I18N from './i18n';

export const TOTALS = {
  section: SECTIONS.TOTALS,
  title: I18N.COMPONENT_LINK_TOTALS,
};

export const BUNDLE_ASSETS_INITIAL_JS = {
  section: SECTIONS.ASSETS,
  title: I18N.COMPONENT_LINK_BUNDLE_ASSETS_INITIAL_JS,
  params: {
    [COMPONENT.BUNDLE_ASSETS]: {
      filters: {
        [ASSET_FILTERS.CHANGED]: false,
        [`entryTypes.${ASSET_FILTERS.INITIAL}`]: true,
        [`fileTypes.${FILE_TYPE_JS}`]: true,
      },
    },
  },
};

export const BUNDLE_ASSETS_INITIAL_CSS = {
  section: SECTIONS.ASSETS,
  title: I18N.COMPONENT_LINK_BUNDLE_ASSETS_INITIAL_CSS,
  params: {
    [COMPONENT.BUNDLE_ASSETS]: {
      filters: {
        [ASSET_FILTERS.CHANGED]: false,
        [`entryTypes.${ASSET_FILTERS.INITIAL}`]: true,
        [`fileTypes.${FILE_TYPE_CSS}`]: true,
      },
    },
  },
};

export const BUNDLE_ASSETS_CACHE_INVALIDATION = {
  section: SECTIONS.ASSETS,
  title: I18N.COMPONENT_LINK_BUNDLE_ASSETS_CACHE_INVALIDATION,
  params: {
    [COMPONENT.BUNDLE_ASSETS]: {
      filters: {
        [ASSET_FILTERS.CHANGED]: true,
        ...getAssetEntryTypeFilters(true),
        ...getAssetFileTypeFilters(true),
      },
    },
  },
};

export const BUNDLE_ASSETS_COUNT = {
  section: SECTIONS.ASSETS,
  title: I18N.COMPONENT_LINK_BUNDLE_ASSETS_COUNT,
  params: {
    [COMPONENT.BUNDLE_ASSETS]: {
      filters: {
        [ASSET_FILTERS.CHANGED]: false,
        ...getAssetEntryTypeFilters(true),
        ...getAssetFileTypeFilters(true),
      },
    },
  },
};

export const BUNDLE_ASSETS_CHUNK_COUNT = {
  section: SECTIONS.ASSETS,
  title: I18N.COMPONENT_LINK_BUNDLE_ASSETS_CHUNK_COUNT,
  params: {
    [COMPONENT.BUNDLE_ASSETS]: {
      filters: {
        [ASSET_FILTERS.CHANGED]: false,
        [`entryTypes.${ASSET_FILTERS.CHUNK}`]: true,
        ...getAssetFileTypeFilters(true),
      },
    },
  },
};

export const BUNDLE_MODULES = {
  section: SECTIONS.MODULES,
  title: I18N.COMPONENT_LINK_MODULES,
};

export const BUNLDE_PACKAGES_COUNT = {
  section: SECTIONS.PACKAGES,
  title: I18N.COMPONENT_LINK_PACKAGES_COUNT,
  params: {
    [COMPONENT.BUNDLE_PACKAGES]: {
      filters: {
        [PACKAGE_FILTERS.CHANGED]: false,
      },
    },
  },
};

export const BUNDLE_PACKAGES_DUPLICATE = {
  section: SECTIONS.PACKAGES,
  title: I18N.COMPONENT_LINK_PACKAGES_DUPLICATE,
  params: {
    [COMPONENT.BUNDLE_PACKAGES]: {
      filters: {
        [PACKAGE_FILTERS.CHANGED]: false,
        [PACKAGE_FILTERS.DUPLICATE]: true,
      },
    },
  },
};
