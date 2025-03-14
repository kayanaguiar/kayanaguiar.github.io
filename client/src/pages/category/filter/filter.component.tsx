import { useState } from "react";
import Button from "../../../components/common/button/button.component";
import { Size } from "../../../types/size-type";
import styles from "./filter.module.scss";
import { Dress } from "../../../types/dress-type";
import { Category } from "../../../types/category-type";
import RangeSlider from "../../../components/common/rangeBtn/rangeInput";

const colors = [
  { name: "green", hex: "#00C12B" },
  { name: "red", hex: "#F50606" },
  { name: "yellow", hex: "#F5DD06" },
  { name: "orange", hex: "#F57906" },
  { name: "lightblue", hex: "#06CAF5" },
  { name: "blue", hex: "#063AF5" },
  { name: "purple", hex: "#7D06F5" },
  { name: "pink", hex: "#F506A4" },
  { name: "white", hex: "#FFFFFF" },
  { name: "black", hex: "#000000" },
];
const dress = ["Casual", "Formal", "Party", "Gym"];
const category = ["T-Shirts", "Shorts", "Shirts", "Hoodie", "Jeans"];

export interface PriceRange{
  min: number,
  max: number
}
interface FilterProps {
  toggleFilters: () => void;
  onApplyFilters: (filters: {
    price: PriceRange;
    dress: Dress | null;
    category: Category | null;
    size: Size[];
    color: string[];
  }) => void;
}

function Filter({ toggleFilters, onApplyFilters }: FilterProps) {
  const [dressFilter, setDressFilter] = useState<Dress | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<Category | null>(null);
  const [sizeFilter, setSizeFilter] = useState<Size[]>([]);
  const [colorFilter, setColorFilter] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  

  const handleDressFilter = (selectedDress: Dress) => {
    setDressFilter(selectedDress);
    
  };

  const handleCategoryFilter = (selectedCategory: Category) => {
    setCategoryFilter(selectedCategory);
    console.log(selectedCategory)
  };

  const handleSizeFilter = (selectedSize: Size) => {
    setSizeFilter((prev) => {
      const updatedSizes = prev.includes(selectedSize)
        ? prev.filter((item) => item !== selectedSize)
        : [...prev, selectedSize];

      console.log("Updated size filter:", updatedSizes);
      return updatedSizes;
    });
  };

  const handleColorFilter = (selectedColor: string) => {
    setColorFilter((prev) =>
      prev.includes(selectedColor)
        ? prev.filter((item) => item !== selectedColor)
        : [...prev, selectedColor]
    );
  };

  const applyFilters = () => {
    onApplyFilters({
      price: priceRange,
      dress: dressFilter,
      category: categoryFilter,
      size: sizeFilter,
      color: colorFilter,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <div className={styles.title}>
          <h2>Filters</h2>
          <button onClick={toggleFilters}>
            <img src="/assets/images/icons/close.svg" alt="close button" />
          </button>
        </div>
        <div>
          <ul className={styles.list}>
          {category.map((element, index) => (
                <li key={index} className={styles.item}>
                    <label htmlFor={element}>
                    <p>{element}</p>
                    <span>
                        <img
                        src="/assets/images/icons/arrows/arrow-grey.svg"
                        alt="arrow icon"
                        />
                    </span>
                    <input
                        type="radio"
                        id={element} 
                        name="category"
                        value={element}
                        checked={categoryFilter === element} 
                        onChange={() => handleCategoryFilter(element as Category)} 
                    />
                    </label>
                </li>
                ))}
          </ul>
        </div>
        <div className={styles.priceWrapper}>
          <h4 className={styles.title}>
            Price<span></span>
          </h4>
          <div className="range-container">
            <RangeSlider
              max={1000}
              min={0}
              step={10}
              values={priceRange} 
              onChange={setPriceRange} 
              />
          </div>
        </div>
        <div className={styles.colors}>
          <h4 className={styles.title}>
            Colors<span></span>
          </h4>
          <div className={styles.colorWrapper}>
            {colors.map(({ name, hex }, index) => (
              <div key={index} className={styles.colorItem}>
                <input
                  type="checkbox"
                  id={name}
                  name="color"
                  value={name}
                  className={styles.hiddenCheckbox}
                  onChange={() => handleColorFilter(name)}
                />
                <label
                  htmlFor={name}
                  style={{ backgroundColor: hex }}
                  className={styles.colorLabel}
                ></label>
              </div>
            ))}
          </div>
        </div>
        <div className={styles.sizeWrapper}>
          <h4 className={styles.title}>
            Size<span></span>
          </h4>
          <div className={styles.sizes}>
            {Object.entries(Size).map(([key, value], index) => (
              <label key={index} htmlFor={key} className={styles.sizeItem}>
                <input
                  id={key}
                  type="checkbox"
                  value={key}
                  name="size"
                  className={styles.sizeHiddenCheckbox}
                  onChange={(e) =>
                    handleSizeFilter(Size[e.target.value as keyof typeof Size])
                  }
                />
                {value}
              </label>
            ))}
          </div>
        </div>
        <div>
          <h4 className={styles.title}>
            Dress<span></span>
          </h4>
          <ul className={styles.list}>
            {dress.map((element, index) => (
              <li
                key={index}
                className={styles.item}
              >
                <label htmlFor={element}>
                    <p>{element}</p>
                    <span>
                        <img
                        src="/assets/images/icons/arrows/arrow-grey.svg"
                        alt="arrow icon"
                        />
                    </span>
                    <input
                        type="radio"
                        id={element} 
                        name="category"
                        value={element}
                        checked={dressFilter === element} 
                        onChange={() => handleDressFilter(element as Dress)}
                    />
                    </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Button
        text="Apply Filter"
        type="button"
        btnStyle="black2"
        onClick={applyFilters}
      />
    </div>
  );
}

export default Filter;
