const path = require('path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const PATHS = {
    src: path.join(__dirname, 'src'),
    app: path.join(__dirname, 'src/app'),
    build: path.join(__dirname, 'build')
}

module.exports = [
    {
        entry: {
            server: PATHS.src + '/server.js',
        },
        output: {
            path: PATHS.build,
            filename: '[name].js',
        },
        target: 'node',
        node: {
            console: false,
            global: false,
            process: false,
            Buffer: false,
            __filename: false,
            __dirname: false
        },
        externals: nodeExternals(),
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: ['/node_modules/'],
                    use: [{
                        loader: 'babel-loader',
                    }]
                }
            ]
        },
        resolve: {
            modules: [
                PATHS.src,
                'node_modules'
            ]
        }
    },
    {
        target: 'node',
        entry: {
            browser: PATHS.app + '/browser.js',
        },
        output: {
            path: PATHS.build,
            filename: 'bundle.js'
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: ['/node_modules/'],
                    use: [{
                        loader: 'babel-loader',
                    }]
                }
            ]
        },
        resolve: {
            modules: [
                PATHS.src,
                'node_modules'
            ]
        }

    }];
