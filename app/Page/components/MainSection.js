import styled from 'styled-components';

const MainSection = styled.section`
    background-color: white;
    border-radius: 10px;
    z-index: 10;
    position: relative;

    @media (min-width: 768px) {
        margin: 40px 8%;
    }

    @media (max-width: 768px) {
        margin: 20px;
        box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.2);
    }
`;

export default MainSection;