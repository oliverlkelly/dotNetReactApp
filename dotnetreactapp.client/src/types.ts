import {ReactElement} from "react";

export interface BadgeInterface {
    text: string;
}

export interface ButtonInterface {
    text?: string;
    type: string;
    href: string;
    filled?: boolean;
    icon?: ReactElement;
}

export interface AbilityScoreInterface {
    scoreName: string;
    scoreValue: number;
}
export interface CardInterface {
    name: string;
    cClass: string;
    experience: number;
    acumenScore: number;
    brawnScore: number;
    conductScore: number;
    btn?: ButtonInterface;
    indicator?: string; 
}