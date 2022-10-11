import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import VgCircleAvatar from '../VgCircleAvatar.vue';

describe('VgCircleAvatar', () => {
  it('renders properly', () => {
    const wrapper = mount(VgCircleAvatar, { props: { txt: 'Hello Vitest' } });
    expect(wrapper.text()).toContain('Hello Vitest');
  });
});
