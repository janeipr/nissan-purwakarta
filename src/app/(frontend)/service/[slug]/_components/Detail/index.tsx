import Markdown from "markdown-to-jsx";

export default function DetailService({ content }: { content: Service }) {
  return (
    <section
      id="Details"
      className="container max-w-[1130px] mx-auto mt-[150px]"
    >
      <div className="flex gap-[50px] justify-between">
        <div className="flex flex-col gap-5">
          <h2 className="font-extrabold text-2xl">{content.subtitle}</h2>
          <div className="description flex flex-col gap-4 font-medium text-lg leading-[38px]">
            <Markdown>{content.description}</Markdown>
          </div>
          <div className="flex gap-4">
            {content.tags.map((tag, i) => (
              <div
                key={i}
                className="flex items-center gap-1 bg-[#F4F5F8] p-[8px_10px] rounded-[12px]"
              >
                <p className="font-semibold">#{tag}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
