/**
 * 遵循commonJS规范
 * require、module.exports
 * 
 * 入口文件路径  建议 绝对路径
 * 出口文件路径  path filename   必须是绝对路径
 * loader 作用：将不能被识别的文件通过响应的loader来转义成webpack可以识别的代码
 * 
 * css文件的抽离：插件  extract-text-webpack-plugin@next
 */
const htmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const bodyParser = require('body-parser')
const path = require('path')
module.exports = {
    mode: 'development',//生产环境：打包上线production；开发环境:程序员敲代码时development
    entry: './src/main.js',//相对绝对都行
    // entry:{
    //     m:'./main.js',
    //     m1:'./main1.js'
    // },
    output: {
        path: path.resolve(__dirname, 'dist'),//绝对路径
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,   //解析js文件
            exclude: /node_modules/, //排除     包含 include
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['@babel/preset-env']
                }
            }
        }, {
            test: /\.css$/,//正则
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: 'css-loader'
            })
            // use:['style-loader','css-loader']  //多个loader的执行循序，从右往左
        }, {
            test: /\.(scss|sass)$/,  //sass-loader node-sass
            use: ['style-loader', 'css-loader', 'sass-loader']  //多个loader的执行循序，从右往左
        },
        {//  解析文件：图片以及iconfont
            test: /\.(png|jpeg|jpg|gif|eot|svg|ttf|woff|woff2)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 20000,//限制文件大小
                    name: '[path][name].[ext]'  //可以解析img标签
                }
            }]
        }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            title: '我的第一个webpack项目'
        }),
        new ExtractTextPlugin("styles.css"),
    ],
    devServer: {//服务
        contentBase: './dist',
        port: 8081,
        host: 'localhost',
        open: true,
        before(app) { //配置接口
            app.get('/list', (req, res) => {
                // 接收参数
                let type = req.query.type
                res.json(['易烊千玺', '王源', '王俊凯'])
            }),
                //post
                app.post('/add', bodyParser.json(), (req, res) => {
                    //参数
                    let name = req.body.name
                    console.log(req.body)
                    if (name) {
                        res.json({ code: 0, msg: "success" })
                    } else {
                        res.json({ code: -1, msg: "fail" })
                    }
                })
        }
        // hot:true   //热更新
    },
    resolve: {
        alias: {
            '@font': path.resolve(__dirname, './src/font'),
            'vue$': 'vue/dist/vue.esm.js' // 改版本
        },  //简写路径
        extensions: ['.css', '.js', '.scss']   //省略扩展名
    }
}