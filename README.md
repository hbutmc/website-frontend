# hbutmc-website

使用vite+react构建

如何运行开发环境？
安装依赖： npm install
运行开发环境： npm run dev

如何部署到服务器（生产环境）？
在.env中填写版本号
打包docker镜像： docker-compose up -d --build
推送docker镜像： docker push blackwolf155/hbutmc-website:版本号
在服务器上拉取docker镜像： docker pull blackwolf155/hbutmc-website:版本号
在服务器上运行docker镜像： docker run -d -p 80:80 --name hbutmc-website blackwolf155/hbutmc-website:版本号
（使用nginx代理，则将80端口映射到服务器的80端口，若使用ssl证书，先配置nginx.conf 然后将端口改为443）