const quizData = [
  // === BATCH 1 ===
  { q: "What is the primary focus of Human Resource Management (HRM)?", o: ["Increasing market share", "Budget allocation", "Customer acquisition", "Deployment and development of employees"], a: 3 },
  { q: "Which of the following was the previous name for Human Resource Management?", o: ["Human Capital Office", "Human Development Unit", "Personnel Department", "People Operations"], a: 2 },
  { q: "One major difference between Personnel Management and HRM is that:", o: ["HRM is less strategic", "Personnel Management focuses on profit", "Personnel Management integrates training with values", "HRM integrates training with company values"], a: 3 },
  { q: "Recruitment is best described as:", o: ["Promoting employees", "Training staff", "Identifying and attracting candidates", "Transferring staff"], a: 2 },
  { q: "Which of the following is a source of internal recruitment?", o: ["Transfers", "Employment agencies", "Walk-in interviews", "Online job portals"], a: 0 },
  { q: "One merit of internal recruitment is:", o: ["High cost", "Limited candidate pool", "Low training cost", "Uncertain response"], a: 2 },
  { q: "A disadvantage of internal recruitment is to:", o: ["Boosts morale", "Encourages loyalty", "May encourage favoritism", "Provides fresh ideas"], a: 2 },
  { q: "Direct recruitment is a type of:", o: ["External source", "Internal source", "On-the-job training", "Staff evaluation"], a: 0 },
  { q: "A benefit of external recruitment is:", o: ["Higher internal morale", "Wider choice of candidates", "More favoritism", "Faster placement"], a: 1 },
  { q: "One drawback of external recruitment is:", o: ["Low cost", "Uncertain response", "Guaranteed satisfaction", "Fast decision-making"], a: 1 },
  { q: "E-recruitment is an example of:", o: ["Recent trend in recruitment", "Traditional hiring", "External promotion", "Staff reassignment"], a: 0 },
  { q: "Selection is often called a negative process because:", o: ["It involves rejection of candidates", "It accepts all applicants", "It promotes all employees", "It is a cost-saving step"], a: 0 },
  { q: "Proper placement helps reduce:", o: ["Workload", "Customer dissatisfaction", "Labour turnover", "Recruitment needs"], a: 2 },
  { q: "One consideration in placement is:", o: ["Retirement age", "Job requirements", "Resignation notice", "Product knowledge"], a: 1 },
  { q: "Manpower planning is essential for:", o: ["Improving customer loyalty", "Forecasting employee needs", "Product development", "Budgeting finances"], a: 1 },

  // === BATCH 2 ===
  { q: "The manpower inventory process includes:", o: ["Employee dismissal", "Data collection on current workforce", "Retrenchment notices", "External advertisements"], a: 1 },
  { q: "A key benefit of manpower planning is:", o: ["Job enlargement", "Cost minimization", "Maximizing human resource use", "Staff transfer"], a: 1 },
  { q: "An approach to manpower forecasting is:", o: ["Administrator opinion", "Informal interviews", "Customer feedback", "Daily meetings"], a: 1 },
  { q: "A failure of poor manpower planning is:", o: ["Reduced wages", "Reactive corporate strategy", "Higher productivity", "Clear job roles"], a: 1 },
  { q: "One common cause of communication breakdown is:", o: ["Open expression", "Overloading", "Shared vision", "Clear instructions"], a: 1 },
  { q: "Orientation helps reduce:", o: ["Costs", "Projects", "Employee turnover", "Salaries"], a: 2 },
  { q: "Intrinsic motivation leads to:", o: ["Self-driven performance", "Demotivation", "External rewards", "Task avoidance"], a: 0 },
  { q: "One major HRIS function is:", o: ["Salary administration", "Fundraising", "Product innovation", "Social media marketing"], a: 0 },
  { q: "HRM contributes to strategic planning by:", o: ["Supporting employee systems", "Replacing departments", "Designing products", "Conducting external audits"], a: 0 },
  { q: "Employee placement ensures:", o: ["Matching job with employee ability", "Random job allocation", "Delayed hiring", "Managerial dispute"], a: 0 },
  { q: "A successful manpower forecast requires:", o: ["Guesswork", "Data-based prediction", "Managerial opinion only", "Ignoring job roles"], a: 1 },
  { q: "What does the selection process ultimately lead to in an organization?", o: ["Rejection of applications", "Employment of suitable workers", "Promotion of staff", "Salary negotiation"], a: 1 },
  { q: "Which of the following is not a source of external recruitment?", o: ["Casual callers", "Employment agencies", "Transfers", "Campus recruitment"], a: 2 },
  { q: "Which internal source of recruitment involves shifting an employee without changing responsibility?", o: ["Transfer", "Promotion", "Retirement", "Contracting"], a: 0 },
  { q: "Which of the following is a recent trend in recruitment?", o: ["Manual application", "Internal memoranda", "Walk-in interviews", "Labour union referral"], a: 2 },

  // === BATCH 3 ===
  { q: "Which of the following is not a merit of internal recruitment?", o: ["Low cost", "Motivates staff", "Wider talent pool", "Promotes morale"], a: 2 },
  { q: "What is a key function of Human Resource Management in modern organizations?", o: ["Preparing company budgets", "Developing and retaining talent", "Selling company shares", "Managing customer feedback"], a: 1 },
  { q: "The process of placing a selected candidate on the right job is known as:", o: ["Orientation", "Selection", "Placement", "Training"], a: 2 },
  { q: "Which recruitment source offers fresh talent and competitive spirit?", o: ["Internal source", "External source", "Transfer", "Promotion"], a: 1 },
  { q: "A job that offers higher pay and status is filled through:", o: ["Demotion", "Transfer", "Promotion", "Casual call"], a: 2 },
  { q: "Which of the following is a demerit of external recruitment?", o: ["Staff diversity", "Costly process", "Fresh ideas", "Talent infusion"], a: 1 },
  { q: "Which planning approach links human resources with organizational strategy?", o: ["Daily planning", "Operational budgeting", "Manpower planning", "Shift scheduling"], a: 2 },
  { q: "The process of data-based estimation of future staffing needs is known as:", o: ["Staff rotation", "Manpower forecast", "Skill outsourcing", "Job review"], a: 1 },
  { q: "What describes a mismatch in manpower planning outcomes?", o: ["Accurate forecasting", "Corporate anarchy", "Targeted hiring", "Balanced allocation"], a: 1 },
  { q: "Macro-level manpower planning focuses primarily on:", o: ["Individual companies", "National workforce needs", "Private investors", "Departmental targets"], a: 1 },
  { q: "Manpower planning enables an organization to:", o: ["Avoid hiring", "Identify skill gaps", "Ignore training", "Automate tasks"], a: 1 },
  { q: "Which of these is a benefit of manpower planning?", o: ["Redundancy creation", "Development of employee skills", "Staff stagnation", "Decreased staff commitment"], a: 1 },
  { q: "Training improves productivity mainly because it:", o: ["Increases equipment", "Minimizes targets", "Enhances employee skillset", "Reduces salaries"], a: 2 },
  { q: "Training that helps employees adapt to new machines is driven by:", o: ["Management policy", "Technological change", "Sales decline", "Legal obligation"], a: 1 },
  { q: "What is the link between training and safety?", o: ["Delays job completion", "Encourages mistakes", "Reduces industrial accidents", "Lowers productivity"], a: 2 },

  // === BATCH 4 ===
  { q: "Which is not a direct benefit of training to employees?", o: ["Increased confidence", "Skill acquisition", "Longer hours", "High earnings potential"], a: 2 },
  { q: "What motivates employees intrinsically?", o: ["Personal fulfillment", "Bonuses", "Promotions", "Allowances"], a: 0 },
  { q: "Which job design strategy periodically moves employees across roles?", o: ["Job simplification", "Job rotation", "Job loading", "Job withdrawal"], a: 1 },
  { q: "The concept of 'task identity' in the Job Characteristics Model refers to:", o: ["Number of team members", "Uniform job descriptions", "Contribution to a complete project", "Staff hierarchy"], a: 2 },
  { q: "In open-book management, employers must:", o: ["Hire new accountants", "Keep records secret", "Share financial data with staff", "Hide expenses"], a: 2 },
  { q: "Which of the following improves employee loyalty and reduces stress?", o: ["Resignation policy", "Effective orientation", "Weekly training", "Wage freeze"], a: 1 },
  { q: "Accommodation in socialization is when:", o: ["Employees resign", "Policies are set", "Newcomers adjust to reality", "Salary is reviewed"], a: 2 },
  { q: "A benefit of employee socialization is:", o: ["Reduced work hours", "Increased integration", "Less supervision", "Salary increase"], a: 1 },
  { q: "Communication enables organizations to:", o: ["Train clients", "Coordinate activities", "Conduct sales", "Reduce pay"], a: 1 },
  { q: "An example of electronic communication is:", o: ["Memo", "Letter", "E-mail", "Telephone call"], a: 2 },
  { q: "Which part of the communication process involves choosing how to send a message?", o: ["Decoding", "Feedback", "Encoding", "Reception"], a: 2 },
  { q: "In communication, 'noise' refers to:", o: ["Phone calls", "Message interference", "Time delays", "Poor equipment"], a: 1 },
  { q: "A common cause of communication failure is:", o: ["Managerial skill", "Perception differences", "High education", "Wage disputes"], a: 1 },
  { q: "One way to overcome communication overload is to:", o: ["Block feedback", "Filter messages", "Use slang", "Encourage multitasking"], a: 1 },

  // === BATCH 5 ===
  { q: "The full meaning of HRIS is:", o: ["Human Recruitment & Innovation System", "Human Report Integration Suite", "Human Resource Information System", "Hiring Review Infrastructure System"], a: 2 },
  { q: "Which of the following is not a function of HRIS?", o: ["Staff medical records", "Absence tracking", "Market research", "Performance appraisal"], a: 2 },
  { q: "HRIS helps organizations most by:", o: ["Reducing customers", "Increasing product line", "Streamlining HR operations", "Canceling payroll"], a: 2 },
  { q: "One cost-saving feature of HRIS is:", o: ["Reduces insurance", "Reduces operational cost", "Cuts employee pay", "Stops recruitment"], a: 1 },
  { q: "HRIS improves HR forecasting by:", o: ["Collecting taxes", "Automating bonuses", "Providing data for workforce planning", "Fixing resignations"], a: 2 },
  { q: "What does occupational health primarily seek to protect?", o: ["Profits", "Workers' physical and mental well-being", "Company image", "Government policy"], a: 1 },
  { q: "Occupational medicine focuses on:", o: ["Staff hiring", "Hazard creation", "Diagnosis of health risks", "Financial audits"], a: 2 },
  { q: "A key safety program objective is to:", o: ["Encourage overtime", "Cut costs", "Prevent accidents", "Increase hours"], a: 2 },
  { q: "Micro-level manpower planning occurs at the:", o: ["National level", "Federal level", "Organizational level", "International level"], a: 2 },
  { q: "Training helps employees by:", o: ["Increasing confidence", "Decreasing wages", "Lowering qualifications", "Avoiding responsibility"], a: 0 },
  { q: "A technological reason for training is:", o: ["Wage increase", "Decreased motivation", "Changing work tools", "Longer shifts"], a: 2 },
  { q: "Which is a benefit of training for employers?", o: ["Increased resignations", "Higher compensation", "Greater productivity", "Higher absenteeism"], a: 2 },
  { q: "An intrinsic reward is best described as:", o: ["Internal sense of accomplishment", "Pay raise", "Free lunch", "Paid vacation"], a: 0 },
  { q: "Extrinsic motivation involves:", o: ["Monetary compensation", "Personal goals", "Inner satisfaction", "Job enrichment"], a: 0 },
  { q: "Job enrichment includes:", o: ["Standardizing tasks", "Rotating positions", "Adding motivational factors", "Repeating duties"], a: 2 },

  // === BATCH 6 ===
  { q: "The Job Characteristics Model includes:", o: ["Fixed salaries", "Job rotation", "External competition", "Labour outsourcing"], a: 1 },
  { q: "Open-book management includes:", o: ["Fixed salaries", "Secret financial records", "Sharing financial data with employees", "Rotating leadership"], a: 2 },
  { q: "Orientation is intended to:", o: ["Promote employees", "Introduce new hires to the company", "Approve transfer requests", "Review compensation"], a: 1 },
  { q: "Formal orientation is conducted by:", o: ["Peers", "HRM department", "Clients", "Project managers"], a: 1 },
  { q: "Socialization helps employees to:", o: ["Design tasks", "Skip meetings", "Become effective team members", "Increase taxes"], a: 2 },
  { q: "The final stage of socialization is:", o: ["Induction", "Accommodation", "Role management", "Application"], a: 1 },
  { q: "Effective communication allows for:", o: ["Coordination of activities", "Budgeting", "Transportation", "External trade"], a: 0 },
  { q: "An example of non-verbal communication is:", o: ["Email", "Text", "Body language", "Report writing"], a: 2 },
  { q: "A communication barrier is:", o: ["Mutual trust", "Filtering", "Formal reporting", "Feedback loops"], a: 1 },
  { q: "HRIS stands for:", o: ["Human Relations Interface System", "Human Resource Internet System", "Human Resource Information System", "Human Reporting Interactive System"], a: 2 },
  { q: "A benefit of HRIS is:", o: ["Employee layoffs", "Faster information retrieval", "Manual filing", "Increased paperwork"], a: 1 },
  { q: "HRIS helps in:", o: ["Absence management", "Market research", "Strategic branding", "Product design"], a: 0 },
  { q: "HRIS can be used for:", o: ["Taxation", "Public relations", "Online recruitment", "Import licensing"], a: 2 },
  { q: "One objective of occupational health is:", o: ["Reducing taxes", "Preventing work-related illnesses", "Outsourcing safety duties", "Improving profit margins"], a: 1 },
  { q: "Occupational hygiene deals with:", o: ["Payroll", "Environmental hazard control", "Job rotation", "Employee bonus"], a: 1 },

  // === BATCH 7 ===
  { q: "A hazard is:", o: ["A potential cause of harm", "A benefit scheme", "A motivation tool", "A job title"], a: 0 },
  { q: "An example of a traditional hazard-prone industry is:", o: ["Banking", "Software", "Quarrying", "Catering"], a: 2 },
  { q: "One control method for occupational health issues is:", o: ["Ignoring hazards", "Eliminating hazards at the source", "Hiring interns", "Conducting staff parties"], a: 1 },
  { q: "An example of personal protective equipment includes:", o: ["Name tag", "Safety helmet", "Laptop", "Tie"], a: 1 },
  { q: "Who has the primary responsibility for workplace health and safety?", o: ["Workers", "Union leaders", "Management", "External agencies"], a: 2 },
  { q: "The hazard most associated with textile industries is:", o: ["Radiation", "Cotton dust", "Metal fumes", "Gas leakage"], a: 1 },
  { q: "Occupational hygiene is mostly practiced by:", o: ["Drivers", "Engineers and chemists", "Lawyers", "HR managers"], a: 1 },
  { q: "A key benefit of good occupational health and safety is:", o: ["Increased taxation", "Improved productivity", "Longer probation", "Reduced salaries"], a: 1 },
  { q: "Role management in socialization involves:", o: ["Assigning salaries", "Changing teams", "Resolving job-related conflicts", "Planning retirement"], a: 2 },
  { q: "The goal of job enrichment is to:", o: ["Reduce responsibilities", "Shorten work hours", "Motivate employees through challenging tasks", "Remove supervision"], a: 2 },
  { q: "Which of the following defines employee compensation according to Milkovitch and Newman (2005)?", o: ["Only wages paid monthly", "Leave and pension benefits alone", "Financial returns and tangible services and benefits", "Housing and vacation alone"], a: 2 },
  { q: "According to Agburu (2012), compensation management involves:", o: ["Project planning", "Employment advertising", "Development and maintenance of a base pay system", "Staff termination"], a: 2 },
  { q: "Which of the following is not a component of financial returns?", o: ["Basic salary", "Office uniform", "Bonuses", "Incentives"], a: 1 },
  { q: "What does compensation represent in organizational cost?", o: ["A minor share", "The biggest item", "A variable income", "A temporary expense"], a: 1 },
  { q: "Which of these is a cultural factor affecting productivity in Nigeria?", o: ["Education level", "Ethnicity", "Currency exchange", "Inflation"], a: 1 },

  // === BATCH 8 ===
  { q: "A major sociological issue affecting public service productivity is:", o: ["Union strikes", "Lack of bonuses", "Under-declaration of age", "Training fatigue"], a: 2 },
  { q: "Which of the following is a managerial factor affecting productivity?", o: ["Retirement age", "Poor vision and purpose", "Training overload", "Internet restriction"], a: 1 },
  { q: "What factor often causes high employee turnover in Nigeria's civil service?", o: ["Free healthcare", "Lack of enforcement by managers", "Monthly bonuses", "Early promotion"], a: 1 },
  { q: "Which of the following determines employee compensation?", o: ["Government regulations", "Family background", "Social class", "Internet access"], a: 0 },
  { q: "Minimum wage legislation in Nigeria helps ensure:", o: ["Reduction in GDP", "Minimum level of living", "Political appointments", "Higher interest rates"], a: 1 },
  { q: "A company's financial strength influences compensation through:", o: ["CEO interview", "Ability to pay", "Employment size", "Staff ethnicity"], a: 1 },
  { q: "If supply of labour exceeds demand, wages will:", o: ["Rise", "Fall", "Be stable", "Be taxed higher"], a: 1 },
  { q: "What causes exploitation of unskilled labour in Nigeria?", o: ["Oversupply of unskilled workers", "Education inflation", "Low-interest rates", "Poor pension system"], a: 0 },
  { q: "During inflation, compensation adjustment is influenced by:", o: ["Minimum wage law", "Tax laws", "Cost of living index", "Business trends"], a: 2 },
  { q: "Wages must rise with inflation to:", o: ["Protect workers' real income", "Encourage borrowing", "Increase product price", "Decrease employment"], a: 0 },
  { q: "Productivity-linked compensation is based on:", o: ["Employee location", "Output contribution", "Family background", "Age of worker"], a: 1 },
  { q: "Academic qualifications influence pay because they:", o: ["Show marital status", "Represent skill and knowledge", "Reflect office politics", "Indicate social class"], a: 1 },
  { q: "Collective bargaining involves:", o: ["Individual appeals", "Union-management negotiation", "CEO directives", "Government-only reviews"], a: 1 },
  { q: "In the public sector, wage fixing is mostly done by:", o: ["Employee ballots", "Wage review commissions", "Newspapers", "Professional exams"], a: 1 },
  { q: "The aim of wage indexation is to:", o: ["Reduce taxes", "Increase turnover", "Maintain real wages during inflation", "Avoid minimum wage laws"], a: 2 },

  // === BATCH 9 ===
  { q: "The Hunt Commission of 1934 focused on:", o: ["Reviewing wages of unskilled workers", "Cutting bonuses", "Stopping union strikes", "Building offices"], a: 0 },
  { q: "Which Commission established the Senior and Junior cadre system in 1945?", o: ["Tudor Davis Commission", "Harragin Commission", "Morgan Commission", "Hansbury Committee"], a: 1 },
  { q: "The Mbanefo Commission of 1959 focused on:", o: ["Union deregistration", "Federal and Eastern government wages", "Intern wages", "Civil service elimination"], a: 1 },
  { q: "Which commission recommended location-based pay?", o: ["Adebo Commission", "Miller Commission", "Harragin Commission", "Hansbury Commission"], a: 1 },
  { q: "The Morgan Commission of 1963 recommended:", o: ["Employee housing", "Uniform pay for identical duties", "Job enrichment", "Fixed gratuity"], a: 1 },
  { q: "Orientation helps new employees to:", o: ["Understand rules and meet colleagues", "Skip training", "Apply for promotion", "Take leave quickly"], a: 0 },
  { q: "One benefit of effective orientation is:", o: ["Pay stagnation", "Positive impression of the employer", "Isolation of staff", "Delay in productivity"], a: 1 },
  { q: "Formal orientation is typically organized by:", o: ["Line manager", "HR department", "Cleaner", "Team assistant"], a: 1 },
  { q: "Socialization completes when:", o: ["The employee resigns", "The employee becomes a team member", "New orientation starts", "Training is skipped"], a: 1 },
  { q: "The accommodation stage in socialization involves:", o: ["Orientation only", "Adjusting to organizational reality", "Transferring departments", "Reviewing appraisals"], a: 1 },
  { q: "Role management deals with:", o: ["Resolving role-related conflicts", "Disciplinary action", "Vacation application", "Interview preparation"], a: 0 },
  { q: "Job simplification may reduce motivation because:", o: ["It adds too much responsibility", "Tasks become boring over time", "Pay increases too much", "Feedback is excessive"], a: 1 },
  { q: "What is a core dimension in Hackman & Oldham's Job Characteristics Model?", o: ["Bonus frequency", "Uniform size", "Autonomy", "Commute time"], a: 2 },
  { q: "A task with 'task significance' must:", o: ["Be technical", "Be location-based", "Affect others' work or lives", "Be outsourced"], a: 2 },
  { q: "The HRIS function that supports accurate forecasting is:", o: ["Job simplification", "Pay deduction", "Human resource planning and forecasting", "Exit interviews"], a: 2 },

  // === BATCH 10 ===
  { q: "Which HRIS feature helps assess employees' salary increases using simulations?", o: ["Job rotation system", "Orientation tools", "'What if' salary analysis", "Recruitment panel software"], a: 2 },
  { q: "HRIS enables HR to monitor:", o: ["Local stock market", "HR metrics and trends", "Political risks", "Staff gossip"], a: 1 },
  { q: "Online recruitment via HRIS includes:", o: ["Advert design only", "Casual referrals", "Online interviews and applications", "Offsite testing programs"], a: 2 },
  { q: "E-learning in training and development through HRIS allows:", o: ["Field trips", "Self-administered courses and tests", "Conference attendance", "Vacation programs"], a: 1 },
  { q: "In absence management, HRIS can track:", o: ["Staff phone calls", "Bonus applications", "Leave history and absences", "Insurance claims"], a: 2 },
  { q: "One function of HRIS in training is:", o: ["Gift awards", "Insurance updates", "Tracking completed and upcoming courses", "Staff welfare programs"], a: 2 },
  { q: "Occupational safety involves:", o: ["Award nominations", "Preventing accidents and minimizing harm", "Career promotion", "Appraisal policies"], a: 1 },
  { q: "Hazard in workplace safety means:", o: ["Bonus eligibility", "Promotion contest", "Likelihood of something causing harm", "Office design trends"], a: 2 },
  { q: "Which workplace actor has primary responsibility for safety?", o: ["Union leaders", "Government only", "Management", "Receptionist"], a: 2 },
  { q: "Occupational hygiene is concerned with:", o: ["Office dress codes", "Measurement and control of environmental hazards", "Staff accommodation", "Union issues"], a: 1 },
  { q: "A health programme includes:", o: ["Exit interviews", "Salary scales", "Preventing illness caused by working conditions", "Cleaning services"], a: 2 },
  { q: "Occupational medicine is the branch that:", o: ["Handles emails", "Processes transfers", "Diagnoses work-related health risks", "Conducts polls"], a: 2 },
  { q: "Which organization co-defines occupational health goals?", o: ["UNDP", "USAID", "WHO and ILO", "WTO and IMF"], a: 2 },
  { q: "Which objective relates to adapting the worker to their job?", o: ["Staff replacement", "Occupational health", "HR rotation", "Training matrix"], a: 1 },
  { q: "High absenteeism and turnover can result from:", o: ["Good motivation", "Poor health and safety", "Annual bonus", "Orientation overload"], a: 1 },

  // === BATCH 11 ===
  { q: "Safety programmes should target:", o: ["Birthday celebrations", "Accident prevention and property protection", "Performance reviews", "Orientation slides"], a: 1 },
  { q: "Which of the following is a known cause of workplace hazard?", o: ["Annual leave", "Failure to wear protective equipment", "Leadership training", "Lunch breaks"], a: 1 },
  { q: "A major source of hazard in metal fabrication is:", o: ["Plastic bags", "Welding fumes and coal dust", "Paperwork", "Fan noise"], a: 1 },
  { q: "In agriculture, workplace hazards include:", o: ["Salary delays", "Pesticides and bush burning", "Overtime rules", "Internet downtime"], a: 1 },
  { q: "One common hazard in hospitals is:", o: ["Wall paint", "Loud music", "Infections and radiation", "Long breaks"], a: 2 },
  { q: "A cosmetologist may be exposed to:", o: ["Loud alarms", "Dyes and chemicals", "Marketing slogans", "Ink stains"], a: 1 },
  { q: "In construction sites, a major safety concern is:", o: ["Air conditioning", "Noise and equipment collision", "Digital signage", "Employee bonuses"], a: 1 },
  { q: "A major macroeconomic effect of wage indexation in developing countries is:", o: ["Increase in GDP", "Inflation and economic instability", "Technological growth", "Labour importation"], a: 1 },
  { q: "Which law first introduced minimum wage to Nigeria?", o: ["Labour Reform Act 1970", "Wages Board Act 1955", "Employee Rights Decree", "Salary Adjustment Act"], a: 1 },
  { q: "One key aspect of HRIS in performance management is:", o: ["Hiring referees", "Online 360-degree appraisal", "Appraisal skipping", "KPI removal"], a: 1 },
  { q: "The aim of occupational hygiene is:", o: ["Design uniforms", "Control environmental hazards", "Teach etiquette", "Promote sales"], a: 1 },
  { q: "A common hazard in wood processing is:", o: ["Gases", "Sawdust", "Paint fumes", "Electric sparks"], a: 1 },
  { q: "One goal of occupational health is:", o: ["Adaptation of work to the worker", "Increasing payroll", "Improving profit margin", "Growing workforce size"], a: 0 },
  { q: "A safety program typically deals with:", o: ["Attitude training", "Accident prevention", "Bonuses", "Labour mobilization"], a: 1 },
  { q: "What type of data is collected in manpower inventory?", o: ["Product prices", "Workforce quantity and quality", "Salary deductions", "Retirement trends"], a: 1 },

  // === BATCH 12 ===
  { q: "Failure to plan manpower may lead to:", o: ["Balanced HR", "Surplus productivity", "Corporate anarchy", "Expanded hiring"], a: 2 },
  { q: "Work motivation determines the:", o: ["Number of leave days", "Orientation format", "Direction, intensity, and duration of effort", "Pay range"], a: 2 },
  { q: "A strategy for avoiding role conflict in new hires is:", o: ["Over-supervision", "Restructuring teams", "Role management", "Removing autonomy"], a: 2 },
  { q: "A reward like a trophy is an example of:", o: ["Extrinsic motivation", "Role design", "Task variety", "Autonomy"], a: 0 },
  { q: "Effective HRIS use can improve:", o: ["Union activity", "Manual records", "HR reporting quality", "Power consumption"], a: 2 },
  { q: "What does the encoding stage require?", o: ["Peer review", "Choosing suitable language or symbols", "HR approval", "Feedback from receiver"], a: 1 },
  { q: "What is the primary goal of socialization in HRM?", o: ["Skill replacement", "Immediate promotion", "Converting newcomers into insiders", "Expanding training"], a: 2 },
  { q: "Job enlargement refers to:", o: ["Reducing task range", "Repeating tasks", "Increasing task variety", "Transferring departments"], a: 2 },
  { q: "Feedback from receivers in communication helps to:", o: ["Stop interaction", "Encourage resignation", "Confirm understanding and continue dialogue", "Create new content"], a: 2 },
  { q: "Filtering in communication is when:", o: ["Sender decodes messages", "All messages are read", "Receiver selects only interesting parts", "Data is encrypted"], a: 2 },
  { q: "A motivational workplace has jobs that are:", o: ["Limited and repetitive", "Unsupervised", "Challenging and engaging", "Short and compulsory"], a: 2 },
  { q: "The HRIS function related to staff bio-data and next-of-kin details is:", o: ["Training records", "Payroll", "Employee records/personnel administration", "Grievance handling"], a: 2 },
  { q: "What tool does HRIS use to manage office attendance?", o: ["Manual logbook", "Identity card systems", "Email alerts", "Verbal check-ins"], a: 1 },
  { q: "Quality circles improve:", o: ["Salaries", "Job grading", "Team problem-solving", "External audits"], a: 2 },
  { q: "One benefit of training employees is:", o: ["Delayed promotion", "Early retirement", "Better job performance", "Increased errors"], a: 2 },

  // === BATCH 13 ===
  { q: "The term 'employee growth-need strength' is related to:", o: ["External motivation", "Job Characteristics Model", "HR policies", "Salary review"], a: 1 },
  { q: "Encoding in communication occurs at the:", o: ["HR desk", "Listening stage", "Sender's stage", "Receiver's stage"], a: 2 },
  { q: "What can help reduce industrial accidents?", o: ["Early promotion", "Proper selection and placement", "Longer working hours", "Flexible pay"], a: 1 },
  { q: "Labour turnover can be minimized by:", o: ["Harsh policies", "Pay cuts", "Effective placement", "Increased taxes"], a: 2 },
  { q: "The British Department of Employment (1976) defines manpower planning as a:", o: ["Legislative reform", "Strategy for managing human resources", "Budgeting tool", "Payroll process"], a: 1 },
  { q: "Open-book management makes employees feel:", o: ["Discouraged", "Empowered and trusted", "Micromanaged", "Isolated"], a: 1 },
  { q: "Task feedback provides employees with:", o: ["Salary details", "Future promotions", "Performance-related information", "Transfer letters"], a: 2 },
  { q: "The primary aim of employee orientation is to:", o: ["Reduce pay", "Familiarize new staff with the workplace", "Limit social interaction", "Enforce resignation"], a: 1 },
  { q: "Which of the following defines 'placement'?", o: ["Salary grading", "Orientation process", "Assigning a selected candidate to a job", "Recruitment review"], a: 2 },
  { q: "What is the major concern of occupational health?", o: ["Market growth", "Employee physical and mental safety", "Recruitment speed", "Product pricing"], a: 1 },
  { q: "The phase where the receiver notices the message is:", o: ["Encoding", "Detection", "Selection", "Feedback"], a: 1 },
  { q: "Distractions in communication can be:", o: ["Silent thinking", "Physical or behavioural", "Organisational hierarchy", "Meeting duration"], a: 1 },
  { q: "The Hansbury-Gorsuch Commission of 1955 recommended:", o: ["Wage freezes", "Replacing cadre system with five main grades", "Halting promotions", "Internal hires"], a: 1 },
  { q: "Re-employment of ex-employees is an example of:", o: ["External source", "Internal recruitment", "Outsourcing", "Promotion policy"], a: 1 },
  { q: "Poaching in recruitment refers to:", o: ["Hunting for wildlife", "Random hiring", "Luring employees from other firms", "Reassigning internal staff"], a: 2 },

  // === BATCH 14 ===
  { q: "Internships fall under:", o: ["Orientation", "Selection", "Recent recruitment trends", "Safety control"], a: 2 },
  { q: "Induction costs in selection are:", o: ["Negligible", "Constant", "High investment areas", "Optional"], a: 0 },
  { q: "Strategic HRM links with:", o: ["Advertising budget", "Company vision and mission", "Salary structure", "Promotion policy"], a: 1 },
  { q: "Training helps employees to:", o: ["Ignore new methods", "Depend on seniors", "Adapt to technological changes", "Request demotion"], a: 2 },
  { q: "Training as a continuous process helps:", o: ["Stabilize the economy", "Update employee skills", "Extend retirement age", "Avoid recruitment"], a: 1 },
  { q: "According to Yesufu, manpower includes:", o: ["Politicians", "Media experts", "Managers, engineers, and skilled labour", "Celebrities"], a: 2 },
  { q: "Which type of motivation arises from inner satisfaction?", o: ["Managerial", "Rewarded", "Intrinsic", "Corporate"], a: 2 },
  { q: "What distinguishes extrinsic motivation?", o: ["Social media praise", "External rewards like money", "Employee-owned business", "Peer-to-peer coaching"], a: 1 },
  { q: "Quality circles typically involve:", o: ["External auditors", "Groups solving work-related problems", "Salary committees", "Peer evaluators"], a: 1 },
  { q: "Open-book management fosters motivation through:", o: ["Limiting pay", "Reducing transparency", "Sharing financial information", "Canceling meetings"], a: 2 },
  { q: "One requirement for effective employee participation programs is:", o: ["Uniform bonuses", "Free lunch", "Profit-sharing plan", "Appraisal suspension"], a: 2 },
  { q: "What must employers teach in open-book management?", o: ["Computer coding", "How to interpret financial data", "Product pricing", "Machine operations"], a: 1 },
  { q: "Feedback in communication is used to:", o: ["Confirm understanding", "Block questions", "Replace decision-making", "Announce promotions"], a: 0 },
  { q: "Misinterpretation in communication arises due to:", o: ["Uniform jobs", "High IQ", "Word meaning differences", "HR policies"], a: 2 },
  { q: "HRIS helps improve which of the following?", o: ["Manual entry", "Service delivery to employees", "Internet access", "Leave application trail"], a: 1 },

  // === BATCH 15 ===
  { q: "Identity cards are now used in HRIS for:", o: ["Fashion", "Attendance tracking", "Phone verification", "Grade entry"], a: 1 },
  { q: "E-learning in HRIS supports:", o: ["Promotion tests", "Self-administered training", "Work travel", "Bonus distribution"], a: 1 },
  { q: "In absence management, HRIS tracks:", o: ["Tax filing", "Product returns", "Leave history", "Interview attendance"], a: 2 },
  { q: "360-degree appraisal is a part of:", o: ["Payroll", "Online performance management", "Work uniform system", "Parking allocation"], a: 1 },
  { q: "A hazard is best defined as:", o: ["A potential to cause harm", "A work certificate", "A training module", "A suggestion box"], a: 0 },
  { q: "Safety programs primarily seek to:", o: ["Increase sales", "Cut insurance", "Minimize accidents", "Expand recruitment"], a: 2 },
  { q: "Occupational safety control includes:", o: ["Ignoring risk", "Isolating hazardous processes", "Increasing overtime", "Reducing inspection"], a: 1 },
  { q: "The Job Characteristics Model was developed by:", o: ["Vroom and Maslow", "Hackman and Oldham", "Taylor and McGregor", "Herzberg and Skinner"], a: 1 },
  { q: "What does 'autonomy' in job design refer to?", o: ["Assigned teamwork", "Mandatory overtime", "Independence in job execution", "Performance reviews"], a: 2 },
  { q: "An organization adopting HRIS can expect:", o: ["Reduced staff size", "Improved decision-making", "More paper records", "Higher turnover"], a: 1 },
  { q: "Effective manpower utilization means:", o: ["Employing only contractors", "Outsourcing HR tasks", "Making optimal use of staff", "Reducing wages"], a: 2 },
  { q: "One cause of communication failure in meetings is:", o: ["Sitting arrangement", "Loud ringtones", "Air conditioning", "Refreshments"], a: 1 },
  { q: "Job enrichment enhances motivation by:", o: ["Cutting hours", "Adding meaningful tasks", "Standardizing duties", "Reducing responsibility"], a: 1 },
  { q: "A feature of informal orientation is that it is:", o: ["Computer-based", "Unstructured and spontaneous", "HR-led", "Policy-oriented"], a: 1 },
  { q: "An effect of effective socialization is:", o: ["Skill transfer", "Wage increment", "Commitment to the organization", "Layoff avoidance"], a: 2 },

  // === BATCH 16 ===
  { q: "The NSIWC is involved in:", o: ["Dismissing employees", "Conducting interviews", "Cross-checking wage negotiations", "Union protests"], a: 2 },
  { q: "Orientation reduces which of the following?", o: ["Skill development", "Turnover and stress", "External hiring", "Cost of living"], a: 1 },
  { q: "What should come before conducting a training session?", o: ["Payment", "Needs assessment", "Employee birthday", "Annual leave"], a: 1 },
  { q: "Why do employees resist change less after training?", o: ["New uniforms", "Better adaptability", "Higher fuel cost", "Less supervision"], a: 1 },
  { q: "Job rotation benefits the organization by:", o: ["Increasing errors", "Reducing output", "Enhancing versatility and employee development", "Eliminating bonuses"], a: 2 },
  { q: "One failure of manpower planning is:", o: ["Skill alignment", "Workforce efficiency", "Shortage in critical skill areas", "Reduction in tax"], a: 2 },
  { q: "What is required for matching future manpower needs to current inventory?", o: ["Demotion plans", "Specific action plans", "Price forecast", "Casual interviews"], a: 1 },
  { q: "A long-term purpose of manpower planning is to:", o: ["Suspend hiring", "Decrease morale", "Maximize ROI on human resources", "Remove sick leave"], a: 2 },
  { q: "The final goal of human resource development is to:", o: ["Decrease bonuses", "Build competent, motivated employees", "Stop promotions", "Reduce HR policies"], a: 1 },
  { q: "The phase after decoding in communication is:", o: ["Encoding", "Noise", "Understanding", "Transmitting"], a: 2 },
  { q: "The NSIWC stands for:", o: ["National Salaries, Incomes and Wages Commission", "National Staff Integration Welfare Council", "Nigerian Staff Incomes and Wages Committee", "National Salary Insurance and Welfare Commission"], a: 0 }
];

const BATCH_SIZE = 15;
let currentBatch = 0;
let userSelections = {};
let correctCount = 0;
let incorrectCount = 0;

function initQuiz() {
  renderBatch(currentBatch);
  setupPagination();
  updateStickyProgressBar();
}

function renderBatch(batchIdx) {
  const wrapper = document.getElementById('quiz-wrapper');
  wrapper.innerHTML = '';
  const startIndex = batchIdx * BATCH_SIZE;
  const endIndex = Math.min(startIndex + BATCH_SIZE, quizData.length);
  const batchQuestions = quizData.slice(startIndex, endIndex);

  batchQuestions.forEach((item, relativeIdx) => {
    const absoluteIdx = startIndex + relativeIdx;
    const card = document.createElement('div');
    card.className = 'quiz-card';

    const qText = document.createElement('div');
    qText.className = 'question-text';
    qText.textContent = `${absoluteIdx + 1}. ${item.q}`;
    card.appendChild(qText);

    const optionsContainer = document.createElement('div');
    optionsContainer.className = 'options-list';

    item.o.forEach((option, optIdx) => {
      const btn = document.createElement('button');
      btn.className = 'option-btn';
      btn.textContent = option;

      if (userSelections[absoluteIdx] !== undefined) {
        btn.disabled = true;
        if (optIdx === item.a) {
          btn.classList.add('correct');
        } else if (optIdx === userSelections[absoluteIdx]) {
          btn.classList.add('incorrect');
        }
      } else {
        btn.addEventListener('click', () => handleSelection(absoluteIdx, optIdx, optionsContainer));
      }
      optionsContainer.appendChild(btn);
    });

    card.appendChild(optionsContainer);
    wrapper.appendChild(card);
  });

  document.getElementById('batch-label').textContent = `Batch ${batchIdx + 1} of ${Math.ceil(quizData.length / BATCH_SIZE)}`;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function handleSelection(absoluteIdx, chosenIdx, container) {
  const item = quizData[absoluteIdx];
  userSelections[absoluteIdx] = chosenIdx;

  const buttons = container.querySelectorAll('.option-btn');
  buttons.forEach((btn, optIdx) => {
    btn.disabled = true;
    if (optIdx === item.a) {
      btn.classList.add('correct');
    } else if (optIdx === chosenIdx) {
      btn.classList.add('incorrect');
    }
  });

  // Show correct answer note if the user chose wrong
  if (chosenIdx !== item.a) {
    const note = document.createElement('div');
    note.style.marginTop = '12px';
    note.style.padding = '10px 12px';
    note.style.background = '#ebf8ff';
    note.style.borderLeft = '4px solid #3182ce';
    note.style.borderRadius = '6px';
    note.style.fontSize = '0.9rem';
    note.style.color = '#2c5282';
    note.innerHTML = `<strong>Correct answer:</strong> ${item.o[item.a]}`;
    container.appendChild(note);
  }

  if (chosenIdx === item.a) {
    correctCount++;
  } else {
    incorrectCount++;
  }
  updateStickyProgressBar();
  }

  if (chosenIdx === item.a) {
    correctCount++;
  } else {
    incorrectCount++;
  }
  updateStickyProgressBar();
  }

  if (chosenIdx === item.a) {
    correctCount++;
  } else {
    incorrectCount++;
  }
  updateStickyProgressBar();
}

function updateStickyProgressBar() {
  const startIndex = currentBatch * BATCH_SIZE;
  const endIndex = Math.min(startIndex + BATCH_SIZE, quizData.length);
  const totalInBatch = endIndex - startIndex;

  let answeredInBatch = 0;
  let correctInBatch = 0;
  let incorrectInBatch = 0;

  for (let i = startIndex; i < endIndex; i++) {
    if (userSelections[i] !== undefined) {
      answeredInBatch++;
      if (userSelections[i] === quizData[i].a) {
        correctInBatch++;
      } else {
        incorrectInBatch++;
      }
    }
  }

  document.getElementById('progress-text').textContent = `Answered: ${answeredInBatch} / ${totalInBatch}`;
  document.getElementById('correct-count').textContent = correctInBatch;
  document.getElementById('incorrect-count').textContent = incorrectInBatch;

  const correctPct = (correctInBatch / totalInBatch) * 100;
  const incorrectPct = (incorrectInBatch / totalInBatch) * 100;

  document.getElementById('bar-correct').style.width = `${correctPct}%`;
  document.getElementById('bar-incorrect').style.width = `${incorrectPct}%`;
}

function setupPagination() {
  const prevBtn = document.getElementById('prev-batch');
  const nextBtn = document.getElementById('next-batch');
  const totalBatches = Math.ceil(quizData.length / BATCH_SIZE);

  prevBtn.addEventListener('click', () => {
    if (currentBatch > 0) {
      currentBatch--;
      renderBatch(currentBatch);
      updateStickyProgressBar();
      prevBtn.disabled = currentBatch === 0;
      nextBtn.disabled = false;
    }
  });

  nextBtn.addEventListener('click', () => {
    if (currentBatch < totalBatches - 1) {
      currentBatch++;
      renderBatch(currentBatch);
      updateStickyProgressBar();
      nextBtn.disabled = currentBatch === totalBatches - 1;
      prevBtn.disabled = false;
    }
  });
}

document.addEventListener('DOMContentLoaded', initQuiz);
