
/* ════════════════════════════════════
   DATA
════════════════════════════════════ */
const SERVICES = [
  {id:1,emoji:'🎨',bg:'linear-gradient(135deg,#2a2010,#3d2e10)',badge:'⭐ 4.9',sellerInitials:'MR',sellerColor:'#F5921B',sellerTextColor:'#1a0a00',sellerName:'Maria Reyes',title:'Logo & Brand Identity Design',desc:'Professional logos, brand kits, and visual identity for orgs, events, and student projects.',fullDesc:'I create custom logo and brand identity packages tailored for student organizations, school events, and personal projects. Each package includes multiple revisions, source files, and a brand guide. Turnaround is typically 3–5 days.',price:150,priceMax:500,priceDisplay:'₱150–₱500',rating:4.9,reviews:42,category:'design',
    packages:[{name:'Basic',price:150,desc:'1 logo concept, 2 revisions, PNG/JPG delivery'},{name:'Standard',price:300,desc:'3 concepts, unlimited revisions, source files'},{name:'Premium',price:500,desc:'Full brand kit, stationery, social media assets'}],
    includes:['High-res PNG & JPG files','Source files (AI/PSD)','Commercial use rights','Up to 3 rounds of revisions','Brand color palette'],
    reviews:[{name:'Leon Cruz',initials:'LC',color:'#639922',textColor:'#1a0a00',rating:5,text:'"Delivered exactly what I asked for. Super professional and fast turnaround!"'},{name:'Rosa Alvarado',initials:'RA',color:'#D4537E',textColor:'white',rating:4,text:'"Great logo! A bit slow on revisions but the final result was worth it."'}]},
  {id:2,emoji:'💻',bg:'linear-gradient(135deg,#0f1a2a,#162a40)',badge:'🔥 Hot',sellerInitials:'CL',sellerColor:'#378ADD',sellerTextColor:'white',sellerName:'Carlo Lim',title:'Python & Web Dev Assistance',desc:'Debug code, explain concepts, and help with assignments or personal projects.',fullDesc:'I help with Python, JavaScript, HTML/CSS, and basic web frameworks. Whether you\'re stuck on a bug, need a concept explained, or want help building a small project, I\'ve got you covered. Sessions are done via chat or screen share.',price:100,priceMax:100,priceDisplay:'₱100/hr',rating:4.8,reviews:27,category:'programming',
    packages:[{name:'Quick Fix',price:100,desc:'1-hour debugging or code review session'},{name:'Project Help',price:300,desc:'3-hour session + code documentation'},{name:'Full Build',price:800,desc:'Complete small app/website with walkthrough'}],
    includes:['Screen share sessions available','Code explanation included','GitHub repo setup','Follow-up support (24 hrs)','Certificate of completion'],
    reviews:[{name:'Mike Santos',initials:'MS',color:'#378ADD',textColor:'white',rating:5,text:'"Fixed my Python bug in 20 minutes. Explained everything clearly!"'},{name:'Dana Cruz',initials:'DC',color:'#7F77DD',textColor:'white',rating:5,text:'"Built my portfolio site with Carlo\'s help. Highly recommended!"'}]},
  {id:3,emoji:'📚',bg:'linear-gradient(135deg,#1a2510,#253a18)',badge:'New',sellerInitials:'AS',sellerColor:'#639922',sellerTextColor:'white',sellerName:'Ana Santos',title:'Math & Science Tutoring',desc:'One-on-one sessions for Calculus, Physics, Chemistry, and Statistics.',fullDesc:'I offer personalized tutoring sessions for college-level Math and Science subjects. I adapt to your learning style and pace, focusing on understanding rather than memorization. Available on weekends and weekday evenings.',price:80,priceMax:80,priceDisplay:'₱80/hr',rating:5.0,reviews:15,category:'tutoring',
    packages:[{name:'Single Session',price:80,desc:'1-hour one-on-one tutoring session'},{name:'5-Session Pack',price:350,desc:'5 hours — best value for regular students'},{name:'Crash Course',price:600,desc:'6-hour intensive review before exams'}],
    includes:['Personalized study plan','Practice problems provided','Session notes/summary','Flexible scheduling','Exam tips and tricks'],
    reviews:[{name:'Paolo Reyes',initials:'PR',color:'#639922',textColor:'white',rating:5,text:'"Passed my Calculus exam thanks to Ana! So patient and clear."'},{name:'Lea Torres',initials:'LT',color:'#EF9F27',textColor:'#1a0a00',rating:5,text:'"Best tutor on campus. Explains Physics like a pro!"'}]},
  {id:4,emoji:'🎬',bg:'linear-gradient(135deg,#1f1025,#2d1838)',badge:'⭐ 4.7',sellerInitials:'JG',sellerColor:'#D4537E',sellerTextColor:'white',sellerName:'Josh Garcia',title:'Video Editing & Reels',desc:'Short-form content, thesis docs, event highlights, and social media cuts.',fullDesc:'I edit videos for social media, school projects, thesis documentaries, and org events. I work with raw footage and deliver polished, professional-looking content with music, transitions, color grading, and captions.',price:200,priceMax:800,priceDisplay:'₱200–₱800',rating:4.7,reviews:31,category:'video',
    packages:[{name:'Short Reel',price:200,desc:'Up to 60-second edited reel with music'},{name:'Event Highlight',price:450,desc:'3–5 minute highlight video, color graded'},{name:'Full Documentary',price:800,desc:'Full thesis/org documentary, 10–20 min'}],
    includes:['Color grading included','Background music licensed','Subtitle/caption option','2 rounds of revisions','Export in 1080p or 4K'],
    reviews:[{name:'Jamie Ocampo',initials:'JO',color:'#D4537E',textColor:'white',rating:5,text:'"Made our org event video look like a real production!"'},{name:'Sam Dela Cruz',initials:'SC',color:'#1D9E75',textColor:'white',rating:4,text:'"Good editing. Took a bit longer than expected but quality was great."'}]},
  {id:5,emoji:'✍️',bg:'linear-gradient(135deg,#25180f,#3a2510)',badge:'',sellerInitials:'NP',sellerColor:'#EF9F27',sellerTextColor:'#1a0a00',sellerName:'Nina Pascual',title:'Essay & Research Writing',desc:'Proofreading, editing, and writing assistance for academic requirements.',fullDesc:'I help students improve their essays, research papers, and thesis chapters through editing, proofreading, and writing consultation. I don\'t write for you — I help you write better, faster, and with more confidence.',price:120,priceMax:300,priceDisplay:'₱120–₱300',rating:4.6,reviews:19,category:'writing',
    packages:[{name:'Proofread',price:120,desc:'Grammar, spelling, and style corrections'},{name:'Edit & Revise',price:200,desc:'Content restructuring + proofreading'},{name:'Full Consultation',price:300,desc:'Outline + draft feedback + final proofread'}],
    includes:['Track changes in Word/Google Docs','Plagiarism check notes','APA/MLA formatting help','24-hour turnaround option','Confidential and private'],
    reviews:[{name:'Ria Mendoza',initials:'RM',color:'#EF9F27',textColor:'#1a0a00',rating:5,text:'"Edited my thesis intro perfectly. She understood my argument well."'},{name:'Ben Tan',initials:'BT',color:'#378ADD',textColor:'white',rating:4,text:'"Helpful and thorough. Will hire again for my research paper."'}]},
  {id:6,emoji:'🎵',bg:'linear-gradient(135deg,#0f2020,#143030)',badge:'',sellerInitials:'KV',sellerColor:'#1D9E75',sellerTextColor:'white',sellerName:'Kevin Villanueva',title:'Music Production & Jingles',desc:'Background music, event jingles, and beat production for school projects.',fullDesc:'I produce original background music, event jingles, and custom beats for school presentations, videos, and org events. All tracks are original, royalty-free for your use, and delivered in high-quality MP3/WAV format.',price:250,priceMax:600,priceDisplay:'₱250–₱600',rating:4.9,reviews:8,category:'music',
    packages:[{name:'Jingle',price:250,desc:'30-second original jingle/sting'},{name:'Background Track',price:400,desc:'2–3 minute background music track'},{name:'Full Score',price:600,desc:'Full event/video score, multiple tracks'}],
    includes:['Original composition','Commercial use license','Stems/separate tracks available','MP3 + WAV delivery','Unlimited revisions on mix'],
    reviews:[{name:'Cris Bautista',initials:'CB',color:'#1D9E75',textColor:'white',rating:5,text:'"Our org jingle was a banger! Everyone loved it at the event."'},{name:'Mia Flores',initials:'MF',color:'#D4537E',textColor:'white',rating:5,text:'"Kevin made the perfect background music for our thesis video."'}]},
  {id:7,emoji:'📊',bg:'linear-gradient(135deg,#0f1525,#181f38)',badge:'',sellerInitials:'RT',sellerColor:'#7F77DD',sellerTextColor:'white',sellerName:'Rica Torres',title:'Data Analysis & Excel',desc:'Spreadsheets, data charts, and statistical reports for academic projects.',fullDesc:'I help students with data organization, Excel formulas, chart creation, and basic statistical analysis. Perfect for research papers, thesis data chapters, and business subject requirements.',price:150,priceMax:400,priceDisplay:'₱150–₱400',rating:4.8,reviews:12,category:'data',
    packages:[{name:'Basic Clean',price:150,desc:'Data cleanup and basic charts'},{name:'Analysis Report',price:250,desc:'Full analysis + charts + interpretation'},{name:'Full Dashboard',price:400,desc:'Interactive Excel dashboard + report'}],
    includes:['Excel/Google Sheets delivery','Charts and visualizations','Written interpretation','Formulas documented','Unlimited formula revisions'],
    reviews:[{name:'Alex Ngo',initials:'AN',color:'#7F77DD',textColor:'white',rating:5,text:'"Cleaned up my research data perfectly. Saved me hours!"'},{name:'Kat Manalo',initials:'KM',color:'#639922',textColor:'white',rating:5,text:'"Excellent Excel dashboard for our business project. Thank you Rica!"'}]}
];

const TRANSACTIONS = [
  {id:'TXN-2025-0412',service:'Logo & Brand Identity Design',serviceEmoji:'🎨',provider:'Maria Reyes',providerInitials:'MR',providerColor:'#F5921B',providerTextColor:'#1a0a00',role:'hired',amount:350,date:'May 10, 2025',status:'ongoing',statusLabel:'Ongoing',
    timeline:[{title:'Commission Requested',sub:'May 10, 2025 · 10:32 AM',state:'done'},{title:'Commissioner Accepted',sub:'May 10, 2025 · 11:15 AM',state:'done'},{title:'In Progress',sub:'Work started · Estimated delivery: May 15',state:'active'},{title:'Review & Approval',sub:'Waiting for completion',state:'pending'},{title:'Completed',sub:'',state:'pending'}],
    breakdown:[{label:'Service',val:'Standard Package'},{label:'Package Price',val:'₱350'},{label:'Platform Fee',val:'₱0 (free during beta)'},{label:'Payment Method',val:'GCash'},{label:'Order Date',val:'May 10, 2025'}],total:'₱350'},
  {id:'TXN-2025-0408',service:'Python & Web Dev Help',serviceEmoji:'💻',provider:'Carlo Lim',providerInitials:'CL',providerColor:'#378ADD',providerTextColor:'white',role:'hired',amount:200,date:'May 8, 2025',status:'pending',statusLabel:'Pending',
    timeline:[{title:'Commission Requested',sub:'May 8, 2025 · 3:20 PM',state:'done'},{title:'Awaiting Acceptance',sub:'Waiting for commissioner to respond',state:'active'},{title:'In Progress',sub:'',state:'pending'},{title:'Review & Approval',sub:'',state:'pending'},{title:'Completed',sub:'',state:'pending'}],
    breakdown:[{label:'Service',val:'Quick Fix Session'},{label:'Package Price',val:'₱200'},{label:'Platform Fee',val:'₱0'},{label:'Payment Method',val:'GCash'},{label:'Order Date',val:'May 8, 2025'}],total:'₱200'},
  {id:'TXN-2025-0405',service:'Essay & Research Writing',serviceEmoji:'✍️',provider:'Nina Pascual',providerInitials:'NP',providerColor:'#EF9F27',providerTextColor:'#1a0a00',role:'hired',amount:150,date:'May 5, 2025',status:'completed',statusLabel:'Completed',
    timeline:[{title:'Commission Requested',sub:'May 5, 2025 · 9:00 AM',state:'done'},{title:'Commissioner Accepted',sub:'May 5, 2025 · 9:30 AM',state:'done'},{title:'In Progress',sub:'May 5–6, 2025',state:'done'},{title:'Review & Approval',sub:'May 6, 2025 · You approved',state:'done'},{title:'Completed',sub:'May 6, 2025 · 4:00 PM',state:'done'}],
    breakdown:[{label:'Service',val:'Proofread Package'},{label:'Package Price',val:'₱150'},{label:'Platform Fee',val:'₱0'},{label:'Payment Method',val:'Cash'},{label:'Completion Date',val:'May 6, 2025'}],total:'₱150'},
  {id:'TXN-2025-0503',service:'Poster Design',serviceEmoji:'🎨',provider:'Leon Cruz',providerInitials:'LC',providerColor:'#639922',providerTextColor:'#1a0a00',role:'provided',amount:250,date:'May 3, 2025',status:'completed',statusLabel:'Completed',
    timeline:[{title:'Order Received',sub:'May 3, 2025 · 2:00 PM',state:'done'},{title:'You Accepted',sub:'May 3, 2025 · 2:15 PM',state:'done'},{title:'In Progress',sub:'May 3–4, 2025',state:'done'},{title:'Client Approved',sub:'May 4, 2025 · 6:00 PM',state:'done'},{title:'Completed & Paid',sub:'May 4, 2025 · Earned ₱250',state:'done'}],
    breakdown:[{label:'Service',val:'Event Poster Design'},{label:'Agreed Price',val:'₱250'},{label:'Platform Fee',val:'₱0'},{label:'Client',val:'Leon Cruz'},{label:'Completion Date',val:'May 4, 2025'}],total:'+₱250'},
  {id:'TXN-2025-0428',service:'Video Editing & Reels',serviceEmoji:'🎬',provider:'Josh Garcia',providerInitials:'JG',providerColor:'#D4537E',providerTextColor:'white',role:'hired',amount:400,date:'Apr 28, 2025',status:'cancelled',statusLabel:'Cancelled',
    timeline:[{title:'Commission Requested',sub:'Apr 28, 2025 · 1:00 PM',state:'done'},{title:'Commissioner Accepted',sub:'Apr 28, 2025 · 2:30 PM',state:'done'},{title:'Cancelled',sub:'Apr 29, 2025 · Deadline conflict',state:'active'},{title:'Review & Approval',sub:'',state:'pending'},{title:'Completed',sub:'',state:'pending'}],
    breakdown:[{label:'Service',val:'Event Highlight Video'},{label:'Original Price',val:'₱400'},{label:'Refund Status',val:'Full refund issued'},{label:'Reason',val:'Deadline conflict'},{label:'Cancelled On',val:'Apr 29, 2025'}],total:'Refunded'}
];

/* Filter state */
let desktopMinStar = 0;
let mobileMinStar = 0;
let currentTxFilter = 'all';

/* ════════════════════════════════════
   INIT
════════════════════════════════════ */
function init(){
  renderDashboardGrid();
  renderBrowseGrid(SERVICES);
  renderTransactions('all');
}

/* ════════════════════════════════════
   SERVICE CARDS
════════════════════════════════════ */
function buildServiceCard(s, clickFn){
  return `<div class="service-card" onclick="${clickFn}(${s.id})">
    <div class="service-thumb" style="background:${s.bg}">
      ${s.emoji}${s.badge?`<span class="service-badge">${s.badge}</span>`:''}
    </div>
    <div class="service-body">
      <div class="seller-row">
        <div class="seller-avatar" style="background:${s.sellerColor};color:${s.sellerTextColor}">${s.sellerInitials}</div>
        <span class="seller-name">${s.sellerName}</span>
      </div>
      <div class="service-title">${s.title}</div>
      <div class="service-desc">${s.desc}</div>
      <div class="service-footer">
        <span class="service-price">${s.priceDisplay}</span>
        <span class="service-rating"><i class="ti ti-star-filled"></i>${s.rating}</span>
      </div>
    </div>
  </div>`;
}

function renderDashboardGrid(){
  document.getElementById('dashboard-grid').innerHTML = SERVICES.slice(0,6).map(s=>buildServiceCard(s,'openServiceDetail')).join('');
}

function renderBrowseGrid(list){
  const grid = document.getElementById('browse-grid');
  const noRes = document.getElementById('browse-no-results');
  const count = document.getElementById('browse-count');
  if(list.length === 0){
    grid.innerHTML='';
    noRes.style.display='block';
    count.textContent='0';
  } else {
    grid.innerHTML = list.map(s=>buildServiceCard(s,'openServiceDetail')).join('');
    noRes.style.display='none';
    count.textContent=list.length;
  }
}

/* ════════════════════════════════════
   BROWSE FILTERS
════════════════════════════════════ */
function applyBrowseFilter(){
  const search = document.getElementById('browse-search').value.toLowerCase().trim();
  const maxPrice = parseInt(document.getElementById('desktop-price-range').value);
  const sort = document.getElementById('browse-sort').value;
  const allChecked = document.getElementById('f-all').checked;
  const catBoxes = document.querySelectorAll('.cat-filter:checked');
  const selectedCats = allChecked ? [] : Array.from(catBoxes).map(c=>c.value);

  let list = SERVICES.filter(s=>{
    const matchCat = allChecked || selectedCats.includes(s.category);
    const matchPrice = s.price <= maxPrice;
    const matchRating = s.rating >= desktopMinStar;
    const matchSearch = !search || s.title.toLowerCase().includes(search) || s.sellerName.toLowerCase().includes(search) || s.category.toLowerCase().includes(search) || s.desc.toLowerCase().includes(search);
    return matchCat && matchPrice && matchRating && matchSearch;
  });

  if(sort==='price-asc') list.sort((a,b)=>a.price-b.price);
  else if(sort==='price-desc') list.sort((a,b)=>b.price-a.price);
  else if(sort==='rating') list.sort((a,b)=>b.rating-a.rating);

  renderBrowseGrid(list);
}

function toggleAllFilter(cb){
  if(cb.checked){
    document.querySelectorAll('.cat-filter').forEach(c=>c.checked=false);
  }
  applyBrowseFilter();
}

function resetFilters(){
  document.getElementById('f-all').checked=true;
  document.querySelectorAll('.cat-filter').forEach(c=>c.checked=false);
  document.getElementById('desktop-price-range').value=1000;
  document.getElementById('desktop-price-val').textContent='₱1000';
  document.getElementById('browse-search').value='';
  desktopMinStar=0;
  updateStars('desktop-star-filter',0);
  applyBrowseFilter();
}

/* Stars */
function setDesktopStar(e){
  const star = e.target.closest('[data-star]');
  if(!star) return;
  desktopMinStar = parseInt(star.dataset.star);
  updateStars('desktop-star-filter', desktopMinStar);
  applyBrowseFilter();
}
function setMobileStar(e){
  const star = e.target.closest('[data-star]');
  if(!star) return;
  mobileMinStar = parseInt(star.dataset.star);
  updateStars('mobile-star-filter', mobileMinStar);
}
function updateStars(id, val){
  document.querySelectorAll(`#${id} span`).forEach(s=>{
    s.classList.toggle('lit', parseInt(s.dataset.star)<=val);
  });
}
function applyMobileFilter(){
  const maxPrice = parseInt(document.getElementById('mobile-price-range').value);
  const search = document.getElementById('browse-search').value.toLowerCase().trim();
  desktopMinStar = mobileMinStar;
  document.getElementById('desktop-price-range').value = maxPrice;
  document.getElementById('desktop-price-val').textContent = '₱'+maxPrice;
  updateStars('desktop-star-filter', desktopMinStar);
  applyBrowseFilter();
  closeFilter();
}

/* ════════════════════════════════════
   TRANSACTIONS
════════════════════════════════════ */
function renderTransactions(filter){
  currentTxFilter = filter;
  const list = filter==='all' ? TRANSACTIONS : TRANSACTIONS.filter(t=>t.status===filter);
  const tbody = document.getElementById('tx-desktop-tbody');
  const mobileList = document.getElementById('tx-mobile-list');
  const noRes = document.getElementById('tx-no-results');

  if(list.length===0){
    tbody.innerHTML='';
    mobileList.innerHTML='';
    noRes.style.display='block';
    return;
  }
  noRes.style.display='none';

  const statusClass={pending:'status-pending',ongoing:'status-ongoing',completed:'status-completed',cancelled:'status-cancelled'};
  const statusIcon={pending:'ti-clock',ongoing:'ti-refresh',completed:'ti-check',cancelled:'ti-x'};

  tbody.innerHTML = list.map(t=>`
    <tr style="cursor:pointer" onclick="openReceipt('${t.id}')">
      <td><strong>${t.service}</strong><br><span style="color:var(--hive-muted);font-size:11px">${t.provider}</span></td>
      <td style="color:${t.role==='provided'?'#639922':'var(--hive-muted)'};font-size:12px;font-weight:${t.role==='provided'?700:400}">${t.role==='provided'?'You provided':'You hired'}</td>
      <td style="color:${t.role==='provided'?'#639922':t.status==='cancelled'?'var(--hive-muted)':'var(--hive-orange)'};font-weight:700;${t.status==='cancelled'?'text-decoration:line-through':''}">${t.role==='provided'?'+':''} ₱${t.amount}</td>
      <td style="color:var(--hive-muted);font-size:12px">${t.date}</td>
      <td><span class="status-badge ${statusClass[t.status]}"><i class="ti ${statusIcon[t.status]}" style="font-size:10px"></i>${t.statusLabel}</span></td>
      <td><button class="btn-sm btn-sm-outline" onclick="event.stopPropagation();openReceipt('${t.id}')">View Receipt</button></td>
    </tr>`).join('');

  mobileList.innerHTML = list.map(t=>`
    <div class="tx-card" style="display:block" onclick="openReceipt('${t.id}')">
      <div class="tx-card-top">
        <div>
          <div class="tx-card-title">${t.serviceEmoji} ${t.service}</div>
          <div class="tx-card-sub">${t.provider} · ${t.role==='provided'?'You provided':'You hired'}</div>
        </div>
        <span class="status-badge ${statusClass[t.status]}"><i class="ti ${statusIcon[t.status]}" style="font-size:10px"></i>${t.statusLabel}</span>
      </div>
      <div class="tx-card-bottom">
        <span style="color:${t.role==='provided'?'#639922':t.status==='cancelled'?'var(--hive-muted)':'var(--hive-orange)'};font-weight:700;font-size:15px;${t.status==='cancelled'?'text-decoration:line-through':''}">${t.role==='provided'?'+':''}₱${t.amount}</span>
        <div style="display:flex;align-items:center;gap:8px">
          <span style="color:var(--hive-muted);font-size:12px">${t.date}</span>
          <button class="btn-sm btn-sm-outline">View</button>
        </div>
      </div>
    </div>`).join('');
}

function filterTx(filter, btn){
  btn.closest('.tabs').querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  renderTransactions(filter);
}

/* ════════════════════════════════════
   RECEIPT MODAL
════════════════════════════════════ */
function openReceipt(txId){
  const t = TRANSACTIONS.find(x=>x.id===txId);
  if(!t) return;
  const statusClass={pending:'status-pending',ongoing:'status-ongoing',completed:'status-completed',cancelled:'status-cancelled'};
  const statusIcon={pending:'ti-clock',ongoing:'ti-refresh',completed:'ti-check',cancelled:'ti-x'};
  const iconBg={pending:'rgba(186,117,23,0.15)',ongoing:'rgba(56,136,221,0.15)',completed:'rgba(99,153,34,0.15)',cancelled:'rgba(226,75,74,0.15)'};

  const tlHTML = t.timeline.map(step=>`
    <div class="tl-step">
      <div class="tl-dot ${step.state}">
        <i class="ti ${step.state==='done'?'ti-check':step.state==='active'?'ti-circle-dot':'ti-circle'}" style="font-size:13px"></i>
      </div>
      <div class="tl-content">
        <div class="tl-title" style="color:${step.state==='pending'?'var(--hive-muted)':'var(--hive-text)'}">${step.title}</div>
        ${step.sub?`<div class="tl-sub">${step.sub}</div>`:''}
      </div>
    </div>`).join('');

  const breakdownHTML = t.breakdown.map(r=>`
    <div class="receipt-row">
      <span class="receipt-row-label">${r.label}</span>
      <span class="receipt-row-val">${r.val}</span>
    </div>`).join('');

  let actionButtons = '';
  if(t.status==='ongoing'){
    actionButtons=`<div class="receipt-actions">
      <button class="btn-primary" onclick="closeModal('receipt-modal')">Message Commissioner</button>
      <button class="btn-outline" style="border-radius:8px;font-family:var(--font-body);cursor:pointer;font-weight:500" onclick="closeModal('receipt-modal')">Cancel Request</button>
    </div>`;
  } else if(t.status==='pending'){
    actionButtons=`<div class="receipt-actions">
      <button class="btn-primary" onclick="closeModal('receipt-modal')">Send Reminder</button>
      <button class="btn-outline" style="border-radius:8px;font-family:var(--font-body);cursor:pointer;font-weight:500" onclick="closeModal('receipt-modal')">Cancel Request</button>
    </div>`;
  } else if(t.status==='completed'){
    actionButtons=`<div class="receipt-actions">
      <button class="btn-primary" onclick="closeModal('receipt-modal')">Leave a Review</button>
      <button class="btn-outline" style="border-radius:8px;font-family:var(--font-body);cursor:pointer;font-weight:500" onclick="closeModal('receipt-modal')">Download Receipt</button>
    </div>`;
  }

  document.getElementById('receipt-modal-title').textContent = 'Transaction Receipt';
  document.getElementById('receipt-modal-body').innerHTML = `
    <div class="receipt-header">
      <div class="receipt-icon" style="background:${iconBg[t.status]}">
        ${t.serviceEmoji}
      </div>
      <div class="receipt-id">ORDER ID: ${t.id}</div>
      <div class="receipt-service">${t.service}</div>
      <span class="status-badge ${statusClass[t.status]}" style="margin:0 auto"><i class="ti ${statusIcon[t.status]}" style="font-size:10px"></i>${t.statusLabel}</span>
    </div>

    <div class="card-block" style="margin-bottom:14px">
      <div class="card-block-title"><i class="ti ti-user"></i>${t.role==='provided'?'Client':'Commissioner'}</div>
      <div style="display:flex;align-items:center;gap:12px">
        <div style="width:40px;height:40px;border-radius:50%;background:${t.providerColor};color:${t.providerTextColor};display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0">${t.providerInitials}</div>
        <div>
          <div style="font-weight:700;font-size:14px">${t.provider}</div>
          <div style="font-size:12px;color:var(--hive-muted)">STI Ortigas–Cainta Student</div>
        </div>
        <button class="btn-sm btn-sm-outline" style="margin-left:auto" onclick="navigate('messages');closeModal('receipt-modal')">Message</button>
      </div>
    </div>

    <div class="card-block" style="margin-bottom:14px">
      <div class="card-block-title"><i class="ti ti-map-pin"></i>Order Timeline</div>
      <div class="timeline">${tlHTML}</div>
    </div>

    <div class="card-block" style="margin-bottom:14px">
      <div class="card-block-title"><i class="ti ti-receipt"></i>Payment Breakdown</div>
      ${breakdownHTML}
      <div class="receipt-divider"><span>total</span></div>
      <div class="receipt-total-row">
        <span>Total Amount</span>
        <span class="receipt-total-val">${t.total}</span>
      </div>
    </div>
    ${actionButtons}
  `;
  openModal('receipt-modal');
}

/* ════════════════════════════════════
   SERVICE DETAIL MODAL
════════════════════════════════════ */
let selectedPackage = 0;

function openServiceDetail(id){
  const s = SERVICES.find(x=>x.id===id);
  if(!s) return;
  selectedPackage = 0;

  const packagesHTML = s.packages.map((p,i)=>`
    <div class="package-card ${i===0?'selected':''}" id="pkg-${id}-${i}" onclick="selectPackage(${id},${i})">
      <div class="package-name">${p.name}</div>
      <div class="package-price">₱${p.price}</div>
      <div class="package-desc">${p.desc}</div>
    </div>`).join('');

  const includesHTML = s.includes.map(inc=>`
    <div class="service-include-item"><i class="ti ti-circle-check-filled"></i>${inc}</div>`).join('');

  const reviewsHTML = s.reviews.map(r=>`
    <div class="review-item">
      <div class="review-top">
        <div style="width:28px;height:28px;border-radius:50%;background:${r.color};color:${r.textColor};display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0">${r.initials}</div>
        <span style="font-size:12px;font-weight:600">${r.name}</span>
        <span style="margin-left:auto;color:var(--hive-accent);font-size:12px">${'★'.repeat(r.rating)}${'☆'.repeat(5-r.rating)}</span>
      </div>
      <p style="font-size:12px;color:var(--hive-muted);line-height:1.5;padding-left:36px">${r.text}</p>
    </div>`).join('');

  document.getElementById('service-modal-title').textContent = s.title;
  document.getElementById('service-modal-body').innerHTML = `
    <div class="service-detail-thumb" style="background:${s.bg}">${s.emoji}</div>

    <div class="service-detail-seller">
      <div class="service-detail-seller-av" style="background:${s.sellerColor};color:${s.sellerTextColor}">${s.sellerInitials}</div>
      <div style="flex:1">
        <div style="font-weight:700;font-size:14px">${s.sellerName}</div>
        <div style="font-size:11px;color:var(--hive-muted)">STI Ortigas–Cainta</div>
      </div>
      <div style="text-align:right">
        <div style="color:var(--hive-accent);font-size:13px">${'★'.repeat(Math.floor(s.rating))}</div>
        <div style="font-size:11px;color:var(--hive-muted)">${s.rating} · ${s.reviews} reviews</div>
      </div>
    </div>

    <p style="font-size:13px;color:var(--hive-muted);line-height:1.65;margin-bottom:16px">${s.fullDesc}</p>

    <div style="font-family:var(--font-display);font-size:13px;font-weight:700;margin-bottom:10px">Choose a Package</div>
    <div class="package-grid" id="pkg-grid-${id}">${packagesHTML}</div>

    <div style="font-family:var(--font-display);font-size:13px;font-weight:700;margin-bottom:10px">What's Included</div>
    <div class="service-includes">${includesHTML}</div>

    <div style="font-family:var(--font-display);font-size:13px;font-weight:700;margin-bottom:10px">Reviews</div>
    <div style="background:var(--hive-card);border:1px solid var(--hive-border);border-radius:10px;padding:0 12px;margin-bottom:16px">${reviewsHTML}</div>

    <div style="background:var(--hive-card);border:1px solid var(--hive-border);border-radius:12px;padding:14px;margin-bottom:16px;display:flex;align-items:center;justify-content:space-between">
      <div>
        <div style="font-size:11px;color:var(--hive-muted);margin-bottom:2px">Selected Package</div>
        <div id="selected-pkg-label" style="font-family:var(--font-display);font-weight:700;font-size:15px">${s.packages[0].name}</div>
      </div>
      <div id="selected-pkg-price" style="font-family:var(--font-display);font-size:22px;font-weight:800;color:var(--hive-orange)">₱${s.packages[0].price}</div>
    </div>

    <button class="btn-primary" style="width:100%;padding:13px;font-size:14px" onclick="commissionService(${id})">
      Commission Now
    </button>
    <button class="btn-outline" style="width:100%;padding:11px;border-radius:8px;font-size:13px;font-family:var(--font-body);cursor:pointer;font-weight:500;margin-top:8px" onclick="navigate('messages');closeModal('service-modal')">
      Message First
    </button>
  `;

  // store service id for package selection
  document.getElementById('service-modal-body').dataset.serviceId = id;
  openModal('service-modal');
}

function selectPackage(serviceId, pkgIndex){
  const s = SERVICES.find(x=>x.id===serviceId);
  if(!s) return;
  selectedPackage = pkgIndex;
  document.querySelectorAll(`[id^="pkg-${serviceId}-"]`).forEach((el,i)=>{
    el.classList.toggle('selected', i===pkgIndex);
  });
  document.getElementById('selected-pkg-label').textContent = s.packages[pkgIndex].name;
  document.getElementById('selected-pkg-price').textContent = '₱'+s.packages[pkgIndex].price;
}

function commissionService(serviceId){
  closeModal('service-modal');
  navigate('transactions');
  setTimeout(()=>{
    const s = SERVICES.find(x=>x.id===serviceId);
    alert(`Commission request sent to ${s.sellerName}!\nPackage: ${s.packages[selectedPackage].name}\nAmount: ₱${s.packages[selectedPackage].price}\n\nCheck your Transactions page to track progress.`);
  }, 300);
}

/* ════════════════════════════════════
   MODAL HELPERS
════════════════════════════════════ */
function openModal(id){
  const el = document.getElementById(id);
  el.classList.add('open');
  document.body.style.overflow='hidden';
}
function closeModal(id){
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow='';
}
// Close on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay=>{
  overlay.addEventListener('click', e=>{
    if(e.target===overlay) closeModal(overlay.id);
  });
});

/* ════════════════════════════════════
   NAVIGATION
════════════════════════════════════ */
function navigate(page){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l=>l.classList.remove('active'));
  document.querySelectorAll('.sidebar-item').forEach(s=>s.classList.remove('active'));
  document.querySelectorAll('.bottom-nav-item').forEach(b=>b.classList.remove('active'));
  const target=document.getElementById('page-'+page);
  if(target) target.classList.add('active');
  const navMap={dashboard:0,browse:1,messages:2};
  if(navMap[page]!==undefined) document.querySelectorAll('.nav-link')[navMap[page]].classList.add('active');
  const sideItems=document.querySelectorAll('.sidebar-item');
  const sideMap={dashboard:0,browse:1,'post-service':2,transactions:3,messages:4,profile:5,notifications:6,admin:7};
  if(sideMap[page]!==undefined && sideItems[sideMap[page]]) sideItems[sideMap[page]].classList.add('active');
  const bnMap={dashboard:'bn-dashboard',browse:'bn-browse','post-service':'bn-post-service',messages:'bn-messages',profile:'bn-profile'};
  if(bnMap[page]){const el=document.getElementById(bnMap[page]);if(el)el.classList.add('active');}
  const filterBtn=document.getElementById('browse-filter-btn');
  if(filterBtn) filterBtn.style.display=(page==='browse')?'flex':'none';
  const ms=document.getElementById('main-scroll');
  if(ms) ms.scrollTop=0;
}

/* ════════════════════════════════════
   DRAWER
════════════════════════════════════ */
function openDrawer(){
  const overlay=document.getElementById('drawer-overlay');
  const drawer=document.getElementById('drawer');
  overlay.style.display='block';
  requestAnimationFrame(()=>{overlay.classList.add('open');drawer.classList.add('open');});
  document.body.style.overflow='hidden';
}
function closeDrawer(){
  const overlay=document.getElementById('drawer-overlay');
  const drawer=document.getElementById('drawer');
  overlay.classList.remove('open');
  drawer.classList.remove('open');
  setTimeout(()=>{overlay.style.display='none';},280);
  document.body.style.overflow='';
}

/* ════════════════════════════════════
   FILTER SHEET
════════════════════════════════════ */
function openFilter(){
  const overlay=document.getElementById('filter-overlay');
  const sheet=document.getElementById('filter-sheet');
  overlay.style.display='block';
  requestAnimationFrame(()=>sheet.classList.add('open'));
  document.body.style.overflow='hidden';
}
function closeFilter(){
  const sheet=document.getElementById('filter-sheet');
  const overlay=document.getElementById('filter-overlay');
  sheet.classList.remove('open');
  setTimeout(()=>{overlay.style.display='none';},280);
  document.body.style.overflow='';
}

/* ════════════════════════════════════
   MESSAGES
════════════════════════════════════ */
function openChat(e){
  document.querySelectorAll('.convo-item').forEach(i=>i.classList.remove('active'));
  e.currentTarget.classList.add('active');
  document.getElementById('messages-layout').classList.add('chat-open');
}
function closeChat(){
  document.getElementById('messages-layout').classList.remove('chat-open');
}
function sendMsg(){
  const inp=document.getElementById('chat-in');
  const text=inp.value.trim();
  if(!text) return;
  const msgs=document.getElementById('chat-messages');
  const now=new Date();
  const time=now.getHours().toString().padStart(2,'0')+':'+now.getMinutes().toString().padStart(2,'0');
  const div=document.createElement('div');
  div.className='msg me';
  div.innerHTML=`<div class="msg-bubble">${text}</div><div class="msg-time">${time}</div>`;
  msgs.appendChild(div);
  inp.value='';
  msgs.scrollTop=msgs.scrollHeight;
}

/* ════════════════════════════════════
   LOGIN
════════════════════════════════════ */
function enterApp(){
  document.getElementById('login-screen').style.display='none';
  document.getElementById('main-app').style.display='flex';
}
function logout(){
  document.getElementById('main-app').style.display='none';
  document.getElementById('login-screen').style.display='flex';
}
function toggleReg(){
  const btn=document.getElementById('toggle-reg-btn');
  const title=document.querySelector('.login-title');
  const sub=document.querySelector('.login-sub');
  const signInBtn=document.querySelector('button[onclick="enterApp()"]');
  if(btn.textContent.includes('Create')){
    title.textContent='Create Account';sub.textContent='Join ORCAHIVE — STI Students Only';
    signInBtn.textContent='Create My Account';btn.textContent='Already have an account? Sign In';
  } else {
    title.textContent='Welcome back';sub.textContent='STI Ortigas–Cainta Student Marketplace';
    signInBtn.textContent='Sign In to ORCAHIVE';btn.textContent='Create an Account';
  }
}

/* ════════════════════════════════════
   HELPERS
════════════════════════════════════ */
function setActive(el){
  el.closest('.categories').querySelectorAll('.cat-pill').forEach(p=>p.classList.remove('active'));
  el.classList.add('active');
}

// ESC key closes modals
document.addEventListener('keydown',e=>{
  if(e.key==='Escape'){
    closeModal('receipt-modal');
    closeModal('service-modal');
    closeDrawer();
    closeFilter();
  }
});

init();
