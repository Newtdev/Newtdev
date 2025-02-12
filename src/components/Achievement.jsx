import React from 'react'

const achievements = [
    {
        id: 1,
        category: "Technical Leadership",
        title: "Mobile Payment Ecosystem Architecture",
        icon: "📱",
        items: [
            "Architected mobile payment solutions with React Native & React Native Elements, Kotlin",
            "Implemented real-time communication using Socket.IO",
            "Developed multi-factor authentication system (biometric, PIN, pattern)",
            "Integrated NFC payments and custom native functionalities",
            "Optimized cross-platform performance"
        ],
        metrics: [
            { label: "Performance Gain", value: "62% ↑" },
            // { label: "User Rating", value: "4.9/5" }
        ]
    },
    {
        id: 2,
        category: "Engineering Management",
        title: "Cross-Functional Team Leadership",
        icon: "👥",
        items: [
            "Led 10+ member engineering teams across Web2/Web3 projects",
            "Designed technical roadmaps for different Projects",
            "Implemented CI/CD pipelines reducing deployment time by 40%",
            "Mentored junior developers in modern frontend and mobile technologies",
            "Conducted architecture reviews for a 5 projects"
        ],
        metrics: [
            { label: "Projects Delivered", value: "5+" },
            { label: "Code Quality", value: "98%" }
        ]
    },
    {
        id: 3,
        category: "Web Application Development",
        title: "Meeting Management System",
        icon: "💻",
        items: [
            "Solely developed and maintained Krext's web app using React/Redux/MaterialUI",
            "Created interactive calendar with real-time messaging capabilities",
            "Optimized page load time by 45% via code splitting and caching",
            "Built analytics dashboard with dynamic data visualizations",
            "Established component library reducing dev time by 30%",

        ],
        metrics: [
            { label: "Load Time Reduction", value: "45% ↓" },
            { label: "Components Created", value: "50+" }
        ]
    }
];

export default function Achievement() {
    return (
        <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-[#CCD6F6] mb-12">
                Key Achievements
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {achievements.map((achievement, index) => (
                    <div
                        key={achievement.id}
                        className="bg-[#112240] rounded-lg p-6 shadow-xl hover:-translate-y-2 transition-transform duration-300 group"
                    >
                        <div className="flex items-center mb-6">
                            <span className="text-3xl mr-4 text-secondary">
                                {achievement.icon}
                            </span>
                            <div>
                                <span className="text-sm text-secondary font-mono">
                                    {achievement.category}
                                </span>
                                <h3 className="text-xl text-[#CCD6F6] font-semibold">
                                    {achievement.title}
                                </h3>
                            </div>
                        </div>

                        <ul className="space-y-3 mb-6">
                            {achievement.items.map((item, i) => (
                                <li
                                    key={i}
                                    className="flex items-start text-[#8892B0] text-sm"
                                >
                                    <span className="text-secondary mr-2">▹</span>
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="flex gap-4 border-t border-[#233554] pt-4">
                            {achievement.metrics.map((metric, i) => (
                                <div key={i} className="text-center">
                                    <div className="text-2xl font-bold text-secondary">
                                        {metric.value}
                                    </div>
                                    <div className="text-xs text-[#8892B0] uppercase tracking-wide">
                                        {metric.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
