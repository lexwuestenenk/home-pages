import { ReactNode } from "react";
import {
    FaChevronRight, FaChevronLeft, FaDiscord, FaGithub, FaLink, FaLinkedin, FaTwitter, FaList,
} from 'react-icons/fa'

export type Icon = ReactNode

export const Icons = {
    ChevronRight: FaChevronRight,
    ChevronLeft: FaChevronLeft,
    List: FaList,
    Link: FaLink,
    Twitter: FaTwitter,
    LinkedIn: FaLinkedin,
    Github: FaGithub,
    Discord: FaDiscord
}