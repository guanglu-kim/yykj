import React from 'react';
import styles from './index.less';
import Banner from '../components/banner';
import Prolink from '../components/pro_link';
import Footer from '../components/footer';

const sbs = [
  {
    src: require(`../../img/sb1.png`),
    title: `基于数字智慧的统一管理视图`,
    desc: `基于数字孪生理念实现对城市部件、能源电力、公共安全、地理水文、
    旅游产业等各类公共服务管理对象的可视化呈现，构建监控、预警、诊
    断、分析为一体的智慧城市管控窗口，支撑城市管理中跨组织部门、跨
    地域、跨行业的统一管理。`,
  },
  {
    src: require(`../../img/sb2.png`),
    title: `结合业务流程的全新消费场景`,
    desc: `	
    通过对城市实体对象、关系数据、活动数据进行整合，打造智慧城市知
    识图谱；基于城市管理业务流程融合多领域数据资源，针对城市主要管
    理领域提供全新的专项管理场景，带来专项领域管理新模式。`,
  },
  {
    src: require(`../../img/sb3.png`),
    title: `基于数字智慧的统一管理视图`,
    desc: `基于数字孪生理念实现对城市部件、能源电力、公共安全、地理水文、
    旅游产业等各类公共服务管理对象的可视化呈现，构建监控、预警、诊
    断、分析为一体的智慧城市管控窗口，支撑城市管理中跨组织部门、跨
    地域、跨行业的统一管理。`,
  },
];

function SBContent(props) {
  const { obj, index } = props;
  if (index % 2 == 1)
    return (
      <div className={styles.content}>
        <div>
          <div style={{ textAlign: `end` }}>{obj.title}</div>
          <div style={{ alignSelf: `flex-end` }}></div>
          <div>{obj.desc}</div>
        </div>
        <img src={obj.src} />
      </div>
    );
  else
    return (
      <div className={styles.content} style={{ background: `#F9FAFC` }}>
        <img src={obj.src} />
        <div>
          <div>{obj.title}</div>
          <div></div>
          <div>{obj.desc}</div>
        </div>
      </div>
    );
}

export default function Page() {
  return (
    <>
      <div className={styles.banner}>
        <Banner />
        <div className={styles.top}>
          <div>丰富的行业经验</div>
          <div>精诚的解决方案</div>
          <div></div>
          <div>
            智慧城市可视化是数字城市建设的重要载体，是智慧城市建设的组
            成部分，融合城市地理、政服、经济、建设等数据资源，将城市管
            理各领域的核心指标与空间信息进行整合，形成跨领域、跨平台的
            管理场景，以全局视角掌控城市业务，打造新一代智慧城市IOC，
            为城市治理、经济规划、政务服务、应急指挥等提供有效支撑。
          </div>
        </div>
      </div>
      <div className={styles.solution_type}>
        <div>
          <div>
            <img src={require(`../../img/s1.png`)} />
          </div>
          <div>规模庞大 难以实现统一管理</div>
          <div>
            城市公共服务基础设施包括交通、商业、
            工业、教育、环保等，管理区域大、管 理对象多，缺少统一管理蓝图
          </div>
        </div>
        <div>
          <div>
            <img src={require(`../../img/s2.png`)} />
          </div>
          <div>数据复杂 难以构建融合场景</div>
          <div>
            城市数据资源庞大而复杂，数据缺少联
            动管理消费场景，无法发挥数据价值的 最大化
          </div>
        </div>
        <div>
          <div>
            <img src={require(`../../img/s3.png`)} />
          </div>
          <div>领域众多 缺少统一决策依据</div>
          <div>
            城市管理领域众多，彼此相互交叉渗透，
            单个领域独立管理难以适应现代城市管 理需求，缺乏直观的管理决策平台
          </div>
        </div>
      </div>
      <div className={styles.cards}>
        <div>
          <img src={require(`../../img/sc1.png`)} />
          <div>城市大脑可视化解决方案</div>
          <div></div>
          <div>
            城市大脑可视化系统基于数字孪生的三维技术为基础，
            将人工智能、物联网(IOT)、大数据分析等新一代信
            息技术进行整合，通过可视化的管理方式，实时、动
            态、直观的对园区内建筑设备从宏观到微观进行全方 位管理。
          </div>
          <div>
            <Prolink text={`方案详情`} />
          </div>
        </div>
        <div>
          <img src={require(`../../img/sc2.png`)} />
          <div>智慧政务可视化解决方案</div>
          <div></div>
          <div>
            充分利用数字孪生、云计算、大数据分析、物联网等
            新技术，以用户创新、大众创新、开放创新、共同创
            新为特征，全面提升政府管理科学化、精细化、智能
            化水平，形成整体协同、高效运行、精准服务、科学
            管理的“智慧政府”新模式。
          </div>
          <div>
            <Prolink text={`方案详情`} />
          </div>
        </div>
        <div>
          <img src={require(`../../img/sc3.png`)} />
          <div>智慧应急可视化解决方案</div>
          <div></div>
          <div>
            以数字化、可视化、智能化、网络化、集成化的理念
            为目标，构建数字化预案管理系统，降低信息传递要
            素缺失率，有效提升应急指挥现场处置能力，提升应
            急指挥与调度能力，提升面对突发环境事件的应急决 策能力。
          </div>
          <div>
            <Prolink text={`方案详情`} />
          </div>
        </div>
        <div>
          <img src={require(`../../img/sc4.png`)} />
          <div>智慧公安可视化解决方案</div>
          <div></div>
          <div>
            整合多维数据，通过应用数字孪生、三维可视化技术
            构建和打通数据壁垒，实现数据资源一体化，为智慧
            公安可视化建设提供坚实的底座，满足监视预警、应
            急指挥调度、日常演练等多维度使用场景。
          </div>
          <div>
            <Prolink text={`方案详情`} />
          </div>
        </div>
        <div>
          <img src={require(`../../img/sc5.png`)} />
          <div>智慧园区可视化解决方案</div>
          <div></div>
          <div>
            借助数字孪生理念完成企业的数字化全景重构，基于
            物联网、云计算等先进技术，打造园区综合运营管理
            新模式，助力企业能够获取实时洞察运营情况并快速
            采取行动，推动数字化转型，进而实现由内而外的认 知型企业转型。
          </div>
          <div>
            <Prolink text={`方案详情`} />
          </div>
        </div>
        <div>
          <img src={require(`../../img/sc6.png`)} />
          <div>智慧能源可视化解决方案</div>
          <div></div>
          <div>
            基于数字孪生理念打造能源产品体系，在大云物移智
            等现代信息技术的支撑下，结合全栈可视化能力，与
            能源业务深度融合，连接、智能、高效的数字能源，
            赋能电力、石油化工、煤炭全产业提质增效，推动行 业数字化转型。
          </div>
          <div>
            <Prolink text={`方案详情`} />
          </div>
        </div>
      </div>
      {sbs.map((value, index) => (
        <SBContent obj={value} key={index} index={index} />
      ))}
      <Footer />
    </>
  );
}
