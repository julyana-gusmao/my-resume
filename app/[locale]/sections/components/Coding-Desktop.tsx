import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import projectsData from '../../projects/projects.json';

type Project = {
    id: string;
    translations: {
        en: {
            title: string;
            description: string;
            'sub-description'?: string;
        };
        pt: {
            title: string;
            description: string;
            'sub-description'?: string;
        };
    };
    url?: string;
    src: string;
    image: string;
    type: 'personal' | 'professional';
    tags?: string;
};

function CodingDesktop() {
    const t = useTranslations('coding');
    const locale: 'en' | 'pt' = useLocale() as 'en' | 'pt';
    const [filter, setFilter] = useState<'personal' | 'professional' | 'all'>('all');
    const [isModalOpen, setModalOpen] = useState(false);
    const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

    const handleFilterChange = (type: 'personal' | 'professional' | 'all') => {
        setFilter(type);
    };

    const handleModalOpen = (id: string) => {
        setSelectedProjectId(id);
        setModalOpen(true);
    };

    const handleModalClose = () => {
        setModalOpen(false);
        setSelectedProjectId(null);
    };

    const warningMessage = locale === 'en'
        ? 'All website projects are <i>mobile responsive</i>. <br/><em>Click on a project to see a video preview.</em>'
        : 'Todos os projetos de website são <i>responsivos para mobile</i>. <br/><em>Clique em um dos projetos para ver uma prévia em vídeo.</em>';


    const projects: Project[] = projectsData as Project[];
    const filteredProjects = projects.filter((project) => filter === 'all' || project.type === filter);
    const selectedProject = projects.find((project) => project.id === selectedProjectId);

    return (
        <div id="DESKTOP" className="hidden lg:flex flex-col w-full px-60 py-16 gap-6 items-center">

            {/* /// MODAL /// */}

            {isModalOpen && selectedProject &&
                <div
                    className='fixed inset-0 z-50 bg-black/25 backdrop-blur-sm flex justify-center items-center text-black'
                    onClick={handleModalClose}
                >
                    <div className='w-[60vw] relative' onClick={(e) => e.stopPropagation()}>
                        <div className='bg-white rounded-2xl h-full flex flex-col items-start justify-start gap-5 p-5'>
                            <div className='w-full h-full'>
                                <video className='w-full max-h-[65vh] object-cover rounded-2xl' controls autoPlay>
                                    <source src={selectedProject.src} type='video/mp4' />
                                    Seu navegador não suporta a tag de vídeo.
                                </video>
                            </div>
                            <div className="flex flex-col items-start w-[45vw] gap-2 px-3">
                                <h4 className="font-bold">{selectedProject.translations[locale].title}</h4>
                                <p
                                    className="text-base font-sans"
                                    dangerouslySetInnerHTML={{ __html: selectedProject.translations[locale]['sub-description'] || '' }}
                                />
                                {selectedProject.url && (
                                    <p className="text-xs hover:text-pink-600 hover:scale-110 transition-transform duration-500 cursor-pointer">Ver prévia: {selectedProject.url}</p>
                                )}
                            </div>
                            <button onClick={handleModalClose} className='bg-red-500 px-4 py-1 rounded-md text-white absolute bottom-5 right-5'>Fechar</button>
                        </div>
                    </div>
                </div>
            }


            <div id="TITLE" className="flex flex-col gap-1 items-center">
                <h3 className="font-sans text-[30px]">&lt;coding&gt;</h3>
                <h4 className="text-details ">{t('featured')}</h4>
                <p
                    className='text-gray-400 w-[30vw] font-sans leading-6 text-sm text-center mt-2'
                    dangerouslySetInnerHTML={{ __html: warningMessage }}
                />
            </div>

            <div id="FILTROS" className="flex gap-2 w-[35vw] ml-3 mb-2 justify-center">
                <div
                    id="TODOS"
                    onClick={() => handleFilterChange("all")}
                    className="px-1 inline-block py-1 rounded-full bg-gradient-to-br from-linear-l to-linear-r hover:bg-slate-800 mt-3 lg:text-lg cursor-pointer transition-all duration-100 ease-in transform hover:scale-105"
                >
                    <span id="TODOS" className={`block ${filter === "all" ? "bg-transparent" : "bg-main-color"} hover:bg-slate-800 rounded-full px-6 py-2 cursor-pointer transition-all duration-100 ease-in transform hover:scale-100`}>
                        <p>{t('all')}</p>
                    </span>
                </div>
                <div
                    id="PERSONAL"
                    onClick={() => handleFilterChange("personal")}
                    className="px-1 inline-block py-1 rounded-full bg-gradient-to-br from-linear-l to-linear-r hover:bg-slate-800 mt-3 lg:text-lg cursor-pointer transition-all duration-100 ease-in transform hover:scale-105"
                >
                    <span id="PERSONAL" className={`block ${filter === "personal" ? "bg-transparent" : "bg-main-color"} hover:bg-slate-800 rounded-full px-6 py-2 cursor-pointer transition-all duration-100 ease-in transform hover:scale-100`}>
                        <p>{t('personal')}</p>
                    </span>
                </div>
                <div
                    id="PROFESSIONAL"
                    onClick={() => handleFilterChange("professional")}
                    className="px-1 inline-block py-1 rounded-full bg-gradient-to-br from-linear-l to-linear-r hover:bg-slate-800 mt-3 lg:text-lg cursor-pointer transition-all duration-100 ease-in transform hover:scale-105"
                >
                    <span id="PROFESSIONAL" className={`block ${filter === "professional" ? "bg-transparent" : "bg-main-color"} hover:bg-slate-800 rounded-full px-6 py-2 cursor-pointer transition-all duration-100 ease-in transform hover:scale-100`}>
                        <p>{t('professional')}</p>
                    </span>
                </div>
            </div>

            <div id="PROJETOS" className="flex flex-wrap gap-5 w-[80vw] justify-center">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        id="PROJETO"
                        className="flex flex-col shadow-box items-center justify-start text-left w-[30%] p-5 rounded-xl border-linear-l border-2 border-opacity-50 cursor-pointer hover:scale-105 hover:border-2 hover:border-linear-r transition-transform duration-300 z-10"
                        onClick={() => handleModalOpen(project.id)}
                    >
                        <Image
                            src={project.image}
                            alt={`Project Image ${project.translations[locale as 'en' | 'pt'].title}`}
                            width={300}
                            height={200}
                        />
                        <div id="TEXT" className="flex flex-col gap-2.5 p-3 mt-2">
                            <h5 className="font-semibold">{project.translations[locale as 'en' | 'pt'].title}</h5>
                            <p
                                className="text-gray-400 text-sm font-sans"
                                dangerouslySetInnerHTML={{ __html: project.translations[locale as 'en' | 'pt'].description }}
                            />
                            <p className="text-xs text-gray-500">{project.tags}</p>
                            <p className="text-xs">#{project.type}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default CodingDesktop;
