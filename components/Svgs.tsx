import { ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg"


type SvgProps = {
    active?: boolean;
    style?: object
}

export const HomeIcon = ({ active }: SvgProps) => {
    return (
        <Svg width="24" height="25" viewBox="0 0 24 25" fill="none" >
            <Path d="M9.02 3.34016L3.63 7.54016C2.73 8.24016 2 9.73016 2 10.8602V18.2702C2 20.5902 3.89 22.4902 6.21 22.4902H17.79C20.11 22.4902 22 20.5902 22 18.2802V11.0002C22 9.79016 21.19 8.24016 20.2 7.55016L14.02 3.22016C12.62 2.24016 10.37 2.29016 9.02 3.34016Z" stroke={active ? "white" : "black"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M12 18.4902V15.4902" stroke={active ? "white" : "black"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}

export const FilterIcon = () => {
    return (
        <Svg width="19" height="17" viewBox="0 0 19 17" fill="none" >
            <Path d="M10.8504 3.27295H17.67" stroke="#191A1D" strokeWidth="1.4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M0.999969 3.27295H3.27315" stroke="#191A1D" strokeWidth="1.4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M16.9122 13.2754H17.6699" stroke="#191A1D" strokeWidth="1.4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M0.999969 13.2754H9.33495" stroke="#191A1D" strokeWidth="1.4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M5.54631 5.54635C6.80175 5.54635 7.81949 4.52862 7.81949 3.27318C7.81949 2.01774 6.80175 1 5.54631 1C4.29087 1 3.27313 2.01774 3.27313 3.27318C3.27313 4.52862 4.29087 5.54635 5.54631 5.54635Z" stroke="#191A1D" strokeWidth="1.4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M11.6081 15.5483C12.8635 15.5483 13.8813 14.5306 13.8813 13.2751C13.8813 12.0197 12.8635 11.002 11.6081 11.002C10.3526 11.002 9.3349 12.0197 9.3349 13.2751C9.3349 14.5306 10.3526 15.5483 11.6081 15.5483Z" stroke="#191A1D" strokeWidth="1.4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}

export const SearchIcon = ({ style = {}, active }: SvgProps) => {
    return (
        <Svg style={style} width="20" height="21" viewBox="0 0 20 21" fill="none" >
            <Path d="M9.16667 16.3333C12.8486 16.3333 15.8333 13.3486 15.8333 9.66667C15.8333 5.98477 12.8486 3 9.16667 3C5.48477 3 2.5 5.98477 2.5 9.66667C2.5 13.3486 5.48477 16.3333 9.16667 16.3333Z" stroke="#A0A0A0" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M17.5 18L13.875 14.375" stroke="#A0A0A0" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}

export const ArrowBackIcon = ({ style }: SvgProps) => {
    return (
        <Svg style={style} width="20" height="20" viewBox="0 0 20 20" fill="none" >
            <Path d="M18.3334 10H1.66669" stroke="#191A1D" strokeWidth="1.4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M7.50002 15.8332L1.66669 9.99984L7.50002 4.1665" stroke="#191A1D" strokeWidth="1.4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}

export const CategoriesIcon = ({ active }: SvgProps) => {
    return (
        <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" >
            <Path d="M17.75 10.5H19.75C21.75 10.5 22.75 9.5 22.75 7.5V5.5C22.75 3.5 21.75 2.5 19.75 2.5H17.75C15.75 2.5 14.75 3.5 14.75 5.5V7.5C14.75 9.5 15.75 10.5 17.75 10.5Z" stroke={active ? "white" : "#292D32"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M5.75 22.5H7.75C9.75 22.5 10.75 21.5 10.75 19.5V17.5C10.75 15.5 9.75 14.5 7.75 14.5H5.75C3.75 14.5 2.75 15.5 2.75 17.5V19.5C2.75 21.5 3.75 22.5 5.75 22.5Z" stroke={active ? "white" : "#292D32"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M6.75 10.5C8.95914 10.5 10.75 8.70914 10.75 6.5C10.75 4.29086 8.95914 2.5 6.75 2.5C4.54086 2.5 2.75 4.29086 2.75 6.5C2.75 8.70914 4.54086 10.5 6.75 10.5Z" stroke={active ? "white" : "#292D32"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M18.75 22.5C20.9591 22.5 22.75 20.7091 22.75 18.5C22.75 16.2909 20.9591 14.5 18.75 14.5C16.5409 14.5 14.75 16.2909 14.75 18.5C14.75 20.7091 16.5409 22.5 18.75 22.5Z" stroke={active ? "white" : "#292D32"} strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}

export const ShoppingIcon = ({ active }: SvgProps) => {
    return (
        <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" >
            <Path d="M8.65002 7H15.85C19.25 7 19.59 8.59 19.82 10.53L20.72 18.03C21.01 20.49 20.25 22.5 16.75 22.5H7.76003C4.25003 22.5 3.49002 20.49 3.79002 18.03L4.69003 10.53C4.91003 8.59 5.25002 7 8.65002 7Z" stroke={active ? "white" : "#292D32"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M8.25 8.5V5C8.25 3.5 9.25 2.5 10.75 2.5H13.75C15.25 2.5 16.25 3.5 16.25 5V8.5" stroke={active ? "white" : "#292D32"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M20.66 17.5298H8.25" stroke={active ? "white" : "#292D32"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>

    )
}

export const HeartIcon = ({ active }: SvgProps) => {
    return (
        <Svg width="23" height="21" viewBox="0 0 23 21" fill="none" >
            <Path d="M12.12 19.3101C11.78 19.4301 11.22 19.4301 10.88 19.3101C7.98 18.3201 1.5 14.1901 1.5 7.1901C1.5 4.1001 3.99 1.6001 7.06 1.6001C8.88 1.6001 10.49 2.4801 11.5 3.8401C12.51 2.4801 14.13 1.6001 15.94 1.6001C19.01 1.6001 21.5 4.1001 21.5 7.1901C21.5 14.1901 15.02 18.3201 12.12 19.3101Z" stroke={active ? "white" : "black"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}

export const ProfileIcon = ({ active }: SvgProps) => {
    return (
        <Svg width="24" height="25" viewBox="0 0 24 25" fill="none" >
            <Path d="M12 12.5C14.7614 12.5 17 10.2614 17 7.5C17 4.73858 14.7614 2.5 12 2.5C9.23858 2.5 7 4.73858 7 7.5C7 10.2614 9.23858 12.5 12 12.5Z" stroke={active ? "white" : "black"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M20.59 22.5C20.59 18.63 16.74 15.5 12 15.5C7.26003 15.5 3.41003 18.63 3.41003 22.5" stroke={active ? "white" : "black"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}

export const CartIcon = ({ active }: SvgProps) => {
    return (
        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
            <Path d="M6.25 6.39143V5.5831C6.25 3.7081 7.75833 1.86643 9.63333 1.69143C11.8667 1.47476 13.75 3.2331 13.75 5.42476V6.57476" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M7.49998 18.3332H12.5C15.85 18.3332 16.45 16.9915 16.625 15.3582L17.25 10.3582C17.475 8.32484 16.8916 6.6665 13.3333 6.6665H6.66664C3.10831 6.6665 2.52498 8.32484 2.74998 10.3582L3.37498 15.3582C3.54998 16.9915 4.14998 18.3332 7.49998 18.3332Z" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M12.9129 10.0002H12.9204" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M7.07878 10.0002H7.08626" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}

export const MinusIcon = () => {
    return (
        <Svg width="10" height="3" viewBox="0 0 10 3" fill="none" >
            <Path d="M1.02258 1.5H8.97753" stroke="black" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}

export const PlusIcon = () => {
    return (
        <Svg width="10" height="9" viewBox="0 0 10 9" fill="none" >
            <Path d="M5.00006 0.522524V8.47748" stroke="black" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M1.02258 4.5H8.97753" stroke="black" strokeWidth="1.05" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}

export const CameraIcon = ({ active, style }: SvgProps) => {
    return (
        <Svg style={style} width="14" height="14" viewBox="0 0 14 14" fill="none" >
            <Path d="M3.94335 12.8332H10.0567C11.6667 12.8332 12.3084 11.8473 12.3842 10.6457L12.6875 5.82734C12.7692 4.56734 11.7659 3.49984 10.5 3.49984C10.1442 3.49984 9.81752 3.29567 9.65418 2.98067L9.23418 2.13484C8.96585 1.604 8.26585 1.1665 7.67085 1.1665H6.33502C5.73418 1.1665 5.03418 1.604 4.76585 2.13484L4.34585 2.98067C4.18252 3.29567 3.85585 3.49984 3.50002 3.49984C2.23418 3.49984 1.23085 4.56734 1.31252 5.82734L1.61585 10.6457C1.68585 11.8473 2.33335 12.8332 3.94335 12.8332Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M6.125 4.6665H7.875" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M7.00002 10.5002C8.04419 10.5002 8.89585 9.6485 8.89585 8.60433C8.89585 7.56016 8.04419 6.7085 7.00002 6.7085C5.95585 6.7085 5.10419 7.56016 5.10419 8.60433C5.10419 9.6485 5.95585 10.5002 7.00002 10.5002Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}

export const ScanIcon = ({ active, style }: SvgProps) => {
    return (
        <Svg style={style} width="14" height="14" viewBox="0 0 14 14" fill="none" >
            <Path d="M1.16669 5.24984V3.7915C1.16669 2.339 2.33919 1.1665 3.79169 1.1665H5.25002" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M8.75 1.1665H10.2083C11.6608 1.1665 12.8333 2.339 12.8333 3.7915V5.24984" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M12.8333 9.3335V10.2085C12.8333 11.661 11.6608 12.8335 10.2083 12.8335H9.33331" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M5.25002 12.8333H3.79169C2.33919 12.8333 1.16669 11.6608 1.16669 10.2083V8.75" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M9.91665 5.5415V8.45817C9.91665 9.62484 9.33331 10.2082 8.16665 10.2082H5.83331C4.66665 10.2082 4.08331 9.62484 4.08331 8.45817V5.5415C4.08331 4.37484 4.66665 3.7915 5.83331 3.7915H8.16665C9.33331 3.7915 9.91665 4.37484 9.91665 5.5415Z" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M11.0834 7H2.91669" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>

    )
}

export const CloseIcon = ({ active, style }: SvgProps) => {
    return (
        <Svg style={style} width="18" height="18" viewBox="0 0 18 18" fill="none" >
            <Path d="M3.75073 3.75L14.25 14.2493" stroke="#191A1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M3.75003 14.2493L14.2493 3.75" stroke="#191A1D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}

export const BagIcon = ({ active, style }: SvgProps) => {
    return (
        <Svg style={style} width="12" height="12" viewBox="0 0 12 12" fill="none">
            <Path d="M3.75 3.83476V3.34976C3.75 2.22476 4.655 1.11976 5.78 1.01476C7.12 0.88476 8.25 1.93976 8.25 3.25476V3.94476" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M4.50004 11H7.50004C9.51004 11 9.87004 10.195 9.97504 9.215L10.35 6.215C10.485 4.995 10.135 4 8.00004 4H4.00004C1.86504 4 1.51504 4.995 1.65004 6.215L2.02504 9.215C2.13004 10.195 2.49004 11 4.50004 11Z" stroke="white" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M7.74774 6H7.75223" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M4.24725 6H4.25174" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}

export const FavoriteIcon = () => {
    return (
        <Svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <Path d="M2.22534 6.9541L5.70164 10.2197L5.70165 10.2197C5.79621 10.3086 5.84349 10.353 5.89594 10.3733C5.9629 10.3992 6.0371 10.3992 6.10406 10.3733C6.15651 10.353 6.20379 10.3086 6.29836 10.2197L9.77466 6.9541C10.7527 6.0353 10.8715 4.5233 10.0489 3.46303L9.89423 3.26367C8.91014 1.99529 6.93481 2.20801 6.24333 3.65683C6.14566 3.86148 5.85434 3.86148 5.75667 3.65683C5.06519 2.20801 3.08986 1.99529 2.10577 3.26367L1.95109 3.46303C1.12847 4.5233 1.24725 6.03529 2.22534 6.9541Z" stroke="white" strokeWidth="0.865385" />
        </Svg>
    )
}

export const UserIcon2 = () => {
    return (
        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <Path d="M10 10.0003C12.3012 10.0003 14.1667 8.13485 14.1667 5.83366C14.1667 3.53247 12.3012 1.66699 10 1.66699C7.69885 1.66699 5.83337 3.53247 5.83337 5.83366C5.83337 8.13485 7.69885 10.0003 10 10.0003Z" stroke="#A0A0A0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M17.1583 18.3333C17.1583 15.1083 13.95 12.5 10 12.5C6.05001 12.5 2.84167 15.1083 2.84167 18.3333" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}

export const CardIcon = () => {
    return (
        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <Path d="M1.66663 7.08789H18.3333" stroke="#A0A0A0" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M5 13.7539H6.66667" stroke="black" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M8.75 13.7539H12.0833" stroke="black" strokeWidth="1.25" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M5.36663 2.9209H14.625C17.5916 2.9209 18.3333 3.65423 18.3333 6.57923V13.4209C18.3333 16.3459 17.5916 17.0792 14.6333 17.0792H5.36663C2.40829 17.0876 1.66663 16.3542 1.66663 13.4292V6.57923C1.66663 3.65423 2.40829 2.9209 5.36663 2.9209Z" stroke="black" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}

export const LocationIcon = () => {
    return (
        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <Path d="M10 11.1912C11.436 11.1912 12.6 10.0272 12.6 8.59121C12.6 7.15527 11.436 5.99121 10 5.99121C8.56408 5.99121 7.40002 7.15527 7.40002 8.59121C7.40002 10.0272 8.56408 11.1912 10 11.1912Z" stroke="#A0A0A0" strokeWidth="1.5" />
            <Path d="M3.01663 7.07533C4.65829 -0.141339 15.35 -0.133006 16.9833 7.08366C17.9416 11.317 15.3083 14.9003 13 17.117C11.325 18.7337 8.67496 18.7337 6.99163 17.117C4.69163 14.9003 2.05829 11.3087 3.01663 7.07533Z" stroke="black" strokeWidth="1.5" />
        </Svg>
    )
}

export const SecurityIcon = () => {
    return (
        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <Path d="M17.425 9.26658C17.425 13.3416 14.4666 17.1582 10.425 18.2749C10.15 18.3499 9.84995 18.3499 9.57495 18.2749C5.53328 17.1582 2.57495 13.3416 2.57495 9.26658V5.60824C2.57495 4.92491 3.09163 4.14991 3.7333 3.89158L8.37494 1.9916C9.41661 1.5666 10.5916 1.5666 11.6333 1.9916L16.275 3.89158C16.9083 4.14991 17.4333 4.92491 17.4333 5.60824L17.425 9.26658Z" stroke="#A0A0A0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M10 10.4163C10.9205 10.4163 11.6667 9.67015 11.6667 8.74967C11.6667 7.8292 10.9205 7.08301 10 7.08301C9.07957 7.08301 8.33337 7.8292 8.33337 8.74967C8.33337 9.67015 9.07957 10.4163 10 10.4163Z" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M10 10.416V12.916" stroke="black" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}

export const NotificationIcon = () => {
    return (
        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <Path d="M10.0166 2.4248C7.25828 2.4248 5.01662 4.66647 5.01662 7.4248V9.83314C5.01662 10.3415 4.79995 11.1165 4.54162 11.5498L3.58328 13.1415C2.99162 14.1248 3.39995 15.2165 4.48328 15.5831C8.07495 16.7831 11.95 16.7831 15.5416 15.5831C16.55 15.2498 16.9916 14.0581 16.4416 13.1415L15.4833 11.5498C15.2333 11.1165 15.0166 10.3415 15.0166 9.83314V7.4248C15.0166 4.6748 12.7666 2.4248 10.0166 2.4248Z" stroke="#575757" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" />
            <Path d="M11.5583 2.66621C11.3 2.59121 11.0333 2.53288 10.7583 2.49954C9.95831 2.39954 9.19164 2.45788 8.47498 2.66621C8.71664 2.04954 9.31664 1.61621 10.0166 1.61621C10.7166 1.61621 11.3166 2.04954 11.5583 2.66621Z" stroke="#191A1D" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M12.5167 15.8838C12.5167 17.2588 11.3917 18.3838 10.0167 18.3838C9.33339 18.3838 8.70006 18.1005 8.25006 17.6505C7.80006 17.2005 7.51672 16.5671 7.51672 15.8838" stroke="#191A1D" strokeWidth="1.5" strokeMiterlimit="10" />
        </Svg>

    )
}

export const GlobeIcon = () => {
    return (
        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <Path d="M9.99996 18.3337C14.6023 18.3337 18.3333 14.6027 18.3333 10.0003C18.3333 5.39795 14.6023 1.66699 9.99996 1.66699C5.39759 1.66699 1.66663 5.39795 1.66663 10.0003C1.66663 14.6027 5.39759 18.3337 9.99996 18.3337Z" stroke="#404040" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M6.66667 2.5H7.5C5.875 7.36667 5.875 12.6333 7.5 17.5H6.66667" stroke="#575757" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M12.5 2.5C14.125 7.36667 14.125 12.6333 12.5 17.5" stroke="#575757" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M2.5 13.3333V12.5C7.36667 14.125 12.6333 14.125 17.5 12.5V13.3333" stroke="#575757" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M2.5 7.5C7.36667 5.875 12.6333 5.875 17.5 7.5" stroke="#575757" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}

export const LogoIcon = () => {
    return (
        <Svg width="32" height="32" viewBox="0 0 32 32" fill="none" >
            <Path fillRule="evenodd" clipRule="evenodd" d="M4.79999 0H27.2L32 8V30.4C32 31.2837 31.2837 32 30.4 32H1.6C0.716344 32 0 31.2837 0 30.4V8L4.79999 0ZM2.79886 8H29.2011L25.8411 2.4H6.15888L2.79886 8ZM8 12.4C8.66272 12.4 9.2 12.9373 9.2 13.6C9.2 17.3555 12.2445 20.4 16 20.4C19.7555 20.4 22.8 17.3555 22.8 13.6C22.8 12.9373 23.3373 12.4 24 12.4C24.6627 12.4 25.2 12.9373 25.2 13.6C25.2 18.681 21.081 22.8 16 22.8C10.919 22.8 6.8 18.681 6.8 13.6C6.8 12.9373 7.33728 12.4 8 12.4Z" fill="white" />
        </Svg>
    )
}

export const InfoCircleIcon = () => {
    return (
        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <Path d="M9.99996 18.3337C14.5833 18.3337 18.3333 14.5837 18.3333 10.0003C18.3333 5.41699 14.5833 1.66699 9.99996 1.66699C5.41663 1.66699 1.66663 5.41699 1.66663 10.0003C1.66663 14.5837 5.41663 18.3337 9.99996 18.3337Z" stroke="#A0A0A0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M10 6.66699V10.8337" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M9.99536 13.333H10.0028" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}

export const PhoneIcon = () => {
    return (
        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <Path d="M18.3083 15.2753C18.3083 15.5753 18.2416 15.8837 18.1 16.1837C17.9583 16.4837 17.775 16.767 17.5333 17.0337C17.125 17.4837 16.675 17.8087 16.1666 18.017C15.6666 18.2253 15.125 18.3337 14.5416 18.3337C13.6916 18.3337 12.7833 18.1337 11.825 17.7253C10.8666 17.317 9.90829 16.767 8.95829 16.0753C7.99996 15.3753 7.09163 14.6003 6.22496 13.742C5.36663 12.8753 4.59163 11.967 3.89996 11.017C3.21663 10.067 2.66663 9.11699 2.26663 8.17533C1.86663 7.22533 1.66663 6.31699 1.66663 5.45033C1.66663 4.88366 1.76663 4.34199 1.96663 3.84199C2.16663 3.33366 2.48329 2.86699 2.92496 2.45033C3.45829 1.92533 4.04163 1.66699 4.65829 1.66699C4.89163 1.66699 5.12496 1.71699 5.33329 1.81699C5.54996 1.91699 5.74163 2.06699 5.89163 2.28366L7.82496 5.00866C7.97496 5.21699 8.08329 5.40866 8.15829 5.59199C8.23329 5.76699 8.27496 5.94199 8.27496 6.10033C8.27496 6.30033 8.21663 6.50033 8.09996 6.69199C7.99163 6.88366 7.83329 7.08366 7.63329 7.28366L6.99996 7.94199C6.90829 8.03366 6.86663 8.14199 6.86663 8.27533C6.86663 8.34199 6.87496 8.40033 6.89163 8.46699C6.91663 8.53366 6.94163 8.58366 6.95829 8.63366C7.10829 8.90866 7.36663 9.26699 7.73329 9.70033C8.10829 10.1337 8.50829 10.5753 8.94163 11.017C9.39163 11.4587 9.82496 11.867 10.2666 12.242C10.7 12.6087 11.0583 12.8587 11.3416 13.0087C11.3833 13.0253 11.4333 13.0503 11.4916 13.0753C11.5583 13.1003 11.625 13.1087 11.7 13.1087C11.8416 13.1087 11.95 13.0587 12.0416 12.967L12.675 12.342C12.8833 12.1337 13.0833 11.9753 13.275 11.8753C13.4666 11.7587 13.6583 11.7003 13.8666 11.7003C14.025 11.7003 14.1916 11.7337 14.375 11.8087C14.5583 11.8837 14.75 11.992 14.9583 12.1337L17.7166 14.092C17.9333 14.242 18.0833 14.417 18.175 14.6253C18.2583 14.8337 18.3083 15.042 18.3083 15.2753Z" stroke="#A0A0A0" strokeWidth="1.5" strokeMiterlimit="10" />
        </Svg>
    )
}

export const ChevronRightIcon = () => {
    return (
        <Svg width="8" height="13" viewBox="0 0 8 13" fill="none">
            <Path d="M1.33331 11.5L6.33331 6.5L1.33331 1.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}

export const LoginFacebookIcon = ({ style }: SvgProps) => {
    return (
        <Svg style={style} width="24" height="24" viewBox="0 0 24 24" fill="none">
            <G clipPath="url(#clip0_7551_4)">
                <Path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#3577E5" />
                <Path d="M13.12 19.1199V12.6399H15.28L15.6 10.0799H13.12V8.47988C13.12 7.75988 13.36 7.27988 14.4 7.27988H15.76V4.95988C15.52 4.95988 14.72 4.87988 13.84 4.87988C11.92 4.87988 10.56 6.07988 10.56 8.23988V10.0799H8.40002V12.6399H10.56V19.1199H13.12Z" fill="white" />
            </G>
            <Defs>
                <ClipPath id="clip0_7551_4">
                    <Rect width="24" height="24" fill="white" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}

export const LoginGoogleIcon = ({ style }: SvgProps) => {
    return (
        <Svg style={style} width="24" height="24" viewBox="0 0 24 24" fill="none" >
            <Path d="M24.0001 12.27C24.0001 11.48 23.9286 10.73 23.806 10H12.2606V14.51H18.8711C18.5748 15.99 17.7063 17.24 16.419 18.09V21.0899H20.3628C22.6719 18.9999 24.0001 15.92 24.0001 12.27Z" fill="#4285F4" />
            <Path d="M12.2606 24C15.571 24 18.3398 22.92 20.3628 21.09L16.419 18.09C15.3156 18.81 13.9158 19.25 12.2606 19.25C9.06269 19.25 6.35515 17.14 5.38453 14.29H1.31812V17.38C3.33089 21.3 7.46882 24 12.2606 24Z" fill="#34A853" />
            <Path d="M5.38442 14.2901C5.12899 13.5701 4.99617 12.8001 4.99617 12.0001C4.99617 11.2001 5.13921 10.4301 5.38442 9.7101V6.62012H1.31801C0.480203 8.24011 0 10.0601 0 12.0001C0 13.9401 0.480203 15.7601 1.31801 17.3801L5.38442 14.2901Z" fill="#FBBC05" />
            <Path d="M12.2606 4.74997C14.0691 4.74997 15.6834 5.35997 16.9605 6.54997L20.4548 3.12998C18.3398 1.18999 15.571 0 12.2606 0C7.46882 0 3.33089 2.69999 1.31812 6.61997L5.38453 9.70995C6.35515 6.85997 9.06269 4.74997 12.2606 4.74997Z" fill="#EA4335" />
        </Svg>
    )
}

export const LoginAppleIcon = ({ style }: SvgProps) => {
    return (
        <Svg style={style} width="17" height="20" viewBox="0 0 17 20" fill="none" >
            <Path fillRule="evenodd" clipRule="evenodd" d="M11.1102 3.13044C11.8537 2.26612 12.2097 1.13434 12.0947 0C9.93042 0.0185714 7.61328 2.72714 8.16185 4.57143C9.30064 4.51573 10.3666 3.99475 11.1102 3.13044ZM13.6118 10.8976C13.4971 9.23487 14.3164 7.64631 15.7376 6.77571C15.7173 6.74931 15.6981 6.71999 15.6787 6.69039C15.653 6.65113 15.6269 6.61135 15.5976 6.57714C15.497 6.44384 15.3877 6.31738 15.2704 6.19857C13.902 4.82088 11.8336 4.41319 10.0447 5.16857C9.07105 5.5247 8.68156 5.7189 8.28789 5.72779C7.89198 5.73673 7.49183 5.55825 6.48899 5.16857C5.59636 4.81047 4.60694 4.77411 3.69042 5.06571C1.59968 5.77818 0.152023 7.6901 0.0332801 9.89571C-0.137335 12.143 0.350654 14.3913 1.43757 16.3657C1.99825 17.5015 2.7634 18.5243 3.69471 19.3829C4.33654 19.9886 5.27062 20.169 6.09185 19.8457C6.28643 19.7846 6.47723 19.7121 6.66328 19.6286C7.834 19.0509 9.20685 19.0509 10.3776 19.6286C11.5828 20.3374 13.1313 19.9886 13.9161 18.8314C14.8102 17.8055 15.5276 16.6382 16.039 15.3771C16.0994 15.2237 16.1528 15.0676 16.2055 14.9133C16.2313 14.8378 16.257 14.7627 16.2833 14.6886C14.756 14.0213 13.7264 12.5603 13.6118 10.8976Z" fill="black" />
        </Svg>
    )
}

export const CheckMarkIcon = () => {
    return (
        <Svg width="11" height="8" viewBox="0 0 11 8" fill="none">
            <Path d="M1.11111 3.99995L3.88889 6.77772L9.44445 1.22217" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}

export const MailIcon = () => {
    return (
        <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" >
            <Path d="M14.1667 17.0832H5.83333C3.33333 17.0832 1.66667 15.8332 1.66667 12.9165V7.08317C1.66667 4.1665 3.33333 2.9165 5.83333 2.9165H14.1667C16.6667 2.9165 18.3333 4.1665 18.3333 7.08317V12.9165C18.3333 15.8332 16.6667 17.0832 14.1667 17.0832Z" stroke="#A0A0A0" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
            <Path d="M14.1667 7.5L11.5583 9.58333C10.7 10.2667 9.29166 10.2667 8.43333 9.58333L5.83333 7.5" stroke="#A0A0A0" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
        </Svg>
    )
}