import telemetyImage from "../assets/ipil-telemetry.png"
import quizImage from "../assets/how much u know me.png"
import schoolImage from "../assets/scholarflow-pro.png"
import contaImage from "../assets/conta Certa.jpg"
export interface Project {

    name:string;

    description:string;

    image ?:string;

    status:string;

    technologies:string[];

    github?:string;

    demo?:string;

}



export const projects:Project[] = [

    {

        name:"How Much You Know Me",

        description:
        "Quiz interativo com autenticação, perguntas dinâmicas e sistema de ranking.",

        image:quizImage,

        status:"Online",

        technologies:[
            "Python",
            "SQL",
            "JavaScript"
        ],

        github:
        "https://github.com/Alexandre-Andre-301/How-Much-You-Know-Me",

        demo:
        "https://how-much-you-know-me-1.onrender.com/login"

    },


    {

        name:"ScholarFlow Pro",

        description:
        "Sistema académico para gestão e visualização de informações escolares.",

        image:schoolImage,

        status:"Beta",

        technologies:[
            "Python",
            "SQLite",
            "Flask",
            "Javascript"
        ],

        github:
        "https://github.com/Alexandre-Andre-301/ScholarFlow-Pro"
        ,
        demo: "https://scholarflow-pro.onrender.com/login"

    },


    {

        name:"ContaCerta",

        description:
        "Sistema de gestão de inventário e vendas para estabelecimentos comerciais.",

        image: contaImage,

        status:"Beta",

        technologies:[
            "Python",
            "Flask",
            "Database",
            "Javascript"
        ],

        github:
        "https://github.com/Alexandre-Andre-301/ContaCerta"

    },


    {

        name:"Dashboard NOC",

        description:
        "Dashboard de monitorização de telemetria com foco em performance e UX técnica.",

        image:telemetyImage,

        status:"Online",

        technologies:[
            "React",
            "TypeScript",
            "Network"
        ],

        github:
        "https://github.com/Alexandre-Andre-301/IPIL-Telecom",

        demo:
        "https://ipil-telemetry.netlify.app/"

    },

    {

        name:"Right Way",

        description:
        "Plataforma educacional criada para auxiliar estudantes na descoberta de percursos académicos e profissionais.",

        image:"",

        status:"Em produção",

        technologies:[
            "FastAPI",
            "SQL",
            "TypeScript",
            "React"
        ],

        demo:
        "https://right-way-frontend.vercel.app/"

    } 

];