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