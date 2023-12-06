import React from 'react';
import { Container }  from './styles';

type ContentProps = {
    children: React.ReactElement;
};

const Content = ({ children }: ContentProps) => (
    <Container>
        {children}
    </Container>
);

export default Content;