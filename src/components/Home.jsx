import React from 'react';
import { Button } from 'antd';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <h1>欢迎来到HBUTMC</h1>
        <p>
          我们致力于在Minecraft中复刻湖工大校园
        </p>
        <Button type="primary">按钮</Button>
      </section>
      

      <div className={styles.features}>
        <div className={styles.feature}>
          <h2>这是什么</h2>
          <p>
            在Minecraft中复刻校园
          </p>
        </div>
        <div className={styles.feature}>
          <h2>目前进度</h2>
          <p>
            尚未完成，仍需努力
          </p>
        </div>
        <div className={styles.feature}>
          <h2>加入我们</h2>
          <p>
            加入q群获取最新消息，进入服务器一起建造
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
