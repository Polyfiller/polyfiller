'use strict';

export default (grunt, options) => {
    return {
        api: {
            src: 'cache/tests/api.js',

            options: {
                //coverage      : true,
                ui            : 'bdd',
                reporter      : 'spec',
                timeout       : 10 * 1000,
                root          : 'cache/',
                coverageFolder: 'cache/coverage',
                reportFormats : ['lcov'],
                print         : 'both',

                excludes: [
                    'trunk/catalog/**/*.js',
                    '{utils,tools}/**/*.js'
                ],

                check: {
                    lines     : 80,
                    statements: 50,
                    branches  : 50,
                    functions : 90
                }
            }
        }
    };
};
