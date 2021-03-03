// ast 基础模板

//babel库及文件模块导入
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const types = require("@babel/types");
const generator = require("@babel/generator").default;
const fs = require('fs');


// 读取文件
let encode_file = fs.readFileSync("./beofre.js", {
    encoding: "utf-8"
});
// 转换为ast数
let ast = parser.parse(encode_file);

const visitor =
    {
       // TODO

    };

// 调用插件，处理源代码
traverse(ast, visitor);


//生成新的 js code,并且保存到文件中输出
let {code} = generator(ast,opts = {jsescOption:{"minimal":true}});
fs.writeFile('after.js', code, (err) => {
});


