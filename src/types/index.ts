export interface IProject {
    id: number;
    title: string;
    description: string;
    src: string;
    githubUrl: string;
    liveUrl: string;
}

export interface ISocial {
    id: number;
    link: string;
    icon: JSX.Element;
}
export interface IContactInput {
    key: "name" | "email" | "subject";
    type: "text" | "email";
    placeholder: string;
}

export interface ISkill {
    name: string;
    img: string;
}

export interface ISkillData {
    title: string;
    items: ISkill[];
}
