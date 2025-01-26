import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { useParams } from 'react-router-dom';
import styles from './Docs.module.css';

const Docs = () => {
  const { docName } = useParams();
  const [markdown, setMarkdown] = useState('');
  const [toc, setToc] = useState([]);

  useEffect(() => {
    const url = `/docs/${docName}.md`;
    console.log('Fetching markdown from:', url);
    
    fetch(url)
      .then(response => {
        console.log('Response status:', response.status);
        console.log('Response headers:', [...response.headers.entries()]);
        return response;
      })
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then(text => {
        console.log('Markdown content:', text);
        setMarkdown(text);
        generateToc(text);
      })
      .catch(err => {
        console.error('Failed to load markdown:', err);
        console.error('Full error:', err);
      });
  }, [docName]);

  //生成目录
  const generateToc = (content) => {
    // 匹配所有标题（h1-h6）
    const headers = content.match(/^#{1,6}\s.+$/gm) || [];
    //console.log('Headers:', headers);  // 调试输出headers
    
    const tocItems = headers.map(header => {
      const level = header.match(/#/g).length;
      const title = header.replace(/#{1,6}\s/, '');
      const id = title.toLowerCase().replace(/\s+/g, '-');
      return { level, title, id };
    });
    
    //console.log('TOC Items:', tocItems);  // 调试输出tocItems
    setToc(tocItems);
  };

  //渲染目录
  const renderToc = () => (
    <nav className={styles.toc}>
      <h2>目录</h2>
      <ul>
        {toc.map((item, index) => (
          <li 
            key={index}
            style={{ marginLeft: `${(item.level - 1) * 1.5}rem` }}
          >
            <a href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );

  return (
    <div className={styles.docsContainer}>
      <Link to="/docs" className={styles.backButton}>
        &larr; 返回文档列表
      </Link>
      {renderToc()}{/* 渲染目录 */}   
      <main className={styles.content}>
        {/* Markdown渲染器 */}
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}// 使用GitHub风格Markdown插件
          rehypePlugins={[rehypeRaw]}// 支持原始HTML
          components={{
            // 自定义标题渲染，添加ID属性
            h1: ({node, children, ...props}) => {
              const id = String(children).toLowerCase().replace(/\s+/g, '-');
              return <h1 id={id} {...props}>{children}</h1>;
            },
            h2: ({node, children, ...props}) => {
              const id = String(children).toLowerCase().replace(/\s+/g, '-');
              return <h2 id={id} {...props}>{children}</h2>;
            },
            h3: ({node, children, ...props}) => {
              const id = String(children).toLowerCase().replace(/\s+/g, '-');
              return <h3 id={id} {...props}>{children}</h3>;
            },
            // 自定义代码块渲染，添加语法高亮
            code({node, inline, className, children, ...props}) {
              const match = /language-(\w+)/.exec(className || '');// 匹配代码语言
              return !inline && match ? (// 如果是代码块
                <SyntaxHighlighter
                  style={dracula}// 使用Dracula主题
                  language={match[1]}// 设置代码语言
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}{/* 去除末尾换行符 */}
                </SyntaxHighlighter>
              ) : (// 如果是行内代码
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
            // 自定义表格渲染，添加滚动容器
            table: ({node, ...props}) => (
              <div className={styles.tableWrapper}>
                <table {...props} />
              </div>
            )
          }}
        >
          {markdown}{/* 渲染Markdown内容 */}
        </ReactMarkdown>
      </main>
    </div>
  );
};

export default Docs;
