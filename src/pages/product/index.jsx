import React from 'react';
import styles from './index.less';
import Banner from '../components/banner';
import Prolink from '../components/pro_link';
import Secondlink from '../components/second_link';
import Footer from '../components/footer';

const items = [
  {
    title: `智慧园区可视化`,
    src: require(`../../img/p1.png`),
  },
  {
    title: `智慧城市可视化`,
    src: require(`../../img/p2.png`),
  },
  {
    title: `数据中心可视化`,
    src: require(`../../img/p3.png`),
  },
  {
    title: `IOC智能运营中心`,
    src: require(`../../img/p4.png`),
  },
  {
    title: `架构管理可视化`,
    src: require(`../../img/p5.png`),
  },
  {
    title: `数字孪生中台`,
    src: require(`../../img/p6.png`),
  },
  {
    title: `ThingJS-X平台`,
    src: require(`../../img/p7.png`),
  },
];

const products = [
  {
    img: require(`../../img/zhyqc.png`),
    name: `智慧园区可视化`,
    sub: `园区数字化转型升级`,
    desc: `智慧园区可视化系统基于数字孪生的三维技术为基础，将人工智能、
    物联网(IOT)、大数 据分析等新一代信息技术进行整合，通过可视化的管理方式，
    实时、动态、直观的对园区 内建筑设备从宏观到微观进行全方位管理。`,
  },
  {
    img: require(`../../img/zhcsc.png`),
    name: `智慧城市可视化`,
    sub: `全局视角掌握城市业务`,
    desc: `利用数字孪生技术构建智慧城市数字空间，以炫酷视觉效果、
    全面数据集成、场景化业务 展示为支撑，有效提升智慧城市IOC管理人员对城市运营、
    治安、交通、政务等业务监 控管理效率，支撑智慧城市、智慧园区辅助决策。`,
  },
  {
    img: require(`../../img/sjzxc.png`),
    name: `数据中心可视化`,
    sub: `数据中心卓越运营`,
    desc: `数据中心可视化管理平台作为新一代数据中心可视化管理平台，
    采用数字孪生技术，实现 对数据中心的虚拟仿真。让管理人员可以清晰直观地掌握IT运营中的
    有效信息，实现透明 化与可视化管理，进而有效提升资产管理与监控管理的效率，
    实现立体式、可视化的新一 代数据中心运行管理。`,
  },
  {
    img: require(`../../img/iocc.png`),
    name: `IOC智能运营中心`,
    sub: `可视、可管、可控`,
    desc: `作为高效的场景化协作的智能运营中心入口，提供创新的数字孪生运营可视化交互门户服 
    务。通过数字孪生对象数据，驱动科学决策、精益管理、业务全景展示。
    整合现有数据资 源，满足智慧城市、智慧园区等场景下的运行监控、
    运营分析评价、应急指挥、风险控制 预警等业务场景。`,
  },
  {
    img: require(`../../img/jgglc.png`),
    name: `架构管理可视化`,
    sub: `IT架构图一体化管理`,
    desc: `DMV（Diagram Management Visualization）是业界领先的IT架构图管理平台，
    致力于 为IT运维团队提供更加准确、易用、丰富的架构图。通过DMV，实现架构搜索、
    版本管 理、团队协作等架构管理，实现组合透视、运维分析等场景使用，实现标准绘图、
    数据联 动等架构设计。`,
  },
  {
    img: require(`../../img/szlsc.png`),
    name: `数字孪生中台`,
    sub: `灵活支撑数字孪生应用`,
    desc: `数字孪生中台（Digital Twin Middle Platform）作为数字孪生即服务的平台，
    不仅通过自 研的数字孪生加工引擎完成数字孪生实例的加工，并且提供灵活丰富的数字孪生
    消费服务 API，从而能够快速灵活支撑各类数字孪生应用，避免重复建设、烟囱式建设，
    缩短应用交 付周期，提高应用交付质量，加速组织级数字应用的创新速度，
    降低数字化转型成本。`,
  },
  {
    img: require(`../../img/thingjsc.png`),
    name: `ThingJS-X`,
    sub: `零代码开发，一站式交付`,
    desc: `ThingJS平台的推出，解决了传统3D开发人员投入大、开发效率低、
    场景制作周期长、模 型无法复用、系统部署复杂的问题。`,
  },
];

export default function Page() {
  return (
    <>
      <div className={styles.banner}>
        <Banner />
        <div className={styles.top}>
          <div>
            <div className={styles.top_bar}></div>
            <div className={styles.top_title}>服务至上 品质如一</div>
            <div className={styles.top_content}>
              云昱科技产品从企业架构到数字化基础设施
              <br />
              从智慧 园区到智慧城市，汇聚运营大数据的企业级数字孪生
              平台，为数字化企业提供全息可视化蓝图。
            </div>
          </div>
          <div className={styles.items}>
            {items.map((value) => (
              <div style={{ marginRight: 40, marginBottom: 40 }}>
                <div className={styles.item}>
                  <img src={value.src} />
                </div>
                <div className={styles.item_title}>{value.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {products.map((obj, index) => {
        if (index % 2 == 0)
          return (
            <div
              className={styles.container}
              style={{ backgroundColor: `#F9FAFC` }}
            >
              <div>
                <div>{obj.name}</div>
                <div>{obj.sub}</div>
                <div></div>
                <div>{obj.desc}</div>
                <div>
                  <Prolink text={`了解详情`} />
                  <Secondlink text={`咨询客服`} />
                </div>
              </div>
              <img src={obj.img} />
            </div>
          );
        else
          return (
            <div className={styles.container}>
              <img src={obj.img} />
              <div>
                <div>{obj.name}</div>
                <div>{obj.sub}</div>
                <div></div>
                <div>{obj.desc}</div>
                <div>
                  <Prolink text={`了解详情`} />
                  <Secondlink text={`咨询客服`} />
                </div>
              </div>
            </div>
          );
      })}
      <Footer />
    </>
  );
}
