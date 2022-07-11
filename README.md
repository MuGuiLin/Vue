# Vue Cli 的使用：

注：在此之前请选安装好Node.js环境和npm包管理工具（注：一般在安装Node.js环境时npm默认自动就安装好了）

这里实例的版本：
	node -v : v10.15.0   	地址：http://nodejs.cn
	npm -v : 6.5.0		地址：https://www.npmjs.com
	vue -V : 3.2.2		地址：https://cn.vuejs.org
	Vue CLI -V : 3.2.2	地址：https://cli.vuejs.org/zh/




### 一、创建package.json文件：(如果已安装Vue Cli脚手架 此步略过)
	1、在项目的根目录打开DOS命令窗口
	2、npm init 
	3、根据提示输入相关信息（内容可任意填写 或 一律回车，文件生成后可以修改的），回车确认并向下执行，最后输入y表示结束创建
	4、此时目录中就有了package.json文件了。


### 二、安装Vue CLI脚手架工具：(如果已安装Vue Cli脚手架 此步略过)
	1、npm install -g @vue/cli
	2、自动开始下载安装所以模块，成功会显示版本号如：@vue/cli@3.2.2
	3、此时会多出一个node_modules文件夹（里面就是相关的模块）和多出一个package-lock.json文件（里面存放相关模块的配置信息）。
	4、注：有时会不成功就检查npm的版本是否太低（更新：npm i -g npm to update），网速是否太慢，


​	
### 三、创建项目
	1、按命方式创建
		(1)、vue create 项目名
			此时会在当前目录创建一个以上面的项目名为文件夹名的项目文件夹（里面包含相应的项目目录、模块、配置文件等）
		例如：vue create hello-world


​		
		(2)、安装完毕后：
			cd 项目名 进入项目的目录
			npm run serve 运行项目
			根据提示：在浏览器中输入：http://localhost:8081/(默认)
		例如：
		
		(3)、现在就可以开始做你的项目啦，当修改文件并保存好会自动更新到浏览器上不用刷新！


​		
​		
	2、按图形化界面创建
		vue ui 	//图形化界面创建和管理项目
		
		此时将自动打开浏览器进放项目创建界面，可根据自己的需求进行创建。


​		
### 四、运行、打包【注：以下命令要在项目根目录执行】
	0、cd 项目名
	
	1、运行（启动）：编译和热更新（用于开发环境）
		npm run serve
		
		ui: vue-cli-service serve
	
	2、打包（构建）：编译并压缩（用于生产环境）
		npm run build
		
		【注：用vue-cli3打包后的找不到css和js 】
		
		解决办法：
			在项目的根目录新建vue.config.js 然后内容为：
				module.exports = {
					baseUrl: './'
				}
		
		再重新打包！


​		
		ui: vue-cli-service build


​		
	3、检查 webpack 配置
		ui: vue-cli-service inspect