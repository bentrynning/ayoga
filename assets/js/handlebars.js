import __templating_engine from 'handlebars_core';
import hbs_helpers_loader from '../assets/hbs_helpers/hbs_helpers.js';

export default function(__templating_engine) {

    hbs_helpers_loader(__templating_engine);

    return __templating_engine; 
};