import React, { useState } from 'react';

const Names_Data = [
    "Aarav", "Advait", "Amruth", "Apoorva", "Arjun", "Bhavya", "Bhoomi", "Bhoomika", "Chaitanya", "Devansh", "Diya", "Esha",
    "Gautam", "Hitesh", "Ishaan", "Jhanvi", "Kabir", "Kavya", "Kushal", "Laksh", "Meera", "Nakul", "Navya", "Namitha"
    , "Omkar", "Parth", "Prisha", "Prajwal", "Rohan", "Riya", "Sahil", "Sana", "Tanmay", "Trisha", "Utkarsh",
    "Vaishnavi", "Vihaan", "Vanya", "Yash", "Zoya", "Aditya", "Ishita", "Karan", "Kiara", "Madhav",
    "Nandini", "Pranav", "Radhika", "Siddharth", "Tara", "Varun", "Vedika", "Vivaan", "Yuvraj", "Ansh"
];
const SearchFilter = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredNames = Names_Data.filter((name) =>
        name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    return (
        <div className='flex flex-col items-center min-h-screen bg-slate-50  p-10 font-sans'>
            <div className='w-full max-w-md'>
                <h2 className='text-5xl text-scale-800 mb-6 text-center font-extrabold'> SEARCH ENGINE </h2>

                {/* 4. Input Box: The Event Handler */}
                <div className="relative mb-8">
                    <input
                        type="text"
                        placeholder="Search names..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full px-5 py-3 rounded-full border border-slate-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all"
                    />
                    {/* Decorative Search Icon */}
                    <span className="absolute right-4 top-3.5 text-slate-400">
                        🔍
                    </span>
                </div>

                {/* 5. Render List: Mapping the filtered names */}
                <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
                    <div className="max-h-96 overflow-y-auto custom-scrollbar">
                        {filteredNames.length > 0 ? (
                            filteredNames.map((name, index) => (
                                <div
                                    key={index}
                                    className="px-6 py-3 border-b border-slate-50 last:border-none hover:bg-amber-50 transition-colors text-slate-700 font-medium"
                                >
                                    {name}
                                </div>
                            ))
                        ) : (
                            <div className="p-10 text-center text-slate-400 italic">
                                No matching names found.
                            </div>
                        )}
                    </div>
                </div>

                {/* Counter Display */}
                <p className="mt-4 text-sm text-slate-500 text-center">
                    Showing <span className="font-bold text-amber-600">{filteredNames.length}</span> results
                </p>
            </div>
        </div>
    );
};

export default SearchFilter;
