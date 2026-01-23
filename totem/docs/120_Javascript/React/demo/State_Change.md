---
title: State Changing
description: State Changing
---
import React, { useState } from "react";

export default function BucketList() {

    const initialList = [
      { id: 0, title: 'Big Bellies', seen: false },
      { id: 1, title: 'Lunar Landscape', seen: false },
      { id: 2, title: 'Terracotta Army', seen: true },
    ];
   // 起始時以 initialList 建立 state
      const [list, setList] = useState(
        initialList
   );

   function handleToggle(artworkId, nextSeen) {
        // js 的 map 不用像 java 需要 collect ??
        setList(list.map(artwork => {
          if (artwork.id === artworkId) {
            return { ...artwork, seen: nextSeen };
          } else {
            return artwork;
          }
        }));
      }

    function ItemList({ artworks, onToggle }) {
      return (
        <ul>
          {artworks.map(artwork => (
            <li key={artwork.id}>
              <label>
                <input
                  type="checkbox"
                  checked={artwork.seen}
                  
                  
                  onChange={e => {
                    onToggle(
                      artwork.id,
                      e.target.checked
                    );
                  }}
                  
                  
                />
                {artwork.title}555
              </label>
            </li>
          ))}
        </ul>
      );
     }
  


      return (
        <>
          <h1>State Changing: Arrsy</h1>
          <h2>My list of art to see:</h2>
          <ItemList
            artworks={list}
            onToggle={handleToggle} />
        </>
      );
}

