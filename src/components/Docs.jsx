import React from 'react';
import styles from './Docs.module.css';

const Docs = () => {
  return (
    <div className={styles.docsContainer}>
      <aside className={styles.sidebar}>
        <h2>目录</h2>
        <ul>
          <li><a href="#intro">活动介绍</a></li>
          <li><a href="#rules">活动规则</a></li>
          <li><a href="#faq">常见问题</a></li>
        </ul>
      </aside>

      <main className={styles.content}>
        <section id="intro">
          <h1>活动介绍</h1>
          <p>
            这是一个在Minecraft中重现湖北工业大学校园活动的创新项目。
            通过数字技术，我们希望能够：
          </p>
          <ul>
            <li>展示校园文化</li>
            <li>提供虚拟体验</li>
            <li>促进跨校区交流</li>
          </ul>
        </section>

        <section id="rules">
          <h1>活动规则</h1>
          <ol>
            <li>尊重他人，文明参与</li>
            <li>遵守Minecraft服务器规则</li>
            <li>禁止破坏他人作品</li>
            <li>保持服务器环境整洁</li>
          </ol>
        </section>

        <section id="faq">
          <h1>常见问题</h1>
          <dl>
            <dt>如何加入服务器？</dt>
            <dd>联系管理员获取服务器地址和登录凭证</dd>
            
            <dt>需要什么配置？</dt>
            <dd>支持Minecraft 1.20+版本，建议4GB以上内存</dd>
          </dl>
        </section>
      </main>
    </div>
  );
};

export default Docs;
