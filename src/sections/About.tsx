import { Lightbulb, Mountain, Users } from "lucide-react";

const highlights = [
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
        "Creating scalable solutions through innovative thinking",
    },
    {
        icon: Mountain,
        title: "Persistence",
        description:
        "Remaining on overcoming obstacles and challenges to deliver value"
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Establishing strong relations with teammates and clients"
    }
];

export const About = () =>{
    return(
    <section id="about" className="py-32 relative overflow-hidden">
        <div>
            <div>
                {/* Left Column */}
                <div>
                    <span>About Me</span>
                </div>
            </div>
        </div>
    </section>
    )
}