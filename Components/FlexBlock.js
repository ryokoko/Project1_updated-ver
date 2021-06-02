import styled from 'styled-components';

import Flex from './Flex';


const FlexBlock = styled(Flex)`
    @media (min-width: 768px) {
        flex-direction: row;
    }
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export default FlexBlock;