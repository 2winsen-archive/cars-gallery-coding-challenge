export const getMockAxios = () => ({
  interceptors: {
    response: {
      use: () => null,
      eject: () => null
    }
  }
});