export default function Navbar({ variant = "primary", orientation = "center" }) {
    const justifyClasses = {
        start: "justify-start",
        center: "justify-center",
        around: "justify-around",
        between: "justify-between",
        evenly: "justify-evenly",
        end: "justify-end",
    }

    return (
        <nav className="">
            <ul className={`bg-${variant} text-white flex gap-10 
            ${justifyClasses[orientation]} px-4 py-2`}>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
    )
}