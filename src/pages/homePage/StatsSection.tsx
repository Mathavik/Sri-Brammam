import React from "react";
import { Award, BookOpen, Users } from "lucide-react";

const StatsSection: React.FC = () => {
  return (
    <div className="w-full bg-[#E9E4E1] py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-3 text-center items-center">
        
        {/* Item 1 */}
        <div className="flex flex-col items-center gap-2">
          <div className="border-2 border-[#B12A1C] rounded-full p-4">
            <Award className="text-[#B12A1C]" size={28} />
          </div>
          <h2 className="text-[#B12A1C] text-2xl font-semibold">27+</h2>
          <p className="text-black text-sm">ஆண்டுகள்</p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center gap-2">
          <div className="border-2 border-[#B12A1C] rounded-full p-4">
            <BookOpen className="text-[#B12A1C]" size={28} />
          </div>
          <h2 className="text-[#B12A1C] text-2xl font-semibold">150+</h2>
          <p className="text-black text-sm">வெளியீடுகள்</p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center gap-2">
          <div className="border-2 border-[#B12A1C] rounded-full p-4">
            <Users className="text-[#B12A1C]" size={28} />
          </div>
          <h2 className="text-[#B12A1C] text-2xl font-semibold">5000+</h2>
          <p className="text-black text-sm">வாசகர்கள்</p>
        </div>

      </div>
    </div>
  );
};

export default StatsSection;