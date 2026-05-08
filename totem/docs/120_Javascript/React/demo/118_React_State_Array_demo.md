---
title: React State 陣列物件操作練習
description: React Array State Operation Examples
---
import { useState } from 'react';


export default function List() {
//  let nextId = 3;
  
  const [name, setName] = useState('');
  const [nextId, setNextId] = useState(3);

  let initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye'},
    { id: 2, name: 'Louise Nevelson'},
  ];

  const [artists, setArtists] = useState(initialArtists);

  return (
    <>
      <h1>Add:</h1>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
     <br/> 
      <button onClick={() => {
        let currentIndex= nextId + 1;
        setArtists([
          ...artists,
          { id: currentIndex, name: name }
        ]);
        setNextId(currentIndex);
      }}>Add: Spread Operation</button> 
      <br/>
      <br/>
      <span>錯誤:若用 push 會更改既有 Array</span><br/>
      <button onClick={() => {
        artists.push({
          id: nextId++,
          name: name,
        });
      }}>Push: error</button>
      <br/>
      <br/>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>{artist.name}:{artist.id}</li>
        ))}
      </ul>
      
      
      <h1>Remove:</h1>
      
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <br/> 
      <button onClick={() => {
        setArtists(
          artists.filter(a =>
                  a.name !== name
                )
        );
      }}>Remove</button> 
      
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button onClick={() => {
              setArtists(
                artists.filter(a =>
                  a.id !== artist.id
                )
              );
            }}>
              Remove: filter
            </button>
          </li>
        ))}
      </ul>
      
    </>
  );
}
