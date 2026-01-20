---
title: Array State Changing
description: Array State Changing
---
import React, { useState } from "react";
import { useForm } from '@site/src/hooks/useForm';



export default function BucketList() {
  let nextId = 0;
  
  const initialList = [
      { id: 0, title: 'Eggs', checked: false },
      { id: 1, title: 'Milk', checked: false },
      { id: 2, title: 'Bread flour', checked: true },
  ];

  const [name, setName] = useState('');
  const [artists, setArtists] = useState([]);
  const [list, setList] = useState(
    initialList
  );

  const [checkList, setCheckList] = useState(
    initialList
  );
  
  function handleCheck(itemId, nextCheck) {
    // js 的 map 不用像 java 需要 collect ??
    setCheckList(checkList.map((item, i) => {
      if (item.id === itemId) {
        return { ...item, checked: nextCheck };
      } else {
        return item;
      }
    }));
  }
  
 function ItemList({ items, onToggle }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.checked}
              
              
              onChange={e => {
                onToggle(
                  item.id,
                  e.target.checked
                );
              }}
              
              
            />
            {item.title}
          </label>
        </li>
      ))}
    </ul>
  );
}

  return (
    <>
      <h2>Append to list:針對陣列,修改陣列元素數量</h2>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={(e) => {
        setArtists([
          ...artists,
          { id: nextId++, name: name }
        ]);
      }}>Add</button>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}</li>
        ))}
      </ul>
      
      <hr/>
      
      <h2>Check List: 一陣列的物件,修改物件內容</h2>
      * check list vs remove 使用相同資料集，但不同 state，所以能不連動各自運作
      <ItemList
        items={checkList}
        onToggle={handleCheck} />
      <hr/>
      
      <h2>Remove from list:針對陣列,修改陣列元素數量</h2>
        filter 會回傳新物件 
      <ul>
           {list.map(ingredient => (
              <li key={ingredient.id}>{ingredient.title} 
                  <button onClick={
                         (e) => {
                            setList(
                                list.filter(item =>
                                  item.id !== ingredient.id
                                )
                            );
                         }
                    } >
                     Delete
                  </button > 
              </li>
            ))}
      </ul>
    </>
  );
}

