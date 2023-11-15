import React from "react";
import TAGS from "./GlobalVar";
import Link from "next/link";
import { usePathname } from "next/navigation";

type TageMenuProps = {
  closeModal?: () => void;
};

export default function TagMenu({ closeModal }: TageMenuProps) {

  const pathname = usePathname();

  const slug = pathname.substring(1);

  return (
    <>
      <ul className="mx-5 py-10 pl-2 ">
        {TAGS.map((tags, index) => {
          const titleStyles = {
            fontSize:
              tags.title === "Getting Started" ||
              tags.title === "Introduction to GBPJPY" ||
              tags.title === "Introduction to USDCAD"
                ? ""
                : "12px",
            paddingLeft:
              tags.title === "Getting Started" ||
              tags.title === "Introduction to GBPJPY" ||
              tags.title === "Introduction to USDCAD"
                ? ""
                : "32px",
                color:
                tags.url === slug ? "blue":"",
                textDecoration:tags.url === slug ? "underline":""
          };

          return (
            <li className="aside-content my-1" key={tags.id}>
              <Link onClick={closeModal} href={tags.url} style={titleStyles}>
                {tags.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
