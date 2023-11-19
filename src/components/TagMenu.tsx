import React, { useEffect, useState } from "react";
import TAGS from "./GlobalVar";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Tag = {
  id: string;
  title: string;
  url: string;
};

type ClientStyles = Record<string, React.CSSProperties>;

type TageMenuProps = {
  closeModal?: (url: string) => void;
};

export default function TagMenu({ closeModal }: TageMenuProps) {
  const pathname = usePathname();
  const slug = pathname.substring(6);

  const [clientStyles, setClientStyles] = useState<ClientStyles>({});

  useEffect(() => {
    const newStyles: ClientStyles = {};
    TAGS.forEach((tags) => {
      newStyles[tags.title] = {
        fontSize:
          tags.title === "Getting Started" ||
          tags.title === "Introduction to GBPJPY" ||
          tags.title === "Introduction to USDCAD" ||
          tags.title === "Weekly Market Insight"
            ? ""
            : "12px",
        paddingLeft:
          tags.title === "Getting Started" ||
          tags.title === "Introduction to GBPJPY" ||
          tags.title === "Introduction to USDCAD" ||
          tags.title === "Weekly Market Insight"
            ? ""
            : "32px",
        color: tags.url === slug ? "blue" : "inherit",
        textDecoration: tags.url === slug ? "underline" : "none",
      };
    });
    setClientStyles(newStyles);
  }, [slug]);

  const handleLinkClick = (url:string)=>{
    if(closeModal){
      closeModal(url);
    }
  }

  return (
    <>
      <ul className="mx-5 py-10 pl-2 ">
        {TAGS.map((tags: Tag, index: number) => {
          const titleStyles = clientStyles[tags.title] || {};

          return (
            <li className="aside-content my-1" key={tags.id}>
              <Link
                onClick={(e)=> handleLinkClick(tags.url)}
                href={`/Page/${tags.url}`}
                style={titleStyles}
              >
                {tags.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
