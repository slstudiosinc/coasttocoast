# Storybook Examples

<pre>
//How to add Figma file to story
export const myStory = () => <Button>Hello, World!</Button>myStory.story = {
parameters: {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/.....'
  }
}
}
</pre>

<pre>{`
/* eslint-disable import/no-anonymous-default-export */

import React from 'react';
// import { withDesign } from 'storybook-addon-designs'

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Primary',
};
Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/n8pYqn2jKPnBTc5yUMg4hU/Design-System?node-id=11%3A6',
  },
}


export const HeroPrimary = Template.bind({});
HeroPrimary.args = {
  primary: true,
  label: 'Hero',
};
HeroPrimary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/n8pYqn2jKPnBTc5yUMg4hU/Design-System?node-id=11%3A6',
  },
}

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};
Secondary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/n8pYqn2jKPnBTc5yUMg4hU/Design-System?node-id=11%3A6',
  },
}


export const HolidayRed = Template.bind({});
HolidayRed.args = {
  label: 'Holiday Red',
};
HolidayRed.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/n8pYqn2jKPnBTc5yUMg4hU/Design-System?node-id=11%3A6',
  },
}

`}
</pre>

<pre>{`
import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['btn bold', `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
  
};



Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: 'medium',
  onClick: undefined,
};

`}
</pre>

<pre>{`
.storybook-button {
	font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
	font-weight: 700;
	border: 0;
	border-radius: 3em;
	cursor: pointer;
	display: inline-block;
	line-height: 1;
}
.storybook-button--primary,
.btn {
	display: flex;
	justify-content: center;
	align-items: center;
	width: auto;
	min-width: 150px;
	border-radius: 30px;
	border-width: 1px;
	border-style: solid;
	font-size: 12px;
	font-family: AktivGrotesk-Regular, Helvetica, sans-serif;
	text-align: center;
	text-transform: uppercase;
	transition: all 0.2s ease;
	letter-spacing: 0.72px;
	line-height: 1;
	padding: 12px;
	cursor: pointer;
	background-color: #5a5a5a;
	color: #fff;
}
.storybook-button--secondary {
	color: #333;
	background-color: transparent;
	box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
}

.btn--max-width {
	width: 100%;
	max-width: 160px;
}

/* 
.storybook-button--x-small {
	font-size: 10px;
	padding: 10px 16px;
}

.storybook-button--small {
	font-size: 12px;
	padding: 10px 16px;
}

.storybook-button--medium {
	font-size: 14px;
	padding: 11px 20px;
}
.storybook-button--large {
	font-size: 16px;
	padding: 12px 24px;
} */

`}
</pre>

<style>
pre{
  color:#fff;
}
</style>
