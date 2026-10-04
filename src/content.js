/** Portfolio content. Edit this file to update biography, skills and experience. */
export const profile = {
  name: 'Pranay Deep Singh',
  role: 'Software Engineering Student',
  location: 'Suva, Fiji',
  email: 'Pranaydeepsingh.123@gmail.com',
  github: 'https://github.com/MisguidedMC',
  githubUsername: 'MisguidedMC',
  introduction: 'I’m a software engineering student bringing together code, careful testing and clear communication to turn ideas into useful software.',
  biography: 'I’m pursuing a Bachelor of Software Engineering at the University of the South Pacific, with expected graduation in 2027. I enjoy analytical problem solving, learning new tools and building a stronger foundation in software and web development.',
  perspective: 'My internships have given me experience beyond the code: user acceptance testing, project reporting and stakeholder coordination. I’m interested in how thoughtful development and useful documentation help a team deliver a better result.'
};
export const projects = [
  { name: 'Coding Projects', repository: 'Coding_Projects', language: 'C++', category: 'projects', description: 'A collection of coding projects, bringing programming concepts into practical implementation.', focus: 'Programming · Logic · Problem solving', code: ['// From a problem to a solution', 'understand();', 'build();', 'refine();'] },
  { name: 'CS214 Labs', repository: 'CS214-Labs', language: 'Java', category: 'coursework', description: 'Java laboratory work for CS214, connecting university coursework with hands-on programming practice.', focus: 'Java · Coursework · Practical learning', code: ['// Learn by building', 'class Learning {', '  // One concept at a time', '}'] },
  { name: 'Coding Practice', repository: 'Coding_Practice', language: 'Java', category: 'practice', description: 'Programming practice with Java, supporting continued learning and the development of problem-solving skills.', focus: 'Practice · Fundamentals · Iteration', code: ['// Keep exploring', 'while (curious) {', '  learn();', '}'] }
];
export const skills = [
  { name: 'Programming', detail: 'Building a foundation in software development', items: ['C++', 'Java', 'SQL'] },
  { name: 'Web development', detail: 'Structure, presentation and responsive interfaces', items: ['HTML', 'CSS', 'Front-end layout'] },
  { name: 'Testing & analysis', detail: 'Checking behavior and communicating findings', items: ['User acceptance testing', 'Issue identification', 'Analytical thinking'] },
  { name: 'Tools & teamwork', detail: 'Supporting clear, collaborative delivery', items: ['VS Code', 'Microsoft Office', 'Excel', 'Canva', 'Communication', 'Project reporting'] }
];
export const experience = [
  {
    organization: 'Asia Pacific Regulatory Centre', acronym: 'APRC', role: 'Project Intern', date: 'August 2026 — Present', current: true,
    summary: 'Supporting project delivery through reporting, stakeholder communication and event coordination.',
    points: [
      'Prepared project reports, incorporated supervisor feedback and supported stakeholder meetings and communications.',
      'Supported the Basic Tariff Literacy Toolkit launch by coordinating invitations, confirming attendance through telephone follow-ups and organising venue arrangements.',
      'Coordinated with Encore’s audiovisual team, created lunch coupons and demonstrated a Learning Management System during the launch.',
      'Coordinated speakers and registration for the APRC–AFUR Energy Series webinar on 25 August 2026, served as MC and prepared post-webinar reports.',
      'Used AI tools for report structure and proofreading while protecting sensitive organisational information.'
    ]
  },
  {
    organization: 'Spirit of Endeavour', acronym: 'SOE', role: 'Project Intern', date: 'May 2025 — November 2025', current: false,
    summary: 'Contributed to project reporting, user acceptance testing and administrative coordination.',
    points: [
      'Participated in stakeholder meetings and supported progress tracking at important project milestones.',
      'Assisted with hands-on user acceptance testing and analysed the project’s purpose and system.',
      'Prepared monthly project management and quarterly reports, and supported administrative and risk management activities.',
      'Drafted social media content and shared weekly stakeholder updates through the intranet.'
    ]
  }
];
export const education = {
  degree: 'Bachelor of Software Engineering', institution: 'University of the South Pacific', period: '2024 — Present', graduation: 'Expected graduation · 2027',
  certifications: ['CS111 / CS112 — C++ certification', 'CS214 — Java certification']
};
