const {
    override,
    fixBabelImports,
    addLessLoader,
    addDecoratorsLegacy,
    useBabelRc,
    disableEsLint
} = require('customize-cra');
const webpack = require("webpack");
const myPlugin = config => {
    config.devtool = false;
    // Object.assign(config.module,{unknownContextCritical : false})
    // Object.assign(config.output,{
    //     publicPath: '/',
    //     chunkFilename: 'static/js/[name].[hash:5].js',
    //     filename: 'static/js/[name].[hash].chunk.js'},
    // )
  
    config.plugins.push(new webpack.ProvidePlugin({//全局使用React/ReactDOM不需要引入
        "React": "react",
        "ReactDOM": "react-dom",
    }));
    return config;
}
module.exports = override(
    myPlugin,
    addDecoratorsLegacy(),//装饰器
    useBabelRc(),//useBabelRc
    disableEsLint(),//禁用eslint
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({//修改antd主题配置
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#04c58e' },
    }),
);