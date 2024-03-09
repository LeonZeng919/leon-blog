import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, modDatetime, description, coverImage } =
    frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium decoration-dashed hover:underline",
  };

  return (
    <li className="my-6">
      <a
        href={href}
        className="inline-block text-lg decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {coverImage && (
          <img
            src={coverImage}
            className=" h-[200px] w-[800px] rounded-t-2xl object-cover"
          />
        )}
        <div className=" rounded-b-2xl border-2 border-x  border-b border-t-0 border-gray-500 p-2">
          {secHeading ? (
            <h2 {...headerProps} className="font-medium text-skin-accent  ">
              {title}
            </h2>
          ) : (
            <h3 {...headerProps} className="font-medium text-skin-accent   ">
              {title}
            </h3>
          )}
          <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} />
          <p>{description}</p>
        </div>
      </a>
    </li>
  );
}
