import React from 'react';
import styles from './Home.module.css';
import { Card, Button, Timeline } from 'antd';
import { TeamOutlined, BuildOutlined, ClockCircleOutlined, InfoCircleOutlined, CheckCircleTwoTone, RocketOutlined } from '@ant-design/icons';
import ProgressBar from './ProgressBar';

const Home = () => {
  // 模拟数据
  const buildings = [
    { name: '图书馆', progress: 85 },
    { name: '教学楼', progress: 65 },
    { name: '学生宿舍', progress: 1 },
  ];

  const newsItems = [
    { time: '2024-08-01', content: '假装我是一条动态' },
    { time: '2024-07-25', content: '假装我是一条动态' },
    { time: '2024-07-18', content: '假装我是一条动态' }
  ];


  return (
    <div className={styles.container}>
      <section className={styles.hero} >
        <div className={styles.heroContent}>
          <h1>欢迎来到HBUTMC</h1>
          <p className={styles.subtitle}>我们致力于在Minecraft中复刻湖工大校园</p>
          <a href="https://map.hbutmc.cn" target="_blank" rel="noopener noreferrer">
            <Button type="primary" className={styles.ctaButton}> 立即查看MC中的湖工大 </Button>
          </a>
        </div>
      </section>

      {/* 项目简介 */}
      <section className={styles.section}>
        <div className={styles.projectIntro}>
          <h2 className={styles.sectionTitle}>
            <InfoCircleOutlined className={styles.titleIcon} />
            项目简介
          </h2>
          <div className={styles.introContent}>
            <div className={styles.introText}>
              <p className={styles.highlight}>
                <strong>HBUTMC</strong>（湖北工业大学Minecraft复刻计划）是基于真实校园测绘数据，
                使用<b>1:1比例</b>在Minecraft中重现湖工大校园的<b>协作项目</b>。
              </p>
              
              <div className={styles.featureGrid}>
                <div className={styles.featureItem}>
                  <CheckCircleTwoTone twoToneColor="#52c41a" />
                  <span>精确到米级的建筑建模</span>
                </div>
                <div className={styles.featureItem}>
                  <CheckCircleTwoTone twoToneColor="#52c41a" />
                  <span>实时更新的建设进度追踪</span>
                </div>
                <div className={styles.featureItem}>
                  <CheckCircleTwoTone twoToneColor="#52c41a" />
                  <span>团队协作的开发模式</span>
                </div>
                <div className={styles.featureItem}>
                  <CheckCircleTwoTone twoToneColor="#52c41a" />
                  <span>虚拟世界的湖工大</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 项目特色 */}
      <section className={styles.section}>
        <div className={styles.projectIntro}>
          <h2 className={styles.sectionTitle}>项目特色</h2>
          <div className={styles.features}>
            <Card 
              title="精准复刻" 
              hoverable
              className={styles.featureCard}
              cover={<BuildOutlined className={styles.cardIcon} />}
            >
              基于真实校园测绘数据，1:1比例还原建筑细节
            </Card>
            <Card 
              title="团队协作" 
              hoverable
              className={styles.featureCard}
              cover={<TeamOutlined className={styles.cardIcon} />}
            >
              多位建造者共同参与的开源项目
            </Card>
            <Card 
              title="持续更新" 
              hoverable
              className={styles.featureCard}
              cover={<ClockCircleOutlined className={styles.cardIcon} />}
            >
              每周更新建设内容，实时同步进展
            </Card>
          </div>
        </div>
      </section>

      {/* 最新动态 */}
      <section className={styles.section}>
        <div className={styles.projectIntro}>
          <h2 className={styles.sectionTitle}>最新动态</h2>
          <Timeline
            mode="left"
            items={newsItems.slice(0, 3).map(item => ({
              children: (
                <div className={styles.timelineItem}>
                  <h4>{item.time}</h4>
                  <p>{item.content}</p>
                </div>
              ),
            }))}
          />
          <Button type="link" href="/news">查看更多动态</Button>
        </div>
      </section>

      
      <footer style={{ textAlign: 'center', padding: '24px 0', backgroundColor: '#f0f2f5' }}>
        豫ICP备2023025148号-2
      </footer>
    </div>
    
  );
};

export default Home;
