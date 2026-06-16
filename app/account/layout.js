import SideNavigation from "@/app/_components/SideNavigation";

export default function Layou({ children }) {
    return <div className="grid md:grid-cols-[12rem_1fr] grid-cols-1 gap-12 h-full ">
        <aside>
            <SideNavigation />
        </aside>
        <div className="py-1">{children}</div>
    </div>
}