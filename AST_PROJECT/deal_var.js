// 替换已经定义的变量
// 处理之前为
// var s=92
// var a = s+5
// var b=func(1324801, a)
// 处理之后为
// var s = 92
// var a = 97
// var b = func(1324901,97)




//babel库及文件模块导入
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");
const generator = require("@babel/generator").default;
const fs = require('fs');


// 读取文件
let encode_file = fs.readFileSync("./base64.js", {
    encoding: "utf-8"
});
// 转换为ast数
let ast = parser.parse(encode_file);

const visitor =
    {
       "Identifier|BinaryExpression"(path){
            let {confident,value} = path.evaluate();
            if (confident){
                path.replaceInline(types.valueToNode(value))
            }
        }

    };

// 调用插件，处理源代码
traverse(ast, visitor);


//生成新的 js code,并且保存到文件中输出
let {code} = generator(ast,opts = {jsescOption:{"minimal":true}});
fs.writeFile('decode.js', code, (err) => {
});


