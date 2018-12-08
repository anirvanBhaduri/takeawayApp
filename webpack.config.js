const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        index: [
            // load in with random port to ensure no clashes
            "webpack-dev-server/client?http://localhost:10590",
            "./src/index.tsx",
            "./src/index.scss",
        ]
    },
   output: {
        filename: "bundle.js",
        path: __dirname + "/dist/"
    },

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    // For the purpose of this assignment, we'll keep the mode
    // to development.
    mode: "development",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },

            // All files with a '.scss' extension will be handled by 'sass-loader'.
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: ["css-loader", "sass-loader"]
                })
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: "styles.css"
        })
    ],

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    }
};