export type Project = {
    name: string,
    imgs: string[],
    liveLink: string;
}

export const projects: Project[] = [
    {name: "Frisbee-Frans", imgs: ["/friba.jpg", "/friba-2.jpg", "/friba-3.jpg"], liveLink: "jausers"}, 
    {name: "Elevator-Sim", imgs: ["/elevator.gif"], liveLink: "jausers"},
    {name: "Library", imgs: ["/lib-sys.gif"], liveLink: "jausers"},
    {name: "Space Shooter", imgs: ["/SpaceAction.gif"], liveLink: "jausers"},
    {name: "Tank Shooter", imgs: ["/cannon.gif"], liveLink: "jausers"},
    {name: "Img to ASCII converter", imgs: ["/demo.png"], liveLink: "jausers"},
];