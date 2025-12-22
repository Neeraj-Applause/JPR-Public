// Static news data - mirrors the database structure
// Import local images
import aaaamConf1 from '../assets/dynamic_images/news/aaam-conference-1.jpg';
import aaaamConf2 from '../assets/dynamic_images/news/aaam-conference-2.jpg';
import srinagarTraining from '../assets/dynamic_images/news/srinagar-training.png';

export const newsData = [
  {
    id: 1,
    title: "69th AAAM Conference – Indianapolis, USA",
    summary: "",
    content: "JPRI represented RASSI at the AAAM Conference held at Indianapolis, USA from 7 – 10 Oct. Ms Jeya Padmanaban, President & Founder and Pradeep Jaswani, COO, JPRI attended. LMIC panel at the conference was represented by JPRI/Pradeep and a presentation was made highlighting the work being done under RASSI initiative. Associated methodologies related to CI, recon and injury analysis and use of RASSI data by members and policymakers {BNCAP} were extensively presented and discussed. Specific focus was on need for advocacy in LMIC groups to reinforce sharing & relevance of injury data for research purposes. Possibility of a different flavour of AIS specifically aimed at LMIC group was also discussed in the sidelines.",
    category: "",
    event_date: "2025-10-07",
    image_url: null,
    created_at: "2025-10-15T10:00:00Z",
    updated_at: "2025-10-15T10:00:00Z",
    images: [
      aaaamConf1,
      aaaamConf2
    ]
  },
  {
    id: 2,
    title: "Training on Scientific Crash Investigation at Srinagar",
    summary: "",
    content: "Mr. Sanjay Baladaniya, Senior Automotive Injury Analyst at JP Research India Pvt. Ltd. (JPRI), conducted a training session on \"Scientific Crash Investigations\" in Srinagar on 26th September 2025. The session was organized by the Asian Institute of Transport Development (AITD), New Delhi. The training emphasized the significance of accurate crash data collection, understanding the methodology of on-scene investigations, vehicle speed estimation, and classification of crash causation factors and resulting injuries using the Haddon Matrix framework. This session formed a part of a three-day specialized course on \"Role of MVA and CMVR in road safety & enforcement\" designed for police and transport officers. A total of 25 participants from the Police and Transport Departments of Jammu attended the session.",
    category: "",
    event_date: "2025-09-26",
    image_url: null,
    created_at: "2025-09-30T10:00:00Z",
    updated_at: "2025-09-30T10:00:00Z",
    images: [
      srinagarTraining
    ]
  }
];

export default newsData;