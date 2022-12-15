import { inirtialize, mswDecorator } from 'msw-storybook-addon';

// MSW 초기화 함수 실행
inirtialize();

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  // MSW 데코레이터를 전역으로 적용
  decorators: [mswDecorator],
};
