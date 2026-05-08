import React, { useEffect, useState } from 'react';
import api from '../../api';
import { useLocation } from "react-router-dom";
// Interfaces
interface ReporterItem {
    id: number;
    name: string;
    status: boolean;
    created_at: string;
}

interface ReporterPersonItem {
    id: number;
    name: string;
    describe_role?: string;
    address?: string;
    pincode?: string;
    mobile?: string;
    email?: string;
    profile_image?: string;
    status?: boolean;
    reporter?: {
        id: number;
        name: string;
        status: boolean;
        created_at: string;
    };
}

interface TeamMember {
    id: string | number;
    name: string;
    mobile: string;
    email: string;
    destination: string;
    address: string;
    pincode: string;
    imageUrl: string;
    reporterName: string;
}

interface TeamData {
    senior: TeamMember[];
    junior: TeamMember[];
}

interface ReporterProps {
    reportersData?: TeamData;
}

export const Reporter: React.FC<ReporterProps> = () => {
    const [selectedReporterId, setSelectedReporterId] = useState<number | null>(null);
    const [reporters, setReporters] = useState<ReporterItem[]>([]);
    const [personsData, setPersonsData] = useState<TeamData>({ senior: [], junior: [] });
    const [loading, setLoading] = useState(false);
const location = useLocation();
    useEffect(() => {
        const fetchReporters = async () => {
            setLoading(true);
            try {
                const response = await api.get('/reporters');
                const data: ReporterItem[] = response.data.data || [];
                setReporters(data);
if (data.length > 0) {

    const activeTab = location.state?.activeTab;

    if (activeTab === "writer") {

        const writerReporter = data.find(
            (item) => item.name.toLowerCase().includes("writer")
        );

        setSelectedReporterId(
            writerReporter ? writerReporter.id : data[0].id
        );

    } else {

        setSelectedReporterId(data[0].id);

    }
}            } catch (error) {
                console.error("Error:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchReporters();
    }, []);

    useEffect(() => {
        if (selectedReporterId === null) return;
        const fetchReporterPersons = async () => {
            setLoading(true);
            try {
                const response = await api.get(`/reporter-persons?reporter_id=${selectedReporterId}`);
                const data: ReporterPersonItem[] = response.data.data || [];
                const members: TeamMember[] = data.map((item) => ({
                    id: item.id,
                    name: item.name,
                    mobile: item.mobile || 'N/A',
                    email: item.email || 'N/A',
                    destination: item.describe_role || 'Reporter Person',
                    address: item.address || 'No address',
                    pincode: item.pincode || 'N/A',
                    imageUrl: item.profile_image || `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=random`,
                    reporterName: item.reporter?.name || 'No role'
                }));
                setPersonsData({ senior: members, junior: [] });
            } catch (error) {
                setPersonsData({ senior: [], junior: [] });
            } finally {
                setLoading(false);
            }
        };
        fetchReporterPersons();
    }, [selectedReporterId]);

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8 md:py-10 min-h-screen mt-12 md:mt-52">
            
            {/* Tab Switcher - Modified for Mobile Wrapping */}
            <div className="flex justify-center mb-8 md:mb-12">
                <div className="flex flex-wrap md:flex-nowrap justify-center gap-2 bg-[#F0ECE1] p-2 rounded-2xl md:rounded-full border border-[#D9CEB2] shadow-sm w-full max-w-3xl">
                    {reporters.map((reporter) => (
                        <button
                            key={reporter.id}
                            onClick={() => setSelectedReporterId(reporter.id)}
                            className={`
                                /* Mobile: Two buttons per row, Tablet/Desktop: Auto width */
                                flex-grow md:flex-none 
                                min-w-[45%] sm:min-w-[140px] md:min-w-[120px] 
                                
                                py-2.5 md:py-3 px-4 
                                rounded-xl md:rounded-full 
                                text-xs md:text-sm font-bold 
                                transition-all duration-300 capitalize 
                                ${
                                    selectedReporterId === reporter.id
                                        ? 'bg-[#932725] text-white shadow-md'
                                        : 'text-[#6C5F47] hover:bg-white/50'
                                }
                            `}
                        >
                            {reporter.name}
                        </button>
                    ))}
                </div>
            </div>

            {loading ? (
                <div className="flex flex-col items-center justify-center py-20">
                    <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#932725] mb-4"></div>
                    <p className="text-[#932725] font-bold animate-pulse">தகவல்கள் சேகரிக்கப்படுகின்றன...</p>
                </div>
            ) : (
                <div className="space-y-10">
                    <section>
                        {personsData.senior.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                                {personsData.senior.map((member) => (
                                    <div
                                        key={member.id}
                                        className="bg-white rounded-2xl p-5 md:p-6 shadow-sm border border-[#F4EFEB] flex flex-col items-center text-center group hover:shadow-md transition-shadow"
                                    >
                                        <div className="relative w-20 h-20 mb-4">
                                            <img
                                                src={member.imageUrl}
                                                alt={member.name}
                                                className="w-full h-full object-cover rounded-full border-2 border-[#D95D39]/20"
                                            />
                                            <span className="absolute bottom-1 right-1 w-3.5 h-3.5 bg-[#408B67] border-2 border-white rounded-full"></span>
                                        </div>

                                        <h3 className="text-base md:text-lg font-bold text-[#1D1917] group-hover:text-[#932725] line-clamp-1">
                                            {member.name}
                                        </h3>

                                        <span className="bg-[#FDF7EE] text-[#932725] text-[10px] md:text-xs font-bold px-3 py-1 rounded-full my-2">
                                            {member.destination}
                                        </span>

                                        <div className="space-y-1">
                                            <p className="text-xs md:text-sm text-[#6C5F47] font-medium">
                                                {member.mobile}
                                            </p>
                                            <p className="text-[11px] md:text-xs text-[#A69B88]">
                                                Pincode: {member.pincode}
                                            </p>
                                            <p className="text-[11px] md:text-xs text-[#932725]/70 font-semibold mt-2 uppercase tracking-wider">
                                                {member.reporterName}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16 border-2 border-dashed border-[#D9CEB2] rounded-2xl bg-gray-50">
                                <p className="text-[#6C5F47] font-medium">தகவல்கள் எதுவும் இல்லை (No Data Found)</p>
                            </div>
                        )}
                    </section>
                </div>
            )}
        </div>
    );
};