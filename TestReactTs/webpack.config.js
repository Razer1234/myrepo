/// <binding AfterBuild='Run - Development' />
var webpack = require('webpack');
var path = require('path');

//var commCommonsChunkPlugin = new webpack.Plugin.CommonsChunkPlugin;

module.exports = {
    cache: true,
    entry: path.join(__dirname, "dist", "index.js"),
    output: {
        path: path.resolve(__dirname, 'Scripts', 'App'),
        filename: "portal.bundle.js",
        sourceMapFilename: "portal.bundle.js.map"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    resolve: {
        modules: [path.resolve(__dirname, "dist"), "node_modules"]
    },

    module: {
        rules: [
            {
                // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.         
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                include: [
                    path.join(__dirname, "dist") //important for performance!
                ],
                options: {
                    presets: ["es2015"]
                },
                //query: {
                //    cacheDirectory: true, //important for performance
                //    presets: ['es2015'],
                //    //plugins: ["transform-regenerator"],
                //}
            },
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react-localization": "LocalizedStrings",
        "react": "React",
        "react-dom": "ReactDOM"
    },
    //plugins: [
    //    // separate common code
    //    new commCommonsChunkPlugin('portal.bundle.js'),
    //    // new ExtractTextPlugin("[name].css")
    //]

};