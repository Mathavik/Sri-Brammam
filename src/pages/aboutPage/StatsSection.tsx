export default function StatsSection() {
  return (
    <div className="w-full bg-white py-6 sm:py-8 md:py-10 border-t">
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center ">
        
        {/* Item 1 */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center border-2 border-red-500 rounded-full text-red-500 text-lg">
            ⭐
          </div>
          <p className="text-lg sm:text-xl font-bold text-red-600">27+</p>
          <p className="text-gray-600 text-sm sm:text-base">ஆண்டுகள்</p>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center border-2 border-red-500 rounded-full text-red-500 text-lg">
            📄
          </div>
          <p className="text-lg sm:text-xl font-bold text-red-600">150+</p>
          <p className="text-gray-600 text-sm sm:text-base">வெளியீடுகள்</p>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col items-center gap-2">
          <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center border-2 border-red-500 rounded-full text-red-500 text-lg">
            👥
          </div>
          <p className="text-lg sm:text-xl font-bold text-red-600">5000+</p>
          <p className="text-gray-600 text-sm sm:text-base">வாசகர்கள்</p>
        </div>

      </div>
    </div>
  );
}