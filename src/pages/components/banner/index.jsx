import React from 'react';
import styles from './index.less';
import { history } from 'umi';

export default function Page() {
  return (
    <div className={styles.titleback}>
    <img width={71} height={63} src={require(`../../../img/logo.png`)} />
    <div className={styles.logo_title}>智慧引领未来 创新驱动发展</div>
    <div style={{ flex: `1` }}></div>
    <div className={styles.menubar}>
      <div onClick={() => history.push(`/`)}>
        <span>首页</span>
      </div>
      <div onClick={() => history.push(`/company`)}>
        <span>走进云昱</span>
      </div>
      <div onClick={() => history.push(`/product`)}>
        <span>产品服务</span>
      </div>
      <div onClick={() => history.push(`/solution`)}>
        <span>解决方案</span>
      </div>
    </div>
  </div>
  );
}
