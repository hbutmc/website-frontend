import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Docs.module.css';

const DocList = () => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        // 获取文档列表
        const listResponse = await fetch('/docs/list.json');
        const docsList = await listResponse.json();
        
        // 获取每个文档的第一行标题
        const docsWithTitles = await Promise.all(docsList.map(async doc => {
          const contentResponse = await fetch(`/docs/${doc.title}.md`);
          const content = await contentResponse.text();
          const firstHeader = content.split('\n').find(line => line.startsWith('# '));
          return {
            ...doc,
            firstHeader: firstHeader ? firstHeader.replace('# ', '') : doc.title
          };
        }));
        
        setDocs(docsWithTitles);
      } catch (err) {
        console.error('Failed to load docs:', err);
      }
    };

    fetchDocs();
  }, []);

  return (
    <div className={styles.docListContainer}>
      <h1>文档列表</h1>
      <ul className={styles.docList}>
        {docs.map((doc, index) => (
          <li key={index} className={styles.docItem}>
            <Link to={`/docs/${doc.title}`} className={styles.docLink}>
              <h3 className={styles.docTitle}>{doc.firstHeader}</h3>
              <p className={styles.docDescription}>{doc.description}</p>
              <div className={styles.docMeta}>
                <span>作者：{doc.author}</span>
                <span>日期：{doc.date}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocList;
