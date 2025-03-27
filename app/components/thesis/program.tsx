import React, { useRef } from "react";
import classes from "../../styles/components/thesis/program.module.scss";
import { IoMdArrowDropright } from "react-icons/io";
import { useScroll, useTransform, motion } from "framer-motion";

const data = [
  {
    id: 1,
    title: "Onboarding a Sustainable Investment from Global Funds",
    image: "/investment.jpg",
    tagline: "Catalyzing Growth with Responsible Capital",
    challenge:
      "Despite the immense potential of marine-based industries, many coastal and ocean economies remain underfunded due to investment risks, fragmented supply chains, and lack of scalable models.",
    approach: [
      "Attract global investors interested in sustainable development, climate action, and blue economy initiatives.",
      "Develop structured investment mechanisms (e.g., blue bonds, impact investing, venture capital) to de-risk capital deployment.",
      "Build a consolidated and well-managed financial model to ensure long-term profitability and social impact.",
    ],
    outcome:
      "Secure funding that accelerates sustainable projects, bridging local economies with international capital markets.",
  },
  {
    id: 2,
    title: "Better Nutrient-Rich Food Resources for All",
    image: "/nutrient-food.jpg",
    tagline:
      "Ensuring Food Security through Sustainable Aquaculture & Marine-Based Nutrition",
    challenge:
      "With the global population exceeding 8 billion, the demand for nutrient-rich, high-protein, and sustainable food is increasing. Yet, overfishing, pollution, and inefficient supply chains hinder food security.",
    approach: [
      "Develop sustainable aquaculture models for seafood, seaweed, and alternative protein sources.",
      "Invest in marine-based food innovations, including algae-derived proteins and functional seafood ingredients.",
      "Strengthen traceability & fair-trade practices to create an ethical and transparent seafood market.",
    ],
    outcome:
      "Scale sustainable seafood production while protecting marine biodiversity and improving coastal livelihoods.",
  },
  {
    id: 3,
    title: "Better Destinations for Sustainable Tourism Escape",
    image: "/tourism.jpg",
    tagline:
      "Transforming Coastal Destinations into Eco-Friendly, Community-Driven Tourism Hubs",
    challenge:
      "Mass tourism has led to environmental degradation, cultural erosion, and economic disparity, leaving local communities with minimal benefits.",
    approach: [
      "Develop eco-resorts, marine adventure hubs, and cultural heritage tourism that prioritize low-carbon footprints and local ownership.",
      "Promote community-based tourism (CBT) where locals directly benefit from tourism revenue.",
      "Ensure biodiversity protection by integrating conservation practices in tourism destinations.",
    ],
    outcome:
      "Establish global-standard tourism escapes that generate long-term economic benefits for coastal communities while ensuring minimal environmental impact.",
  },
  {
    id: 4,
    title: "Better Carbon Capture & Storage for Global Carbon Footprint",
    image: "/carbon-footprint.jpg",
    tagline: "Scaling Blue Carbon Solutions through Seaweed & Seagrass Farming",
    challenge:
      "Traditional carbon offsetting methods rely on land-based reforestation, which competes with agriculture and urban development. Oceans provide a more efficient solution for carbon sequestration.",
    approach: [
      "Scale seaweed and seagrass farming for natural carbon capture and commercial sustainability.",
      "Develop blue carbon credit programs to offer companies a verified carbon offset alternative.",
      "Advocate for marine ecosystem conservation policies to integrate blue carbon into global carbon markets.",
    ],
    outcome:
      "Reduce global CO₂ emissions by leveraging ocean-based carbon sequestration, while providing coastal communities with profitable seaweed farming ventures.",
  },
  {
    id: 5,
    title: "Better Energy Resources from Solar-Powered Infrastructure",
    image: "/solar-panel.jpg",
    tagline:
      "Bringing Renewable Energy to Coastal Communities for Economic Resilience",
    challenge:
      "Many coastal villages and small islands still lack access to reliable electricity, forcing them to rely on expensive and environmentally harmful diesel generators.",
    approach: [
      "Deploy affordable solar panel systems for coastal households, businesses, and public infrastructure.",
      "Provide solar-powered cold storage solutions to support seafood processing and reduce post-harvest losses.",
      "Partner with renewable energy providers & microfinance institutions to introduce affordable payment models (Pay-As-You-Go, leasing, and cooperative financing).",
    ],
    outcome:
      "Empower coastal communities with clean energy, enabling economic growth, cost savings, and reduced carbon footprints.",
  },
  {
    id: 6,
    title: "A Better Place for Coastal Communities & Livelihoods",
    image: "/livelihoods.jpg",
    tagline: "Creating Inclusive Economic Opportunities & Long-Term Prosperity",
    challenge:
      "Coastal communities often face economic instability due to climate change, seasonal income, and lack of access to capital, leading to poverty and migration.",
    approach: [
      "Establish local entrepreneurship programs to strengthen coastal businesses.",
      "Build cooperative investment models where communities have ownership in sustainable projects.",
      "Provide training & capacity-building in fisheries, ecotourism, renewable energy, and marine farming.",
    ],
    outcome:
      "Self-sustaining coastal economies where people thrive instead of merely surviving, reducing urban migration and increasing economic stability.",
  },
];

const Program = () => {
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 80%", "start center"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0.1, 1]);

  return (
    <motion.div className={classes.main} ref={element} style={{ opacity }}>
      <div className={classes.wrapper}>
        {data.map((item) => (
          <div key={item.id} className={classes.card}>
            <img src={item.image} alt={item.title} className={classes.image} />
            <h2 className={classes.title}>{item.title}</h2>
            <p className={classes.tagline}>{item.tagline}</p>
            <div className={classes.section}>
              <h3>Challenge</h3>
              <p>{item.challenge}</p>
            </div>
            <div className={classes.section}>
              <h3>Approach</h3>
              <ul>
                {item.approach.map((step, index) => (
                  <li key={index} className={classes.step}>
                    <span>
                      <IoMdArrowDropright />
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            </div>
            <div className={classes.section}>
              <h3>Outcome</h3>
              <p>{item.outcome}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Program;
