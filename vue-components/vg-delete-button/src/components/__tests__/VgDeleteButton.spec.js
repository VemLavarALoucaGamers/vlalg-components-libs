import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import VgDeleteButton from '../VgDeleteButton.vue';

describe('VgDeleteButton', () => {
  it('renders properly', () => {
    const wrapper = mount(VgDeleteButton, { props: { txt: 'Hello Vitest' } });
    expect(wrapper.text()).toContain('Hello Vitest');
  });
});
