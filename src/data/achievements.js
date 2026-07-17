import comptiaImg from "../assets/images/comptia-security-plus.png";
import uccWinnerImg from "../assets/images/ucc-winner-cyberstars.jpg";
import uccCertificateImg from "../assets/images/ucc-certificate.jpg";
import membershipImg from "../assets/images/membership-certificate.jpg";
import debateImg from "../assets/images/debate-certificate.jpg";

export const achievementsData = [
  {
    id: "security-plus",
    title: "CompTIA Security+",
    description:
      "Industry-recognized certification validating core cybersecurity skills in risk management, network security, and threat mitigation.",
    image: comptiaImg,
    link: "https://www.credly.com/badges/6c73664b-faf2-4a16-95c6-a59ab7113fd5/public_url",
    linkLabel: "Verify Credential",
  },
  {
    id: "ucc-winner-cyberstars",
    title: "UCC Winner — Third Cyber Stars Competition 2025",
    description:
      "National winner in the Uganda Communications Commission's Third Cyber Stars Competition 2025.",
    image: uccWinnerImg,
    link: null,
    linkLabel: null,
  },
  {
    id: "ucc-certificate",
    title: "Certificate of Recognition — National Final, Third Cyber Stars Competition 2025",
    description:
      "Awarded for outstanding performance at the national final of the Third Cyber Stars Competition 2025.",
    image: uccCertificateImg,
    link: null,
    linkLabel: null,
  },
  {
    id: "membership-certificate",
    title: "Membership Certificate",
    description: "Recognized membership certification.",
    image: membershipImg,
    link: null,
    linkLabel: null,
  },
  {
    id: "debate-certificate",
    title: "Debate Participation Certificate",
    description: "Certificate of participation in a debate competition.",
    image: debateImg,
    link: null,
    linkLabel: null,
  },
];
