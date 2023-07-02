import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import HighlightSelectedText from '../VgHighlightSelectedText.vue';

describe('HighlightSelectedText', () => {
  it('renders properly', () => {
    const wrapper = mount(HighlightSelectedText, { props: { txt: 'Hello Vitest' } });
    expect(wrapper.text()).toContain('Hello Vitest');
  });
});
