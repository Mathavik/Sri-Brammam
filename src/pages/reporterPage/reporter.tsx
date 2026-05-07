import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";

// API-லிருந்து வரும் தரவுகளுக்கான Interface
interface RoleItem {
    id: number;
    name: string;
    status: boolean;
    created_at: string;
}

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
}

export const Reporter: React.FC<ReporterProps> = ({ reportersData }) => {
    const location = useLocation();
    const [activeTab, setActiveTab] = useState<string>(
        location.state?.activeTab || ''
    );

    // API-லிருந்து வரும் கடொத்தகளை (Roles)
    const [availableTabs, setAvailableTabs] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);

    // API fetch செய்யும் பகுதி
    useEffect(() => {
        const fetchRoles = async () => {
            setLoading(true);
            try {
                const response = await fetch('https://pcstech.in/pcs_api/brammam/public/api/reporters');
                const result = await response.json();
                
                const roles: RoleItem[] = result.data || [];

                // Roles-க எளன்கடொத்து
                const roleNames = roles.map(role => role.name.toLowerCase());
                setAvailableTabs(roleNames);

                // அணமான tab வாணபுமப் படிஏத்து
                if (roleNames.length > 0 && !activeTab) {
                    setActiveTab(roleNames[0]);
                }
            } catch (error) {
                console.error("Error fetching roles:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchRoles();
    }, []);

    // Tab-க்கு ஏற்ற தரவைத் தேர்ந்தெடுத்தல்
    const currentTabData: TeamData = {
        senior: [{ 
            id: activeTab, 
            name: activeTab ? activeTab.charAt(0).toUpperCase() + activeTab.slice(1) : '', 
            phone: "N/A", 
            destination: "Team Member", 
            imageUrl: "https://via.placeholder.com/80?text=" + (activeTab || 'Team') 
        }],
        junior: []
    };
    const currentData: TeamData = currentTabData;

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-10 min-h-screen mt-14 md:mt-40">
            {/* Tab Switcher */}
            <div className="flex justify-center mb-12">
                <div className="flex flex-wrap gap-2 bg-[#F0ECE1] p-1.5 rounded-full border border-[#D9CEB2] shadow-sm w-full max-w-3xl justify-center">
                    {availableTabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as any)}
                            className={`flex-1 min-w-[120px] py-3 px-4 rounded-full text-sm font-semibold transition-all duration-300 capitalize ${
                                activeTab === tab ? 'bg-[#932725] text-white shadow-md' : 'text-[#6C5F47] hover:text-[#932725]'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {loading ? (
                <div className="text-center py-20 text-[#932725] font-bold">Loading Data...</div>
            ) : (
                <div className="space-y-16">
                    {/* Senior Section */}
                    <section>
                        {/* <h2 className="text-xl font-bold mb-6 text-center text-[#932725]">Senior Section</h2> */}
                        {currentData.senior.length > 0 ? (
                            <div className="flex flex-wrap justify-center gap-6">
                                {currentData.senior.map((member) => (
                                    <div key={member.id} className="bg-white w-72 rounded-2xl p-6 shadow-sm border border-[#F4EFEB] flex flex-col items-center text-center group">
                                        <div className="relative w-20 h-20 mb-5">
                                            <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover rounded-full border-2 border-[#D95D39]/30" />
                                            <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-[#408B67] border-2 border-white rounded-full"></span>
                                        </div>
                                        <h3 className="text-lg font-bold text-[#1D1917] group-hover:text-[#932725]">{member.name}</h3>
                                        <span className="bg-[#FDF7EE] text-[#932725] text-xs font-semibold px-3 py-1 rounded-full my-2">{member.destination}</span>
                                        <p className="text-sm text-[#6C5F47]">{member.phone}</p>
                                    </div>
                                ))}
                            </div>
                        ) : <div className="text-center py-10 border-dashed border-2 rounded-xl">No Seniors found.</div>}
                    </section>

                    {/* Junior Section */}
                    <section>
                        {/* <h2 className="text-xl font-bold mb-6 text-center text-[#6C5F47]">Junior Section</h2> */}
                        {currentData.junior.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {currentData.junior.map((member) => (
                                    <div key={member.id} className="bg-white rounded-2xl p-6 shadow-sm border border-[#F4EFEB] flex flex-col items-center text-center group">
                                        <img src={member.imageUrl} alt={member.name} className="w-20 h-20 rounded-full mb-5 border-2 border-[#E9DFCE]" />
                                        <h3 className="text-lg font-bold text-[#1D1917] group-hover:text-[#932725]">{member.name}</h3>
                                        <span className="bg-[#F5F1EB] text-[#6C5F47] text-xs font-semibold px-3 py-1 rounded-full my-2">{member.destination}</span>
                                        <p className="text-sm text-[#A69B88]">{member.phone}</p>
                                    </div>
                                ))}
                            </div>
                        ) : <div className="text-center py-10 border-dashed border-2 rounded-xl">No Juniors found.</div>}
                    </section>
                </div>
            )}
        </div>
    );
};