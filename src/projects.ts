export type Project = {
    name: string,
    imgs: string[],
    liveLink: string | null;
    github: string;
    languages: Language[];
    technologies: Technologies[];
    description: string;
}

export type Language = "C#" | "typeScript";
export type Technologies = "React" | "Redux" | "Material UI" | "Axios" | "React-Router" | ".NET" | "PostgreSQL" | "Powershell" | "Entity Framework" | "SCSS"

export const projects: Project[] = [
    {
        name: "Frisbee-Frans", 
        imgs: ["/friba.jpg", "/friba-2.jpg", "/friba-3.jpg"], 
        liveLink: null, 
        github: "https://github.com/JeremiasRy/frisbee-frans", 
        languages: ["C#", "typeScript"], 
        technologies: ["React", "Redux", "Material UI", "Axios", "React-Router", ".NET", "PostgreSQL", "Powershell" , "Entity Framework"], 
        description: "A disc-golf round tracking app with some social media aspects. You can keep track of your scores from all the courses in finland. Web scraping for seeding the database. Efficient queries (more lazy, less eager). Lessons learnt: keep queries in order and only use eager loading on entitites where it's actually useful. Deployment is done using Azure VM for .NET application with self-signed certificates, frontend is just a static website"
    },
    {
        name: "Elevator-Sim", 
        imgs: ["/elevator.gif"], 
        liveLink: null, 
        github: "https://github.com/JeremiasRy/ElevatorSystem", 
        languages: ["C#"], 
        technologies: [".NET"], 
        description: "An elevator simulator? You set human to call an elevator (press the floor number after that arrow key for direction). When the human reaches the elevator shaft it fires the call, an elevator comes to pick him up and a panel opens (this is the panel inside the elevator) You choose where this human wants to go and then the elevator does what it does. The logic is nowhere near 100% but it gets the basics done, calls inside the elevator override calls from floors except if the calls are on the current path and to the right direction"
    },
    {
        name: "Library", 
        imgs: ["/lib-sys.gif"], 
        liveLink: null, 
        github: "https://github.com/JeremiasRy/Library-System", 
        languages: ["C#", "typeScript"], 
        technologies: [".NET", "Axios", "Entity Framework", "PostgreSQL", "React-Router", "React", "Redux", "SCSS"], 
        description: "This was a project for integrify. Good usage of generics and solid performance. It's much simpler than Frisbee-Frans but was a good learning experience at the time. Here I made all the styling from scratch which I will never do again."
    },
    {
        name: "Space Shooter", 
        imgs: ["/SpaceAction.gif"], 
        liveLink: null, 
        github: "https://github.com/JeremiasRy/2dKinda3dSpaceShooter", 
        languages: ["C#"], 
        technologies: [".NET"], 
        description: "My first ASCII game, no gravity so things are pretty easy to manage. Good practice on coding skills!"
    },
    {
        name: "Tank Shooter", 
        imgs: ["/cannon.gif"], 
        liveLink: null, 
        github: "https://github.com/JeremiasRy/CannonGameWithGravity", 
        languages: ["C#"], 
        technologies: [".NET"], 
        description: "Next project after the space shooter. Was trying to impement some physics and got decent results. Once again good practice on raw problem solving."
    },
    {
        name: "Img to ASCII converter", 
        imgs: ["/demo.png"], 
        liveLink: null, 
        github: "https://github.com/JeremiasRy/img-to-ascii-fullstack", 
        languages: ["C#", "typeScript"], 
        technologies: ["React", ".NET"], 
        description: "Full-stack is not a good platform for this kind of image conversion, but I wanted to practice sending images over TCP. Lessons learnt is that you don't want to let the requests hang when doing the conversion but should make it into a background task and send a SSE to frontend when it's done."
    },
];

export const codeLogos = {
    "C#": "https://seeklogo.com/images/C/c-sharp-c-logo-02F17714BA-seeklogo.com.png",
    "typeScript": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg"
}