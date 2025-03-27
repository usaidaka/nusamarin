import React from "react";
import BlogLists from "~/components/blogs/blogLists";
import Hero from "~/components/blogs/hero";

const data = [
  {
    id: 1,
    category: "blog",
    title:
      "Unlocking the Blue Economy: How Sustainable Investments Can Transform Coastal Communities",
    blog: "The ocean economy, often referred to as the blue economy, is a multi-trillion-dollar sector that remains largely untapped. From sustainable fisheries and aquaculture to marine tourism and renewable energy, the blue economy presents vast investment opportunities. Yet, despite its potential, many coastal communities remain underfunded and vulnerable to economic instability...",
    uploadedAt: "2019-04-17 11:58:00",
    images: [
      {
        image:
          "https://images.unsplash.com/photo-1533037311423-672aea163487?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        image:
          "https://images.unsplash.com/photo-1495765439174-cebc27820cdc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    id: 2,
    category: "blog",
    title:
      "From Ocean to Plate: The Future of Sustainable Seafood & Alternative Marine-Based Nutrition",
    blog: "The global population is expected to surpass 9 billion by 2050, increasing demand for high-protein, sustainable food sources. The ocean, covering 70% of the Earth’s surface, holds the key to solving the world’s food crisis. Sustainable seafood and marine-based proteins are the future of nutrition and food security.",
    uploadedAt: "2019-04-17 11:58:00",
    images: [
      {
        image:
          "https://images.unsplash.com/photo-1517988368819-88f4eacfef44?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        image:
          "https://images.unsplash.com/photo-1472550841219-a0a9495a940c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    id: 3,
    category: "blog",
    title:
      "The Power of Blue Carbon: How Seagrass and Seaweed Farming Can Offset Global Carbon Footprints",
    blog: "As the world seeks solutions to climate change, oceans play a critical role in carbon sequestration. Blue carbon ecosystems, such as seagrass meadows, mangroves, and seaweed farms, absorb carbon dioxide at rates far greater than land-based forests.",
    uploadedAt: "2019-04-17 11:58:00",
    images: [
      {
        image:
          "https://images.unsplash.com/photo-1511818992720-2a6744554c16?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        image:
          "https://images.unsplash.com/photo-1445264157214-a120770384d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    id: 4,
    category: "blog",
    title:
      "Empowering Coastal Communities Through Renewable Energy: The Role of Solar-Powered Infrastructure",
    blog: "Millions of people in coastal communities lack reliable electricity, limiting economic opportunities. Renewable energy, particularly solar-powered infrastructure, can bridge this energy gap.",
    uploadedAt: "2019-04-17 11:58:00",
    images: [
      {
        image:
          "https://images.unsplash.com/photo-1520008207934-b71f3bd0b9e8?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        image:
          "https://images.unsplash.com/photo-1471340620190-18627b679d58?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
  {
    id: 5,
    category: "blog",
    title:
      "Beyond Beaches: How Sustainable Tourism Can Create Long-Term Prosperity for Coastal Communities",
    blog: "Mass tourism often damages coastal ecosystems, leaving local communities with minimal benefits. Sustainable tourism ensures long-term economic growth while protecting the environmen",
    uploadedAt: "2019-04-17 11:58:00",
    images: [
      {
        image:
          "https://images.unsplash.com/uploads/1412231250505b65c703c/1fa14fb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
      {
        image:
          "https://images.unsplash.com/photo-1528118967669-a4444cb34bd0?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      },
    ],
  },
];

const Blogs = () => {
  return (
    <div>
      <Hero />
      <BlogLists data={data} />
    </div>
  );
};

export default Blogs;
