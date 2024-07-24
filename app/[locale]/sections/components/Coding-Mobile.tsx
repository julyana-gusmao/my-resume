import { useTranslations } from "next-intl";
import { useState } from "react";
import projects from '../../projects/projects.json';

function CodingMobile() {
    const t = useTranslations('coding');
    const [filter, setFilter] = useState<'personal' | 'professional' | 'all'>("all");
    const handleFilterChange = (type: 'personal' | 'professional' | 'all') => {
        setFilter(type);
    };

    const filteredProjects = projects.filter(project => filter === "all" || project.type === filter);



    return (
        <div id="MOBILE" className="lg:hidden flex flex-col w-full p-8 gap-6 justify-center items-center">
            <div id="TITLE" className="flex flex-col gap-1 items-center">
                <h3 className="font-sans text-[30px]">&lt;coding&gt;</h3>
                <h4 className="text-details ">Featured projects</h4>
            </div>

            <div
                id="FILTROS"
                className="flex gap-10 w-[80vw] mb-2 justify-center items-center"
            >
                <div
                    onClick={() => handleFilterChange("all")}
                >
                    <span
                        id="TODOS"
                        className={`block ${filter === "all" ? "text-purple-300" : ""} rounded-full py-2 cursor-pointer transition-all duration-100 ease-in transform hover:scale-100`}
                    >
                        <p>{t('all')}</p>
                    </span>
                </div>
                <div
                    onClick={() => handleFilterChange("personal")}
                >
                    <span
                        id="PERSONAL"
                        className={`block ${filter === "personal" ? "text-purple-300" : ""} rounded-full py-2 cursor-pointer transition-all duration-100 ease-in transform hover:scale-100`}
                    >
                        <p>{t('personal')}</p>
                    </span>
                </div>
                <div
                    onClick={() => handleFilterChange("professional")}
                >
                    <span
                        id="PROFESSIONAL"
                        className={`block ${filter === "professional" ? "text-purple-300" : ""} rounded-full py-2 cursor-pointer transition-all duration-100 ease-in transform hover:scale-100`}
                    >
                        <p>{t('professional')}</p>
                    </span>
                </div>
            </div>

            <div id="PROJETOS" className="lg:hidden flex flex-col gap-5 h-full w-full items-center">
                {filteredProjects.map(project => (
                    <div key={project.id} className="personal flex flex-col justify-center text-left p-4 rounded-xl border-stroke border-2 border-opacity-50">
                        <div id="IMAGE" className="w-full h-[25vh] bg-white rounded-2xl">
                            {" "}
                        </div>
                        <div id="TEXT" className="flex flex-col gap-3 p-3">
                            <h5 className="font-bold">{project.title}</h5>
                            <p className="text-details ">
                                {project.description}
                            </p>
                            <p className="text-xs">#{project.type}</p>
                            <p className="text-xs text-details">{project.url}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CodingMobile
