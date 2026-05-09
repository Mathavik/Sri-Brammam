import React, { useState, useEffect } from 'react';
// உங்கள் api instance-ஐ இங்கே import செய்யவும்
import api from '../../api'; 

const AboutUs = () => {
    const [aboutText, setAboutText] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAboutData = async () => {
            try {
                const response = await api.get("/global-config");
                if (response.data.success) {
                    // long_about_us ஃபீல்டை மட்டும் எடுத்து state-ல் சேமிக்கிறோம்
                    setAboutText(response.data.data.long_about_us);
                }
            } catch (error) {
                console.error("Error fetching about data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchAboutData();
    }, []);

    return (
        <div className="bg-white text-gray-800">
            <section className="py-12 flex flex-col md:flex-row items-center gap-10 max-w-8xl mx-auto px-6 md:px-12">
                
                {/* Content Area */}
                <div className="md:w-full w-full leading-relaxed">
                    <div className="bg-white p-10 md:p-12 rounded-xl shadow-sm border-l-8 border-red-700">
                        {/* <h2 className="text-2xl md:text-3xl font-bold text-red-800 mb-6">எங்களைப் பற்றி</h2> */}
                        
                        {loading ? (
                            <p className="text-gray-500 animate-pulse">Loading...</p>
                        ) : (
                            <p className="text-lg md:text-xl text-gray-700 whitespace-pre-line">
                                {aboutText || "தகவல்கள் விரைவில் பதிவேற்றப்படும்."}
                            </p>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;