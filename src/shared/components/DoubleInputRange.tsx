const DoubleInputRange = ({
    min,
    max,
    value,
    onChange,
  }: {
    min: number;
    max: number;
    value: [number, number];
    onChange: (value: [number, number]) => void;
  }) => {
    const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newMin = parseInt(e.target.value);
      if (!isNaN(newMin) && newMin <= value[1]) {
        onChange([newMin, value[1]]);
      }
    };
  
    const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newMax = parseInt(e.target.value);
      if (!isNaN(newMax) && newMax >= value[0]) {
        onChange([value[0], newMax]);
      }
    };
  
    return (
      <div className="flex items-center gap-2 w-full">
        <input
          type="number"
          value={value[0]}
          onChange={handleMinChange}
          min={min}
          max={max}
          className="w-full border p-1 text-sm"
        />
        <span>-</span>
        <input
          type="number"
          value={value[1]}
          onChange={handleMaxChange}
          min={min}
          max={max}
          className="w-full border p-1 text-sm"
        />
      </div>
    );
  };

  export default DoubleInputRange;