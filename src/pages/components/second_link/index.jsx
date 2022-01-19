import React from 'react';
import styles from './index.less';

export default function Page(props) {
  const { text } = props;
  return <span className={styles.link}>{text}</span>;
}
