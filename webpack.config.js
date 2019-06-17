const path = require('path');

module.exports = {
    resolve: {
        alias: {
            'components': path.resolve(__dirname, 'src/components'),
            'config': path.resolve(__dirname, 'src/config'),
            'containers': path.resolve(__dirname, 'src/containers'),
            'layouts': path.resolve(__dirname, 'src/layouts'),
            'lib': path.resolve(__dirname, 'src/lib'),
            'models': path.resolve(__dirname, 'src/models'),
            'packages': path.resolve(__dirname, 'src/packages'),
        },
        extensions: ['.js', '.ts', '.tsx']
    }
};
