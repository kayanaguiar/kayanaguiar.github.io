import styles from "./rangeBtn.module.scss";

interface RangeSliderProps {
  min: number;
  max: number;
  step?: number;
  values: { min: number; max: number };
  onChange: (values: { min: number; max: number }) => void;
}

function RangeSlider({
  min,
  max,
  step = 10,
  values,
  onChange,
}: RangeSliderProps) {
  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMin = Math.min(Number(event.target.value), values.max - step);
    onChange({ ...values, min: newMin });
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newMax = Math.max(Number(event.target.value), values.min + step);
    onChange({ ...values, max: newMax });
  };

  return (
    <div className={styles.rangeSlider}>
      <div className={styles.sliderContainer}>
        <div className={styles.sliderTrack} />
        <div
          className={styles.sliderActive}
          style={{
            left: `${((values.min - min) / (max - min)) * 100}%`,
            right: `${100 - ((values.max - min) / (max - min)) * 100}%`,
          }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={values.min}
          onChange={handleMinChange}
          className={styles.thumb}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={values.max}
          onChange={handleMaxChange}
          className={styles.thumb}
        />
      </div>
      <div className={styles.values}>
        <span>${values.min}</span> - <span>${values.max}</span>
      </div>
    </div>
  );
}

export default RangeSlider;
