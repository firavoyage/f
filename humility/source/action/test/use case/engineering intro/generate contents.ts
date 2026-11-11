import { new_thread, send } from 'action/index'
import { data } from 'lib/file'

const toc = [
  '摘要 (Abstract)',
  '1. 引言 (Introduction)',
  '1.1 工程学导论：机械工程的定义与范畴',
  '1.2 机械工程的历史演变：从蒸汽机到智能机械',
  '1.3 本综述的研究目的与论文结构说明',
  '2. 机械工程的核心学科基础 (Foundational Disciplines)',
  '2.1 力学体系：从经典力学到连续介质力学',
  '2.2 材料科学：高性能材料与复合材料的应用',
  '2.3 热力学与流体力学在现代工程中的地位',
  '2.4 数学建模与计算力学的初步探索',
  '3. 现代机械工程的关键技术趋势 (Key Technological Trends)',
  '3.1 智能制造与工业4.0：自动化与数字孪生',
  '3.2 机器人技术：从工业机械臂到仿生机器人',
  '3.3 微纳制造技术：微机电系统 (MEMS) 的崛起',
  '3.4 先进制造工艺：增材制造（3D打印）的革命',
  '4. 跨学科融合：机械工程的新边界 (Interdisciplinary Integration)',
  '4.1 机电一体化：控制理论与机械结构的结合',
  '4.2 机械工程与人工智能：算法驱动的优化设计',
  '4.3 生物机械工程：医疗器械与人体仿生研究',
  '4.4 绿色机械工程：新能源驱动与可持续设计',
  '5. 工程实践中的挑战与伦理 (Challenges and Ethics)',
  '5.1 环境影响与碳中和目标的工程应对',
  '5.2 安全性、可靠性与失效分析的重要性',
  '5.3 工程师的职业道德与社会责任',
  '6. 结论与展望 (Conclusion and Future Outlook)',
  '6.1 机械工程学科的发展现状总结',
  '6.2 未来十年机械工程专业的学习重点与职业方向',
  '6.3 对初入工程领域学生的建议',
  // '参考文献 (References)',
]

const result_file = data('test')

for (const heading of toc) {
  
}

const thread = new_thread({ title: 'engineering intro toc' })

log(thread)

log(
  await send({
    thread,
    content: 'output a flat json string array of table of contents of 工程学导论 综述类论文 on mechanical engineering in zhcn for around 3k chars from the perspective of uni freshmen.',
    model: 'google/gemma-4-26b-a4b-it',
  }),
)

