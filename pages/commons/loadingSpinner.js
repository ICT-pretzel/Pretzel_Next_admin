"use client";

import { Loading } from '../../styles/commons/commonsCSS';
import '../../styles/commons/loadingSpinner.css';

const LoadingSpinner = () => {
    return (
        <Loading>
            <span className="loader"></span>
        </Loading>
    );
}

export default LoadingSpinner;
