import React, { useState } from 'react';
import styles from './Product.module.css';

const Product = ({ product }) => {
    const [isDeleted, setIsDeleted] = useState(false);
    const [isTachado, setIsTachado] = useState(false);

    const tachar = () => {
        setIsTachado(true);
    };

    const deleteProduct = () => {
        setIsDeleted(true);
    };

    if (isDeleted) {
        return null;
    }

    return (
        <div className={styles.Product}>
            <p className={isTachado ? styles.tachado : null}>{product}</p>
            <button onClick={tachar}>Tachar</button> 
            <button onClick={deleteProduct}>Borrar</button>
        </div>
    );
};

export default Product;
