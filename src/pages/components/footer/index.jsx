import React from 'react';
import styles from './index.less';

export default function index() {
  return (
    <div className={styles.footer}>
      <div className={styles.topgroup}>
        <div>
          <img src={require(`../../../img/logo.png`)} />
          <div className={styles.d1}>
            <img src={require(`../../../img/whitephone.png`)} />
            <span>400-045-1888</span>
          </div>
          <div className={styles.d1}>
            <img src={require(`../../../img/whiteemail.png`)} />
            <span>yunyukeji@qq.com</span>
          </div>
          <span className={styles.link}>预约产品演示</span>
        </div>
        <div className={styles.solution}>
          <div className={styles.subtitle}>解决方案</div>
          <div className={styles.line}></div>
          <div className={styles.doublecolumn}>
            <div className={styles.list} style={{ marginRight: 33 }}>
              <a>智慧政务</a>
              <a>智慧应急</a>
              <a>智慧社区</a>
              <a>数字乡村</a>
              <a>智慧农业</a>
              <a>智慧党建</a>
              <a>智慧统战</a>
              <a>智慧教育</a>
            </div>
            <div className={styles.list}>
              <a>智慧大脑</a>
              <a>智慧公安</a>
              <a>智慧城管</a>
              <a>智慧林业</a>
              <a>智慧旅游</a>
              <a>智慧物流</a>
              <a>智慧政协</a>
              <a>智慧医疗</a>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.subtitle}>数字孪生可视化产品</div>
          <div className={styles.line}></div>
          <div className={styles.list}>
            <a>数据中心可视化</a>
            <a>架构管理可视化</a>
            <a>智慧城市可视化</a>
            <a>智慧社区可视化</a>
            <a>数字孪生中台</a>
            <a>IOC智能运营中心</a>
            <a>ThingJS-X零代码平台</a>
            <a>ThingJS开发平台</a>
          </div>
        </div>
        <div>
          <div className={styles.subtitle}>关于我们</div>
          <div className={styles.line}></div>
          <div className={styles.list}>
            <a>走进云昱</a>
            <a>联系我们</a>
          </div>
        </div>
        <div>
          <div className={styles.subtitle}>关注我们</div>
          <div
            className={styles.subtitle}
            style={{ margin: `20px 0`, fontSize: 16 }}
          >
            共同畅享新空间
          </div>
          <img src={require(`../../../img/group.png`)} />
        </div>
      </div>
      <div className={styles.longline}></div>
      <div className={styles.littlegroup}>
        <div>热门产品</div>
        <div>数字孪生</div>
        <div>三维可视化</div>
        <div>数据中心可视化</div>
        <div>智慧社区</div>
        <div>IOC智能运营中心</div>
        <div>ThingJS开发平台</div>
      </div>
      <div className={styles.littlegroup}>
        <div>企业场景</div>
        <div>智慧城市</div>
        <div>智慧政务</div>
        <div>智慧公安</div>
        <div>智慧社区</div>
        <div>智慧医院</div>
        <div>智慧轨交</div>
        <div>金融一体化运维</div>
      </div>
      <div className={styles.longline}></div>
      <div className={styles.copy}>
        Copyrights © 2021 by uino 黑龙江省云昱科技有限公司版权所有 .
        黑ICP备13053130号 . All Rights Reserved
      </div>
    </div>
  );
}
