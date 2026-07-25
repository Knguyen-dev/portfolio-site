import ReactMarkdown from "react-markdown";


export default function AboutMe({data, aboutRef}) {
    {/* About Me Section */}
    return (
    <section id="about" ref={aboutRef}>
        <header>
            <h1 className="tw-mb-2 tw-text-xl tw-font-bold">About Me</h1>
        </header>

        <div className="tw-flex tw-flex-col tw-gap-y-2 tw-text-md tw-text-slate-400">
            {data.about.map((paragraph, index) => (
            <ReactMarkdown
                key={index}
                components={{
                // Override the top-level <p> tag so it doesn't add unwanted margins
                p: ({ children }) => <p className="tw-m-0">{children}</p>,
                
                // Highlights bold terms to match the theme
                strong: ({ children }) => (
                    <strong className="tw-font-semibold tw-text-slate-200">
                    {children}
                    </strong>
                ),
                
                // Code badges for tech like `epoll`
                code: ({ children }) => (
                    <code className="tw-rounded tw-bg-[#112240] tw-px-1.5 tw-py-0.5 tw-font-mono tw-text-xs tw-text-[#64ffda]">
                    {children}
                    </code>
                ),
                
                // Styled links
                a: ({ href, children }) => (
                    <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="tw-font-medium tw-text-slate-200 tw-underline tw-decoration-[#64ffda] hover:tw-text-[#64ffda]"
                    >
                    {children}
                    </a>
                ),
                
                // Clean list formatting
                ul: ({ children }) => (
                    <ul className="tw-mt-1 tw-list-inside tw-list-disc tw-space-y-1">
                    {children}
                    </ul>
                ),
                }}
            >
                {paragraph}
            </ReactMarkdown>
            ))}
        </div>
        </section>
    );
}