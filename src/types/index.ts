export interface IProject {
    id: number;
    title: string;
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
