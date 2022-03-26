## 说明

此项目用于重定向路径到[https://www.jsdelivr.com/](https://www.jsdelivr.com/)

## 修改重写数据

参考`src/data/index.js`文件

## 部署 vercel

部署 vercel 依赖于 vercel.json，~~因此在使用 vercel 部署之前请确保运行`generate.js`以生成 vercel.json 文件~~

`2022-03-26`调整构建/部署流程，通过 GitHubActions 执行`generate.js`脚本，并将产物推送到`vercel`分支，因此 vercel 端只需要将 git 关联修改为`vercel`分支为`Production`即可。

![image-20220326111438275](https://file.acs.pw/picGo/2022/03/26/111445e067a6-1263c44469151910ce94fe2e4241fefd.png)

注意如果你之前修改过`Build & Development Settings`那么请将其还原

![image-20220326111532053](https://file.acs.pw/picGo/2022/03/26/11153232973c-481b7ddcaa46d916737559129f0b7d0c.png)

## Actions 部署 SCF、轻服务、worker

参考 workflows 中 deploy 文件

## 本地部署 SCF、轻服务、worker

参考各平台 cli 工具