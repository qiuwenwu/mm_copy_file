const copyFile = require("./index.js");

function test() {
	console.log("开始复制");
	// 来自哪里, 到哪里, 过滤的文件夹或目录(支持 *号匹配，例如)
	copyFile("./dir_from", "./dir_to", ["filter.html", "*.json"]);
}

test();
