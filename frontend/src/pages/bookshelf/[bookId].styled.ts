import styled from 'styled-components';
import Image from 'next/image';

export const Container = styled.div`
`;
export const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const BookInfo = styled.div`
    color: var(--BG_GRAY1);
    width: 65%;
`;

export const BookTitle = styled.div`
    color: var(--BG_GRAY1);
    font-size: 4rem;
    font-weight: 700;
    margin-bottom: 1.6rem;
`;
export const SmallInfo = styled.div`
    color: var(--BG_GRAY1);
    font-size: 2rem;
    font-weight: 700;
`;
export const PriceContainer = styled.div`
    display: flex;
    gap: 1.2rem;
    margin: 2.3rem 0;
`;
export const InfoText = styled.div`

`;
export const InfoTitle = styled.div`
    font-size: 1.6rem;
    font-weight: 700;
    margin-bottom: 1.6rem;
`;
export const InfoContent = styled.div`
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 160%;
    text-align: justify;
    overflow: hidden;
    margin-bottom: 1.6rem;
`;
export const MoreInfoBtn = styled.button`
    font-size: 1.6rem;
    font-weight: 700;
    margin-left: auto;
    display: flex;
    color: var(--BG_GRAY1);
    background-color: transparent;
`;

export const ReviewContainer = styled.div`
    display: flex;
    color: var(--BG_GRAY1);
    font-size: 2rem;
    font-weight: 700;
    margin-top: 6rem;
`;