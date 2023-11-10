export type Project = {
    name: string,
    imgs: string[],
    liveLink: string | null;
    github: string;
    languages: Languages[];
    technologies: Technologies[];
}

export type Languages = "C#" | "typeScript";
export type Technologies = "React" | "Redux" | "Material UI" | "Axios" | "React-Router" | ".NET" | "PostgreSQL"

export const projects: Project[] = [
    {
        name: "Frisbee-Frans", 
        imgs: ["/friba.jpg", "/friba-2.jpg", "/friba-3.jpg"], 
        liveLink: "jausers", 
        github: "", 
        languages: ["C#", "typeScript"], 
        technologies: ["React", "Redux", "Material UI", "Axios", "React-Router", ".NET", "PostgreSQL"]
    }, 
    {name: "Elevator-Sim", imgs: ["/elevator.gif"], liveLink: null, github: "", languages: ["C#", "typeScript"], technologies: []},
    {name: "Library", imgs: ["/lib-sys.gif"], liveLink: "jausers", github: "", languages: ["C#", "typeScript"], technologies: []},
    {name: "Space Shooter", imgs: ["/SpaceAction.gif"], liveLink: "jausers", github: "", languages: ["C#", "typeScript"], technologies: []},
    {name: "Tank Shooter", imgs: ["/cannon.gif"], liveLink: "jausers", github: "", languages: ["C#", "typeScript"], technologies: []},
    {name: "Img to ASCII converter", imgs: ["/demo.png"], liveLink: "jausers", github: "", languages: ["C#", "typeScript"], technologies: []},
];

export const codeLogos = {
    "C#": "https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png",
    "typeScript": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
}

export const technologyLogos = {
    "React": "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    "Redux": "https://cdn.worldvectorlogo.com/logos/redux.svg",
    "Material UI": "https://cdn.worldvectorlogo.com/logos/material-ui-1.svg",
    "Axios": "https://upload.wikimedia.org/wikipedia/commons/d/d1/Axios_%28computer_library%29_logo.svg",
    "React-Router": "/react-router-stacked-color-inverted.svg",
    ".NET": "https://raw.githubusercontent.com/dotnet/brand/main/logo/dotnet-logo.png",
    "PostgreSQL": "https://www.vectorlogo.zone/logos/postgresql/postgresql-vertical.svg",
}