import { useState } from "react";
import ProductCard from "../../../components/ui/productCard/productCard.component";
import { Product } from "../../../types/product.interface";
import styles from './categoryList.module.scss';

interface CategoryProps{
    products: Product[]
}

function CategoryList({products}: CategoryProps){

    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 9;

    const nextPage = () => {
        if (currentPage < Math.ceil(products.length / productsPerPage)) {
            setCurrentPage(currentPage + 1);
        }
        window.scrollTo(0, 0);
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
        window.scrollTo(0, 0);
    };
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)
    const totalPages = Math.ceil(products.length / productsPerPage);

    const goToPage = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        window.scrollTo(0, 0);
    };

    return(
        <>
        <section className={styles.categorySection}>
        
            {currentProducts.map((element, index) => (
                <ProductCard
                key={index}
                product={element}
                />
            ))}
        </section>
        <div className={styles.pagination}>
            <button className={styles.paginationBtns} type="button" name="previous" onClick={prevPage} disabled={currentPage === 1}>
                <img src="assets\images\icons\arrows\left-arrow.svg" alt="left arrow" />
                Previous
            </button>
            <div className={styles.pageBtnWrapper}>
                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                    key={index}
                    type="button"
                    onClick={() => goToPage(index + 1)}
                    className={currentPage === index + 1 ? styles.activePage : styles.pageBtn}
                    >
                            {index + 1}
                        </button>
                    ))}
            </div>
            <button  className={styles.paginationBtns}type="button" name="next" onClick={nextPage} disabled={currentPage === Math.ceil(products.length / productsPerPage)}>
            Next
            <img src="assets\images\icons\arrows\right-arrow.svg" alt="left arrow" />
            </button>
        </div>
        </>
    )
}

export default CategoryList;