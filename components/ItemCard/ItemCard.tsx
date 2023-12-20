"use client";

import { ItemType } from "../../ItemType";
import "./ItemCard.css";
import Link from "next/link";

interface ItemCardProps {
  item: ItemType;
}

export default function ItemCard({ item }: ItemCardProps) {
  return (
    <div className="card" key={item["article-number"]}>
      <img src={item["image-url"]} alt={item.title} className="cardImage" />
      <p className="cardTitle">{item.title}</p>
      <Link href="/[slug]" as={`/${item["url-slug"]}`}>
        View Details
      </Link>
    </div>
  );
}
