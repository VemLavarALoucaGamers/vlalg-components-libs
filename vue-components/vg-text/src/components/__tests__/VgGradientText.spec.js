import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import GradientText from '../GradientText.vue';

describe('GradientText', () => {
  it('renders properly', () => {
    const wrapper = mount(GradientText, { props: { txt: 'Hello Vitest' } });
    expect(wrapper.text()).toContain('Hello Vitest');
  });
});
