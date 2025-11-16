import ShowList from '../Components/ShowList/ShowList'
import {
  Certificate,
  Exam,
  GithubLogo,
  Medal,
  Paperclip,
  ProjectorScreenChart,
  Scroll,
  ShoppingCart,
  Users
} from '@phosphor-icons/react'
import Header from './Header'
import Center from '../Components/Center'
import { ToggleDiv } from '../Components/ToggleDiv'
import Link from '../Components/Link'

export default function Home () {
  const acheivementList = [
    // Title, Image, Description, Link
    {
      title:
        'Gold Medal and 2nd Runner-up: Thailand Mathematics Olympiad (TMO)',
      image: 'https://i.ibb.co/kSVN9pQ/unnamed.png',
      subtitle: 'I achieved a gold medal and 2nd runner up in 2019, 16th TMO. ',
      links: [
        {
          url: 'https://artofproblemsolving.com/community/c879638_2019_thailand_mathematical_olympiad',
          icon: <Paperclip />,
          text: 'Problem Link'
        }
      ],
      description:
        'Around 100 High School students are selected across the nation to compete. And I came out ranking 3rd. At that time I could only solve Problem 1, 2, 3, 6, 7, 8 with full score each. My affinity was Geometry > Algebra > Number Theory > Combinatorics. After the MO, I coached the high school team for a few years and then left the MO field.'
    },
    {
      title: "Engineering Dean's List and CSE's Department Award",
      image: 'https://img.hotimg.com/IMG_0791322f2575eefa4906.jpeg',
      fullImage: 'https://img.hotimg.com/IMG_0791.jpeg',
      description:
        "I obtained Dean's List for 2 consecutive years (2021/22) and CSE's Department Silver Award for 2022-23.",
      links: [
        {
          url: 'https://drive.google.com/file/d/1qAkoIeb16vgeD2lF08Unu7bm5JCzsEdR/view?usp=sharing',
          icon: <Certificate />,
          text: "Dean's List"
        },
        {
          url: 'https://www.cse.cuhk.edu.hk/academics/scholarships/',
          icon: <Medal />,
          text: 'Award'
        }
      ]
    }
  ]

  const publications = [
    {
      title: (
        <div className='text-lg font-normal'>
          <ul className='list-disc list-outside ms-8'>
            <li>
              <span className='underline'>
                Efficient and Effective E-graph-based Logic Optimization
              </span>
              <br />
              <p className=''>
                Tianji Liu,{' '}
                <span className='font-semibold'>Nutdranai Jaruthikorn</span>,
                Shiju Lin, Bentian Jiang, Guannan Guo, Weihua Sheng, Evangeline
                F.Y. Young,
                <br />
                <span className='font-semibold'>TODAES, 2025</span>. [
                <Link href='https://dl.acm.org/doi/10.1145/3774883'>
                  Full text
                </Link>
                ].
              </p>
            </li>
          </ul>
        </div>
      )
    }
  ]

  const HobbyList = [
    {
      title: 'Trail Running',
      image: 'https://img.hotimg.com/6b07a974-b560-4a7e-8ec0-426de32dd59c.jpeg',
      fullImage:
        'https://img.hotimg.com/6b07a974-b560-4a7e-8ec0-426de32dd59c.jpeg',
      description:
        'Completed a 100km trail in 37 hours. The even is called oxfam trailwalking and was held on 24 Nov 2023.'
    },
    {
      title: 'Half Marathon',
      image: 'https://img.hotimg.com/IMG_3813.jpeg',
      fullImage: 'https://img.hotimg.com/IMG_3813.jpeg',
      description:
        'Completed half marathon in 1 hr 56 mins. Aim to do better in the future. The event was Standard Chartered Hong Kong Marathon 2024.'
    }
  ]

  const scholarshipList = [
    {
      title: 'ELITE Stream Scholarship',
      description:
        'CUHK\'s faculty of engineering scholarship to promote academic excellence for "ELITE" stream students. They give out about 16K-20K HKD per year.',
      links: [
        {
          url: 'https://www.erg.cuhk.edu.hk/erg/Elite',
          text: 'Link'
        }
      ]
    },
    {
      title: "CUHK's Faculty of Engineering Scholarship",
      description:
        "The faculty's scholarship given to academic excellency at entrance. I recevied 30K HKD per year.",
      links: [
        {
          url: 'https://www.erg.cuhk.edu.hk/erg/AdmissionScholarshipsForNewStudents',
          text: 'Link'
        }
      ]
    },

    {
      title: 'Belt and Road Scholarship',
      description:
        'Each year the government pick 10 students from each Belt and Road Countries (which include Thailand) and cover their tuition fee for 4 years. I was lucky to be one of them.',
      links: [
        {
          url: 'https://www.studyinhongkong.edu.hk/en/hong-kong-education/scholarships.php',
          text: 'Link'
        }
      ]
    }
  ]

  // const projectList = [
  //   // Title, Image, Description, Link
  //   {
  //     title: 'Deduplication Engine',
  //     image: '',
  //     description:
  //       "Deduplication Engine based on the content's Rabin Fingerprint",
  //     links: [
  //       {
  //         url: 'https://github.com/pond-nj/RabinFP-Dedup',
  //         icon: <GithubLogo weight='fill' />,
  //         text: 'Github'
  //       }
  //     ],
  //     tags: {
  //       type: ['System'],
  //       language: ['Java']
  //     }
  //   },
  //   {
  //     title: 'Mobile Queue App',
  //     image: '',
  //     subtitle:
  //       'Realtime Mobile Queue App to connect service providers and customers. Done as a part of a hackathon competition.',
  //     description:
  //       'As a team of six, we proposed an idea that connect customers and service providers. We see this as a solution to onsite queing and customer management. I specialized in mobile app development and shop side webapp.',
  //     links: [
  //       {
  //         url: 'https://drive.google.com/file/d/1onWqQY2bcv9LW94Fl4W4oD_YmLhtYRj7/view?usp=drive_link',
  //         icon: <ProjectorScreenChart weight='fill' />,
  //         text: 'Proposal'
  //       },
  //       {
  //         url: 'https://github.com/Maneemala2013/QueueApp',
  //         icon: <GithubLogo weight='fill' />,
  //         text: 'Mobile App'
  //       },
  //       {
  //         url: 'https://github.com/Maneemala2013/QueueApp_Backend',
  //         icon: <GithubLogo weight='fill' />,
  //         text: 'Backend'
  //       },
  //       {
  //         url: 'https://github.com/pond-nj/QueueApp_Backend_UI',
  //         icon: <GithubLogo weight='fill' />,
  //         text: 'Shop side Webapp'
  //       }
  //     ],
  //     tags: {
  //       type: ['Mobile', 'Web'],
  //       language: ['React', 'React-Native']
  //     }
  //   },
  //   {
  //     title: 'More Soon!',
  //     image: '',
  //     description: 'There will be more updates here!'
  //   }
  // ]

  const jobList = [
    {
      title: 'R & D Engineer at Huawei Hong Kong Research Centre',
      descriptionE: (
        <span>
          I worked full time under{' '}
          <Link href='https://infamousmega.github.io/'>Bentian Jiang</Link> and{' '}
          <Link href='https://shijulin.github.io/'>Shiju Lin</Link> for 10
          months at Huawei Hong Kong Research Centre on datapath optimization.
        </span>
      ),
      tags: {
        industries: ['pattern optimization', 'logic synthesis', 'datapath'],
        type: ['research', 'fulltime']
      },
      date: 'Summer 2024 - April 2025'
    },
    {
      title: 'Research Intern at Huawei Hong Kong Research Centre',
      descriptionE: (
        <span>
          I interned under{' '}
          <Link href='https://infamousmega.github.io/'>Bentian Jiang</Link> at
          Huawei Research Centre, working on fanout-bounded buffer insertion for
          adder modules.
        </span>
      ),
      links: [
        {
          url: 'https://doi.org/10.23919/DATE56975.2023.10137314',
          icon: <Scroll weight='fill' />,
          text: <span>Related paper</span>
        }
      ],
      tags: {
        industries: ['adder', 'logic synthesis'],
        type: ['research', 'intern']
      },
      date: 'Summer 2023'
    },
    // {
    //   title: 'Research Assistant on Learned Indexing for String',
    //   image: 'https://i.ibb.co/gSwB6TB/IMG-6392.jpg',
    //   fullImage: 'https://img.hotimg.com/IMG_6392.jpeg',
    //   description:
    //     'Teamed up with an MPhil and an undergraduate student at CUHK to accelerate state-of-the-art string indexing algorithm. Analysed strings characteristic and affinity to learned indices.',
    //   links: [
    //     {
    //       url: 'https://appsrv.cse.cuhk.edu.hk/~ericlo/',
    //       icon: <Users weight='fill' />,
    //       text: 'Our Supervisor'
    //     }
    //   ],
    //   tags: {
    //     industries: ['Database'],
    //     type: ['Research'],
    //     language: ['C++']
    //   }
    // },
    {
      title: 'Full Stack Developer at NFT Investment & Venture Limited',
      description:
        'I developed NFT trading platform and NFT Art Design Tool. Tech stack involved were Laravel-PHP and React. I gained knowledge on IPFS and Payment Gateways.',
      links: [
        {
          url: 'https://marketplace.naffiti.com/',
          icon: <ShoppingCart weight='fill' />,
          text: 'NFT Marketplace'
        }
      ],
      tags: {
        industries: ['NFT'],
        type: ['web-dev', 'intern'],
        language: ['PHP', 'React']
      },
      date: 'Summer 2022'
    }
  ]

  const educationList = [
    {
      title: 'The Chinese University of Hong Kong',
      subtitle: 'Ph.D. in Computer Science',
      date: '2025 - on going'
    },
    {
      title: 'The Chinese University of Hong Kong',
      subtitle: 'B.Sc. in Computer Science',
      date: '2020 - 2024'
    },
    {
      title: 'Mahidol Wittayanusorn School',
      subtitle: 'High School',
      date: '2017 - 2020'
    }
  ]

  const GraduateCourseList = [
    {
      title: (
        <div className='text-lg font-normal'>
          <ul className='list-disc list-inside '>
            <li>
              CSCI5690: Automated Reasoning about Software Systems (ongoing)
            </li>
            <li>ENGG5501: Foundations of Optimization (ongoing)</li>
            <li>CSCI5010: Practical Computational Geometry Algorithms (B+)</li>
            <li>CSCI5550: Advanced File and Storage Systems (B)</li>
            <li>ENGG5301: Information Theory (A-)</li>
          </ul>
        </div>
      )
    }
  ]

  const TAServices = [
    {
      title: (
        <div className='text-lg font-normal'>
          <ul className='list-disc list-inside '>
            <li>
              CSCI5690: Automated Reasoning about Software Systems, Fall 2025
            </li>
          </ul>
        </div>
      )
    }
  ]

  return (
    <Center>
      <div className='flex flex-col space-y-4'>
        <Header />
        {/* <AboutMe /> */}

        <div className='flex flex-col space-y-4'>
          <ShowList
            title={'Publications'}
            list={publications}
            show
            allowToggle={false}
            noUnderline
          />

          <ShowList
            title={'Experiences'}
            list={jobList}
            colorClass={'bg-slate-100 border border-slate-500'}
            show
            allowToggle={false}
            gridClassName='grid gap-4'
          />

          <ShowList
            title={'Educations'}
            list={educationList}
            show
            allowToggle={false}
          />

          <ShowList
            title='TA Serivces'
            list={TAServices}
            show
            allowToggle={false}
          />

          <ShowList
            title='Graduate Courses'
            list={GraduateCourseList}
            show
            allowToggle={false}
          />

          {/* <ShowList
            title={"I code these!"}
            list={projectList}
            colorClass={"bg-slate-100 border border-slate-500"}
            show
          /> */}
          {/* <ShowList
            title={"I'm proud of this!"}
            list={acheivementList}
            colorClass={'bg-slate-100 border border-slate-500'}
          /> */}

          {/* <ShowList
            title={'Scholarship'}
            list={scholarshipList}
            description={
              'Here list the scholarship I have received in my past academic journey. I am grateful for all of them. If you are still studying and would like to know more about tips and tricks on any of them, please feel free to drop me an email.'
            }
            gridClassName='grid grid-cols-3 gap-1'
            colorClass={'bg-slate-100 border border-slate-500'}
          />

          <ShowList
            title={'Hobby'}
            list={HobbyList}
            gridClassName='grid grid-cols-3 gap-1'
            colorClass={'bg-slate-100 border border-slate-500'}
          /> */}
        </div>
      </div>
    </Center>
  )
}
