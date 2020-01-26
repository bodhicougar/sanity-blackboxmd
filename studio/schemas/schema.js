// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// Import user defined schema types
import config from './config.js';
import footer from './footer.js';
import home from './home.js';
import page from './page.js';
import elements from './elements.js';
import palette from './palette.js';
import section from './section.js';
import icons from './icons.js';
import highlights from './highlights.js';
import features from './features.js';
import spotlights from './spotlights.js';
import action from './action.js';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    config,
    footer,
    home,
    page,
    elements,
    palette,
    section,
    icons,
    highlights,
    features,
    spotlights,
    action
    ])
})
