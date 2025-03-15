import React from "react";
import "./Blogs.css";

const blogs = [
  {
    id: 1,
    title: "Understanding Cyber Insurance: A Complete Guide",
    author: "John Doe",
    date: "March 10, 2025",
    summary:
      "Learn what cyber insurance is, why businesses need it, and how to choose the right policy to protect against cyber threats.",
    image: "https://www.paisabazaar.com/wp-content/uploads/2019/01/4-1.jpg",
  },
  {
    id: 2,
    title: "Top 5 Cyber Threats Businesses Face in 2025",
    author: "Jane Smith",
    date: "March 5, 2025",
    summary:
      "Explore the most common cyber threats that businesses are facing this year and how cyber insurance helps mitigate risks.",
    image:
      "https://cdn1.expresscomputer.in/wp-content/uploads/2021/10/04141411/EC_Cybersecurity_technology_002_750.jpg",
  },
  {
    id: 3,
    title: "How to Reduce Cyber Insurance Premiums",
    author: "Michael Brown",
    date: "February 28, 2025",
    summary:
      "Tips and strategies for businesses to lower their cyber insurance costs while enhancing their security posture.",
    image:
      "https://media.licdn.com/dms/image/v2/D4E12AQF4_R7iYL9oLw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1681382023832?e=2147483647&v=beta&t=MNG1_DjKJrWEtlMzpbbEngcp1MpX3lTAJtzMTaK0QBo",
  },
  {
    id: 4,
    title: "Cyber Insurance for Small Businesses: Is It Worth It?",
    author: "Emily Clark",
    date: "February 20, 2025",
    summary:
      "Discover whether cyber insurance is a must-have for small businesses and what factors influence its necessity.",
    image:
      "https://www.bitsight.com/sites/default/files/styles/16_9_xlarge/public/migration/images/shutterstock_1629139633_1.jpg?itok=8iqyhbSG",
  },
  {
    id: 5,
    title: "The Role of Cyber Insurance in Ransomware Protection",
    author: "David Lee",
    date: "February 10, 2025",
    summary:
      "Understand how cyber insurance policies cover ransomware attacks and what businesses should consider when selecting a policy.",
    image:
      "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200506173748/Cyber-Insurance.jpg",
  },
  {
    id: 6,
    title: "What Does Cyber Insurance Actually Cover?",
    author: "Sarah Miller",
    date: "February 5, 2025",
    summary:
      "A breakdown of what is included in a cyber insurance policy, from data breaches to business interruption losses.",
    image:
      "https://images.squarespace-cdn.com/content/v1/607f1cfc97fb986e9568b83c/dcc5e120-8ccc-433e-adec-080ce8ced9ad/cyber+insurance+2.jpg",
  },
  {
    id: 7,
    title: "How Cyber Insurance Helps After a Data Breach",
    author: "Robert Wilson",
    date: "January 30, 2025",
    summary:
      "Learn how cyber insurance policies assist businesses in recovering from a data breach and managing post-incident costs.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFA5aEXOnXgEane2s7okMriQRqfN4YU8ttYikVPr3_KO1ahg8mUtWoiLmfhfzM2f7LFlk&usqp=CAU",
  },
  {
    id: 8,
    title: "Emerging Trends in Cyber Insurance for 2025",
    author: "Lisa Anderson",
    date: "January 25, 2025",
    summary:
      "A look at the evolving landscape of cyber insurance, including new coverage options and industry developments.",
    image:
      "https://eu-images.contentstack.com/v3/assets/blt6d90778a997de1cd/blt3ef55369377dbb5f/659f10ddaff3fe040a5766c6/photon-photo-cyberinsurance-shutterstock.jpg",
  },
  {
    id: 9,
    title: "Cyber Insurance vs. Cybersecurity: What’s the Difference?",
    author: "Mark Thompson",
    date: "January 15, 2025",
    summary:
      "Understand the key differences between having a cyber insurance policy and implementing robust cybersecurity measures.",
    image:
      "https://img.helpnetsecurity.com/wp-content/uploads/2023/08/24130337/cyber_insurance-1.jpg",
  },
  {
    id: 10,
    title: "How to Choose the Right Cyber Insurance Provider",
    author: "Amanda White",
    date: "January 10, 2025",
    summary:
      "Key factors to consider when selecting a cyber insurance provider to ensure your business gets the best coverage.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1FxLHayIQl4zV3yYLuri1ahh_87V_VIjiMugCqGEVXJ8r5Bk5uxJQFKSP-WyW2WtFaT8&usqp=CAU",
  },
  {
    id: 11,
    title: "The Legal Side of Cyber Insurance: What You Need to Know",
    author: "Kevin Harris",
    date: "January 5, 2025",
    summary:
      "Explore the legal considerations and compliance requirements involved in cyber insurance policies.",
    image: "https://www.briskinfosec.com/assets/blogs/insurance.png",
  },
  {
    id: 12,
    title: "The Future of Cyber Insurance: Predictions for 2030",
    author: "Rachel Green",
    date: "January 1, 2025",
    summary:
      "Insights into how cyber insurance is expected to evolve over the next decade and what businesses should prepare for.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJB6DAzyeJ8vN1l9u6W_-QZA6FxH983qRi5SWqb6DdeUEsQ-_jvzlhubMhWffA6QWTz6I&usqp=CAU",
  },
];

const Blogs = () => {
  return (
    <div className="blogs-container">
      <h1>Cyber Insurance Blog</h1>
      <div className="blogs-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <h2>{blog.title}</h2>
              <p className="blog-meta">
                By {blog.author} | {blog.date}
              </p>
              <p>{blog.summary}</p>
              <button className="read-more">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
