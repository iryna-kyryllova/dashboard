import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, ButtonStyle } from 'shared/ui/Button/Button'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { classNames } from 'shared/lib/classNames/classNames'
import classes from './Sidebar.module.scss'

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()

  const toggleCollapsed = () => {
    setCollapsed((prevState) => !prevState)
  }

  return (
    <aside
      data-testid='sidebar'
      className={classNames(classes.sidebar, [], { [classes.collapsed]: collapsed })}>
      <Button data-testid='sidebar-toggle' buttonStyle={ButtonStyle.TEXT} onClick={toggleCollapsed}>
        {collapsed ? t('Open') : t('Close')}
      </Button>
      <ThemeSwitcher />
      <LangSwitcher />
      <h2>{t('Sidebar')}</h2>
    </aside>
  )
}
