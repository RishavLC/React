import React from 'react';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const About = () => (
  <>
    <Title level={3}>This is the About Page</Title>
    <Paragraph>
      We are building modern web apps with React and Ant Design.
    </Paragraph>
  </>
);

export default About;
