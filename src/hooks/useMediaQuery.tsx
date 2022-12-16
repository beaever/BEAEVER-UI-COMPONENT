/**@description PC : 1279 초과, TABLET: 768 부터, MOBILE: 480 부터*/
const BreakPoint = [1279, 768, 480];

const MediaQuery = BreakPoint.map(
  (breakpoint) => `@media (max-width: ${breakpoint}px)`
  /** [사용법]
   * 
   * 1279px이하
   *  ${MediaQuery[0]} {
      background-color: red;
    }
   * 
   */
);

export default MediaQuery;
