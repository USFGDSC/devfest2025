"use client";

interface YearSelectorProps {
  years: number[];
  selectedYear: number;
  onYearSelect: (year: number) => void;
}

export function YearSelector({
  years,
  selectedYear,
  onYearSelect,
}: YearSelectorProps) {
  return (
    <div className="flex justify-center">
      <div className="flex flex-wrap justify-center gap-3">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => onYearSelect(year)}
            className={`px-6 py-3 rounded-full border-[1.5px] border-black font-bold font-product-sans text-lg transition-all duration-200 hover:scale-105 ${
              selectedYear === year
                ? "bg-black text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            {year}
          </button>
        ))}
      </div>
    </div>
  );
}
