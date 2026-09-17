import Image from "next/image";

export interface ConversationItem {
  image: string;
  title: string;
  desc: string;
  href: string;
}

export function ConversationGrid({ items }: { items: ConversationItem[] }) {
  return (
    <section className="bg-zinc-950 px-6 py-24 text-white md:px-12">
      <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="group relative aspect-[5/15] overflow-hidden bg-zinc-900"
          >
            <Image
              src={item.image}
              alt={item.title}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-x-0 bottom-0 bg-black/70 p-5 backdrop-blur-sm">
              <h2 className="font-display text-2xl font-semibold leading-tight">
                {item.title}
              </h2>
            </div>
            <div className="absolute inset-y-0 right-0 flex w-full translate-x-full flex-col justify-end bg-brand-950/95 p-6 text-white transition-transform duration-500 ease-out group-hover:translate-x-0 group-focus-visible:translate-x-0">
              <h2 className="font-display text-2xl font-semibold leading-tight">
                {item.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-200">
                {item.desc}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
