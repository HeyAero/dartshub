import React from 'react';

import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
global.userEvent = userEvent;
global.React = React;