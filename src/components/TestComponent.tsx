import * as classNames from './TestComponent.module.scss';

export const TestComponent = () => {
  return (
    <div className={classNames.test5}>
      <h1>Test Component</h1>
      <ul>
        <li className={classNames.item}>Test text 1</li>
        <li>Test text 2</li>
        <li>Test text 3</li>
        <li>Test text 4</li>
        <li>Test text 5</li>
      </ul>
    </div>
  );
}