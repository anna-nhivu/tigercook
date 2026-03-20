function Slider({ className = "", value = 50, onChange, min = 0, max = 100, step = 1, ...props }) {
  return (
    <div className={`relative flex w-full items-center ${className}`.trim()}>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange?.(Number(e.target.value))}
        className="h-4 w-full cursor-pointer appearance-none rounded-full bg-gray-200 accent-[#FF7A00] [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#FF7A00] [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:shadow-sm"
        {...props}
      />
    </div>
  );
}

export { Slider };
