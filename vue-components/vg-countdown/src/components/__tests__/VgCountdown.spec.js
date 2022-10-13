import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import VgCountdown from '../VgCountdown.vue';

describe('VgCountdown', () => {
  it('renders properly', () => {
    const wrapper = mount(VgCountdown, { props: { txt: 'Hello Vitest' } });
    expect(wrapper.text()).toContain('Hello Vitest');
  });
});
