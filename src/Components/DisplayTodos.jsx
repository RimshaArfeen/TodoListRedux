
import React from 'react';

const DisplayTodos =  ({ item, DelButton, editButton, DelAll }) => {
  return (
    <section className=' my-6 px-8'>
      <div className="mx-auto flex flex-col md:flex-row w-full p-4 md:w-3/4 bg-purple-100 rounded-lg rounded-b-none ">
        <div className="mx-auto w-[90%] flex-grow ">
          <h2 className="title-font mb-2 text-lg font-medium text-gray-900">{item}</h2>
        </div>
        <div className="flex justify-end items-center">
          <button onClick={DelButton} className="mx-2 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-red-200 text-red-700 md:h-12 md:w-12">
            <span><i class="ri-delete-bin-7-fill text-lg md:text-xl"></i></span>
          </button>
          <button onClick={editButton} className="mx-2 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-green-200 text-green-700 md:h-12 md:w-12">
            <span><i class="ri-pencil-fill text-lg md:text-xl"></i></span>
          </button>
        </div>
      </div>
      <hr className=" bg-purple-700 text-purple-800 h-[0.1rem] rounded-full  w-full md:w-3/4 mx-auto"/>
      
    </section>
  );
}

export default DisplayTodos;
