import React from 'react';
import styles from './index.less';
import Banner from '../components/banner';
import Prolink from '../components/pro_link';
import Secondlink from '../components/second_link';
import { Timeline } from 'antd';
import Footer from '../components/footer';

const customers = [
  {
    src: require(`../../img/c1.png`),
  },
  {
    src: require(`../../img/c2.png`),
  },
  {
    src: require(`../../img/c3.png`),
  },
  {
    src: require(`../../img/c4.png`),
  },
  {
    src: require(`../../img/c5.png`),
  },
  {
    src: require(`../../img/c6.png`),
  },
  {
    src: require(`../../img/c7.png`),
  },
  {
    src: require(`../../img/c8.png`),
  },
];

export default function Page() {
  return (
    <>
      <div className={styles.banner}>
        <Banner />
        <div className={styles.banner_container}>
          <img src={require(`../../img/company_movie.png`)} />
          <div>
            <div className={styles.product}>
              <img src={require(`../../img/titleleft.png`)} height={34} />
              <div>
                <div>云昱科技</div>
              </div>
              <img
                src={require(`../../img/titleleft.png`)}
                style={{ transform: 'rotateY(180deg)' }}
                height={34}
              />
            </div>
            <div></div>
            <div>智慧数字可视化领域的先行者及践行者</div>
            <div>Wisdom leads the future, innovation drives development</div>
          </div>
        </div>
      </div>
      <div className={styles.value}>
        <div>
          <img src={require(`../../img/v1.png`)} />
          <div>使命</div>
          <div>创新 奋斗 帮助人们更好的认知、 管理、创造数字世界</div>
        </div>
        <div>
          <img src={require(`../../img/v2.png`)} />
          <div>愿景</div>
          <div>科学的方法 艺术的创造 实现以人为本的美好未来</div>
        </div>
        <div>
          <img src={require(`../../img/v3.png`)} />
          <div>价值观</div>
          <div>价值 专业 精进 谦逊 真诚 热情</div>
        </div>
      </div>

      <div className={styles.title}>新时代、新理念、新机遇、新服务</div>
      <div className={styles.content}>
        <img src={require(`../../img/companyc.png`)} />
        <div>
          <div>数字智慧可视化 重构数字世界</div>
          <div></div>
          <div>
            黑龙江省云昱科技有限公司开创性的将数字孪生技术与可视化相结合，对现实世界中的
            实体对象，在数字世界中进行完整描述，通过可视化的手段对实体对象进行仿真、监测、
            分析和控制，致力于通过数字孪生可视化技术，帮助人们更好的认知与管理现实世界。
          </div>
          <div style={{ marginTop: 50 }}>
            <Prolink text="了解产品" />
            <Secondlink text="咨询客服" />
          </div>
        </div>
      </div>

      <div className={styles.title}>用数字智慧的目光带您领略新空间</div>
      <div className={styles.cards}>
        <div>
          <div>
            具有内涵的
            <br />
            数字智慧可视化
          </div>
          <div></div>
          <div>
            对现实世界的数字化建模 <br /> 用可视化技术展现 <br />
            通过数字孪生世界更便捷的认知和管理现实世界 <br />
            具有自主知识产权的国内厂商
          </div>
          <img
            src={require(`../../img/cd1.png`)}
            style={{ position: `absolute`, bottom: 0, right: 0 }}
            width={260}
            height={190}
          />
        </div>
        <div>
          <div>
            具有前瞻性的
            <br />
            数字智慧可视化
          </div>
          <div></div>
          <div>
            多维空间大数据为基础 打通逻辑世界和物理世界 贯穿数字空间和现实世界
            全域感知与运行监测的智能分析
          </div>
          <img
            src={require(`../../img/cd2.png`)}
            style={{ position: `absolute`, bottom: 0, right: 0 }}
            width={303}
            height={179}
          />
        </div>
        <div>
          <div>
            最广泛应用的
            <br /> 数字智慧可视化
          </div>
          <div></div>
          <div>
            覆盖IT及IOT 全领域
            <br /> 为全行业提供数字孪生可视化解决方案
            <br /> 服务超过2,000家头部客户
          </div>
          <img
            src={require(`../../img/cd3.png`)}
            style={{ position: `absolute`, bottom: 0, right: 0 }}
            width={211}
            height={155}
          />
        </div>
      </div>
      <div className={styles.title}>
        头部客户广泛应用及认可的数字孪生可视化厂商
      </div>
      <div className={styles.bussiness_type}>
        <div>金融</div>
        <div>教育</div>
        <div>能源</div>
        <div>科技</div>
        <div>医疗</div>
        <div>政府</div>
      </div>

      <div className={styles.customer_card}>
        {customers.map((value) => (
          <div>
            <img src={value.src} />
          </div>
        ))}
      </div>

      <div className={styles.title}>云昱科技发展历程</div>
      <div className={styles.years}>
        <div>2021</div>
        <div>2020</div>
        <div>2019</div>
        <div>2018</div>
        <div>2017</div>
        <div>2016</div>
      </div>

      <div className={styles.timeline}>
        <Timeline>
          <Timeline.Item dot={<div className={styles.dot}></div>}>
            <div className={styles.time_item}>
              <div>10 月</div>
              <div>
                云昱发布数字孪生0代码交付平台ThingJS-X，进入数字孪生0代码时代!数字孪生可视化0代码平台摘得“IOTE金奖”创新产品的殊荣。
              </div>
            </div>
          </Timeline.Item>
          <Timeline.Item dot={<div className={styles.dot}></div>}>
            <div className={styles.time_item}>
              <div>08 月</div>
              <div>
                云昱科技数字孪生可视化交付平台ThingJS-X力争群雄勇获鲲鹏应用创新大赛殊荣!
              </div>
            </div>
          </Timeline.Item>
          <Timeline.Item dot={<div className={styles.dot}></div>}>
            <div className={styles.time_item}>
              <div>06 月</div>
              <div>云昱科技荣登“铅笔道2021真榜未来独角兽·数据与智能Top20!</div>
            </div>
          </Timeline.Item>
          <Timeline.Item dot={<div className={styles.dot}></div>}>
            <div className={styles.time_item}>
              <div>02 月</div>
              <div>
                云昱科技CEO
                XXX在公司内部阐述了云昱下一步主攻方向:数字化、品牌化、工业化!
              </div>
            </div>
          </Timeline.Item>
        </Timeline>
      </div>

      <div className={styles.title}>云昱科技地址</div>
      <img
        src={require(`../../img/location.png`)}
        width={`100%`}
        height={`auto`}
      />
      <div className={styles.connect}>
        <div>
          <img src={require(`../../img/phone.svg`)} />
          <span>联系方式：13688888888</span>
        </div>
        <div>
          <img src={require(`../../img/email.svg`)} />
          <span>电子邮箱：YUNYU0451@qq.com</span>
        </div>
        <div>
          <img src={require(`../../img/wechat.svg`)} />
          <span>微信方式：YUNYU0451</span>
        </div>
        <div>
          <img src={require(`../../img/address.svg`)} />
          <span>公司地址：黑龙江省哈尔滨市道里区群力第四大道汇智广场704室</span>
        </div>
      </div>
      <Footer />
    </>
  );
}
