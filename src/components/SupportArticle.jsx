export default function SupportArticle({ title, question, date }) {

    return <div className="flex mb-4 w-full border border-black p-1 justify-between items-end transition hover:bg-[#FF6161] cursor-pointer">
        <p className="flex flex-col">
            <span className="text-lg">{title}</span>
            <span>{question}</span>
        </p>
        <p className="ml-4">{date}</p>
    </div>
}