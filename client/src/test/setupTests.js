import userEvent from '@testing-library/user-event';
import { render } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
global.React = React;
global.render = render;
global.userEvent = userEvent;
