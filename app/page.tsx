"use client";

import items from "../produkter.json";
import ItemCard from "@/components/ItemCard/ItemCard";
import { ItemType } from "../ItemType";
import "../components/ItemCard/ItemCard.css";
import { useState, Fragment } from "react";

export default function Home() {
  const [searchWord, setSearchWord] = useState<string>("");

  const searchedItem = items.filter((item) => {
    return item.title.toLowerCase().includes(searchWord);
  });

  return (
    <>
      <input
        type="text"
        placeholder="Pants.."
        onChange={(e) => {
          setSearchWord(e.target.value.toLowerCase());
        }}
      />
      <div className="cardsContainer">
        {searchedItem.map((item: ItemType) => {
          return (
            <Fragment key={item["article-number"]}>
              <ItemCard item={item} />
            </Fragment>
          );
        })}
      </div>
    </>
  );
}
