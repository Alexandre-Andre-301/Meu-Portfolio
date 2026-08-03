export interface Skill {

    name: string;

    icon: string;

    color: string;

    description: string[];

}


export const skills: Skill[] = [

    {
        name: "React",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
        color: "#61dafb",
        description: [
            "Componentização de interfaces",
            "Hooks e gerenciamento de estado",
            "Criação de aplicações modernas",
            "Integração com APIs REST"
        ]
    },


    {
        name: "TypeScript",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
        color: "#3178c6",
        description: [
            "Tipagem estável",
            "Código escalável",
            "Melhor manutenção de projetos"
        ]
    },


    {
        name: "Python",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        color: "#3776ab",
        description: [
            "Automação de tarefas",
            "Desenvolvimento Backend",
            "Flask e FastAPI",
            "Scripts de segurança"
        ]
    },


    {
        name: "FastAPI",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg",
        color: "#009688",
        description: [
            "Construção de APIs REST",
            "Validação com Pydantic",
            "Arquitetura Backend moderna"
        ]
    },
    {
        name :"Javascript",
        color: "#F7DF1E",
        icon :"https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        description:[
        "Manipulação do DOM e interfaces interativas",
        "Programação assíncrona (Promises, Fetch API)",
        "Desenvolvimento de aplicações Web modernas"
    ]
    },


    {
        name: "Database",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
        color: "#336791",
        description: [
            "SQL",
            "Modelagem de dados",
            "SQLite e PostgreSQL"
        ]
    },


   {
        name: "Cybersecurity",
        icon: "https://banner2.cleanpng.com/lnd/20240613/hhe/aztvxe5uc.webp",
        color: "#ef4444",
        description: [
            "OWASP Top 10",
            "Segurança Web",
            "Linux",
            "Metodologias de Pentest",
            "Kali Linux"
    ]
    },
    {
        name: "Linux",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg",
        color: "#ffffff",
        description:[
        "Administração de ambientes Linux",
        "Uso avançado do terminal e shell scripting",
        "Ferramentas de segurança e análise de sistemas"
    ]
    }

];