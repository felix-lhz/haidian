const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const readJson = rel => JSON.parse(fs.readFileSync(path.join(ROOT, rel), 'utf8'));
const writeJson = (rel, value) => fs.writeFileSync(path.join(ROOT, rel), JSON.stringify(value, null, 2) + '\n');
const readText = rel => fs.readFileSync(path.join(ROOT, rel), 'utf8').replace(/\r\n/g, '\n');
const writeText = (rel, value) => fs.writeFileSync(path.join(ROOT, rel), value.replace(/\r\n/g, '\n'));

const zhPrelude = `# 京张双答 / JING-ZHANG TWO ANSWERS

> **一条公共路径，四种城市状态。** 在大钟寺中心，一条 **4 米原型公共路径**在 OPEN、TRIAL、PAUSE、RETIRE 四态中始终连续；AI 只占一侧可逆试验湾，人工服务与回执廊始终开放。[data:visual/assets/prototype-model.json] [metric:s7_public_route_prototype_width_m]

普通答案不是备用方案，而是准入前提：常规接驳、轮椅与盲道路线、遮阴候车、静态导视和人工窗口必须先独立成立。AI 只有在同题、同人、同空间条件下证明增量，才可由人类委员会作出 adopt / revise / stop；停止后设备沿独立维护线撤出，公共层不借用试验空间。[data:visual/assets/two-answers.json] [depth:overall_spatial_structure]

![一路四态单页评审摘要](assets/figures/jury-summary.png)

## S7 建筑—公共空间原型

大钟寺旗舰样板由五个相互独立但可追踪的空间层组成：①南北与东西两条 4 米公共路线；②东南侧单侧试验湾与可逆缓冲；③西南侧有人值守的回执廊；④树池、雨水花园、遮阴候车和不受占用的疏散面；⑤控制、存储、维护、废弃物和设备撤场后场。1:500 平面、1:200 生活剖面、1:50/1:20 节点与同机位四态轴测使用同一组件 ID。[data:visual/assets/prototype-model.json] [depth:three_key_area_detailed_design]

材料采用可逆概念原型：螺栓连接镀锌钢框架、穿孔金属遮阳屏、干式预制压重基础、透水预制铺装和可更换证据面板。OPEN 仅运行公共层；TRIAL 在许可、岗位和普通基线齐全后限时开放一侧；PAUSE 隔离设备并由人工完成同题任务；RETIRE 拆除插件、复位铺装并保留公共服务与复盘面板。结构、消防、基础、排水与耐久仍待专业复核，价格保持 pending_market_quote。[data:visual/assets/e2-readiness.json]

## 三个备选，一次空间裁决

同一任务、用户、场地和硬门下，ALT-A 中央混合湾因切断公共十字并冲突消防/撤场而 reject_design；ALT-B 分散双湾保住路线但监督与撤场碎片化，返回 revise_design；ALT-C 单侧可逆湾是唯一 advance_design。设计备选状态不等同于现场 adopt / revise / stop，计算只证明几何规则自洽。[data:visual/assets/spatial-decision.json] [metric:spatial_alternative_count]

ALT-C 的概念公共路线、单侧试验范围和可逆缓冲均由同一局部米制审计生成。[metric:alt_c_public_route_length_m] [metric:alt_c_trial_area_sqm] [metric:alt_c_reversible_buffer_area_sqm]

岗位—急停距离沿用同一输入；正式底图、站口、权属或专业条件变化时必须重算，图纸和文字服从结果。[metric:alt_c_max_estop_staff_distance_m]

## 当前实施门：G0 参与者预可行性已记录，外部条件保持 HOLD

当前不是“不可实施”，而是诚实位于 **G0：参与者侧预可行性已记录，外部条件保持 HOLD**。下一道门仍要求完成现场测绘、权属和轨道接口核验，关闭场地/消防/无障碍/临电/网络/交通组织/设备安全等许可依赖，落实四个独立责任岗位，再记录连续 7 个普通运行日。任一条件缺失，AI 试验不启动，但普通开放日仍可独立筹备。[data:visual/assets/e2-readiness.json] [metric:e2_permit_gate_count]

### S7 预可行性裁定包

参与者侧现可复核：48㎡回执廊按 4㎡/人舒适容量假设形成 **12 人同时使用设计上限**；普通服务、场地、安全与数据岗位合计 **2.28 FTE-equivalent**；成本分为 7 类。[metric:s7_design_occupancy_cap_person] [metric:s7_staffing_fte_equivalent] [metric:s7_cost_class_count]

成本另设低/基准/高 3 种费率敏感性，但正式总价保持空值；10 项关键依赖必须顺序闭合。[metric:s7_rom_sensitivity_scenario_count] [metric:s7_critical_dependency_count]

十二项验收中，8 项可由当前几何、数量和责任接口判断，4 项必须通过现场普通基线与试验取得。[metric:s7_acceptance_indicator_count] [metric:s7_immediately_judgeable_acceptance_count] [metric:s7_field_dependent_acceptance_count]

当前许可、报价、具名运营主体、专业签章和现场授权全部为 0；这组数字是诚实的外部 HOLD，不是方案空白。[metric:verified_quote_count] [metric:named_operator_count]

ROM 方法引用北京市 2025 年建设工程计价依据执行规定、2026 年 8 月造价信息及城市更新实施方案指南。所有数量仍是投稿原型假设；无法映射到同口径官方信息的设备保持 pending_market_quote，不推定采购价。[source:BEIJING-COST-BASIS-2025-EXECUTION] [source:BEIJING-COST-INFO-202608] [source:BEIJING-URBAN-RENEWAL-GUIDE-202405]

现场客流、安全、效率、满意度、能耗、价格和恢复时长继续为 unknown / not_field_run。12 份测量契约说明“如何验证”，不冒充验证结果。[metric:measurement_contract_count] [metric:field_verification_result_count]

## 正式规划背景与运营叠加

2026 年公开背景明确约 1668.2 公顷街区范围、9 公里京张绿带与“一带一轴、两心多点”，大钟寺是两处中心之一；二期配套工程已完工并形成鱼骨状慢行联系。[source:BEIJING-BLOCK-PLAN-APPROVED-20260812] [source:BEIJING-JZ-PHASE2-COMPLETE-20260714]

这些事实是可信底图，不是方案主角。“一脊三站两翼”是嵌入绿带、对接大钟寺中心与创新发展轴的可停、可撤运营层；六条缝合只对接已建或已公布的慢行方向，不被画成拟建道路。官方 1668.2 公顷范围与本投稿 11.4 平方公里临时可复算几何分开登记，政府报道也不等于本团队踏勘、测绘、产权或工程验收。[data:visual/assets/spatial-atlas.json] [metric:official_planning_area_ha] [metric:submitted_provisional_area_sqm]

![正式背景上的京张双答运营叠加](assets/figures/site-overview.png)

![大钟寺首层、公共空间、交通与蓝绿叠合](assets/figures/land-use-structure.png)
`;

const enPrelude = `# JING-ZHANG TWO ANSWERS

> **One public route, four civic states.** At Dazhongsi centre, a **4 m prototype public route** remains continuous through OPEN, TRIAL, PAUSE and RETIRE. AI occupies only a one-sided reversible trial bay; staffed service and the Receipt Porch remain open.[data:visual/assets/prototype-model.json] [metric:s7_public_route_prototype_width_m]

The ordinary answer is an admission prerequisite, not a fallback: conventional interchange, wheelchair and tactile routes, shaded waiting, static wayfinding and a staffed desk must work independently. AI may be considered only after a same-task, same-user, same-space comparison; a human committee alone decides adopt / revise / stop. On stopping, equipment leaves through an independent maintenance route without borrowing the public layer.[data:visual/assets/two-answers.json] [depth:overall_spatial_structure]

![One-route four-state jury summary](assets/figures/jury-summary.en.png)

## S7 architectural–public-space prototype

The Dazhongsi flagship has five independent, traceable layers: two 4 m public routes; a southeast one-sided trial bay and reversible buffer; a southwest staffed Receipt Porch; tree pits, rain gardens, shaded waiting and an unoccupied egress surface; and a back-of-house route for control, storage, maintenance, waste and retirement. The 1:500 plan, 1:200 lived sections, 1:50/1:20 nodes and same-camera state axonometrics share component IDs.[data:visual/assets/prototype-model.json] [depth:three_key_area_detailed_design]

The reversible prototype palette is bolted galvanized steel, perforated-metal shade, dry precast ballast foundations, permeable precast paving and replaceable evidence panels. OPEN runs the public layer only; TRIAL opens one side after permits, posts and baseline close; PAUSE isolates equipment while staff complete the same task; RETIRE removes plug-ins, relays paving and retains public service and review panels. Structure, fire, foundations, drainage and durability await specialist review; all prices remain pending_market_quote.[data:visual/assets/e2-readiness.json]

## Three alternatives, one spatial decision

Under one task, users, site and hard gates, ALT-A central mixing is reject_design because it cuts the public cross and conflicts with fire/removal; ALT-B split bays retain routes but fragment supervision and removal, so revise_design; ALT-C one-sided reversible bay is the sole advance_design. These design-option states are not field adopt / revise / stop decisions; the computation tests geometric consistency only.[data:visual/assets/spatial-decision.json] [metric:spatial_alternative_count]

ALT-C route, one-sided trial area and reversible buffer come from one local-metric audit.[metric:alt_c_public_route_length_m] [metric:alt_c_trial_area_sqm] [metric:alt_c_reversible_buffer_area_sqm]

Staff-to-e-stop distance uses the same input. Any change in official base, entrances, title or specialist constraints requires a rerun; drawings and text must follow the result.[metric:alt_c_max_estop_staff_distance_m]

## Current implementation gate: participant pre-feasibility documented; external conditions on HOLD

The scheme is not labelled “unimplementable”; it is honestly at **G0: participant-side pre-feasibility documented, external conditions on HOLD**. The next gate still requires site survey, title and rail-interface checks; closure of site, fire, accessibility, temporary power, network, traffic and equipment-safety dependencies; four independent accountable posts; then seven consecutive ordinary operating days. If any condition is missing, AI trial does not start, while an ordinary open day can still be prepared.[data:visual/assets/e2-readiness.json] [metric:e2_permit_gate_count]

### S7 pre-feasibility decision package

Participant-side decisions are now reviewable: the 48 sqm Receipt Porch uses a 4 sqm/person comfort assumption to set a **12-person concurrent design cap**; baseline service, venue, safety and data coverage total **2.28 FTE-equivalent**; cost planning uses seven classes.[metric:s7_design_occupancy_cap_person] [metric:s7_staffing_fte_equivalent] [metric:s7_cost_class_count]

Low/base/high rate sensitivities are defined while formal totals remain blank; ten critical dependencies must close in order.[metric:s7_rom_sensitivity_scenario_count] [metric:s7_critical_dependency_count]

Of twelve acceptance indicators, eight are judgeable from present geometry, quantities and responsibility interfaces, while four require a field baseline and trial.[metric:s7_acceptance_indicator_count] [metric:s7_immediately_judgeable_acceptance_count] [metric:s7_field_dependent_acceptance_count]

Permits, verified quotes, a named operator, professional sign-off and authorised site action remain zero. These are explicit external HOLDs, not concealed gaps.[metric:verified_quote_count] [metric:named_operator_count]

The ROM method references Beijing's rule for the 2025 construction cost basis, August 2026 cost information and the urban-renewal implementation-plan guide. All quantities remain participant prototype assumptions; equipment without a scope-matched official line stays pending_market_quote.[source:BEIJING-COST-BASIS-2025-EXECUTION] [source:BEIJING-COST-INFO-202608] [source:BEIJING-URBAN-RENEWAL-GUIDE-202405]

Field footfall, safety, efficiency, satisfaction, energy, price and recovery duration remain unknown / not_field_run. Twelve measurement contracts define how to verify; they are not results.[metric:measurement_contract_count] [metric:field_verification_result_count]

## Approved planning context and operating overlay

Published 2026 context records an approximately 1,668.2 ha neighbourhood-planning area, a 9 km Jing-Zhang green belt and a “belt–axis–two centres–multiple nodes” structure, with Dazhongsi as one centre; Phase II supporting works are complete and a fishbone slow-mobility network is reported.[source:BEIJING-BLOCK-PLAN-APPROVED-20260812] [source:BEIJING-JZ-PHASE2-COMPLETE-20260714]

These facts are the credible base, not the design protagonist. The spine/stations/wings form a stoppable, removable operating layer embedded in the green belt and aligned with Dazhongsi centre and the innovation axis; six stitches align with existing or published slow-mobility directions and are not proposed roads. The official 1,668.2 ha context and the submission's 11.4 sq km provisional geometry stay separate. Government reporting is not participant fieldwork, survey, title or acceptance evidence.[data:visual/assets/spatial-atlas.json] [metric:official_planning_area_ha] [metric:submitted_provisional_area_sqm]

![Jing-Zhang operating overlay on approved context](assets/figures/site-overview.en.png)

![Dazhongsi ground, public space, transit and blue-green overlay](assets/figures/land-use-structure.en.png)
`;

function frontMatter(text) {
  const match = text.match(/^---\n[\s\S]*?\n---\n/);
  if (!match) throw new Error('Proposal front matter missing');
  return match[0];
}

function rebuildProposal(rel, lang) {
  const source = readText(rel);
  const anchor = lang === 'zh' ? '## 设计依据与资料清单' : '## Design Basis and Source List';
  const at = source.indexOf(anchor);
  if (at < 0) throw new Error(`Proposal anchor missing: ${rel}`);
  let body = source.slice(at)
    .replace(/V16/g, 'V17')
    .replace(/G0 NO-GO/g, lang === 'zh' ? 'G0：进入测绘与许可准备' : 'G0: SURVEY + PERMIT PREPARATION')
    .replace(/在已批空间结构上建立城市采纳层。/g, '一条公共路径，四种城市状态。')
    .replace(/Civic adoption on approved structure/g, 'One public route, four civic states');
  let front = frontMatter(source)
    .replace(/^title:.*$/m, lang === 'zh' ? 'title: "京张双答 / JING-ZHANG TWO ANSWERS"' : 'title: "JING-ZHANG TWO ANSWERS"')
    .replace(/summary:.*\n/, lang === 'zh'
      ? 'summary: "一条4米原型公共路径在OPEN、TRIAL、PAUSE、RETIRE四态不断线；AI只占一侧，人工回执廊始终开放。"\n'
      : 'summary: "One 4 m prototype public route stays continuous across OPEN, TRIAL, PAUSE and RETIRE; AI occupies one side while the staffed Receipt Porch stays open."\n');
  writeText(rel, front + '\n' + (lang === 'zh' ? zhPrelude : enPrelude) + '\n' + body.trim() + '\n');
}

function updateStructuredData() {
  const model = readJson('visual/assets/prototype-model.json');
  model.schema_version = '1.15.0';
  model.dataset_id = 'jingzhang-v17-3-prefeasibility-decision-package';
  model.core_claim = {zh:'大钟寺一条4米原型公共路径在四态中不断线；AI只占一侧，人工回执廊始终开放。',en:'A 4 m prototype public route remains unbroken across four states; AI occupies one side and the staffed Receipt Porch stays open.'};
  model.canonical_view_refs = {city_context:'FIG-SITE-OVERVIEW-V17',ground_interface:'FIG-LAND-USE-V17',landmark_family:'FIG-KEY-AREAS-V17',continuous_journey:'FIG-MOBILITY-V17',evidence_desk:'FIG-METRICS-V17'};
  model.context_feature_refs = ['approved_green_belt','innovation_axis','dazhongsi_centre','fishbone_slow_mobility'];
  model.existing_public_use_refs = ['BEIJING-JZ-PHASE2-COMPLETE-20260714'];
  model.public_route_invariant = {clear_width_m:4,states:['OPEN','TRIAL','PAUSE','RETIRE'],interruption_allowed:false};
  model.s7.state_geometry_refs = Object.fromEntries(Object.keys(model.s7.states).map(k => [k, `S7-STATE-${k}`]));
  model.s7.maintenance_route_refs = ['S7-SERVICE-S','S7-RETIRE-E'];
  model.s7.experience_camera_ref = 'CAM-S7-NW-01';
  model.s7.visual_priority = 'hero';
  model.implementation_stage = 'G0_participant_prefeasibility_documented_external_holds';
  model.next_gate_requirements = ['survey_complete','title_and_interface_verified','permit_dependencies_closed','four_independent_posts','seven_ordinary_days'];
  Object.assign(model.current_gate,{
    gate_id:'G0-S7-PREFEASIBILITY',
    decision:'participant_prefeasibility_documented_external_holds',
    public_message:{
      zh:'参与者侧容量、人员、成本结构、依赖和验收已记录；测绘、权属、八类许可、具名岗位、正式报价和七日普通基线未齐，AI试验保持HOLD。',
      en:'Participant-side capacity, staffing, cost structure, dependencies and acceptance are documented. Survey, title, eight permits, named posts, verified quotes and a seven-day baseline are incomplete; AI trial remains on HOLD.'
    }
  });
  for (const p of model.architectural_prototypes) {
    p.canonical_view_refs = p.id === 'LMK-03' ? ['S7-PLAN-500','S7-SEC-AA-200','S7-AXON-CUTAWAY'] : p.plan_refs.concat(p.section_refs);
    p.context_feature_refs = p.id === 'LMK-03' ? ['dazhongsi_centre','approved_green_belt','rail_directional_interface'] : ['approved_green_belt'];
    p.existing_public_use_refs = model.existing_public_use_refs;
    p.public_route_invariant = 'uninterrupted_in_OPEN_TRIAL_PAUSE_RETIRE';
    p.state_geometry_refs = p.id === 'LMK-03' ? model.s7.state_geometry_refs : {OPEN:`${p.id}-OPEN`,PAUSE:`${p.id}-PAUSE`,RETIRE:`${p.id}-RETIRE`};
    p.maintenance_route_refs = p.service_access_refs;
    p.experience_camera_ref = p.id === 'LMK-03' ? 'CAM-S7-NW-01' : `${p.id}-CAM-01`;
    p.visual_priority = p.id === 'LMK-03' ? 'hero' : 'support';
    p.implementation_stage = p.id === 'LMK-03' ? model.implementation_stage : 'E1_concept_design';
    p.next_gate_requirements = p.id === 'LMK-03' ? model.next_gate_requirements : ['site_interface_survey','operator_confirmation'];
  }
  writeJson('visual/assets/prototype-model.json', model);

  const atlas = readJson('visual/assets/spatial-atlas.json');
  Object.assign(atlas,{schema_version:'1.15.0',publication_version:'V17.3',subtitle:{zh:'一条公共路径，四种城市状态',en:'One public route, four civic states'},canonical_view_refs:model.canonical_view_refs,context_feature_refs:model.context_feature_refs,existing_public_use_refs:model.existing_public_use_refs,public_route_invariant:model.public_route_invariant,state_geometry_refs:model.s7.state_geometry_refs,maintenance_route_refs:model.s7.maintenance_route_refs,experience_camera_ref:model.s7.experience_camera_ref,visual_priority:'hero',implementation_stage:model.implementation_stage,next_gate_requirements:model.next_gate_requirements,interface_status:['existing_published','approved_context','design_proposal','unknown']});
  writeJson('visual/assets/spatial-atlas.json', atlas);

  const scenes = readJson('visual/assets/two-answers.json');
  Object.assign(scenes,{schema_version:'1.15.0',publication_version:'V17.3',subtitle:{zh:'一条公共路径，四种城市状态',en:'One public route, four civic states'},public_route_invariant:model.public_route_invariant,canonical_view_refs:model.canonical_view_refs,context_feature_refs:model.context_feature_refs,existing_public_use_refs:model.existing_public_use_refs,state_geometry_refs:model.s7.state_geometry_refs,maintenance_route_refs:model.s7.maintenance_route_refs,experience_camera_ref:model.s7.experience_camera_ref,visual_priority:'hero',implementation_stage:model.implementation_stage,next_gate_requirements:model.next_gate_requirements});
  for (const s of scenes.scenarios) {
    s.visual_priority = s.code === 'S7' ? 'hero' : (['T2','S2'].includes(s.code) ? 'support' : 'reference');
    s.implementation_stage = s.code === 'S7' ? model.implementation_stage : 'E1_concept_design';
    s.next_gate_requirements = s.code === 'S7' ? model.next_gate_requirements : ['baseline_validation','operator_assignment'];
    s.public_route_invariant = 'ordinary_service_continuous_in_all_states';
  }
  writeJson('visual/assets/two-answers.json', scenes);
}

function updateReadiness() {
  const ready = readJson('visual/assets/e2-readiness.json');
  ready.schema_version = '1.15.0';
  ready.dataset_id = 'jingzhang-v17-3-s7-participant-prefeasibility';
  ready.title = {zh:'V17.3 S7 预可行性裁定包',en:'V17.3 S7 Pre-feasibility Decision Package'};
  ready.definition = {
    zh:'参与者侧容量、人员、成本结构、依赖、验收与恢复方法已记录；测绘、许可、报价、运营任命、专业签章、现场授权和绩效仍为外部HOLD。',
    en:'Participant-side capacity, staffing, cost structure, dependencies, acceptance and recovery methods are documented; survey, permits, quotes, operator appointment, professional sign-off, site authorisation and performance remain external HOLDs.'
  };
  ready.prototype_readiness = 'G0_participant_prefeasibility_documented_external_holds';
  ready.capacity_egress_envelope = {
    status:'participant_design_assumption_pending_survey_and_professional_review',
    evidence_porch_area_sqm:48,
    comfort_area_per_person_sqm:4,
    concurrent_design_cap_person:12,
    formula:'48 sqm / 4 sqm_per_person = 12 persons',
    public_routes_excluded_from_occupancy:true,
    public_route_clear_width_m:4,
    trial_bay_public_occupancy_allowed:false,
    open_porch_dimensions_m:{width:8,depth:6},
    max_geometry_distance_to_open_edge_m:5,
    distance_formula:'sqrt(8^2 + 6^2) / 2 = 5 m',
    statutory_egress_conclusion:false,
    dependencies:['official_survey','fire_review','accessibility_review','operator_review']
  };
  ready.staffing_scenarios = [
    {role:'baseline_service_post',weekly_hours:40,relief_factor:1.2,fte_equivalent:1.2,appointment_status:'unappointed'},
    {role:'venue_lead',weekly_hours:12,relief_factor:1.2,fte_equivalent:0.36,appointment_status:'unappointed'},
    {role:'safety_lead',weekly_hours:12,relief_factor:1.2,fte_equivalent:0.36,appointment_status:'unappointed'},
    {role:'data_recorder',weekly_hours:12,relief_factor:1.2,fte_equivalent:0.36,appointment_status:'unappointed'}
  ];
  ready.fte_formula = {
    standard_weekly_hours:40,
    formula:'weekly_hours / 40 * relief_factor',
    participant_side_total_fte_equivalent:2.28,
    vendor_technician_substitution_allowed:false,
    status:'participant_staffing_scenario_not_appointment_or_hiring_commitment'
  };
  ready.cost_basis = {
    currency:'CNY',
    price_basis_month:'2026-08',
    method_status:'participant_rom_assumption_not_formal_estimate_or_quote',
    sources:['BEIJING-COST-BASIS-2025-EXECUTION','BEIJING-COST-INFO-202608','BEIJING-COST-MARKET-REF-202608','BEIJING-URBAN-RENEWAL-GUIDE-202405'],
    mapped_reference_lines:[
      {line_id:'0129000003-2',scope:'Q235B hot-rolled steel plate, 2 mm',mapping_status:'reference_only_scope_review_required'},
      {line_id:'0129000004-2',scope:'Q235B hot-rolled steel plate, 3 mm',mapping_status:'reference_only_scope_review_required'},
      {line_id:'2811000601',scope:'0.6/1kV power cable YJV 3x4+1x2.5',mapping_status:'reference_only_scope_review_required'},
      {line_id:'3601001201',scope:'1000x1000x80 permeable tree pit',mapping_status:'reference_only_scope_review_required'}
    ],
    formal_estimate_cny:null,
    verified_quote_count:0,
    unmapped_items_rule:'pending_market_quote'
  };
  ready.cost_classes = [
    {id:'C1',scope:'survey_design_professional_coordination',rate_status:'pending_scope_matched_basis'},
    {id:'C2',scope:'public_route_and_accessibility',rate_status:'pending_scope_matched_basis'},
    {id:'C3',scope:'blue_green_shade_furniture_lighting',rate_status:'pending_scope_matched_basis'},
    {id:'C4',scope:'staffed_evidence_porch',rate_status:'pending_scope_matched_basis'},
    {id:'C5',scope:'safety_trial_boundary_and_interfaces',rate_status:'pending_scope_matched_basis'},
    {id:'C6',scope:'first_year_operation_maintenance_insurance_readiness',rate_status:'pending_operator_and_quote'},
    {id:'C7',scope:'restoration_reserve',rate_status:'formula_documented_quote_pending'}
  ];
  ready.rom_scenarios = {
    direct_works_formula:'sum(design_quantity * documented_scope_matched_rate)',
    survey_design_allowance_rate:0.10,
    installation_logistics_allowance_rate:0.15,
    uncertainty_allowance_rate:0.20,
    scenarios:[
      {id:'ROM-LOW',rate_input_multiplier:0.8,total_cny:null,status:'pending_complete_rate_inputs'},
      {id:'ROM-BASE',rate_input_multiplier:1.0,total_cny:null,status:'pending_complete_rate_inputs'},
      {id:'ROM-HIGH',rate_input_multiplier:1.2,total_cny:null,status:'pending_complete_rate_inputs'}
    ]
  };
  ready.restoration_reserve = {
    rate:0.12,
    basis:'removable_works_subtotal',
    held_outside_base_rom:true,
    amount_cny:null,
    status:'formula_documented_quote_pending'
  };
  const deps = [
    ['K01','official_geometry_confirmation',[], 'G0'],
    ['K02','survey_and_title_verification',['K01'],'G1'],
    ['K03','operator_and_role_appointments',['K02'],'G1'],
    ['K04','fire_access_traffic_utility_coordination',['K02'],'G2'],
    ['K05','cost_plan_and_budget_authority',['K02','K04'],'G2'],
    ['K06','procurement_and_specification_freeze',['K03','K05'],'G3'],
    ['K07','off_site_fabrication',['K06'],'G3'],
    ['K08','public_baseline_assembly',['K04','K07'],'G4'],
    ['K09','seven_day_ordinary_baseline',['K03','K08'],'G4'],
    ['K10','controlled_trial_recovery_and_civic_decision',['K09'],'G5']
  ];
  ready.critical_dependencies = deps.map(([id,action,depends_on,gate])=>({id,action,depends_on,exit_gate:gate,status:'not_started',evidence_output:`${id}_receipt`,failure_fallback:'remain_or_return_to_ordinary_open_state'}));
  ready.acceptance_register = [
    ['ACC-D01','public_route_connected_in_all_four_states','design_time_judgeable','pass'],
    ['ACC-D02','public_route_outside_trial_boundary','design_time_judgeable','pass'],
    ['ACC-D03','fire_route_independent','design_time_judgeable','pass'],
    ['ACC-D04','removal_route_independent','design_time_judgeable','pass'],
    ['ACC-D05','dual_estops_reachable_from_safety_post','design_time_judgeable','pass'],
    ['ACC-D06','sixteen_quantity_formulas_resolve','design_time_judgeable','pass'],
    ['ACC-D07','four_accountable_roles_not_conflated','design_time_judgeable','pass'],
    ['ACC-D08','all_eight_permits_mandatory_before_trial','design_time_judgeable','pass'],
    ['ACC-F01','ordinary_task_completion','field_dependent',null],
    ['ACC-F02','accessibility_non_regression','field_dependent',null],
    ['ACC-F03','safety_near_miss_and_human_intervention','field_dependent',null],
    ['ACC-F04','recovery_duration','field_dependent',null]
  ].map(([id,indicator,evidence_tier,result])=>({id,indicator,evidence_tier,result,field_status:evidence_tier==='field_dependent'?'not_field_run':'geometry_or_contract_checked'}));
  ready.maintenance_cycles = [
    {id:'MC-DAY',interval:'each_open_day',scope:'route_accessibility_state_board_and_staff_check'},
    {id:'MC-TRIAL',interval:'before_and_after_each_trial',scope:'boundary_estop_equipment_log_and_takeover_check'},
    {id:'MC-MONTH',interval:'monthly',scope:'dry_connections_paving_drainage_lighting_and_inventory'},
    {id:'MC-YEAR',interval:'annual',scope:'public_evidence_assets_insurance_and_retirement_review'}
  ];
  ready.alternative_delivery_comparison = [
    {alternative_id:'ALT-A',decision:'reject_design',delivery_note:'shorter perimeter and cable runs do not offset public-route failure'},
    {alternative_id:'ALT-B',decision:'revise_design',delivery_note:'phasing possible but perimeter, supervision, fire and removal complexity increase'},
    {alternative_id:'ALT-C',decision:'advance_design',delivery_note:'public continuity and consolidated service/maintenance; cost remains quote-dependent'}
  ];
  ready.external_evidence_status = {
    verified_quote_count:0,
    named_operator_count:0,
    professional_signoff_count:0,
    external_release_count:0,
    authorised_site_action_count:0,
    field_result_count:0,
    overall_status:'HOLD'
  };
  Object.assign(ready.readiness_gate,{
    gate_id:'G0-S7-PREFEASIBILITY',
    decision:'participant_prefeasibility_documented_external_holds',
    next_decision:'external_evidence_required_before_trial'
  });
  writeJson('visual/assets/e2-readiness.json', ready);
}

function updateMetrics() {
  const data = readJson('metrics.json');
  data.metrics.s7_public_route_prototype_width_m = {status:'known',value:4,unit:'m',source_files:['visual/assets/prototype-model.json'],formula:'min(s7.public_routes[].clear_width_m)',confidence:'medium',assumptions:['A-S7-PROTOTYPE-DIMENSIONS']};
  data.metrics.s7_public_route_state_invariant_count = {status:'known',value:4,unit:'states',source_files:['visual/assets/prototype-model.json'],formula:'count(OPEN,TRIAL,PAUSE,RETIRE preserving public_route_invariant)',confidence:'medium',assumptions:['A-S7-PROTOTYPE-DIMENSIONS']};
  const known = (value,unit,formula)=>({status:'known',value,unit,source_files:['visual/assets/e2-readiness.json'],formula,confidence:'high',assumptions:['ASM-V17-3-PREFEASIBILITY']});
  Object.assign(data.metrics,{
    s7_design_occupancy_cap_person:known(12,'persons','48 sqm evidence porch / 4 sqm per person comfort assumption'),
    s7_staffing_fte_equivalent:known(2.28,'fte_equivalent','sum(weekly_hours / 40 * 1.2 relief factor)'),
    s7_cost_class_count:known(7,'count','count(cost_classes)'),
    s7_rom_sensitivity_scenario_count:known(3,'count','count(rom_scenarios.scenarios)'),
    s7_critical_dependency_count:known(10,'count','count(critical_dependencies)'),
    s7_acceptance_indicator_count:known(12,'count','count(acceptance_register)'),
    s7_immediately_judgeable_acceptance_count:known(8,'count','count(acceptance_register where evidence_tier=design_time_judgeable)'),
    s7_field_dependent_acceptance_count:known(4,'count','count(acceptance_register where evidence_tier=field_dependent)'),
    s7_maintenance_cycle_count:known(4,'count','count(maintenance_cycles)'),
    s7_restoration_reserve_template_count:known(1,'count','count(restoration_reserve where rate and basis documented)'),
    verified_quote_count:known(0,'count','external_evidence_status.verified_quote_count'),
    named_operator_count:known(0,'count','external_evidence_status.named_operator_count'),
    professional_signoff_count:known(0,'count','external_evidence_status.professional_signoff_count'),
    external_release_count:known(0,'count','external_evidence_status.external_release_count'),
    authorised_site_action_count:known(0,'count','external_evidence_status.authorised_site_action_count')
  });
  writeJson('metrics.json', data);
}

function updateSourcesAndRights() {
  const data = readJson('sources.json');
  const records = [
    {
      id:'BEIJING-COST-BASIS-2025-EXECUTION',publisher:'北京市住房和城乡建设委员会',date:'2026-04-30',retrieved_at:'2026-09-01',source_type:'official_public',license:'Public information; quotation subject to publisher terms',
      url:'https://zjw.beijing.gov.cn/bjjs/xxgk/zcwj2024/gfxwj40/xxyx/744000295/index.shtml',usage:'Method basis for participant-side ROM structure; the 2025 Beijing estimate consumption standard applies from 2026-05-01.',limitations:'Not a project estimate, tender price, quote, budget approval or scope-matched professional cost review.'
    },
    {
      id:'BEIJING-COST-INFO-202608',publisher:'北京市住房和城乡建设委员会',date:'2026-08-24',retrieved_at:'2026-09-01',source_type:'official_public',license:'Public information; quotation subject to publisher terms',
      url:'https://zjw.beijing.gov.cn/bjjs/resource/cms/article/743943530/744102032/2026082409431522927.pdf',upstream_sha256:'C309CFD4187C1E15E382BA90BC42E2B18359427F34CCC780789F221048B030F1',usage:'Reference month and line identifiers for participant-side cost sensitivity; only scope-matched lines may be used.',limitations:'No formal quantity survey or scope-matched rate review has been commissioned; totals remain null.'
    },
    {
      id:'BEIJING-COST-MARKET-REF-202608',publisher:'北京市住房和城乡建设委员会',date:'2026-08-24',retrieved_at:'2026-09-01',source_type:'official_public',license:'Public information; quotation subject to publisher terms',
      url:'https://zjw.beijing.gov.cn/bjjs/resource/cms/article/743943533/744102037/2026082409443233577.pdf',upstream_sha256:'6FE9EE5009D040E14A7C26C974E056A2D3BAEBE720DF231B803CB3A7C0229D36',usage:'Market-reference cross-check for selected material line identifiers.',limitations:'Reference only; not a supplier quote, procurement commitment or complete project price basis.'
    },
    {
      id:'BEIJING-URBAN-RENEWAL-GUIDE-202405',publisher:'北京市住房和城乡建设委员会',date:'2024-05-23',retrieved_at:'2026-09-01',source_type:'official_public',license:'Public information; quotation subject to publisher terms',
      url:'https://www.beijing.gov.cn/zhengce/gfxwj/sj/202405/t20240527_3694615.html',usage:'Implementation-plan structure for scope, responsibility, funding, operation and risk evidence.',limitations:'General procedural guidance only; it does not approve this proposal or establish the applicable project route.'
    },
    {
      id:'GENERATED-RECEIPT-PORCH-V17-DAY', publisher:'OpenAI built-in image generation', date:'2026-08-21', source_type:'ai_generated_visual',
      license:'Competition display only; subject to platform and competition terms', path:'assets/media/receipt-porch-v17-day.webp', companion_path:'assets/media/receipt-porch-v17-day.jpg',
      usage:'S7 ordinary OPEN-day architectural experience only; not a photograph, survey, field result or approval evidence.',
      limitations:'Same camera and design relationship as the V17 vector model; context, materials and people are illustrative and all dimensions require survey and professional review.',
      prompt_summary:'Edited from the V15 Receipt Porch concept to a bright ordinary OPEN day preserving the public cross, one-sided reversible bay, staffed porch, blue-green edge and rear service yard; no text or logos.'
    },
    {
      id:'GENERATED-RECEIPT-PORCH-V17-NIGHT', publisher:'OpenAI built-in image generation', date:'2026-08-21', source_type:'ai_generated_visual',
      license:'Competition display only; subject to platform and competition terms', path:'assets/media/receipt-porch-v17-night.webp', companion_path:'assets/media/receipt-porch-v17-night.jpg',
      usage:'S7 night PAUSE-state architectural experience only; not a photograph, survey, field result or approval evidence.',
      limitations:'Same camera and permanent geometry as the V17 day image; lighting and people are illustrative and do not prove operations, safety or accessibility performance.',
      prompt_summary:'Same-camera night PAUSE edit preserving the public cross and staffed porch while closing the one-sided bay with reversible boundary lights; no text or logos.'
    }
  ];
  for (const record of records) {
    const at = data.sources.findIndex(s => s.id === record.id);
    if (at >= 0) data.sources[at] = record; else data.sources.push(record);
  }
  writeJson('sources.json', data);
  const rightsRel='report/copyright_statement.md';
  let rights=readText(rightsRel);
  if(!rights.includes('GENERATED-RECEIPT-PORCH-V17-DAY')) rights += `\n- \`GENERATED-RECEIPT-PORCH-V17-DAY\` and \`GENERATED-RECEIPT-PORCH-V17-NIGHT\`: OpenAI built-in image-generation edits, 2026-08-21. Competition-display use only. They communicate a same-camera concept state and are not site photographs, measured conditions, approvals or field results.\n`;
  writeText(rightsRel,rights);
}

function updateChangelog() {
  const rel = 'changelog.md';
  let text = readText(rel);
  if (!text.includes('## 2026-08-21 · V17')) {
    text += `\n## 2026-08-21 · V17\n\n- Restored the buildable civic cross as primary evidence and demoted planning context to a verified base.\n- Established one canonical 4 m route invariant across OPEN / TRIAL / PAUSE / RETIRE.\n- Added canonical view, context, maintenance, camera, priority, stage and next-gate interfaces (schema 1.14.0).\n- Reordered both proposals around spatial conclusion, prototype, ALT decision, next gate and approved context.\n`;
    writeText(rel, text);
  }
  if (!text.includes('## 2026-08-30 · V17.2')) {
    text += `\n## 2026-08-30 · V17.2\n\n- Rebalanced the five review figures around one dominant spatial judgment and enlarged essential labels for 1024 px review.\n- Reflowed A0 and A3 without adding design claims, data, scenes or metrics.\n- Replaced the duplicated report hero and expanded the interaction assembly/state panel.\n- Enforced zero visible CJK characters across English figures, PDFs and offline HTML while retaining the licensed embedded font.\n`;
    writeText(rel, text);
  }
  if (!text.includes('## 2026-09-01 · V17.3')) {
    text += `\n## 2026-09-01 · V17.3\n\n- Added an S7 participant-side pre-feasibility decision package: capacity, staffing/FTE, seven cost classes, three ROM sensitivities, ten dependencies, twelve acceptance indicators, maintenance cycles and restoration reserve.\n- Kept survey, permits, verified quotes, named operator, professional sign-off, site authorisation and field results at zero/HOLD.\n- Registered current Beijing cost-basis and urban-renewal implementation sources without presenting a formal estimate or quote.\n- Concentrated publication changes on the implementation evidence entry while preserving the recognised spatial mechanism.\n`;
    writeText(rel, text);
  }
}

function updateAssumptions() {
  const data = readJson('assumptions.json');
  const record = {
    id:'ASM-V17-3-PREFEASIBILITY',
    status:'participant_design_assumption',
    statement:{zh:'12人容量、2.28 FTE、ROM比例、关键依赖和验收拆分是参与者侧预可行性假设，不是批准容量、人员承诺、正式概算或现场结果。',en:'The 12-person cap, 2.28 FTE, ROM allowances, critical path and acceptance split are participant-side pre-feasibility assumptions, not approved capacity, staffing commitments, a formal estimate or field results.'},
    impact:{zh:'完成测绘、运营主体确认、专业复核和正式询价后必须重算并由相应责任方签署。',en:'They must be recalculated and signed by accountable parties after survey, operator confirmation, professional review and formal quotations.'}
  };
  const at=data.assumptions.findIndex(x=>x.id===record.id);if(at>=0)data.assumptions[at]=record;else data.assumptions.push(record);
  writeJson('assumptions.json',data);
}

function run() {
  rebuildProposal('proposal.md','zh');
  rebuildProposal('proposal.en.md','en');
  updateStructuredData();
  updateReadiness();
  updateMetrics();
  updateSourcesAndRights();
  updateAssumptions();
  updateChangelog();
  console.log('V17.3 canonical content and schema 1.15.0 written');
}

module.exports = {run};
if (require.main === module) run();
