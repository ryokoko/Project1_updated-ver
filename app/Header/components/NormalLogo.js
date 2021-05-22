import React from 'react';

import styled from 'styled-components';
import { LogoStyle, Highlight} from './LogoStyle';


const LargeLogo = styled(LogoStyle)`
    margin: 15px 4%;
`;

const NormalLogo = () => (
    <div>
        <LargeLogo>
            Rebecca <Highlight>Li</Highlight>
        </LargeLogo>
    </div>

)

export default NormalLogo;