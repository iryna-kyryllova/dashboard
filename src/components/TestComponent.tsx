import * as classes from './TestComponent.module.scss';

export const TestComponent = () => {
  return (
    <div className={classes.test5}>
      <h1>Test Component</h1>
      <ul>
        <li className={classes.item}>Test text 1</li>
        <li>Test text 2</li>
        <li>Test text 3</li>
        <li>Test text 4</li>
        <li>Test text 5</li>
      </ul>
    </div>
  );
}