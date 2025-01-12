import { FaJs, FaReact, FaCss3Alt, FaHtml5, FaWordpress, FaPencilRuler, FaServer } from 'react-icons/fa';
import { SiNextdotjs } from "react-icons/si"

const SkillsSection = () => {
  const skills = [
    {
      name: "JavaScript",
      level: 90,
      icon: <FaJs size={30} />,
      category: "フロントエンド"
    },
    {
      name: "React",
      level: 85,
      icon: <FaReact size={30} />,
      category: "フロントエンド"
    },
    {
      name: "Next.js",
      level: 85,
      icon: <SiNextdotjs size={30} />,
      category: "フロントエンド"
    },
    {
      name: "CSS",
      level: 75,
      icon: <FaCss3Alt size={30} />,
      category: "フロントエンド"
    },
    {
      name: "HTML",
      level: 95,
      icon: <FaHtml5 size={30} />,
      category: "フロントエンド"
    },
    {
      name: "UI/UX",
      level: 70,
      icon: <FaPencilRuler size={30} />,
      category: "デザイン"
    },
    {
      name: "WordPress",
      level: 80,
      icon: <FaWordpress size={30} />,
      category: "バックエンド"
    },
    {
      name: "Node.js",
      level: 60,
      icon: <FaServer size={30} />,
      category: "バックエンド"
    },
  ];

  const categories = [...new Set(skills.map((skill) => skill.category))];

  return (
    <section className="py-16 bg-white"> {/* ここを修正 */}
      <div className="container max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">スキル</h2>
          <div className="flex flex-col md:flex-row gap-8">
              {categories.map((category) => (
                 <div key={category} className="md:w-1/2">
                   <h3 className="text-2xl font-semibold mb-4">{category}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {skills
                        .filter((skill) => skill.category === category)
                            .map((skill, index) => (
                                <div
                                  key={index}
                                  className="bg-gray-50 p-6 rounded shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center" // ここを修正
                                >
                                  <div className="mb-4">{skill.icon}</div>
                                   <h3 className="text-xl font-medium mb-2">{skill.name}</h3>
                                   <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2 mb-4">
                                        <div
                                            className="bg-blue-500 h-2.5 rounded-full"
                                           style={{ width: `${skill.level}%` }}
                                       />
                                    </div>
                                    <p className="text-gray-600 text-sm text-center">{skill.level}%</p>
                                </div>
                            ))}
                        </div>
                    </div>
             ))}
         </div>
       </div>
    </section>
  );
};

export default SkillsSection;