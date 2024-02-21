import ShowList from "../Components/ShowList/ShowList";
import { GithubLogo, ProjectorScreenChart } from "@phosphor-icons/react";
import Header from "./Header";
import AboutMe from "./AboutMe";

export default function Home() {
  const acheivementList = [
    // Title, Image, Description, Link
    {
      title:
        "Gold Medal and 2nd Runner-up: Thailand Mathematics Olympiad (TMO)",
      image: "https://i.ibb.co/kSVN9pQ/unnamed.png",
      subtitle:
        "Acheiving a gold medal in National Math Olympiad is no joke. I still can't believe I did it. The year was 2019, 16th TMO.",
      links: [
        {
          url: "https://artofproblemsolving.com/community/c879638_2019_thailand_mathematical_olympiad",
          show: "Problem link",
        },
      ],
      description:
        "Around 100 High School students are selected across the nation to compete. And I came out ranking 3rd. At that time I could only solve Problem 1, 2, 3, 6, 7, 8 with full score each. My affinity was Geometry > Algebra > Number Theory > Combinatorics. After the MO, I coached the high school team for a few years and then left the MO field.",
    },
  ];

  const HobbyList = [
    {
      title: "Trail Running",
      description: "Coming soon!",
    },
  ];

  const scholarshipList = [
    {
      title: "ELITE Stream Scholarship",
      description:
        'CUHK\'s faculty of engineering scholarship to promote academic excellence for "ELITE" stream students. They give out about 16K-20K HKD per year.',
      links: [
        {
          url: "https://www.erg.cuhk.edu.hk/erg/Elite",
          show: "Link",
        },
      ],
    },
    {
      title: "CUHK's Faculty of Engineering Scholarship",
      description:
        "The faculty's scholarship given to academic excellency at entrance. I recevied 30K HKD per year.",
      links: [
        {
          url: "https://www.erg.cuhk.edu.hk/erg/AdmissionScholarshipsForNewStudents",
          show: "Link",
        },
      ],
    },

    {
      title: "Belt and Road Scholarship",
      description:
        "Each year the government pick 10 students from each Belt and Road Countries (which include Thailand) and cover their tuition fee for 4 years. I was lucky to be one of them.",
      links: [
        {
          url: "https://www.studyinhongkong.edu.hk/en/hong-kong-education/scholarships.php",
          show: "Link",
        },
      ],
    },
  ];

  const projectList = [
    // Title, Image, Description, Link
    {
      title: "Deduplication Engine",
      image: "",
      description:
        "Deduplication Engine based on the content's Rabin Fingerprint",
      links: [
        {
          url: "https://github.com/pond-nj/RabinFP-Dedup",
          show: (
            <div className="flex flex-row items-center">
              <GithubLogo weight="fill" />
              <span>Github</span>
            </div>
          ),
        },
      ],
      tags: {
        type: ["System"],
        language: ["Java"],
      },
    },
    {
      title: "Mobile Queue App",
      image: "",
      subtitle:
        "Realtime Mobile Queue App to connect service providers and customers. Done as a part of a hackathon competition.",
      description:
        "As a team of six, we proposed an idea that connect customers and service providers. We see this as a solution to onsite queing and customer management. I specialized in mobile app development and shop side webapp.",
      links: [
        {
          url: "https://drive.google.com/file/d/1onWqQY2bcv9LW94Fl4W4oD_YmLhtYRj7/view?usp=drive_link",
          show: (
            <div className="flex flex-row items-center">
              <ProjectorScreenChart weight="fill" />
              <span>Proposal</span>
            </div>
          ),
        },
        {
          url: "https://github.com/Maneemala2013/QueueApp",
          show: (
            <div className="flex flex-row items-center">
              <GithubLogo weight="fill" />
              <span>Mobile App</span>
            </div>
          ),
        },
        {
          url: "https://github.com/Maneemala2013/QueueApp_Backend",
          show: (
            <div className="flex flex-row items-center">
              <GithubLogo weight="fill" />
              <span>Backend</span>
            </div>
          ),
        },
        {
          url: "https://github.com/pond-nj/QueueApp_Backend_UI",
          show: (
            <div className="flex flex-row items-center">
              <GithubLogo weight="fill" />
              <span>Shop side Webapp</span>
            </div>
          ),
        },
      ],
      tags: {
        type: ["Mobile", "Web"],
        language: ["React", "React-Native"],
      },
    },
    {
      title: "More Soon!",
      image: "",
      description: "There will be more updates here!",
    },
  ];

  return (
    <div className="">
      <div className="w-screen h-screen flex flex-col p-4 space-y-4">
        <Header />
        {/* <AboutMe /> */}

        <div className="flex flex-col space-y-4">
          <ShowList
            title={"I'm proud of this!"}
            list={acheivementList}
            colorClass={"bg-teal-100"}
          />
          <ShowList
            title={"I code these!"}
            list={projectList}
            colorClass={"bg-violet-200"}
          />
          <ShowList
            title={"Hobby"}
            list={HobbyList}
            colorClass={"bg-blue-200"}
          />
          <ShowList
            title={"Scholarship"}
            list={scholarshipList}
            description={
              "Here list the scholarship I have received in my past academic journey. I am grateful for all of them. If you are still studying and would like to know more about tips and tricks on any of them, please feel free to drop me an email."
            }
            gridClassName="grid grid-cols-3 gap-1"
            colorClass={"bg-pink-100"}
          />
        </div>
      </div>
    </div>
  );
}
