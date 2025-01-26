# hbutmc-website

本项目使用 Vite + React 构建。

## 推荐的 IDE 配置

推荐使用 [VSCode](https://code.visualstudio.com/) 进行开发。

## 项目设置

```sh
npm install
```

### 编译并热重载以进行开发

```sh
npm run dev
```

### 部署到生产环境

1. 在 `.env` 文件中填写版本号。
2. 构建 Docker 镜像：
   ```sh
   docker-compose up -d --build
   ```
3. 将 Docker 镜像推送到镜像仓库：
   ```sh
   docker push blackwolf155/hbutmc-website:版本号
   ```
4. 在服务器上拉取 Docker 镜像：
   ```sh
   docker pull blackwolf155/hbutmc-website:版本号
   ```
5. 在服务器上运行 Docker 容器：
   ```sh
   docker run -d -p 80:80 --name hbutmc-website blackwolf155/hbutmc-website:版本号
   ```
   - 如果使用 Nginx 作为反向代理，将 80 端口映射到服务器的 80 端口。
   - 如果使用 SSL，请先配置 `nginx.conf`，然后将端口改为 443。

## 自定义配置

参考 [Vite 配置文档](https://vite.dev/config/)。