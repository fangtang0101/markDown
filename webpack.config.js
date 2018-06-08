module.exports = {
    entry: {
        bundle1: './main1.js'
    },
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.md$/,
            use: [{
                    loader: "html-loader"
                },
                {
                    loader: "markdown-loader",
                    options: {
                    }
                }
            ]
        }]
    }
};