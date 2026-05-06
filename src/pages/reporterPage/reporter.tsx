import React, { useState } from 'react';

// Define the data interfaces
interface TeamMember {
    id: string | number;
    name: string;
    phone: string;
    destination: string;
    imageUrl: string;
}

interface TeamData {
    senior: TeamMember[];
    junior: TeamMember[];
}

interface ReporterProps {
    reportersData?: TeamData;
    writersData?: TeamData;
}

export const Reporter: React.FC<ReporterProps> = ({
    reportersData,
    writersData
}) => {
    const [activeTab, setActiveTab] = useState<'reporter' | 'writer'>('reporter');

    // Fallback sample data with custom color-matching assets
    const defaultReporterData: TeamData = {
        senior: [
            { id: 1, name: 'A. Karthik', phone: '+91 98765 43210', destination: 'Chief Reporter', imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&h=150&q=80' },
            { id: 2, name: 'M. Selvam', phone: '+91 98765 43211', destination: 'Senior Correspondent', imageUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&h=150&q=80' }
        ],
        junior: [
            { id: 3, name: 'P. Arul', phone: '+91 98765 43212', destination: 'Field Reporter', imageUrl: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=150&h=150&q=80' },
            { id: 4, name: 'K. Devi', phone: '+91 98765 43213', destination: 'Junior Reporter', imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80' }
        ]
    };

    const defaultWriterData: TeamData = {
        senior: [
            { id: 11, name: 'V. Sundar', phone: '+91 98765 43220', destination: 'Chief Writer', imageUrl: 'https://images.unsplash.com/photo-1489980557514-251d61e3e6d6?auto=format&fit=crop&w=150&h=150&q=80' }
        ],
        junior: [
            { id: 12, name: 'R. Priya', phone: '+91 98765 43221', destination: 'Staff Writer', imageUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&h=150&q=80' }
        ]
    };

    const currentData = activeTab === 'reporter'
        ? (reportersData || defaultReporterData)
        : (writersData || defaultWriterData);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-10 min-h-screen mt-14 md:mt-40">

            {/* Tab Switcher / Control Section - Styled with Primary Theme Colors */}
            <div className="flex justify-center mb-12">
                <div className="flex bg-[#F0ECE1] p-1.5 rounded-full border border-[#D9CEB2] shadow-sm w-full max-w-md">

                    <button
                        onClick={() => setActiveTab('reporter')}
                        className={`flex-1 py-3 px-6 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === 'reporter'
                            ? 'bg-[#932725] text-white shadow-md'
                            : 'text-[#6C5F47] hover:text-[#932725]'
                            }`}
                    >
                        Reporter
                    </button>

                    <button
                        onClick={() => setActiveTab('writer')}
                        className={`flex-1 py-3 px-6 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === 'writer'
                            ? 'bg-[#932725] text-white shadow-md'
                            : 'text-[#6C5F47] hover:text-[#932725]'
                            }`}
                    >
                        Writer
                    </button>
                </div>
            </div>

            {/* Main Content Sections */}
            <div className="space-y-16">

                {/* Senior Section: Centered cards in a single row using Flexbox */}
                <section>
                    {/* Optional Section Header Title */}
                    {/* <h2 className="text-2xl font-bold text-[#1D1917] mb-6 flex items-center gap-3">
                        <span className="w-2.5 h-6 bg-[#D95D39] rounded-full inline-block"></span>
                        Senior {activeTab === 'reporter' ? 'Reporters' : 'Writers'}
                    </h2> */}

                    {currentData.senior.length > 0 ? (
                        <div className="flex flex-wrap justify-center gap-6">
                            {currentData.senior.map((member) => (
                                <div
                                    key={member.id}
                                    className="bg-white w-72 rounded-2xl p-6 shadow-sm border border-[#F4EFEB] hover:shadow-md hover:border-[#D95D39]/30 transition-all duration-300 flex flex-col items-center text-center group"
                                >
                                    <div className="relative w-20 h-20 mb-5">
                                        <img
                                            src={member.imageUrl}
                                            alt={member.name}
                                            className="w-full h-full object-cover rounded-full border-2 border-[#D95D39]/30 shadow-sm"
                                        />
                                        <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-[#408B67] border-2 border-white rounded-full"></span>
                                    </div>

                                    <h3 className="text-lg font-bold text-[#1D1917] mb-1 group-hover:text-[#932725] transition-colors duration-200">
                                        {member.name}
                                    </h3>

                                    <span className="inline-block bg-[#FDF7EE] text-[#932725] text-xs font-semibold px-3 py-1 rounded-full border border-[#E9DFCE] mb-3">
                                        {member.destination}
                                    </span>

                                    <p className="text-sm text-[#6C5F47]">
                                        {member.phone}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-10 text-[#6C5F47] bg-white rounded-xl border border-dashed border-[#CBBBA6]">
                            No senior personnel available.
                        </div>
                    )}
                </section>

                {/* Junior Section: Responsive multi-column grid */}
                <section>
                    {/* <h2 className="text-2xl font-bold text-[#1D1917] mb-6 flex items-center gap-3">
                        <span className="w-2.5 h-6 bg-[#CBBBA6] rounded-full inline-block"></span>
                        Junior {activeTab === 'reporter' ? 'Reporters' : 'Writers'}
                    </h2> */}

                    {currentData.junior.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {currentData.junior.map((member) => (
                                <div
                                    key={member.id}
                                    className="bg-white rounded-2xl p-6 shadow-sm border border-[#F4EFEB] hover:shadow-md hover:border-[#CBBBA6] transition-all duration-300 flex flex-col items-center text-center group"
                                >
                                    <div className="w-20 h-20 mb-5 relative">
                                        <img
                                            src={member.imageUrl}
                                            alt={member.name}
                                            className="w-full h-full object-cover rounded-full border-2 border-[#E9DFCE] shadow-sm"
                                        />
                                    </div>

                                    <h3 className="text-lg font-bold text-[#1D1917] mb-1 group-hover:text-[#932725] transition-colors duration-200">
                                        {member.name}
                                    </h3>

                                    <span className="inline-block bg-[#F5F1EB] text-[#6C5F47] text-xs font-semibold px-3 py-1 rounded-full mb-3">
                                        {member.destination}
                                    </span>

                                    <p className="text-sm text-[#A69B88]">
                                        {member.phone}
                                    </p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-10 text-[#6C5F47] bg-white rounded-xl border border-dashed border-[#CBBBA6]">
                            No junior personnel available.
                        </div>
                    )}
                </section>

            </div>
        </div>
    );
};