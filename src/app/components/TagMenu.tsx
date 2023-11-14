import React from "react";
import TAGS from "./GlobalVar";
import Link from "next/link";

type TageMenuProps= {
    closeModal?: () => void;
}

export default function TagMenu({closeModal}:TageMenuProps) {
  return (
    <>
      <ul className="mx-5 py-10">
        {TAGS.map((tags, index) => {
          return (
            <li className="aside-content my-1" key={tags.id}>
              <Link onClick={closeModal} href={tags.url}>{tags.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
