import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

type Props = {
  params: { slug: string };
};

async function page({ params }: Props) {
  const page = await getPage(params.slug);

  return (
    <div>
      <h1>{page.title}</h1>

      <div className="text-xl">
        <PortableText value={page.content} />
      </div>
    </div>
  );
}

export default page;
