'use client';
import Header from './Header'
import { UserButton, auth } from '@clerk/nextjs';
import Container from './Container';
import React, { useState, useEffect } from 'react';
import {
  collection,
  addDoc,
  getDoc,
  querySnapshot,
  query,
  onSnapshot,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { db } from '../firebaseConfig.js';


const DashboardPage = () => {
    // const { userId } = auth();
    // const [items, setItems] = useState([
    //   // { name: 'Coffee', price: 4.95 },
    //   // { name: 'Movie', price: 24.95 },
    //   // { name: 'candy', price: 7.95 },
    // ]);
    // const [newItem, setNewItem] = useState({ name: '', price: '' });
    // const [total, setTotal] = useState(0);

    // const addItem = async (e) => {
    //   e.preventDefault();
    //   if (newItem.name !== '' && newItem.price !== '') {
    //     // setItems([...items, newItem]);
    //     await addDoc(collection(db, 'items'), {
    //       name: newItem.name.trim(),
    //       price: newItem.price,
    //     });
    //     setNewItem({ name: '', price: '' });
    //     conso
    //   }
    // };
  
    // // Read items from database
    // useEffect(() => {
    //   const q = query(collection(db, 'items'));
    //   const unsubscribe = onSnapshot(q, (querySnapshot) => {
    //     let itemsArr = [];
  
    //     querySnapshot.forEach((doc) => {
    //       itemsArr.push({ ...doc.data(), id: doc.id });
    //     });
    //     setItems(itemsArr);
  
    //     // Read total from itemsArr
    //     const calculateTotal = () => {
    //       const totalPrice = itemsArr.reduce(
    //         (sum, item) => sum + parseFloat(item.price),
    //         0
    //       );
    //       setTotal(totalPrice);
    //     };
    //     calculateTotal();
    //     return () => unsubscribe();
    //   });
    // }, []);
  
    // // Delete items from database
    // const deleteItem = async (id) => {
    //   await deleteDoc(doc(db, 'items', id));
    // };
  return (
    <>

      <div className='sticky top-0 w-full z-10'>
        <Header userId={true}/>
      </div>
      <div className='md:mt-0 z-0'>
      <Container>
        <div className=' items-center justify-center text-center md:h-screen md:flex md:flex-col '>
          <div className='text-2xl font-bold md:text-8xl animate-pulse'>Thank you for pre-registrating!</div>
          <div className='text-1xl font-bold md:text-5xl'>Our team will contact you soon regarding the features that we are offering.</div>
          <div className='text-xs font-bold md:text-1xl'>Meanwhile, you can play around your profile by clicking on your profile image at the upper right corner and selecting manage account</div>
        </div>
      </Container>
      </div>

      {/* <div className='bg-slate-800 p-4 rounded-lg'>
          <form className='bg-white grid grid-cols-6 items-center text-black'>
            <input
              value={newItem.name}
              onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
              className='col-span-3 p-3 border'
              type='text'
              placeholder='Enter Item'
            />
            <input
              value={newItem.price}
              onChange={(e) =>
                setNewItem({ ...newItem, price: e.target.value })
              }
              className='col-span-2 p-3 border mx-3'
              type='number'
              placeholder='Enter $'
            />
            <button
              onClick={addItem}
              className='text-white bg-slate-950 hover:bg-slate-900 p-3 text-xl'
              type='submit'
            >
              +
            </button>
          </form>
          <ul>
            {items.map((item, id) => (
              <li
                key={id}
                className='my-4 w-full flex justify-between bg-slate-950'
              >
                <div className='p-4 w-full flex justify-between'>
                  <span className='capitalize'>{item.name}</span>
                  <span>${item.price}</span>
                </div>
                <button
                  onClick={() => deleteItem(item.id)}
                  className='ml-8 p-4 border-l-2 border-slate-900 hover:bg-slate-900 w-16'
                >
                  X
                </button>
              </li>
            ))}
          </ul>
          {items.length < 1 ? (
            ''
          ) : (
            <div className='flex justify-between p-3'>
              <span>Total</span>
              <span>${total}</span>
            </div>
          )}
        </div> */}
    </>
  )
}

export default DashboardPage