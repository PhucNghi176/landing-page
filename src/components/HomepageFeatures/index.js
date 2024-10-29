import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
const GitHubLogo = require('@site/static/img/github-mark.svg').default;
const LinkIcon = require('@site/static/img/link-svgrepo-com.svg').default;
const DocIcon = require('@site/static/img/document-filled-svgrepo-com.svg').default;
console.log(GitHubLogo);
const FeatureList = [
  {
    title: 'ThrivoHR - HRMS',
    Svg: require('@site/static/img/ThrivoHR.svg').default,
    description: (
      <>
        An all-in-one HRM platform for managing onboarding, attendance, payroll, and performance with ease and efficiency
      </>
    ),
    link: 'https://github.com/PhucNghi176/ThrivoHR',
    page: 'https://thrivohr.cloud/',
    doc: 'https://google.com'
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
    link: 'https://github.com/PhucNghi176/ThrivoHR',
    page: 'https://thrivohr.cloud/',
    doc: 'https://google.com'
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
    link: 'https://github.com/PhucNghi176/ThrivoHR',
    page: 'https://thrivohr.cloud/',
    doc: 'https://google.com'
  },
];

function Feature({ Svg, title, description, link, page, doc }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <a
          href={page}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: 'inherit', // Keeps the title's text color
          }}
        >
          <Heading as="h3" style={{ display: 'flex', alignItems: 'center' }}>
            {title}
            {link && (
              <LinkIcon
                style={{ width: '16px', height: '16px', marginLeft: '8px' }}
              />
            )}
          </Heading>
        </a>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <GitHubLogo style={{ width: '30px', height: '30px', marginTop: '8px' }} />
        </a>
        <a
          href={doc}
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginLeft: '8px' }}
        >
          <DocIcon style={{ width: '30px', height: '30px' }} />
        </a>
      </div>
    </div>
  );
}


export default function HomepageFeatures() {
  return (
    <div>
      <Heading as="h1" style={{ textAlign: 'center', marginTop: '30px' }}>My Project</Heading>
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
