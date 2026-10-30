export const person = {
  name: 'Pavels Sisojevs',
  title: 'Product engineering lead',
  headline: ['Engineering Leader', 'Applied AI', 'Real-Time Systems', 'Building Products at Scale'],
  location: 'Zurich, Switzerland',
  email: 'pavels.sisojevs@gmail.com',
  links: {
    github: 'https://github.com/the-pavels',
    linkedin: 'https://www.linkedin.com/in/pavels-sisojevs-10601534',
  },
};

export const profile =
  'Product-focused engineering leader with 15+ years of experience building consumer platforms and real-time systems. Most recently led product and engineering at a video-chat platform with millions of monthly active users, turning it into a moderated product with paid features and an internal currency. Moved the 15-person team to AI-assisted development and architected the AI moderation pipeline. Still ships code across the whole product: backend services, the WebRTC video stack, the Kubernetes infrastructure underneath, and the mobile apps.';

export type Role = {
  company: string;
  role: string;
  start: string;
  end: string;
  scope?: string;
  bullets: string[];
  tech: string[];
};

export const experience: Role[] = [
  {
    company: 'Chatroulette',
    role: 'Product engineering lead',
    start: 'May 2020',
    end: 'Sep 2026',
    scope:
      'Led product and engineering for a consumer video-chat platform with millions of monthly users, across backend, frontend, mobile, infrastructure, analytics, moderation, and product strategy.',
    bullets: [
      'Architected and ran the custom WebRTC infrastructure behind random video matching, handling thousands of concurrent users at peak.',
      'Architected the AI moderation pipeline, safety features, reporting flows, and moderation tools that got the app approved on the App Store and Google Play in a sensitive user-generated-content category.',
      'Migrated core infrastructure from managed cloud services to a self-run Kubernetes cluster on Hetzner, cutting infrastructure costs by about 80%.',
      'Launched and maintained the React Native mobile apps for iOS and Android.',
      'Owned architecture, deployment, observability, and reliability decisions across the platform.',
      'Moved the team to AI-assisted development, bringing AI coding tools and LLM-powered workflows into every stage of the development lifecycle.',
      'Built monetization from scratch: an internal currency, paid features, payment flows, and package pricing, tuned through conversion experiments.',
      'Ran and supported dozens of product experiments across activation, engagement, monetization, and safety.',
      'Led roadmap, prioritization, and delivery for a cross-functional product and engineering team of about 15.',
      'Hired and mentored engineers across product and engineering.',
    ],
    tech: ['Scala', 'TypeScript', 'React', 'React Native', 'WebRTC', 'WebSockets', 'Kubernetes', 'Postgres', 'Redis', 'GitOps', 'CI/CD'],
  },
  {
    company: 'Leonteq Securities AG',
    role: 'Lead Scala developer',
    start: 'Sep 2018',
    end: 'Apr 2020',
    scope:
      'Led development and maintenance of the financial platform used to manage a large pension fund, coordinating a distributed team of around 10 engineers.',
    bullets: [
      'Drove the backend migration from the legacy system to the new platform.',
      'Improved performance, processing time, and reliability of the backend services behind day-to-day fund operations.',
      'Reduced manual operational work through backend automation and data-processing improvements.',
    ],
    tech: ['Scala', 'Akka Streams', 'Akka HTTP', 'Cats', 'Cats Effect', 'ZIO', 'Postgres', 'Docker', 'Kubernetes', 'AWS S3', 'GCP', 'BigQuery'],
  },
  {
    company: 'Leonteq Securities AG',
    role: 'Scala developer',
    start: 'Nov 2017',
    end: 'Sep 2018',
    bullets: [
      'Implemented backend features and maintained a legacy financial platform in a regulated environment.',
      'Helped reorganize a microservice-based environment and contributed to modernization of legacy services.',
      'Improved code review practices and the reliability of business-critical systems.',
    ],
    tech: ['Scala', 'Akka', 'Akka Streams', 'Akka HTTP', 'Akka Persistence', 'Play Framework', 'ScalaTest', 'SBT', 'JavaScript', 'AngularJS', 'Oracle DB', 'Docker'],
  },
  {
    company: 'Evolution Gaming',
    role: 'Scala developer',
    start: 'Jul 2013',
    end: 'Oct 2017',
    scope:
      'Joined during a high-growth period, as Evolution scaled its real-time live casino platform to thousands of concurrent players.',
    bullets: [
      'Built backend services and new features for four high-traffic live games.',
      'Participated in the server-side migration from Java to Scala, including a proof of concept, supporting test infrastructure, and architecture collaboration.',
      'Built a performance testing system simulating player and casino dealer behavior, helping detect performance issues before release.',
      'Created an automated dealer system for QA, saving several hours of manual testing work.',
      'Prototyped a new game using event sourcing.',
      'Supervised and mentored junior engineers.',
    ],
    tech: ['Scala', 'Akka', 'Akka HTTP', 'Akka Persistence', 'Play Framework', 'ScalaTest', 'SBT', 'JavaScript', 'CoffeeScript', 'AngularJS', 'MongoDB', 'MySQL'],
  },
  {
    company: 'Accenture Latvia',
    role: 'Scala and Java developer',
    start: 'Jun 2011',
    end: 'Jul 2013',
    bullets: [
      'Time Warner Cable (Scala): built backend services for a high-scale analytics pipeline processing client-platform events, including playback, volume changes, and other user interaction data.',
      'European Commission Taxation and Customs Union (Java): implemented new features and maintained a regulated public-sector enterprise system.',
    ],
    tech: ['Scala', 'Akka', 'Redis', 'Memcached', 'Kafka', 'Java', 'Maven', 'JDBC', 'Spring', 'Apache Wicket', 'Oracle DB'],
  },
];

export const skills: { area: string; items: string }[] = [
  { area: 'Core strengths', items: 'Engineering leadership, product engineering, distributed and real-time systems, event-driven architecture, applied AI' },
  { area: 'Backend', items: 'Scala, Rust, Java, Node.js, Akka, Cats, ZIO, Spring, WebSockets, WebRTC, microservices' },
  { area: 'Frontend & mobile', items: 'TypeScript, React, React Native' },
  { area: 'Infrastructure', items: 'Docker, Kubernetes, GitOps, CI/CD, ArgoCD, Ceph, Prometheus, Grafana' },
  { area: 'Data & messaging', items: 'Postgres, Redis, Kafka, Apache Pulsar, BigQuery, AWS S3, Google Cloud Storage' },
  { area: 'Product systems', items: 'Experimentation, moderation systems, payments integration, analytics' },
  { area: 'AI', items: 'Moderation pipelines, AI-assisted development, LLM integrations, agent prototypes, multi-agent simulations' },
];

export const education = [
  { school: 'Riga Technical University', degree: 'MSc in Computer Science', years: '2013 – 2015' },
  { school: 'Riga Technical University', degree: 'BSc in Computer Science', years: '2009 – 2013' },
];

export const languages = [
  { name: 'English', level: 'Fluent' },
  { name: 'Latvian', level: 'Native' },
  { name: 'Russian', level: 'Native' },
  { name: 'German', level: 'B1, working towards B2' },
];
