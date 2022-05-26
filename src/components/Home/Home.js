import React from 'react';

const Home = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold uppercase text-center mt-10">I grow by helping people in need.</h1>
            <div class="flex justify-center mt-5">
                <div class="mb-3 xl:w-96">
                    <div class="input-group relative flex items-stretch w-full mb-4">
                        <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon3"/>
                            <button class="btn inline-block px-6 py-2 border-2 border-blue-600 bg-[#3F90FC] text-white font-medium text-xs leading-tight uppercase rounded  focus:outline-none focus:ring-0 transition duration-150 ease-in-out" type="button" id="button-addon3">Search</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;