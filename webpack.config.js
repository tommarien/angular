// webpack.config.js
module.exports = {
    entry: './main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
        publicPath: "/assets/",
    },
    resolve: {
        root: __dirname,
        extensions: ['', '.ts', '.js', '.json'],
    },
};