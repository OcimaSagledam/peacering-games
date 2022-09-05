export default function PageWrapper({ children, padding = "p-0" }) {
    return <div className={`h-[calc(100vh-10rem)] overflow-hidden ${padding}`} style={{
        backgroundImage: "url('/paperback.jpg')",
        backgroundSize: "cover"
    }}>
        {children}
    </div>
}
