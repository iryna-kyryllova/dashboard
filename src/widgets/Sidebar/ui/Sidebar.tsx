import { useState } from "react";
import { Button, ButtonStyle } from "shared/ui/Button/Button";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";
import { LangSwitcher } from "widgets/LangSwitcher";
import { classNames } from "shared/lib/helpers/classNames";
import * as classes from "./Sidebar.module.scss";

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(prevState => !prevState);
  }

  return (
    <aside className={classNames(classes.sidebar, [], {[classes.collapsed]: collapsed})}>
      <Button buttonStyle={ButtonStyle.TEXT} onClick={toggleCollapsed}>Close</Button>
      <ThemeSwitcher />
      <LangSwitcher />
      <h2>Sidebar</h2>
    </aside>
  )
}
