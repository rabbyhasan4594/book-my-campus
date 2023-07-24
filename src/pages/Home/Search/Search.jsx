import React, { useState } from 'react';

const Search = () => {
    const [searchText, setSearchText] = useState("");
    return (
        <div className="  bg-cyan-600 py-10">
  
  <div className=" mx-auto  gap-2">
   
    <div className="search-box p-3 text-center">
          <input  placeholder='Search college name'
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="lg:px-40 py-3 rounded-lg"
          />{" "}
          <button className='btn' >Search</button>
        </div>
    </div>
    
  </div>

    );
};

export default Search;