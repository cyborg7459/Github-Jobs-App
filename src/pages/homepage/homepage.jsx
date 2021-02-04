import React from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';

import './homepage-style.scss';
import Loader from '../../components/loader/loader.component';
import ErrorPage from '../../components/404error/404error-component';
import DisplayCard from '../../components/display-card/display-card-component';

class Homepage extends React.Component {
    
    state = {
        jobs : [],
        isLoading : false,
        show404 : false,
        displayJobs : [{
            "id": "eb3071be-4111-413d-bfe9-8b85e9e8737c",
            "type": "Full Time",
            "url": "https://jobs.github.com/positions/eb3071be-4111-413d-bfe9-8b85e9e8737c",
            "created_at": "Wed Feb 03 16:49:02 UTC 2021",
            "company": "Animoto",
            "company_url": "http:",
            "location": "Remote (USA only)",
            "title": "Senior Software Engineer, Full Stack",
            "description": "<p>We are a remote-first, office-optional team. You are invited to do the best work of your life from anywhere within the USA.</p>\n<p>At Animoto, we have always believed video is the most powerful form of communication. The pandemic has made this more true than ever. Small businesses face unprecedented challenges in connecting with their audiences, as consumers are also challenged to connect with friends and family. Video can bring us together.</p>\n<p>That’s why our mission is to help anyone make a powerful, professional video. We make best-in-class, easy-to-use web and mobile video creation apps, with pre-built narrative templates and stunning video styles, that help our customers customize their own engaging videos to share on social media and beyond.</p>\n<p>Over the next three years, we have a mission to make video creation faster, easier, and more fun, on any device, in ways that have never been done before.</p>\n<p>We are looking for a senior full stack engineer to join our product application teams. You will be working closely with the product, design mobile and other full-stack engineers to help propel our award-winning video creation service to the next level. You will be developing a responsive, elegant web experience and pioneering the next generation of video creation software.</p>\n<p>What you’ll do:</p>\n<ul>\n<li>Collaborate with a team of engineers and product designers to develop new features while iterating and improving the existing experience</li>\n<li>Build efficient and reusable React components and services using NodeJS and Ruby on Rails</li>\n<li>Ensure high standards in architecture discussions, code reviews, and provide technical leadership</li>\n<li>Advocate for best practices, great usability, and exceptional quality</li>\n</ul>\n<p>What we’re looking for:</p>\n<ul>\n<li>5+ years of professional experience building front-end web applications</li>\n<li>Expert knowledge of JavaScript</li>\n<li>Experience with modern JavaScript libraries and tooling</li>\n<li>Experience with server-side web frameworks</li>\n<li>Client-side performance and optimization experience</li>\n<li>Strong Computer Science fundamentals</li>\n<li>Excellent communication and organization skills</li>\n</ul>\n<p>What we offer:</p>\n<ul>\n<li>Opportunities for professional growth</li>\n<li>100% covered health insurance</li>\n<li>Equity</li>\n<li>Contribution to 401k</li>\n<li>$600 as part of our subscriptions perk</li>\n<li>Remote work setup</li>\n<li>Bi-weekly Product Demos, Social Thursdays, Focus Fridays</li>\n<li>Bi-annual company events and hackathons</li>\n</ul>\n<p>Please note that we are not currently sponsoring visas.</p>\n<p>We embrace the differences of our team members and seek diversity of beliefs, backgrounds, education, and all the other things that make us unique. It is our inherent belief that diverse teams build better products. We aim to create a space where employees can bring their true selves to work every day. Animoto is proud to be an equal opportunity workplace and affirmative action employer. We welcome you to be a part of it.</p>\n",
            "how_to_apply": "<p><a href=\"https://jobs.lever.co/animoto/2afb604a-c7c5-4001-83ab-6d75b2176fbc?lever-origin=applied&amp;lever-source%5B%5D=GitHub\">https://jobs.lever.co/animoto/2afb604a-c7c5-4001-83ab-6d75b2176fbc?lever-origin=applied&amp;lever-source%5B%5D=GitHub</a></p>\n",
            "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBZ2VZIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f628007bcf6b879633372a24424ea78c7241cccb/YoutubeLogo.png"
          },
          {
            "id": "bedc23bf-01bf-4840-9125-b016ae72633e",
            "type": "Full Time",
            "url": "https://jobs.github.com/positions/bedc23bf-01bf-4840-9125-b016ae72633e",
            "created_at": "Wed Feb 03 10:11:42 UTC 2021",
            "company": "URBANTZ",
            "company_url": "http:",
            "location": "Europe",
            "title": "Software Engineer ",
            "description": "<p>Your talent and creative mind are needed at Urbantz !</p>\n<p>Join our team as a Software engineer (Intermediate – Senior level).</p>\n<p>What? Javascript / React / MongoDB / Kubernetes</p>\n<p>Where? Remote from anywhere in Europe OR at our Brussels office</p>\n<p>When? ASAP</p>\n<p>About Us</p>\n<p>Urbantz operates on one of the most growing markets, offering a SaaS solution for retail, logistics, and e-commerce - businesses that tremendously accelerated in 2020.\nWe’re growing fast for the last 5 years - recently Deloitte has listed as among the top 3 fastest growing startups in Belgium.\nWe’re a team of diverse people who make things happen.\nOur culture is built on experimentation, constant development, flexibility, and encouragement of initiatives in an international, English speaking work environment.\nCompany size: 50-60 people\n#TogetherWeDeliver</p>\n<p>About the Team</p>\n<p>“Think, try, fail, collaborate and grow a better developer.”</p>\n<p>As a company, we believe that, sometimes, failing is the best way to learn and get better at what you do.\nWe believe in the richness of collaboration and of diversity, for everyone to make an impact and work together toward a common goal.\nWe offer a flexible and fun working environment with lots of autonomy and possibility to grow as a professional and as a person. You will find an engaged team, where people share their joy for technology, ready to coach you as well as learning from you.\nFor us, the culture fit is important as we want to invest in our people for the long term.\n-Collaboration, Ownership, Innovation, Excellence &amp; Sustainability are our core values-</p>\n<p>Team size: 15+</p>\n<p>About the position</p>\n<p>You will help build a modern, highly complex, multi-service application that leads to the delivery of millions of packages per year to clients like you.\nAs a software engineer, you will work closely with our product manager to define the how to the why and what of our product.\nOur language: Javascript.\nOur main technologies: We use AngularJS and React-native on the front-end, and NodeJS for the backend. Our unit-tests use Jest, and our end-to-end tests use Protractor. We store data using MongoDB. Our code is stored in GitLab, and we make use of its CI/CD capabilities to deploy easily to AWS and Azure. Our containerization &amp; orchestration uses Docker + Kubernetes.\nWe work with short agile development cycles, with an alternance of 3 weeks on specific tasks and 1 week of cool down period to prepare for the next cycle.</p>\n<p>About You</p>\n<p>You are positive minded and like to find ways to constantly improve in what you do.</p>\n<p>You can get things done and communicate well while doing it;\nYou are fluent in English;\nYou have at least one relevant experience;\nYou stay abreast of developments and best practices within the technologies we use.\nYou already have affinity with logistic sector or interested to learn about it.\nWhat’s in it for you?</p>\n<p>A fast growing company with lots of great challenges.\nA permanent contract with a great extra-legal package in Belgium, or a nice freelance long term collaboration anywhere in Europe.\nFlexible company, nice colleagues to work with, fun company activities (even for our remote people!),...\nIf you desire to work to have an impact and bring a change: don’t hesitate and apply now!</p>\n<p>Interview Process</p>\n<p>Brief phone conversation with HR\nInterview with 2 team members\nTechnical test\nInterview with CTO/Technical leads\n(A quick chat with CEO or COO)</p>\n<p>#TogetherWeDeliver</p>\n",
            "how_to_apply": "<p>email your resume to <a href=\"mailto:boris@urbantz.com\">boris@urbantz.com</a></p>\n",
            "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdG1YIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--aa2a2f1c2e77e6092ca2c56fd124dbba918c314e/Urbantz%20Logo.png"
          },
          {
            "id": "d1027fbb-580d-4a92-a52f-70224506d3ef",
            "type": "Full Time",
            "url": "https://jobs.github.com/positions/d1027fbb-580d-4a92-a52f-70224506d3ef",
            "created_at": "Wed Feb 03 09:02:49 UTC 2021",
            "company": "Kausa",
            "company_url": "https://www.kausa.ai",
            "location": "Berlin",
            "title": "Senior Full Stack Software Engineer (Frontend & Backend) in Typescript / Javascript",
            "description": "<p>Our mission is to empower businesses to make data-driven decisions faster and more effortlessly than ever before. Therefore, we are building an advanced analytics platform using machine learning to reason why key performance indicators change.</p>\n<p>Join our venture as a software engineering allrounder both developing the frontend and backend of our platform and impact how people and businesses work. Get the chance to shape a young technology startup from its earliest days on through your efforts, experience, and industry expertise.</p>\n<p>Our company is built at Merantix, a Venture Studio focussing on artificial intelligence. This means that we are part of an ecosystem of top-tier engineers, scientists, and entrepreneurs from leading universities who will help us along the way.</p>\n<p><strong>Tasks</strong></p>\n<p>As the Frontend &amp; Backend Software Engineer, you are one of our first employees and shape the company and its vision from the ground up. Among others, your main responsibilities are the following:</p>\n<ul>\n<li>Develop state-of-the-art frontend and backend applications which will be used within organizations of all sizes;</li>\n<li>Architect and implement multi-tenancy;</li>\n<li>Building highly-reliable software with the highest quality and security standards;</li>\n<li>Collaborate closely with our Chief Technology Officer and Chief Science Officer to bridge the gap between the analytical core of our product and its user interface;\n. Work with the Design and Product Team to implement an exceptional design and user experience;\n. As we value ownership and collaboration, you support and mentor your colleagues and review the team’s technical design, code, and documentation.</li>\n</ul>\n<p><strong>Requirements</strong></p>\n<p>We define ourselves by a culture of collaboration and ownership. We’re looking for a driven, capable, and thoughtful person to add to our vision. The main qualifications we expect you to have are the following:</p>\n<ul>\n<li>Degree in computer science, statistics, mathematics, physics, engineering, machine learning or relevant experience;\nIt is essential that you are an experienced Software Engineer and built large scale applications in the past;\nMastered Javascript and Typescript and are fluent in general-purpose languages such as Python or Java;\nExpert knowledge in technologies and frameworks such as Reactjs, D3js, NodeJS, GraphQL, or Cypress to name a few;\nExtensive know-how with Systems Design and Software Architecture.\nPragmatic mindset, make quick decisions, and clearly prioritize on what moves the needle;\nLove what you do (and own it).</li>\n</ul>\n<p><strong>Benefits</strong></p>\n<p>Our hierarchy is flat and communication direct, which means that we operate and learn fast, as a team. In addition to a competitive salary and equity package, you can expect the following:</p>\n<ul>\n<li>Flexible working hours as we believe in ownership and trust;</li>\n<li>Learning &amp; Development Program for all our team members;</li>\n<li>Regular team events and intensive exchange with all Merantix companies;</li>\n<li>Free drinks, snacks, and breakfast.</li>\n</ul>\n<p>We are an equal-opportunity employer and value diversity. We consider all applications equally regardless of race, color, ancestry, religion, sex, national origin, sexual orientation, age, citizenship, marital status, disability, or gender identity. We strongly encourage individuals from groups traditionally underrepresented in tech to apply, and we can help with immigration.</p>\n",
            "how_to_apply": "<p><a href=\"https://kausa.join.com/jobs/1806782-senior-full-stack-software-engineer-frontend-and-backend-in-typescript-javascript-kausa?pid=357a3b4531918760973f&amp;utm_source=github_jobs&amp;utm_medium=paid&amp;utm_campaign=single%2Bposting&amp;utm_content=senior%2Bfull%2Bstack%2Bsoftware%2Bengineer%2Bfrontend%2Band%2Bbackend%2Bin%2Btypescript%2Bjavascript%2Bkausa\">https://kausa.join.com/jobs/1806782-senior-full-stack-software-engineer-frontend-and-backend-in-typescript-javascript-kausa?pid=357a3b4531918760973f&amp;utm_source=github_jobs&amp;utm_medium=paid&amp;utm_campaign=single%2Bposting&amp;utm_content=senior%2Bfull%2Bstack%2Bsoftware%2Bengineer%2Bfrontend%2Band%2Bbackend%2Bin%2Btypescript%2Bjavascript%2Bkausa</a></p>\n",
            "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdEtYIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--08e9bf3753a6f20098368dd8bbf841c49a46bdac/Bildschirmfoto%202021-02-03%20um%2010.01.12.png"
          },
          {
            "id": "a82fad21-3e65-4edc-945b-9be250ecc58a",
            "type": "Full Time",
            "url": "https://jobs.github.com/positions/a82fad21-3e65-4edc-945b-9be250ecc58a",
            "created_at": "Wed Feb 03 05:07:01 UTC 2021",
            "company": "DESYGNER",
            "company_url": "http://DESYGNER",
            "location": "Australia",
            "title": "Senior Full Stack Developer",
            "description": "<p>Senior Full Stack developer</p>\n<p>Do you wake up in the middle of the night and realise why a function isn’t working? Or perhaps you sleep soundly, dreaming of how you’re going to create a perfect user experience? Then we’d love to hear from you.</p>\n<p>The Role</p>\n<p>As a full-stack Developer at Desygner, you will be working directly with Desygner’s founders to organise, manage, and deliver technical solutions. You will play an active role in the development of our product and assist Desygner to reach its full potential in conjunction with our Product Led Growth. You will be responsible for:</p>\n<p>Maintaining and enhancing the core editor code;\nMaintaining and improving multiple APIs, with thousands of queries by the minute;\nLow-level APIs integration with external services such as social networks, notification platforms, payment systems and more;\nConstant improvement in user experience;\nAssist us with internal practices to standardise development as we grow.</p>\n<p>Required Skills:</p>\n<p>The perfect candidate would have experience with MVC backend frameworks (PHP), Node tools (Gulp), CI, testing, JavaScript and CSS experience.</p>\n<p>You will ideally have:</p>\n<p>More than 4 years of software development experience;\nIn-depth knowledge in PHP (MVC, ORMs, Cache, services), SQL and networks;\nIn-depth knowledge in API server to client understanding;\nIn-depth knowledge in low level (framework less) HTML, CSS, JS;\nBasic knowledge in node, ES6, transpilers, building tools;\nIndependent (level B2 or equivalent) in English.</p>\n<p>Desired Skills:</p>\n<p>Template engines, SEO, SysOps, CI, Linux;\nAWS.</p>\n<p>About Us</p>\n<p>Desygner is one of the leading tech companies now in Australia’s top 10 startups to work for (and top 500 in the world). Desygner is focused on building solutions that make design, branding, and marketing better through automation, AI, and adaptive technologies without needing a designer. There is no better opportunity to be part of something big than this and now is the chance to join our small team of under 50 in the Gold Coast before we explode!</p>\n<p>We believe that anyone should have a powerful brand and opportunities, regardless of their marketing budget. Our users’ success is our success and we’re on a mission to deliver solutions that make marketing better and easier for them.</p>\n<p>B2C and B2B solutions\nGlobal audience with over 13 million users (18,000+ new signups every day)\nBig corporate clients with many more industry leaders coming onboard\nLeading technology in graphic design, on-brand content creation, PDF editing, and intelligent design automation</p>\n<p>Organisation Cultural Fit</p>\n<p>We are looking for professionals who seek constant improvement, and are willing to take responsibility and celebrate the wins.</p>\n<p>Passion for true bootstrapped startups and big-picture development\nTakes ownership and finds solutions with our founders\nAble to think outside of the box and solve problems</p>\n<p>Benefits &amp; Perks</p>\n<p>We nurture a creative, focused &amp; fun environment where people look forward to coming to the office. Our team is diverse in both culture and talent which makes for a superbly unique work environment without politics and hierarchy.</p>\n<p>Work in the Gold Coast with views over the beaches and canals from your desk\nMulticultural small, yet dynamic team with direction and leadership clear\nWork on solutions used by millions of people every day\nCentral office location in Gold Coast near best restaurants, beaches, and public transport.\nOpportunity to live a holiday lifestyle overlooking the sun and sea every morning\nCompetitive compensation + equity option plans by seniority\nFlexible hours, so you will not be controlled by the clock!\nExciting career opportunities as an early team member\nBe respected and heard in a startup that is now smashing numbers\nContinuous learning, development, and support from founders and external training</p>\n",
            "how_to_apply": "<p>You must have rights for working full-time in Australia. Please email your resume and cover letter  to <a href=\"mailto:recruitment@desygner.com\">recruitment@desygner.com</a></p>\n",
            "company_logo": "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc21YIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--3d925d75f33661a19c34b3a1fbe9ca50f4a15549/logo.png"
          },
          {
            "id": "a23fa201-23fd-4981-900d-32fdb8b81da0",
            "type": "Full Time",
            "url": "https://jobs.github.com/positions/a23fa201-23fd-4981-900d-32fdb8b81da0",
            "created_at": "Wed Feb 03 00:15:39 UTC 2021",
            "company": "Rainway, Inc.",
            "company_url": "https://rainway.com",
            "location": "Remote / Seattle",
            "title": "Senior API Developer",
            "description": "<p>As a developer nothing feels better than coming across a beautifully designed API. Thoroughly documented, easy to understand resources, fast queries with predicable responses. A true delight to build against. We're looking to create an API developers can love as we help them build the future of computing. That is where you come in.</p>\n<h1>Intro</h1>\n<h3>Why this Role?</h3>\n<ol>\n<li>\n<strong>Build the next big thing:</strong> Rainway aims to bring desktop software to billions of new devices worldwide by creating new ways for developers to distribute and build their products. We are creating the world Xerox PARC imagined decades ago. You can help us realize this dream.</li>\n<li>\n<strong>Work with some of the best engineers in the world:</strong> A team of less than 5 from all over the world built technology that is used and trusted by some of the largest companies in the world. Learn from a team with decades of combined experience and share your own. We're stronger together.</li>\n<li>\n<strong>Join us at a magical time:</strong> You not only get to design and build one of our core products, but also help define the culture of the company as a whole.</li>\n</ol>\n<h1>About this Role</h1>\n<h3>So, what will you do as a Senior API Developer?</h3>\n<ul>\n<li>Design and implement high performance scalable database-centric serverless microservices and RESTful APIs</li>\n<li>Estimate engineering effort, plan implementation, and roll out applications with cross-functional impact</li>\n<li>Own continuous improvement and fine tuning of API performance, scalability and security</li>\n<li>Independently design, code, and test major features, as well as work jointly with other team members to deliver complex changes</li>\n</ul>\n<h3>This might be for you if you have...</h3>\n<ul>\n<li>A strong API development background with an understanding of developing external facing APIs to be used by customers and their products</li>\n<li>5+ years of backend experience: NodeJS, JSON, REST, JWT, Micro Services, MongoDB, NoSQL</li>\n<li>4+ years of AWS Lambda</li>\n<li>Proven ability to define and implement effective software development methodologies</li>\n<li>Experience development of large-scale consumer facing micro-services solution is highly recommended</li>\n<li>Experience building serverless solutions is preferred</li>\n<li>Excellent communication skills and the ability to clearly communicate technical concepts to a non-technical audience</li>\n<li>A flexible approach to analyzing technical issues and clearly communicating recommendations/solutions</li>\n</ul>\n<h3>FAQ</h3>\n<ul>\n<li>What benefits can I expect?\n<ul>\n<li>Top of the line health, dental, and vision insurance.</li>\n<li>New laptop/equipment of your choice.</li>\n<li>Unlimited PTO.</li>\n<li>Parental leave.</li>\n<li>401K</li>\n<li>A large spacious office with amenities to your heart's desire (although note that currently we are on a full time work from home policy).</li>\n</ul>\n</li>\n<li>Is this role only full-time? Can I work remotely?\n<ul>\n<li>This role is full-time. We have an office in Seattle, but currently all Seattle based employees work from home. This role is not limited to local candidates, fully remote candidates are welcome apply.</li>\n</ul>\n</li>\n<li>Do you sponsor visas?\n<ul>\n<li>At the moment, we're not able to sponsor or transfer visas for this role.</li>\n</ul>\n</li>\n</ul>\n<h1>How to Apply</h1>\n<p>Sound like a good fit for you? Please send us an email to <strong><a href=\"mailto:work-at@rainway.com\">work-at@rainway.com</a></strong>!</p>\n<ul>\n<li>Include this role's title in your subject line (it'll help us to sort through the emails).</li>\n<li>Send along links that best showcase the relevant things you've built and done, e.g. your portfolio, LinkedIn, GitHub, code samples.</li>\n<li>Your curated Spotify playlist.</li>\n<li>Keep it real 🤘</li>\n</ul>\n",
            "how_to_apply": "<p>Sound like a good fit for you? Please send us an email to <strong><a href=\"mailto:work-at@rainway.com\">work-at@rainway.com</a></strong>!</p>\n<ul>\n<li>Include this role's title in your subject line (it'll help us to sort through the emails).</li>\n<li>Send along links that best showcase the relevant things you've built and done, e.g. your portfolio, LinkedIn, GitHub, code samples.</li>\n<li>Your curated Spotify playlist.</li>\n<li>Keep it real 🤘</li>\n</ul>\n",
            "company_logo": null
          }],
        currentPage : 0, 
        totalPages : 0
    }

    searchByDescription = () => {
        this.setState({
            isLoading : true
        })
        const description = document.getElementById('search-phrase').value;
        if(description === "")
            alert('Kindly enter a search phrase');
        else {
            const url = `https://cors-anywhere.herokuapp.com/jobs.github.com/positions.json?search=${description}`;
            axios.get(url)
            .then(res => {
                if(res.data == null || res.data.length === 0) {
                    this.setState({
                        show404 : true
                    })
                }
                this.setState({
                    jobs : res.data,
                    isLoading : false,
                    totalPages : Math.ceil(res.data.length/5),
                    currentPage : 1,
                    show404 : false,
                    displayJobs : res.data.slice(0,5)
                })
            })
        }
    }

    render() {
        return (
            <div className="homepage-container">
                {
                    this.state.isLoading ? <Loader text='Finding the perfect jobs for you' /> : null
                }
                <div className="homepage-inner">
                    <div className="search-container">
                        <div className="overlay">
                            <div className="input-region">
                                <input id='search-phrase' type="text" placeholder='Title, companies, expertise or benefits'/>
                                <button onClick = {() => {this.searchByDescription()}}>Search</button>
                            </div>
                        </div>
                    </div>
                    <Row className='main-row'>
                        <Col md={4} xl={3} className="sidebar pl-0">
                            <h1 className='size13 mb-0'>Choose location</h1>
                            <hr className='mt-2 mb-4'></hr>
                            <input id='location' className='mb-4' type="text" placeholder="Enter location"/>
                        </Col>
                        <Col md={8} xl={9} className='jobcard-container'>
                            {
                                this.state.show404 ? (
                                    <ErrorPage />
                                ) : (
                                    <Row>
                                        {
                                            this.state.displayJobs.map(job => {
                                                return (
                                                    <DisplayCard key={job.id} job={job}/>
                                                )
                                            })
                                        }
                                    </Row>       
                                )
                            }
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Homepage;