module.exports = {
    resolve: {
        extensions: [".js", "jsx", ".ts", ".tsx"],
        alias: {
            react: "preact-compat",
            "react-dom": "preact-compat"
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loaders: [
                    require.resolve("style-loader"),
                    {
                        loader: require.resolve("css-loader"),
                        options: {
                            importLoaders: 1,
                            modules: true,
                            localIdentName: "[name]__[local]___[hash:base64:5]"
                        }
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    }
};
