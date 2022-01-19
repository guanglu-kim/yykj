import styles from './index.less';
import { useState } from 'react';
import Banner from './components/banner';
import Prolink from './components/pro_link';
import Secondlink from './components/second_link';
import Footer from './components/footer';

const products = [
  {
    src: require(`../img/zhyq.png`),
    img: require(`../img/zhyqc.png`),
    name: `智慧园区可视化`,
    desc: `智慧园区可视化系统基于数字孪生的三维技术为基础，将人工智能、
    物联网(IOT)、大数 据分析等新一代信息技术进行整合，通过可视化的管理方式，
    实时、动态、直观的对园区 内建筑设备从宏观到微观进行全方位管理。`,
  },
  {
    src: require(`../img/zhcs.png`),
    img: require(`../img/zhcsc.png`),
    name: `智慧城市可视化`,
    desc: `利用数字孪生技术构建智慧城市数字空间，以炫酷视觉效果、
    全面数据集成、场景化业务 展示为支撑，有效提升智慧城市IOC管理人员对城市运营、
    治安、交通、政务等业务监 控管理效率，支撑智慧城市、智慧园区辅助决策。`,
  },
  {
    src: require(`../img/sjzx.png`),
    img: require(`../img/sjzxc.png`),
    name: `数据中心可视化`,
    desc: `数据中心可视化管理平台作为新一代数据中心可视化管理平台，
    采用数字孪生技术，实现 对数据中心的虚拟仿真。让管理人员可以清晰直观地掌握IT运营中的
    有效信息，实现透明 化与可视化管理，进而有效提升资产管理与监控管理的效率，
    实现立体式、可视化的新一 代数据中心运行管理。`,
  },
  {
    src: require(`../img/ioc.png`),
    img: require(`../img/iocc.png`),
    name: `IOC智能运营中心`,
    desc: `作为高效的场景化协作的智能运营中心入口，提供创新的数字孪生运营可视化交互门户服 
    务。通过数字孪生对象数据，驱动科学决策、精益管理、业务全景展示。
    整合现有数据资 源，满足智慧城市、智慧园区等场景下的运行监控、
    运营分析评价、应急指挥、风险控制 预警等业务场景。`,
  },
  {
    src: require(`../img/jggl.png`),
    img: require(`../img/jgglc.png`),
    name: `架构管理可视化`,
    desc: `DMV（Diagram Management Visualization）是业界领先的IT架构图管理平台，
    致力于 为IT运维团队提供更加准确、易用、丰富的架构图。通过DMV，实现架构搜索、
    版本管 理、团队协作等架构管理，实现组合透视、运维分析等场景使用，实现标准绘图、
    数据联 动等架构设计。`,
  },
  {
    src: require(`../img/szls.png`),
    img: require(`../img/szlsc.png`),
    name: `数字孪生中台`,
    desc: `数字孪生中台（Digital Twin Middle Platform）作为数字孪生即服务的平台，
    不仅通过自 研的数字孪生加工引擎完成数字孪生实例的加工，并且提供灵活丰富的数字孪生
    消费服务 API，从而能够快速灵活支撑各类数字孪生应用，避免重复建设、烟囱式建设，
    缩短应用交 付周期，提高应用交付质量，加速组织级数字应用的创新速度，
    降低数字化转型成本。`,
  },
  {
    src: require(`../img/thingjs.png`),
    img: require(`../img/thingjsc.png`),
    name: `ThingJS-X`,
    desc: `ThingJS平台的推出，解决了传统3D开发人员投入大、开发效率低、
    场景制作周期长、模 型无法复用、系统部署复杂的问题。`,
  },
];

const tabs = [
  {
    name: `城市大脑`,
  },
  {
    name: `智慧政务`,
  },
  {
    name: `智慧应急`,
  },
  {
    name: `智慧公安`,
  },
  {
    name: `智慧园区`,
  },
  {
    name: `智慧城管`,
  },
  {
    name: `智慧林业`,
  },
  {
    name: `数字乡村`,
  },
];

const icons = [
  {
    src: require(`../img/i1.png`),
    name: `数字电网一张图`,
  },
  {
    src: require(`../img/i2.png`),
    name: `智慧工厂可视化`,
  },
  {
    src: require(`../img/i3.png`),
    name: `智慧矿山可视化`,
  },
  {
    src: require(`../img/i4.png`),
    name: `智慧能源可视化`,
  },
  {
    src: require(`../img/i5.png`),
    name: `智慧网管可视化`,
  },
  {
    src: require(`../img/i6.png`),
    name: `智慧燃油可视化`,
  },
  {
    src: require(`../img/i7.png`),
    name: `智慧能源可视化`,
  },
  {
    src: require(`../img/i8.png`),
    name: `运营中心可视化`,
  },
  {
    src: require(`../img/i9.png`),
    name: `电网运维一体化`,
  },
];

const customers = [
  {
    src: require(`../img/c1.png`),
  },
  {
    src: require(`../img/c2.png`),
  },
  {
    src: require(`../img/c3.png`),
  },
  {
    src: require(`../img/c4.png`),
  },
  {
    src: require(`../img/c5.png`),
  },
  {
    src: require(`../img/c6.png`),
  },
  {
    src: require(`../img/c7.png`),
  },
  {
    src: require(`../img/c8.png`),
  },
];

export default function Page() {
  const [state, setState] = useState({ productIndex: 0, tabIndex: 0 });
  console.log(state);
  const Container = () => {
    const obj = products[state.productIndex];
    return (
      <div className={styles.container}>
        <img src={obj.img} />
        <div>
          <div>{obj.name}</div>
          <div>{obj.desc}</div>
          <div>
            <Prolink text={`了解详情`} />
            <Secondlink text={`咨询客服`} />
          </div>
        </div>
      </div>
    );
  };

  const TabContent = () => {
    return (
      <div className={styles.tab_content}>
        <div>
          <div>智慧能源解决方案</div>
          <div></div>
          <div>
            基于数字孪生理念打造能源产品体系，在大云物移智等现代信息技术的支撑下，结合全栈可视化能力，与能源业务深度融合，
            连接、智能、高效的数字能源，赋能电力、石油化工、煤炭全产业提质增效，推动行业数字化转型。
          </div>
          <Prolink text={`了解详情`} />
          <div></div>
        </div>

        <img src={require(`../img/zhga.png`)} />
      </div>
    );
  };

  return (
    <>
      {/* 首页开屏 */}
      <div className={styles.banner}>
        <Banner />
        <div className={styles.content}>
          <div style={{ fontSize: 52, fontWeight: `bold` }}>
            智慧引领未来 创新驱动发展
          </div>
          <div
            style={{
              fontSize: 25,
              fontWeight: 300,
              opacity: 0.7,
            }}
          >
            Wisdom leads the future, innovation drives development
          </div>
          <div
            style={{
              background: `#FFFFFF`,
              opacity: 0.2,
              height: 1,
              width: 620,
              marginTop: 10,
              marginBottom: 10,
            }}
          ></div>
          <div
            style={{
              paddingTop: 20,
              fontSize: 35,
              fontWeight: 400,
              opacity: 0.7,
            }}
          >
            超越您的期待
          </div>
          <div className={styles.contentBarTitle}>
            <div style={{ verticalAlign: `bottom` }}>
              <img src={require(`../img/q4.png`)} />
              服务用户
            </div>
            <div>
              <img src={require(`../img/q3.png`)} />
              合作厂商
            </div>
            <div>
              <img src={require(`../img/q2.png`)} />
              分管设备
            </div>
            <div>
              <img src={require(`../img/q1.png`)} />
              三维场景
            </div>
          </div>
          <div className={styles.contentBarNum}>
            <div>2032</div>
            <div>157</div>
            <div>237600</div>
            <div>5482</div>
          </div>
        </div>
      </div>
      {/* 产品主题 */}
      <div className={styles.product}>
        <img src={require(`../img/titleleft.png`)} height={34} />
        <div>
          <div>产品服务</div>
          <div>Product service</div>
        </div>
        <img
          src={require(`../img/titleleft.png`)}
          style={{ transform: 'rotateY(180deg)' }}
          height={34}
        />
      </div>
      <div className={styles.product_subtitle}>
        让您通过智能化可视化 更便捷的认知和管理现实世界
      </div>
      <div className={styles.product_list}>
        {products.map((value, index) => (
          <div
            key={index}
            className={
              index == state.productIndex ? styles.product_selected : ``
            }
            onClick={() => setState({ ...state, productIndex: index })}
          >
            <div>
              <img src={value.src} />
              <div>{value.name}</div>
            </div>
          </div>
        ))}
      </div>
      <Container />
      <div className={styles.movie}>
        <img src={require(`../img/movie.png`)} />
      </div>
      {/* 解决方案 */}
      <div style={{ background: `#F9FAFC`, marginTop: 50, padding: 10 }}>
        <div className={styles.product}>
          <img src={require(`../img/titleleft.png`)} height={34} />
          <div>
            <div>解决方案</div>
            <div>Solution</div>
          </div>
          <img
            src={require(`../img/titleleft.png`)}
            style={{ transform: 'rotateY(180deg)' }}
            height={34}
          />
        </div>
        <div className={styles.product_subtitle}>
          对现实世界数字化建模，助力行业客户更智能的商业决策
        </div>
        <div className={styles.product_tab}>
          {tabs.map((value, index) => (
            <div
              className={
                index == state.tabIndex ? styles.product_tab_selected : ``
              }
              onClick={() => setState({ ...state, tabIndex: index })}
            >
              {value.name}
            </div>
          ))}
        </div>
        <TabContent />
        <div className={styles.icon_list}>
          {icons.map((value, index) => (
            <div>
              <img src={value.src} />
              <div>{value.name}</div>
            </div>
          ))}
        </div>
      </div>
      {/* 合作伙伴 */}
      <div className={styles.product}>
        <img src={require(`../img/titleleft.png`)} height={34} />
        <div>
          <div>合作伙伴</div>
          <div>cooperative partner</div>
        </div>
        <img
          src={require(`../img/titleleft.png`)}
          style={{ transform: 'rotateY(180deg)' }}
          height={34}
        />
      </div>
      <div className={styles.product_subtitle}>用心服务，质量为王</div>
      <div className={styles.customer_list}>
        {customers.map((value) => (
          <div>
            <img src={value.src} />
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}
