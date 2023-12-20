"use client";

import { useState, useEffect } from "react";
import items from "../../produkter.json";
import "../../components/ItemCard/ItemCard.css";
import Link from "next/link";
import { ItemType } from "@/ItemType";

interface PageProps {
  params: {
    slug: string;
  };
}

export default function page({ params }: PageProps) {
  const [oneItem, setOneItem] = useState<ItemType>();

  useEffect(() => {
    const fetchedItem = items.find((item) => item["url-slug"] === params.slug);
    setOneItem(fetchedItem);
  }, [params.slug]);

  if (!oneItem) {
    return <div>Item not found</div>;
  }

  return (
    <div className="cardsContainer">
      <Link href="/">Back</Link>
      <div className="card">
        <img
          src={oneItem["image-url"]}
          alt={oneItem.title}
          className="cardImage"
        />
        <p className="cardTitle">{oneItem.title}</p>
        <p className="cardLabel">Description:</p>
        <p className="cardDescription">{oneItem.description}</p>
        <p className="cardLabel">Category:</p>
        <p className="cardDescription">{oneItem.category}</p>
        <p className="cardLabel">Color:</p>
        <p className="cardDescription">{oneItem.color}</p>
        <p className="cardLabel">Size:</p>
        <p className="cardDescription">{oneItem.size}</p>
        <p className="cardLabel">Brand:</p>
        <p className="cardDescription">{oneItem.brand}</p>
        <p className="cardLabel">Price:</p>
        <p className="cardDescription">{oneItem.price}</p>
      </div>
    </div>
  );
}
